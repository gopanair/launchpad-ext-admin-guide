---
title: Ways to install
description: One box or a cluster, and which one you want.
---

Launchpad is a single Go binary that embeds its own web interface. There are
two supported ways to install it.

## One box, with Docker Compose

The whole install on one Linux machine: Launchpad, Postgres, and the apps it
runs. Apps run in **shared mode** — as processes on that machine, bound to
loopback.

This is the right choice for a team, a department, or a first install. It is
one machine to back up and one thing to upgrade.

## A cluster, with the Helm chart

`deploy/charts/launchpad/`. Apps run in **isolated mode** — one workload per
app, each in its own container with its own network policy.

Choose this when you need app-to-app isolation, when apps have different
resource profiles, or when you already run Kubernetes.

## Which mode, and can you change it

Execution mode is `shared` or `isolated` — never a backend name. An install can
offer both, and each app's *effective* mode belongs to its deployment, so a new
app's mode is decided when it is created.

See [Execution modes](../../apps/execution-modes/).

## The image

Both pull the same published image, `gopanair/launchpad`, multi-arch, **tagged
with a version and never `latest`**. Pinning is the point: an install that
follows `latest` upgrades itself at a restart you did not plan.

## What you have to provide

| | |
|---|---|
| **Postgres 17** | The schema is migrated by the binary at startup. |
| **A hostname** | Launchpad works out its own inbound address; you configure only outbound links. |
| **TLS** | Terminated in front of Launchpad, by your own proxy or ingress. |
| **An apps address** | Apps are served on a **different origin** from the platform. See [How apps are isolated](../../security/isolation/). |

## What you do not have to provide

No Docker registry for apps, no build service, no CI. Launchpad clones, builds
and runs apps itself.
