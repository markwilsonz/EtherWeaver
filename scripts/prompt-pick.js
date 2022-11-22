const fs = require("fs");
const path = require("path");

const palettePath = path.resolve(__dirname, "../assets/inspiration.json");
const palette = JSON.parse(fs.readFileSync(palettePath, "utf8"));
const note = palette[Math.floor(Math.random() * palette.length)];

console.log(`Prompt: ${note}`);
