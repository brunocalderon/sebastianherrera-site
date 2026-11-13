/** Plain text for meta descriptions (strip lightweight markdown emphasis). */
export function bioToPlainText(lines: readonly string[]): string {
  return lines
    .map((line) => line.replace(/(\*\*|__|\*|_)/g, ""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
