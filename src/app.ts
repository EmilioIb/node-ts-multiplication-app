import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(yarg);
// console.log(yarg.b);

(async () => {
  await main();
})();

async function main() {
  const {
    l: limit,
    b: base,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;
  ServerApp.run({ limit, base, showTable, fileName, fileDestination });
}
