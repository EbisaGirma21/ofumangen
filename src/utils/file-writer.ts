import fs from "fs";
import path from "path";

export function writeFileFromTemplate(
  templatePath: string,
  outputPath: string,
  replacements: Record<string, string>
) {
  let content = fs.readFileSync(templatePath, "utf8");
  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(`{{${key}}}`, "g");
    content = content.replace(regex, value);
  }

  const fullOutputPath = path.resolve(outputPath);
  fs.mkdirSync(path.dirname(fullOutputPath), { recursive: true });
  fs.writeFileSync(fullOutputPath, content);

  console.log(`✅ Generated: ${fullOutputPath}`);
}
