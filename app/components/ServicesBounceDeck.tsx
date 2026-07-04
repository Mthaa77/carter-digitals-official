"use client";

import { useState } from "react";
import { theatreImage } from "../media";
import BounceCards from "./BounceCards";

const services = [
  {
    title: "Signature Websites",
    tag: "PRESENCE + CONVERSION",
    eyebrow: "01 / THE DIGITAL FLAGSHIP",
    copy: "A premium website that makes the business feel established, explains the value quickly and gives serious visitors a clear reason to act.",
    outcomes: ["High-conviction homepage", "Mobile-first customer journey", "Clear calls to action"],
  },
  {
    title: "Lead Engines",
    tag: "CAMPAIGNS + ENQUIRIES",
    eyebrow: "02 / THE DEMAND LAYER",
    copy: "Focused landing pages and conversion journeys built to turn attention into calls, bookings, WhatsApps and qualified sales conversations.",
    outcomes: ["Offer-first landing page", "Trust and proof structure", "Enquiry capture flow"],
  },
  {
    title: "Web Applications",
    tag: "PRODUCT + PLATFORM",
    eyebrow: "03 / THE USER EXPERIENCE",
    copy: "Custom portals and web platforms that give customers, teams or members a simpler way to get important work done.",
    outcomes: ["Purposeful product UX", "Role-based experiences", "Scalable technical foundation"],
  },
  {
    title: "Business Systems",
    tag: "OPERATIONS + CLARITY",
    eyebrow: "04 / THE OPERATING LAYER",
    copy: "Dashboards, workflows and internal tools that turn fragmented operations into clearer visibility, quicker action and less repeat admin.",
    outcomes: ["Lead and client visibility", "Smarter workflows", "Decision-ready dashboards"],
  },
  {
    title: "AI-Ready Growth",
    tag: "AUTOMATION + ADVANTAGE",
    eyebrow: "05 / THE NEXT ADVANTAGE",
    copy: "A modern digital foundation ready for automation, intelligent assistance and the next services your business will need to deliver.",
    outcomes: ["Automation-ready workflows", "AI-enabled service ideas", "Cloud-ready architecture"],
  },
];

const cardImages = services.map(() => theatreImage);
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
      <div className="shell services-bounce-layout">
        <div className="services-bounce-intro">
          <p className="eyebrow light">THE CARTER CAPABILITIES DECK</p>
          <h2>Choose the layer that moves your business <em>forward.</em></h2>
          <p>Every service is a different route to the same result: make the business easier to trust, easier to choose and easier to grow.</p>
          <div className="services-bounce-note"><span>HOVER A CARD</span><i /> <span>EXPLORE THE BUILD</span></div>
        </div>

        <div className="services-bounce-stage">
          <BounceCards
            className="carter-bounce-cards"
            images={cardImages}
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

        <article className="services-bounce-detail" aria-live="polite">
          <p className="eyebrow">{service.eyebrow}</p>
          <h3>{service.title}</h3>
          <p>{service.copy}</p>
          <div className="services-bounce-outcomes">{service.outcomes.map((outcome) => <span key={outcome}>✦ {outcome}</span>)}</div>
          <a href={`mailto:hello@carterdigitals.co.za?subject=${encodeURIComponent(`${service.title} enquiry`)}`}>Talk through this build <b>↗</b></a>
        </article>
      </div>
    </section>
  );
}
