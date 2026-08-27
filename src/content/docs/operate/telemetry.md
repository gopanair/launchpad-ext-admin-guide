---
title: Telemetry
description: Metrics and traces out, and the rules that keep them from becoming a liability.
---

## Exported, never resident

Launchpad does not keep a metrics database. It exports to a collector you run,
and holds nothing itself.

**Never load-bearing.** Telemetry failing does not degrade the install.

**Absent configuration means absent.** No collector configured, no telemetry —
not a buffer filling up in memory.

## The scrape endpoint is not on the platform's origin

When you set `METRICS_ADDR`, the Prometheus endpoint gets a **listener of its
own**. It is never a path on `:8080`.

The reason is single-origin installs: a metrics path on the platform's origin
could be read by an app's JavaScript **as the viewer**. So it is a separate
listener, or nothing.

## The collector credential never reaches a workload

`OTEL_EXPORTER_OTLP_HEADERS` is never logged, never returned by an API, and
never inherited by a child process. An app cannot read your collector
credential.

## Names and attributes are a contract

Metric names and attributes are stable. Dashboards built against them keep
working.

**Cardinality is budgeted, and the budget is code.** That is what stops a label
carrying an app id, a user id or a URL from turning your metrics bill into an
incident. Where a label would be unbounded, it is not there.

`kind` is a metric label. **A connection id never is.**

## What to watch

The things worth alerting on are the ones that are not visible from a health
check: builds queued and not starting, workloads restarting repeatedly,
notification sends failing, and the reachability verdicts changing.
