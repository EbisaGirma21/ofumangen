#!/usr/bin/env ts-node

import { generateModel } from "./generator/model-generator";
import { generateRoute } from "./generator/route-generator";
import { generateController } from "./generator/controller-generator";
import { generateAuthMiddleware } from "./generator/middleware-generator";

// Get the model name from CLI args
const args = process.argv.slice(2);
const [name] = args;

if (!name) {
  console.log(`Usage: ofuman <ModelName>`);
  process.exit(1);
}

try {
  console.log(`Generating resources for "${name}" using MongoDB...`);

  generateModel(name);
  generateController(name);
  generateRoute(name);
  generateAuthMiddleware();

  console.log(
    `✔ Successfully generated model, controller, and route for "${name}".`
  );
} catch (error: any) {
  console.error("Error generating files:", error.message);
  process.exit(1);
}
