import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { inlineTextStyles } from "../../styles/styles";

const inlineLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

export const formatInlineLinks = (
  text: string,
  onInternalLinkClick?: () => void,
): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(inlineLinkPattern)) {
    const [fullMatch, label, href] = match;
    const matchIndex = match.index ?? 0;

    if (matchIndex > lastIndex) {
      nodes.push(text.slice(lastIndex, matchIndex));
    }

    const key = `${href}-${matchIndex}`;

    nodes.push(
      href.startsWith("/") ? (
        <Link
          key={key}
          to={href}
          className={inlineTextStyles.link}
          onClick={onInternalLinkClick}
        >
          {label}
        </Link>
      ) : (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={inlineTextStyles.link}
        >
          {label}
        </a>
      ),
    );

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};
