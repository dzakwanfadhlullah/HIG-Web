"use client";

import {
  animate as motionAnimate,
  inView,
  stagger,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useLayoutEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

type MotionExperienceProps = ComponentPropsWithoutRef<"main"> & {
  children: ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function MotionExperience({
  children,
  className,
  ...props
}: MotionExperienceProps) {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scope = root.current;
    if (!scope) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      scope.dataset.motion = "reduced";
      return;
    }

    scope.dataset.motion = "ready";
    gsap.registerPlugin(ScrollTrigger);

    const cleanups: Array<() => void> = [];
    const context = gsap.context(() => {
      const navShell = document.querySelector(".nav-shell");
      if (navShell) {
        gsap.from(navShell, {
          autoAlpha: 0,
          y: -18,
          scale: 0.96,
          duration: 0.65,
          ease: "power3.out",
        });
      }

      const hero = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      hero
        .from(".announcement", { autoAlpha: 0, y: 14, duration: 0.45 })
        .from(
          ".hero-title-line",
          { autoAlpha: 0, yPercent: 115, rotate: 1.5, duration: 0.8, stagger: 0.09 },
          "-=0.15",
        )
        .from(
          [".hero-copy", ".hero-actions"],
          { autoAlpha: 0, y: 22, duration: 0.65, stagger: 0.1 },
          "-=0.42",
        )
        .from(
          ".audit-stage",
          { autoAlpha: 0, y: 70, scale: 0.965, duration: 1 },
          "-=0.42",
        )
        .from(
          [
            ".audit-window .window-bar",
            ".audit-body aside",
            ".audit-heading",
            ".finding-high",
            ".finding-grid .finding",
          ],
          { autoAlpha: 0, y: 16, duration: 0.48, stagger: 0.075 },
          "-=0.62",
        )
        .from(
          ".stage-note",
          { autoAlpha: 0, scale: 0.9, y: 12, duration: 0.45, stagger: 0.08 },
          "-=0.22",
        );

      const navTrigger = ScrollTrigger.create({
        start: 72,
        end: "max",
        toggleClass: { targets: ".nav-shell", className: "is-scrolled" },
      });
      cleanups.push(() => navTrigger.kill());

      const navSections = [
        ["#compare", 'a[href="#compare"]'],
        ["#how-it-works", 'a[href="#how-it-works"]'],
        ["#principles", 'a[href="#principles"]'],
      ] as const;

      navSections.forEach(([sectionSelector, linkSelector]) => {
        const section = scope.querySelector(sectionSelector);
        const link = document.querySelector<HTMLElement>(
          `.nav-links ${linkSelector}`,
        );
        if (!section || !link) return;

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top 48%",
          end: "bottom 48%",
          onToggle: ({ isActive }) => link.classList.toggle("is-active", isActive),
        });
        cleanups.push(() => trigger.kill());
      });

      const desktop = gsap.matchMedia();
      desktop.add("(min-width: 761px)", () => {
        const comparison = gsap.timeline({
          scrollTrigger: {
            trigger: ".spotlight",
            start: "top 72%",
            end: "bottom 46%",
            scrub: 0.8,
          },
        });

        comparison
          .from(
            ".comparison-front",
            { y: 80, scale: 0.88, rotation: 0, duration: 1 },
            0,
          )
          .from(
            ".comparison-back",
            { x: 145, y: 65, scale: 0.78, rotation: 0, duration: 1 },
            0,
          )
          .from(
            ".comparison-middle",
            { x: -145, y: 65, scale: 0.78, rotation: 0, duration: 1 },
            0,
          )
          .from(
            ".comparison-card figcaption",
            { autoAlpha: 0, y: 8, duration: 0.25, stagger: 0.06 },
            0.72,
          );

        const workflowProgress = scope.querySelector(
          ".workflow-progress > span",
        );
        if (workflowProgress) {
          gsap.fromTo(
            workflowProgress,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".workflow-list",
                start: "top 58%",
                end: "bottom 54%",
                scrub: true,
              },
            },
          );
        }

        const workflowItems = gsap.utils.toArray<HTMLElement>(
          ".workflow-list li",
        );
        const orientationItems = gsap.utils.toArray<HTMLElement>(
          ".orientation-card strong",
        );

        workflowItems.forEach((item, index) => {
          const setActive = () => {
            workflowItems.forEach((workflowItem) => {
              workflowItem.classList.toggle("is-active", workflowItem === item);
            });
            orientationItems.forEach((question, questionIndex) => {
              question.classList.toggle(
                "is-active",
                questionIndex === Math.min(index, orientationItems.length - 1),
              );
            });
          };

          const trigger = ScrollTrigger.create({
            trigger: item,
            start: "top 58%",
            end: "bottom 48%",
            onEnter: setActive,
            onEnterBack: setActive,
          });
          cleanups.push(() => trigger.kill());
        });

        workflowItems[0]?.classList.add("is-active");
        orientationItems[0]?.classList.add("is-active");

        gsap.to(".final-cta", {
          backgroundPosition: "50% 24%",
          ease: "none",
          scrollTrigger: {
            trigger: ".final-cta",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      desktop.add("(max-width: 760px)", () => {
        gsap.from(".comparison-card", {
          autoAlpha: 0,
          y: 44,
          scale: 0.94,
          stagger: 0.08,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".comparison-stack",
            start: "top 82%",
            once: true,
          },
        });
      });

      cleanups.push(() => desktop.revert());

      const terminalRows = gsap.utils.toArray<HTMLElement>(
        ".terminal-body > div",
      );
      gsap.from(terminalRows, {
        autoAlpha: 0,
        x: -14,
        duration: 0.42,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".terminal",
          start: "top 76%",
          once: true,
        },
      });

      const statValues = gsap.utils.toArray<HTMLElement>("[data-count]");
      statValues.forEach((element) => {
        const target = Number(element.dataset.count);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.35,
          ease: "power2.out",
          snap: { value: 1 },
          onUpdate: () => {
            element.textContent = String(counter.value);
          },
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.from(".reference-lines", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.75,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".reference-map",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".reference-pills span", {
        autoAlpha: 0,
        y: 10,
        duration: 0.38,
        stagger: 0.055,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reference-map",
          start: "top 76%",
          once: true,
        },
      });
    }, scope);

    const revealGroups = [
      [".trust-strip", ".trust-row span"],
      [".spotlight", ".spotlight-copy > *"],
      [".modes", ".section-heading, .mode-card"],
      [".workflow", ".workflow-intro > *"],
      [".principles", ".split-heading > *, .principle-grid article"],
      [".evidence", ".section-heading, .stats-grid article, .reference-map"],
      [".install-section", ".install-copy > *"],
      [".open-source", ".open-source-grid > *"],
      [".faq", ".faq-intro, .faq-item"],
      [".final-cta", ".section-label, .final-title-line, .button"],
      [".site-footer", ".footer-brand, .footer-links > div, .footer-bottom"],
    ] as const;

    revealGroups.forEach(([containerSelector, itemSelector]) => {
      const container =
        scope.querySelector(containerSelector) ??
        document.querySelector(containerSelector);
      if (!container) return;

      const items = Array.from(
        container.querySelectorAll<HTMLElement>(itemSelector),
      );
      items.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(24px)";
      });

      let revealed = false;
      const stop = inView(
        container,
        () => {
          if (revealed) return;
          revealed = true;
          motionAnimate(
            items,
            { opacity: 1, y: 0 },
            {
              duration: 0.68,
              delay: stagger(0.07),
              ease,
            },
          );
        },
        { margin: "0px 0px -12% 0px", amount: "some" },
      );
      cleanups.push(stop);
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
      delete scope.dataset.motion;
    };
  }, []);

  return (
    <main ref={root} className={className} {...props}>
      {children}
    </main>
  );
}
