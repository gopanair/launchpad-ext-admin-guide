---
title: Documentation
description: Installing the guides, and what being first-party does and does not buy.
---

Launchpad's own manuals — the user guide, this admin guide, and the CLI and SDK
guide — are **ordinary apps**, installed from the [gallery](../gallery/) like any
other extension.

## Installing them

Turn the gallery on, find them, deploy them. They are extensions, so they are
administrator-only.

They install onto reserved slugs — `_user-guide`, `_admin-guide`, `_cli-guide`.
The `_` namespace belongs to apps Launchpad installs itself: no ordinary app can
take one of those names, which is why the address is stable and why somebody
looking at `/apps/_admin-guide` can tell it came from the vendor rather than from
a colleague.

## They are not privileged

**Being first-party grants nothing.** They are static sites. They pass the same
four gates as any other app, hold no credential, reach no privileged endpoint, and
an ordinary app could be given the same standing tomorrow.

Being on a reserved slug buys a stable URL and a trust marker in the address bar.
It buys no capability.

## They do not appear in the app list

Apps on the reserved namespace are kept out of the app list — which is a list of
what *this organization* built — and gathered on the **Documentation** page.

**That is presentation only.** It changes what is *listed*, never who may *read*
it. Whoever could open the app before can open it now, and both lists read one
authorizer, so they are complements rather than two answers that can disagree.

## They can drift, and that is why they are pinned

An embedded manual is byte-identical to the binary and always correct about it. A
guide is a separate artifact and **can** be behind.

So the catalog names a **tag**, the ref resolves at deploy time, and **a tag is
never re-pointed**. An install that upgrades the platform keeps the guide it
installed until somebody updates it — which is honest about what it says rather
than silently wrong about it.

The Documentation page shows the version each guide is running, and — for you, the
only person who can act on it — the version the catalog now names. Both are absent
with the gallery off, because an install that fetches no catalog has no version to
be behind.

**Update stays on the app's settings tab.** One mutation, one door.

## Nobody is nagged

There is no dashboard prompt. The Documentation page's own empty state is where
somebody who went looking for the manual is told it is not installed — with a link
into the gallery for you, and a sentence naming who to ask for everybody else.

Not the dashboard, because that page is faults only and an uninstalled guide is
not a fault.

**Launchpad also cannot install them for you.** That would make a catalog entry
cause a clone with no administrator's action, and fire an outbound request on an
install that switched the gallery off.

## What this costs, stated

A fresh install has **no documentation at all** until the gallery is on and you
act. That is a real regression from a manual in the binary, and it is accepted:
the guides are better documentation than the manual was, an install that wants
them is one click away, and shipping both would be two sources of truth about the
same product.

Installing them is a good day-one task.
