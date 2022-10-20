#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const logFile = path.resolve(__dirname, "../../logs/chronicle-journal.md");
const [note] = process.argv.slice(2);

if (!note) {
  console.log("Provide a short note to append to the chronicle journal.");
  process.exit(0);
}

const timestamp = new Date().toISOString();
const entry = `- ${timestamp} :: ${note.trim()}\n`;
fs.appendFileSync(logFile, entry);
console.log(`Logged: ${note}`);
