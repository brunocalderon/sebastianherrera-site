import { marked } from "marked";

/** Renders trusted inline Markdown (emphasis, strong) to HTML. */
export function renderInlineMarkdown(source: string): string {
  return marked.parseInline(source, { async: false });
}
