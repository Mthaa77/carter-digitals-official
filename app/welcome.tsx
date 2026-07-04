import { brandLockup } from "./brand";
import { theatreImage } from "./media";

export function Welcome() {
  return <>
    <header className="welcome-nav shell">
      <a className="welcome-brand" href="#welcome-home"><img src={brandLockup} alt="Carter Digitals" /></a>
      <nav><a href="#welcome">Welcome</a><a href="#services">Capabilities</a><a href="#industries">Industries</a><a href="#method">Method</a></nav>
      <a className="welcome-cta" href="#services">Explore Carter <b>↗</b></a>
    </header>

    <section className="editorial-hero" id="welcome-home">
      <div className="shell editorial-grid">
        <div className="editorial-copy">
          <p className="eyebrow"><i /> CARTER DIGITALS / PREMIUM DIGITAL DELIVERY</p>
          <h1>We build the <em>digital presence</em> your business deserves.</h1>
          <p className="editorial-lead">Premium websites, web applications and practical digital systems for businesses ready to show up with more clarity, confidence and momentum.</p>
          <div className="editorial-actions"><a className="editorial-primary" href="#services">Explore what we build <span>↓</span></a><a className="editorial-secondary" href="#welcome">Welcome to Carter <span>↓</span></a></div>
          <div className="editorial-proof"><span><b>Custom-built</b> for the business</span><span><b>Founder-led</b> delivery</span><span><b>Built to grow</b> after launch</span></div>
        </div>
        <div className="editorial-showcase">
          <div className="showcase-topline"><span>01 / DIGITAL THEATRE</span><i>STUDIO EDITION</i></div>
          <div className="showcase-image"><img src={theatreImage} alt="Carter Digitals laptop product showcase" /></div>
          <div className="showcase-caption"><b>Clear strategy. Premium delivery.</b><p>Every build is designed to look impressive and make the next action easier.</p></div>
        </div>
      </div>
    </section>

    <section className="welcome-section shell" id="welcome">
      <div className="welcome-intro"><p className="eyebrow">WELCOME TO CARTER DIGITALS</p><h2>Not a website factory. A digital studio for the next <em>visible version</em> of your business.</h2></div>
      <div className="welcome-story"><p className="welcome-lead">Customers form an impression before the first conversation. Carter Digitals makes that impression feel considered, credible and ready for bigger opportunities.</p><p>Founded by Kabelo Kadiaka in Pretoria, Carter connects business thinking, premium design and modern development to create digital assets that explain value, earn trust and guide people toward action.</p><a href="#services" className="welcome-link">See what Carter can build <b>→</b></a></div>
      <div className="welcome-pillars"><article><span>01</span><h3>Clarify the value</h3><p>Make it easy for the right customer to understand why they should care and take the next step.</p></article><article><span>02</span><h3>Elevate the presence</h3><p>Give the business a polished digital identity that matches the ambition behind it.</p></article><article><span>03</span><h3>Create momentum</h3><p>Build useful paths to enquiries, bookings, systems, dashboards or the next product.</p></article></div>
    </section>
  </>;
}
