"use client";

import { useMemo, useState } from "react";

const services = [
  { number: "01", title: "Premium Websites", copy: "High-conviction websites designed to make your business look established, explain value clearly and turn attention into enquiries.", tag: "Brand + conversion" },
  { number: "02", title: "Web Applications", copy: "Custom platforms, portals and dashboards that solve real operational problems and create new digital products.", tag: "Product + platform" },
  { number: "03", title: "Business Systems", copy: "Lead pipelines, booking flows, client operations and internal tools that help teams move with more clarity.", tag: "Systems + automation" },
  { number: "04", title: "Growth Experiences", copy: "Landing pages, journey design and lead capture experiences built around the moment a customer decides to act.", tag: "Strategy + growth" },
];

const paths = [
  { label: "Starting something new", title: "Launch with a presence people remember.", copy: "For a new business, service or brand that needs a serious digital foundation from day one.", outcome: "Launch website · positioning · enquiry flow" },
  { label: "My website is outdated", title: "Make your digital presence match your real quality.", copy: "For established businesses that have outgrown a slow, generic or confusing website.", outcome: "Redesign · mobile experience · conversion upgrade" },
  { label: "I need better systems", title: "Replace operational friction with clarity.", copy: "For teams ready to manage leads, clients, bookings, documents or activity in one focused place.", outcome: "Portal · dashboard · workflow system" },
  { label: "I have a big digital idea", title: "Turn the idea into a launchable product.", copy: "For founders creating an app, platform, SaaS tool or digital service with real commercial potential.", outcome: "Strategy · MVP · scalable web app" },
];

const questions = [
  "Does your website make the business look as premium as the service you deliver?",
  "Can a visitor understand what you offer and take action within seconds?",
  "Does your site work beautifully on a customer’s phone?",
  "Can you reliably capture and follow up every serious enquiry?",
];

export default function Home() {
  const [goal, setGoal] = useState("More leads");
  const [path, setPath] = useState(0);
  const [scannerOpen, setScannerOpen] = useState(false);
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    const answered = answers.filter((answer) => answer !== null);
    if (!answered.length) return 64;
    return Math.round((answered.filter(Boolean).length / answered.length) * 100);
  }, [answers]);

  const focusCopy: Record<string, string> = {
    "More leads": "Conversion journeys, proof and focused calls to action that guide visitors into real conversations.",
    "Premium website": "A tailored visual system that makes your business feel considered, credible and ready for bigger rooms.",
    "Client portal": "A clearer customer experience built around access, visibility, documents, bookings and support.",
    "Custom app": "A launchable digital product with the right user flows, interface logic and scalable foundation.",
  };

  function startProject() {
    window.location.href = "mailto:hello@carterdigitals.co.za?subject=Start%20a%20Carter%20Build";
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Carter Digitals home"><span>C</span><strong>CARTER<br />DIGITALS</strong></a>
        <div className="nav-links"><a href="#build">What we build</a><a href="#process">Process</a><a href="#paths">Start here</a></div>
        <button className="nav-button" onClick={startProject}>Start a project <b>↗</b></button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><i /> Pretoria · Gauteng · Built for growth</p>
            <h1>Build a business people <em>trust</em> before they speak to you.</h1>
            <p className="lead">Carter Digitals designs premium websites, apps and digital systems for ambitious businesses ready to look sharper, convert better and operate with confidence.</p>
            <div className="hero-actions"><button className="button button-primary" onClick={startProject}>Start your digital upgrade <span>↗</span></button><button className="button button-soft" onClick={() => setScannerOpen(true)}>Check your digital score</button></div>
            <p className="micro-copy">Not a template factory. A digital growth partner.</p>
          </div>
          <div className="hero-product" aria-label="Interactive digital growth console">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="console-label">CARTER / DIGITAL PROOF ENGINE</div>
            <div className="product-card main-product">
              <div className="product-top"><span className="dot red" /><span className="dot" /><span className="dot" /><small>LIVE EXPERIENCE</small></div>
              <div className="product-body"><p>YOUR NEXT<br /><b>DIGITAL MOVE</b></p><div className="line-chart"><i /><i /><i /><i /><svg viewBox="0 0 400 120" aria-hidden="true"><path d="M0 92 C50 88 61 62 104 75 S164 103 206 56 S274 72 306 34 S352 42 400 4" fill="none" stroke="currentColor" strokeWidth="4" /></svg></div></div>
              <div className="live-pill"><span /> New enquiry received</div>
            </div>
            <div className="floating-card floating-left"><small>Conversion signal</small><strong>+38%</strong><span>Better first impressions</span></div>
            <div className="floating-card floating-right"><small>Active systems</small><strong>04</strong><span>Website · portal · CRM · growth</span></div>
            <div className="goal-panel"><p>What does your business need next?</p><div>{Object.keys(focusCopy).map((item) => <button key={item} onClick={() => setGoal(item)} className={goal === item ? "active" : ""}>{item}</button>)}</div><small>{focusCopy[goal]}</small></div>
          </div>
        </div>
      </section>

      <section className="shell intro section" id="build">
        <p className="eyebrow">WHAT WE BUILD</p>
        <div className="heading-row"><h2>Digital experiences with a job to do.</h2><p>Every Carter build is designed around a meaningful business outcome: more trust, more clarity, stronger customer journeys or a system that saves time.</p></div>
        <div className="services-grid">{services.map((service, index) => <article className={`service-card service-${index + 1}`} key={service.title}><div><span>{service.number}</span><small>{service.tag}</small></div><h3>{service.title}</h3><p>{service.copy}</p><b className="card-arrow">↗</b><div className="card-visual">{index === 0 && <><i /><i /><i /></>}{index === 1 && <><strong>01</strong><em>APP</em></>}{index === 2 && <><span>Leads</span><span>Booked</span><span>Won</span></>}{index === 3 && <svg viewBox="0 0 160 80"><path d="M4 69C30 55 42 65 60 45S95 57 112 29S138 31 156 8" fill="none" stroke="currentColor" strokeWidth="3" /></svg>}</div></article>)}</div>
      </section>

      <section className="shell scanner-section section">
        <div className="scanner-card"><div><p className="eyebrow light">DIGITAL READINESS SCANNER</p><h2>Is your business losing clients before the conversation starts?</h2><p>Answer four practical questions. We will show you where a stronger digital experience can create momentum.</p><button className="button button-primary" onClick={() => setScannerOpen(true)}>Run the quick scan <span>↗</span></button></div><div className="score-preview"><span>READINESS</span><strong>64<small>/100</small></strong><i /><p>Potential waiting to be unlocked</p></div></div>
      </section>

      <section className="shell showcase section">
        <p className="eyebrow">THE CARTER DIFFERENCE</p>
        <div className="heading-row"><h2>Your website should feel like evidence that you are ready for the next level.</h2><p>Not just a page with your logo on it. A focused experience that makes people understand your value and want to take the next step.</p></div>
        <div className="showcase-grid"><article className="case-study"><div className="case-top"><span>CONCEPT / SERVICE BUSINESS</span><b>01</b></div><div className="mock-site"><header><i /><span>THE PRACTICE</span><small>Home&nbsp;&nbsp; Services&nbsp;&nbsp; Book</small></header><div><p>CARE THAT<br />FEELS <b>PERSONAL.</b></p><button>Book a consultation</button></div><strong>+</strong></div><footer><div><small>THE SHIFT</small><h3>From forgettable to premium and conversion-ready.</h3></div><b>↗</b></footer></article><div className="side-cases"><article className="mini-case dark"><small>INTERNAL SYSTEM</small><h3>Turn scattered leads into a visible pipeline.</h3><div className="dashboard"><b>CLIENT PIPELINE</b><i>+12 this week</i><span /><span /><span /></div></article><article className="mini-case red"><small>LAUNCH EXPERIENCE</small><h3>Make a new business feel established from day one.</h3><div className="step-pills"><span>Discover</span><span>Build</span><span>Launch</span></div></article></div></div>
      </section>

      <section className="shell process section" id="process">
        <p className="eyebrow">THE CARTER LAUNCH SEQUENCE</p>
        <div className="heading-row"><h2>A clear process.<br />A serious result.</h2><p>You get the creative thinking, technical structure and focused execution needed to turn an opportunity into a credible, launch-ready digital asset.</p></div>
        <div className="process-grid">{[["01","Discover","Business goals, customer reality and the opportunity worth solving."],["02","Architect","Journey maps, site structure and a practical product roadmap."],["03","Design","A visual system that makes the value feel unmistakable."],["04","Build","A fast, responsive experience built with modern technology."],["05","Launch + Grow","A digital foundation that can be measured and improved." ]].map(([number,title,copy]) => <article key={number}><span>{number}</span><i /><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="shell paths section" id="paths">
        <p className="eyebrow">CHOOSE YOUR LAUNCH PATH</p>
        <div className="heading-row"><h2>Where is your business right now?</h2><p>Start from your real situation. Carter Digitals will help identify the clearest digital route forward.</p></div>
        <div className="paths-box"><div className="path-tabs">{paths.map((item, index) => <button className={path === index ? "selected" : ""} onClick={() => setPath(index)} key={item.label}><span>0{index + 1}</span>{item.label}<b>↗</b></button>)}</div><div className="path-content"><span className="outline">0{path + 1}</span><div><p className="eyebrow">YOUR STARTING POINT</p><h3>{paths[path].title}</h3><p>{paths[path].copy}</p><small>{paths[path].outcome}</small><button className="text-cta" onClick={startProject}>Start this path <b>→</b></button></div></div></div>
      </section>

      <section className="final section"><div className="final-grid" /><div className="shell"><p className="eyebrow light">READY WHEN YOU ARE</p><h2>Your next client is already searching.<br /><em>What will they see?</em></h2><p>Let’s build a digital experience that proves your business is prepared for the next level.</p><div className="hero-actions"><button className="button button-primary" onClick={startProject}>Start your Carter build <span>↗</span></button><a className="button button-outline" href="mailto:hello@carterdigitals.co.za">hello@carterdigitals.co.za</a></div><footer><span>© 2026 CARTER DIGITALS</span><span>PRETORIA · GAUTENG · SOUTH AFRICA</span><span>BUILT TO CREATE MOMENTUM</span></footer></div></section>

      {scannerOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Digital Readiness Scanner"><div className="scanner-modal"><button className="close" onClick={() => { setScannerOpen(false); setSubmitted(false); }}>×</button>{submitted ? <div className="success"><div>✓</div><p className="eyebrow">YOUR DIGITAL SIGNAL</p><h2>Your next move is clearer.</h2><p>Your readiness score is <b>{score}/100</b>. A Carter build can turn the weak points into a practical growth plan.</p><button className="button button-primary" onClick={startProject}>Start a Carter build <span>↗</span></button></div> : <><p className="eyebrow">DIGITAL READINESS SCANNER</p><h2>Let’s find your strongest next move.</h2><p className="modal-lead">Choose the answer that is true today. This is not a judgement—just a fast way to identify opportunity.</p><div className="questions">{questions.map((question, index) => <div className="question" key={question}><p><b>0{index + 1}</b>{question}</p><div><button className={answers[index] === true ? "chosen" : ""} onClick={() => setAnswers((items) => items.map((item, itemIndex) => itemIndex === index ? true : item))}>Yes</button><button className={answers[index] === false ? "chosen" : ""} onClick={() => setAnswers((items) => items.map((item, itemIndex) => itemIndex === index ? false : item))}>Not yet</button></div></div>)}</div><div className="result"><div><span>YOUR SCORE</span><strong>{score}<small>/100</small></strong></div><p>{score >= 75 ? "You have a strong base. The opportunity is in making the journey even more deliberate." : "There is visible room to strengthen first impressions, clarity and conversion."}</p></div><button className="button button-primary full" onClick={() => setSubmitted(true)}>Get my recommended next step <span>↗</span></button></>}</div></div>}
    </main>
  );
}
