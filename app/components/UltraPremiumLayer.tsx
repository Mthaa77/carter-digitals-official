"use client";

import { useEffect, useRef, useState } from "react";

type ProofReelProps = {
  onStart: () => void;
};

type BlueprintResultLinkProps = {
  goal: string;
  signal: string;
  industry: string;
  modules: string[];
};

const selectedBuilds = [
  {
    id: "authority",
    number: "01",
    type: "LEGAL / TRUST SYSTEM",
    title: "Authority before the first consultation.",
    subtitle: "A premium legal presence engineered to establish confidence before a potential client ever calls.",
    outcome: "Service architecture, consultation flows, credibility proof and a mobile-first enquiry route working together.",
    stack: ["Authority pages", "Consultation flow", "Secure enquiries", "WhatsApp handoff"],
    stageLabel: "LEGAL AUTHORITY PLATFORM",
    interface: ["Practice areas", "Urgent consultation", "Client-first routing"],
    theme: "authority",
  },
  {
    id: "admissions",
    number: "02",
    type: "EDUCATION / ENROLMENT SYSTEM",
    title: "Make the admissions journey feel modern.",
    subtitle: "A digital environment that turns school information, parent trust and enrolment enquiries into one clear route.",
    outcome: "Admissions, announcements, documents and parent questions structured as a calm, branded experience.",
    stack: ["Admissions path", "News hub", "Downloads portal", "Parent FAQ"],
    stageLabel: "ADMISSIONS GROWTH ENGINE",
    interface: ["Apply now", "School updates", "Parent support"],
    theme: "admissions",
  },
  {
    id: "command",
    number: "03",
    type: "OPERATIONS / INTERNAL TOOL",
    title: "Turn daily activity into one clear command view.",
    subtitle: "A bespoke internal platform for businesses that have outgrown scattered chats, spreadsheets and manual follow-ups.",
    outcome: "The operational picture becomes visible: work in progress, client movement, bottlenecks and next actions.",
    stack: ["Live pipeline", "Client records", "Team workflow", "Action dashboard"],
    stageLabel: "OPERATIONS COMMAND CENTRE",
    interface: ["Live pipeline", "Tasks due", "Client status"],
    theme: "command",
  },
];

export function ExperienceEnhancements() {
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
    };

    const canUsePointer = window.matchMedia("(pointer: fine)").matches;
    const updatePointer = (event: MouseEvent) => {
      if (!canUsePointer || !cursorRef.current) return;
      cursorRef.current.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorRef.current.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursorRef.current.dataset.visible = "true";
    };

    const hidePointer = () => {
      if (cursorRef.current) cursorRef.current.dataset.visible = "false";
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("mousemove", updatePointer);
    document.documentElement.addEventListener("mouseleave", hidePointer);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("mousemove", updatePointer);
      document.documentElement.removeEventListener("mouseleave", hidePointer);
    };
  }, []);

  return (
    <div className="experience-enhancements" aria-hidden="true">
      <div className="scroll-progress" ref={progressRef} />
      <div className="signal-cursor" ref={cursorRef} data-visible="false"><i /><span /></div>
      <div className="global-grain" />
    </div>
  );
}

export function ProofReel({ onStart }: ProofReelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = selectedBuilds[activeIndex];

  return (
    <section id="work" className="proof-reel-section">
      <div className="section-shell">
        <div className="proof-reel-heading">
          <div>
            <span className="index">04 / SELECTED SYSTEMS</span>
            <h2>Design that does more than<br /><em>look expensive.</em></h2>
          </div>
          <p>Every Carter build is designed around an operational outcome: trust, clarity, speed, conversion or control. Select a system to explore the thinking behind it.</p>
        </div>

        <div className="proof-reel-layout">
          <div className="proof-tabs" role="tablist" aria-label="Selected Carter systems">
            {selectedBuilds.map((build, index) => (
              <button
                key={build.id}
                role="tab"
                aria-selected={activeIndex === index}
                className={activeIndex === index ? "proof-tab active" : "proof-tab"}
                onClick={() => setActiveIndex(index)}
              >
                <span>{build.number}</span>
                <strong>{build.type}</strong>
                <i>↗</i>
              </button>
            ))}
          </div>

          <article className={`proof-terminal theme-${active.theme}`}>
            <div className="terminal-topline"><span>SELECTED BUILD / {active.number}</span><b><i /> SYSTEM VIEW</b></div>
            <div className="proof-terminal-content">
              <div className="proof-copy">
                <span className="proof-kicker">{active.stageLabel}</span>
                <h3>{active.title}</h3>
                <p>{active.subtitle}</p>
                <div className="proof-outcome"><small>DESIGNED FOR</small><p>{active.outcome}</p></div>
                <div className="proof-stack">{active.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <button className="inline-button" onClick={onStart}>Build a system like this <span>↗</span></button>
              </div>

              <div className="proof-interface" aria-label={`${active.stageLabel} concept interface`}>
                <div className="interface-glow" />
                <div className="interface-toolbar"><span /><span /><span /><b>{active.stageLabel}</b><i>LIVE</i></div>
                <div className="interface-sidebar"><b>CD</b><span /><span /><span /><span /></div>
                <div className="interface-main">
                  <div className="interface-hero"><small>PRIMARY ROUTE</small><strong>{active.interface[0]}</strong><span>Built for a clearer next action.</span><i>→</i></div>
                  <div className="interface-metrics"><div><small>01</small><b>{active.interface[1]}</b><span /></div><div><small>02</small><b>{active.interface[2]}</b><span /></div></div>
                  <div className="interface-chart"><span>OPERATING SIGNAL</span><svg viewBox="0 0 260 80" fill="none"><path d="M2 66C35 58 36 35 64 42s34 24 57 7 33-35 58-15 40 13 79-27" /><path d="M2 77C48 69 52 55 84 62s42 2 70-16 59-4 104-35" /></svg></div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function BlueprintResultLink({ goal, signal, industry, modules }: BlueprintResultLinkProps) {
  const subject = encodeURIComponent(`Carter Digitals Project Blueprint — ${signal}`);
  const body = encodeURIComponent([
    "Hi Kabelo,",
    "",
    "I have completed the Carter Digitals project blueprint and would like to explore a build.",
    "",
    `Primary goal: ${goal}`,
    `Recommended system: ${signal}`,
    `Organisation type: ${industry}`,
    `Pressure points: ${modules.length ? modules.join(", ") : "To be discussed"}`,
    "",
    "Best regards,",
  ].join("\n"));

  return <a className="primary-button" href={`mailto:kabelokadiaka4@gmail.com?subject=${subject}&body=${body}`}>Send my project brief <span>→</span></a>;
}
