// Builds a labelled contact sheet from PNGs: node scripts/contact-sheet.mjs out.jpg a.png b.png ...
import sharp from "sharp";
import path from "node:path";

const [out, ...files] = process.argv.slice(2);
const cols = 3, tw = 640, th = 400, pad = 8;
const rows = Math.ceil(files.length / cols);
const tiles = await Promise.all(
  files.map(async (f, i) => ({
    input: await sharp(f).resize(tw, th, { fit: "cover", position: "top" }).toBuffer(),
    left: (i % cols) * (tw + pad),
    top: Math.floor(i / cols) * (th + pad),
  }))
);
const labels = files.map((f, i) => ({
  input: Buffer.from(`<svg width="${tw}" height="28"><rect width="${tw}" height="28" fill="#000" opacity=".7"/><text x="8" y="19" font-size="16" font-family="Arial" fill="#fff">${path.basename(f, ".png")}</text></svg>`),
  left: (i % cols) * (tw + pad),
  top: Math.floor(i / cols) * (th + pad),
}));
await sharp({ create: { width: cols * (tw + pad), height: rows * (th + pad), channels: 3, background: "#222" } })
  .composite([...tiles, ...labels])
  .jpeg({ quality: 70 })
  .toFile(out);
console.log("ok", out);
