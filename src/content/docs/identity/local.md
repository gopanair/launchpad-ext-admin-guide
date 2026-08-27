---
title: The built-in administrator
description: The account that is always there, and why.
---

One local administrator, `admin`, exists on every install. It cannot be removed.

## Why it exists

Two jobs:

- **Bootstrap.** A fresh install has no providers, so something has to let you
  in to configure the first one.
- **Recovery.** Your identity provider will one day be misconfigured, expired,
  or down. This account is how you fix it.

An install that deletes its way out of local sign-in is an install one
certificate rotation away from nobody being able to get in.

## No shipped password

There is no default. The first password is set on the machine by somebody who
can prove they have it — that is the entire recovery model: **proof you have
the machine**, not proof you control an email address.

**A first password mints no session.** Setting one and signing in are separate
steps, so the request that sets a credential never also hands out access.

## Keeping it safe

- Give it a long, unique password and put it wherever your team keeps break-glass
  credentials.
- It is an administrator. Everything it does is audited like everything else.
- **The dormancy sweep never locks an administrator**, so it will not quietly
  disable itself while you are not looking. See
  [Offboarding and dormancy](../offboarding/).

## Day-to-day

Do not use it day-to-day. Give your administrators their own accounts through a
provider, so the audit log names people rather than a shared account.
