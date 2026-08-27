---
title: Publisher requests
description: Requiring approval before an app becomes public.
---

An install can require an administrator to approve making an app public.
Developers request it; the app stays as it is until somebody acts.

## The gate is on the transition

**An app that is already public keeps serving.** Turning this on does not
un-publish anything, and it does not interrupt anything that is running.

The same rule holds for the [licence](../../operate/licensing/): publishing is
gated on the *change*, so nothing already public goes dark because a state
changed underneath it.

## What to look at

The request names the app and who asked. Before approving, the questions worth
asking are the ones the platform cannot ask for you:

- Does this app authenticate anything itself? Visibility controls who reaches
  it, never what it does once they are there.
- Does it print secrets? A rendered notebook carries the app's environment into
  a published document.
- Is it [reachable](../../security/reachability/) from outside at all? If not,
  approving it changes nothing except a label.

## Refusing

A refusal is a conversation, not a state to leave sitting. The app stays where
it was and the developer can ask again once they have changed something.

## If you turn this off

Existing requests do not evaporate; developers just stop needing to make new
ones. Turning it back on does not retroactively un-publish anything.
