#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const logPath = path.resolve(__dirname, "../logs/chronicle-journal.md");
const outPath = path.resolve(__dirname, "../docs/journal.json");

const lines = fs.readFileSync(logPath, "utf8").split("\n");
const entries = lines
  .filter((line) => line.startsWith("-"))
  .map((line) => {
    const [_, rest] = line.split("- ");
    const [timestampPart, notePart] = rest.split(" :: ");
    const tagMatch = timestampPart.match(/\[(.*)\]/);
    const timestamp = timestampPart.split(" [")[0].trim();
    const tag = tagMatch ? tagMatch[1] : "misc";
    return {
      timestamp,
      tag,
      text: notePart.trim(),
    };
  });

fs.writeFileSync(outPath, JSON.stringify(entries, null, 2));
console.log(`Journal exported to ${outPath}`);
