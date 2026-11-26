[![make.fun · u-po-pu-one-star-five-stars-for-the-food-f9166ee7](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/ardanpranaja/one-star-five-stars-food/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/ardanpranaja/one-star-five-stars-food/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

# One Star, Five Stars for the Food

Entry for the make.fun competition **"One Star, Five Stars for the Food"**
(`u-po-pu-one-star-five-stars-for-the-food-f9166ee7`).

## The sentence

> One star: Earth is a trap, the traffic is terrible, the queues are endless, and the food is so good that three of my crew have already quit the invasion to open a taco stand.

One sentence, 174 characters. An alien tourist's one-star review of Earth:
the grievance is the traffic and the queues, but the punchline reframes the
whole planet — the food is the trap, so good that three of the invasion crew
quit to sell tacos. See `CANDIDATES.md` for the 22 sentences that were
brainstormed and scored against the judge's brief before this one was picked.

## How it works

`main.ts` (plain JavaScript, run directly with Node) copies `entry.txt` to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output` when the variable
is not set. Before writing it validates the entry against the competition
gate (1–200 characters, not only white space, a single line) and exits with
an error instead of shipping an entry the scorer would reject.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `entry.txt` — the sentence, exactly one line
- `main.ts` — the entry program
- `CANDIDATES.md` — brainstorming, scoring, and why this sentence won
- `.makefun/owner.json` — payout wallet
- `LICENSE` — MIT
