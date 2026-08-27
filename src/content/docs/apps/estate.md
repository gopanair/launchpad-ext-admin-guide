---
title: The estate view
description: The cross-app views, and what each is honest about.
---

Most of Launchpad's admin pages are about one thing. A few are about all of
them, and those are the ones you use when somebody asks a question about the
whole install.

## What it answers

| View | The question |
|---|---|
| **Dependencies** | What does this estate depend on, and what does policy say about it? |
| **Language versions** | Which interpreter is each app actually on? |
| **Quiet apps** | What has nobody wanted in a long time? |
| **Scan targets** | What addresses should a scanner be pointed at? |
| **Processes** | What is running right now? |

## Two properties they all have

**They are admin-only.** These views cross every app, including ones you would
not otherwise be authorized to see individually.

**They never answer less than they know.** A cross-estate reader that quietly
omitted an app would be worse than no view at all — you would be making
decisions against a list you believed was complete.

## Coverage is about addresses, not rows

The scan-target reader never omits an app. When its coverage is incomplete, that
is because an app has no resolvable address, not because a row was skipped —
and it says so.

That distinction matters when you hand the list to a security team: "we scanned
everything on this list" is only a useful sentence if you know what the list
left out and why.

## Language versions

Every build records which version it resolved, pinned or not, and the estate
view reads those records. It counts **the release that is serving**, not the
most recent build — an app whose last build failed is still running the one
before it, and that is the one you care about.
