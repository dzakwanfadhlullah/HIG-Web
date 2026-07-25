"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type CopyCommandProps = {
  command: string;
  label?: string;
};

export function CopyCommand({ command, label = "Copy" }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();

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
    <motion.button
      className="copy-button"
      type="button"
      onClick={copy}
      whileTap={reducedMotion ? undefined : { scale: 0.96 }}
    >
      <span className="copy-label" aria-live="polite">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={copied ? "copied" : "copy"}
            initial={reducedMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: reducedMotion ? 0 : 0.16 }}
          >
            {copied ? "Copied" : label}
          </motion.span>
        </AnimatePresence>
      </span>
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        animate={copied && !reducedMotion ? { scale: [0.8, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 0.28 }}
      >
        {copied ? (
          <path d="m4.5 10 3.2 3.2 7.8-7.8" />
        ) : (
          <>
            <rect x="7" y="3" width="9" height="11" rx="2" />
            <path d="M5 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1" />
          </>
        )}
      </motion.svg>
    </motion.button>
  );
}
