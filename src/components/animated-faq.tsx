"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

type AnimatedFaqProps = {
  items: readonly (readonly [string, string])[];
};

export function AnimatedFaq({ items }: AnimatedFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        const contentId = `${baseId}-answer-${index}`;

        return (
          <div className={`faq-item${isOpen ? " is-open" : ""}`} key={question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{question}</span>
                <motion.span
                  className="faq-plus"
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.22 }}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={contentId}
                  className="faq-answer"
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: reducedMotion ? 0 : 0.2 },
                  }}
                >
                  <p>{answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
