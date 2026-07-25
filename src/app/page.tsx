import Image from "next/image";
import { AnimatedFaq } from "@/components/animated-faq";
import { CopyCommand } from "@/components/copy-command";
import { MotionExperience } from "@/components/motion-experience";

const installCommand = "npm install hig-driven && npx hig-driven install";

const principles = [
  {
    title: "Purpose",
    body: "Start with the meaningful human outcome, not a visual trend.",
    icon: "purpose",
  },
  {
    title: "Agency",
    body: "Keep people in control and make mistakes recoverable.",
    icon: "agency",
  },
  {
    title: "Responsibility",
    body: "Be transparent, minimize harm, and protect people’s interests.",
    icon: "responsibility",
  },
  {
    title: "Familiarity",
    body: "Use concepts, labels, and behavior people already understand.",
    icon: "familiarity",
  },
  {
    title: "Flexibility",
    body: "Adapt across people, devices, languages, and input methods.",
    icon: "flexibility",
  },
  {
    title: "Simplicity",
    body: "Keep what matters and remove work that does not serve the task.",
    icon: "simplicity",
  },
  {
    title: "Craft",
    body: "Treat typography, states, writing, reliability, and performance as one system.",
    icon: "craft",
  },
  {
    title: "Delight",
    body: "Make care felt without letting personality obstruct the task.",
    icon: "delight",
  },
] as const;

type PrincipleIconName = (typeof principles)[number]["icon"];

const modes = [
  {
    index: "01",
    title: "Guide",
    eyebrow: "Before implementation",
    body: "Turn an idea into a design contract with purpose, information architecture, action hierarchy, state coverage, and acceptance criteria.",
    output: "Design contract",
  },
  {
    index: "02",
    title: "Build",
    eyebrow: "Inside the codebase",
    body: "Implement or refactor in the existing stack while preserving product identity, native semantics, real behavior, and working user flows.",
    output: "Production-ready interface",
  },
  {
    index: "03",
    title: "Audit",
    eyebrow: "Before you call it done",
    body: "Inspect evidence, rank findings by impact, recommend concrete changes, and define the condition that proves each issue is resolved.",
    output: "Prioritized findings",
  },
];

const workflow = [
  ["Clarify purpose", "Define the product outcome and the person’s primary job."],
  ["Model structure", "Organize content, navigation, and actions by user meaning."],
  ["Cover behavior", "Design responsive layouts, real controls, and complete states."],
  ["Validate in context", "Check access, recovery, edge cases, and runtime behavior."],
];

const faqs = [
  [
    "Is HIG Driven an official Apple project?",
    "No. HIG Driven is an independent, open-source Codex skill. It applies principles distilled from public Apple design guidance without claiming endorsement, certification, or affiliation.",
  ],
  [
    "Will it make every website look like Apple?",
    "No. The skill treats Apple guidance as a reasoning system, not a visual skin. It preserves web conventions and the product’s own identity instead of defaulting to iOS controls, glass, or Apple-like decoration.",
  ],
  [
    "Can it change an existing codebase?",
    "Yes. Build/Refactor mode inspects the current stack, keeps user-owned changes, implements the requested scope, and audits the result. It does not redesign unrelated surfaces without authorization.",
  ],
  [
    "What does the audit return?",
    "Findings are grouped as Blocker, High impact, Medium, and Polish. Each material finding includes the observation, user impact, principle, recommendation, and testable acceptance criteria.",
  ],
  [
    "Does it need the internet at runtime?",
    "The installed skill and its distilled references are local. Network access is only needed when the task requires current external documentation, a remote app, or another online resource.",
  ],
  [
    "Does it guarantee HIG compliance?",
    "No. HIG Driven does not issue compliance claims. It explains which principles and checks a result satisfies, what evidence was inspected, and what still requires verification.",
  ],
] as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function PrincipleIcon({ name }: { name: PrincipleIconName }) {
  const commonProps = {
    "aria-hidden": true,
    viewBox: "0 0 16 16",
    shapeRendering: "crispEdges" as const,
  };

  switch (name) {
    case "purpose":
      return (
        <svg {...commonProps}>
          <path
            fillRule="evenodd"
            d="M7 0h2v2h2v1h2v2h1v2h2v2h-2v2h-1v2h-2v1H9v2H7v-2H5v-1H3v-2H2V9H0V7h2V5h1V3h2V2h2V0Zm0 4H5v1H4v2H3v2h1v2h1v1h2v1h2v-1h2v-1h1V9h1V7h-1V5h-1V4H9V3H7v1Zm0 2h2v1h1v2H9v1H7V9H6V7h1V6Z"
          />
          <rect className="icon-accent-fill" x="7" y="7" width="2" height="2" />
        </svg>
      );
    case "agency":
      return (
        <svg {...commonProps}>
          <path d="M1 6h4v1h2v1h2V5h2V3h1V1h4v4h-4V4h-1v2h-1v4h1v2h1v-1h4v4h-4v-2h-1v-1H9V9H7v1H5v1H1V6Zm1 2v1h2V8H2Zm11-5v1h2V3h-2Zm0 10v1h2v-1h-2Z" />
          <rect className="icon-accent-fill" x="2" y="7" width="2" height="2" />
        </svg>
      );
    case "responsibility":
      return (
        <svg {...commonProps}>
          <path
            fillRule="evenodd"
            d="M7 0h2v1h2v1h3v8h-1v2h-2v2H9v2H7v-2H5v-2H3v-2H2V2h3V1h2V0ZM4 4v5h1v2h2v2h2v-1h2v-2h1V4h-2V3H6v1H4Z"
          />
          <path className="icon-accent-fill" d="M5 7h2v2h1V8h1V7h2v2h-1v1H9v1H7v-1H6V9H5V7Z" />
        </svg>
      );
    case "familiarity":
      return (
        <svg {...commonProps}>
          <path d="M7 0h2v1h2v2h2v2h2v2h-2v8H9v-5H7v5H3V7H1V5h2V4h1V3h1V2h2V0Zm1 2H7v1H6v1H5v1H4v8h1V8h6v5h1V5h-1V4h-1V3H8V2Z" />
          <rect className="icon-accent-fill" x="9" y="11" width="2" height="2" />
        </svg>
      );
    case "flexibility":
      return (
        <svg {...commonProps}>
          <path d="M1 1h5v2H4v1H3v2H1V1Zm9 0h5v5h-2V4h-1V3h-2V1ZM1 10h2v2h1v1h2v2H1v-5Zm12 0h2v5h-5v-2h2v-1h1v-2Z" />
          <rect className="icon-accent-fill" x="7" y="7" width="2" height="2" />
        </svg>
      );
    case "simplicity":
      return (
        <svg {...commonProps}>
          <path d="M1 3h14v2H1V3Zm2 4h10v2H3V7Zm2 4h6v2H5v-2Z" />
          <rect className="icon-accent-fill" x="12" y="11" width="3" height="2" />
        </svg>
      );
    case "craft":
      return (
        <svg {...commonProps}>
          <path d="M8 0h2v2h1v1h1v1h1v2h1v2h-1v2h-1v2h-1v2H5v-1H3v-2h1V9h1V7h1V5h1V3h1V0Zm1 3v2H8v2H7v2H6v2h4v-2h1V7h1V6h-1V5h-1V3H9Z" />
          <rect className="icon-accent-fill" x="8" y="6" width="2" height="2" />
          <path d="M3 13h2v2H1v-2h2Z" />
        </svg>
      );
    case "delight":
      return (
        <svg {...commonProps}>
          <path
            fillRule="evenodd"
            d="M5 0h6v1h2v2h2v2h1v6h-1v2h-2v2h-2v1H5v-1H3v-2H1v-2H0V5h1V3h2V1h2V0Zm0 2H4v1H3v1H2v8h1v1h1v1h8v-1h1v-1h1V4h-1V3h-1V2H5Zm-1 8h2v1h1v1h2v-1h1v-1h2v2h-1v1H5v-1H4v-2Z"
          />
          <rect className="icon-accent-fill" x="4" y="6" width="2" height="2" />
          <rect className="icon-accent-fill" x="10" y="6" width="2" height="2" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="HIG Driven home">
            <Mark />
            <span>HIG Driven</span>
          </a>
          <div className="nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#compare">Compare</a>
            <a href="#principles">Principles</a>
          </div>
          <a className="nav-cta" href="#install">
            Install <ArrowIcon />
          </a>
        </nav>
      </header>

      <MotionExperience id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true">
            <Image
              className="hero-backdrop-image"
              src="/backgroundhero.png"
              alt=""
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
            />
            <span className="hero-backdrop-veil" />
          </div>
          <div className="hero-inner container">
            <a className="announcement" href="#install">
              <span>New</span>
              <strong>HIG Driven is available on npm</strong>
              <ArrowIcon />
            </a>

            <h1 id="hero-title" aria-label="Build interfaces people understand—not just admire.">
              <span className="hero-title-clip" aria-hidden="true">
                <span className="hero-title-line">Build interfaces people</span>
              </span>
              <span className="hero-title-clip" aria-hidden="true">
                <span className="hero-title-line">
                  <em>understand</em>—not just admire.
                </span>
              </span>
            </h1>
            <p className="hero-copy">
              A Codex skill for planning, building, refactoring, and auditing
              web or app interfaces with human outcomes at the center.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#install">
                Install HIG Driven <ArrowIcon />
              </a>
              <a className="text-link" href="#how-it-works">
                See how it works <ArrowIcon />
              </a>
            </div>

            <div className="audit-stage" aria-label="Example HIG Driven audit">
              <div className="stage-glow" />
              <div className="audit-window">
                <div className="window-bar">
                  <div className="window-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>Interface audit</span>
                  <span className="status-dot">Ready</span>
                </div>
                <div className="audit-body">
                  <aside aria-label="Audit categories">
                    <span className="active">Overview</span>
                    <span>Purpose</span>
                    <span>Navigation</span>
                    <span>States</span>
                    <span>Access</span>
                  </aside>
                  <div className="audit-content">
                    <div className="audit-heading">
                      <div>
                        <span className="kicker">Checkout review</span>
                        <h2>Three findings need attention</h2>
                      </div>
                      <span className="audit-count">3 findings</span>
                    </div>
                    <article className="finding finding-high">
                      <span className="severity">High impact</span>
                      <h3>The primary action competes with navigation</h3>
                      <p>Make the next step recognizable without hiding valid exits.</p>
                      <span className="acceptance">Acceptance: one visually dominant submit action</span>
                    </article>
                    <div className="finding-grid">
                      <article className="finding">
                        <span className="severity severity-medium">Medium</span>
                        <h3>Error state loses context</h3>
                        <p>Preserve valid input and focus the first affected field.</p>
                      </article>
                      <article className="finding">
                        <span className="severity severity-verify">Verify</span>
                        <h3>Keyboard completion</h3>
                        <p>Exercise the flow at runtime before calling it complete.</p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stage-note note-left">
                <span>Human outcome</span>
                <strong>Clear next step</strong>
              </div>
              <div className="stage-note note-right">
                <span>Evidence</span>
                <strong>Testable criteria</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Project facts">
          <div className="container trust-row">
            <span>Built for Codex</span>
            <span>Published on npm</span>
            <span>MIT licensed</span>
            <span>Open source</span>
            <span>11 distilled references</span>
          </div>
        </section>

        <section className="spotlight section-pad" id="compare" aria-labelledby="spotlight-title">
          <div className="container spotlight-grid">
            <div className="spotlight-copy">
              <span className="section-label">Head-to-head</span>
              <h2 id="spotlight-title">One brief. Three different design outcomes.</h2>
              <p>
                Visual quality is only one layer. HIG Driven is built to make
                purpose, state coverage, user agency, and verification part of
                the implementation—not an afterthought.
              </p>
              <a className="button button-primary" href="https://github.com/dzakwanfadhlullah/HIG-Driven#portfolio-screenshot-head-to-head">
                Read the comparison <ArrowIcon />
              </a>
            </div>
            <div className="comparison-stack" aria-label="Portfolio comparison preview">
              <figure className="comparison-card comparison-back">
                <Image
                  src="/comparison/no-skill.png"
                  alt="Portfolio generated without a design skill"
                  width={1910}
                  height={8796}
                  sizes="(max-width: 800px) 70vw, 280px"
                />
                <figcaption>No skill</figcaption>
              </figure>
              <figure className="comparison-card comparison-middle">
                <Image
                  src="/comparison/ui-ux-design-system.png"
                  alt="Portfolio generated with a general UI UX design system skill"
                  width={1910}
                  height={7117}
                  sizes="(max-width: 800px) 70vw, 280px"
                />
                <figcaption>UI system</figcaption>
              </figure>
              <figure className="comparison-card comparison-front">
                <Image
                  src="/comparison/hig-driven.png"
                  alt="Portfolio generated with HIG Driven"
                  width={1910}
                  height={9691}
                  sizes="(max-width: 800px) 70vw, 280px"
                />
                <figcaption>HIG Driven</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="modes section-pad" aria-labelledby="modes-title">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-label">Three working modes</span>
              <h2 id="modes-title">Use the right depth for the work.</h2>
              <p>Start with direction, move into implementation, or inspect what already exists.</p>
            </div>
            <div className="mode-grid">
              {modes.map((mode) => (
                <article className="mode-card" key={mode.title}>
                  <div className="mode-meta">
                    <span>{mode.index}</span>
                    <span>{mode.eyebrow}</span>
                  </div>
                  <div className={`mode-visual mode-${mode.title.toLowerCase()}`}>
                    <div className="mini-window">
                      <span className="mini-label">{mode.title}</span>
                      <span className="mini-line long" />
                      <span className="mini-line" />
                      <span className="mini-line short" />
                    </div>
                  </div>
                  <h3>{mode.title}</h3>
                  <p>{mode.body}</p>
                  <span className="mode-output">Output · {mode.output}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow section-pad" id="how-it-works" aria-labelledby="workflow-title">
          <div className="container workflow-layout">
            <div className="workflow-intro">
              <span className="section-label light-label">How it works</span>
              <h2 id="workflow-title">Design from the human outward.</h2>
              <p>
                HIG Driven turns a large design corpus into a repeatable decision
                flow. It starts with what a person needs and ends with evidence.
              </p>
              <div className="orientation-card">
                <span>Every surface should answer</span>
                <strong>Where am I?</strong>
                <strong>What can I do?</strong>
                <strong>Where can I go next?</strong>
              </div>
            </div>
            <div className="workflow-list-shell">
              <span className="workflow-progress" aria-hidden="true">
                <span />
              </span>
              <ol className="workflow-list">
                {workflow.map(([title, body], index) => (
                  <li key={title}>
                    <span className="step-number">0{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                    <span className="step-output">
                      {index === 0 && "Purpose"}
                      {index === 1 && "Architecture"}
                      {index === 2 && "Implementation"}
                      {index === 3 && "Evidence"}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="principles section-pad" id="principles" aria-labelledby="principles-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-label">Decision lens</span>
                <h2 id="principles-title">Eight principles. One coherent experience.</h2>
              </div>
              <p>
                Use the principles together. Resolve tension according to the
                product’s purpose, user risk, and context—not as a styling formula.
              </p>
            </div>
            <div className="principle-grid">
              {principles.map(({ title, body, icon }, index) => (
                <article key={title}>
                  <span className="principle-index">0{index + 1}</span>
                  <div className="principle-icon" aria-hidden="true">
                    <PrincipleIcon name={icon} />
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="evidence section-pad" aria-labelledby="evidence-title">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-label">Traceable foundation</span>
              <h2 id="evidence-title">197 documents, distilled for decisions.</h2>
              <p>
                The raw research stays out of the runtime package. The useful
                reasoning is paraphrased, routed by task, and connected to official sources.
              </p>
            </div>
            <div className="stats-grid">
              <article>
                <strong data-count="197">197</strong>
                <span>documents reviewed</span>
              </article>
              <article>
                <strong data-count="176">176</strong>
                <span>HIG pages</span>
              </article>
              <article>
                <strong data-count="11">11</strong>
                <span>distilled references</span>
              </article>
              <article>
                <strong data-count="3">3</strong>
                <span>forward-tested modes</span>
              </article>
            </div>
            <div className="reference-map">
              <div className="reference-core">
                <Mark />
                <strong>HIG Driven</strong>
                <span>Task-aware routing</span>
              </div>
              <div className="reference-lines" aria-hidden="true" />
              <div className="reference-pills">
                <span>Core principles</span>
                <span>Visual design</span>
                <span>Navigation</span>
                <span>Accessibility</span>
                <span>Motion</span>
                <span>Content</span>
                <span>Web translation</span>
                <span>Audit playbook</span>
              </div>
            </div>
          </div>
        </section>

        <section className="install-section section-pad" id="install" aria-labelledby="install-title">
          <div className="container install-grid">
            <div className="install-copy">
              <span className="section-label light-label">Available now</span>
              <h2 id="install-title">Two commands. Better design decisions.</h2>
              <p>
                Install the package, activate the skill, then invoke
                <code>$hig-driven</code> in Codex.
              </p>
              <div className="install-actions">
                <a className="button button-red" href="https://www.npmjs.com/package/hig-driven">
                  View on npm <ArrowIcon />
                </a>
                <a className="text-link text-link-light" href="https://github.com/dzakwanfadhlullah/HIG-Driven">
                  View source <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="terminal" aria-label="Installation commands">
              <div className="terminal-bar">
                <div className="window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>Terminal</span>
                <CopyCommand command={installCommand} />
              </div>
              <div className="terminal-body">
                <div>
                  <span className="prompt">$</span>
                  <code>npm install hig-driven</code>
                </div>
                <div>
                  <span className="prompt">$</span>
                  <code>npx hig-driven install</code>
                </div>
                <div className="terminal-success">
                  <span>✓</span>
                  <code>HIG Driven installed in your Codex skills directory</code>
                </div>
                <div className="terminal-prompt-card">
                  <span>Try it</span>
                  <code>$hig-driven Audit this checkout flow.</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="open-source section-pad" aria-labelledby="open-source-title">
          <div className="container open-source-grid">
            <div>
              <span className="section-label">Open source</span>
              <h2 id="open-source-title">Free to use. Clear about its limits.</h2>
            </div>
            <div className="open-source-copy">
              <p>
                HIG Driven is independent, MIT licensed, and built in public. It
                does not claim Apple endorsement or certify interfaces as HIG compliant.
              </p>
              <ul>
                <li>No runtime subscription</li>
                <li>No bundled Apple artwork</li>
                <li>No hidden design score</li>
                <li>No requirement to imitate iOS</li>
              </ul>
              <a className="text-link" href="https://github.com/dzakwanfadhlullah/HIG-Driven/blob/main/LICENSE">
                Read the MIT License <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="faq section-pad" id="faq" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div className="faq-intro">
              <span className="section-label light-label">Common questions</span>
              <h2 id="faq-title">Before you install.</h2>
              <p>
                HIG Driven is a design copilot, not a UI kit, certification, or Apple visual generator.
              </p>
            </div>
            <AnimatedFaq items={faqs} />
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="final-glow" />
          <div className="container final-content">
            <span className="section-label light-label">Start with the human outcome</span>
            <h2 id="final-title" aria-label="Build with intent. Audit what matters.">
              <span className="final-title-clip" aria-hidden="true">
                <span className="final-title-line">Build with intent.</span>
              </span>
              <span className="final-title-clip" aria-hidden="true">
                <span className="final-title-line">Audit what matters.</span>
              </span>
            </h2>
            <a className="button button-red" href="#install">
              Install HIG Driven <ArrowIcon />
            </a>
          </div>
        </section>
      </MotionExperience>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand brand-light" href="#top">
              <Mark />
              <span>HIG Driven</span>
            </a>
            <p>Human-driven interface design for Codex.</p>
            <span>Independent · Open source · MIT licensed</span>
          </div>
          <div className="footer-links">
            <div>
              <strong>Product</strong>
              <a href="#how-it-works">How it works</a>
              <a href="#principles">Principles</a>
              <a href="#compare">Compare</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <strong>Resources</strong>
              <a href="https://github.com/dzakwanfadhlullah/HIG-Driven">Documentation</a>
              <a href="https://www.npmjs.com/package/hig-driven">npm</a>
              <a href="https://github.com/dzakwanfadhlullah/HIG-Driven/tree/main/skills/hig-driven/references">References</a>
              <a href="https://github.com/dzakwanfadhlullah/HIG-Driven/issues">Issues</a>
            </div>
            <div>
              <strong>Project</strong>
              <a href="https://github.com/dzakwanfadhlullah/HIG-Driven">GitHub</a>
              <a href="https://github.com/dzakwanfadhlullah/HIG-Driven#contributing">Contributing</a>
              <a href="https://github.com/dzakwanfadhlullah/HIG-Driven/blob/main/LICENSE">MIT License</a>
              <a href="https://github.com/dzakwanfadhlullah/HIG-Driven#disclaimer">Disclaimer</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Dzakwan Fadhlullah</span>
          <span>Not affiliated with or endorsed by Apple Inc.</span>
        </div>
      </footer>
    </>
  );
}
