// One-Line Slogan for a Solana Wallet Agent — make.fun entry
// The pitch: a wallet agent that understands plain English, so the
// slogan calls the wallet fluent in your language — and in Solana.
// The turn is the wallet learning a language, not the user learning
// crypto. Writes that one line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SLOGAN =
  "Your wallet, finally fluent in plain English \u2014 and Solana.";

// The gate: entry.txt must be UTF-8 text of 1 to 140 characters,
// and the brief caps the slogan at 20 words.
const words = SLOGAN.trim().split(/\s+/).filter(Boolean).length;
if (SLOGAN.length < 1 || SLOGAN.length > 140) {
  throw new Error(`slogan is ${SLOGAN.length} characters, must be 1-140`);
}
if (words > 20) {
  throw new Error(`slogan is ${words} words, must be at most 20`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SLOGAN, "utf8");
