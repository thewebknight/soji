"use client";

import { useEffect, useState } from "react";
import { Mail, Linkedin, Menu, X, BriefcaseBusiness, BrainCircuit, Landmark, ChartNoAxesCombined, FileText, Coins, Workflow, CircleDollarSign } from "lucide-react";

const work = [
  { no: "product", kind: "PRODUCT OWNERSHIP", title: "Make complexity feel simple", subtitle: "The brief", text: "Turn sprawling business needs into a clear product direction, decisions teams can act on, and releases that solve the right problem.", tags: ["Discovery", "Roadmaps", "Backlogs", "Stakeholder alignment"] },
  { no: "finance", kind: "FINANCIAL SYSTEMS", title: "Make money move better", subtitle: "The machinery", text: "Experience across leasing, lending, asset finance, payments, Odessa lease and loan workflows, and origination to back office integrations.", tags: ["Odessa", "Asset finance", "Integrations", "Workflow design"] },
  { no: "ai", kind: "AI AND AUTOMATION", title: "Give people their time back", subtitle: "The experiment", text: "Bring AI into document heavy operations thoughtfully, with human validation, exception handling and outcomes that matter beyond the demo.", tags: ["Document parsing", "Human in the loop", "Automation", "Responsible delivery"], mark: "" },
];

function DoodleGarden() {
  return <svg viewBox="0 0 1000 620" className="garden-art" role="img" aria-label="Orange hand-drawn cat and puppy sitting together with a heart and paw prints">
    <g fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M70 555 Q180 530 290 550 T500 550 T720 550 T930 548"/>
      {/* Ball of yarn */}
      <g transform="translate(132 155) rotate(-12)"><circle cx="0" cy="0" r="31"/><path d="M-23 -18 L24 12 M-30 -2 L14 27 M-12 -29 L30 -1 M-27 15 L-8 29 M5 -30 L29 -14"/><path d="M29 17 Q60 15 54 44"/></g>
      {/* Little heart and sparkle */}
      <path d="M500 88 C482 61 450 76 466 103 L500 138 L534 103 C550 76 518 61 500 88Z"/>
      <path d="M746 63 L746 122 M716 92 L776 92 M724 70 L768 114 M768 70 L724 114"/>
      {/* Bone */}
      <g transform="translate(835 155) rotate(23)"><path d="M-44 -9 C-58 -31 -80 -16 -67 1 C-80 17 -61 33 -45 20 L44 20 C61 33 80 17 67 1 C80 -16 58 -31 44 -9Z"/></g>
      {/* Paw prints */}
      <g transform="translate(83 365)"><ellipse cx="-16" cy="-17" rx="7" ry="10"/><ellipse cx="2" cy="-28" rx="7" ry="10"/><ellipse cx="21" cy="-17" rx="7" ry="10"/><path d="M-18 5 Q1 -13 22 5 Q24 27 3 32 Q-17 27 -18 5Z"/></g>
      <g transform="translate(924 312)"><ellipse cx="-16" cy="-17" rx="7" ry="10"/><ellipse cx="2" cy="-28" rx="7" ry="10"/><ellipse cx="21" cy="-17" rx="7" ry="10"/><path d="M-18 5 Q1 -13 22 5 Q24 27 3 32 Q-17 27 -18 5Z"/></g>
      {/* Cat: tall pointed ears, round cheeks and curled tail */}
      <path d="M260 287 L245 170 L326 225 Q365 204 404 225 L484 170 L470 290 Q500 325 488 383 Q478 433 433 462 L425 535 Q423 555 403 555 L331 555 Q309 555 306 535 L296 462 Q250 437 232 390 Q214 335 260 287Z"/>
      <path d="M273 285 L260 192 L325 241 M458 285 L471 192 L405 241"/>
      <path d="M282 357 Q296 370 311 357 M408 357 Q423 370 438 357"/>
      <path d="M340 391 L360 391 L350 403Z M350 403 Q332 422 314 406 M350 403 Q369 422 386 406"/>
      <path d="M311 408 L265 401 M311 423 L266 431 M389 408 L435 401 M389 423 L435 431"/>
      <path d="M314 550 Q302 571 327 571 L402 571 Q425 571 427 550"/>
      <path d="M304 529 Q266 569 226 543 Q190 519 214 481 Q227 462 247 459"/>
      <path d="M290 320 l-18 19 M311 309 l-16 17 M427 309 l16 17 M448 320 l17 18"/>
      {/* Puppy: floppy ears, soft muzzle and heart-shaped nose */}
      <path d="M590 293 Q552 251 568 208 Q581 177 608 210 Q633 238 653 260 Q700 229 745 257 Q780 222 810 207 Q843 195 857 231 Q876 270 836 306 Q861 345 841 395 Q824 438 782 463 L773 535 Q771 555 751 555 L704 555 Q684 555 681 535 L671 489 L640 489 L629 535 Q627 555 607 555 L563 555 Q542 555 545 535 L553 461 Q516 432 514 389 Q512 340 551 307 Q568 294 590 293Z"/>
      <path d="M590 293 Q558 313 555 347 Q554 371 577 390 M836 306 Q861 331 855 359 Q850 383 825 397"/>
      <path d="M614 357 Q628 371 643 357 M733 357 Q748 371 763 357"/>
      <path d="M683 388 C672 373 651 385 661 402 L683 423 L705 402 C715 385 694 373 683 388Z"/>
      <path d="M683 423 Q660 449 637 429 M683 423 Q706 449 729 429"/>
      <path d="M642 465 Q683 484 724 465 M650 482 Q683 499 716 482"/>
      <path d="M624 508 Q683 532 742 508 M675 526 L686 540 L697 526"/>
      <path d="M559 550 Q581 571 605 551 M704 551 Q729 571 754 551"/>
      <path d="M570 316 l-13 15 M590 305 l-11 15 M802 306 l15 15 M819 320 l14 15"/>
      <path d="M782 535 Q819 571 853 545 Q882 522 860 486 Q848 468 831 475"/>
    </g>
    <g fill="currentColor">
      <ellipse cx="296" cy="352" rx="6" ry="8"/><ellipse cx="423" cy="352" rx="6" ry="8"/>
      <ellipse cx="628" cy="352" rx="6" ry="8"/><ellipse cx="748" cy="352" rx="6" ry="8"/>
    </g>
  </svg>;
}
function SideMarks() {
  const marks = [BriefcaseBusiness, BrainCircuit, Landmark, ChartNoAxesCombined, FileText, Coins, Workflow, CircleDollarSign];
  return <aside className="side-marks" aria-hidden="true">
    <div className="marks-track marks-track-one">
      {[...marks, ...marks, ...marks].map((Mark, i) => <span key={i} className={"mark-tile mark-tile-" + (i % 4)}><Mark strokeWidth={1.6}/></span>)}
    </div>
  </aside>;
}


function PetDoodles() {
  return <div className="pet-doodles" aria-hidden="true">
    <svg className="pet pet-cat" viewBox="0 0 90 90"><g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 38 L18 13 L38 27 Q45 24 52 27 L72 13 L70 39 Q79 49 74 64 Q67 80 45 80 Q23 80 16 64 Q11 49 20 38Z"/><path d="M31 49h1m26 0h1M39 61q6 6 12 0M16 55L4 52m12 14L5 69m69-14l12-3m-12 14l11 3"/></g><path d="M40 54l5 4 5-4" fill="currentColor"/></svg>
    <svg className="pet pet-puppy" viewBox="0 0 90 90"><g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M24 32Q10 15 10 36Q9 52 25 51M66 32Q80 15 80 36Q81 52 65 51M25 34Q45 19 65 34Q77 45 69 66Q61 81 45 81Q29 81 21 66Q13 45 25 34Z"/><path d="M31 48h1m26 0h1M37 64q8 7 16 0"/></g><ellipse cx="45" cy="57" rx="7" ry="5" fill="currentColor"/></svg>
    <svg className="pet pet-cat-small" viewBox="0 0 90 90"><g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 38 L18 13 L38 27 Q45 24 52 27 L72 13 L70 39 Q79 49 74 64 Q67 80 45 80 Q23 80 16 64 Q11 49 20 38Z"/><path d="M31 49h1m26 0h1M39 61q6 6 12 0M16 55L4 52m12 14L5 69m69-14l12-3m-12 14l11 3"/></g><path d="M40 54l5 4 5-4" fill="currentColor"/></svg>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reducedMotion || !finePointer) return;
    let lastX = 0;
    let lastY = 0;
    let lastAt = 0;
    let pawSide = 0;
    const onMove = (event: MouseEvent) => {
      const now = performance.now();
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (Math.hypot(dx, dy) < 34 || now - lastAt < 75) return;
      lastX = event.clientX;
      lastY = event.clientY;
      lastAt = now;
      pawSide = 1 - pawSide;
      const paw = document.createElement("span");
      paw.className = "walking-paw";
      paw.setAttribute("aria-hidden", "true");
      paw.style.left = (event.clientX + (pawSide ? 7 : -7)) + "px";
      paw.style.top = (event.clientY + (pawSide ? 6 : -6)) + "px";
      paw.style.transform = "translate(-50%, -50%) rotate(" + (dx >= 0 ? 24 : -24) + "deg)";
      paw.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><ellipse cx="16" cy="21" rx="7" ry="5.5"/><ellipse cx="7.5" cy="13" rx="3.2" ry="4.1"/><ellipse cx="14.5" cy="9" rx="3.2" ry="4.1"/><ellipse cx="21.5" cy="9.5" rx="3.2" ry="4.1"/><ellipse cx="26" cy="14" rx="3" ry="3.8"/></svg>';
      document.body.appendChild(paw);
      window.setTimeout(() => paw.remove(), 2400);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <main className="journal" onClick={(event) => { const target = event.target as HTMLElement; const surface = target.closest("a,button,.note,.career-page,.metric") as HTMLElement | null; const animated = surface || target; animated.classList.remove("click-pop"); void animated.offsetWidth; animated.classList.add("click-pop"); window.setTimeout(() => animated.classList.remove("click-pop"), 460); }}>
    <SideMarks />
    <PetDoodles />
    <header className="journal-header">
      <a className="monogram" href="#home" aria-label="Soji Jacob home">SJ</a>
      <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
        <a href="#about" onClick={() => setMenuOpen(false)}>about</a><a href="#work" onClick={() => setMenuOpen(false)} >work</a><a href="#contact" onClick={() => setMenuOpen(false)}>connect</a>
      </nav>
      <a className="header-note" href="mailto:hello@soji.in">available for the right next chapter</a>
      <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="opening" id="home">
      <div className="opening-meta"><span>A PERSONAL NOTEBOOK</span><span>PRODUCT · FINANCE · AI</span></div>
      <div className="paper-stack"><div className="paper-top"><div className="paper-grid"/>
        <div className="hero-copy"><p className="scribble-name">Soji Jacob</p><p className="role-label">Product leader · Problem untangler</p><h1>I started in code.<br/>Now I help teams<br/><em>build the right thing.</em></h1>
          <p className="hero-description">13+ years translating between business, technology and the people who have to use what we build.</p><a className="hand-button" href="#work">Come have a look</a>
          <p className="location-note">Bengaluru, India <span className="location-separator">·</span> Open to global opportunities</p></div>
        <div className="hero-illustration"><DoodleGarden/><span className="illustration-caption">ideas, with room to grow</span></div><div className="paper-index">A CLOSER LOOK</div>
      </div><div className="paper-lip"><span>SOJI'S WORKING NOTEBOOK</span><span>OPEN TO EXPLORE ↘</span></div></div>
      <div className="loose-doodle doodle-left" aria-hidden="true">♧</div><div className="loose-doodle doodle-right" aria-hidden="true">〰</div>
      <div className="opening-caption"><span>A little about how I think</span><span>Scroll slowly. Nothing here is in a hurry.</span></div>
    </section>

    <section className="beliefs" id="about">
      <div className="beliefs-heading"><span className="section-kicker">A FEW THINGS I KEEP COMING BACK TO</span><h2>Good work starts<br/>with <em>good questions.</em></h2><p>Not a manifesto. Just a few principles that have held up across teams, platforms and the occasional impossible deadline.</p></div>
      <div className="belief-notes">
        <article className="note note-one"><small>CLARITY</small><p>Relentlessly<br/><strong>pursue clarity.</strong></p></article>
        <article className="note note-two"><span className="note-pin"></span><small>USEFULNESS</small><p>Software should<br/><strong>empower people.</strong></p></article>
        <article className="note note-three"><span className="note-pin"></span><small>CRAFT</small><p>Details matter.<br/><strong>So do outcomes.</strong></p></article>
      </div>
    </section>

    <section className="work-section" id="work">
      <div className="section-head"><div><span className="section-kicker">WHAT I WORK ON</span><h2>Three kinds of problems.<br/><em>One curious mind.</em></h2></div><p>My work sits where product decisions, financial systems and emerging technology meet. I enjoy getting into the detail, finding the real problem and helping teams move forward.</p></div>
      <div className="work-cards">
        {work.map(item => <article key={item.kind} className="work-card">
          <div className="work-card-top"><span className="work-card-kind">{item.kind}</span></div>
          <h3>{item.title}</h3>
          <p className="work-card-subtitle">{item.subtitle}</p>
          <p className="work-card-text">{item.text}</p>
          <div className="detail-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </article>)}
      </div>
    </section>

    <section className="impact-section" id="impact">
      <div className="impact-heading"><span className="section-kicker">A FEW NUMBERS FROM THE NOTEBOOK</span><h2>Make the difference<br/><em>visible.</em></h2><p>Reported project outcomes. The useful part is not the number alone, but the time and attention it gives back to people.</p></div>
      <div className="impact-sheet">
        <div className="metric"><strong>1,500</strong><span className="metric-label">documents per day</span><p>Designed processing volume for an AI document parsing solution.</p></div>
        <div className="metric"><strong>70<small>%</small></strong><span className="metric-label">less manual handling</span><p>Reported reduction in manual document handling.</p></div>
        <div className="metric"><span className="metric-mark"></span><strong>30–35<small>%</small></strong><span className="metric-label">faster delivery</span><p>Reported improvement from clearer requirements and delivery practices.</p></div>
        <p className="metrics-footnote">Metrics reflect reported project outcomes and have not been independently audited.</p>
      </div>
    </section>

    <section className="career-section">
      <div className="career-heading"><span className="section-kicker">PAGES FROM THE PAST</span><h2>Experience is a collection<br/>of <em>perspectives.</em></h2></div>
      <div className="career-pages">
        <article className="career-page page-current"><span className="page-date">2025 — 2026</span><span className="page-stamp">MOST RECENT</span><h3>Natixis</h3><p>Product ownership and functional consulting across leasing, lending, payments and asset finance. Work spanned AI-assisted document processing, workflow and platform improvements, functional analysis, and transformation initiatives, as part of a back-office transformation programme on Odessa.</p><span className="page-foot">PRODUCT OWNERSHIP · FINANCIAL PLATFORMS</span></article>
        <article className="career-page"><span className="page-date">2019 — 2025</span><h3>Société Générale GSC</h3><p>Odessa lease and loan configuration, customer portal and mobile application delivery, and new business workflows with cross functional teams.</p><span className="page-foot">PRODUCT DELIVERY · ASSET FINANCE</span></article>
        <article className="career-page"><span className="page-date">2012 — 2019</span><h3>Cognizant / Google GTech</h3><p>Web technology, digital experience consulting and delivery leadership, including analysis and coordination for a 15 member team.</p><span className="page-foot">DIGITAL EXPERIENCE · DELIVERY</span></article>
      </div>
    </section>

    <section className="contact-section" id="contact">
      <div className="contact-illustration"><DoodleGarden/><span>GOOD THINGS GROW FROM A CONVERSATION</span></div>
      <div className="contact-copy"><span className="section-kicker">THE LAST PAGE (FOR NOW)</span><h2>Have something<br/>interesting to <em>untangle?</em></h2><p>I'm always interested in thoughtful teams, ambitious problems and products that make a real difference.</p><a className="hand-button" href="mailto:hello@soji.in">Let's talk</a><div className="contact-links"><a href="https://www.linkedin.com/in/soji-jacob/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a><a href="mailto:hello@soji.in">hello@soji.in</a></div></div>
    </section>
    <footer className="journal-footer"><div className="footer-inner"><a className="footer-signature" href="#home">Soji Jacob</a><span>MADE WITH CURIOSITY, NOT A TEMPLATE.</span><a href="#home">BACK TO THE FIRST PAGE</a></div></footer>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&family=Caveat:wght@500;600;700&display=swap');
      :root{--j-ink:#080808;--j-paper:#f5e4d0;--j-red:#fc9f30;--j-muted:#75665c;--j-serif:'Oswald',Arial,sans-serif;--j-sans:'DM Sans',sans-serif;--j-hand:'Caveat',cursive;--j-mono:'DM Mono',monospace}
      html{scroll-behavior:smooth;scroll-padding-top:25px}body{margin:0;background:#000000;color:var(--j-ink);font-family:var(--j-sans);-webkit-font-smoothing:antialiased}*{box-sizing:border-box}a{color:inherit;text-decoration:none}button{font:inherit;cursor:pointer}a:focus-visible,button:focus-visible{outline:2px solid var(--j-red);outline-offset:4px}a,button,.note,.career-page,.metric{ -webkit-tap-highlight-color:transparent}a:active,button:active{transform:scale(.975)}.note:active,.career-page:active,.metric:active{animation:paper-tap .28s ease-out}::selection{background:var(--j-red);color:#fff3e4}
      .journal{position:relative;min-height:100vh;overflow:hidden;background:#000000;padding:0 clamp(22px,7vw,120px);isolation:isolate}
      .side-marks{position:fixed;z-index:4;top:0;bottom:0;left:0;width:54px;overflow:hidden;pointer-events:none;display:flex;justify-content:center;gap:5px;mask-image:linear-gradient(to bottom,transparent,#000 5%,#000 95%,transparent)}.marks-track{position:absolute;top:0;left:3px;width:48px;display:flex;flex-direction:column;align-items:center;gap:8px;will-change:transform}.marks-track-one{animation:finance-pan 34s linear infinite}.mark-tile{width:37px;height:42px;flex:none;display:grid;place-items:center;border:1px solid #fc9f3070;border-radius:5px;color:var(--j-red);background:#101010c9;box-shadow:0 3px 0 #0002;transform:rotate(-2deg)}.mark-tile svg{width:18px;height:18px;display:block}.marks-track{gap:12px}.mark-tile{margin:0}.mark-tile-1{border-radius:50%;transform:rotate(3deg);background:#fc9f3015}.mark-tile-2{border-style:dashed;transform:rotate(-4deg)}.mark-tile-3{border-radius:2px 8px 2px 8px;transform:rotate(2deg)}@keyframes finance-pan{from{transform:translateY(0)}to{transform:translateY(-33.333%)}}
      .walking-paw{position:fixed;z-index:1000;width:23px;height:23px;color:#fc9f30;opacity:0;pointer-events:none;animation:paw-print-fade 2.4s ease-out forwards}.walking-paw svg{display:block;width:100%;height:100%;fill:currentColor;filter:drop-shadow(0 1px 1px #000)}@keyframes paw-print-fade{0%{opacity:0;scale:.65}10%{opacity:.88;scale:1}70%{opacity:.72;scale:.94}100%{opacity:0;scale:.8;translate:0 10px}}.pet-doodles{position:fixed;inset:0;z-index:5;pointer-events:none;color:var(--j-red)}.pet{position:absolute;width:52px;height:52px;filter:drop-shadow(0 2px 0 #000);opacity:.82;animation:pet-float 5s ease-in-out infinite}.pet-cat{right:18px;top:19%;transform:rotate(8deg)}.pet-puppy{right:16px;bottom:14%;animation-delay:-1.7s;transform:rotate(-7deg)}.pet-cat-small{left:13px;bottom:8%;width:43px;height:43px;animation-delay:-3s}@keyframes pet-float{0%,100%{translate:0 0;rotate:0deg}50%{translate:0 -7px;rotate:4deg}}.journal-header{height:150px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--j-paper);z-index:10}.monogram{position:absolute;top:25px;left:0;display:flex;align-items:center;gap:7px;font:700 24px var(--j-hand);color:var(--j-red);letter-spacing:-2px}.monogram span{font:17px var(--j-sans)}.journal-header nav{display:flex;align-items:center;gap:27px;font:600 19px var(--j-hand)}.journal-header nav a{padding:8px 15px;border:1px solid transparent;border-radius:50%;transition:all .2s}.journal-header nav a{position:relative;transition:color .22s,transform .22s}.journal-header nav a::after{position:absolute;right:-4px;top:-15px;font:17px var(--j-sans);opacity:0;transform:translateY(7px) rotate(-20deg) scale(.5);transition:opacity .18s,transform .25s;pointer-events:none}.journal-header nav a:nth-child(1)::after{content:'🐈'}.journal-header nav a:nth-child(2)::after{content:'🐕'}.journal-header nav a:nth-child(3)::after{content:'🐾'}.journal-header nav a:hover{border-color:var(--j-red);color:var(--j-red);transform:translateY(-3px) rotate(-2deg)}.journal-header nav a:hover::after{opacity:1;transform:translateY(0) rotate(8deg) scale(1)}.journal-header nav a:active::after{animation:pet-boop .42s ease-in-out}.header-note{position:absolute;right:0;top:32px;display:flex;align-items:center;gap:5px;font-size:9px;color:#b4a99b}.menu-toggle{display:none}
      .opening{position:relative;max-width:1080px;margin:0 auto;padding:0 0 82px}.opening-meta{display:flex;justify-content:space-between;color:#8b8177;font:9px var(--j-mono);letter-spacing:.1em;margin:0 4px 12px}.paper-stack{position:relative;background:var(--j-red);padding:17px 17px 0;border-radius:55px 55px 5px 5px;box-shadow:0 16px 0 -8px #8a4f0a,0 22px 36px #0005;transform:rotate(-.15deg)}.paper-top{position:relative;min-height:540px;display:grid;grid-template-columns:.86fr 1.14fr;align-items:center;gap:20px;padding:56px clamp(30px,4vw,60px) 40px;background:var(--j-paper);border-radius:38px 38px 3px 3px;overflow:hidden}.paper-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(#c6b8c7 1.5px,transparent 1.5px),linear-gradient(90deg,#c6b8c7 1.5px,transparent 1.5px);background-size:40px 40px;opacity:.76;mask-image:linear-gradient(to bottom,black 0%,black 72%,transparent 100%)}.paper-top:after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 20% 15%,#fff6e8a0,transparent 65%);mix-blend-mode:screen}
      .hero-copy{position:relative;z-index:2;align-self:center;padding:5px 0 28px}.scribble-name{font:600 clamp(34px,4vw,52px)/.9 var(--j-hand);color:var(--j-red);margin:0 0 10px;transform:rotate(-4deg);width:max-content;border-bottom:2px solid var(--j-red);padding:0 10px 5px 0}.role-label{font:500 19px var(--j-serif);color:var(--j-red);margin:16px 0 14px}.hero-copy h1{font:500 clamp(34px,3.5vw,46px)/1.1 var(--j-serif);letter-spacing:-.045em;margin:0;color:var(--j-red);max-width:500px}.hero-copy h1 em,.beliefs h2 em,.section-head h2 em,.impact-heading h2 em,.career-heading h2 em,.contact-copy h2 em{font-weight:500;font-style:normal;color:var(--j-ink)}.hero-description{font-size:15px;line-height:1.9;max-width:390px;color:#765f54;margin:18px 0 20px}.hand-button{display:inline-flex;align-items:center;justify-content:center;max-width:100%;gap:13px;border:1.5px solid var(--j-red);border-radius:3px 4px 2px 4px;padding:12px 17px;background:#000;color:var(--j-red);font:600 17px var(--j-hand);transform:rotate(-1deg);transition:background .2s,color .2s,transform .2s}.hand-button:hover{background:#000;color:#ffd08f;transform:rotate(0) translateY(-2px)}.location-note{font:500 10px var(--j-serif);color:#9a7264;margin:22px 0 0}.location-note span{color:var(--j-red);padding:0 8px}.hero-illustration{position:relative;z-index:3;align-self:end;min-width:0;min-height:0;color:var(--j-red);margin:0 -12px -12px 0;overflow:hidden}.garden-art{display:block;width:100%;height:auto;max-height:460px;overflow:visible}.illustration-caption{position:absolute;right:3%;bottom:5%;font:600 13px var(--j-hand);color:var(--j-red);transform:rotate(-4deg);max-width:38%;text-align:right;pointer-events:none}.paper-index{position:absolute;top:17px;right:24px;z-index:2;font:9px var(--j-mono);color:#b47766}.paper-index span{color:var(--j-red);padding-left:8px}.paper-lip{height:34px;display:flex;align-items:center;justify-content:space-between;padding:0 30px;color:#fff0df;font:9px var(--j-mono);letter-spacing:.1em}.loose-doodle{position:absolute;color:var(--j-paper);font:75px var(--j-hand);opacity:.9;pointer-events:none}.doodle-left{left:-95px;top:300px;transform:rotate(-25deg)}.doodle-right{right:-85px;top:160px;transform:rotate(-18deg)}.opening-caption{display:flex;justify-content:space-between;margin:24px 4px 0;color:#b9aa9b;font:16px var(--j-hand)}
      .beliefs{max-width:980px;margin:0 auto;padding:40px 0 120px;display:grid;grid-template-columns:.72fr 1.28fr;gap:65px;align-items:center;color:var(--j-paper)}.section-kicker{font:9px var(--j-mono);letter-spacing:.12em;color:var(--j-red);display:block;margin-bottom:18px}.beliefs h2,.section-head h2,.impact-heading h2,.career-heading h2,.contact-copy h2{font:500 clamp(30px,3.2vw,40px)/1.08 var(--j-serif);letter-spacing:-.04em;margin:0}.beliefs h2 em,.section-head h2 em,.career-heading h2 em,.contact-copy h2 em{color:#fc9f30}.beliefs-heading>p,.section-head>p,.impact-heading>p,.contact-copy>p{font-size:14px;line-height:1.9;color:#b6a99b;margin:21px 0 0;max-width:360px}.belief-notes{display:grid;grid-template-columns:1fr 1fr;gap:17px;align-items:center}.note{position:relative;min-height:155px;padding:26px 20px 19px;background:#f2dfc9;color:var(--j-ink);box-shadow:0 10px 20px #0002;border:1px solid #fff5e5;transform:rotate(-3deg)}.note-two{background:#d9d1c3;transform:rotate(4deg);margin-top:26px}.note-three{grid-column:1/-1;justify-self:center;width:65%;min-height:125px;background:#cdb29c;transform:rotate(-1deg);margin-top:-7px}.note small{font:10px var(--j-mono);color:#8c6f5d;letter-spacing:.06em}.note p{font:500 21px/1.3 var(--j-sans);margin:20px 0 0}.note p strong{font-weight:700}.note-two p{font-size:18px}.note-three p{font:italic 24px var(--j-serif);margin-top:12px}.note-pin{position:absolute;right:13px;top:8px;color:var(--j-red);font-size:14px}.note-doodle{position:absolute;bottom:8px;right:12px;font:15px var(--j-hand);color:var(--j-red)}
      .work-section{position:relative;max-width:1080px;margin:0 auto;padding:80px 0 110px;color:var(--j-paper);border-top:1px solid #51443b}
      .section-head{display:flex;justify-content:space-between;align-items:end;gap:50px;margin-bottom:42px}.section-head>p{max-width:390px;margin-bottom:5px}
      .work-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;align-items:stretch}
      .work-card{position:relative;display:flex;flex-direction:column;min-width:0;overflow:hidden;padding:25px 23px 23px;background:#11100e;border:1px solid #574638;border-top:3px solid var(--j-red);border-radius:3px;transition:transform .22s,border-color .22s,background .22s;min-height:310px}
      .work-card:hover{transform:translateY(-5px) rotate(-.35deg);border-color:var(--j-red);background:#17130e}
      .work-card-top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:28px}
      .work-card-kind{font:10px var(--j-mono);line-height:1.5;letter-spacing:.08em;color:var(--j-red);overflow-wrap:anywhere}
      .work-card-mark{font:30px var(--j-hand);color:var(--j-red);line-height:1}
      .work-card h3{font:500 25px/1.2 var(--j-serif);letter-spacing:0;color:var(--j-paper);margin:0 0 7px}
      .work-card-subtitle{font:600 17px var(--j-hand);color:#c2b09d;margin:0 0 15px}
      .work-card-text{font-size:14px;line-height:1.85;color:#d0c3b5;margin:0 0 22px;overflow-wrap:anywhere}
      .work-card .detail-tags{display:flex;align-items:flex-start;align-content:flex-start;margin-top:auto;gap:5px;min-width:0;flex-wrap:wrap}.work-card .detail-tags span{display:inline-flex;align-items:center;font:10px/1.4 var(--j-sans);color:#e2d3c2;border:1px solid #554537;border-radius:2px;padding:4px 6px;box-sizing:border-box;max-width:100%;min-width:0;white-space:normal;overflow-wrap:break-word;word-break:normal;flex:0 1 auto;width:max-content}
      .impact-section{max-width:1080px;margin:0 auto;padding:70px 0 110px;display:grid;grid-template-columns:.7fr 1.3fr;gap:55px;align-items:center;border-top:1px solid #51443b}.impact-heading h2{color:var(--j-paper)}.impact-heading h2 em{color:#fc9f30}.impact-sheet{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;padding:28px 20px 20px;background:var(--j-paper);color:var(--j-ink);border:12px solid var(--j-red);border-radius:4px;box-shadow:0 15px 25px #0003;position:relative}.impact-sheet:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#d7c3cb 1px,transparent 1px);background-size:100% 29px;pointer-events:none;opacity:.22}.metric{position:relative;z-index:1;min-width:0;padding:8px 12px;overflow-wrap:anywhere;border-right:1px dashed #c9afa0}.metric:nth-child(3){border-right:0}.metric strong{display:block;font:500 clamp(25px,3vw,39px)/1.1 var(--j-serif);margin:19px 0 7px;white-space:normal;overflow-wrap:anywhere}.metric strong small{font-size:.55em}.metric-label{font-size:11px;line-height:1.5;font-weight:700;color:#8a4f0a;letter-spacing:.015em}.metric p{font-size:13px;line-height:1.8;color:#514237;margin:14px 0 4px}.metrics-footnote{position:relative;grid-column:1/-1;font:10px/1.6 var(--j-mono);color:#735a49;margin:22px 10px 0;padding-top:12px;border-top:1px solid #d8bfb0}
      .career-section{max-width:1080px;margin:0 auto;padding:75px 0 110px;border-top:1px solid #51443b}.career-heading{color:var(--j-paper);margin-bottom:42px}.career-pages{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;align-items:start}.career-page{position:relative;padding:25px 22px 55px;background:var(--j-paper);color:var(--j-ink);min-height:300px;box-shadow:0 10px 24px #0003;transform:rotate(1.2deg)}.career-page:nth-child(2){background:#e8d2bd;transform:rotate(-1.7deg);margin-top:19px}.career-page:nth-child(3){background:#f7eadb;transform:rotate(.8deg)}.page-date{font:9px var(--j-mono);color:#a07968}.page-stamp{position:absolute;right:13px;top:13px;padding:4px 6px;border:1px solid var(--j-red);font:7px var(--j-mono);color:var(--j-red);transform:rotate(5deg)}.career-page h3{font:500 27px var(--j-serif);margin:28px 0 12px}.career-page p{font-size:14px;line-height:1.85;color:#514237;margin:0 0 22px;overflow-wrap:anywhere}.page-foot{position:absolute;bottom:18px;left:22px;right:22px;border-top:1px solid #d7bca9;padding-top:12px;font:8px var(--j-mono);color:#a77b68;letter-spacing:.04em}
      .contact-section{max-width:1080px;margin:0 auto;padding:70px 0 90px;border-top:1px solid #51443b;display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.contact-illustration{position:relative;color:var(--j-red);padding:20px;background:var(--j-paper);border:11px solid var(--j-red);border-radius:4px;transform:rotate(-2deg)}.contact-illustration .garden-art{max-height:280px}.contact-illustration>span{display:block;text-align:center;color:var(--j-red);font:600 13px var(--j-hand);padding:5px 0 12px}.contact-copy{color:var(--j-paper)}.contact-copy h2 em{color:#fc9f30}.contact-copy>p{margin-bottom:25px}.contact-links{display:flex;gap:20px;flex-wrap:wrap;margin-top:23px}.contact-links a{display:flex;align-items:center;gap:6px;color:#b6a99b;font-size:10px}.contact-links a:hover{color:var(--j-red)}.journal-footer{width:100vw;margin-left:calc(50% - 50vw);padding:0 clamp(22px,7vw,120px);border-top:1px solid #51443b;color:#938579;font:8px var(--j-mono);letter-spacing:.05em}.footer-inner{max-width:1080px;min-height:84px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:20px}.footer-signature{font:600 24px var(--j-hand);color:var(--j-red);letter-spacing:0}.footer-signature span{font:12px var(--j-sans);padding-left:5px}
      @media(max-width:1000px){.journal{padding:0 62px}.paper-top{grid-template-columns:1fr 1fr;padding:48px 32px 35px}.hero-copy h1{font-size:clamp(34px,4.4vw,48px)}.hero-illustration{margin-right:-20px}.beliefs{gap:35px}.work-cards{gap:12px}.work-card{padding:20px 16px}.work-card h3{font-size:23px}.work-card-text{font-size:13px}.impact-section{gap:30px}.metric{padding:8px}.metric strong{font-size:clamp(23px,2.8vw,32px)}.side-marks{width:42px}.marks-track{left:2px;width:38px}.mark-tile{width:32px;height:38px}.mark-tile svg{width:16px;height:16px}}
      @media(max-width:700px){.journal{padding:0 22px}.side-marks{display:none}.pet-cat-small{display:none}.pet{width:42px;height:42px;opacity:.68}.pet-cat{right:5px;top:18%}.pet-puppy{right:5px;bottom:10%}.journal-header{height:100px;justify-content:flex-end}.monogram{top:25px;left:0}.header-note{display:none}.menu-toggle{display:grid;place-items:center;position:absolute;right:0;top:24px;background:transparent;border:1px solid #68564a;color:var(--j-paper);width:35px;height:35px}.menu-toggle svg{width:17px}.journal-header nav{display:none;position:absolute;top:75px;left:0;right:0;z-index:20;flex-direction:column;align-items:stretch;gap:4px;padding:15px;background:#101010;border:1px solid #57453a}.journal-header nav.nav-open{display:flex}.journal-header nav a{border-radius:0;padding:10px}.opening{padding-bottom:60px}.opening-meta{font-size:7px}.paper-stack{padding:8px 8px 0;border-radius:27px 27px 3px 3px}.paper-top{display:flex;flex-direction:column;align-items:stretch;gap:0;padding:42px 20px 15px;border-radius:20px 20px 2px 2px;min-height:0}.paper-grid{background-size:28px 28px}.paper-index{top:12px;right:13px;font-size:7px}.hero-copy{padding:0}.scribble-name{font-size:39px}.role-label{font-size:16px;margin-top:14px}.hero-copy h1{font-size:clamp(35px,10vw,48px)}.hero-description{font-size:14px;line-height:1.8;margin:14px 0}.location-note{font-size:9px;margin-top:15px}.hero-illustration{margin:15px 0 -8px;max-height:270px}.garden-art{max-height:300px}.illustration-caption{font-size:13px;bottom:12%}.paper-lip{padding:0 11px;font-size:6px;letter-spacing:.04em;height:28px}.opening-caption{font-size:13px;gap:15px}.opening-caption span:last-child{text-align:right}.loose-doodle{display:none}
      .beliefs{grid-template-columns:1fr;gap:30px;padding:30px 0 75px}.beliefs h2,.section-head h2,.impact-heading h2,.career-heading h2,.contact-copy h2{font-size:clamp(31px,8vw,39px)}.belief-notes{gap:11px}.note{min-height:138px;padding:22px 13px 17px}.note p{font-size:17px}.note-two p{font-size:16px}.note-three{width:75%;min-height:115px}.note-three p{font-size:21px}
      .work-section{padding:55px 0 70px}.section-head{display:block;margin-bottom:25px}.section-head>p{margin-top:15px}.work-cards{grid-template-columns:1fr;gap:14px}.work-card{min-height:0;padding:22px 19px}.work-card-top{margin-bottom:17px}.work-card h3{font-size:25px}.work-card-text{font-size:14px}
      .impact-section{grid-template-columns:1fr;gap:25px;padding:55px 0 75px}.impact-sheet{grid-template-columns:1fr;padding:18px;border-width:8px}.metric{display:grid;grid-template-columns:1fr auto;column-gap:12px;padding:16px 8px;border-right:0;border-bottom:1px dashed #c9afa0}.metric:nth-child(3){border-bottom:0}.metric strong{grid-column:1;grid-row:1;font-size:34px;margin:3px 0 6px}.metric-label{grid-column:1;grid-row:2}.metric p{grid-column:1/-1;margin:10px 0 0;font-size:12px}.metrics-footnote{margin-top:12px}
      .career-section{padding:55px 0 70px}.career-pages{grid-template-columns:1fr;gap:17px}.career-page{min-height:260px;padding-bottom:55px;margin:0!important;transform:rotate(-.5deg)!important}.career-page:nth-child(2){transform:rotate(.7deg)!important}.career-page:nth-child(3){transform:rotate(-.3deg)!important}.career-page p{font-size:13px;max-width:460px}
      .contact-section{grid-template-columns:1fr;gap:35px;padding:55px 0 65px}.contact-illustration{max-width:470px;margin:0 auto;width:100%}.contact-illustration .garden-art{max-height:240px}.journal-footer{padding:0 22px;font-size:7px}.footer-inner{min-height:96px;flex-wrap:wrap;justify-content:space-between;gap:12px;padding:18px 0}.footer-inner>span{order:3;width:100%;text-align:center}.footer-inner>a:last-child{margin-left:auto}}
      @media(prefers-reduced-motion:reduce){.walking-paw{display:none}html{scroll-behavior:auto}*,*::before,*::after{transition:none!important;animation:none!important}}
    `}</style>
  </main>;
}
