---
title: Troubleshooting
description: The failures that are yours rather than a developer's.
---

## Nobody can sign in

Sign in as the [built-in administrator](../../identity/local/) — that is what it
is for — and look at the provider. If you cannot, you need the machine.

## Somebody signed in and has no access

Expected. **There is no first-user-becomes-admin rule**, and a provider does not
carry groups. Make them an administrator, or add them to a
[group](../../identity/groups/), explicitly.

## An app is public but nobody outside can reach it

Almost never the app. Check, in order: DNS, your proxy, the apps origin, TLS.
See [Reachability](../../security/reachability/) — and remember `unknown` is not
`not_ok`.

## Apps are public but being asked to sign in

[Anonymous access](../../security/anonymous/) is off, so public resolves to
`authenticated`. Nothing was rewritten; turn it back on and everything that was
public is public again.

## A deploy is refused and the developer says it worked yesterday

| Check | Why |
|---|---|
| [Dependency policy](../../security/dependencies/) | A new advisory can refuse today's deploy. It does **not** stop the running app. |
| [Trusted sources](../../security/sources/) | Did the source list change? A settings change never takes down running code, but it does gate new deploys. |
| [Language versions](../versions/) | Did an interpreter get removed? A version is refused, never approximated. |
| [Locks](../../apps/locking/) | A lock refuses with your own words. |

## Builds are queued and not starting

Look at build concurrency and at the machine. On one box, builds compete with
running apps for memory — a Next.js or R build is the usual culprit.

## An app restarts repeatedly

In isolated mode it is restarted a **bounded** number of times and then told
that it has stopped being restarted. Read the app's logs; the reason is the
app's, not the platform's.

## Metrics stopped

Telemetry is **never load-bearing**, so this is not an outage. Check the
collector endpoint and that `METRICS_ADDR` is still set — remember it is a
listener of its own, never a path on `:8080`.

## Storage uploads fail from the browser and nothing is logged

CORS on the bucket. Launchpad never saw the request, so it cannot report it. See
[App storage](../../capabilities/storage/).

## The gallery is empty

It is **off by default**. If it is on and empty, check whether the catalog
declares a schema version newer than this binary — you would be told that
specifically rather than shown an empty list.
