---
title: The audit log
description: What is recorded, who can read it, and the guarantees around it.
---

## Written in the same transaction

**Authorization-relevant mutations write the audit row in the same transaction
as the change.** A change that happened and was not recorded is not a state the
database can reach.

## Two readers, and the second is bounded in code

The audit log has exactly two readers, and the second is bounded by **code, not
by a parameter**. There is no page size somebody can set to a million to
exfiltrate the lot.

## Authentication is its own family

Every authentication outcome is recorded as `session.*` — its own family, never
mixed into authorization events. "Who signed in" and "who was allowed to do
what" are different questions and do not share a namespace.

## Keys

Three key classes, never blurred, separated by **who they belong to**:

| Prefix | What it is | Belongs to |
|---|---|---|
| `lpu_` | A personal key — an identity | A person |
| `lp_` | An app key — a grant on one app | An app |
| `lpd_` | A deploy key | Nobody |

**No key manages credentials or authorization.** A key cannot mint a key, change
a permission, add a provider or alter visibility. It fails closed, and a test
walks the router to prove no route forgot.

The deploy list is a **strict subset** of the personal one.

**Off means absent, and off means now.** A disabled key stops working on the
next request.

## What is not in here

The licence key is **not a credential**: it is plain text, audited in the clear,
and readable back in full. It names a customer, not an install, and it is a
lookup rather than a secret.

## 404 over 403

Where a person is not authorized to see that something exists, they get a 404.
A 403 tells them it exists, which is often the fact worth protecting.
