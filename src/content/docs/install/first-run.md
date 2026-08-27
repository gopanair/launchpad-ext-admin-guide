---
title: First run
description: Getting in the first time, and the rules that shape how that works.
---

On first start Launchpad migrates its own schema and comes up with **no
identity providers configured**. That is deliberate, and so is how you get in.

## There is always exactly one way in that needs no provider

A built-in local administrator, `admin`, exists to bootstrap the install and to
recover it later. It is not removable, and it is not a fallback that disappears
once you configure SSO — if your identity provider breaks at 3am, that account
is how you get back in.

## No install ships a password the internet already knows

There is no default password. The first password is set on the machine, by
someone who can prove they have it — that is what the recovery path is: proof
of the machine, not proof of an email address.

**Setting a first password mints no session.** You set it, then you sign in.
The two are separate on purpose, so a request that sets a password cannot also
be a request that hands out access.

## There is no first-user-becomes-admin rule

A common shortcut in other products and not one here. The first person to sign
in through a newly configured provider is an ordinary user. Administrators are
made deliberately, by an administrator.

## The order to do things in

1. Sign in as `admin`.
2. Configure a [sign-in provider](../../identity/providers/) and check that
   somebody can get in through it.
3. Make at least one of those people an administrator — **before** you rely on
   SSO for anything.
4. Decide what is [optional and off](../../capabilities/optional/).
5. Decide whether apps may be [public](../../security/anonymous/).

Step 3 is the one people skip. An install with SSO configured and no
administrator behind it still works, right up until it does not.
