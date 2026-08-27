---
title: Reachability
description: Checking that a public app is actually reachable, and what happens when it is not.
---

If your install is public, Launchpad checks that a public app actually answers
from outside before treating it as published.

## Why

An app marked public that nobody outside can reach is a false statement in your
own records. Worse, it is one people act on — "it is published" is taken to
mean "it is serving".

## The rules

**Silence is not a verdict, and `unknown` is not `not_ok`.** A gate opens only
on an explicit `ok`. A probe that timed out tells you nothing and is not
treated as failure.

**A probe is never usage.** It does not count toward [quiet](../../apps/quiet/),
and a sleeping app is **never woken to be probed**. A round happens because the
install is public, not because an app is awake.

**Recognition may only subtract.** The check can withhold a verdict; it can
never decide a response on the app's behalf.

## The latch

A failing verdict **latches**, and only a *change of visibility* clears it. The
platform never rewrites `apps.visibility`, so clearing the latch is the owner's
action, not a background process's.

## Two verdicts, and the stricter wins

The origin has a verdict and the app has one. **The origin's is durable and the
stricter of the two applies.**

A failing origin is told to you **once, on the transition** — not repeatedly —
and it **suspends nothing**. A reachability problem is an information problem;
it does not take your install down.

## When it fires

Almost always infrastructure, not code: DNS, a firewall, a proxy that does not
forward, TLS. It is worth checking from outside yourself before asking a
developer to look at their app.

## Turning it off

The endpoint is compiled in and nothing overrides it. **Unreachable is inert** —
an install that cannot reach the checking service is not degraded by it.
