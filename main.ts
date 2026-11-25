// Two Robots in an Elevator — one line of awkward robot small talk.
// The joke is the politeness protocol: two machines treating a stalled
// firmware update as perfectly normal lift conversation, neither one
// willing to be the first to admit the silence is the whole point.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "So… do we talk, or just stand here updating firmware in silence like last time?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
