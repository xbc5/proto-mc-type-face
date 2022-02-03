const fs = require("fs-extra");
const path = require("path");
const assert = require("assert");

ROOT = process.cwd();
PKGJSON = path.join(ROOT, "package.json");
SCRATCH = path.join(ROOT, "scratch");
TEMPLATE = path.join(ROOT, "template");

const isRoot = () => fs.existsSync(PKGJSON);
const assertIsRoot = () => assert(isRoot(), "Run this from project root.");
const hasScratch = () => fs.existsSync(SCRATCH);

function createScratch() {
  if (hasScratch()) {
    console.log("You must clean the scratch folder first");
    process.exit(1);
  }
  fs.copySync(TEMPLATE, SCRATCH);
}

function deleteScratch() {
  if (hasScratch()) fs.removeSync(SCRATCH);
}

deleteScratch();
createScratch();

console.log("Scratch created.")
