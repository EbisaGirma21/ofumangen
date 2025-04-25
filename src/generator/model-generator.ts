import path from "path";
import { writeFileFromTemplate } from "../utils/file-writer";

export function generateModel(type: string, name: string) {
  let templatePath = "";

  // Use the model type to select the appropriate template
  switch (type) {
    case "mongo":
      templatePath = path.resolve(
        __dirname,
        "../../templates/model.mongo.template.ts"
      );
      break;
    case "mysql":
      templatePath = path.resolve(
        __dirname,
        "../../templates/model.mysql.template.ts"
      );
      break;
    case "postgres":
      templatePath = path.resolve(
        __dirname,
        "../../templates/model.postgres.template.ts"
      );
      break;
    default:
      console.log(
        "Invalid model type. Please use 'mongo', 'mysql', or 'postgres'."
      );
      return;
  }

  // Set the output path for the generated model file
  const outputPath = path.resolve(`./models/${name}.ts`);

  // Call the function to generate the model file from the template
  writeFileFromTemplate(templatePath, outputPath, { ModelName: name });
}
