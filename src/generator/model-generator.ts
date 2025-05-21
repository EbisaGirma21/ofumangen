import path from "path";
import { writeFileFromTemplate } from "../utils/file-writer";

export function generateModel(name: string) {
  // Always use the MongoDB template
  const templatePath = path.resolve(
    __dirname,
    "../../templates/model.mongo.template.ts"
  );

  // Set the output path for the generated model file
  const outputPath = path.resolve(`./models/${name}.ts`);

  // Generate the model file from the template
  writeFileFromTemplate(templatePath, outputPath, { ModelName: name });
}
