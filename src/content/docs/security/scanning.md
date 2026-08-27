---
title: Scan targets
description: Handing a security team a list of what to point a scanner at.
---

Launchpad publishes what to scan and how to be contacted. **It does not scan.**

## The reader

An admin-only route lists the apps on this install with their addresses, so a
scanner can be pointed at them.

**The reader never omits an app.** When its coverage is incomplete, that is
about *addresses* — an app with no resolvable address — and never about rows it
skipped. It tells you which.

That is the difference between "here is everything" and "here is everything we
could construct a URL for", and a security team needs the second sentence.

## One construction of an address

An app's address is built in one place. The visibility on a row is the
**effective** one — after [anonymous access](../anonymous/) and
[reachability](../reachability/) have had their say — so the list does not claim
an app is public when the install is not publishing.

## Who may read it

A **deploy key** may read it. It is the only route under `/admin` that either
key scope reaches, and that is deliberate: a CI-driven scan should not need a
person's credential.

An **`lp_` app key may not**. An app key is a grant on one app; the estate is
not one app.

## A scan is never usage

The header that marks a request as a scan grants **nothing**. It only stops the
request counting as evidence that somebody wanted the app — so scanning does not
keep [quiet](../../apps/quiet/) apps looking busy.

## security.txt

Published if you configure it, **absent rather than empty** if you do not. An
empty `security.txt` is worse than none: it looks like an answer.

Its **expiry is required, never invented and never rewritten**. Launchpad will
not silently extend it for you — an expired `security.txt` is a fact you should
see.
