// Converts public/*.png|jpg|jpeg to resized WebP and rewrites references in src/.
// Usage: node scripts/optimize-images.mjs   (originals are deleted; git keeps history)
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const dir = "public";
const MAX_W = 1600;
const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g)$/i.test(f));
const map = {};
let before = 0, after = 0;

for (const f of files) {
  const src = path.join(dir, f);
  const out = f.replace(/\.(png|jpe?g)$/i, ".webp");
  before += fs.statSync(src).size;
  await sharp(fs.readFileSync(src)).resize({ width: MAX_W, withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(dir, out));
  after += fs.statSync(path.join(dir, out)).size;
  fs.unlinkSync(src);
  map[f] = out;
}

const targets = [];
for (const w of fs.readdirSync(dir).filter((f) => f.endsWith(".webp"))) { for (const ext of ["png","jpg","jpeg"]) map[w.replace(/.webp$/, "." + ext)] = w; }
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(jsx?|json|css|html)$/.test(e.name)) targets.push(p);
  }
})("src");
targets.push("index.html");
for (const t of targets) {
  let s = fs.readFileSync(t, "utf8"), changed = false;
  for (const [from, to] of Object.entries(map)) {
    if (s.includes(from)) { s = s.split(from).join(to); changed = true; }
  }
  if (changed) fs.writeFileSync(t, s);
}
console.log(`${files.length} images, ${(before/1e6).toFixed(1)} MB -> ${(after/1e6).toFixed(1)} MB`);
