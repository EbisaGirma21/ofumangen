import path from "path";
import { writeFileFromTemplate } from "../utils/file-writer";

export function generateRoute(name: string) {
  const templatePath = path.resolve(
    __dirname,
    "../../templates/route.template.ts"
  );
  const outputPath = `src/routes/${name.toLowerCase()}.ts`;
  writeFileFromTemplate(templatePath, outputPath, { ModelName: name });
}
