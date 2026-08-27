---
title: Locking and retirement
description: The administrator's stop, and why it is not a status.
---

Locking an app stops it and keeps it stopped.

## A lock is not a status

`stopped` is a status the owner controls: they stopped it, they can start it.
A **lock** is yours, and the owner cannot lift it.

- The owner may leave `stopped`.
- The owner may never leave a lock.

## What it does

**Locking stops the workload. Unlocking does not start one.** Lifting a lock
returns control; it does not resume service. Somebody still has to press start.
That is deliberate — an app locked for a reason should not come back the moment
the reason is filed away.

## Say why

A lock carries your words, and a refusal shows them. The developer hitting it
sees the message you typed, not a generic error.

**No layer of the message may be blank.** Write a sentence that tells them what
to do next.

## What it blocks

Seven enforcement points: deploying, starting, changing visibility, running
jobs, and the rest. A refusal is `409` and carries your message.

There is no way around it — no flag, no API call, no redeploy under another
name that inherits the locked app's state.

## Retirement is a lock

An app that is finished with is **locked**, not moved to some third state. One
mechanism, one list of enforcement points, one thing to reason about.

That means "retired" and "locked for cause" look the same from outside, and
your message is what distinguishes them. Write it accordingly.
