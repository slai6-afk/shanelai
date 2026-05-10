import { useEffect, useRef } from 'react';

export function BoatwrightLibraryCaseStudy() {
  const navStageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = navStageRef.current;
    if (!stage) return;

    const items = stage.querySelectorAll<HTMLElement>('.bw-primary-nav .bw-item[data-menu]');
    const panels = stage.querySelectorAll<HTMLElement>('.bw-mega');

    function closeAll() {
      items.forEach(i => i.classList.remove('open'));
      panels.forEach(p => p.classList.remove('open'));
    }

    function openMenu(key: string) {
      closeAll();
      const it = stage!.querySelector<HTMLElement>(`.bw-primary-nav .bw-item[data-menu="${key}"]`);
      const tg = stage!.querySelector<HTMLElement>(`#bw-m-${key}`);
      if (it && tg) { it.classList.add('open'); tg.classList.add('open'); }
    }

    openMenu('find');

    items.forEach(it => {
      const k = it.dataset.menu!;
      it.addEventListener('click', () => {
        if (it.classList.contains('open')) { closeAll(); } else { openMenu(k); }
      });
      it.addEventListener('mouseenter', () => {
        const tg = stage!.querySelector<HTMLElement>(`#bw-m-${k}`);
        if (!tg) { closeAll(); return; }
        openMenu(k);
      });
    });

    const onMouseLeave = () => closeAll();
    const onDocClick = (e: MouseEvent) => {
      if (!stage.contains(e.target as Node)) closeAll();
    };

    stage.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('click', onDocClick);
    return () => {
      stage.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('click', onDocClick);
    };
  }, []);

  return (
    <>
      <style>{`
        .bw-root {
          font-family: "Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          color: #1f1f1f;
          background: #fff;
          -webkit-font-smoothing: antialiased;
          --ur-red: #b3001b;
          --ur-red-2: #a3001a;
          --ur-red-deep: #8a0014;
          --ur-navy: #1a2a4a;
          --ur-navy-2: #143b6b;
          --ur-teal: #0e8e8c;
          --ur-bg: #f6f4ef;
          --ur-text: #1f1f1f;
          --ur-muted: #6c6c6c;
          --ur-rule: #e6e2d8;
          --serif: "Newsreader", "Mercury Display", "Adobe Caslon Pro", Georgia, serif;
          --sans: "Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        }
        .bw-root * { box-sizing: border-box; }
        .bw-root a { color: inherit; text-decoration: none; }
        .bw-root img { max-width: 100%; display: block; }

        /* Top utility row */
        .bw-topbar {
          display: flex; align-items: center;
          padding: 18px 40px 16px;
          gap: 36px;
        }
        .bw-brand { display: flex; align-items: center; gap: 14px; text-decoration: none; color: var(--ur-navy); }
        .bw-crest { width: 48px; height: 54px; flex: 0 0 auto; }
        .bw-brand-name {
          font-family: var(--serif);
          font-weight: 500;
          font-size: 34px;
          letter-spacing: .005em;
          line-height: 1; color: var(--ur-navy);
          text-transform: uppercase;
        }
        .bw-brand-name em { font-style: italic; font-weight: 400; text-transform: lowercase; font-size: .95em; padding: 0 .12em; }
        .bw-topbar nav.bw-util {
          margin-left: auto; display: flex; align-items: center; gap: 34px;
          font-weight: 700; font-size: 14px; letter-spacing: .12em; color: #555; text-transform: uppercase;
        }
        .bw-topbar nav.bw-util a { display: inline-flex; align-items: center; gap: 6px; }
        .bw-topbar nav.bw-util a:hover { color: var(--ur-red); }
        .bw-caret { width: 8px; height: 8px; display: inline-block; border-right: 2px solid currentColor; border-bottom: 2px solid currentColor; transform: rotate(45deg) translate(-2px,-2px); margin-left: 4px; }
        .bw-search { display: flex; align-items: center; gap: 10px; border-bottom: 1.5px solid var(--ur-navy); padding: 8px 4px 8px 6px; min-width: 300px; }
        .bw-search input { border: 0; outline: 0; background: transparent; font-size: 15px; color: var(--ur-navy); width: 100%; font-family: var(--sans); letter-spacing: .02em; }
        .bw-search input::placeholder { color: #7d8aa3; }
        .bw-search svg { flex: 0 0 auto; color: var(--ur-navy); }

        /* Library wordmark */
        .bw-wordmark { padding: 10px 40px 22px; }
        .bw-wordmark h1 {
          margin: 0; font-family: var(--serif); font-weight: 500; color: var(--ur-red);
          font-size: 60px; letter-spacing: -.005em; line-height: 1;
        }

        /* Breadcrumb */
        .bw-breadcrumb {
          background: linear-gradient(90deg, var(--ur-navy-2) 0%, #3a6fa8 35%, #a8c2dd 60%, #eef3f8 100%);
          height: 28px; display: flex; align-items: stretch; color: #fff;
          font-size: 11.5px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase;
        }
        .bw-crumb { position: relative; padding: 0 28px 0 40px; display: flex; align-items: center; height: 100%; }
        .bw-crumb::after { content: ""; position: absolute; right: -14px; top: 0; width: 0; height: 0;
          border-top: 14px solid transparent; border-bottom: 14px solid transparent;
          border-left: 14px solid var(--ur-navy-2); z-index: 2; }
        .bw-crumb:nth-child(2) { background: rgba(255,255,255,.14); }
        .bw-crumb:nth-child(2)::after { border-left-color: #3e74ad; }

        /* Primary nav */
        .bw-primary-nav {
          background: var(--ur-red);
          display: grid;
          grid-template-columns: repeat(5,1fr);
          position: relative; z-index: 5;
        }
        .bw-primary-nav .bw-item {
          color: #fff;
          font-family: var(--sans);
          font-weight: 700; font-size: 16px; letter-spacing: .1em; text-transform: uppercase;
          padding: 26px 18px;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          cursor: pointer; user-select: none;
          text-align: center; line-height: 1.15;
          transition: background .15s ease;
          position: relative;
        }
        .bw-primary-nav .bw-item:hover,
        .bw-primary-nav .bw-item.open { background: var(--ur-red-2); }
        .bw-primary-nav .bw-item .bw-chev {
          width: 10px; height: 10px; border-right: 2.5px solid #fff; border-bottom: 2.5px solid #fff;
          transform: rotate(45deg) translate(-3px,-3px); transition: transform .2s ease;
        }
        .bw-primary-nav .bw-item.open .bw-chev { transform: rotate(225deg) translate(-3px,-3px); }

        /* Mega menu */
        .bw-mega {
          display: none;
          background: var(--ur-red);
          color: #fff;
          padding: 60px 64px 90px;
          background-image:
            radial-gradient(ellipse at 0% 0%, rgba(255,255,255,.08) 0%, transparent 55%),
            radial-gradient(ellipse at 100% 100%, rgba(0,0,0,.28) 0%, transparent 60%);
        }
        .bw-mega.open { display: block; animation: bwFadeDown .18s ease; }
        @keyframes bwFadeDown { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
        .bw-mega-inner {
          display: grid; gap: 48px;
          max-width: 1500px; margin: 0 auto;
          align-items: start;
        }
        .bw-mega.find .bw-mega-inner { grid-template-columns: 1.25fr 1.05fr 1fr 1.05fr; }
        .bw-mega.help .bw-mega-inner { grid-template-columns: 1.25fr 1fr 1fr 1.05fr; }
        .bw-mega.spaces .bw-mega-inner { grid-template-columns: 1.25fr 1fr 1fr 1.05fr; }
        .bw-mega.about .bw-mega-inner { grid-template-columns: 1.25fr 1fr 1.05fr 1.05fr; }

        .bw-mega h2 {
          font-family: var(--serif);
          font-weight: 500;
          font-size: 72px;
          line-height: 1.02;
          margin: 0 0 22px;
          color: #fff;
          letter-spacing: -.01em;
        }
        .bw-mega .bw-lede { font-size: 18px; line-height: 1.55; color: #fbe6e9; margin: 0 0 32px; max-width: 42ch; font-weight: 400; }
        .bw-mega .bw-cta {
          display: inline-block; border: 1.5px solid #fff; color: #fff;
          padding: 18px 30px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; font-size: 13.5px;
          transition: background .15s ease, color .15s ease;
        }
        .bw-mega .bw-cta:hover { background: #fff; color: var(--ur-red); }

        .bw-col-title {
          color: #fff; font-weight: 800; letter-spacing: .18em; text-transform: uppercase;
          font-size: 15px; margin: 6px 0 22px;
        }
        .bw-mega ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 18px; }
        .bw-mega ul a {
          color: #fff; font-size: 20px; line-height: 1.2; font-weight: 400;
          border-bottom: 1px solid transparent; padding-bottom: 2px;
          transition: border-color .15s ease;
        }
        .bw-mega ul a:hover { border-bottom-color: #fff; }

        /* Feature card */
        .bw-feature-card {
          background: var(--ur-red-2);
          display: flex; flex-direction: column;
          color: #fff;
          transition: transform .15s ease;
        }
        .bw-feature-card:hover { transform: translateY(-3px); }
        .bw-feature-card .bw-img {
          aspect-ratio: 3/4; background-size: cover; background-position: center;
        }
        .bw-feature-card .bw-body { padding: 24px 24px 28px; }
        .bw-feature-card .bw-body h3 {
          font-family: var(--sans); font-weight: 800; font-size: 24px;
          margin: 0 0 12px; color: #fff; line-height: 1.1;
          text-transform: uppercase; letter-spacing: .04em;
        }
        .bw-feature-card .bw-body p { margin: 0; font-size: 17px; line-height: 1.45; color: #fff; font-weight: 400; }

        /* Hero */
        .bw-hero {
          position: relative;
          background: #222;
          color: #fff;
          overflow: hidden;
        }
        .bw-hero .bw-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(180deg,rgba(20,8,15,.35) 0%,rgba(60,10,25,.55) 60%,rgba(120,15,40,.55) 100%),
            url("https://images.unsplash.com/photo-1568667256549-094345857637?w=2400&q=80");
          background-size: cover; background-position: center;
        }
        .bw-hero-content { position: relative; z-index: 2; max-width: 1180px; margin: 0 auto; padding: 90px 36px 110px; text-align: center; }
        .bw-hero h2 {
          font-family: var(--serif); font-weight: 500; font-size: 64px; line-height: 1.02;
          margin: 0 0 16px; color: #fff; letter-spacing: -.01em;
          text-shadow: 0 2px 18px rgba(0,0,0,.35);
        }
        .bw-hero .bw-sub { font-size: 19px; color: #fbe6e9; margin: 0 auto 36px; max-width: 60ch; line-height: 1.45; }

        .bw-onesearch {
          background: #fff; color: var(--ur-text); border-radius: 6px;
          padding: 28px 32px 26px;
          box-shadow: 0 22px 60px rgba(0,0,0,.32),0 6px 18px rgba(0,0,0,.2);
          text-align: left; max-width: 1000px; margin: 0 auto;
        }
        .bw-onesearch .bw-os-heading { display: flex; align-items: baseline; gap: 10px; justify-content: space-between; margin-bottom: 14px; }
        .bw-onesearch h3 { font-family: var(--serif); font-weight: 600; font-size: 36px; color: var(--ur-text); margin: 0; line-height: 1; }
        .bw-onesearch .bw-help { color: var(--ur-muted); font-size: 13px; }
        .bw-onesearch .bw-help a { color: var(--ur-red); font-weight: 600; }
        .bw-onesearch .bw-scope { display: flex; flex-wrap: wrap; gap: 24px; margin-bottom: 14px; font-size: 14.5px; color: #3a3a3a; }
        .bw-onesearch .bw-scope label { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
        .bw-onesearch .bw-scope input { accent-color: var(--ur-red); }
        .bw-onesearch .bw-input-row { display: flex; align-items: stretch; border: 2px solid var(--ur-red); border-radius: 4px; overflow: hidden; }
        .bw-onesearch .bw-input-row input { flex: 1; border: 0; outline: 0; padding: 14px 18px; font-size: 17px; color: var(--ur-text); background: #fff; }
        .bw-onesearch .bw-input-row button {
          border: 0; background: var(--ur-red); color: #fff; padding: 0 30px;
          font-weight: 700; letter-spacing: .12em; text-transform: uppercase; font-size: 13px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .bw-onesearch .bw-input-row button:hover { background: var(--ur-red-2); }
        .bw-onesearch .bw-quick { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; font-size: 13px; color: var(--ur-muted); align-items: center; }
        .bw-onesearch .bw-quick .bw-lbl { font-weight: 800; color: #3a3a3a; letter-spacing: .12em; text-transform: uppercase; font-size: 11.5px; margin-right: 6px; }
        .bw-onesearch .bw-quick a { background: #f1ede4; color: #3a3a3a; padding: 7px 13px; border-radius: 14px; font-size: 13px; }
        .bw-onesearch .bw-quick a:hover { background: var(--ur-red); color: #fff; }

        .bw-chat-pill {
          position: absolute; right: 36px; bottom: 30px; z-index: 3;
          background: var(--ur-teal); color: #fff; padding: 14px 26px; border-radius: 999px;
          font-weight: 700; letter-spacing: .12em; text-transform: uppercase; font-size: 13px;
          box-shadow: 0 10px 30px rgba(0,0,0,.3); display: inline-flex; align-items: center; gap: 10px;
        }
        .bw-chat-pill:hover { background: #0a7a78; }

        /* Quick links */
        .bw-quicklinks { background: var(--ur-bg); padding: 44px 36px; border-top: 1px solid var(--ur-rule); }
        .bw-quicklinks-inner { max-width: 1500px; margin: 0 auto; display: grid; grid-template-columns: repeat(6,1fr); gap: 14px; }
        .bw-ql { background: #fff; border: 1px solid var(--ur-rule); padding: 24px 20px; display: flex; flex-direction: column; gap: 10px; cursor: pointer; transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease; text-decoration: none; color: inherit; }
        .bw-ql:hover { transform: translateY(-3px); box-shadow: 0 14px 28px rgba(0,0,0,.06); border-color: #d6cfbf; }
        .bw-ql .bw-icon { width: 34px; height: 34px; color: var(--ur-red); }
        .bw-ql .bw-ttl { font-family: var(--serif); font-size: 22px; font-weight: 600; color: var(--ur-text); line-height: 1.1; }
        .bw-ql .bw-desc { font-size: 13.5px; color: var(--ur-muted); line-height: 1.4; }

        /* News */
        .bw-news-row { padding: 64px 36px 80px; background: #fff; border-top: 1px solid var(--ur-rule); }
        .bw-news-inner { max-width: 1500px; margin: 0 auto; }
        .bw-section-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 28px; border-bottom: 2px solid var(--ur-red); padding-bottom: 14px; }
        .bw-section-head h3 { font-family: var(--serif); font-weight: 600; font-size: 38px; color: var(--ur-text); margin: 0; }
        .bw-section-head a.bw-more { color: var(--ur-red); font-weight: 800; letter-spacing: .1em; text-transform: uppercase; font-size: 13px; }
        .bw-news-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 32px; }
        .bw-news-card { display: flex; flex-direction: column; gap: 14px; }
        .bw-news-card .bw-thumb { aspect-ratio: 4/3; background-size: cover; background-position: center; }
        .bw-news-card .bw-tag { font-size: 11.5px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; color: var(--ur-red); }
        .bw-news-card h4 { font-family: var(--serif); font-weight: 600; font-size: 24px; line-height: 1.2; margin: 0; color: var(--ur-text); }
        .bw-news-card p { margin: 0; font-size: 15px; color: var(--ur-muted); line-height: 1.5; }

        /* Hours strip */
        .bw-hours-strip { background: var(--ur-navy); color: #fff; padding: 32px 36px; }
        .bw-hours-inner { max-width: 1500px; margin: 0 auto; display: flex; align-items: center; gap: 36px; flex-wrap: wrap; }
        .bw-hours-inner .bw-label { font-family: var(--serif); font-size: 32px; font-weight: 500; line-height: 1; }
        .bw-hours-inner .bw-grid { display: flex; flex-wrap: wrap; gap: 30px; flex: 1; font-size: 15px; }
        .bw-hours-inner .bw-grid div span { display: block; font-size: 11.5px; text-transform: uppercase; letter-spacing: .16em; color: #a8c2dd; margin-bottom: 4px; }
        .bw-hours-inner a.bw-allhours { margin-left: auto; color: #fff; border-bottom: 1.5px solid #fff; padding-bottom: 2px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; font-size: 13px; }

        /* Footer */
        footer.bw-site { background: #1b1b1b; color: #dcdcdc; padding: 56px 36px 28px; font-size: 14px; }
        footer.bw-site .bw-inner { max-width: 1500px; margin: 0 auto; display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 36px; }
        footer.bw-site h5 { font-family: var(--serif); font-size: 22px; color: #fff; margin: 0 0 14px; font-weight: 600; }
        footer.bw-site ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        footer.bw-site .bw-legal { border-top: 1px solid #333; margin-top: 36px; padding-top: 18px; display: flex; justify-content: space-between; color: #888; font-size: 12.5px; }

        .bw-nav-stage { position: relative; }

        @media (max-width: 1100px) {
          .bw-quicklinks-inner { grid-template-columns: repeat(3,1fr); }
          .bw-news-grid { grid-template-columns: 1fr 1fr; }
          footer.bw-site .bw-inner { grid-template-columns: 1fr 1fr; }
          .bw-mega.find .bw-mega-inner,.bw-mega.help .bw-mega-inner,.bw-mega.spaces .bw-mega-inner,.bw-mega.about .bw-mega-inner { grid-template-columns: 1fr 1fr; }
          .bw-hero h2 { font-size: 48px; }
          .bw-wordmark h1 { font-size: 42px; }
          .bw-mega h2 { font-size: 54px; }
        }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=Source+Sans+3:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="bw-root">
        {/* TOP UTILITY ROW */}
        <div className="bw-topbar">
          <a href="#" className="bw-brand" aria-label="University of Richmond">
            <svg className="bw-crest" viewBox="0 0 60 66" fill="none" aria-hidden="true">
              <path d="M30 2 L56 12 V32 C56 48 44 60 30 64 C16 60 4 48 4 32 V12 Z" fill="#fff" stroke="#1a2a4a" strokeWidth="2"/>
              <path d="M30 4 L54 13 V32 C54 47 43 58 30 62 V4Z" fill="#1a2a4a"/>
              <rect x="6" y="14" width="12" height="10" fill="#b3001b"/>
              <rect x="18" y="14" width="12" height="10" fill="#fff"/>
              <rect x="6" y="24" width="12" height="10" fill="#fff"/>
              <rect x="18" y="24" width="12" height="10" fill="#b3001b"/>
            </svg>
            <span className="bw-brand-name">University<em>of</em>Richmond</span>
          </a>
          <nav className="bw-util" aria-label="Utility">
            <a href="#">Apply</a>
            <a href="#">Visit</a>
            <a href="#">Give</a>
            <a href="#">Info For<span className="bw-caret"></span></a>
            <a href="#">Tools<span className="bw-caret"></span></a>
            <div className="bw-search" role="search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
              <input type="search" placeholder="Search Library & Collections…" />
            </div>
          </nav>
        </div>

        {/* LIBRARY WORDMARK */}
        <div className="bw-wordmark"><h1>Boatwright Memorial Library</h1></div>

        {/* BREADCRUMB */}
        <div className="bw-breadcrumb" aria-label="Breadcrumb">
          <div className="bw-crumb"><span>Richmond</span></div>
          <div className="bw-crumb"><span>Boatwright Memorial Library</span></div>
        </div>

        {/* PRIMARY NAV + MEGA MENUS */}
        <div className="bw-nav-stage" id="bwNavStage" ref={navStageRef}>
          <nav className="bw-primary-nav" aria-label="Primary">
            <div className="bw-item" data-menu="find">Find &amp; Borrow <span className="bw-chev"></span></div>
            <div className="bw-item" data-menu="help">Help &amp; Support <span className="bw-chev"></span></div>
            <div className="bw-item" data-menu="spaces">Libraries &amp; Spaces <span className="bw-chev"></span></div>
            <div className="bw-item" data-menu="about">About <span className="bw-chev"></span></div>
            <div className="bw-item" data-menu="account">My Account</div>
          </nav>

          {/* FIND & BORROW */}
          <div className="bw-mega find" id="bw-m-find">
            <div className="bw-mega-inner">
              <div>
                <h2>Find &amp; Borrow</h2>
                <p className="bw-lede">Boatwright's collections span print, digital, streaming, and rare materials — all searchable through OneSearch. Borrow what you need, request what we don't have, and pick it up when it's ready.</p>
                <a className="bw-cta" href="#">Start with OneSearch</a>
              </div>
              <div>
                <div className="bw-col-title">Find Materials</div>
                <ul>
                  <li><a href="#">Journal Titles</a></li>
                  <li><a href="#">Streaming Media</a></li>
                  <li><a href="#">News Sources</a></li>
                  <li><a href="#">Course Reserves</a></li>
                  <li><a href="#">Digital Collections</a></li>
                  <li><a href="#">Rare Books &amp; Archives</a></li>
                  <li><a href="#">eBooks &amp; Audiobooks</a></li>
                  <li><a href="#">Books &amp; Physical Materials</a></li>
                  <li><a href="#">Research Databases</a></li>
                  <li><a href="#">Online Reference</a></li>
                </ul>
              </div>
              <div>
                <div className="bw-col-title">Borrow &amp; Request</div>
                <ul>
                  <li><a href="#">Borrowing &amp; Renewing Policies</a></li>
                  <li><a href="#">Renew Books (My Account)</a></li>
                  <li><a href="#">Interlibrary Loan</a></li>
                  <li><a href="#">Item Retrieval</a></li>
                  <li><a href="#">Other Libraries</a></li>
                </ul>
              </div>
              <a className="bw-feature-card" href="#" aria-label="Course Reserves">
                <div className="bw-img" style={{backgroundImage:"url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&q=80')"}}></div>
                <div className="bw-body">
                  <h3>Course Reserves</h3>
                  <p>Find required and recommended readings for your classes — search by course or instructor.</p>
                </div>
              </a>
            </div>
          </div>

          {/* HELP & SUPPORT */}
          <div className="bw-mega help" id="bw-m-help">
            <div className="bw-mega-inner">
              <div>
                <h2>Help &amp; Support</h2>
                <p className="bw-lede">Talk to a librarian, book a research consultation, or browse answers to the questions we hear most. Tailored support for every member of the Richmond community.</p>
                <a className="bw-cta" href="#">Ask a Librarian</a>
              </div>
              <div>
                <div className="bw-col-title">Get Help</div>
                <ul>
                  <li><a href="#">Live Chat</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Suggestion Box</a></li>
                </ul>
                <div className="bw-col-title" style={{marginTop:'32px'}}>Services For</div>
                <ul>
                  <li><a href="#">Faculty &amp; Staff</a></li>
                  <li><a href="#">Students</a></li>
                  <li><a href="#">Alumni</a></li>
                </ul>
              </div>
              <div>
                <div className="bw-col-title">Support</div>
                <ul>
                  <li><a href="#">Getting Started With Research</a></li>
                  <li><a href="#">Research Appointments</a></li>
                  <li><a href="#">Printing</a></li>
                  <li><a href="#">Item Retrieval</a></li>
                  <li><a href="#">Accessibility</a></li>
                </ul>
              </div>
              <a className="bw-feature-card" href="#" aria-label="Chat @ Boatwright">
                <div className="bw-img" style={{backgroundImage:"url('https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80')"}}></div>
                <div className="bw-body">
                  <h3>Chat @ Boatwright</h3>
                  <p>Live help from a librarian — usually under a minute to first reply.</p>
                </div>
              </a>
            </div>
          </div>

          {/* LIBRARIES & SPACES */}
          <div className="bw-mega spaces" id="bw-m-spaces">
            <div className="bw-mega-inner">
              <div>
                <h2>Libraries &amp; Spaces</h2>
                <p className="bw-lede">Five libraries, dozens of study rooms, specialized studios, and the partners we share the building with — all under one roof at Boatwright.</p>
                <a className="bw-cta" href="#">Reserve a Room</a>
              </div>
              <div>
                <div className="bw-col-title">Our Spaces</div>
                <ul>
                  <li><a href="#">Galvin Rare Book Room</a></li>
                  <li><a href="#">Book Arts Studio</a></li>
                  <li><a href="#">Digital Scholarship Lab</a></li>
                  <li><a href="#">Parsons Music Library</a></li>
                  <li><a href="#">Facilities &amp; Classrooms</a></li>
                  <li><a href="#">Exhibitions &amp; Displays</a></li>
                  <li><a href="#">Library Maps</a></li>
                  <li><a href="#">Building Accessibility</a></li>
                </ul>
              </div>
              <div>
                <div className="bw-col-title">Library Partners</div>
                <ul>
                  <li><a href="#">Law Library</a></li>
                  <li><a href="#">Writing Center (WLC)</a></li>
                  <li><a href="#">Faculty Hub</a></li>
                  <li><a href="#">Innovation Studio</a></li>
                  <li><a href="#">University Museums</a></li>
                  <li><a href="#">University Archives (VBHS)</a></li>
                  <li><a href="#">Education Studio</a></li>
                </ul>
              </div>
              <a className="bw-feature-card" href="#" aria-label="Parsons Music Library">
                <div className="bw-img" style={{backgroundImage:"url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=900&q=80')"}}></div>
                <div className="bw-body">
                  <h3>Parsons Music Library</h3>
                  <p>Scores, recordings, listening rooms, and Modlin Center collections.</p>
                </div>
              </a>
            </div>
          </div>

          {/* ABOUT */}
          <div className="bw-mega about" id="bw-m-about">
            <div className="bw-mega-inner">
              <div>
                <h2>About</h2>
                <p className="bw-lede">Who we are, how we work, and the people who make Boatwright a hub for learning and discovery at Richmond.</p>
                <a className="bw-cta" href="#">Read Our Strategic Plan</a>
              </div>
              <div>
                <div className="bw-col-title">About the Library</div>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our Impact</a></li>
                  <li><a href="#">Policies &amp; Guidelines</a></li>
                  <li><a href="#">Student Employment</a></li>
                  <li><a href="#">Library Awards</a></li>
                  <li><a href="#">Peple Lecture</a></li>
                </ul>
              </div>
              <a className="bw-feature-card" href="#" aria-label="Hours">
                <div className="bw-img" style={{backgroundImage:"url('https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=900&q=80')",aspectRatio:'3/4'}}></div>
                <div className="bw-body">
                  <h3>Hours</h3>
                  <p>Open today 7:30 AM – 2:00 AM. See full week and exam-period schedule.</p>
                </div>
              </a>
              <a className="bw-feature-card" href="#" aria-label="Staff Directory">
                <div className="bw-img" style={{backgroundImage:"url('https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=900&q=80')",aspectRatio:'3/4'}}></div>
                <div className="bw-body">
                  <h3>Staff Directory</h3>
                  <p>Find your subject librarian and the team behind every service.</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* HERO + ONESEARCH */}
        <section className="bw-hero">
          <div className="bw-bg" aria-hidden="true"></div>
          <div className="bw-hero-content">
            <h2>Find what you need to learn, write &amp; create.</h2>
            <p className="bw-sub">Search across books, articles, archives, streaming media, and digital collections — start with OneSearch.</p>
            <div className="bw-onesearch">
              <div className="bw-os-heading">
                <h3>OneSearch</h3>
                <span className="bw-help">A single discovery layer for everything Boatwright. <a href="#">What's included?</a></span>
              </div>
              <div className="bw-scope">
                <label><input type="radio" name="bw-scope" defaultChecked /> Everything</label>
                <label><input type="radio" name="bw-scope" /> Books &amp; Media</label>
                <label><input type="radio" name="bw-scope" /> Articles</label>
                <label><input type="radio" name="bw-scope" /> Course Reserves</label>
                <label><input type="radio" name="bw-scope" /> Digital Collections</label>
              </div>
              <div className="bw-input-row">
                <input type="search" placeholder="Search books, articles, journals, archives…" />
                <button>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
                  Search
                </button>
              </div>
              <div className="bw-quick">
                <span className="bw-lbl">Try:</span>
                <a href="#">Journal Titles</a>
                <a href="#">Research Databases</a>
                <a href="#">Course Reserves</a>
                <a href="#">Streaming Media</a>
                <a href="#">Rare Books &amp; Archives</a>
              </div>
            </div>
          </div>
          <a className="bw-chat-pill" href="#">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15a4 4 0 0 1-4 4H8l-5 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
            Chat @ Boatwright
          </a>
        </section>

        {/* QUICK LINKS */}
        <section className="bw-quicklinks">
          <div className="bw-quicklinks-inner">
            <a className="bw-ql" href="#">
              <svg className="bw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h12a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z"/><path d="M4 4v13a3 3 0 0 0 3 3"/></svg>
              <div className="bw-ttl">Course Reserves</div>
              <div className="bw-desc">Required readings for your classes.</div>
            </a>
            <a className="bw-ql" href="#">
              <svg className="bw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18"/><path d="M8 4v4"/></svg>
              <div className="bw-ttl">Reserve a Room</div>
              <div className="bw-desc">Group study and private rooms.</div>
            </a>
            <a className="bw-ql" href="#">
              <svg className="bw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3v18"/></svg>
              <div className="bw-ttl">Research Databases</div>
              <div className="bw-desc">A–Z list across every discipline.</div>
            </a>
            <a className="bw-ql" href="#">
              <svg className="bw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7h18l-2 12H5z"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
              <div className="bw-ttl">Interlibrary Loan</div>
              <div className="bw-desc">Request what we don't own.</div>
            </a>
            <a className="bw-ql" href="#">
              <svg className="bw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V5a2 2 0 0 1 2-2h10l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M14 3v6h6"/></svg>
              <div className="bw-ttl">Citation Help</div>
              <div className="bw-desc">Style guides &amp; Zotero support.</div>
            </a>
            <a className="bw-ql" href="#">
              <svg className="bw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <div className="bw-ttl">Hours</div>
              <div className="bw-desc">Open today 7:30 AM – 2:00 AM</div>
            </a>
          </div>
        </section>

        {/* NEWS */}
        <section className="bw-news-row">
          <div className="bw-news-inner">
            <div className="bw-section-head">
              <h3>News &amp; Featured Collections</h3>
              <a className="bw-more" href="#">All News →</a>
            </div>
            <div className="bw-news-grid">
              <article className="bw-news-card">
                <div className="bw-thumb" style={{backgroundImage:"url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=900&q=80')"}}></div>
                <span className="bw-tag">Exhibition</span>
                <h4>Letterpress &amp; the Modern Book Arts Studio</h4>
                <p>A new term-long show on letterpress, papermaking, and zines from the Book Arts Studio collective.</p>
              </article>
              <article className="bw-news-card">
                <div className="bw-thumb" style={{backgroundImage:"url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=900&q=80')"}}></div>
                <span className="bw-tag">Digital Scholarship</span>
                <h4>Mapping Richmond: A Student-Built Atlas</h4>
                <p>Undergraduates partner with the DSL to build interactive historical maps of the James River corridor.</p>
              </article>
              <article className="bw-news-card">
                <div className="bw-thumb" style={{backgroundImage:"url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80')"}}></div>
                <span className="bw-tag">Galvin Rare Book Room</span>
                <h4>Recent Acquisitions From the Galvin Collection</h4>
                <p>Six new arrivals — including a 17th-century botanical herbal — now open for reading-room use.</p>
              </article>
            </div>
          </div>
        </section>

        {/* HOURS */}
        <section className="bw-hours-strip">
          <div className="bw-hours-inner">
            <div className="bw-label">This week's hours</div>
            <div className="bw-grid">
              <div><span>Mon–Thu</span>7:30 AM – 2:00 AM</div>
              <div><span>Friday</span>7:30 AM – 10:00 PM</div>
              <div><span>Saturday</span>10:00 AM – 10:00 PM</div>
              <div><span>Sunday</span>10:00 AM – 2:00 AM</div>
              <div><span>Parsons Music</span>9:00 AM – 11:00 PM</div>
            </div>
            <a className="bw-allhours" href="#">All Library Hours →</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bw-site">
          <div className="bw-inner">
            <div>
              <h5>Boatwright Memorial Library</h5>
              <p style={{margin:'0 0 14px',color:'#bdbdbd',lineHeight:1.55,maxWidth:'34ch'}}>28 Westhampton Way, University of Richmond, VA 23173 · (804) 289-8455 · boatwright@richmond.edu</p>
              <ul>
                <li><a href="#">Directions &amp; Parking</a></li>
                <li><a href="#">Building Accessibility</a></li>
                <li><a href="#">Give to the Library</a></li>
              </ul>
            </div>
            <div>
              <h5>Find</h5>
              <ul>
                <li><a href="#">OneSearch</a></li>
                <li><a href="#">Research Databases</a></li>
                <li><a href="#">Journal Titles</a></li>
                <li><a href="#">Course Reserves</a></li>
                <li><a href="#">Digital Collections</a></li>
              </ul>
            </div>
            <div>
              <h5>Help</h5>
              <ul>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Research Appointments</a></li>
                <li><a href="#">Interlibrary Loan</a></li>
                <li><a href="#">Suggestion Box</a></li>
              </ul>
            </div>
            <div>
              <h5>Spaces</h5>
              <ul>
                <li><a href="#">Galvin Rare Book Room</a></li>
                <li><a href="#">Digital Scholarship Lab</a></li>
                <li><a href="#">Book Arts Studio</a></li>
                <li><a href="#">Parsons Music Library</a></li>
                <li><a href="#">Library Maps</a></li>
              </ul>
            </div>
          </div>
          <div className="bw-legal">
            <div>© 2026 University of Richmond · All Rights Reserved</div>
            <div><a href="#">Privacy</a> · <a href="#">Accessibility</a> · <a href="#">Site Index</a></div>
          </div>
        </footer>
      </div>
    </>
  );
}
