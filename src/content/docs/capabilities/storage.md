---
title: App storage
description: Resources, backings, grants and mappings — four things that are not each other.
---

App storage lets apps read and write files. It has four moving parts, and
keeping them distinct is most of understanding it.

## The four

| | What it is | Whose |
|---|---|---|
| **Resource** | A named store on this install | The install's |
| **Backing** | Where the bytes actually live | The resource's |
| **Grant** | Access to a folder, for a person | A person's |
| **Mapping** | An attachment of a resource to an app | An app's |

**A grant is a person's and a mapping is an app's. Neither implies the other.**
Granting yourself a folder does not let any app read it, and attaching a
resource to an app does not let you browse it.

## Resources and backings

A resource has a **data plane when it names a bucket** — not because it is
called a store. A backing belongs to a kind, and a root belongs to a file store.

**A resource's slug is its identity** and cannot be renamed. Only its label can.

## Grants

**A grant narrows only by folder**, and a folder is what gets mounted.
Resolution is union-of-max per key.

**There is no admin bypass.** A folder nobody granted you is not a row you can
see, and being an administrator does not change that. If you need to look
inside, grant yourself access — and the grant is audited.

## Shared mode

**What shared mode refuses is storage with nowhere to put it.** The operator
mounts the filesystem; Launchpad mounts nothing itself. A level is *which mount*
an app gets, not a permission it asks for.

**The URL is never more generous than the mount.** A signed URL cannot reach
outside what was mounted.

## Attaching

Who may attach is a **fourth fact and a fourth table**. A mapping is stamped
with the authority that wrote it, and revoking that authority collects exactly
those mappings and unmounts them.

**That is the one permission change that restarts a workload** — because an
unmount cannot take effect in a running process.

## Two things that surprise people

**A browser upload needs CORS on the bucket.** Without it the upload fails in
the browser, and Launchpad never sees it — so it is not reported as a failed
upload. Configure CORS when you configure the bucket.

**The audit records the mint, never the landing.** You can see that a signed URL
was issued. You cannot see from Launchpad whether the file arrived — that is the
object store's record.
