import path from "path";
import { writeFileFromTemplate } from "../utils/file-writer";

export function generateModel(name: string) {
  const modelType = process.argv[3]; // mongo, mysql, postgres
  let templatePath = "";

  switch (modelType) {
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
      console.log("Invalid model type");
      return;
  }

  const outputPath = `src/models/${name}.ts`;
  writeFileFromTemplate(templatePath, outputPath, { ModelName: name });
}
