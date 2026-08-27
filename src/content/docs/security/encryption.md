---
title: At-rest encryption
description: The key ring, and the difference between retiring a key and revoking it.
---

Secrets Launchpad stores — app environment variables, provider client secrets,
integration credentials — are encrypted at rest.

## Every ciphertext names the key that wrote it

One record format, across both backends, parsed in exactly one place. There is
no ciphertext whose key is inferred from context.

**The key id is derived, never configured.** You cannot label a key wrongly,
because you do not label it at all.

## One writes, all read

**One key writes. Every key in the ring reads.** That is what makes rotation
possible without a migration: new secrets are written under the new key, and old
ciphertexts keep being readable under the key that wrote them.

**A key that is not held is refused by name.** You are told which key is missing,
not given a generic decryption failure.

## Retiring is not revoking

Retiring a key stops it being used to write. It stays in the ring and keeps
reading.

**Revoking is a different thing, and it is destructive**: anything only that key
can read becomes unreadable. Do not reach for it as a tidier form of retirement.

## The backend

**Presence decides the backend, and there is no runtime fallback.** If you have
configured an external key manager, that is what is used; if it is unavailable,
Launchpad refuses rather than quietly falling back to a local key.

The local backend is a **peer, not a fallback**. It is a legitimate choice, not
a degraded mode.

## No key reaches a workload

Apps never receive a key. They receive decrypted values that Launchpad chose to
give them. An app cannot decrypt anything on its own, including its own
variables' ciphertext.
