---
title: Sessions
description: The two clocks, and the fact that you set both.
---

A session has **two clocks**, and an install sets both:

| Clock | What it bounds |
|---|---|
| **Idle** | How long somebody can do nothing before being signed out. |
| **Absolute** | How long a session may live at all, however active. |

An eight-hour absolute ceiling means a person who has been working all day is
signed out at hour eight. That is the point of it — the two clocks answer
different questions and you want both.

## Nothing is written down

Sessions are not rows in a table you can browse. There is no session list to
prune, and no "sign everybody out" button that works by deleting records.

## A renewal is the same session

A session that renews is still the same session, and the absolute ceiling still
applies to it. Renewal extends the idle clock, never the absolute one — so
activity cannot be used to live forever.

**The ceiling is not the token's expiry.** They are different numbers, and the
ceiling is the one that ends a session.

## Where it is enforced

Five places, and that is deliberate rather than redundant: a check that exists
in one place is a check that a new route can forget.

## What to set

There is no universally right answer, and the defaults are reasonable. The two
questions worth asking:

- How long should a laptop left open in a meeting room stay signed in? That is
  your idle clock.
- How long should a stolen session cookie be useful? That is your absolute one.
