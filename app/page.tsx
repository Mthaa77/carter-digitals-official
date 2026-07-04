"use client";

import { FormEvent, useMemo, useState } from "react";
import { brandLockup } from "./brand";

const contactEmail = "hello@carterdigitals.co.za";

const goals = {
  "More qualified leads": "Sharper positioning, stronger proof and conversion journeys that make it easier for serious customers to choose you.",
  "A premium new website": "A tailored digital flagship that reflects the real quality of your business, not a recycled template.",
  "Better systems": "Portals, dashboards and workflow tools that replace scattered processes with visibility and momentum.",
  "A digital product": "An MVP or web platform designed around real users, a clear commercial model and a scalable next step.",
};

const services = [
  { number: "01", title: "Signature Websites", tag: "POSITIONING + CONVERSION", copy: "High-end business websites that make your offer clear, your value credible and your next action obvious.", visual: "site" },
  { number: "02", title: "Lead Experiences", tag: "FUNNELS + ENQUIRIES", copy: "Landing pages and enquiry journeys that turn interest into calls, bookings, WhatsApps and real sales conversations.", visual: "leads" },
  { number: "03", title: "Web Applications", tag: "PRODUCT + PLATFORM", copy: "Customer portals, internal platforms and scalable web applications designed around the way people actually work.", visual: "app" },
  { number: "04", title: "Automation Systems", tag: "WORKFLOW + FOLLOW-UP", copy: "Practical automation that helps teams respond faster, reduce admin friction and stop opportunities from going cold.", visual: "flow" },
  { number: "05", title: "Dashboards & Tools", tag: "VISIBILITY + DECISIONS", copy: "Focused dashboards, calculators and business tools that turn activity into insight and insight into action.", visual: "data" },
  { number: "06", title: "AI-Ready Growth", tag: "MODERN ADVANTAGE", copy: "Thoughtful AI-enabled experiences and cloud-ready foundations built for businesses ready to operate smarter.", visual: "ai" },
];

const industries = [
  { label: "Professional services", title: "Make expertise feel immediately credible.", copy: "For law firms, consultants, financial professionals and specialists whose website must build trust before the first meeting.", outcomes: ["Authority-led site structure", "Clear service positioning", "Frictionless enquiries"] },
  { label: "Healthcare & wellness", title: "Give patients a calmer, clearer next step.", copy: "For dental practices, clinics and wellness brands that need a premium first impression and a smooth booking journey.", outcomes: ["Mobile-first booking flow", "Trust-building content", "Service clarity"] },
  { label: "Education & training", title: "Turn programmes into a confident enrolment experience.", copy: "For schools, academies and training providers ready to present their courses, fees and learner journey with authority.", outcomes: ["Programme discovery", "Admissions-ready journeys", "Structured information"] },
  { label: "Property & logistics", title: "Bring moving parts into a clearer digital system.", copy: "For property, transport and logistics businesses where speed, visibility and easy customer actions matter every day.", outcomes: ["Lead and booking flows", "Operations dashboards", "Customer self-service"] },
  { label: "Local service businesses", title: "Look like the obvious choice in your area.", copy: "For ambitious local businesses that need a polished digital shopfront and faster paths to calls, quotes and bookings.", outcomes: ["Google-ready experience", "Quote conversion", "Mobile call-to-action"] },
  { label: "Digital ventures", title: "Shape a serious idea into a launchable product.", copy: "For founders with an app, SaaS, marketplace or platform idea that needs product thinking before expensive development.", outcomes: ["MVP roadmap", "User journey design", "Scalable foundation"] },
];

const questions = [
  "Does your online presence genuinely match the quality of the service you provide?",
  "Can a first-time visitor understand what you do and take action in under a minute?",
  "Does your site make it simple to enquire, book, buy or start a conversation from a phone?",
  "Do you have a reliable process for responding to every serious lead?",
  "Do your current tools give you a clear view of enquiries, customers or operations?",
];

const process = [
  ["01", "Clarify", "We uncover the commercial goal, the right audience and the message that needs to land first."],
  ["02", "Architect", "We map the site, product or system around a customer journey that makes business sense."],
  ["03", "Design", "We create a distinctive visual language and interface that earns attention without sacrificing clarity."],
  ["04", "Build", "Kabelo develops the experience with modern, responsive technology and practical scalability in mind."],
  ["05", "Launch + improve", "We launch with a clear handover, then identify the next improvements worth making."],
];

type Brief = {
  name: string;
  business: string;
  project: string;
  goal: string;
  message: string;
};

export default function Home() {
  const [goal, setGoal] = useState<keyof typeof goals>("More qualified leads");
  const [industry, setIndustry] = useState(0);
  const [scannerOpen, setScannerOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [scannerDone, setScannerDone] = useState(false);
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const [brief, setBrief] = useState<Brief>({ name: "", business: "", project: "Website / redesign", goal: "More qualified leads", message: "" });

  const score = useMemo(() => {
    const answered = answers.filter((answer) => answer !== null);
    if (!answered.length) return 56;
    return Math.round((answered.filter(Boolean).length / answered.length) * 100);
  }, [answers]);

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
      `Name: ${brief.name || "Not provided"}`,
      `Business: ${brief.business || "Not provided"}`,
      `What I want to build: ${brief.project}`,
      `Primary goal: ${brief.goal}`,
      "",
      `Project notes: ${brief.message || "No additional notes yet."}`,
      "",
      "I would like to start a Carter Build conversation.",
    ].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      <div className="announcement"><div className="shell"><span><i /> FOUNDER-LED DIGITAL DELIVERY</span><p>Websites, applications and systems for businesses ready to stop looking small online.</p><button onClick={() => openProject()}>Start a build <b>↗</b></button></div></div>

      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Carter Digitals home"><img src={brandLockup} alt="Carter Digitals" /></a>
        <div className="nav-links"><a href="#services">Capabilities</a><a href="#about">Why Carter</a><a href="#industries">Industries</a><a href="#process">Method</a></div>
        <button className="nav-button" onClick={() => openProject()}>Start a project <b>↗</b></button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-noise" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><i /> PRETORIA-BASED · SOUTH AFRICA-READY</p>
            <h1>Turn the quality of your business into a <em>digital advantage.</em></h1>
            <p className="lead">Carter Digitals builds premium websites, web applications and growth systems for ambitious businesses that need to look credible, work smarter and convert the attention they already earn.</p>
            <div className="hero-actions"><button className="button button-primary" onClick={() => openProject()}>Build my digital advantage <span>↗</span></button><a className="button button-soft" href="#about">Meet the studio <span>↓</span></a></div>
            <div className="hero-proof"><span><b>Founder-led</b> strategy and build</span><span><b>Custom</b> — never template-first</span><span><b>Built for</b> mobile-first customers</span></div>
          </div>

          <div className="hero-product" aria-label="Carter Digitals interactive growth console">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="grid-orbit" />
            <div className="studio-window">
              <div className="window-top"><span className="window-dots"><i /><i /><i /></span><small>CARTER / DIGITAL ADVANTAGE</small><span className="live-status"><b /> LIVE</span></div>
              <div className="brand-stage"><img src={brandLockup} alt="Carter Digitals logo" /><div className="brand-stage-copy"><span>STRATEGY</span><i /> <span>DESIGN</span><i /> <span>ENGINEERING</span></div></div>
              <div className="advantage-board"><div><small>YOUR NEXT MOVE</small><strong>{goal}</strong><p>{goals[goal]}</p></div><div className="signal-chart"><span>CONVERSION SIGNAL</span><svg viewBox="0 0 280 120" aria-hidden="true"><path d="M4 95C32 85 42 59 70 72S113 99 138 65S170 70 194 42S235 54 276 8" fill="none" stroke="currentColor" strokeWidth="4" /><path d="M4 95C32 85 42 59 70 72S113 99 138 65S170 70 194 42S235 54 276 8V116H4Z" fill="currentColor" opacity=".08" /></svg></div></div>
            </div>
            <div className="float-card lead-card"><small>BUSINESS SIGNAL</small><strong>01</strong><span>Clear offer. Clear action. Stronger first impression.</span></div>
            <div className="float-card system-card"><small>BUILD MODE</small><strong>Web + System</strong><span>Designed to keep creating value after launch.</span></div>
            <div className="goal-panel"><p>What would change your business most right now?</p><div>{Object.keys(goals).map((item) => <button key={item} onClick={() => setGoal(item as keyof typeof goals)} className={goal === item ? "active" : ""}>{item}</button>)}</div></div>
          </div>
        </div>
      </section>

      <section className="statement-strip"><div className="shell"><p>YOUR BUSINESS IS ALREADY DOING THE HARD PART.</p><span>We make the digital experience reflect it.</span><div><i>01</i><i>02</i><i>03</i><i>04</i></div></div></section>

      <section className="shell about section" id="about">
        <div className="about-mark"><div className="about-mark-top"><span>FOUNDER-LED STUDIO</span><b>KK</b></div><img src={brandLockup} alt="Carter Digitals logo" /><div className="about-mark-bottom"><span>PRETORIA, GAUTENG</span><span>BUILDING WITH INTENT</span></div></div>
        <div className="about-copy"><p className="eyebrow">WHY CARTER DIGITALS</p><h2>Built by a developer who cares about what happens <em>after</em> the launch.</h2><p className="about-lead">Carter Digitals is led by <b>Kabelo Kadiaka</b>, a Pretoria-based digital builder focused on turning strong business potential into premium, practical digital products.</p><p>That means the conversation does not stop at colours and pages. Kabelo looks at the offer, the customer journey, the friction holding back an enquiry, and the system behind the scenes that has to work when the business starts growing.</p><div className="about-promise"><article><span>01</span><h3>One accountable partner</h3><p>Strategy, creative direction and technical delivery stay connected from the first conversation to launch.</p></article><article><span>02</span><h3>Business before decoration</h3><p>Every section, interaction and feature must make a clearer business case — not just look impressive.</p></article><article><span>03</span><h3>Built to evolve</h3><p>Modern foundations make it easier to add booking, automation, analytics, portals and new products later.</p></article></div><button className="text-cta" onClick={() => openProject()}>Work directly with Kabelo <b>→</b></button></div>
      </section>

      <section className="shell capabilities section" id="services">
        <p className="eyebrow">WHAT CARTER CAN BUILD</p>
        <div className="heading-row"><h2>More than a website. A focused digital asset with a <em>job to do.</em></h2><p>Carter Digitals brings visual quality and practical development together, so the business gets a memorable front end and the operational thinking behind it.</p></div>
        <div className="services-grid">{services.map((service, index) => <article className={`service-card card-${service.visual}`} key={service.title}><div className="service-meta"><span>{service.number}</span><small>{service.tag}</small></div><h3>{service.title}</h3><p>{service.copy}</p><button className="card-arrow" onClick={() => openProject(service.title)}>Explore <b>↗</b></button><div className="card-visual">{index === 0 && <><i /><i /><i /></>}{index === 1 && <><strong>NEW<br />LEAD</strong><span>Enquiry<br />received</span></>}{index === 2 && <><b>APP</b><em>01</em><em>02</em></>}{index === 3 && <><span>Lead</span><i>→</i><span>Follow-up</span><i>→</i><span>Booked</span></>}{index === 4 && <svg viewBox="0 0 200 90"><path d="M6 76C30 59 44 65 61 53S92 70 112 34S147 59 167 19S187 27 196 7" fill="none" stroke="currentColor" strokeWidth="4" /><circle cx="112" cy="34" r="5" fill="currentColor" /></svg>}{index === 5 && <><b>AI</b><span>Assist</span><span>Analyse</span><span>Act</span></>}</div></article>)}</div>
      </section>

      <section className="shell deliverables section"><div className="deliverables-card"><div className="deliverable-intro"><p className="eyebrow light">THE CARTER STANDARD</p><h2>What a serious digital build should give your business.</h2><p>Whether we build a flagship website or a full web platform, the work is designed around useful outcomes — not feature clutter.</p></div><div className="deliverable-list"><article><span>✦</span><div><h3>A clear reason to choose you</h3><p>Positioning and messaging that help the right customer understand why you are worth their attention.</p></div></article><article><span>✦</span><div><h3>A confident mobile experience</h3><p>Because most first impressions happen on a phone, not on a boardroom desktop.</p></div></article><article><span>✦</span><div><h3>An action path that makes sense</h3><p>Calls, bookings, form flows and next steps that are simple enough for a real customer to complete.</p></div></article><article><span>✦</span><div><h3>A future-ready foundation</h3><p>Room to add content, systems, automation, analytics and new products as the opportunity grows.</p></div></article></div></div></section>

      <section className="shell industry-section section" id="industries">
        <p className="eyebrow">DESIGNED AROUND REAL BUSINESS CONTEXT</p>
        <div className="heading-row"><h2>The experience changes when the business challenge is understood.</h2><p>Different industries need different proof, different actions and different systems. Carter starts there.</p></div>
        <div className="industry-map"><div className="industry-tabs">{industries.map((item, index) => <button key={item.label} className={index === industry ? "selected" : ""} onClick={() => setIndustry(index)}><span>0{index + 1}</span>{item.label}<b>↗</b></button>)}</div><div className="industry-content"><div className="industry-number">0{industry + 1}</div><p className="eyebrow">{industries[industry].label}</p><h3>{industries[industry].title}</h3><p>{industries[industry].copy}</p><div className="outcome-tags">{industries[industry].outcomes.map((outcome) => <span key={outcome}>✓ {outcome}</span>)}</div><button className="button button-dark" onClick={() => openProject(`${industries[industry].label} digital experience`)}>Build for this business <b>↗</b></button></div></div>
      </section>

      <section className="shell scanner-section section"><div className="scanner-card"><div><p className="eyebrow light">BUSINESS OPPORTUNITY FINDER</p><h2>Are customers seeing the best version of your business online?</h2><p>Take a two-minute look at the places your digital presence may be losing trust, speed or momentum.</p><button className="button button-primary" onClick={() => { setScannerDone(false); setScannerOpen(true); }}>Find my opportunity <span>↗</span></button></div><div className="scanner-orbit"><div><small>DIGITAL MOMENTUM</small><strong>56<sup>/100</sup></strong><i /><p>There is usually more value hiding in the first impression.</p></div><span className="scanner-ping ping-one" /><span className="scanner-ping ping-two" /><span className="scanner-ping ping-three" /></div></div></section>

      <section className="proof-section"><div className="shell"><div className="proof-heading"><p className="eyebrow">HOW CARTER THINKS</p><h2>Premium design matters. But the <em>reason</em> behind every decision matters more.</h2></div><div className="proof-grid"><article><span>PROOF 01</span><h3>Show, do not simply claim.</h3><p>Live prototypes and clear visual thinking help a business owner see the opportunity instead of trying to imagine it from a pitch.</p><b>Live concept thinking</b></article><article><span>PROOF 02</span><h3>Make it easier to say yes.</h3><p>The best digital journeys remove uncertainty: what you do, who it is for, what happens next and why someone should trust you.</p><b>Conversion-led architecture</b></article><article><span>PROOF 03</span><h3>Build around the next chapter.</h3><p>A first launch should create momentum, not lock the business into a brittle system it will outgrow in six months.</p><b>Scalable product mindset</b></article></div></div></section>

      <section className="shell process section" id="process"><p className="eyebrow">THE CARTER BUILD METHOD</p><div className="heading-row"><h2>Clear thinking. Premium execution. No mystery around the work.</h2><p>You always know the purpose of the next stage, what is being decided and how the build is moving your business closer to the outcome.</p></div><div className="process-grid">{process.map(([number, title, copy]) => <article key={number}><span>{number}</span><i /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="final section"><div className="final-grid" /><div className="final-glow" /><div className="shell"><div className="final-logo"><img src={brandLockup} alt="Carter Digitals" /></div><p className="eyebrow light">START A CARTER BUILD</p><h2>There is a bigger version of your business.<br /><em>Let’s make it visible.</em></h2><p>Bring the idea, the outdated website, the operational headache or the next level you can already see. Carter Digitals will help turn it into a digital experience built to create momentum.</p><div className="hero-actions"><button className="button button-primary" onClick={() => openProject()}>Start my project brief <span>↗</span></button><a className="button button-outline" href={`mailto:${contactEmail}`}>Email Carter Digitals</a></div><footer><span>© 2026 CARTER DIGITALS</span><span>FOUNDER: KABELO KADIAKA</span><span>PRETORIA · GAUTENG · SOUTH AFRICA</span></footer></div></section>

      {scannerOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Business Opportunity Finder"><div className="scanner-modal"><button className="close" onClick={() => { setScannerOpen(false); setScannerDone(false); }}>×</button>{scannerDone ? <div className="success"><div>✓</div><p className="eyebrow">YOUR DIGITAL SIGNAL</p><h2>{score >= 80 ? "You have a strong base. Now sharpen the advantage." : "There is a clear opportunity to improve the first impression."}</h2><p>Your current momentum score is <b>{score}/100</b>. The highest-value next move is usually a clearer offer, a stronger action path, or a system that stops good leads from leaking away.</p><button className="button button-primary" onClick={() => { setScannerOpen(false); openProject("Digital opportunity upgrade"); }}>Turn this into a plan <span>↗</span></button></div> : <><p className="eyebrow">BUSINESS OPPORTUNITY FINDER</p><h2>Find the part of your digital presence that deserves attention next.</h2><p className="modal-lead">Choose the answer that is true today. This is a quick signal finder — not a judgment.</p><div className="questions">{questions.map((question, index) => <div className="question" key={question}><p><b>0{index + 1}</b>{question}</p><div><button className={answers[index] === true ? "chosen" : ""} onClick={() => setAnswers((items) => items.map((item, itemIndex) => itemIndex === index ? true : item))}>Yes</button><button className={answers[index] === false ? "chosen" : ""} onClick={() => setAnswers((items) => items.map((item, itemIndex) => itemIndex === index ? false : item))}>Not yet</button></div></div>)}</div><div className="result"><div><span>YOUR SCORE</span><strong>{score}<small>/100</small></strong></div><p>{score >= 75 ? "You are operating from a credible base. The question is where design, journeys or systems can create the next lift." : "The opportunity is visible: make the value clearer, make action easier and make follow-up more deliberate."}</p></div><button className="button button-primary full" onClick={() => setScannerDone(true)}>See my next move <span>↗</span></button></>}</div></div>}

      {projectOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Start a Carter Build"><form className="project-modal" onSubmit={submitBrief}><button className="close" type="button" onClick={() => setProjectOpen(false)}>×</button><div className="project-modal-heading"><p className="eyebrow">START A CARTER BUILD</p><h2>Tell us where your business is going.</h2><p>This short brief gives Kabelo the context to make the first conversation useful from the beginning.</p></div><div className="brief-grid"><label>YOUR NAME<input required value={brief.name} onChange={(event) => setBrief({ ...brief, name: event.target.value })} placeholder="Your name" /></label><label>BUSINESS / BRAND<input required value={brief.business} onChange={(event) => setBrief({ ...brief, business: event.target.value })} placeholder="Business name" /></label><label>WHAT DO YOU WANT TO BUILD?<select value={brief.project} onChange={(event) => setBrief({ ...brief, project: event.target.value })}><option>Website / redesign</option><option>Lead-generation landing page</option><option>Web application or client portal</option><option>Internal system or dashboard</option><option>AI or workflow automation</option><option>Digital product / MVP</option><option>I need guidance</option></select></label><label>WHAT MATTERS MOST?<select value={brief.goal} onChange={(event) => setBrief({ ...brief, goal: event.target.value })}>{Object.keys(goals).map((item) => <option key={item}>{item}</option>)}</select></label><label className="brief-message">TELL KABELO A LITTLE MORE<textarea value={brief.message} onChange={(event) => setBrief({ ...brief, message: event.target.value })} placeholder="What is changing in the business? What is not working today? What would success look like?" rows={4} /></label></div><div className="brief-footer"><p>Your brief opens a pre-filled email to Carter Digitals. You stay in control of sending it.</p><button className="button button-primary" type="submit">Open my project email <span>↗</span></button></div></form></div>}
    </main>
  );
}
