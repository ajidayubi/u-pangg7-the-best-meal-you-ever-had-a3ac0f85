// The Best Meal You Ever Had — one sentence, at most 200 characters.
// The program holds the sentence in a single constant, checks it against
// the gate (1-200 characters, not only whitespace), then writes exactly
// that sentence — no trailing newline — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "My grandmother's rendang, eaten cross-legged on her kitchen floor at midnight while the air still smelled of coconut and woodsmoke, the beef so dark it fell apart before I bit down.";

const n = SENTENCE.length;
if (n < 1 || n > 200) {
  throw new Error(`sentence must be 1-200 characters, got ${n}`);
}
if (SENTENCE.trim().length === 0) {
  throw new Error("sentence must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(SENTENCE);
console.log(`chars: ${n}`);
