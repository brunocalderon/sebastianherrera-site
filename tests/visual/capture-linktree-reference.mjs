import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("tests/visual/reference/linktree");
const viewports = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "desktop-1065", width: 1065, height: 1200 },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

for (const viewport of viewports) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto("https://linktr.ee/coachphilmataj", { waitUntil: "networkidle" });
  await page.keyboard.press("Escape");
  await page.getByRole("heading", { name: "Phil Mataj", exact: true }).waitFor();

  const clip = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    if (!h1) return null;

    let node = h1.parentElement;
    while (node) {
      const rect = node.getBoundingClientRect();
      const style = getComputedStyle(node);
      const radius = parseFloat(style.borderTopLeftRadius || "0");
      if (rect.width >= 280 && rect.height >= 700 && radius >= 12) {
        return {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: Math.min(rect.height, window.innerHeight - rect.y),
        };
      }
      node = node.parentElement;
    }

    const h1Rect = h1.getBoundingClientRect();
    return {
      x: Math.max(0, h1Rect.x - 28),
      y: Math.max(0, h1Rect.y - 400),
      width: Math.min(window.innerWidth, h1Rect.width + 56),
      height: Math.min(window.innerHeight, 900),
    };
  });

  const pathFile = path.join(outDir, `${viewport.name}.png`);
  if (clip) {
    await page.screenshot({ path: pathFile, clip });
  } else {
    await page.screenshot({ path: pathFile });
  }
}

await writeFile(
  path.join(outDir, "README.txt"),
  "Reference crops from linktr.ee/coachphilmataj for manual visual comparison.\n",
);

await browser.close();
console.log(`Saved Linktree references to ${outDir}`);
