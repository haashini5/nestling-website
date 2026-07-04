import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, CheckCircle, HeartPulse, LineChart, FileScan, MessageCircle, Menu, Sparkles, Bell, ChevronRight } from "lucide-react";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');`;

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;background:#fff;color:#1e2d5a;-webkit-font-smoothing:antialiased}
a{text-decoration:none;color:inherit}

.nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,0.95);backdrop-filter:blur(16px);border-bottom:1px solid #eaeef5}
.nav-i{max-width:1200px;margin:0 auto;padding:0 48px;height:68px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{display:flex;align-items:center;gap:10px}
.nav-icon{width:38px;height:38px;border-radius:11px;background:#1e2d5a;display:flex;align-items:center;justify-content:center}
.nav-name{font-size:18px;font-weight:800;color:#1e2d5a;letter-spacing:-0.03em}
.nav-links{display:flex;gap:36px}
.nav-links a{font-size:14px;font-weight:500;color:#4a5a7a;transition:color .15s}
.nav-links a:hover{color:#1e2d5a}
.nav-cta{background:#1e2d5a;color:#fff;font-size:14px;font-weight:700;padding:11px 26px;border-radius:10px;transition:opacity .15s}
.nav-cta:hover{opacity:.88}
.nav-mob{display:none;background:none;border:none;cursor:pointer;color:#4a5a7a}

.hero{background:linear-gradient(135deg,#f0f5ff 0%,#f5f0ff 50%,#eaf5fd 100%);padding:80px 48px 0;overflow:hidden;border-bottom:1px solid #e4eaf5}
.hero-i{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:flex-end;min-height:680px}
.hero-left{padding-bottom:80px}
.hero-h1{font-size:clamp(44px,5.5vw,72px);font-weight:900;line-height:1.03;letter-spacing:-0.045em;color:#1e2d5a;margin-bottom:24px}
.hero-body{font-size:18px;font-weight:400;line-height:1.8;color:#5a6a8a;max-width:480px;margin-bottom:40px}
.hero-btns{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:56px}
.btn-navy{background:#1e2d5a;color:#fff;font-size:15px;font-weight:700;padding:15px 32px;border-radius:11px;display:inline-flex;align-items:center;gap:9px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(30,45,90,0.2);transition:all .15s}
.btn-navy:hover{transform:translateY(-1px);box-shadow:0 8px 28px rgba(30,45,90,0.28)}
.btn-outline{background:#fff;color:#1e2d5a;font-size:15px;font-weight:600;padding:15px 28px;border-radius:11px;display:inline-flex;align-items:center;gap:8px;border:1.5px solid #c8d8ea;transition:all .15s}
.btn-outline:hover{border-color:#7b9fd4;background:#f5f9fd}
.hero-pills{display:flex;gap:10px;flex-wrap:wrap}
.feat-pill{display:flex;flex-direction:column;align-items:center;background:#fff;border:1px solid #e0eaf5;border-radius:14px;padding:16px 20px;min-width:110px;box-shadow:0 2px 8px rgba(30,45,90,0.05)}
.fp-icon{font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#1e2d5a;margin-bottom:3px}
.fp-label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#94a8c4}
.hero-right{display:flex;align-items:flex-end;justify-content:center}

.ticker{overflow:hidden;border-top:1px solid #e8eef5;border-bottom:1px solid #e8eef5;background:#f8faff;padding:12px 0}
.ticker-t{display:flex;width:max-content;animation:tick 32s linear infinite}
.ti{padding:0 24px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#7b9fd4;white-space:nowrap;display:flex;align-items:center;gap:16px}
.ti::after{content:'·';font-size:18px;color:#b4c8e0}
@keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}

.s-why{padding:100px 48px;background:#fff;border-bottom:1px solid #eaeef5}
.why-i{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.why-quote{font-size:clamp(22px,2.8vw,32px);font-weight:300;font-style:italic;line-height:1.55;color:#1e2d5a;letter-spacing:-0.02em;border-left:3px solid #b4a8d3;padding-left:28px}
.why-quote strong{font-weight:800;font-style:normal}
.why-attr{margin-top:18px;font-size:13px;color:#7a8aaa;padding-left:28px}
.why-attr span{color:#7b9fd4;font-weight:600}
.why-label{font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#7b9fd4;margin-bottom:16px}
.why-h2{font-size:clamp(28px,3.5vw,44px);font-weight:800;letter-spacing:-0.04em;line-height:1.08;color:#1e2d5a;margin-bottom:18px}
.why-body{font-size:16px;font-weight:400;line-height:1.85;color:#5a6a8a}

.s-feat{padding:100px 48px;background:linear-gradient(180deg,#f5f0ff 0%,#f0f5ff 100%);border-bottom:1px solid #e4eaf5}
.feat-i{max-width:1200px;margin:0 auto}
.feat-top{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:end;margin-bottom:56px}
.feat-label{font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#7b9fd4;margin-bottom:14px}
.feat-h2{font-size:clamp(28px,3.5vw,48px);font-weight:800;letter-spacing:-0.04em;line-height:1.08;color:#1e2d5a}
.feat-sub{font-size:16px;font-weight:400;line-height:1.85;color:#5a6a8a;align-self:flex-end}
.feat-grid{display:grid;grid-template-columns:1fr 1fr;gap:3px;background:#ddd8f0;border-radius:20px;overflow:hidden}
.feat-card{background:#fff;padding:44px 40px;transition:background .2s}
.feat-card:hover{background:#fdfcff}
.feat-ico{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#eaf3f8,#f0eeff);display:flex;align-items:center;justify-content:center;margin-bottom:22px;color:#3a6aaa}
.feat-t{font-size:19px;font-weight:800;color:#1e2d5a;margin-bottom:10px;letter-spacing:-0.025em}
.feat-b{font-size:15px;line-height:1.82;color:#5a6a8a}

.s-stats{background:#1e2d5a;padding:80px 48px}
.stats-i{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr)}
.stat-c{padding:0 48px;text-align:center;border-right:1px solid rgba(255,255,255,0.08)}
.stat-c:last-child{border:none}
.stat-n{font-size:clamp(48px,5.5vw,68px);font-weight:900;letter-spacing:-0.05em;line-height:1;color:#fff;margin-bottom:12px}
.stat-n em{font-style:normal;color:#7b9fd4}
.stat-cap{font-size:14px;color:rgba(255,255,255,0.42);line-height:1.7}

.s-who{padding:100px 48px;background:#fff;border-bottom:1px solid #eaeef5}
.who-i{max-width:1200px;margin:0 auto}
.who-top{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:end;margin-bottom:56px}
.who-h2{font-size:clamp(28px,3.5vw,48px);font-weight:800;letter-spacing:-0.04em;line-height:1.08;color:#1e2d5a}
.who-sub{font-size:16px;font-weight:400;line-height:1.85;color:#5a6a8a;align-self:flex-end}
.who-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:3px;background:#e4eaf5;border-radius:20px;overflow:hidden}
.who-card{background:#fff;padding:32px 28px;position:relative;overflow:hidden}
.who-card::after{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--accent)}
.who-num{font-size:44px;font-weight:900;color:#f0f4ff;letter-spacing:-0.05em;line-height:1;margin-bottom:14px}
.who-t{font-size:16px;font-weight:700;color:#1e2d5a;margin-bottom:7px}
.who-d{font-size:14px;color:#5a6a8a;line-height:1.8}
.who-quote-wrap{margin-top:40px;background:linear-gradient(135deg,#f5f0ff,#eaf5fd);border-radius:18px;padding:40px 44px;display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;border:1px solid #e0d8f0}
.wq-mark{font-size:72px;line-height:0.7;color:#c8b8e8;font-family:Georgia,serif;margin-bottom:14px}
.wq-txt{font-size:19px;font-weight:400;font-style:italic;color:#1e2d5a;line-height:1.7;letter-spacing:-0.01em}
.wq-txt em{font-style:normal;font-weight:700}
.wq-right{min-width:180px;text-align:center}
.wq-av{width:52px;height:52px;background:linear-gradient(135deg,#b4c8e8,#c4b4d8);border-radius:50%;margin:0 auto 10px}
.wq-nm{font-size:14px;font-weight:700;color:#1e2d5a}
.wq-role{font-size:12px;color:#7b9fd4;margin-top:2px;font-weight:500;line-height:1.5}
.wq-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;justify-content:center}
.wq-tag{background:#fff;border:1px solid #d8e4f0;color:#3a6090;font-size:11px;font-weight:600;padding:4px 10px;border-radius:6px}

.s-wl{background:linear-gradient(135deg,#1e2d5a 0%,#2a3a70 100%);padding:100px 48px}
.wl-i{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.wl-lbl{font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(180,200,228,0.6);margin-bottom:16px}
.wl-h2{font-size:clamp(30px,3.8vw,52px);font-weight:800;letter-spacing:-0.04em;line-height:1.08;color:#fff;margin-bottom:18px}
.wl-body{font-size:16px;color:rgba(255,255,255,0.5);line-height:1.85}
.wl-checks{display:flex;flex-direction:column;gap:12px;margin-top:30px}
.wlc{display:flex;align-items:center;gap:10px;font-size:14px;color:rgba(255,255,255,0.5);font-style:italic}
.wlc svg{color:#7b9fd4;flex-shrink:0}
.form-box{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:18px;padding:36px}
.f-lbl{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.3);margin-bottom:10px;display:block}
.f-row{display:flex;gap:8px}
.f-in{flex:1;height:50px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:0 18px;font-size:15px;font-family:'Inter',sans-serif;color:#fff;outline:none;transition:all .15s}
.f-in::placeholder{color:rgba(255,255,255,0.22)}
.f-in:focus{border-color:rgba(123,159,212,0.6);background:rgba(255,255,255,0.1)}
.f-btn{height:50px;background:#7b9fd4;color:#fff;border:none;border-radius:10px;padding:0 28px;font-size:14px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;white-space:nowrap;transition:opacity .15s;box-shadow:0 4px 16px rgba(123,159,212,0.3)}
.f-btn:hover{opacity:.88}
.f-note{font-size:12px;color:rgba(255,255,255,0.25);margin-top:12px}
.f-note a{color:rgba(123,159,212,0.7)}
.f-ok{text-align:center;padding:20px 0}
.f-ok-t{font-size:21px;font-weight:800;color:#fff;margin:14px 0 8px;letter-spacing:-0.03em}
.f-ok-s{font-size:14px;color:rgba(255,255,255,0.4);line-height:1.75}

.footer{background:#111828;padding:36px 48px;border-top:1px solid rgba(255,255,255,0.05)}
.foot-i{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.foot-name{font-size:16px;font-weight:800;color:#fff;letter-spacing:-0.02em}
.foot-tag{font-size:11px;color:rgba(255,255,255,0.25);letter-spacing:0.1em;text-transform:uppercase;margin-top:2px}
.foot-copy{font-size:12px;color:rgba(255,255,255,0.2)}

@media(max-width:960px){
  .nav-links,.nav-cta{display:none}
  .nav-mob{display:flex}
  .nav-i,.hero,.s-why,.s-feat,.s-stats,.s-who,.s-wl,.footer{padding-left:24px;padding-right:24px}
  .hero-i{grid-template-columns:1fr;min-height:auto;padding-bottom:0}
  .hero-left{padding-bottom:48px}
  .hero-right{display:none}
  .why-i,.feat-top,.who-top,.wl-i{grid-template-columns:1fr;gap:32px}
  .feat-grid,.who-grid{grid-template-columns:1fr 1fr}
  .stats-i{grid-template-columns:1fr}
  .stat-c{padding:28px 0;border-right:none;border-bottom:1px solid rgba(255,255,255,0.07)}
  .stat-c:last-child{border-bottom:none}
  .who-quote-wrap{grid-template-columns:1fr;gap:24px}
  .foot-i{flex-direction:column;gap:12px;text-align:center}
}
@media(max-width:600px){
  .feat-grid,.who-grid{grid-template-columns:1fr}
}
`;

// ─── PHONE CONTENT (shared between small scanner and big hero) ────
function PhoneContent({ scale = 1 }) {
  const s = scale;
  return (
    <>
      {/* nav bar */}
      <div style={{background:'#1e2d5a',padding:`${12*s}px ${14*s}px ${10*s}px`,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:6*s}}>
          <div style={{width:20*s,height:20*s,borderRadius:6*s,background:'linear-gradient(135deg,#7b9fd4,#b4a8d3)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width={10*s} height={10*s} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <span style={{fontSize:12*s,fontWeight:700,color:'#fff',letterSpacing:'-0.01em'}}>Nestling</span>
        </div>
        <div style={{background:'#eaf7f0',color:'#1a7a4a',fontSize:8*s,fontWeight:700,padding:`${3*s}px ${7*s}px`,borderRadius:10*s,border:'1px solid #c0e8d0'}}>✓ Stable</div>
      </div>

      <div style={{padding:10*s,background:'#f0f4fa'}}>
        {/* baby card */}
        <div style={{background:'#fff',borderRadius:12*s,padding:10*s,marginBottom:8*s,textAlign:'center',boxShadow:'0 2px 8px rgba(30,45,90,0.06)'}}>
          <div style={{fontSize:20*s,marginBottom:4*s}}>🌱</div>
          <div style={{fontSize:12*s,fontWeight:800,color:'#1e2d5a',letterSpacing:'-0.02em'}}>Nivi</div>
          <div style={{fontSize:8*s,color:'#7a8aaa',marginTop:1}}>Born Sep 10 · 33w · Adj 7w 1d</div>
        </div>
        {/* today summary */}
        <div style={{fontSize:9*s,fontWeight:700,color:'#1e2d5a',marginBottom:6*s,textTransform:'uppercase',letterSpacing:'0.08em'}}>Today's Summary</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:5*s,marginBottom:8*s}}>
          {[{type:'Feeding',val:'7 feeds'},{type:'Sleep',val:'13.2 hr'},{type:'Diapers',val:'Not logged'}].map(s2=>(
            <div key={s2.type} style={{background:'#fff',borderRadius:10*s,padding:`${9*s}px ${6*s}px`,boxShadow:'0 2px 6px rgba(30,45,90,0.05)',textAlign:'center'}}>
              <div style={{fontSize:7*s,fontWeight:600,color:'#7a8aaa',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:3*s}}>{s2.type}</div>
              <div style={{fontSize:11*s,fontWeight:800,color:'#1e2d5a',letterSpacing:'-0.02em'}}>{s2.val}</div>
            </div>
          ))}
        </div>
        {/* OCR result cards */}
        <div style={{display:'flex',flexDirection:'column',gap:5*s}}>
          {[
            {bg:'#f0eeff',bc:'#ddd8f0',icon:'💊',lbl:'Medications',txt:'Iron 1mL × 2/day · Vit D daily'},
            {bg:'#fff8ed',bc:'#f0ddb8',icon:'🍼',lbl:'Next feed',txt:'55mL fortified · Due 11:50 AM'},
            {bg:'#eaf7f0',bc:'#c0e8d0',icon:'📅',lbl:'Cardiology',txt:'Nov 28 · PFO surveillance'},
          ].map(c=>(
            <div key={c.lbl} style={{background:c.bg,border:`1px solid ${c.bc}`,borderRadius:8*s,padding:`${7*s}px ${9*s}px`,display:'flex',alignItems:'center',gap:7*s}}>
              <span style={{fontSize:12*s}}>{c.icon}</span>
              <div>
                <div style={{fontSize:8*s,fontWeight:700,color:'#1e2d5a'}}>{c.lbl}</div>
                <div style={{fontSize:7*s,color:'#4a5a7a',marginTop:1}}>{c.txt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── PHONE SHELL (reusable at any size) ───────────────────────────
function PhoneShell({ width, children, showContent = true }) {
  const r = width / 200; // scale ratio vs base 200px wide
  return (
    <div style={{
      width,
      background:'linear-gradient(160deg,#1a1a2e 0%,#12121f 100%)',
      borderRadius:36*r,
      padding:`${10*r}px ${8*r}px ${8*r}px`,
      boxShadow:`0 ${32*r}px ${80*r}px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)`,
      flexShrink:0,
    }}>
      {/* dynamic island */}
      <div style={{
        width:60*r,height:18*r,background:'#000',borderRadius:12*r,
        margin:`0 auto ${8*r}px`,display:'flex',alignItems:'center',justifyContent:'center',gap:5*r,
      }}>
        <div style={{width:6*r,height:6*r,borderRadius:'50%',background:'#1a1a2e',border:'1px solid #333'}}/>
        <div style={{width:20*r,height:5*r,borderRadius:3*r,background:'#1a1a2e',border:'1px solid #333'}}/>
      </div>
      {/* screen */}
      <div style={{background:'#f0f4fa',borderRadius:26*r,overflow:'hidden'}}>
        {showContent && <PhoneContent scale={r}/>}
      </div>
      {/* home bar */}
      <div style={{width:60*r,height:3*r,background:'rgba(255,255,255,0.18)',borderRadius:2*r,margin:`${7*r}px auto ${2*r}px`}}/>
    </div>
  );
}

// ─── PRINTER + PHONE SCENE ────────────────────────────────────────
function PrinterScene() {
  const outerRef = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const totalH = el.offsetHeight - window.innerHeight;
      const prog = Math.max(0, Math.min(1, -el.getBoundingClientRect().top / totalH));
      setP(prog);
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const printP = Math.min(1, p / 0.45);
  const phoneP = Math.max(0, Math.min(1, (p-0.45)/0.2));
  const scanP  = Math.max(0, Math.min(1, (p-0.55)/0.15));
  const ocrP   = Math.max(0, Math.min(1, (p-0.65)/0.2));
  const appP   = Math.max(0, Math.min(1, (p-0.82)/0.18));

  const linesVisible = Math.ceil(printP * 22);
  const paperHeight  = Math.max(0, printP * 220);
  // phone grows from 200→290 as appP goes 0→1
  const phoneWidth = 200 + appP * 90;

  const statusColor = p < 0.45 ? '#4ade80' : p < 0.65 ? '#f59e0b' : p < 0.85 ? '#a78bfa' : '#7b9fd4';
  const statusGlow  = p < 0.45 ? 'rgba(74,222,128,0.9)' : p < 0.65 ? 'rgba(245,158,11,0.9)' : p < 0.85 ? 'rgba(167,139,250,0.9)' : 'rgba(123,159,212,0.9)';
  const phaseLabel  = p < 0.45 ? 'Printing discharge summary...' : p < 0.65 ? 'Point camera at document' : p < 0.85 ? 'Scanning with Nestling OCR...' : '✦ Translated by Nestling';

  return (
    <div ref={outerRef} style={{position:'relative', height:'420vh'}}>
      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes bob{0%,100%{transform:rotate(45deg) translateY(0)}50%{transform:rotate(45deg) translateY(5px)}}
      `}</style>

      <div style={{
        position:'sticky', top:0, height:'100vh',
        background:'linear-gradient(160deg,#e8ecf5 0%,#edf0f8 100%)',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start',
        overflow:'hidden', paddingTop:72,
      }}>
        {/* progress bar */}
        <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:'#dde4f0',zIndex:30}}>
          <div style={{height:'100%',background:'linear-gradient(90deg,#7b9fd4,#b4a8d3)',width:`${p*100}%`,transition:'width 0.06s'}}/>
        </div>

        <div style={{marginTop:32,fontSize:11,fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:'#7b9fd4',opacity:p>0.02?1:0,transition:'opacity 0.4s',minHeight:18}}>
          {phaseLabel}
        </div>

        <div style={{marginTop:28,display:'flex',alignItems:'flex-start',justifyContent:'center',gap:40,width:'100%',maxWidth:960,padding:'0 24px'}}>

          {/* PRINTER + PAPER */}
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0,position:'relative'}}>
            {printP > 0 && (
              <div style={{position:'absolute',top:152,left:'50%',transform:'translateX(calc(-50% - 38px))',width:176,height:Math.min(paperHeight,200),zIndex:11}}>
                <div style={{height:'100%',background:'linear-gradient(180deg,#fefefe,#f9f9f7)',borderLeft:'1px solid #d0d8e8',borderRight:'1px solid #d0d8e8',borderBottom:'2px solid #c0c8da',boxShadow:'3px 6px 20px rgba(30,45,90,0.14)',position:'relative',overflow:'hidden'}}>
                  <div style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:1,backgroundImage:'repeating-linear-gradient(180deg,transparent,transparent 18px,rgba(30,45,90,0.025) 18px,rgba(30,45,90,0.025) 19px)'}}/>
                  {phoneP > 0.5 && scanP < 1 && (
                    <div style={{position:'absolute',left:0,right:0,height:3,zIndex:8,background:'linear-gradient(90deg,transparent,rgba(123,159,212,0.9),rgba(180,168,211,1),rgba(123,159,212,0.9),transparent)',top:`${scanP*90}%`,boxShadow:'0 0 12px rgba(123,159,212,0.6)'}}/>
                  )}
                  {ocrP > 0 && ocrP < 1 && [...Array(8)].map((_,i)=>(
                    <div key={i} style={{position:'absolute',left:`${10+(i%3)*5}%`,right:`${8+(i%4)*4}%`,height:7,top:`${8+i*10}%`,background:'rgba(123,159,212,0.18)',border:'1px solid rgba(123,159,212,0.4)',borderRadius:2,zIndex:6,opacity:Math.sin(ocrP*Math.PI+i)>0?0.9:0,transition:'opacity 0.1s'}}/>
                  ))}
                  <div style={{position:'relative',zIndex:3,padding:'10px 12px 14px',opacity:1-ocrP,transition:'opacity 0.4s',fontFamily:"'Courier New',Courier,monospace"}}>
                    {linesVisible >= 1 && (
                      <div style={{borderBottom:'1.5px solid #1e2d5a',paddingBottom:5,marginBottom:5,display:'flex',justifyContent:'space-between'}}>
                        <div>
                          <div style={{fontSize:6,fontWeight:700,color:'#1e2d5a',textTransform:'uppercase',letterSpacing:'0.05em'}}>Children's Regional Medical Center</div>
                          <div style={{fontSize:5.5,color:'#6a7a9a',marginTop:1}}>NICU — Level IV</div>
                        </div>
                        <div style={{textAlign:'right'}}>
                          <div style={{fontSize:6,fontWeight:700,color:'#1e2d5a',textTransform:'uppercase'}}>Discharge Summary</div>
                          <div style={{fontSize:5.5,color:'#6a7a9a',marginTop:1}}>Nov 14, 2025</div>
                        </div>
                      </div>
                    )}
                    {linesVisible >= 2 && (
                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:3,background:'#f5f7fc',borderRadius:2,padding:'4px 5px',marginBottom:5}}>
                        {[['PATIENT','Nivi Patel'],['DOB/GA','Sep 10 · 33w'],['WT','2,340g']].map(([l,v])=>(
                          <div key={l}><div style={{fontSize:4.5,fontWeight:700,textTransform:'uppercase',color:'#8a9ac0'}}>{l}</div><div style={{fontSize:6,fontWeight:700,color:'#1e2d5a',marginTop:1}}>{v}</div></div>
                        ))}
                      </div>
                    )}
                    {[
                      {s:'DIAGNOSES',lines:['• Prematurity NEC (P07.39) — 33+0w','• Resp distress syndrome, resolved','• Feeding difficulty, preterm']},
                      {s:'MEDICATIONS',lines:['• Ferrous sulfate 1mL PO BID','• Vitamin D3 400IU daily','• Caffeine citrate — DISCONTINUED']},
                      {s:'FEEDING',lines:['CRITICAL: Fortify BM to 24 kcal/oz','Feed q2.5-3h · ≥150mL/kg/day','⚠ Wt drop >30g → call NICU Fellow']},
                      {s:'FOLLOW-UPS',lines:['• Neonatology: 48-72h','• Cardiology: 3wk (PFO)','• Ophthalmology: 4-6wk']},
                    ].reduce((acc,section,si)=>{
                      const start=3+acc.count; acc.count+=1+section.lines.length;
                      if(linesVisible>=start) acc.els.push(<div key={`s${si}`} style={{fontSize:5,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#1e2d5a',borderBottom:'1px solid #e4eaf5',paddingBottom:2,marginBottom:2,marginTop:6}}>{section.s}</div>);
                      section.lines.forEach((line,li)=>{
                        if(linesVisible>=start+1+li){
                          const w=line.startsWith('⚠')||line.startsWith('CRITICAL');
                          acc.els.push(<div key={`l${si}-${li}`} style={{fontSize:6,lineHeight:1.6,marginBottom:1,color:w?'#b84020':'#3a4a6a',fontWeight:w?700:400,background:w?'#fff4f0':'transparent',padding:w?'1px 3px':'0'}}>{line}</div>);
                        }
                      });
                      return acc;
                    },{els:[],count:0}).els}
                  </div>
                </div>
              </div>
            )}

            <div style={{position:'relative',zIndex:10}}>
              <svg width="320" height="220" viewBox="0 0 320 220" fill="none">
                <defs>
                  <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e4eaf6"/><stop offset="100%" stopColor="#c4cedd"/></linearGradient>
                  <linearGradient id="sideGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#b8c4d8"/><stop offset="100%" stopColor="#a0aec0"/></linearGradient>
                  <linearGradient id="topGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0f4fc"/><stop offset="100%" stopColor="#dde4f0"/></linearGradient>
                  <linearGradient id="trayGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c8d4e8"/><stop offset="100%" stopColor="#b0bcd4"/></linearGradient>
                  <linearGradient id="outTrayGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c0cce0"/><stop offset="100%" stopColor="#a8b8cc"/></linearGradient>
                </defs>
                <rect x="22" y="72" width="240" height="110" rx="12" fill="url(#bodyGrad)"/>
                <rect x="22" y="72" width="240" height="18" rx="12" fill="rgba(255,255,255,0.18)"/>
                <path d="M262 78 L284 62 L284 178 L262 182 Z" fill="url(#sideGrad)"/>
                <path d="M22 72 L44 56 L284 56 L262 72 Z" fill="url(#topGrad)"/>
                <rect x="88" y="30" width="138" height="34" rx="5" fill="url(#trayGrad)"/>
                <rect x="88" y="30" width="138" height="10" rx="5" fill="rgba(255,255,255,0.2)"/>
                <path d="M226 30 L240 22 L240 56 L226 64 Z" fill="#a8b8cc"/>
                <path d="M88 30 L102 22 L240 22 L226 30 Z" fill="#d8e4f4"/>
                <rect x="100" y="6" width="108" height="36" rx="3" fill="#fefefe" stroke="#ccd4e4" strokeWidth="1.5"/>
                <rect x="106" y="6" width="96" height="34" rx="2" fill="#f8f8f8" stroke="#d4dce8" strokeWidth="0.5"/>
                {[12,18,24].map(y=><rect key={y} x="112" y={y} width="66" height="1.5" rx="0.75" fill="rgba(30,45,90,0.06)"/>)}
                <rect x="34" y="148" width="176" height="12" rx="3" fill="#0d1424"/>
                <rect x="34" y="148" width="176" height="4" rx="3" fill="rgba(0,0,0,0.5)"/>
                {printP > 0.02 && <rect x="50" y="152" width="144" height="3" rx="1" fill="#fefefe" opacity={Math.min(1,printP*4)}/>}
                <path d="M26 160 L34 160 L210 160 L220 172 L220 182 L14 182 L14 172 Z" fill="url(#outTrayGrad)"/>
                <path d="M26 160 L220 160 L220 163 L26 163 Z" fill="rgba(0,0,0,0.12)"/>
                <rect x="14" y="180" width="206" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>
                <path d="M220 160 L234 152 L234 174 L220 182 Z" fill="#9aaabf"/>
                <rect x="192" y="84" width="58" height="52" rx="7" fill="rgba(0,0,0,0.12)"/>
                <rect x="196" y="89" width="34" height="18" rx="3" fill="#08101e"/>
                <rect x="198" y="91" width="30" height="14" rx="2" fill="#0f2818"/>
                <rect x="200" y="94" width="18" height="2" rx="1" fill="rgba(80,220,120,0.75)"/>
                <text x="200" y="104" fontSize="4.5" fill="rgba(80,220,120,0.85)" fontFamily="Courier New" fontWeight="700">{Math.round(printP*100)}%</text>
                <circle cx="225" cy="96" r="4" fill={statusColor} style={{filter:`drop-shadow(0 0 5px ${statusGlow})`}}/>
                {[[197,113],[207,113],[217,113],[197,121],[207,121],[217,121]].map(([bx,by],i)=>(
                  <rect key={i} x={bx} y={by} width="7" height="6" rx="2" fill={i===0?'rgba(123,159,212,0.6)':'rgba(255,255,255,0.14)'}/>
                ))}
                {[0,1,2,3,4,5].map(i=><rect key={i} x={50+i*14} y={60} width="9" height="2.5" rx="1.25" fill="rgba(0,0,0,0.15)"/>)}
                <rect x="28" y="96" width="16" height="30" rx="3" fill="rgba(0,0,0,0.12)"/>
                <rect x="31" y="101" width="10" height="7" rx="1.5" fill="#0d1424"/>
                <rect x="22" y="72" width="2" height="110" rx="1" fill="rgba(255,255,255,0.2)"/>
                <rect x="260" y="72" width="2" height="110" rx="1" fill="rgba(0,0,0,0.1)"/>
                <rect x="22" y="72" width="240" height="1.5" fill="rgba(255,255,255,0.3)"/>
              </svg>
            </div>
          </div>

          {/* PHONE — slides in, grows, shows app */}
          <div style={{
            flexShrink:0,
            opacity: phoneP,
            transform: `translateX(${(1-phoneP)*100}px)`,
            transition: 'transform 0.05s, opacity 0.05s',
            alignSelf: 'center',
          }}>
            <div style={{position:'relative', width: phoneWidth}}>
              {/* camera viewfinder overlay — fades out as app appears */}
              {appP < 0.95 && (
                <div style={{
                  position:'absolute', inset:0, zIndex:20,
                  background:'rgba(8,10,20,0.88)',
                  borderRadius: 36*(phoneWidth/200),
                  opacity: Math.max(0, 1 - appP * 1.4),
                  overflow:'hidden',
                  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start',
                  paddingTop: 36*(phoneWidth/200),
                }}>
                  <div style={{fontSize:8*(phoneWidth/200),color:'rgba(255,255,255,0.5)',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:12*(phoneWidth/200)}}>SCAN</div>
                  <div style={{width:'72%', height:150*(phoneWidth/200), position:'relative', marginBottom:10*(phoneWidth/200)}}>
                    {[{top:0,left:0},{top:0,right:0},{bottom:0,left:0},{bottom:0,right:0}].map((pos,i)=>(
                      <div key={i} style={{position:'absolute',width:14*(phoneWidth/200),height:14*(phoneWidth/200),borderTop:i<2?'2px solid #7b9fd4':'none',borderBottom:i>=2?'2px solid #7b9fd4':'none',borderLeft:i===0||i===2?'2px solid #7b9fd4':'none',borderRight:i===1||i===3?'2px solid #7b9fd4':'none',...pos}}/>
                    ))}
                    <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',padding:8,gap:3}}>
                      {[...Array(8)].map((_,i)=>(
                        <div key={i} style={{height:4,background:'rgba(255,255,255,0.07)',borderRadius:1,width:`${55+i*5}%`}}/>
                      ))}
                    </div>
                    {scanP > 0 && scanP < 1 && (
                      <div style={{position:'absolute',left:0,right:0,height:2,top:`${scanP*95}%`,background:'linear-gradient(90deg,transparent,rgba(123,159,212,0.9),rgba(180,168,211,1),rgba(123,159,212,0.9),transparent)',boxShadow:'0 0 8px rgba(123,159,212,0.7)'}}/>
                    )}
                  </div>
                  <div style={{fontSize:7*(phoneWidth/200),fontWeight:700,color:ocrP>0?'#7b9fd4':'rgba(255,255,255,0.35)',letterSpacing:'0.1em',textTransform:'uppercase',transition:'color 0.3s'}}>
                    {ocrP>0.5?'✓ Text recognized':scanP>0.3?'Reading document...':'Align document'}
                  </div>
                </div>
              )}
              <PhoneShell width={phoneWidth} showContent={true}/>
            </div>
          </div>
        </div>

        {p > 0.04 && p < 0.88 && (
          <div style={{position:'absolute',bottom:28,display:'flex',flexDirection:'column',alignItems:'center',gap:6,pointerEvents:'none'}}>
            <span style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'#94a8c4'}}>Scroll to continue</span>
            <div style={{width:16,height:16,borderRight:'2px solid #b4c8e0',borderBottom:'2px solid #b4c8e0',transform:'rotate(45deg)',animation:'bob 1.4s ease-in-out infinite'}}/>
          </div>
        )}
      </div>
    </div>
  );
}
// ─── OTHER COMPONENTS ─────────────────────────────────────────────

function HIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function Sparkline({ color = "#7b9fd4" }) {
  return (
    <svg width="100%" height="36" viewBox="0 0 80 36" fill="none">
      <polyline points="0,28 14,20 28,24 42,12 56,16 70,8 80,10" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="0,28 14,20 28,24 42,12 56,16 70,8 80,10" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.08"/>
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-i">
        <a href="/" className="nav-logo">
          <div className="nav-icon"><HIcon/></div>
          <span className="nav-name">Nestling</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#families">For Parents</a>
          <a href="#about">Our Story</a>
          <a href="#waitlist">Waitlist</a>
        </div>
        <a href="#waitlist" className="nav-cta">Join Waitlist</a>
        <button className="nav-mob" onClick={()=>setOpen(o=>!o)}><Menu size={22}/></button>
      </div>
      {open && (
        <div style={{position:'absolute',top:68,left:0,right:0,background:'#fff',borderBottom:'1px solid #eaeef5',padding:'16px 24px 20px',display:'flex',flexDirection:'column',boxShadow:'0 8px 24px rgba(30,45,90,0.08)',zIndex:200}}>
          {[['Features','#features'],['For Parents','#families'],['Our Story','#about'],['Waitlist','#waitlist']].map(([label,href])=>(
            <a key={href} href={href} onClick={()=>setOpen(false)} style={{fontSize:16,fontWeight:600,color:'#1e2d5a',padding:'13px 0',borderBottom:'1px solid #f0f4f8',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              {label}<ChevronRight size={16} color="#b4c8e0"/>
            </a>
          ))}
          <a href="#waitlist" onClick={()=>setOpen(false)} style={{marginTop:14,background:'#1e2d5a',color:'#fff',fontSize:15,fontWeight:700,padding:'13px 20px',borderRadius:10,textAlign:'center'}}>Join Waitlist</a>
        </div>
      )}
    </nav>
  );
}

function Ticker() {
  const items = ['Growth tracking','Feed logs','Sleep patterns','Discharge notes','Appointment reminders','Parent support','Care logs','Weight trends'];
  const all = [...items,...items,...items,...items];
  return (
    <div className="ticker">
      <div className="ticker-t">{all.map((x,i)=><span className="ti" key={i}>{x}</span>)}</div>
    </div>
  );
}

function Why() {
  return (
    <section className="s-why" id="about">
      <div className="why-i">
        <div>
          <p className="why-quote">"The NICU had a <strong>whole team</strong> watching over her. Then we came home and it was just… us."</p>
          <p className="why-attr">A feeling shared by <span>nearly every NICU family</span></p>
        </div>
        <div>
          <div className="why-label">Why Nestling exists</div>
          <h2 className="why-h2">You shouldn't have to figure this out alone.</h2>
          <p className="why-body">Discharge day is joyful and terrifying in equal measure. Nestling was built to be the steady, organized presence beside you, tracking what matters, simplifying the paperwork, and being there between appointments when the questions don't wait.</p>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const cards = [
    {Icon:HeartPulse,t:'Everything in one place',b:'Discharge notes, care instructions, and appointments, all together. No more searching through folders at midnight when something feels different.'},
    {Icon:LineChart,t:'Trends that tell a story',b:'Weight, feeds, and sleep become gentle, readable charts. A clear picture of how your baby is growing, not a clinical dashboard.'},
    {Icon:FileScan,t:'Medical notes, made human',b:'Dense discharge paperwork gets translated into language your family understands, without losing the details that matter at your next visit.'},
    {Icon:MessageCircle,t:'A calm place at 2 AM',b:"When something feels off and the next appointment is days away, Nestling gives you a warm, grounded place to start, not a search engine spiral."},
  ];
  return (
    <section className="s-feat" id="features">
      <div className="feat-i">
        <div className="feat-top">
          <div>
            <div className="feat-label">What Nestling does</div>
            <h2 className="feat-h2">A softer way to stay on top of it all.</h2>
          </div>
          <p className="feat-sub">Post-NICU life is fragmented. Nestling brings the pieces together so you can put your phone down and be with your baby.</p>
        </div>
        <div className="feat-grid">
          {cards.map(({Icon,t,b})=>(
            <div className="feat-card" key={t}>
              <div className="feat-ico"><Icon size={22}/></div>
              <div className="feat-t">{t}</div>
              <div className="feat-b">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="s-stats">
      <div className="stats-i">
        {[
          {n:'1 in',em:'8',cap:'US babies spend time in a NICU — 380,000 families a year navigating discharge without structured follow-up support'},
          {n:'',em:'30+',cap:'Things families track in the first month home: feeds, weight, meds, sleep, and appointments, all at once'},
          {n:'Day',em:'1',cap:'Nestling is useful from the very first day home, not after a learning curve or second pediatric visit'},
        ].map((s,i)=>(
          <div className="stat-c" key={i}>
            <div className="stat-n">{s.n}{s.n && ' '}<em>{s.em}</em></div>
            <div className="stat-cap">{s.cap}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoWeServe() {
  const cards = [
    {t:'The first week home',d:"Feeds every few hours. Weight checks. Temperature logs. It's a lot to hold. Nestling holds it, so you can just be there.",accent:'#7b9fd4'},
    {t:'Before every follow-up',d:'Show up with a full picture already written down: weight trends, feeds, sleep, and the questions you want answered.',accent:'#b4a8d3'},
    {t:'When something feels off',d:"Parents notice things first. Nestling helps you understand what you're seeing and feel confident about whether to call.",accent:'#7bbfdb'},
    {t:'Months down the road',d:"The record you've built becomes a health story, valuable for any new provider, specialist, or care transition ahead.",accent:'#9ab8d4'},
  ];
  return (
    <section className="s-who" id="families">
      <div className="who-i">
        <div className="who-top">
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:'#7b9fd4',marginBottom:14}}>Who we serve</div>
            <h2 className="who-h2">For the hardest, most important weeks.</h2>
          </div>
          <p className="who-sub">Every NICU family deserves support that doesn't end at discharge. Nestling is built for the full arc of what comes next.</p>
        </div>
        <div className="who-grid">
          {cards.map((c,i)=>(
            <div className="who-card" key={c.t} style={{'--accent':c.accent}}>
              <div className="who-num">{String(i+1).padStart(2,'0')}</div>
              <div className="who-t">{c.t}</div>
              <div className="who-d">{c.d}</div>
            </div>
          ))}
        </div>
        <div className="who-quote-wrap">
          <div>
            <div className="wq-mark">"</div>
            <p className="wq-txt">I kept a notebook for the first three weeks. Feeds, weights, sleep, and everything. Nestling would have been <em>that notebook</em>, but actually there when I needed it most.</p>
          </div>
          <div className="wq-right">
            <div className="wq-av"/>
            <div className="wq-nm">Maya T.</div>
            <div className="wq-role">NICU parent<br/>28-weeker graduate</div>
            <div className="wq-tags">
              <span className="wq-tag">Premature birth</span>
              <span className="wq-tag">Post-discharge</span>
              <span className="wq-tag">Growth tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const go = async () => {
    if (!email || !email.includes('@')) return;
    try { await fetch('https://formspree.io/f/xlgvbpyz', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email }) }); } catch {}
    setDone(true);
  };
  return (
    <section className="s-wl" id="waitlist">
      <div className="wl-i">
        <div>
          <div className="wl-lbl">Early access</div>
          <h2 className="wl-h2">Be the first families to use Nestling.</h2>
          <p className="wl-body">We are building Nestling alongside NICU families, not just for them. Join to get early access and help us get it right from the very start.</p>
          <div className="wl-checks">
            {["No spam, only things worth reading","Early access to beta testing","A real say in what gets built"].map(x=>(
              <div className="wlc" key={x}><CheckCircle size={14}/>{x}</div>
            ))}
          </div>
        </div>
        <div className="form-box">
          {done ? (
            <div className="f-ok">
              <CheckCircle size={36} color="#7b9fd4" style={{margin:'0 auto'}}/>
              <div className="f-ok-t">You're on the list.</div>
              <div className="f-ok-s">We will reach out when beta opens. Thank you for being part of building this.</div>
            </div>
          ) : (
            <>
              <label className="f-lbl">Your email address</label>
              <div className="f-row">
                <input className="f-in" type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==='Enter'&&go()}/>
                <button className="f-btn" onClick={go}>Notify me</button>
              </div>
              <p className="f-note">Questions? <a href="mailto:nestlingapp0@gmail.com">nestlingapp0@gmail.com</a></p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <style>{FONTS}</style>
      <style>{CSS}</style>
      <main>
        <Nav/>
        <PrinterScene/>
        <section className="hero" id="home">
          <div className="hero-i">
            <div className="hero-left">
              <h1 className="hero-h1">Because NICU care<br/>doesn't end at<br/>discharge.</h1>
              <p className="hero-body">Nestling helps parents organize discharge notes, track daily care, visualize growth trends, and feel less alone during the fragile transition home.</p>
              <div className="hero-btns">
                <a href="#waitlist" className="btn-navy">Join the Waitlist <ArrowRight size={15}/></a>
                <a href="#features" className="btn-outline">See the Product <ChevronRight size={15}/></a>
              </div>
              <div className="hero-pills">
                {[{top:'OCR',bot:'SCAN RECORDS',href:'#features'},{top:'AI',bot:'CARE INSIGHTS',href:'#features'},{top:'TRENDS',bot:'GROWTH + LOGS',href:'#features'}].map(p=>(
                  <a href={p.href} className="feat-pill" key={p.top} style={{cursor:'pointer'}}>
                    <div className="fp-icon">{p.top}</div>
                    <div className="fp-label">{p.bot}</div>
                  </a>
                ))}
              </div>
            </div>
            <div className="hero-right">
              <PhoneShell width={290} showContent={true}/>
            </div>
          </div>
        </section>

        <Ticker/>
        <Why/>
        <Features/>
        <Stats/>
        <WhoWeServe/>
        <Waitlist/>

        <footer className="footer">
          <div className="foot-i">
            <div>
              <div className="foot-name">Nestling</div>
              <div className="foot-tag">NICU Parent Copilot</div>
            </div>
            <p className="foot-copy">© 2026 Nestling · Support beyond the NICU.</p>
          </div>
        </footer>
      </main>
    </>
  );
}