---
title: Dependency policy
description: What the scanner reads, what it can decide, and what it must never do.
---

Launchpad reads the names and versions your apps declare and checks them against
a vulnerability feed.

## Do not oversell it

**It reads names and versions, not your app's code.** It is a manifest check. It
will not find a bug you wrote, a secret you committed, or a vulnerability in
code that has no package name.

## This install's package list never leaves

The check does not ship your dependency list anywhere. What your apps depend on
is not published as a side effect of scanning them.

## Malware is not a severity

It is not "critical plus a bit". A package identified as malicious is a
different kind of finding from a package with a CVE, and the policy treats it
that way. A severity threshold that lets malware through because it was scored
as medium would be the wrong shape entirely.

## Where it is enforced

Three enforcement points, and the list is the specification.

## The rules that keep it from taking you down

**A restart is not a deploy.** When a workload restarts, the verdict that
applies is the one that was made about that **release**, not today's feed. An
app that has been serving for a month does not fail to come back because a new
advisory landed overnight.

**A serving app is never stopped.** Policy gates deploys. It does not reach in
and stop something that is already running.

**A stale feed never blocks.** If the vulnerability data cannot be refreshed,
deploys continue. A scanner that cannot reach its feed must not become an
outage.

## There is no permanent waiver

Waivers expire. A permanent one is a decision nobody revisits, which after a
year is indistinguishable from having no policy.

## The governance view

The inventory has a second reader for governance: **admin-only, never answers
less than it knows, and carries its own coverage** — so a report drawn from it
says what it did not cover rather than implying it covered everything.
