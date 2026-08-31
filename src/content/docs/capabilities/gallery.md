---
title: The gallery
description: Extensions and examples, and the four rules that keep a catalog from becoming authority.
---

A catalog of things the Launchpad team publishes: **extensions** (cloned from a
repository at a pinned tag) and **examples** (fetched as an archive).

**Off by default.** `gallery_deploy_mode` offers: nothing, extensions only, or
extensions and examples.

## Four rules

**The catalog is data, never authority.** An entry names code and may *ask* for
environment variables. Nothing in it can grant a capability, change a setting, or
widen anybody's permissions. Everything an extension needs beyond its own code is
a separate, audited action by you, afterwards.

**Off means no outbound request.** Not "fetched and ignored". With the switch off,
nothing is requested from `GALLERY_CATALOG_URL` at all.

**The switch curates; it does not contain.** Restricting the gallery to extensions
hides examples from the list. It does not prevent anyone deploying the same code
by pasting the repository URL into New app — because that was always allowed, and
this is not a security control. [Source policy](../../security/sources/) is.

**Installed is derived, never stored.** Whether an item is installed is worked out
from your app rows. There is no second record to go stale.

## Who can deploy what

- **Extensions are administrator-only.**
- **Examples** are available to anyone who can create an app, unless you have set
  extensions-only — in which case examples are not listed at all.

## Updating and detaching

An installed app remembers where it came from. You can **update** it from the
catalog — the address, the history, the variables and the access all stay — or
**detach** it, after which it keeps running and stops being told about updates.

## A URL from the catalog is server-side input

Validated as untrusted input like any other, because the catalog URL itself is
configurable and an internal mirror is a legitimate setup.

## Honest reporting

**"Not recorded" is not "unknown".** A field the catalog did not carry and a field
whose value could not be determined are different, and the UI says which.

**A dropped entry is counted and surfaced**, with its reason — not logged and
forgotten. A catalog that silently lists nine of ten items is a support call
nobody can answer.

**A catalog that is too new** tells you *"this catalog needs a newer Launchpad"* —
not "sync failed", and never an empty gallery.

## Mirroring it

`GALLERY_CATALOG_URL` is configuration, and pointing it at an internal mirror is
supported. That is the shape for an install with no egress: mirror the catalog,
mirror the repositories, and the gallery works.

## The reserved namespace

A **first-party** item deploys onto a reserved slug in the `_` namespace, and only
the platform's own compiled-in list can open that namespace — matched on the
**repository**, not on an id in the catalog document. A mirror that claims
`_user-guide` for some other repository does not get it.

A reserved slug already taken is **refused rather than uniquified**: you get
`already_installed`, never `_user-guide-2`.
