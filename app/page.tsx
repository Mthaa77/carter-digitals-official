"use client";

import { FormEvent, useState } from "react";
import { brandLockup } from "./brand";
import { BuildLab, CarterCore, Reveal, TiltCard } from "./components/immersive-studio";

const contactEmail = "hello@carterdigitals.co.za";

const services = [
  { number: "01", title: "Signature Websites", label: "POSITIONING + CONVERSION", copy: "High-end websites that make the offer clear, the brand credible and the next action easy to take.", className: "card-site" },
  { number: "02", title: "Lead Experiences", label: "FUNNELS + ENQUIRIES", copy: "Focused landing journeys that turn interest into calls, bookings, WhatsApps and qualified conversations.", className: "card-leads" },
  { number: "03", title: "Web Applications", label: "PRODUCT + PLATFORM", copy: "Portals, dashboards and custom applications designed around real users and real operating needs.", className: "card-app" },
  { number: "04", title: "Automation Systems", label: "WORKFLOW + FOLLOW-UP", copy: "Practical systems that help teams respond faster, remove friction and protect valuable opportunities.", className: "card-flow" },
  { number: "05", title: "Dashboards & Tools", label: "VISIBILITY + DECISIONS", copy: "Business tools and intelligent dashboards that turn activity into insight and insight into action.", className: "card-data" },
  { number: "06", title: "AI-Ready Growth", label: "MODERN ADVANTAGE", copy: "Thoughtful AI-enabled experiences and cloud-ready foundations for businesses that want to operate smarter.", className: "card-ai" },
];

const industries = [
  { name: "Professional services", title: "Make expertise feel immediately credible.", text: "For law firms, consultants and specialists whose digital experience must build trust before the first meeting.", outcomes: ["Authority-led messaging", "High-trust enquiries", "Premium client journey"] },
  { name: "Healthcare & wellness", title: "Give patients a calmer, clearer next step.", text: "For clinics, dental practices and wellness brands that need a polished first impression and simpler bookings.", outcomes: ["Mobile-first booking", "Trust-building content", "Clear service paths"] },
  { name: "Education & training", title: "Make enrolment feel structured and achievable.", text: "For schools, academies and training providers ready to present programmes, value and admissions with confidence.", outcomes: ["Programme discovery", "Learner-ready information", "Admissions flow"] },
  { name: "Property & logistics", title: "Bring more moving parts into one clear experience.", text: "For property, transport and logistics businesses where speed, visibility and self-service directly affect growth.", outcomes: ["Lead and booking systems", "Operational dashboards", "Customer access"] },
  { name: "Local service businesses", title: "Look like the obvious choice in your area.", text: "For service brands that need stronger proof, sharper calls to action and faster paths to a quote or booking.", outcomes: ["Quote conversion", "Google-ready experience", "Mobile action paths"] },
  { name: "Digital ventures", title: "Turn a serious idea into a launchable product path.", text: "For founders with an app, SaaS or marketplace vision that needs product thinking before expensive development.", outcomes: ["MVP roadmap", "User journey design", "Scalable foundation"] },
];

const method = [
  ["01", "Clarify", "The commercial goal, the people who matter and the story that has to land first."],
  ["02", "Architect", "A product or site structure built around a clear customer journey, not random pages."],
  ["03", "Design", "A distinct visual language that earns attention and makes the business feel ready for bigger rooms."],
  ["04", "Build", "Founder-led engineering with responsive performance, reusable foundations and pragmatic technical choices."],
  ["05", "Launch + evolve", "A confident release, clear handover and a foundation that is ready for the next opportunity."],
];

type Brief = { name: string; business: string; project: string; goal: string; message: string };

export default function Home() {
  const [industry, setIndustry] = useState(0);
  const [projectOpen, setProjectOpen] = useState(false);
  const [brief, setBrief] = useState<Brief>({ name: "", business: "", project: "Signature website", goal: "More qualified leads", message: "" });

  function openProject(project?: string) {
    if (project) setBrief((current) => ({ ...current, project }));
    setProjectOpen(true);
  }

  function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Carter Build Enquiry — ${brief.business || brief.name || "New project"}`;
    const body = [
      "Hello Carter Digitals,",
      "",
      `Name: ${brief.name}`,
      `Business: ${brief.business}`,
      `What I want to build: ${brief.project}`,
      `Primary goal: ${brief.goal}`,
      "",
      `Project context: ${brief.message || "No additional notes provided."}`,
      "",
      "I would like to start a Carter Build conversation.",
    ].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      <div className="announcement"><div className="shell"><span><i /> FOUNDER-LED DIGITAL DELIVERY</span><p>Premium websites, applications and systems for businesses that are ready to be taken seriously online.</p><button onClick={() => openProject()}>Start a build <b>↗</b></button></div></div>

      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Carter Digitals home"><img src={brandLockup} alt="Carter Digitals" /></a>
        <div className="nav-links"><a href="#services">Capabilities</a><a href="#studio">Studio</a><a href="#industries">Industries</a><a href="#method">Method</a></div>
        <button className="nav-button" onClick={() => openProject()}>Start a project <b>↗</b></button>
      </nav>

      <section className="hero hero--immersive" id="top">
        <div className="hero-grid" /><div className="hero-noise" />
        <div className="shell hero-layout hero-layout--immersive">
          <Reveal className="hero-copy hero-copy--immersive">
            <p className="eyebrow"><i /> PRETORIA-BASED · SOUTH AFRICA-READY</p>
            <h1>Make your business feel like the <em>future</em> it is working toward.</h1>
            <p className="lead">Carter Digitals designs and engineers premium websites, web applications and intelligent business systems for ambitious companies that want to be easier to trust, easier to choose and harder to forget.</p>
            <div className="hero-actions"><button className="button button-primary magnetic" onClick={() => openProject()}>Build my digital advantage <span>↗</span></button><a href="#studio" className="button button-soft">Explore the Carter studio <span>↓</span></a></div>
            <div className="hero-proof"><span><b>Founder-led</b> strategy and build</span><span><b>Custom</b> — never template-first</span><span><b>Designed for</b> mobile-first customers</span></div>
          </Reveal>
          <Reveal className="hero-core-wrap"><CarterCore /></Reveal>
        </div>
      </section>

      <section className="motion-strip"><div className="motion-track"><span>CARTER DIGITALS</span><i>✦</i><span>STRATEGY THAT MOVES</span><i>✦</i><span>DESIGN THAT CONVERTS</span><i>✦</i><span>SYSTEMS THAT SCALE</span><i>✦</i><span>CARTER DIGITALS</span><i>✦</i><span>STRATEGY THAT MOVES</span></div></section>

      <section className="shell studio-section section" id="studio">
        <Reveal className="studio-card"><div className="studio-mark"><div className="studio-halo" /><img src={brandLockup} alt="Carter Digitals logo" /><span>KK / FOUNDER</span></div><div className="studio-copy"><p className="eyebrow">THE STUDIO BEHIND THE BUILD</p><h2>Led by Kabelo Kadiaka. Built for the moment a business decides it is ready to <em>level up.</em></h2><p className="studio-lead">Carter Digitals is a founder-led digital studio based in Pretoria, focused on turning business potential into premium, practical digital experiences.</p><p>Kabelo connects the strategy, user journey, visual direction and development work so the final product does not feel like a disconnected handover between different people. It feels intentional from the first screen to the operational detail behind it.</p><div className="studio-signals"><span><b>01</b> Strategy and development stay connected</span><span><b>02</b> Every interaction needs a business reason</span><span><b>03</b> Built to expand when the opportunity does</span></div><button className="text-cta" onClick={() => openProject()}>Work directly with Kabelo <b>→</b></button></div></Reveal>
      </section>

      <section className="shell capabilities section" id="services">
        <Reveal><p className="eyebrow">CAPABILITIES WITH CONSEQUENCE</p><div className="heading-row"><h2>Not just a polished interface. A digital asset designed to create <em>momentum.</em></h2><p>The best-looking build in the world means little if it cannot make the business clearer, more credible, more responsive or more valuable to the people using it.</p></div></Reveal>
        <div className="services-grid services-grid--immersive">{services.map((service, index) => <TiltCard className={`service-card ${service.className}`} key={service.title}><div className="service-meta"><span>{service.number}</span><small>{service.label}</small></div><h3>{service.title}</h3><p>{service.copy}</p><button className="card-arrow" onClick={() => openProject(service.title)}>Explore <b>↗</b></button><div className="card-visual">{index === 0 && <><i /><i /><i /></>}{index === 1 && <><strong>NEW<br />LEAD</strong><span>High-intent<br />enquiry</span></>}{index === 2 && <><b>APP</b><em>01</em><em>02</em></>}{index === 3 && <><span>Lead</span><i>→</i><span>Follow up</span><i>→</i><span>Booked</span></>}{index === 4 && <svg viewBox="0 0 200 90" aria-hidden="true"><path d="M6 76C30 59 44 65 61 53S92 70 112 34S147 59 167 19S187 27 196 7" fill="none" stroke="currentColor" strokeWidth="4" /><circle cx="112" cy="34" r="5" fill="currentColor" /></svg>}{index === 5 && <><b>AI</b><span>Assist</span><span>Analyse</span><span>Act</span></>}</div></TiltCard>)}</div>
      </section>

      <section className="shell lab-shell section"><Reveal><BuildLab onStart={openProject} /></Reveal></section>

      <section className="shell promise-section section"><Reveal className="promise-layout"><div><p className="eyebrow">THE CARTER STANDARD</p><h2>A serious digital build should improve more than how the business <em>looks.</em></h2></div><div className="promise-list"><article><span>✦</span><div><h3>A sharper reason to choose you</h3><p>Messaging, proof and visual framing that make it easier for the right customer to recognise the value.</p></div></article><article><span>✦</span><div><h3>A more confident path to action</h3><p>Clear calls, useful micro-interactions and journeys that guide a visitor toward a call, booking, enquiry or purchase.</p></div></article><article><span>✦</span><div><h3>A better operating foundation</h3><p>Flexible systems that can later support automation, analytics, client access, dashboards and new products.</p></div></article></div></Reveal></section>

      <section className="shell industry-section section" id="industries">
        <Reveal><p className="eyebrow">BUILT AROUND REAL BUSINESS CONTEXT</p><div className="heading-row"><h2>Different industries need different proof, journeys and systems.</h2><p>Carter starts with the decision your customer needs to make, then designs the experience around helping them make it with confidence.</p></div></Reveal>
        <Reveal className="industry-map industry-map--premium"><div className="industry-tabs">{industries.map((item, index) => <button key={item.name} className={industry === index ? "selected" : ""} onClick={() => setIndustry(index)}><span>0{index + 1}</span>{item.name}<b>↗</b></button>)}</div><div className="industry-content"><div className="industry-number">0{industry + 1}</div><p className="eyebrow">{industries[industry].name}</p><h3>{industries[industry].title}</h3><p>{industries[industry].text}</p><div className="outcome-tags">{industries[industry].outcomes.map((outcome) => <span key={outcome}>✓ {outcome}</span>)}</div><button className="button button-dark" onClick={() => openProject(`${industries[industry].name} digital experience`)}>Build for this business <b>↗</b></button></div></Reveal>
      </section>

      <section className="impact-section"><div className="shell"><Reveal><div className="impact-heading"><p className="eyebrow light">THE DIFFERENCE IN THE DETAILS</p><h2>Every layer should make the next step feel more <em>inevitable.</em></h2></div><div className="impact-grid"><article><span>01</span><h3>Immersive, but intentional</h3><p>Motion and 3D depth catch attention. Strong hierarchy and direct copy make sure attention turns into understanding.</p><b>Experience design</b></article><article><span>02</span><h3>Premium, but practical</h3><p>The polish earns trust, while the technical decisions keep the site responsive, maintainable and ready to evolve.</p><b>Product thinking</b></article><article><span>03</span><h3>Bold, but business-first</h3><p>Every animated component, page and interaction should give the customer a clearer reason to move closer to your business.</p><b>Conversion architecture</b></article></div></Reveal></div></section>

      <section className="shell process process--premium section" id="method"><Reveal><p className="eyebrow">THE CARTER BUILD METHOD</p><div className="heading-row"><h2>Clear thinking. Premium execution. A visible path from idea to <em>launch.</em></h2><p>You always know the role of the next stage, what is being decided and how the build is moving the business forward.</p></div><div className="process-grid">{method.map(([number, title, copy]) => <article key={number}><span>{number}</span><i /><h3>{title}</h3><p>{copy}</p></article>)}</div></Reveal></section>

      <section className="final final--immersive"><div className="final-grid" /><div className="final-glow" /><div className="shell"><Reveal><div className="final-logo"><img src={brandLockup} alt="Carter Digitals" /></div><p className="eyebrow light">START A CARTER BUILD</p><h2>Your next chapter deserves a digital experience that looks and feels <em>ready.</em></h2><p>Bring the idea, the outdated website, the operational problem or the opportunity you can already see. Carter Digitals will help turn it into a digital asset built to create momentum.</p><div className="hero-actions"><button className="button button-primary" onClick={() => openProject()}>Start my project brief <span>↗</span></button><a className="button button-outline" href={`mailto:${contactEmail}`}>Email Carter Digitals</a></div><footer><span>© 2026 CARTER DIGITALS</span><span>FOUNDER: KABELO KADIAKA</span><span>PRETORIA · GAUTENG · SOUTH AFRICA</span></footer></Reveal></div></section>

      {projectOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Start a Carter Build"><form className="project-modal" onSubmit={submitBrief}><button className="close" type="button" onClick={() => setProjectOpen(false)}>×</button><div className="project-modal-heading"><p className="eyebrow">START A CARTER BUILD</p><h2>Tell us what the next version of the business needs to do.</h2><p>This short brief gives Kabelo enough context to make the first conversation genuinely useful.</p></div><div className="brief-grid"><label>YOUR NAME<input required value={brief.name} onChange={(event) => setBrief({ ...brief, name: event.target.value })} placeholder="Your name" /></label><label>BUSINESS / BRAND<input required value={brief.business} onChange={(event) => setBrief({ ...brief, business: event.target.value })} placeholder="Business name" /></label><label>WHAT DO YOU WANT TO BUILD?<select value={brief.project} onChange={(event) => setBrief({ ...brief, project: event.target.value })}><option>Signature website</option><option>Lead-generation landing experience</option><option>Client portal or web application</option><option>Internal system or dashboard</option><option>AI or workflow automation</option><option>Digital product / MVP</option><option>I need guidance</option></select></label><label>WHAT MATTERS MOST?<select value={brief.goal} onChange={(event) => setBrief({ ...brief, goal: event.target.value })}><option>More qualified leads</option><option>Premium brand perception</option><option>Better customer experience</option><option>Less operational friction</option><option>Launch a new digital product</option></select></label><label className="brief-message">TELL KABELO A LITTLE MORE<textarea value={brief.message} onChange={(event) => setBrief({ ...brief, message: event.target.value })} placeholder="What is changing in the business? What is not working right now? What would a successful result look like?" rows={5} /></label></div><div className="brief-footer"><p>Your details open a pre-filled email to Carter Digitals. You stay in control of sending it.</p><button className="button button-primary" type="submit">Open my project email <span>↗</span></button></div></form></div>}
    </main>
  );
}
