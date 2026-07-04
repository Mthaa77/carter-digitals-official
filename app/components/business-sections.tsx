"use client";

import { useState } from "react";
import { serviceVisuals, showcaseVisuals } from "../service-media";

const paths = [
  {
    label: "Win more enquiries",
    number: "01",
    image: serviceVisuals.leads,
    title: "Make it easier for the right customer to choose you.",
    copy: "A stronger first impression, a clearer promise and a focused next step turn passive visitors into better sales conversations. Carter shapes the message, proof and interaction sequence around the decision you want a customer to make.",
    outcomes: ["High-conviction homepage", "Clear service positioning", "Enquiry-first user journey"],
  },
  {
    label: "Upgrade my brand",
    number: "02",
    image: serviceVisuals.signature,
    title: "Look like the level of business you are becoming.",
    copy: "Your digital presence should carry the same quality as the work you want to be known for. We create a distinct visual system, clearer story and more credible first experience for the opportunities you want to attract.",
    outcomes: ["Premium visual direction", "Distinctive copy and hierarchy", "Mobile-ready experience"],
  },
  {
    label: "Improve operations",
    number: "03",
    image: serviceVisuals.systems,
    title: "Replace scattered effort with a cleaner system.",
    copy: "When leads, customers and workflows live in the right place, the business becomes easier to manage and easier to scale. Carter builds the useful layer between your team and the work that matters.",
    outcomes: ["Client portals", "Dashboards and tools", "Practical automation"],
  },
  {
    label: "Launch an idea",
    number: "04",
    image: serviceVisuals.applications,
    title: "Give your next big idea a real product path.",
    copy: "Move from a concept in your head to a focused MVP, useful interface and launch-ready product experience. The aim is to learn from real users without building unnecessary complexity first.",
    outcomes: ["Product strategy", "User experience design", "MVP development"],
  },
];

const faqs = [
  ["What does Carter Digitals actually build?", "Carter Digitals builds premium websites, conversion-led landing pages, web applications, client portals, business systems, dashboards and early-stage digital products. The work is shaped around the business result, not a one-size-fits-all package."],
  ["Do I need to know exactly what I want before contacting you?", "No. You only need to know what is changing, where the friction is, or what you want the business to achieve. The first conversation is designed to turn that into a clearer digital direction."],
  ["Will my website work well on mobile?", "Yes. The customer journey is designed with phones in mind from the beginning, because that is where most first impressions, enquiries and booking decisions happen."],
  ["Can Carter help after the first website launch?", "Yes. A strong launch creates a foundation for the next layers: new landing pages, dashboards, automation, client access, campaigns and product features."],
];

export function BusinessSections() {
  const [activePath, setActivePath] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const active = paths[activePath];

  return (
    <main className="business-sections">
      <section className="proof-ribbon"><div className="shell"><span>DESIGNED IN PRETORIA</span><i>✦</i><span>BUILT FOR AMBITION</span><i>✦</i><span>MADE TO CREATE MOMENTUM</span></div></section>

      <section className="shell outcome-section" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">START WITH THE OUTCOME</p><h2>What would make the biggest difference to your business <em>right now?</em></h2></div>
          <p>Choose the situation that feels closest to your business. Carter projects are built around the opportunity in front of you, not around generic packages or a recycled checklist.</p>
        </div>
        <div className="outcome-layout">
          <div className="outcome-tabs">{paths.map((path, index) => <button key={path.label} className={index === activePath ? "active" : ""} onClick={() => setActivePath(index)}><span>{path.number}</span>{path.label}<b>↗</b></button>)}</div>
          <article className="outcome-card" key={active.label}>
            <div className="outcome-image"><img src={active.image} alt={`${active.label} by Carter Digitals`} /><span>{active.number}</span></div>
            <div className="outcome-copy"><p className="eyebrow">{active.label}</p><h3>{active.title}</h3><p>{active.copy}</p><div className="outcome-tags">{active.outcomes.map((outcome) => <span key={outcome}>✓ {outcome}</span>)}</div><a href="mailto:hello@carterdigitals.co.za?subject=Start%20a%20Carter%20Build" className="text-link">Talk through this opportunity <b>→</b></a></div>
          </article>
        </div>
      </section>

      <section className="workbench-section"><div className="shell workbench-layout"><div className="workbench-copy"><p className="eyebrow light">THE CARTER WORKBENCH</p><h2>Beautiful digital work is not the finish. It is the result of making the right decisions <em>before</em> the first line of code.</h2><p>We start with the customer decision, the business offer, the desired outcome and the operational reality. That is how every page, visual detail and technical choice earns its place in the final product.</p><a href="mailto:hello@carterdigitals.co.za?subject=Start%20a%20Carter%20Build" className="light-link">Start a project conversation <b>→</b></a></div><div className="workbench-gallery"><figure className="gallery-main"><img src={showcaseVisuals.workbench} alt="Carter product workbench visual" /><figcaption>01 / DIGITAL EXPERIENCE</figcaption></figure><figure className="gallery-detail detail-one"><img src={showcaseVisuals.workflow} alt="Carter workflow visual" /><figcaption>02 / WORKFLOW DETAIL</figcaption></figure><figure className="gallery-detail detail-two"><img src={serviceVisuals.ai} alt="Carter AI ready systems visual" /><figcaption>03 / NEXT ADVANTAGE</figcaption></figure></div></div></section>

      <section className="shell readiness-section">
        <div className="readiness-card"><div><p className="eyebrow">THE DIGITAL READINESS CHECK</p><h2>Five questions worth answering before you spend money on a website.</h2><p>These are the questions that separate a pretty online brochure from a digital asset that supports business growth, earns trust and makes the next customer action easier.</p></div><ol><li><span>01</span>Can a first-time visitor explain what you do in ten seconds?</li><li><span>02</span>Does the site make the next action obvious on a phone?</li><li><span>03</span>Does the design match the value you expect clients to pay for?</li><li><span>04</span>Can your team follow up every serious enquiry quickly?</li><li><span>05</span>Can the platform grow into the next system your business needs?</li></ol></div>
      </section>

      <section className="shell founder-note-section">
        <div className="founder-note-mark">KK</div><div><p className="eyebrow">A NOTE FROM KABELO</p><h2>The point is not to make your business look like everyone else. The point is to make the right people feel confident that they have found the <em>right one.</em></h2><p>Carter Digitals is founder-led so strategy, copy, visual direction and development do not get separated into disconnected pieces. Every decision should strengthen the experience your customer has with the business — before and after launch.</p><span>KABELO KADIAKA · FOUNDER, CARTER DIGITALS</span></div>
      </section>

      <section className="shell method-v2" id="method">
        <div className="section-heading compact"><div><p className="eyebrow">THE CARTER METHOD</p><h2>Simple process. Serious attention to the <em>details.</em></h2></div><p>There is no mystery in the work. You see what is being decided, why it matters and how each stage gets the project closer to a confident launch.</p></div>
        <div className="method-grid-v2"><article><span>01</span><h3>Discover</h3><p>Understand the offer, audience, opportunity and real business goal.</p></article><article><span>02</span><h3>Shape</h3><p>Map the message, pages, features and journey around the action that matters.</p></article><article><span>03</span><h3>Design</h3><p>Create a visual system that feels premium, distinct and easy to use.</p></article><article><span>04</span><h3>Build</h3><p>Develop a responsive, reliable digital experience that is ready to grow.</p></article><article><span>05</span><h3>Launch</h3><p>Put a better digital foundation in the market and identify the next improvements.</p></article></div>
      </section>

      <section className="shell faq-section"><div className="faq-intro"><p className="eyebrow">QUESTIONS CLIENTS ASK</p><h2>Clear answers before the first conversation.</h2><p>Good projects start with clarity. Here is what working with Carter Digitals is designed to feel like.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "open" : ""} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>0{index + 1}</span>{question}<b>{openFaq === index ? "−" : "+"}</b></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></section>

      <section className="closing-section"><div className="shell"><p className="eyebrow light">READY TO MOVE?</p><h2>Your next customer is already looking for proof that you are the right choice.</h2><p>Let’s give them an experience that makes the answer obvious.</p><div><a className="closing-primary" href="mailto:hello@carterdigitals.co.za?subject=Start%20a%20Carter%20Build">Start your project brief <span>↗</span></a><a className="closing-secondary" href="mailto:hello@carterdigitals.co.za">hello@carterdigitals.co.za</a></div><footer>© 2026 CARTER DIGITALS · FOUNDER: KABELO KADIAKA · PRETORIA, SOUTH AFRICA</footer></div></section>
    </main>
  );
}
