---
title: Automation across the estate
description: Both kinds of automation, every schedule, and every run.
---

Admin → Automation. One page for both kinds and every background run on the
install.

The two older pages — job runs, and scheduled — redirect here.

## Two kinds, named by where the work runs

| | Scheduled task | Job |
|---|---|---|
| What runs | **An HTTP request to a path the app published**, in the app's own process | **A command, in its own container**, with its own memory limit |
| The app must be | Running | Not necessarily |
| Needs | Nothing | The isolated backend, plus `background_jobs_enabled` |
| Limits | Tight — the ceiling and the memory envelope are the boundary | Generous |

They are named by **where the work runs**, never by trigger. Both can be
scheduled; both can be run on demand.

## Provenance is shown

Where a schedule came from — `launchpad.toml` or the UI — is on the listing.

**`launchpad.toml` is optional and still the better door**: it travels with the
code and is reviewed with it. An app with no manifest still has the UI.

## The caps

| Setting | |
|---|---|
| `job_concurrency_per_app` | How many of one app's runs may be in flight. Over it, a refusal the SDK names. |
| `max_run_retries` | The ceiling on how many extra attempts an automation may ask for. **0 turns retries off everywhere.** |
| `max_scheduled_tasks_per_app` | Counted per schedule rather than per endpoint. |
| `scheduled_task_timeout_seconds` | Past this the run is a failure. |
| `scheduled_run_result_bytes` | How much of the app's response is kept. 0 stores none. |

Retention for runs and logs is in [Retention](../../config/retention/).

## The rules that keep automation honest

**A retry is opt-in, unattended-only, and never silent.** A scheduled run can
retry; one somebody started by hand does not, because they are watching. Every
retry is visible as a retry.

**Parameters are never interpolated into a command.** A parameter cannot become
part of a command line, which is what makes it safe to let somebody else supply
one.

**One claim, two tables.** A run is claimed once; there is no double execution
under contention.

**Stranded runs are reconciled.** A killed runner's run does not stay `running`
forever, and the checks page's **stuck work** row finds what the reconciler has
not.

**A skipped run is recorded; a refused one is not.** A task that could not fire —
the app was stopped, locked, or the previous run was still going — is a record
with a reason. A request refused before it was a run is not.

## An app starting its own work

An app can start a different entrypoint of **itself**, never another app, and it
**never asserts who a viewer is** — it relays a platform-signed token.

These routes take a run id, so the ordinary rule applies: an app can only reach
the runs it started.

## When automation stops

In order:

1. **The checks page** — `stuck_work` and `scheduled_tasks`.
2. **This page** — is the schedule there, is it enabled, when did it last run.
3. **The app** — is it locked, stopped, or crash-looping.
4. **The dials** — is `max_run_retries` zero, is job concurrency at one.
