---
title: Licensing
description: What a licence gates, what it cannot do, and why it is not a security boundary.
---

## Bookkeeping and friction, never a security boundary

Say that out loud before designing anything around it. The licence is not access
control. It does not protect data and it does not stop anyone doing anything
that matters to security.

## The key is a lookup, not a credential

It is **plain text**, audited in the clear, and readable back in full. It **names
a customer, never an install**.

Treat it accordingly: it is not a secret, and there is nothing to rotate.

## A licence gates configuration, never operation

This is the guarantee that matters when a licence lapses.

**Publishing is gated on the transition**, so an app that is already public
**keeps serving**. Nothing goes dark because a licence check came back
unfavourably.

**No verdict withdraws anything.** Every failure resolves to the tier you
already hold. The only thing that can fall is the tier itself, on an explicit
adverse verdict, after **weeks of warning**.

## Off means no outbound request at all

An install with licensing off makes no outbound call. The endpoint is compiled
in with nothing that overrides it, and **a private address is refused** — you
cannot point it at an internal server.

## There is no seat cap on any tier

**Nothing licensed refuses anything on a count.** The demo and free tiers refuse
*creation* on one — three enforcement points, and that list is the specification
— and that is all.

**The install count refuses nothing and never will.**

## What is in the payload

**Nothing in the payload is a name.** No app names, no user names, no hostnames.
The install renders the counts itself and **can switch them off**, with one
stated exception a paid licence cannot suppress.

## Not licensed is visible

Unlike every other [optional capability](../../capabilities/optional/), a
capability withheld by tier is **shown, and shown as locked**. You are entitled
to see what you do not have.
