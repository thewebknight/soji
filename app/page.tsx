"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, ChevronDown, Compass, Download, Mail, MapPin, Menu, Sparkles, X } from "lucide-react";

const places = [
  { id: "product", number: "01", title: "Product, made practical", kicker: "THE CRAFT", color: "ochre", text: "I turn complex business needs into clear priorities, useful workflows and products teams can actually deliver.", details: ["Product discovery and requirements", "Roadmaps, backlogs and acceptance criteria", "Stakeholder alignment, UAT and release"] },
  { id: "finance", number: "02", title: "Where money moves", kicker: "THE DOMAIN", color: "blue", text: "More than a decade in the machinery of financial services, from leasing and lending to payments and asset finance.", details: ["Odessa lease and loan platforms", "Origination to back office workflows", "Integrations, configuration and migration"] },
  { id: "ai", number: "03", title: "Less busywork. Better work.", kicker: "THE NEXT FRONTIER", color: "violet", text: "I bring AI into document heavy operations with a focus on the whole workflow, human review and outcomes that matter.", details: ["AI driven document parsing", "Human validation and exception paths", "Workflow automation and measurable impact"] },
  { id: "experience", number: "04", title: "Built with real teams", kicker: "THE JOURNEY", color: "coral", text: "My work spans financial services transformation, shared platforms, digital products and cross functional delivery.", details: ["Natixis · 2025 to 2026", "Société Générale GSC · 2019 to 2025", "Cognizant / Google GTech · 2012 to 2019"] },
  { id: "impact", number: "05", title: "Make the difference visible", kicker: "THE OUTCOMES", color: "green", text: "The point of a better system is what it changes for the people using it. These are reported outcomes from my work.", details: ["1,500 documents per day designed processing volume", "70% reduction in manual document handling", "30 to 35% faster delivery timelines"] },
];

function Landscape() {
  return <svg className="landscape-art" viewBox="0 0 1200 720" role="img" aria-label="Illustrated landscape with a winding golden path linking five places on the horizon">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#b9d8d5"/><stop offset=".62" stopColor="#f4d7ad"/><stop offset="1" stopColor="#f4c28f"/></linearGradient>
      <linearGradient id="water" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#4f969a"/><stop offset="1" stopColor="#244d62"/></linearGradient>
      <linearGradient id="path" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff0a5"/><stop offset=".5" stopColor="#e8b94f"/><stop offset="1" stopColor="#d98a37"/></linearGradient>
      <filter id="glow"><feGaussianBlur stdDeviation="8"/></filter>
    </defs>
    <rect width="1200" height="720" fill="url(#sky)"/>
    <circle cx="930" cy="130" r="54" fill="#fff0c7" opacity=".8"/><circle cx="930" cy="130" r="85" fill="#fff0c7" opacity=".25"/>
    <path d="M0 320 120 205 210 282 330 150 460 292 575 190 690 280 805 150 940 280 1040 205 1200 300V720H0Z" fill="#829e9b" opacity=".7"/>
    <path d="M0 385 135 295 260 365 405 250 555 380 700 270 850 380 1005 265 1200 370V720H0Z" fill="#527f7d"/>
    <path d="M0 430 Q180 350 330 415T650 410T930 400T1200 430V720H0Z" fill="#335f61"/>
    <path d="M0 510 Q170 450 350 515T680 490T970 510T1200 470V720H0Z" fill="#244b50"/>
    <path d="M700 720 Q650 635 730 575T810 480Q830 435 790 400Q760 373 810 340Q860 300 835 255Q810 225 845 195" fill="none" stroke="#f9e7a4" strokeWidth="28" opacity=".25" filter="url(#glow)"/>
    <path d="M700 720 Q650 635 730 575T810 480Q830 435 790 400Q760 373 810 340Q860 300 835 255Q810 225 845 195" fill="none" stroke="url(#path)" strokeWidth="12" strokeLinecap="round"/>
    <path d="M0 600 Q120 535 220 575T420 595T610 570T800 620T1010 580T1200 600V720H0Z" fill="#1d4145"/>
    <path d="M0 640 Q160 595 300 650T580 635T860 655T1200 630V720H0Z" fill="#17363d"/>
    <g transform="translate(150 390)"><path d="M-60 70 0 -25 60 70Z" fill="#e4b878"/><path d="M-45 70 0 0 45 70Z" fill="#c87e55"/><rect x="-36" y="70" width="72" height="66" rx="4" fill="#f2c88d"/><rect x="-8" y="93" width="18" height="43" fill="#4e7775"/><rect x="-25" y="82" width="11" height="14" fill="#f8e7b8"/><rect x="15" y="82" width="11" height="14" fill="#f8e7b8"/><path d="M-75 136H75" stroke="#e7c18b" strokeWidth="5" strokeLinecap="round"/></g>
    <g transform="translate(360 435)"><path d="M-90 40 0 -18 90 40V125H-90Z" fill="#c4a16f"/><path d="M-100 42 0 -38 100 42" fill="none" stroke="#f0d2a0" strokeWidth="14" strokeLinejoin="round"/><rect x="-58" y="57" width="25" height="30" fill="#426c6e"/><rect x="-12" y="57" width="25" height="30" fill="#426c6e"/><rect x="34" y="57" width="25" height="30" fill="#426c6e"/><rect x="-13" y="91" width="26" height="34" fill="#825d4a"/></g>
    <g transform="translate(1020 390)"><path d="M0 0 28 60 8 60 36 113H-36L-8 60H-28Z" fill="#e2c49a"/><path d="M0 22 18 62H-18Z" fill="#d8a46e"/><path d="M-54 115H54" stroke="#e7c18b" strokeWidth="5" strokeLinecap="round"/><circle cx="0" cy="-7" r="11" fill="#e6b955"/></g>
    <g fill="#f5dfb5" opacity=".8"><circle cx="500" cy="340" r="3"/><circle cx="530" cy="320" r="2"/><circle cx="550" cy="352" r="2"/><circle cx="740" cy="300" r="3"/><circle cx="760" cy="282" r="2"/><circle cx="780" cy="310" r="2"/></g>
    <g fill="#f3d9a0" opacity=".8"><path d="M80 490q-16-30-32 0q16-8 32 0"/><path d="M910 520q-16-30-32 0q16-8 32 0"/><path d="M1080 490q-16-30-32 0q16-8 32 0"/></g>
    <g fill="#17363d"><circle cx="85" cy="625" r="3"/><circle cx="105" cy="620" r="2"/><circle cx="1090" cy="625" r="3"/><circle cx="1110" cy="620" r="2"/></g>
  </svg>;
}

export default function Home() {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const selected = places.find(place => place.id === active);

  const goTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Soji Jacob home"><span className="brand-mark">s<span>.</span></span><span className="brand-name">soji jacob<small>PRODUCT · FINANCE · AI</small></span></a>
      <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
        <a href="#journey" onClick={() => setMenuOpen(false)}>The journey</a><a href="#impact" onClick={() => setMenuOpen(false)}>The impact</a><a href="#about" onClick={() => setMenuOpen(false)}>A little about me</a>
      </nav>
      <a className="header-contact" href="mailto:soji89@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot"/> A CAREER BUILT AT THE INTERSECTION OF</p>
        <h1>I make complex<br/>systems work <em>better.</em></h1>
        <p className="hero-intro">I'm Soji. A product and technology professional who turns complicated business problems into clear, useful outcomes.</p>
        <div className="hero-actions"><a className="primary-button" href="#journey">Take the scenic route <ArrowDownRight size={17}/></a><a className="text-link" href="#about">Meet Soji <ArrowUpRight size={15}/></a></div>
        <div className="hero-note"><MapPin size={14}/> Bengaluru, India <span/> Open to the right next chapter</div>
      </div>
      <div className="hero-visual"><div className="visual-sun-label"><span>YOUR ARE HERE</span><strong>SOJI'S WORLD</strong></div><Landscape/><div className="map-pin pin-one"><span>01</span><b>Product</b></div><div className="map-pin pin-two"><span>02</span><b>Finance</b></div><div className="map-pin pin-three"><span>03</span><b>AI &amp; automation</b></div><div className="visual-caption">A winding path through the work that matters <span>↗</span></div></div>
      <a className="scroll-cue" href="#journey"><span>SCROLL TO EXPLORE</span><i/></a>
    </section>

    <section className="intro-strip"><span className="strip-label">THE SHORT VERSION</span><p>13+ years of connecting <strong>business needs</strong>, <strong>financial systems</strong> and <strong>technology teams</strong> to make work run better.</p><span className="strip-stamp">BUILT ON EXPERIENCE <Sparkles size={14}/></span></section>

    <section className="journey-section" id="journey">
      <div className="section-heading"><div><p className="eyebrow">FIVE PLACES THAT SHAPED THE WORK</p><h2>Here's the <em>journey.</em></h2></div><p className="section-aside">No maze to decode. Just the work, the thinking behind it, and what changed.</p></div>
      <div className="journey-route" aria-label="Career journey destinations">
        <div className="route-line"><span/></div>
        {places.map((place, index) => <button key={place.id} className={`destination destination-${place.color} ${active === place.id ? "destination-active" : ""}`} onClick={() => goTo(place.id)} aria-pressed={active === place.id}>
          <span className="destination-art">{index === 0 ? <span className="art-compass"><Compass/></span> : index === 1 ? <span className="art-building"><BriefcaseBusiness/></span> : index === 2 ? <span className="art-spark"><Sparkles/></span> : index === 3 ? <span className="art-path"><MapPin/></span> : <span className="art-star">✳</span>}<span className="destination-number">{place.number}</span></span>
          <span className="destination-kicker">{place.kicker}</span><strong>{place.title}</strong><span className="destination-desc">{place.text}</span><span className="destination-cta">Explore this place <ArrowUpRight size={14}/></span>
        </button>)}
      </div>
      <div className="journey-hint"><span>✳</span> Pick any destination to see what lives there <ChevronDown size={14}/></div>
    </section>

    {selected && <section className={`detail-story detail-${selected.color}`} aria-live="polite">
      <div className="detail-number">{selected.number}<span> / 05</span></div><div className="detail-main"><p className="eyebrow">{selected.kicker}</p><h2>{selected.title}</h2><p>{selected.text}</p><ul>{selected.details.map(item => <li key={item}>{item}</li>)}</ul></div><button className="detail-close" onClick={() => setActive(null)} aria-label="Close destination details"><X size={18}/></button>
    </section>}

    <section className="outcomes" id="impact">
      <div className="outcomes-copy"><p className="eyebrow">GOOD WORK SHOULD SHOW UP IN THE NUMBERS</p><h2>Make the difference<br/><em>visible.</em></h2><p>These are reported outcomes from my work on document processing and delivery. The goal is always the same: less friction, more room for people to do meaningful work.</p><a href="mailto:soji89@gmail.com" className="light-link">Let's talk about outcomes <ArrowUpRight size={15}/></a></div>
      <div className="outcome-cards"><article className="outcome-card"><span className="outcome-symbol">↗</span><strong>1,500</strong><span className="outcome-unit">documents per day</span><p>Designed processing volume for an AI document parsing solution.</p></article><article className="outcome-card"><span className="outcome-symbol">↘</span><strong>70<small>%</small></strong><span className="outcome-unit">less manual handling</span><p>Reported reduction in manual document handling.</p></article><article className="outcome-card"><span className="outcome-symbol">✳</span><strong>30–35<small>%</small></strong><span className="outcome-unit">faster delivery</span><p>Reported improvement from streamlined requirements and delivery.</p></article></div>
      <div className="outcome-footnote">Metrics are based on reported project outcomes and are not independently audited.</div>
    </section>

    <section className="experience-section">
      <div className="section-heading"><div><p className="eyebrow">THE PEOPLE AND PLACES ALONG THE WAY</p><h2>Experience, not just <em>titles.</em></h2></div><p className="section-aside">Different teams. Different challenges. One recurring theme: make complex things work for real people.</p></div>
      <div className="timeline">
        <article><span className="timeline-dot dot-current"/><div className="timeline-year">2025 — 2026</div><div className="timeline-content"><h3>Natixis</h3><p>Product ownership, business analysis and functional consulting across leasing, lending, payments and asset finance. AI document workflows, platform transformation and a cross border migration from P.Lease to Odessa.</p><span className="timeline-tag">FINANCIAL SERVICES · AI WORKFLOWS</span></div></article>
        <article><span className="timeline-dot"/><div className="timeline-year">2019 — 2025</div><div className="timeline-content"><h3>Société Générale GSC</h3><p>Product and engineering delivery across Odessa lease and loan configuration, a shared customer portal, fuel card mobile application and new business workflows.</p><span className="timeline-tag">PRODUCT DELIVERY · ASSET FINANCE</span></div></article>
        <article><span className="timeline-dot"/><div className="timeline-year">2012 — 2019</div><div className="timeline-content"><h3>Cognizant / Google GTech</h3><p>Web technology, user experience consulting and digital delivery, including analysis and delivery leadership for a 15 member team.</p><span className="timeline-tag">DIGITAL EXPERIENCE · TEAM DELIVERY</span></div></article>
      </div>
    </section>

    <section className="about-section" id="about"><div className="about-sun">✳</div><div className="about-copy"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curious by nature.<br/><em>Practical by design.</em></h2><p>I like sitting where business, technology and people meet. My background includes an M.Tech in Software Engineering from BITS Pilani, a PSPO certification, and years spent translating between what a business needs and what a team can build.</p><div className="about-facts"><span>M.Tech · BITS Pilani</span><span>PSPO certified</span><span>13+ years in technology</span></div></div><div className="about-side"><p>Have a complicated problem, a product to shape, or a team that needs a bridge between business and technology?</p><a href="mailto:soji89@gmail.com" className="primary-button">Let's start a conversation <ArrowUpRight size={16}/></a><a className="about-link" href="https://www.linkedin.com/in/soji-jacob/" target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight size={14}/></a></div></section>

    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">s<span>.</span></span><span className="brand-name">soji jacob<small>MADE WITH INTENTION</small></span></a><span className="footer-center">A GOOD CAREER IS A JOURNEY, NOT A JOB TITLE.</span><a href="mailto:soji89@gmail.com">soji89@gmail.com <ArrowUpRight size={14}/></a></footer>
  </main>;
}
