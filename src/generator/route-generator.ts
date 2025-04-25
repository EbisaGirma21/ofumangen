import path from "path";
import { writeFileFromTemplate } from "../utils/file-writer";
import { log } from "console";

export function generateRoute(name: string) {
  log(`Generating route for ${name}`);
  const templatePath = path.resolve(
    __dirname,
    "../../templates/route.template.ts"
  );
  const outputPath = `src/routes/${name.toLowerCase()}.ts`;
  writeFileFromTemplate(templatePath, outputPath, { ModelName: name });
}
