# Section Library

Every section type observed across the 20-site teardown, in roughly the order they
appear on a page. Build a page by selecting an ordered subset. For each: what it's
for, what goes inside, sizing, and which archetype uses it.

Legend — archetype: **P** = Product-SaaS, **A** = App/consumer, **G** = Agency/high-ticket.

---

## 0. Announcement / top bar — *optional*
**Purpose:** momentum + a soft, low-commitment CTA before the nav even loads.
**Contents:** one line. Either a credibility signal ("Announcing our $2.3M Seed Round",
"We just raised seed funding", "We released V2 open API") or a free-trial nudge
("Experience Next-Gen Automation — Try It Free!"). Funding/release for credibility;
trial nudge for self-serve.
**Sizing:** full-width strip, 40–48px tall, small text (13–14px), centered, dismissible.
**Used by:** P, A. (Echo, Remote, Momentum, LynAI, Finns.)

## 1. Navigation — *always*
**Purpose:** orient + present the primary CTA.
**Contents:** logo left; 3–5 links center/right (Features, Pricing, Blog/Changelog,
About, Contact); ONE primary CTA button right ("Start for free", "Get started",
"Book a demo"). High-ticket sites strip nav to 2–3 links + one booking CTA (TINKR:
just "Case studies", "Blog", "Book an Intro"). Agencies often use a mega-menu with
sublabels (Nexilo, MVN).
**Sizing:** 64–80px tall, sticky, becomes opaque/blurred on scroll. Logo ~120–140px.
**Used by:** all.

## 2. Hero — *always*
**Purpose:** state the outcome and show the product in one screen.
**Contents (the canonical stack):**
- **Eyebrow / badge** (optional): category or release tag ("AI Project Tool",
  "Digital Agency", "RELEASE — Discover Our Latest AI Upgrade").
- **Headline:** the outcome, 4–10 words. See copy-and-voice.md for formulas.
- **Subhead:** one sentence expanding the promise, naming who it's for. 12–25 words.
- **Dual CTA:** primary (action: "Start free trial") + secondary (lower commitment:
  "Watch demo" / "See features" / "Book a call").
- **Near-hero social proof:** rating ("4.8/5.0 — 356 reviews"), user count
  ("40K+ users", "Trusted by 120+ businesses"), download count, or avatar cluster.
- **Risk reversal** (P): "Free for 14 days. No card required." right under the CTA.
- **Product visual:** dashboard mockup (P), phone mockups (A), or positioning
  imagery/video (G). Every serious product hero SHOWS the UI.
**Sizing:** full viewport-ish, 80–100vh. Headline 56–80px desktop / 34–40px mobile.
Subhead 18–22px. Visual takes 45–55% of width on split layouts, or sits below as a
wide "screenshot shelf".
**Used by:** all.

## 3. Logo wall / trust bar — *highly recommended*
**Purpose:** instant credibility ("real companies use this").
**Contents:** intro line + 5–8 grayscale logos, often a slow marquee. Line examples:
"16,000+ SMBs trust Remote", "Join over 400 teams saving money and the planet",
"Trusted by teams worldwide", "Adopted by renowned, trusted, and leading enterprises".
**Sizing:** compact band, 80–120px tall, logos ~28–40px high, 60% opacity.
**Used by:** P, G. Place immediately after hero.

## 4. Problem / agitation — *optional but powerful*
**Purpose:** make the visitor feel the pain so the solution lands.
**Contents:** a headline naming the pain ("Managing tasks across different apps slows
you down", "Running a studio starts to feel like managing one", "you became the
bottleneck in your own business") + optionally 3 "reality" cards numbered 01/02/03.
Often paired with an us-vs-them comparison ("The usual fix" vs "TINKR"; "Other
agencies" vs "Agnos").
**Sizing:** standard section. 3-card row or 2-column comparison table.
**Used by:** G heavily (TINKR, Machina, Agnos), A explicitly (AppDrop "The Challenge"),
strong P pages (Worklane "Stop juggling tools", Echo "context, not guesswork").

## 5. Feature → benefit blocks — *always (the body of the page)*
**Purpose:** translate capability into outcome, with proof visuals.
**Two complementary treatments — use both:**
- **Bento / feature grid:** 4–6 cards of varied size, fast skim of breadth. Each card
  = icon/mini-UI + 2–4 word title + one benefit line. (Finns, ReadyLaunch, Dreelio.)
- **Alternating feature splits:** 2–4 deep blocks, image one side / copy the other,
  alternating L/R. Each = eyebrow + benefit headline + paragraph + UI mockup.
  (Worklane, Remote, Echo, Lunera.)
Rule: lead each with the BENEFIT headline, put the feature name in the body. "Clear
next step" not "AI recommendation engine".
**Sizing:** each split block ~480–640px tall; bento grid cards 280–360px. 3-col grid
desktop → 1-col mobile.
**Used by:** all.

## 6. How it works — *recommended*
**Purpose:** kill "is this hard to set up?" by showing it's 3 steps.
**Contents:** 3–4 numbered steps, verb-led ("Connect data → Let AI do its thing →
Make reductions"; "Create workspace → Invite team → Track work"). Each = number +
short title + one line.
**Sizing:** horizontal 3–4 column row desktop, vertical timeline mobile. Compact.
**Used by:** P, A, G. (LowrCarbon, Worklane, Lunera, Nexilo, Machina.)

## 7. Differentiator / AI / deep-capability — *optional*
**Purpose:** the "why us, not them" wedge.
**Contents:** a spotlight on the one thing that's different — an AI automation block
("AI automation that removes busywork", often a "Beta" badge), a privacy angle
("On-Device AI"), or a "Human vs AI performance" comparison. Frame AI as a measurable
upgrade, not a threat.
**Sizing:** one rich section, often with an interactive-looking mockup.
**Used by:** P (Worklane, Echo, LynAI), A (AppDrop), G (Machina, Nexilo).

## 8. Stats / outcomes band — *recommended*
**Purpose:** quantified proof in a glanceable strip.
**Contents:** 3–4 big numbers + labels ("20h+ reclaimed/mo", "35% less admin", "ROI in
45 days", "98% satisfaction", "123,000+ businesses"). Animate count-up on scroll.
**CRITICAL:** use REAL numbers. Templates ship placeholder zeros ("0K+", "0.0", "$0M")
— these scream "unfinished". Never deliver them.
**Sizing:** full-width band, 3–4 columns, numbers 40–64px bold.
**Used by:** all. (Startify, Nexilo, TINKR, Machina, Worklane, ReadyLaunch.)

## 9. Use cases / segments — *optional*
**Purpose:** help the visitor self-identify ("this is for someone like me").
**Contents:** a row of roles/industries ("Agencies, Consultants, Startups, Freelancers,
Service teams, Product teams"; or 4 industry cards with tailored bullets).
**Sizing:** 4–6 card grid or tabbed.
**Used by:** P (Worklane), G (Machina industry cards, Nexilo, Agnos "Industries we
work with").

## 10. Integrations — *recommended for P*
**Purpose:** remove switching friction ("works with your stack").
**Contents:** headline ("Connect 250+ your favorite tools", "Works with the tools you
already use") + a grid/carousel of app logos (Slack, Notion, Gmail, Sheets…).
**Sizing:** logo grid, 8–16 marks, or a marquee carousel.
**Used by:** P, G (Lunera, LynAI, Nexilo, Alter, Dreelio, Machina).

## 11. Pricing — *always for self-serve; "Custom" for high-ticket*
**Purpose:** convert, with a built-in anchor.
**Contents:** 3 tiers is the standard. Middle tier badged "Most popular" / "Best value"
and visually lifted. Monthly/Yearly toggle with "Save 20%". Each tier = name +
one-line who-it's-for + price + CTA + "Everything in [lower tier], plus:" feature
stack. Top tier often "Custom / Contact sales" (anchor + enterprise lead-gen).
Freemium variant: Free vs Pro (AppDrop, Lunera, Dreelio). Pay-once variant: Basic vs
Advanced with "Pay once, use forever" (Fragments). High-ticket: project/retainer
prices or "Starts at $50K" (Machina), audit-credited-to-retainer (TINKR).
**Sizing:** 3-col card row, middle card ~8% taller/elevated with accent border.
**Used by:** all (form varies by archetype). See selling-mechanics.md for anchoring.

## 12. Testimonials — *always*
**Purpose:** proof from humans.
**Contents:** named quotes WITH role + company + photo. Best ones lead with an
emotional/outcome line ("Replaced three tools at once", "We stopped guessing in
pipeline reviews") and contain a number. Volume signals: a wall of 6–9 (Momentum,
Finns) shows breadth across personas; 3–5 deep quotes show substance. Borrow authority
with recognizable company names where real.
**Sizing:** 3-col grid, carousel, or marquee. Cards 280–360px.
**Used by:** all.

## 13. FAQ — *recommended*
**Purpose:** remove the last objections.
**Contents:** 5–8 accordion items. Answer real objections: security/data, integration,
pricing/ROI, "do I need technical skills?", "does it replace my CRM?". High-ticket
groups them by category (Getting Started / Technical & Security / Pricing & ROI).
Don't ship the template's meta-FAQ ("how do I customize this template?").
**Sizing:** single column, max ~720px wide, centered. Accordion.
**Used by:** all except some agency/portfolio (MVN omits).

## 14. Final CTA band — *always*
**Purpose:** the closing ask.
**Contents:** big restated-promise headline ("Start molding your finance team today",
"Bring your tasks, clients, and revenue together", "Ready to Automate?") + one primary
CTA + risk reversal ("No credit card required", "Free for 14 days") + optionally the
rating again. High-ticket: "Book a free call / Get your free audit".
**Sizing:** full-width, visually distinct (accent background or gradient), generous
padding 120–160px.
**Used by:** all.

## 15. Footer — *always*
**Purpose:** secondary nav, trust, legal.
**Contents:** logo + tagline; 3–5 link columns (Product, Solutions, Company,
Resources); newsletter signup with consent; socials; copyright; optional "Security you
can trust / enterprise-grade" badge (Worklane). Often a second "Join the 40,000+
businesses" mini-CTA above it.
**Sizing:** multi-column, 200–320px tall, muted background.
**Used by:** all.

## Secondary / nice-to-have sections
- **Blog teaser** (3 posts) — SEO authority + "we're active". P and G.
- **Community band** — follower counts (Dreelio: X + YouTube).
- **Founder video / story** — authority for agencies (Agnos, Nexilo, MVN).
- **Portfolio / case-study gallery** — the proof engine for G (replaces feature
  blocks). 4–10 project cards with duration + tools + result.
- **Comparison "Us vs Them" table** — see Problem section; doubles as differentiator.

---

## Page recipes by archetype

**Product-SaaS (self-serve):**
Announce bar → Nav → Hero(+UI) → Logo wall → Problem → Feature bento → Feature splits
→ How it works → AI/differentiator → Stats → Use cases → Integrations → Pricing(3-tier)
→ Testimonials → FAQ → Final CTA → Footer.

**App / consumer:**
Nav → Hero(phone mockups + rating/downloads) → The Challenge → Key benefits → Feature
grid → Intelligence/privacy → Integrations → Testimonial → Pricing(Free/Pro) → FAQ →
4-step start → Final CTA(app-store) → Footer.

**Agency / high-ticket:**
Nav → Hero(positioning) → Trust line → Problem agitation + Us-vs-them → "The missing
layer" → How we work (pillars) → Benefits/stats(+scarcity) → Case study + client logos
→ Services → Pricing(project/retainer/Custom) → Testimonials → FAQ → Final CTA(book
call) → Footer.
