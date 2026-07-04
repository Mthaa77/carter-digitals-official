"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type BounceCardsProps = {
  className?: string;
  images?: string[];
  labels?: string[];
  tags?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
};

export default function BounceCards({
  className = "",
  images = [],
  labels = [],
  tags = [],
  containerWidth = 560,
  containerHeight = 330,
  animationDelay = 0.2,
  animationStagger = 0.1,
  easeType = "elastic.out(1, 0.52)",
  transformStyles = [
    "rotate(-8deg) translate(-210px, 12px)",
    "rotate(-4deg) translate(-104px, -4px)",
    "rotate(0deg) translate(0px, -15px)",
    "rotate(4deg) translate(104px, -4px)",
    "rotate(8deg) translate(210px, 12px)",
  ],
  enableHover = true,
  activeIndex = 2,
  onActiveChange,
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.selector(containerRef)(".bounce-service-card");
      if (reduceMotion) {
        gsap.set(cards, { scale: 1, opacity: 1 });
        return;
      }
      gsap.fromTo(
        cards,
        { scale: 0.76, opacity: 0, y: 44 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
          duration: 0.88,
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transform: string) =>
    /rotate\([\s\S]*?\)/.test(transform)
      ? transform.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)")
      : `${transform} rotate(0deg)`;

  const getPushedTransform = (transform: string, offsetX: number) => {
    const translateRegex = /translate\(([-0-9.]+)px(?:,\s*([-0-9.]+)px)?\)/;
    const match = transform.match(translateRegex);
    if (!match) return `${transform} translate(${offsetX}px, 0px)`;
    const currentX = Number.parseFloat(match[1]);
    const currentY = match[2] ? Number.parseFloat(match[2]) : 0;
    return transform.replace(translateRegex, `translate(${currentX + offsetX}px, ${currentY}px)`);
  };

  const animateCards = (hoveredIndex: number | null) => {
    if (!containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    images.forEach((_, index) => {
      const target = q(`.bounce-service-card-${index}`);
      gsap.killTweensOf(target);
      const baseTransform = transformStyles[index] ?? "none";
      const transform = hoveredIndex === null
        ? baseTransform
        : index === hoveredIndex
          ? getNoRotationTransform(baseTransform)
          : getPushedTransform(baseTransform, index < hoveredIndex ? -122 : 122);
      gsap.to(target, {
        transform,
        duration: 0.42,
        ease: "back.out(1.35)",
        delay: hoveredIndex === null ? 0 : Math.abs(hoveredIndex - index) * 0.035,
        overwrite: "auto",
      });
    });
  };

  const activate = (index: number) => {
    onActiveChange?.(index);
    if (enableHover) animateCards(index);
  };

  return (
    <div
      className={`bounce-cards-container ${className}`}
      ref={containerRef}
      style={{ width: containerWidth, height: containerHeight }}
      onMouseLeave={() => enableHover && animateCards(null)}
    >
      {images.map((src, index) => (
        <button
          type="button"
          key={`${src}-${index}`}
          className={`bounce-service-card bounce-service-card-${index} ${activeIndex === index ? "is-active" : ""}`}
          style={{ transform: transformStyles[index] ?? "none" }}
          onMouseEnter={() => activate(index)}
          onFocus={() => activate(index)}
          onClick={() => activate(index)}
          aria-pressed={activeIndex === index}
          aria-label={`View ${labels[index] ?? `service ${index + 1}`}`}
        >
          <img className="bounce-service-image" src={src} alt="" />
          <span className="bounce-card-sheen" />
          <span className="bounce-card-meta"><i>0{index + 1}</i><em>{tags[index] ?? "CARTER CAPABILITY"}</em></span>
          <span className="bounce-card-title">{labels[index] ?? `Service ${index + 1}`}</span>
        </button>
      ))}
    </div>
  );
}
