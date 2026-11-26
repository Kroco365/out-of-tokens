import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a flat error message that turns into the joke.
// Error tone first ("token budget exhausted"), then the twist:
// the single word that would have settled everything is exactly
// the word that never got generated.
const LINE =
  "Error: token budget exhausted. The answer was almost finished. The final word was 'yes'. Or 'no'. We'll never know.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
