"use client";

import { useState } from "react";

type CopyCommandProps = {
  command: string;
  label?: string;
};

export function CopyCommand({ command, label = "Copy" }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="copy-button" type="button" onClick={copy}>
      <span aria-live="polite">{copied ? "Copied" : label}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20">
        {copied ? (
          <path d="m4.5 10 3.2 3.2 7.8-7.8" />
        ) : (
          <>
            <rect x="7" y="3" width="9" height="11" rx="2" />
            <path d="M5 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1" />
          </>
        )}
      </svg>
    </button>
  );
}
