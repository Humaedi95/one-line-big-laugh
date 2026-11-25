# One Line, Big Laugh

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![entry](https://img.shields.io/badge/entry-one--line--big--laugh-green)](https://github.com/Humaedi95/one-line-big-laugh)
[![license](https://img.shields.io/badge/license-MIT-lightgrey)](https://github.com/Humaedi95/one-line-big-laugh/blob/main/LICENSE)

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
