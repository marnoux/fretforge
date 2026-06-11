import type { ReactNode } from "react";
import type { Tab as TabModel } from "../types";

/**
 * Renders a structured Tab back into the original `<pre class="tab">` markup
 * (pick rows → .pk, label rows → .ch, fret lines → plain text), preserving
 * exact whitespace. A future tab player can read `tab.lines` (kind === "string")
 * directly instead of re-parsing the DOM.
 *
 * Consecutive text segments are coalesced into single string children so React
 * does not emit `<!-- -->` text-separator comments between fret lines — the
 * serialized output stays byte-identical to the source markup.
 */
export function Tab({ tab }: { tab: TabModel }) {
  const children: ReactNode[] = [];
  const pushText = (text: string) => {
    const last = children[children.length - 1];
    if (typeof last === "string") children[children.length - 1] = last + text;
    else children.push(text);
  };

  tab.lines.forEach((line, i) => {
    if (i > 0) pushText("\n");
    if (line.kind === "pick") {
      children.push(
        <span className="pk" key={i}>
          {line.text}
        </span>,
      );
    } else if (line.kind === "label") {
      children.push(
        <span className="ch" key={i}>
          {line.text}
        </span>,
      );
    } else {
      pushText(line.text);
    }
  });

  return <pre className="tab">{children}</pre>;
}
