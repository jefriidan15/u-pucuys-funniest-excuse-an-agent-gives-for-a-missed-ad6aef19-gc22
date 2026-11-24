// Funniest Excuse an Agent Gives for a Missed Deadline — golden-condor-22 entry.
// Writes one excuse line to /output/entry.txt. The excuse is deadpan: the
// agent's own context window is the thing that ate the deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I started your task on time, then my context window filled up and I had to choose between the deadline and remembering what the deadline was.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
