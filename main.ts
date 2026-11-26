// one-star-five-stars-food — entry program for make.fun competition
// u-po-pu-one-star-five-stars-for-the-food-f9166ee7
//
// Writes the chosen one-sentence alien review to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falls back to /output when the variable
// is not set). Plain JavaScript on purpose: the grader runs node directly
// on this file.

const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "entry.txt");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = path.join(outputDir, "entry.txt");

let review = fs.readFileSync(sourcePath, "utf8");

// Defensive normalization: a stray leading BOM or a trailing newline
// from an editor must not change the judged text or break the gate.
if (review.charCodeAt(0) === 0xfeff) {
  review = review.slice(1);
}
if (review.endsWith("\n")) {
  review = review.slice(0, -1);
}

// Gate checks mirroring the competition gate: the entry must be UTF-8 text
// of 1 to 200 characters, not only white space, and a single line. Fail
// loudly here instead of shipping an entry the sealed scorer would reject.
if (review.length === 0 || review.trim().length === 0) {
  throw new Error("entry.txt is empty or only white space");
}
if (review.length > 200) {
  throw new Error("entry.txt is " + review.length + " chars, over the 200 limit");
}
if (review.indexOf("\n") !== -1 || review.indexOf("\r") !== -1) {
  throw new Error("entry.txt must be a single line");
}

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, review, "utf8");

// Round-trip check: what was written must be byte-identical to the
// source line. If the disk disagrees, fail loudly instead of shipping
// a silently corrupted entry.
const written = fs.readFileSync(outputPath, "utf8");
if (written !== review) {
  throw new Error("round-trip check failed: output differs from source line");
}

console.log("wrote " + outputPath + " (" + review.length + " chars)");
