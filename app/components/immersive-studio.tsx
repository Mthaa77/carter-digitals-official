"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { brandLockup } from "../brand";

type StartHandler = (project?: string) => void;

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.16 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(event: ReactPointerEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card || event.pointerType === "touch") return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty("--tilt-x", `${(y * -8).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(x * 9).toFixed(2)}deg`);
    card.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(0)}%`);
    card.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(0)}%`);
  }

  function reset() {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  }

  return <div ref={ref} className={`tilt-card ${className}`} onPointerMove={onMove} onPointerLeave={reset}>{children}</div>;
}

export function CarterCore() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(event: ReactPointerEvent<HTMLDivElement>) {
    const scene = ref.current;
    if (!scene || event.pointerType === "touch") return;
    const bounds = scene.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    scene.style.setProperty("--scene-x", `${(x * 13).toFixed(2)}deg`);
    scene.style.setProperty("--scene-y", `${(y * -11).toFixed(2)}deg`);
    scene.style.setProperty("--parallax-x", `${(x * 16).toFixed(1)}px`);
    scene.style.setProperty("--parallax-y", `${(y * 14).toFixed(1)}px`);
  }

  function reset() {
    const scene = ref.current;
    if (!scene) return;
    scene.style.setProperty("--scene-x", "0deg");
    scene.style.setProperty("--scene-y", "0deg");
    scene.style.setProperty("--parallax-x", "0px");
    scene.style.setProperty("--parallax-y", "0px");
  }

  return (
    <div className="core-scene" ref={ref} onPointerMove={onMove} onPointerLeave={reset} aria-label="Interactive 3D Carter Digital Core">
      <div className="core-ambient ambient-blue" />
      <div className="core-ambient ambient-red" />
      <div className="core-constellation"><i /><i /><i /><i /><i /></div>
      <div className="core-orbit orbit-red"><span /></div>
      <div className="core-orbit orbit-silver"><span /></div>
      <div className="core-orbit orbit-blue"><span /></div>
      <div className="core-platform">
        <div className="platform-top" />
        <div className="platform-side" />
      </div>
      <div className="core-cube">
        <span className="cube-face cube-front"><b>C</b><i>01</i></span>
        <span className="cube-face cube-back"><b>D</b><i>02</i></span>
        <span className="cube-face cube-right"><b>+</b><i>03</i></span>
        <span className="cube-face cube-left"><b>↗</b><i>04</i></span>
        <span className="cube-face cube-top"><i>CAR</i></span>
        <span className="cube-face cube-bottom" />
      </div>
      <div className="core-logo-chip"><img src={brandLockup} alt="Carter Digitals" /></div>
      <div className="core-readout readout-left"><small>LIVE LAYER</small><strong>IDEA → SYSTEM</strong><span><i /> BUILDING WITH INTENT</span></div>
      <div className="core-readout readout-right"><small>CORE STATUS</small><strong>READY</strong><span>STRATEGY · DESIGN · BUILD</span></div>
      <div className="core-caption"><span>INTERACTIVE CARTER CORE</span><b>MOVE TO EXPLORE ↗</b></div>
    </div>
  );
}

const buildModes = [
  {
    label: "Flagship website",
    code: "01",
    headline: "Make the first impression impossible to ignore.",
    copy: "A premium conversion-focused website that gives the business a stronger voice, clearer offer and more confident next step.",
    outputs: ["Brand-led visual direction", "Conversion architecture", "Responsive launch build"],
  },
  {
    label: "Lead engine",
    code: "02",
    headline: "Turn attention into a cleaner sales conversation.",
    copy: "A focused landing experience, offer structure and enquiry flow designed around the action you need customers to take.",
    outputs: ["High-intent landing page", "Offer + proof structure", "Enquiry and follow-up flow"],
  },
  {
    label: "Client system",
    code: "03",
    headline: "Give people a better way to work with your business.",
    copy: "A portal, dashboard or workflow system built around customer access, internal visibility and less manual friction.",
    outputs: ["Workflow mapping", "Role-based interface", "Scalable data foundation"],
  },
  {
    label: "Digital product",
    code: "04",
    headline: "Take the idea out of your head and into a real product path.",
    copy: "An MVP-focused experience that turns the core user journey into a launchable first version with room to evolve.",
    outputs: ["MVP strategy", "Product UX", "Launch-ready application"],
  },
];

export function BuildLab({ onStart }: { onStart: StartHandler }) {
  const [active, setActive] = useState(0);
  const mode = buildModes[active];

  return (
    <section className="build-lab">
      <div className="build-lab-grid" />
      <div className="build-lab-glow" />
      <div className="build-lab-copy">
        <p className="eyebrow light">THE CARTER BUILD LAB</p>
        <h2>Choose the digital move that creates the <em>next advantage.</em></h2>
        <p>Not every business needs the same thing. Use this interactive blueprint to explore the type of build that best matches the opportunity in front of you.</p>
        <div className="build-options" role="tablist" aria-label="Carter build types">
          {buildModes.map((item, index) => (
            <button key={item.label} className={active === index ? "active" : ""} onClick={() => setActive(index)} role="tab" aria-selected={active === index}>
              <span>{item.code}</span>{item.label}<b>↗</b>
            </button>
          ))}
        </div>
      </div>
      <TiltCard className="blueprint-card">
        <div className="blueprint-head"><span>PROJECT BLUEPRINT</span><b>0{active + 1}</b></div>
        <div className="blueprint-display"><div className="blueprint-ring" /><div className="blueprint-grid-lines" /><div className="blueprint-node node-a" /><div className="blueprint-node node-b" /><div className="blueprint-node node-c" /><div className="blueprint-node node-d" /><div className="blueprint-curve" /></div>
        <p className="eyebrow">{mode.label}</p>
        <h3>{mode.headline}</h3>
        <p>{mode.copy}</p>
        <div className="blueprint-output">{mode.outputs.map((output) => <span key={output}>✦ {output}</span>)}</div>
        <button className="button button-primary" onClick={() => onStart(mode.label)}>Start this blueprint <span>↗</span></button>
      </TiltCard>
    </section>
  );
}
