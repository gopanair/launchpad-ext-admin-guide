---
title: Runner images
description: What an isolated install needs per language family, and the declaration that must be true.
---

In isolated mode, a workload runs in a container built from a **runner image** —
one per language family, never per framework and never per app.

```
RUNNER_IMAGE_PYTHON=ghcr.io/example/launchpad-runner-python:1
RUNNER_IMAGE_NODE=ghcr.io/example/launchpad-runner-node:1
RUNNER_IMAGE_GO=ghcr.io/example/launchpad-runner-go:1
RUNNER_IMAGE_R=ghcr.io/example/launchpad-runner-r:1
RUNNER_IMAGE_STATIC=ghcr.io/example/launchpad-runner-static:1
```

## A missing image is refused by name

An app in a family with no image configured is refused **at start, naming the
family** — not left to fail as `ImagePullBackOff` twenty seconds later in a place
only you can see.

The checks page has a **runner images** row: `warn` for a family with no image,
and `warn` for one pinned to `latest` or to no tag at all.

## What an image carries is a set

```
RUNNER_PYTHON_VERSION=3.12,3.11
RUNNER_NODE_VERSION=22,20
RUNNER_R_VERSION=4.5,4.4
```

Comma-separated, **the first entry is the default**, and **every entry is
required**: an image that declares a series the platform cannot then build
against is refused at start, naming the missing one.

That is the rule that keeps the declaration honest. An image that says it carries
Python 3.11 and does not is a deploy that fails at the worst moment, in the
container, where nobody is watching.

## Tag them

Never `latest`. An image tag that moves is an install that changes what it runs
at a restart you did not plan — the same argument as the platform image itself.

`RUNNER_VERSION` is the runner **contract** version the platform expects those
images to speak. It exists only for the window in which the two halves of a
release are upgraded in some order, which is why it is configuration and not a
dial.

## Rebuilding them

When you add a language series, rebuild the image, push it under a new tag, and
change the variable. The platform then offers what the image declares.

There is no partial upgrade: an image is a set, and the set is what an app can be
placed on.

## The static runner

Static apps and rendered documents are served by a subcommand of the platform's
own binary, so `RUNNER_IMAGE_STATIC` is a thin image around it. One
implementation serves both modes — the shared launcher runs the same subcommand.
