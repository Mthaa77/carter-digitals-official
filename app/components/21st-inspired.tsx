"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

type HoverCtaProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

type SpotlightProps = {
  children: ReactNode;
  className?: string;
};

type MediaProps = {
  src: string;
  alt: string;
};

/**
 * Lightweight adaptations of common 21st.dev patterns:
 * interactive hover button, spotlight card, and scroll media expansion.
 */
export function InteractiveHoverCta({ href, children, className = "" }: HoverCtaProps) {
  return <a href={href} className={`interactive-hover-cta ${className}`}><span>{children}</span><i aria-hidden="true">↗</i></a>;
}

export function SpotlightPanel({ children, className = "" }: SpotlightProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  function onMove(event: MouseEvent<HTMLElement>) {
    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();
    setPosition({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  }

  return <article onMouseMove={onMove} className={`spotlight-panel ${className}`} style={{ "--spot-x": `${position.x}%`, "--spot-y": `${position.y}%` } as CSSProperties}>{children}</article>;
}

export function ScrollMediaExpansion({ src, alt }: MediaProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const section = ref.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height * 0.45)));
      section.style.setProperty("--media-progress", progress.toFixed(3));
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <section className="scroll-media-expansion" ref={ref}>
    <div className="shell scroll-media-inner">
      <div className="media-expansion-meta"><span>01 / CARTER DIGITAL THEATRE</span><span>SCROLL TO EXPAND</span></div>
      <div className="media-expansion-frame"><img src={src} alt={alt} /><div className="media-expansion-caption"><span>PREMIUM DIGITAL EXPERIENCES</span><b>Built to make the next customer action easier.</b></div></div>
    </div>
  </section>;
}
