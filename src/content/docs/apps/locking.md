---
title: Locking and retirement
description: The administrator's stop, and why it is not a status.
---

Locking an app stops it and keeps it stopped.

## A lock is not a status

`stopped` is a status the owner controls: they stopped it, they can start it. A
**lock** is yours, and the owner cannot lift it.

- The owner may leave `stopped`.
- The owner may **never** leave a lock.

## What it does

**Locking stops the workload. Unlocking does not start one.** Lifting a lock
returns control; it does not resume service. Somebody still has to press start.

That is deliberate: an app locked for a reason should not come back the moment
the reason is filed away.

## Say why

A lock carries your words, and every refusal shows them — to the developer on the
app page, to the CLI, and to a visitor at the app's URL.

**No layer of the message may be blank.** Write a sentence that says what to do
next. `app_locked_message` on Admin → Messages is the install's default copy for
the visitor-facing layer.

## What it blocks

Seven enforcement points — deploying, starting, changing visibility, running
jobs, and the rest — and the list is the specification. A refusal is **409** and
carries your message.

There is no way around it: no flag, no API call, no redeploy under another name
that inherits the locked app's state.

## Retirement is a lock

An app that is finished with is **locked**, not moved to some third state. One
mechanism, one list of enforcement points, one thing to reason about.

That means "retired" and "locked for cause" look the same from outside, and
**your message is what distinguishes them**. Write it accordingly:

> Retired 2026-08. The month-end pack moved to `finance-close`. Ask
> #finance-platform if you need the old numbers.

reads very differently from

> Locked pending review — contact security.

Both are one sentence. Only one of them stops somebody filing a ticket.

## Locked apps in the estate

The [checks page](../../operate/checks/) counts locked, suspended and withheld
apps **without raising the verdict**. A locked app is a decision you made; it is
not a fault, and it does not make the app-health row read anything but `pass`.
