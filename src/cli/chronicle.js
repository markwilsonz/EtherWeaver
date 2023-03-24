#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const logFile = path.resolve(__dirname, "../../logs/chronicle-journal.md");
const args = process.argv.slice(2);

let tag = "misc";
const content = [];

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === "--tag" && args[i + 1]) {
    tag = args[++i].trim();
    continue;
  }
  content.push(arg);
}

if (!content.length) {
  console.log("Provide a short note to append to the chronicle journal.");
  process.exit(0);
}

const timestamp = new Date().toISOString();
const note = content.join(" ").trim();
const entry = `- ${timestamp} [${tag}] :: ${note}\n`;
fs.appendFileSync(logFile, entry);
console.log(`Logged: ${note}`);
