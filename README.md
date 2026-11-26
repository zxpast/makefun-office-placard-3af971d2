# Office Artifacts: The One-Line Placard

[![make.fun · u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/zxpast/makefun-office-placard-3af971d2/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/zxpast/makefun-office-placard-3af971d2/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

**Referral code: `6hmpy1rq`**

Bounty: [Office Artifacts: The One-Line Placard Contest](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

A make.fun entry for **Office Artifacts: The One-Line Placard Contest**
(`u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2`).

`main.ts` (Node 22, stdlib only) writes one original museum placard — at
most 180 characters — to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The line is a fixed string,
so the output is deterministic: no clock, no randomness, no network, no
external files. A code-point gate throws if the line falls outside 1–180.

The placard, for an ordinary office microwave treated as an ancient
ritual object:

> Microwave, c. 2011, enamelled steel. Gift of the break room. It warmed offerings in ninety seconds; the priests never once stopped it at one.

The joke: the microwave is catalogued like a dug-up relic — date,
material, donor — and the twist lands in the last words: its priests
warmed offerings in ninety seconds but never once stopped the rite at
one, the way nobody ever lets a microwave finish its final second.

## Run it

```sh
node main.ts
```
