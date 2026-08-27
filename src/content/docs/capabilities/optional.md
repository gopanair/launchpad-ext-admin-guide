---
title: What is optional
description: The rule that governs every optional capability, and the one exception.
---

Launchpad has a rule about capabilities you have not configured, and it holds
everywhere:

## Absent, not dormant

An unconfigured capability is **not there**. Not greyed out, not a tab that
explains why it is empty, not a button that raises a support ticket.

- No artifact store configured → the routes 404 and nothing appears in the UI.
- No isolated backend → the mode is not offered.
- No app storage → there is no storage tab on an app.
- No jobs → no jobs.

## Why

Because a disabled control is an advertisement, and an advertisement in an
enterprise product is a support call. A developer who can see a button they
cannot press will ask you about it, every time, forever.

It also means an install that has decided not to use something looks like an
install that does not have it — which is the honest rendering.

## The one exception, and it is the opposite

**Not licensed is visible.** A capability withheld by [licence
tier](../../operate/licensing/) is shown, and shown as locked.

That is deliberate and it is the inverse of the rule: unconfigured is a decision
you made and should not be nagged about; unlicensed is a decision somebody else
made and you are entitled to see what you do not have.

## The list

| Capability | Configured by |
|---|---|
| [App storage](../storage/) | A storage resource, and a mount on the machine |
| [Integrations](../integrations/) | A connection per kind |
| [Notifications](../notifications/) | Mail, or a channel |
| [The Gallery](../gallery/) | A switch, and it is off by default |
| Jobs | The isolated backend |
| The artifact store | Its own configuration |
| Telemetry | A collector endpoint |
| AI | A model and a key |

Before you design a process around any of them, check it is actually on.
