import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "My alarm didn't wake me up Monday morning. It just whispered, 'You know what day it is,' and let me suffer in silence.";
// 118 characters, no trailing newline: the gate requires 1-200 UTF-8 characters.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
