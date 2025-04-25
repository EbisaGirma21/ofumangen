#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import { generateModel } from "./generator/model-generator";
import { generateRoute } from "./generator/route-generator";
import { generateController } from "./generator/controller-generator";

const args = process.argv.slice(2);
const [command, type, name] = args;

if (!command || !type || !name) {
  console.log(
    `Usage: ofumangen generate <model|route|controller> <mongo|mysql|postgres> <Name>`
  );
  process.exit(1);
}

if (command === "generate") {
  switch (type) {
    case "model":
      generateModel(name);
      break;
    case "route":
      generateRoute(name);
      break;
    case "controller":
      generateController(name);
      break;
    default:
      console.log(`Unknown type: ${type}`);
  }
}
