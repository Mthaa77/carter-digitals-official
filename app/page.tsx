"use client";

import { useMemo, useState } from "react";

const goals = [
  {
    label: "Get found online",
    signal: "Visibility Engine",
    route: "Google Search → Premium Website → Trust",
    copy: "A fast, credible digital home engineered to make your business easier to find and easier to choose.",
  },
  {
    label: "Generate more leads",
    signal: "Lead Conversion System",
    route: "Search / Social → Website → WhatsApp → Qualified Lead",
    copy: "A conversion-first experience that turns attention into real conversations and better enquiries.",
  },
  {
    label: "Automate operations",
    signal: "Operations Engine",
    route: "Manual Work → Automation → Visibility → Momentum",
    copy: "Remove repetitive tasks and replace scattered activity with a connected system your team can actually use.",
  },
  {
    label: "Build a portal or app",
    signal: "Bespoke Platform",
    route: "Workflow Mapping → Product Design → Secure Portal",
    copy: "Turn your specific workflow into software built around your people, clients and business rules.",
  },
];

const industries = [
  {
    id: "schools",
    title: "Schools & education",
    code: "EDU // 01",
    challenge: "Admissions, parent communication, trust and information overload.",
    system: "Admissions website, announcements hub, parent enquiry flow, downloads portal and AI FAQ support.",
    outcome: "A modern school experience that makes enrolment easier and communication clearer.",
  },
  {
    id: "legal",
    title: "Law firms",
    code: "LAW // 02",
    challenge: "Trust, credibility, service clarity and qualified consultation requests.",
    system: "Authority-led website, service architecture, secure enquiry forms and consultation workflows.",
    outcome: "A stronger institutional image and a more professional path from enquiry to instruction.",
  },
  {
    id: "medical",
    title: "Medical practices",
    code: "MED // 03",
    challenge: "Patient trust, appointment friction and fragmented communication.",
    system: "Patient-friendly web presence, booking pathway, WhatsApp routing and information hub.",
    outcome: "A calmer, clearer patient journey that protects time for the clinical team.",
  },
  {
    id: "hospitality",
    title: "Hospitality & guesthouses",
    code: "HOS // 04",
    challenge: "Direct bookings, visual confidence and reducing platform dependency.",
    system: "Cinematic booking website, availability flow, enquiry automation and local search setup.",
    outcome: "More direct enquiries, stronger perception and a brand guests remember.",
  },
  {
    id: "sme",
    title: "Ambitious SMEs",
    code: "SME // 05",
    challenge: "Growth ambition held back by manual processes and a weak online presence.",
    system: "Conversion website, CRM workflow, automation, dashboards and brand sales assets.",
    outcome: "A scalable digital foundation that helps a serious business operate like one.",
  },
  {
    id: "public",
    title: "Government-aligned institutions",
    code: "GOV // 06",
    challenge: "Compliance, credibility, stakeholder access and procurement readiness.",
    system: "Institutional digital presence, secure forms, company profile systems and operational platforms.",
    outcome: "A credible, structured platform prepared for real-world institutional scrutiny.",
  },
];

const services = [
  {
    index: "01",
    title: "Websites that work",
    line: "A website is not a marketing expense. It is infrastructure.",
    body: "Premium, mobile-first digital foundations designed for trust, speed, search visibility and conversion.",
    tags: ["Next.js", "SEO-ready", "WhatsApp", "Performance"],
  },
  {
    index: "02",
    title: "Bespoke web applications",
    line: "Your workflow deserves more than a patchwork of tabs.",
    body: "Custom-built platforms that bring scattered processes, people and information into one useful system.",
    tags: ["Portals", "Dashboards", "Automation", "Secure access"],
  },
  {
    index: "03",
    title: "Internal business tools",
    line: "Operational clarity is a competitive advantage.",
    body: "Dashboards, trackers, CRMs and control rooms that make the next decision easier to see.",
    tags: ["CRM", "Bookings", "Invoices", "Analytics"],
  },
  {
    index: "04",
    title: "Brand & sales systems",
    line: "A credible brand should make the room feel different.",
    body: "Distinct identity systems, company profiles, pitch decks and launch assets made to earn confidence.",
    tags: ["Identity", "Profiles", "Pitch decks", "Print"],
  },
];

const plans = [
  {
    id: "vula",
    number: "01",
    title: "Vula",
    caption: "Get online and start getting calls.",
    price: "R3,999",
    note: "A focused launchpad for a business that needs a professional, credible home online.",
    features: ["Up to 4 core pages", "Mobile-first branded design", "Hosting + domain in year one", "WhatsApp and lead form integration", "Google Business Profile setup", "Basic SEO structure"],
  },
  {
    id: "khula",
    number: "02",
    title: "Khula",
    caption: "Turn visitors into paying clients.",
    price: "R7,999",
    note: "A growth-focused digital engine for businesses that want to turn attention into opportunity.",
    features: ["Up to 8 pages incl. portfolio or blog", "Lead or booking request system", "AI WhatsApp assistant pathway", "Analytics + Search Console", "Keyword-targeted SEO setup", "Everything in Vula"],
  },
  {
    id: "elevate",
    number: "03",
    title: "Elevate",
    caption: "A fully managed digital engine.",
    price: "R14,999",
    note: "For businesses ready for deeper content control, advanced systems and a stronger growth platform.",
    features: ["CMS content management", "24/7 AI sales and support assistant", "E-commerce or advanced integrations", "Advanced SEO reporting", "Custom CRM, payment or workflow integrations", "Everything in Khula"],
  },
];

const modules = [
  "Too many WhatsApp enquiries",
  "Manual invoicing",
  "No client tracking",
  "Messy staff processes",
  "Too many spreadsheets",
  "Bookings are disorganised",
  "Clients need a portal",
  "Reporting takes too long",
];

const phases = [
  ["01", "Discover & Align", "Map outcomes, stakeholders, technical constraints and success before a line of code is written."],
  ["02", "Architecture & Wireflow", "Design the information hierarchy, user journeys and system shape before building begins."],
  ["03", "Design & Build", "Turn the approved route into a unified, responsive and useful digital product."],
  ["04", "QA & Compliance", "Validate performance, content, accessibility, security-minded forms and device experience."],
  ["05", "Launch & Enablement", "Deploy, document and equip the client team to operate with confidence after launch."],
];

function Mark() {
  return (
    <span className="mark" aria-label="Carter Digitals">
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  const [goalIndex, setGoalIndex] = useState(1);
  const [industryIndex, setIndustryIndex] = useState(0);
  const [planIndex, setPlanIndex] = useState(1);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [briefOpen, setBriefOpen] = useState(false);
  const [briefStep, setBriefStep] = useState(0);

  const activeGoal = goals[goalIndex];
  const activeIndustry = industries[industryIndex];
  const activePlan = plans[planIndex];
  const architecture = useMemo(() => {
    const base = ["Lead capture", "Client workspace", "Operations view"];
    if (selectedModules.some((item) => item.includes("WhatsApp"))) base.unshift("WhatsApp routing");
    if (selectedModules.some((item) => item.includes("invoicing"))) base.push("Quote + invoice tracking");
    if (selectedModules.some((item) => item.includes("Bookings"))) base.push("Booking automation");
    if (selectedModules.some((item) => item.includes("portal"))) base.push("Secure client portal");
    if (selectedModules.some((item) => item.includes("Reporting"))) base.push("Live KPI dashboard");
    return base;
  }, [selectedModules]);

  const toggleModule = (module: string) => {
    setSelectedModules((current) => current.includes(module) ? current.filter((item) => item !== module) : [...current, module]);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Carter Digitals home"><Mark /><span>CARTER<br /><b>DIGITALS</b></span></a>
        <nav aria-label="Primary navigation">
          <a href="#systems">What we build</a>
          <a href="#industries">Industries</a>
          <a href="#packages">Packages</a>
          <a href="#process">Delivery</a>
          <a href="#studio">Studio</a>
        </nav>
        <button className="nav-cta" onClick={() => { setBriefStep(0); setBriefOpen(true); }}>Start a project <span>↗</span></button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-red" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> PRETORIA DIGITAL STUDIO // EST. 2023</div>
          <h1>Your business does not need another website.<br /><em>It needs a system that brings in work.</em></h1>
          <p>Carter Digitals builds high-performance websites, bespoke web applications, internal business tools and AI-enabled systems for ambitious South African institutions.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => { setBriefStep(0); setBriefOpen(true); }}>Build my digital blueprint <span>→</span></button>
            <a className="ghost-button" href="#systems">Explore what we build <span>↓</span></a>
          </div>
          <div className="hero-proof"><span><b>100%</b> Black-owned</span><span><b>Level 1</b> B-BBEE</span><span><b>Built in</b> South Africa</span></div>
        </div>
        <div className="signal-orb" aria-hidden="true">
          <div className="orb-ring ring-a" /><div className="orb-ring ring-b" /><div className="orb-ring ring-c" />
          <div className="core-cube"><span className="cube-top" /><span className="cube-side" /><span className="cube-front">CD</span></div>
          <div className="node node-a">LEADS</div><div className="node node-b">BOOKINGS</div><div className="node node-c">AUTOMATION</div><div className="node node-d">GROWTH</div>
          <svg className="signal-lines" viewBox="0 0 600 600" fill="none"><path d="M80 172C200 205 182 130 298 228S441 125 548 78" /><path d="M55 418c134-47 145 77 256 14s161-15 226 89" /><path d="M87 306c96 18 167-94 255-10s123-12 189-24" /></svg>
          <div className="status-chip">LIVE SYSTEM <b /></div>
        </div>
        <div className="scroll-indicator"><span /> SCROLL TO ENTER</div>
      </section>

      <section className="outcome-section section-shell">
        <div className="section-intro">
          <span className="index">01 / OUTCOME ROUTER</span>
          <h2>Start with the outcome.<br /><em>We will build the system behind it.</em></h2>
        </div>
        <div className="router-layout">
          <div className="route-list">
            {goals.map((goal, index) => (
              <button key={goal.label} className={goalIndex === index ? "route-option active" : "route-option"} onClick={() => setGoalIndex(index)}>
                <span>0{index + 1}</span><strong>{goal.label}</strong><i>↗</i>
              </button>
            ))}
          </div>
          <div className="route-screen">
            <span className="screen-label">RECOMMENDED CARTER BUILD</span>
            <div className="screen-signal"><span /><span /><span /><span /><span /></div>
            <h3>{activeGoal.signal}</h3>
            <p>{activeGoal.copy}</p>
            <div className="route-flow">{activeGoal.route.split(" → ").map((node, index) => <span key={node}>{node}{index < activeGoal.route.split(" → ").length - 1 && <b>→</b>}</span>)}</div>
            <button className="inline-button" onClick={() => { setBriefStep(0); setBriefOpen(true); }}>Turn this into my project brief <span>↗</span></button>
          </div>
        </div>
      </section>

      <section id="industries" className="industry-section">
        <div className="industry-aurora" />
        <div className="section-shell">
          <div className="section-intro section-intro-light">
            <span className="index">02 / DIGITAL TERRAIN</span>
            <h2>Real institutions.<br /><em>Real operational pressure.</em></h2>
            <p>We do not force every sector into the same template. Choose a terrain to see the system underneath it.</p>
          </div>
          <div className="terrain-wrap">
            <div className="terrain-map" aria-label="Industry selector">
              <div className="terrain-lines"><i /><i /><i /><i /><i /><i /></div>
              {industries.map((industry, index) => <button key={industry.id} onClick={() => setIndustryIndex(index)} className={industryIndex === index ? `terrain-node node-${index} active` : `terrain-node node-${index}`}><span>{industry.code}</span><b>{industry.title}</b></button>)}
              <div className="terrain-pulse" />
            </div>
            <article className="industry-brief">
              <div className="brief-head"><span>{activeIndustry.code}</span><small>ACTIVE INDUSTRY ROUTE</small></div>
              <h3>{activeIndustry.title}</h3>
              <div className="brief-block"><small>THE PRESSURE</small><p>{activeIndustry.challenge}</p></div>
              <div className="brief-block"><small>THE SYSTEM</small><p>{activeIndustry.system}</p></div>
              <div className="brief-block outcome"><small>THE OUTCOME</small><p>{activeIndustry.outcome}</p></div>
              <button onClick={() => { setBriefStep(0); setBriefOpen(true); }} className="brief-cta">Build for this industry <span>→</span></button>
            </article>
          </div>
        </div>
      </section>

      <section id="systems" className="systems-section section-shell">
        <div className="section-intro">
          <span className="index">03 / CAPABILITY ENGINE</span>
          <h2>Different problems.<br /><em>One studio built to solve them.</em></h2>
        </div>
        <div className="service-rail">
          {services.map((service, index) => (
            <article className="service-scene" key={service.index}>
              <div className="scene-number">{service.index}</div>
              <div className="scene-visual" aria-hidden="true"><div className={`visual-stack stack-${index}`}><i /><i /><i /><b /></div><div className="visual-orbit" /></div>
              <div className="scene-copy"><span>CAPABILITY // {service.index}</span><h3>{service.title}</h3><h4>{service.line}</h4><p>{service.body}</p><div>{service.tags.map((tag) => <em key={tag}>{tag}</em>)}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section id="packages" className="packages-section">
        <div className="section-shell">
          <div className="section-intro section-intro-light package-intro">
            <span className="index">04 / GROWTH ELEVATOR</span>
            <h2>Choose your<br /><em>growth level.</em></h2>
            <p>Not a generic price list. A clear route from presence to a fully managed digital engine.</p>
          </div>
          <div className="elevator-layout">
            <div className="elevator-shaft">
              <div className="shaft-line" />
              {plans.map((plan, index) => <button key={plan.id} className={planIndex === index ? "floor-button active" : "floor-button"} onClick={() => setPlanIndex(index)}><span>{plan.number}</span><b>{plan.title}</b><small>{index === 1 ? "MOST CHOSEN" : ""}</small></button>)}
              <div className="lift-car" style={{ top: `${26 + planIndex * 31}%` }}><span>YOU ARE HERE</span></div>
            </div>
            <article className="package-panel">
              <span className="panel-label">CARTER PACKAGE // {activePlan.number}</span>
              <h3>{activePlan.title}</h3>
              <p className="package-caption">{activePlan.caption}</p>
              <div className="price"><span>FROM</span><strong>{activePlan.price}</strong><small>once-off</small></div>
              <p>{activePlan.note}</p>
              <ul>{activePlan.features.map((feature) => <li key={feature}><i>✦</i>{feature}</li>)}</ul>
              <button onClick={() => { setBriefStep(0); setBriefOpen(true); }} className="primary-button">Choose {activePlan.title} <span>→</span></button>
            </article>
          </div>
        </div>
      </section>

      <section className="builder-section section-shell">
        <div className="section-intro">
          <span className="index">05 / BESPOKE SYSTEM BUILDER</span>
          <h2>Describe the problem.<br /><em>See the system taking shape.</em></h2>
        </div>
        <div className="builder-layout">
          <div className="module-bank">
            <p>Select the business pressure points that sound familiar.</p>
            <div className="module-grid">{modules.map((module) => <button key={module} onClick={() => toggleModule(module)} className={selectedModules.includes(module) ? "module-chip active" : "module-chip"}><span>{selectedModules.includes(module) ? "✓" : "+"}</span>{module}</button>)}</div>
          </div>
          <div className="architecture-panel">
            <div className="architecture-top"><span>YOUR POSSIBLE SYSTEM</span><small>{selectedModules.length || "0"} pressure points mapped</small></div>
            <div className="architecture-flow">{architecture.map((item, index) => <div className="architecture-node" key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b>{index < architecture.length - 1 && <i>↓</i>}</div>)}</div>
            <p>{selectedModules.length ? "This is the beginning of a connected digital operating system—not another off-the-shelf template." : "Choose a few pressure points and we will map a potential system architecture here."}</p>
            <button onClick={() => { setBriefStep(0); setBriefOpen(true); }} className="inline-button">Turn this into a real brief <span>↗</span></button>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="section-shell">
          <div className="section-intro section-intro-light">
            <span className="index">06 / FROM SIGNAL TO LAUNCH</span>
            <h2>A disciplined route.<br /><em>Not a mystery process.</em></h2>
          </div>
          <div className="phase-track">{phases.map(([number, title, body], index) => <article className={index === 2 ? "phase active" : "phase"} key={number}><div className="phase-dot"><span>{number}</span></div><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="vault-section section-shell">
        <div className="vault-copy"><span className="index">07 / CREDENTIAL VAULT</span><h2>Credentials that<br /><em>open doors.</em></h2><p>Structured to work with serious clients, institutional buyers and organisations that need confidence before commitment.</p></div>
        <div className="credential-vault">
          <article className="credential credential-primary"><span>VERIFIED STATUS</span><strong>LEVEL 1</strong><b>B-BBEE CONTRIBUTOR</b><small>135% procurement recognition</small></article>
          <article className="credential"><span>OWNERSHIP</span><strong>100%</strong><b>BLACK + YOUTH OWNED</b><small>South African enterprise</small></article>
          <article className="credential"><span>OPERATIONS</span><strong>POPIA</strong><b>CONSCIOUS DELIVERY</b><small>Data handling considered</small></article>
          <article className="credential"><span>PROCUREMENT</span><strong>CSD</strong><b>REGISTERED</b><small>Institutional readiness</small></article>
        </div>
      </section>

      <section id="studio" className="studio-section">
        <div className="section-shell studio-grid">
          <div className="portrait-frame"><div className="portrait-glow" /><div className="portrait-monogram">KK</div><span>FOUNDER / DIRECTOR</span><small>PRETORIA, SOUTH AFRICA</small></div>
          <div className="studio-copy"><span className="index">08 / THE STUDIO</span><h2>AI-augmented.<br />Human-driven.<br /><em>Built to deliver.</em></h2><p>Carter Digitals is founder-led by Kabelo Kadiaka—combining product thinking, full-stack development, cloud capability and practical AI systems to turn strong ideas into working digital infrastructure.</p><div className="capability-cloud"><span>Next.js</span><span>React</span><span>Python / FastAPI</span><span>GCP / Vertex AI</span><span>PostgreSQL</span><span>Sanity CMS</span><span>WhatsApp API</span><span>Automation</span></div><blockquote>“Capability over credentials. Outcomes over promises.”</blockquote></div>
        </div>
      </section>

      <section className="final-section">
        <div className="final-grid" />
        <div className="section-shell final-inner"><span className="index">READY WHEN YOU ARE</span><h2>Let&apos;s build something<br /><em>that works for you.</em></h2><p>Start with a guided brief, send a WhatsApp message, or explore the right route for your business. No pressure—just clarity.</p><div className="final-actions"><button className="primary-button" onClick={() => { setBriefStep(0); setBriefOpen(true); }}>Start a blueprint <span>→</span></button><a href="https://wa.me/27724026893" className="whatsapp-button">Send a WhatsApp <span>↗</span></a></div><div className="footer-line"><span>© 2026 Carter Digitals (Pty) Ltd</span><span>Built Different. Built African. Built to Win.</span><span>Soshanguve, Pretoria</span></div></div>
      </section>

      {briefOpen && <div className="brief-modal" role="dialog" aria-modal="true" aria-label="Start a project brief"><button aria-label="Close project brief" className="modal-close" onClick={() => setBriefOpen(false)}>×</button><div className="brief-progress">{[0,1,2,3].map((item) => <i className={item <= briefStep ? "active" : ""} key={item} />)}</div>{briefStep === 0 && <><span className="index">PROJECT BLUEPRINT / 01</span><h2>What would make this project successful?</h2><div className="modal-options">{goals.map((goal, index) => <button key={goal.label} onClick={() => { setGoalIndex(index); setBriefStep(1); }}>{goal.label}<span>→</span></button>)}</div></>}{briefStep === 1 && <><span className="index">PROJECT BLUEPRINT / 02</span><h2>What type of organisation are we building for?</h2><div className="modal-options compact">{industries.map((industry, index) => <button key={industry.id} onClick={() => { setIndustryIndex(index); setBriefStep(2); }}>{industry.title}<span>→</span></button>)}</div></>}{briefStep === 2 && <><span className="index">PROJECT BLUEPRINT / 03</span><h2>How soon are you looking to move?</h2><div className="modal-options compact">{["Ready to start now", "Within 30 days", "Planning the right route", "I need a prototype first"].map((item) => <button key={item} onClick={() => setBriefStep(3)}>{item}<span>→</span></button>)}</div></>}{briefStep === 3 && <div className="brief-complete"><span className="success-mark">✓</span><span className="index">PROJECT BLUEPRINT CAPTURED</span><h2>Your route is taking shape.</h2><p>Recommended direction: <b>{activeGoal.signal}</b> for <b>{activeIndustry.title}</b>.</p><div className="brief-code">CD-2026-PTA-084</div><a className="primary-button" href="mailto:kabelokadiaka4@gmail.com?subject=Carter%20Digitals%20Project%20Blueprint">Send my project brief <span>→</span></a></div>}</div>}
    </main>
  );
}
