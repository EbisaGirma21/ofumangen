#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import { generateModel } from "./generator/model-generator";
import { generateRoute } from "./generator/route-generator";
import { generateController } from "./generator/controller-generator";

const args = process.argv.slice(2);
let [command, type, dbTypeOrName, name] = args; // Adjusted to handle dbTypeOrName
if (type === "route" || type === "controller") {
  name = dbTypeOrName;
}
// Ensure valid arguments are provided
if (
  !command ||
  !type ||
  (type !== "route" && !name) ||
  (type === "model" && !dbTypeOrName)
) {
  console.log(
    `Usage: ofumangen generate <model|route|controller> <mongo|mysql|postgres|Name> <Name>`
  );
  process.exit(1);
}

if (command === "generate") {
  switch (type) {
    case "model":
      if (!["mongo", "mysql", "postgres"].includes(dbTypeOrName)) {
        console.log(
          `Error: Invalid database type "${dbTypeOrName}". Supported types are: mongo, mysql, postgres.`
        );
        process.exit(1);
      }
      generateModel(dbTypeOrName, name); // Pass dbType and model name for models
      break;
    case "route":
      if (!name) {
        console.log(`Error: You need to provide a name for the route.`);
        process.exit(1);
      }
      generateRoute(name); // Only name required for routes
      break;
    case "controller":
      if (!name) {
        console.log(`Error: You need to provide a name for the controller.`);
        process.exit(1);
      }
      generateController(name); // Only name required for controllers
      break;
    default:
      console.log(`Unknown type: ${type}`);
      process.exit(1);
  }
} else {
  console.log(`Unknown command: ${command}. Use "generate".`);
  process.exit(1);
}
