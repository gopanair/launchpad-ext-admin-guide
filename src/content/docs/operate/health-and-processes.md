---
title: Health, processes and the queue
description: What is running right now, and who may see it.
---

## Health

`GET /api/v1/system/health` answers **differently by principal**: host metrics and
a `server` block to administrators, scoped app health to everybody else.

The server block carries the version and the build revision, which is the fastest
answer to "what is this install actually running".

## Processes

Admin → Processes. Host CPU, memory and disk; every workload running, on both
backends; and who is signed in.

Two properties:

- **Sortable readings**, and it **accounts for what is not listed** rather than
  silently showing a subset.
- **A reader asks the backend's word**, never whether the backend has a row. One
  of the backends keeps its stopped entries, and a stopped entry is not a running
  workload. **Uptime is zero for anything not up.**

**A metric a backend does not measure is absent, never zero** — including one it
tried to take and could not. The shared backend reads `/proc` itself rather than
reporting a confident nought.

## The queue

Admin → Queue. Builds waiting, building, and what each one is doing. See [The
build queue](../../build/queue-and-limits/).

## Crashes and restarts

**Shared mode**: an exited process is noticed and an event written.

**Isolated mode**: the watcher decides and the supervisor acts. A workload is
restarted a **bounded** number of times and then **told that it has stopped being
restarted** — a stated verdict rather than a silent give-up.

**A workload the backend keeps killing for its memory cap is stopped rather than
restarted forever.** A restart that will fail the same way in ninety seconds is
not a recovery, and the memory tolerance counts restarts rather than sweeps.

## The platform's own voice

The platform keeps its own account of each app — the release it fetched, the
interpreter it resolved, the dependencies it repaired, the reason a start was
refused, the moment it stopped retrying.

It appears in the app's log, marked, beside the app's own lines. Both are
filterable.

**It is a stage, not a stream**: narration is stage marks, no error value reaches
it, and a failure that repeats unchanged is said once and then counted.

That is why "the app printed nothing and still will not start" is answerable: the
platform said why, in the same place.

## Both backends answer a missing workload the same way

**A reason, not an error.** Asking about a workload that is not there gets you an
explanation in an identical shape from either backend, which is what lets one
page render both.
