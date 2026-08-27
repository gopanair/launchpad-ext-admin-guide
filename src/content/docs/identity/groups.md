---
title: Groups
description: Local sets of humans, and the three rules about them.
---

A group is a set of people on this install. Apps can be owned by one, which is
how a team shares an app without one person being a single point of failure.

## Three rules

**A group is local.** Not a directory group, not a claim from a token, even if
the names match. Authorization on this install is decided here.

**A group is a set of humans, never an actor.** Nothing runs as a group. A
group holds no API keys and cannot own a credential. When you need something to
act, that is a [key](../../security/audit/), and keys belong to people, apps, or
nobody.

**An app is owned by a user or a group — never both, never neither.** There is
no unowned app and no co-ownership. Transferring to a group transfers it
entirely.

## Why not directory groups

Because they change without you. A directory group that gains a member at 2am
would silently gain access to every app that group owns, with nothing in your
audit log that says a permission changed.

Local membership means every change is an action somebody took here, and it is
recorded.

## Practical advice

Own production apps with groups, not people. The cost of the extra step is one
click; the cost of not doing it is discovered when somebody leaves.
