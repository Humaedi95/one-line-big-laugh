// One Line, Big Laugh — make.fun entry
// Writes a single hilarious line (max 200 chars) to /output/entry.txt.
// SPDX-License-Identifier: MIT

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I taught my dog to fetch my slippers; now he brings me the neighbor's slippers, the neighbor, and a restraining order.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.trim().length === 0) {
  throw new Error("Entry line must not be empty or whitespace-only.");
}

if (ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry line is ${ENTRY.length} characters, over the ${MAX_CHARS}-character limit.`,
  );
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

// Round-trip check: what landed on disk must be exactly the line.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== ENTRY) {
  throw new Error("Written file does not match the entry line.");
}

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
