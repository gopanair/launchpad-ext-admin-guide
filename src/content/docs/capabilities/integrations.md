---
title: Integrations
description: Connecting apps to the outside, and the boundary that keeps them honest.
---

An integration lets an app send something outward — a message, a file — using an
identity the install holds rather than one the app does.

## The app supplies the message; the platform supplies the identity

That is the whole design. An app never speaks in the platform's voice, and an
app never holds the credential.

## An app has none of a kind until you attach one

**Absent, not off.** A kind with no connection is not an integration this app
has and does not.

**A connection that exists and offers itself to apps *is* the install switch.**
There is no second toggle: creating a connection and making it available is the
act of turning the capability on.

## Scope is welded

**A connection is welded to its scope, and a new scope is a new connection.** You
do not re-point an existing connection at a different channel or folder — you
make another one. That way, anything already using it keeps meaning what it
meant.

**One attachment per (app, kind).** A second is **refused rather than swapped**,
so an app cannot silently start posting somewhere else.

## The far side's membership is the boundary

What the integration can reach is decided by the far side — the channel it was
invited to, the folder it was given. Launchpad does not re-implement that.

**Teams is the exception, and its copy has to say so.** Do not paper over it.

## Failure

**A chosen destination that stops working fails. It never falls back.** Routing
resolves in one place, and a broken destination is an error you see rather than
a message that quietly went somewhere else.

## URLs are input

**A URL somebody typed is server-side input**, refused at save *and* at dial. The
second check is not redundant: what was safe when it was saved may resolve
somewhere else later.

## What an app can and cannot do

- Four gates, the same four for every kind, with distinct codes, re-checked
  before the transport.
- **No status is ever a lie.** If it says it sent, it sent.
- **Nothing here reads.** Integrations are outbound. An app cannot use one to
  read your Slack.
- A file is **added and never replaced**. The folder is the attachment's, the
  name is the app's, and a name that is really a path is **refused rather than
  sanitised**.
- **Three kinds leave residue**, and its record outlives both the ledger's
  retention and the app itself. Detaching reaches nothing already written —
  detach is not deletion.
