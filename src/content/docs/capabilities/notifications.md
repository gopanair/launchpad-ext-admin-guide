---
title: Notifications
description: Mail and channels, and the one send whose arrival is the point.
---

## Optional and never load-bearing

**No send may fail or block the request that triggered it.** A notification that
cannot go out does not fail the thing it was about. An app that crashed still
crashed, whether or not anyone could be told.

Design around that: notifications are how people find out sooner, not the record
that something happened. The record is the [audit log](../../security/audit/).

## Credentials are not settings

Passwords and API keys are **credentials, not setting values**. They are stored
as credentials — encrypted, not read back — and they do not appear in a settings
export.

## Audience lives on the template

A notification's audience is a property of **its template**, not of the channel
it goes out on. Change who gets something in one place.

**Copy may not promise mail.** A template whose words assume email is wrong the
moment somebody routes it to a channel. Write copy that is true on any transport.

## How a notification becomes a message

**One poster interface and a slice of posters, with mail outside it.** A
notification renders **once**, and each channel turns that one rendering into its
own format.

That is worth knowing because it cost the mail-only rule its structural
enforcement — which is stated out loud rather than hidden. Mail is no longer
prevented by construction from receiving something written for a channel; it is
prevented by the copy rule above.

## The announcement is different

**The announcement is the one send whose arrival is the point.** Everything above
is about notifications you can afford to lose. An announcement is not one.

So it has stricter rules:

- **A count that cannot distinguish outcomes is not a record.** Sent, failed and
  skipped are different numbers.
- **The freeze is one guarded transition, with both refusals before it.** You
  cannot edit an announcement out from under a send in progress.
- **A failure is a count, not a fourth status.** An announcement that partly
  failed is not in a new state; it has failures.
- **A restart abandons and never resumes.** A half-sent announcement is not
  silently continued after a restart — that would double-send.
- **Two skip reasons are named back to you**, rather than folded into one
  number.
- **One audience no switch silences.** There is a set of people who will be told,
  and no notification preference removes them from it.
