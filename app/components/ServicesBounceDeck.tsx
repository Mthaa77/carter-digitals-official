"use client";

import { useState } from "react";
import { serviceVisuals } from "../service-media";
import BounceCards from "./BounceCards";

const services = [
  {
    title: "Signature Websites",
    tag: "PRESENCE + CONVERSION",
    eyebrow: "01 / THE DIGITAL FLAGSHIP",
    image: serviceVisuals.signature,
    signal: "Make the first ten seconds count.",
    copy: "A flagship website that does more than look premium. It gives the right visitor immediate clarity: what you do, why it matters, why they can trust you and exactly what to do next.",
    outcomes: ["High-conviction homepage", "Mobile-first customer journey", "Clear calls to action"],
  },
  {
    title: "Lead Engines",
    tag: "CAMPAIGNS + ENQUIRIES",
    eyebrow: "02 / THE DEMAND LAYER",
    image: serviceVisuals.leads,
    signal: "Turn attention into a real conversation.",
    copy: "Focused landing pages, offer structures and enquiry journeys designed to turn traffic into calls, bookings, WhatsApps and serious sales conversations without sending people through a confusing maze.",
    outcomes: ["Offer-first landing page", "Trust and proof structure", "Enquiry capture flow"],
  },
  {
    title: "Web Applications",
    tag: "PRODUCT + PLATFORM",
    eyebrow: "03 / THE USER EXPERIENCE",
    image: serviceVisuals.applications,
    signal: "Give users a better way to get work done.",
    copy: "Custom portals and web platforms that turn a complex customer, member or team task into a clear, intuitive digital experience people actually want to use.",
    outcomes: ["Purposeful product UX", "Role-based experiences", "Scalable technical foundation"],
  },
  {
    title: "Business Systems",
    tag: "OPERATIONS + CLARITY",
    eyebrow: "04 / THE OPERATING LAYER",
    image: serviceVisuals.systems,
    signal: "Make the moving parts easier to see.",
    copy: "Dashboards, workflows and internal tools that replace scattered admin with sharper visibility, faster follow-up and a more reliable way to move work forward.",
    outcomes: ["Lead and client visibility", "Smarter workflows", "Decision-ready dashboards"],
  },
  {
    title: "AI-Ready Growth",
    tag: "AUTOMATION + ADVANTAGE",
    eyebrow: "05 / THE NEXT ADVANTAGE",
    image: serviceVisuals.ai,
    signal: "Build the foundation for what comes next.",
    copy: "A modern digital foundation ready for meaningful automation, intelligent assistance and new customer experiences as the business earns the right to scale.",
    outcomes: ["Automation-ready workflows", "AI-enabled service ideas", "Cloud-ready architecture"],
  },
];

const transforms = [
  "rotate(-8deg) translate(-212px, 20px)",
  "rotate(-4deg) translate(-106px, -2px)",
  "rotate(0deg) translate(0px, -16px)",
  "rotate(4deg) translate(106px, -2px)",
  "rotate(8deg) translate(212px, 20px)",
];

export function ServicesBounceDeck() {
  const [active, setActive] = useState(2);
  const service = services[active];

  return (
    <section className="services-bounce-section" id="services-deck">
      <div className="services-bounce-grid" />
      <div className="services-bounce-glow glow-one" /><div className="services-bounce-glow glow-two" />
      <div className="shell services-bounce-layout">
        <div className="services-bounce-intro">
          <p className="eyebrow light">THE CARTER CAPABILITIES DECK</p>
          <h2>Choose the layer that moves your business <em>forward.</em></h2>
          <p>From first impression to operational advantage, each Carter capability is built around a specific business outcome — not a vague list of deliverables.</p>
          <div className="services-bounce-note"><span>HOVER OR TAP A CARD</span><i /> <span>EXPLORE THE BUILD</span></div>
        </div>

        <div className="services-bounce-stage">
          <BounceCards
            className="carter-bounce-cards"
            images={services.map((item) => item.image)}
            labels={services.map((item) => item.title)}
            tags={services.map((item) => item.tag)}
            containerWidth={600}
            containerHeight={348}
            animationDelay={0.18}
            animationStagger={0.11}
            easeType="elastic.out(1, 0.52)"
            transformStyles={transforms}
            enableHover
            activeIndex={active}
            onActiveChange={setActive}
          />
        </div>

        <article className="services-bounce-detail" key={service.title} aria-live="polite">
          <div><p className="eyebrow">{service.eyebrow}</p><h3>{service.title}</h3><span className="services-bounce-signal">{service.signal}</span></div>
          <div className="services-bounce-detail-copy"><p>{service.copy}</p><div className="services-bounce-outcomes">{service.outcomes.map((outcome) => <span key={outcome}>✦ {outcome}</span>)}</div><a href={`mailto:hello@carterdigitals.co.za?subject=${encodeURIComponent(`${service.title} enquiry`)}`}>Talk through this build <b>↗</b></a></div>
        </article>
      </div>
    </section>
  );
}
