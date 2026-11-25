import { mkdirSync, writeFileSync } from "node:fs";

// One Star for Monday — a one-star restaurant review of Monday itself.
// Gate: 1-180 chars, at most 25 words, one line, plain text.
const line =
  "One star. Sat down, waited an hour, and the waiter served Monday cold with a side of dread.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
