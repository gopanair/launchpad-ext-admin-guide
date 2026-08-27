---
title: The Gallery
description: Extensions and examples, and the four rules that keep a catalog from becoming authority.
---

The Gallery is a catalog of things the Launchpad team publishes: **extensions**
(cloned from a git repository) and **examples** (fetched as an archive).

It is **off by default**.

## Four rules

**The catalog is data, never authority.** An entry may name code and may *ask*
for environment variables. Nothing in it can grant a capability, change a
setting, or widen anybody's permissions. Everything an extension needs beyond
its own code is a separate, audited action by you, afterwards.

**Off means no outbound request.** Not "fetched and ignored". Off is off.

**The switch curates; it does not contain.** Restricting the gallery to
extensions hides examples from the list. It does not prevent anyone deploying
the same code by pasting the repository URL into New app — because that was
always allowed and this is not a security control.

**Installed is derived, never stored.** Whether an item is installed is worked
out from your app rows. There is no second record to go stale.

## Who can deploy what

- **Extensions are administrator-only.**
- **Examples** are available to anyone, unless you have set the gallery to
  extensions only — in which case examples are not listed at all.

## A URL from the catalog is server-side input

Every URL in the document is validated as untrusted input, because the catalog
URL itself is configurable and an internal mirror is a legitimate setup.

## "Not recorded" is not "unknown"

A field the catalog did not carry and a field whose value could not be
determined are different, and the UI says which.

## Dropped entries

An entry that fails validation is **counted and surfaced to you**, with its
reason — not logged and forgotten. A catalog that silently lists nine of ten
items is a support call nobody can answer.

## A catalog that is too new

If the document declares a schema version this binary does not understand, you
are told **"this catalog needs a newer Launchpad"** — not "sync failed", and
never an empty gallery.
