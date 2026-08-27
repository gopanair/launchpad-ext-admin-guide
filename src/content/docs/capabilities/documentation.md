---
title: Documentation
description: Installing the guides, and the knowledge base pointer.
---

Launchpad's own manuals — the user guide and this admin guide — are ordinary
apps, installed from the [Gallery](../gallery/) like any other extension.

## Installing them

Turn the Gallery on, find **Launchpad user guide** and **Launchpad admin
guide**, and deploy them. They are extensions, so they are administrator-only.

They install onto reserved slugs — `_user-guide` and `_admin-guide`. The `_`
namespace belongs to apps Launchpad installs itself: no ordinary app can take
one of those names, which is why the address is stable and why a person looking
at `/apps/_admin-guide` can tell it came from the vendor rather than from a
colleague.

## They are not privileged

Being first-party changes **nothing** about what these apps may do. They are
static sites. They pass the same gates as any other app, they hold no
credential, and an administrator could grant an ordinary app the same standing
tomorrow.

Being on a reserved slug buys a stable URL and a trust marker in the address
bar. It buys no capability.

## They do not appear in the app list

Apps on the reserved namespace are kept out of the app list and shown on the
**Documentation** page instead. That is presentation only — it changes what is
*listed*, never who may *read* it. Whoever could open the app before can open it
now.

## Nobody is nagged to install them

There is no dashboard prompt. The Documentation page's own empty state is where
somebody who went looking for the manual is told it is not installed — with a
link into the Gallery for you, and a "ask an administrator" for everyone else.

Launchpad also does not install them for you. It cannot: the catalog is data
rather than authority, and an install with the Gallery off makes no outbound
request. Installing them is your explicit, audited action.

## Your own knowledge base

Separately, you can point Launchpad at **one app of your own** as this install's
knowledge base — your runbook, your internal handbook. It then appears in the
product's chrome.

Three things about it:

- **The label and description are yours**, not derived from the app. Renaming
  the app does not rename a word in everybody's chrome.
- **Setting it grants nothing.** The link is absent for anybody who could not
  already read that app. The pick is not a share.
- **Anonymous visitors never see it**, even if the app you picked is public.
