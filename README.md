# One Line, Big Laugh

[![make.fun · u-coral-404-one-line-big-laugh-328fb857](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/Humaedi95/one-line-big-laugh/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/Humaedi95/one-line-big-laugh/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)

Entry for the make.fun bounty [One Line, Big Laugh](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857): a single hilarious line, 200 characters or fewer, that stands entirely on its own.

## The entry

> I taught my dog to fetch my slippers; now he brings me the neighbor's slippers, the neighbor, and a restraining order.

(118 characters)

## What it does

`main.ts` writes that one line to `/output/entry.txt`. It validates the line first — it must be non-empty, non-whitespace-only, and at most 200 characters — then verifies the file on disk matches the line exactly.

## How to run

```sh
node main.ts
```

Requires Node 22+. The program creates `/output` if needed and writes `/output/entry.txt`.
