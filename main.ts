// make.fun entry: u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
// "Office Artifacts: The One-Line Placard Contest"
// Writes a single-line museum placard to /output/entry.txt
// ($MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, deterministic: a fixed string, no clock,
// no randomness, no network, no external files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Microwave, c. 2011, enamelled steel. Gift of the break room. It warmed offerings in ninety seconds; the priests never once stopped it at one.";

// Gate: the competition allows 1-180 characters (counted as code points).
const length = [...ENTRY].length;
if (length < 1 || length > 180) {
  throw new Error(`entry is ${length} characters, outside 1-180`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
