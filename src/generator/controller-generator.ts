import path from "path";
import { writeFileFromTemplate } from "../utils/file-writer";

export function generateController(name: string) {
  const templatePath = path.resolve(
    __dirname,
    "../../templates/controller.template.ts"
  );
  const outputPath = `/controllers/${name}Controller.ts`;
  writeFileFromTemplate(templatePath, outputPath, { ModelName: name });
}
