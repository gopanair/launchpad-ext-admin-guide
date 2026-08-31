---
title: Language versions and toolchains
description: Which interpreters this install offers, who decides, and how to retire one.
---

## Discovered, never compiled in

Launchpad ships no list of language versions. **The operator says where, and the
probe says what.** You install interpreters on the machine (or bake them into the
[runner images](../runner-images/)); Launchpad finds them and offers what it
found.

There is no version string in a variable name anywhere, which is why adding a new
Python does not need a Launchpad release.

Admin → Info and the health endpoint both list what was found. The checks page
re-probes a family reported **absent** when you press Run checks — so installing
an interpreter and confirming it does not need a restart. A family reported
present carries the age of its reading.

## Four families

Python, Node, Go and R.

## What a developer may ask for

**Comparators only**, and **never a patch version**. A pin naming a patch is
**refused rather than truncated** — `3.12.4` is an error, not a slow way of
saying `3.12`.

**A version is refused, never approximated.** An app asking for something you do
not have fails its deploy and is told what exists. It is never silently placed on
a different interpreter.

**The decision is made before the build**, because that is where the interpreter
gets baked in — so a developer finds out in seconds rather than after a
ten-minute install.

**One declaration per family**, and Go's is `go.mod`. A Posit Connect
`manifest.json` is translated into an `renv.lock` rather than taught as a second
format.

## R has more moving parts than the others

**Point R at a binary repository.** `LAUNCHPAD_R_REPOS`, and it is a
[dial](../../config/operating-dials/). This is the single largest lever on R build
times, and on some architectures it is the difference between a build and a
failure.

**renv's cache is off**, deliberately. renv's default fills a library with links
into a machine-global cache, and those links dangle in every pod.

**A library is stamped with the R series it was built for.** Restoring a 4.4
library into a 4.5 release is refused rather than half-loading.

**Both launchers point R at its library**, shared and isolated alike.

R also needs system libraries beyond the interpreter — pandoc for rendering,
plus whatever your packages link against. Those are the machine's, or the image's.

## What is running right now

Every build records the version it resolved, pinned or not. Two readers:

- **Admin → Languages**, counting the release that is **serving** rather than the
  newest build, and never answering less than it knows.
- **The app's own Runtime section**, editor-only, carrying the patch the estate
  view folds away.

Use the first when you are planning; use the second when you are answering a
question about one app.

## Retiring a version

1. **Look at Admin → Languages** and see what is actually on it.
2. **Tell the owners**, with a date.
3. **Remove the interpreter.**

Apps already running on it keep running: a restart replaces the tree and puts
back the same release. What changes is the next **deploy** — it re-resolves,
finds the version gone, and is refused with the list of what exists.

That refusal arrives while a developer is already deploying, which is the moment
they can act on it.

## Build parameters and registries

Where builds fetch from is this process's environment: `NPM_CONFIG_REGISTRY`,
`UV_INDEX_URL`, `GOPROXY`, and the credentials for an authenticated mirror.

Prefer a credential variable over a token inside a registry URL: a URL credential
works, and then appears in the output of every build that mentions it.

Go and R have no credential variable of their own — point them at a netrc file
you mount.

`GOOS` and `GOARCH` are the one pair that is **refused** rather than passed
through.
