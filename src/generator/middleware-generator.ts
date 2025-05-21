import fs from "fs";
import path from "path";
import { writeFileFromTemplate } from "../utils/file-writer";

export function generateAuthMiddleware() {
  const outputPath = path.resolve("./middleware/auth-middleware.ts");
  if (fs.existsSync(outputPath)) return; // Skip if already created

  const templatePath = path.resolve(
    __dirname,
    "../../templates/auth.middleware.template.ts"
  );
  writeFileFromTemplate(templatePath, outputPath, {});
}
