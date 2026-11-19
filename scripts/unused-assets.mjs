// Liste les fichiers de public/ jamais mentionnés dans src/ ni index.html.
// Usage: node scripts/unused-assets.mjs  (écrit docs/unused-assets.md)
import fs from "node:fs";
import path from "node:path";

const walk = (d, out = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};

const code = [...walk("src"), "index.html"].map((f) => fs.readFileSync(f, "utf8")).join("\n");
const unused = walk("public").filter((f) => {
  const n = path.basename(f);
  return n !== "_redirects" && !code.includes(n);
});
const size = unused.reduce((a, f) => a + fs.statSync(f).size, 0);
const lines = unused.map((f) => `- ${f.split(path.sep).join("/")} (${Math.round(fs.statSync(f).size / 1000)} Ko)`);
fs.writeFileSync(
  "docs/unused-assets.md",
  `# Fichiers de public/ jamais référencés\n\nCandidats à la suppression (vérifie avant). Total: ${(size / 1e6).toFixed(1)} Mo.\n\n${lines.join("\n")}\n`
);
console.log(unused.length, "fichiers,", (size / 1e6).toFixed(1), "Mo");
