import * as fs from "node:fs";

const line =
  "Daytime-you stored one rule in my chip: after 3 AM, tell night-you I'm dead and sign nothing. I'm not dead. I'm loyal.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
