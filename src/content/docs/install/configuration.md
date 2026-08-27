---
title: Configuration
description: What is environment configuration and what is a runtime setting.
---

Launchpad splits its knobs in two, and the split is not arbitrary.

## Configuration is the operator's

Environment variables, read at startup. These are things about the *machine* —
where Postgres is, what port to listen on, where apps are served, where the
gallery catalog is fetched from.

They cannot be changed from the web interface, because changing where the
database is from inside the application is not a feature.

## Settings are the administrator's

Database rows, changed from the admin pages, audited. Sign-in providers, the
dependency policy, whether apps may be public, notification channels, storage
resources.

An administrator can change these without a restart and without shell access.

## Three listeners

| Port | What it serves |
|---|---|
| `:8080` | The platform — the pages you sign in to. |
| `:8081` (`APPS_PORT`) | Deployed apps. **A different origin**, on purpose. |
| `METRICS_ADDR` | The Prometheus scrape endpoint, when configured. |

The third is **absent unless configured**, and it never lives as a path on
`:8080`. On a single-origin install, an app's JavaScript would be able to read
a metrics path as the viewer — so it gets a listener of its own or none at all.

See [Telemetry](../../operate/telemetry/).

## Trusted proxies

`X-Forwarded-*` headers are believed only from a proxy you have declared
trusted. If you terminate TLS in front of Launchpad, declare it — otherwise
every client IP in your audit log is your load balancer's.

## Inbound and outbound

An install **works out its own inbound address**. You do not tell it its own
URL. What you configure is outbound links — where notifications point people,
what a link in an email says.

That is why there is no `BASE_URL` to get wrong, and why an install moved
behind a new hostname keeps working.
