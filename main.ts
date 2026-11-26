// Funniest Sign on a Haunted Server Room Door
// Writes one funny sign line to /output/entry.txt.
// Pure Node.js standard library, no dependencies, no network.
//
// The sign is taped to the door by the ghost itself: it moved into the
// server room for the Wi-Fi, and it is not shy about what happens if
// anyone changes the password.

import { mkdirSync, writeFileSync } from "node:fs";

const SIGN =
  "I moved in for the Wi-Fi. Change the password and I'll haunt your laptop instead. — The Ghost";

// The gate only accepts UTF-8 text of 1 to 120 characters, not only
// whitespace, on exactly one line. Fail loudly instead of shipping a
// line the judge would never see.
const chars = [...SIGN];
if (chars.length < 1 || chars.length > 120) {
  throw new Error(`sign must be 1-120 characters, got ${chars.length}`);
}
if (SIGN.trim() === "" || SIGN.includes("\n") || SIGN.includes("\r")) {
  throw new Error("sign must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SIGN, "utf8");
