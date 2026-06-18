// ===== Route switching (Hem / Vision / För byråer / För företag / Pris) =====
function go(route){
  if(!document.getElementById(route)) return;
  document.querySelectorAll('.route').forEach(s=>s.classList.toggle('show',s.id===route));
  document.querySelectorAll('.menu a').forEach(a=>a.classList.toggle('active',a.dataset.route===route));
  // keep URL shareable (e.g. index.html#vision) without firing hashchange
  try{
    const base=location.pathname+location.search;
    history.replaceState(null,'',route==='hem'?base:base+'#'+route);
  }catch(e){}
  window.scrollTo({top:0,behavior:'instant'});
  retriggerReveal(route);
}

// Deep-link support: open the route named in the URL hash (#vision, #byra …)
function routeFromHash(){
  const h=location.hash.slice(1);
  const el=h&&document.getElementById(h);
  if(el&&el.classList.contains('route')) go(h);
}
window.addEventListener('hashchange',routeFromHash);

document.querySelectorAll('[data-route]').forEach(el=>{
  el.addEventListener('click',()=>go(el.dataset.route));
  if(el.tagName!=='A' && el.tagName!=='BUTTON'){
    el.setAttribute('role','link');
    el.setAttribute('tabindex','0');
    el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();go(el.dataset.route);} });
  }
});

// ===== FAQ accordion — accessible disclosure =====
document.querySelectorAll('.qa button').forEach(btn=>{
  btn.setAttribute('aria-expanded','false');
  btn.addEventListener('click',()=>{
    const open=btn.parentElement.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

// ===== Hero demo tabs — visual state toggle =====
document.querySelectorAll('.hero-tabs .tab').forEach(tab=>{
  tab.setAttribute('role','tab');
  tab.setAttribute('tabindex','0');
  const activate=()=>{
    tab.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
  };
  tab.addEventListener('click',activate);
  tab.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();} });
});

// ===== Motion: Framer-style scroll reveals =====
// Mark JS active so the hidden initial states (scoped to html.js) take effect.
document.documentElement.classList.add('js');

const REVEAL_SEL = 'h1,h2,.lead,.sec-sub,.pill,.cta,.trust,.preview,.fcard,.grid > .card,.chartcard,.thread,.chatwin,.board,.analysis,.stat,.savings,.bridge,.route-card,.qa,.price,.koncern,.meter,.band-dark,.two-col > p,.video,.prose > p,.emphasis,.pullquote,.peak,.hm-text,.hm-viz,.outcome-chips';
const GROW_SEL  = '.age-bar i,.sv-track i,.mb-t i,.bc-t i,.bf-prog i,.meter-track i,.prof-track i';
const STAGGER = 70, STAGGER_MAX = 360;

function tagReveals(){
  document.querySelectorAll(GROW_SEL).forEach(i=>i.classList.add('grow-x'));
  const counts = new Map();
  document.querySelectorAll(REVEAL_SEL).forEach(el=>{
    if(el.classList.contains('reveal')) return;
    el.classList.add('reveal');
    const p = el.parentElement;
    const n = counts.get(p) || 0;
    counts.set(p, n+1);
    if(n) el.style.setProperty('--rd', Math.min(n*STAGGER, STAGGER_MAX)+'ms');
  });
}

const reveal = el => el && el.classList.add('in');

// IntersectionObserver = correct on-scroll timing for real users.
let io = null;
if('IntersectionObserver' in window){
  io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ reveal(e.target); io.unobserve(e.target); }});
  }, { threshold:0.1, rootMargin:'0px 0px -8% 0px' });
}

function observeReveals(root){
  (root||document).querySelectorAll('.reveal:not(.in)').forEach(el=>{
    if(io) io.observe(el); else reveal(el);
  });
}

// Failsafe: nothing may stay hidden. Reveal anything still hidden after a grace
// period, and always reveal what's already above the fold on load.
function revealInView(){
  const band = window.innerHeight * 0.95;
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
    if(el.offsetParent !== null && el.getBoundingClientRect().top < band) reveal(el);
  });
}

function retriggerReveal(route){
  const root = document.getElementById(route);
  if(!root) return;
  root.querySelectorAll('.reveal').forEach(el=>el.classList.remove('in'));
  requestAnimationFrame(()=>{ revealInView(); observeReveals(root); });
}

tagReveals();
observeReveals();
requestAnimationFrame(revealInView);                 // above-the-fold on load
window.addEventListener('load', revealInView);
// hard safety net — never leave content invisible even if observers misfire
setTimeout(()=>document.querySelectorAll('.reveal:not(.in)').forEach(reveal), 2600);

// ===== Design / page switcher dropdown =====
function closeSwitchers(){
  document.querySelectorAll('.switcher.open').forEach(s=>{
    s.classList.remove('open');
    s.querySelector('.sw-btn')?.setAttribute('aria-expanded','false');
  });
}
document.querySelectorAll('.switcher').forEach(sw=>{
  const btn=sw.querySelector('.sw-btn');
  btn.addEventListener('click',e=>{
    e.stopPropagation();
    const open=!sw.classList.contains('open');
    closeSwitchers();
    sw.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
});
document.addEventListener('click',closeSwitchers);
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeSwitchers(); });

// Open route from hash on first load (deep links into the SPA)
routeFromHash();
