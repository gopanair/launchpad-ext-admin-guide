---
title: Trusted app sources
description: Constraining where code may come from.
---

This constrains the **provenance** of an app — where its code came from — and
nothing else.

## What it is not

It says nothing about what an app *does* once it is running. An app from an
approved source is not safer at runtime than one from anywhere else; it is
merely from a place you decided to trust.

Every sentence of copy about this feature has to survive that distinction, and
so does every conversation about it.

## How it works

One resolver, and the matcher is pure. Seven enforcement points, and that list
is the whole specification.

**The two ZIP-upload routes are a different switch** and are not among them.
Turning this on does not stop somebody uploading an archive.

## Connected git hosts

A connected git host is a **held credential** — Launchpad holds it, and
developers never see it and are never told which auth method was used.

**No key may attach one.** An API key cannot connect a git host, because that
would be a key managing a credential.

**Coverage is checked at the write, never at the clone.** You find out that a
source is not covered when you configure it, not at 3am during a deploy.

## Changing it

**A settings change never takes down running code.** Tightening the list does
not stop apps that were deployed under the old one.

**Disable is immediate and unrefusable. Remove is refused**, naming the apps
that depend on it. Those are different actions on purpose: you can always stop
using a source immediately, but you cannot delete one out from under running
apps without being told what you would break.
