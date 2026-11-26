// Entry for u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2:
// "Office Artifacts: The One-Line Placard Contest".
// This program emits one museum-style placard line as /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when that variable is provided).
// It runs on Node 22 with the standard library alone and is fully
// deterministic: the text is hard-coded, and nothing here reads the
// clock, rolls a die, touches the network, or opens outside files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLACARD_LINE =
  "Microwave, c. 2011, enamelled steel. Gift of the break room. It warmed offerings in ninety seconds; the priests never once stopped it at one.";

// Guard: a placard must be one non-blank line of 1-180 code points.
function validatePlacard(line: string): void {
  const length = [...line].length;
  if (length < 1 || length > 180) {
    throw new Error(`placard is ${length} characters, outside 1-180`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("placard must be one non-blank line");
  }
}

validatePlacard(PLACARD_LINE);

// Resolve where the placard goes: the env var wins, else /output.
function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLACARD_LINE, "utf8");
console.log(PLACARD_LINE);
