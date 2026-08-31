---
title: Dependency policy
description: What the scanner reads, what it can decide, and what it must never do.
---

Launchpad reads the names and versions your apps declare and checks them against
a vulnerability feed. Admin → Dependencies.

## Do not oversell it

**It reads names and versions, not your app's code.** It is a manifest check. It
will not find a bug somebody wrote, a secret they committed, or a vulnerability
in code that has no package name.

**This install's package list never leaves.** What your apps depend on is not
published as a side effect of scanning them.

## Three rungs, and they are not the same

| | Means |
|---|---|
| **Recorded** | An inventory was taken for this release. |
| **Matched** | The inventory was compared to the corpus. |
| **Covered** | The ecosystem is one the corpus actually covers. |

**Recorded is not scanned, and matched is not covered.** R sits on the middle
rung: matched against CRAN and still reported as *not scanned*, with any findings
shown and enforced. Its absence of findings is not a verdict.

The inventory is written **before** any of the questions is asked, so an app's
packages are known even where the answers are not.

## Malware is not a severity

It is not "critical plus a bit". A package identified as malicious is a different
kind of finding from one with a CVE, and it gets its own switch. A severity
threshold that let malware through because it scored medium would be the wrong
shape entirely.

## The settings

| | |
|---|---|
| `dependency_policy` | Whether any of this happens. |
| `dependency_scan_on_deploy` | Resolve packages as a build installs them. |
| `dependency_block_severity` | The threshold a vulnerability must meet to refuse a deploy. |
| `dependency_block_only_fixable` | Refuse only findings somebody can act on; record the rest. |
| `dependency_block_malware` | Its own switch. |
| `dependency_watch_enabled` | Re-check serving apps in the background. |
| `dependency_waiver_max_days` | The ceiling on a temporary waiver. |

**Preview a policy change before you save it.** The preview tells you which apps
would be refused, which is the number that decides whether you turn it on today
or after a conversation.

## The rules that keep it from taking you down

**A restart is not a deploy.** The verdict that applies is the one made about that
**release**, not today's feed. An app serving for a month does not fail to come
back because an advisory landed overnight.

**A serving app is never stopped.** Policy gates deploys. It does not reach in.

**A stale feed never blocks.** If the data cannot be refreshed, deploys continue.
A scanner that cannot reach its feed must not become an outage — the checks page
warns instead.

## There is no permanent waiver

Waivers expire. A permanent one is a decision nobody revisits, which after a year
is indistinguishable from having no policy.

## The feed

`dependency_feed_endpoint`, an interval, a staleness threshold, and a credential
for a mirror that needs one. Point it at an internal mirror if egress is closed.

**For an air-gapped install:**

```bash
launchpad advisory-import /path/to/corpus
```

A subcommand that talks to Postgres and exits.

## The governance view

Admin → Dependencies is the estate's: what this install runs, searchable, with
findings. It is **admin-only, never answers less than it knows, and carries its
own coverage** — so a report drawn from it says what it did not cover rather than
implying it covered everything.

An app's own tab and this one use **one vocabulary**. The same words mean the same
thing in both places, which is what makes a developer's question and your answer
about the same fact.
