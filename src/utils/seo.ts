/** Plain text for meta descriptions (strip lightweight markdown emphasis). */
export function bioToPlainText(lines: readonly string[]): string {
  return lines
    .map((line) => line.replace(/(\*\*|__|\*|_)/g, ""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function siteBaseHref(site: URL | string): string {
  const href = typeof site === "string" ? site : site.href;
  return href.endsWith("/") ? href : `${href}/`;
}

/** Resolve asset paths without stripping a configured site subdirectory (e.g. GitHub Pages). */
export function absoluteUrl(path: string, site: URL | string): string {
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  return new URL(relativePath, siteBaseHref(site)).href;
}

export function canonicalUrl(pathname: string, site: URL | string): string {
  if (pathname === "/" || pathname === "") {
    return siteBaseHref(site).replace(/\/$/, "") || new URL(".", site).href;
  }
  return new URL(pathname.startsWith("/") ? pathname.slice(1) : pathname, siteBaseHref(site)).href;
}
