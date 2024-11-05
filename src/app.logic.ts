import fs from "fs";
import path from "path";
import { yarg } from "./config/plugins/args.plugin";
const { l: limit, b: base, s: showTable } = yarg;

let output = `
==============================
        Tabla del ${base}
==============================\n
`;

for (let i = 1; i <= limit; i++) {
  output += `${base} x ${i} = ${base * i} \n`;
}

const outputPath = path.join(__dirname, `../outputs`);

const folderExists = fs.existsSync(outputPath);
if (!folderExists) fs.mkdirSync(outputPath, { recursive: true });

fs.writeFileSync(path.join(outputPath, `tabla-${base}.txt`), output, {});
if (showTable) console.log(output);

console.log("File created!");
