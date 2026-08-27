---
title: Execution modes
description: Shared and isolated, what each gives you, and the risk one of them does not cover.
---

An app runs in one of two modes. The words are `shared` and `isolated` — never
a backend name, because which technology implements a mode is an implementation
detail and the mode is the contract.

## Shared

Apps run as processes on the Launchpad machine, managed by PM2, **bound to
`127.0.0.1`**. Reached only through the platform's proxy.

- Cheap. No cluster, no images.
- Fast to start, so sleeping and waking is quick.
- Per-app secrecy on disk is enforced by a directory the app does not own —
  not by a mode bit on one it does.

## Isolated

One workload per app, each in its own container with its own network policy.

- App-to-app network isolation.
- Per-app resource limits that are actually enforced.
- A workload's identity is **issued by the cluster and verified**, never minted
  into a pod spec — which is what lets the kubelet restart a container in place.
- A crashing workload is restarted a bounded number of times and then told that
  it has stopped being restarted, rather than looping forever.

## The effective mode belongs to the deployment

An install can offer both. Each app's mode is decided when it is created, by one
helper on all three creation paths, and the *effective* mode is a property of the
deployment rather than of the install.

A refused create writes nothing — there is no half-created app to clean up.

## The risk you should know about

**In shared mode, app-to-app isolation is an accepted risk.** Apps run as
processes on one machine. Origin isolation stops an app's *JavaScript* from
reading the platform as the viewer; it does nothing about one app's process
reaching another's.

Do not cite origin isolation as evidence that shared-mode apps are isolated from
each other. If you need that, you need isolated mode.

## Restarts

Configuration reaches a workload **at start**. One verb starts a workload and
the platform supplies the whole description, so a start always carries the
configuration as it is now — there is no drift between what an app was given
and what it is configured with.

A start that produced no process is not a start, and is reported as a failure
rather than as a success with nothing behind it.
