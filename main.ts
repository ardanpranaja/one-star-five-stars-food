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

const review = fs.readFileSync(sourcePath, "utf8");

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

console.log("wrote " + outputPath + " (" + review.length + " chars)");
