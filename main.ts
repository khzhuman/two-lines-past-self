import { mkdirSync, writeFileSync } from "node:fs";

const line1 = "Say yes when she asks you to stay for one more coffee in Lisbon.";
const line2 = "That extra hour became the marriage you almost walked away from.";
const entry = [line1, line2].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
