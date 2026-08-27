---
title: Offboarding and dormancy
description: Removing someone, and the sweep that catches the ones nobody removed.
---

## Offboarding

Disabling an account takes effect immediately. Their sessions stop working and
their keys stop working — off means **absent**, and off means **now**.

What does not disappear is their apps. An app owned by a person who is gone is
still there, still serving. That is correct — deleting somebody's account should
not take down a service — but it is a thing to go and deal with rather than
assume away.

**Reassign apps before, not after.** Move them to a [group](../groups/) while
you can still ask which ones matter.

## Dormancy

Launchpad can sweep accounts that have not been used in a long time and lock
them. It is the backstop for the offboarding nobody did.

Two things about it:

**"Last used" is four facts, not the sign-in alone.** A person who has not
signed in for six months but whose API key is deploying nightly is not dormant,
and treating a sign-in date as the whole answer would lock them out.

**The sweep never locks an administrator.** The account that recovers the
install is not eligible to be locked by an automatic process.

## What a lock does here

A locked account cannot sign in and its keys do not work. Unlocking is an
administrator's action, and both directions are audited.
