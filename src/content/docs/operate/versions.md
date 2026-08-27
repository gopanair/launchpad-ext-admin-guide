---
title: Language versions
description: Which interpreters this install offers, and who decides.
---

## Discovered, never compiled in

Launchpad does not ship a list of language versions. **The operator says where,
and the probe says what.** You install interpreters on the machine (or in the
runner images); Launchpad finds them and offers what it found.

There is no version string in a variable name anywhere, which is why adding a
new Python does not need a Launchpad release.

## Four families

Python, Node, Go and R.

R's library is stamped with the **series** it was built for, and restored into
the release with renv's cache **off** — renv's default fills a library with
links into a machine-global cache, and those dangle in every pod.

## What a developer may ask for

**Comparators only**, and **never a patch version**. A pin naming a patch is
**refused rather than truncated**.

**A version is refused, never approximated.** An app asking for something you do
not have fails its deploy and is told what exists. It is never silently placed
on a different interpreter.

**The decision is made before the build**, because that is where the interpreter
gets baked in.

## Build parameters are yours

Build memory, CPU and timeout are **the operator's, never the app's**. A
repository cannot ask for a bigger builder.

## Every build says what it resolved

Pinned or not, each build records the version it actually used. That record has
a **second reader for the estate** — admin-only, counting **the release that is
serving** rather than the newest build, and never answering less than it knows.

That is the view to use when you are planning to retire an interpreter: it tells
you what is running on it right now, not what was last built against it.

## Retiring a version

Removing an interpreter does not stop apps already running on it — a restart
replaces the tree but does not re-resolve a version that no longer exists in a
way that takes the app down silently. Check the estate view first, tell the
owners, and give them a deadline.
