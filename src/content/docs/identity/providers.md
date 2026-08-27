---
title: Sign-in providers
description: Adding OIDC and GitHub, and what a provider is and is not.
---

**Providers are database rows**, not configuration files. You add, edit and
disable them from the admin pages, at runtime, and every change is audited.

## OIDC

The general case: your organization's identity provider. You supply the issuer,
a client id and a client secret. The secret is encrypted at rest under the
install's own key ring.

The button's label is yours. Name it what your people call it, not "OIDC".

## GitHub

OAuth against GitHub. Useful for engineering-only installs and for evaluations.

## What a provider does not do

**A provider does not carry groups.** Groups in Launchpad are local rows — a
set of humans on this install. A claim in a directory token that happens to be
called `groups` is not consulted, and matching names do not connect.

That is a deliberate boundary: authorization on this install is decided by this
install, not by whatever a directory says today.

## Disabling one

Immediate. There is no cache to wait out.

Before you disable the last one, remember that the [built-in
administrator](../local/) is the way back in — that is what it is for.

## Every outcome is recorded

Every authentication outcome — success, failure, lockout, expiry — is written
to the audit log in its own `session.*` family. It is never folded in with
authorization events.

That matters when you are answering "who signed in, from where, and when": one
family, one question, no filtering apart of two different things that share a
name.
