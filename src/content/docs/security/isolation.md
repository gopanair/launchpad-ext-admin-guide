---
title: How apps are isolated
description: Origin isolation, what it protects, and what it does not.
---

## Apps are on a different origin

The platform serves on one address; apps are served on another. That is not a
deployment convenience — it is the boundary that stops an app's JavaScript from
reading the platform as the person looking at it.

An install can be single-origin, and some are. Understand what you give up:
on a single-origin install, an app's JavaScript runs on the same origin as the
platform's own pages.

## What decides a response is the platform's

Not the path. Which responses are the platform's own is decided **by resolving
the app**, never by matching a path prefix — because a path rule is one clever
URL away from being wrong.

## Framing

Who may frame an app is the install's answer, and the default is the install
itself. **Empty is not "anyone"** — an empty list means nobody, not
unrestricted.

## The environment

**Never `os.Environ()`.** A child process gets the variables the platform chose
to give it and nothing else. An app does not inherit the platform's own
environment, so a database password in Launchpad's environment is not in every
app's.

## On disk

Per-app secrecy is enforced by **a directory the app does not own**, never by a
mode bit on one it does. An app cannot widen its own permissions by changing a
file it controls.

## Cookies

Every cookie the platform sets is named `launchpad_*`. Any other cookie name on
an app's origin is the app's own. That is how the two are told apart with no
ambiguity.

## The thing this does not cover

**In [shared mode](../../apps/execution-modes/), app-to-app isolation is an
accepted risk.** Apps are processes on one machine.

Origin isolation is about browsers. It says nothing about one app's process
reaching another's files or sockets. Never present it as if it did — if you
need app-to-app isolation, that is isolated mode.

## Proxies

`X-Forwarded-*` is believed only from a proxy you declared trusted. Declare
yours, or every client address you log is your load balancer's.
