"use client";

import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { theatreImage } from "../media";

export function LaptopHeroOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  function move(event: ReactPointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node || event.pointerType === "touch") return;
    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    node.style.setProperty("--laptop-rotate-y", `${(x * 13).toFixed(2)}deg`);
    node.style.setProperty("--laptop-rotate-x", `${(y * -9).toFixed(2)}deg`);
    node.style.setProperty("--laptop-x", `${(x * 18).toFixed(1)}px`);
    node.style.setProperty("--laptop-y", `${(y * 14).toFixed(1)}px`);
  }

  function reset() {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--laptop-rotate-y", "0deg");
    node.style.setProperty("--laptop-rotate-x", "0deg");
    node.style.setProperty("--laptop-x", "0px");
    node.style.setProperty("--laptop-y", "0px");
  }

  return <div className="laptop-hero-overlay" ref={ref} onPointerMove={move} onPointerLeave={reset} aria-label="Interactive Carter Digital Theatre laptop scene">
    <div className="laptop-hero-beam beam-left" /><div className="laptop-hero-beam beam-right" />
    <div className="laptop-hero-orbit orbit-one" /><div className="laptop-hero-orbit orbit-two" />
    <div className="laptop-hero-object"><img src={theatreImage} alt="Carter Digitals Digital Theatre laptop" /><div className="laptop-hero-glass" /></div>
    <i className="laptop-piece piece-a" /><i className="laptop-piece piece-b" /><i className="laptop-piece piece-c" /><i className="laptop-piece piece-d" />
    <div className="laptop-hero-note note-left"><span>01</span><p>PRODUCT<br />THEATRE</p></div>
    <div className="laptop-hero-note note-right"><span>02</span><p>BUILD<br />SYSTEM</p></div>
    <div className="laptop-hero-caption"><span>CARTER DIGITAL THEATRE</span><b>MOVE TO EXPLORE ↗</b></div>
  </div>;
}
