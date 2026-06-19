---
name: saas-landing-architect
description: >-
  Build high-converting SaaS and AI-product landing pages and full marketing
  sites, grounded in a teardown of 20+ premium Framer/SaaS templates plus
  market-leader patterns (Slack, Linear, Stripe, Notion, Vercel). Use this skill
  whenever the user wants to design, write, structure, or improve a landing
  page, marketing site, hero section, pricing page, or product page — for a
  SaaS, AI tool, app, or agency. Triggers on: "build a landing page", "make a
  SaaS website", "design a hero", "write our homepage", "pricing page", "improve
  my landing page", "section structure", "what sections do I need", "make it
  convert", "gör en landningssida", "skriv vår hemsida", "bygg en SaaS-sajt".
  Covers section taxonomy and order, copy formulas, tone of voice, persuasion
  mechanics, layout/sizing conventions, and Swedish-language adaptation.
---

# SaaS Landing Architect

A system for building landing pages and marketing sites that convert. It encodes
the patterns reverse-engineered from 20+ premium SaaS/AI/agency templates and the
conventions used by category leaders. Use it to plan structure, write copy, choose
sections, set sizing, and apply the right persuasion mechanics — in English or
Swedish.

## When to use this skill

Use it for any of: a new landing page from scratch, a full multi-section marketing
site, a single hero/pricing/CTA section, a product (mid-funnel) page, or a critique
and rebuild of an existing page. It pairs well with `ui-designer` / `refactoring-ui`
(visual craft), `copywriting` / `copy-editing` (word-level polish), and the `theme-factory`
for color/type systems. Use those for execution detail; use THIS skill for the
architecture, copy strategy, and conversion logic.

## The core model: every page is one argument

A landing page is a single persuasive argument delivered top-to-bottom. Each section
advances it. The proven spine, in order:

1. **Promise** — hero states the outcome + shows the product.
2. **Proof it's real** — logo wall / trust number right after the hero.
3. **Why you need it** — problem agitation (name the pain).
4. **How it delivers** — feature→benefit blocks tied to product visuals.
5. **How easy it is** — 3–4 step "how it works".
6. **Why it's better** — differentiator / AI / us-vs-them.
7. **Proof it works** — quantified outcomes + named testimonials.
8. **What it costs** — pricing with a clear anchor.
9. **Objection removal** — FAQ.
10. **Ask** — final CTA band with risk reversal.

Not every page needs all ten, but the ORDER almost never changes. Cut sections;
don't reorder them. A visitor who isn't sold by the testimonial won't be sold by
seeing pricing first.

## Step 1 — Pick the archetype

The teardown splits cleanly into three archetypes. Decide which the project is
before writing anything; it dictates section choice, CTA language, and pricing.

- **Product-SaaS** (Finns, Echo, Worklane, ReadyLaunch, Lunera, Remote, LynAI, Alter,
  LowrCarbon, Momentum): self-serve software. Leads with a product-UI hero, logo
  wall, feature-benefit blocks, 3-tier pricing, "Start free / Try free" CTAs.
- **App / consumer** (AppDrop): mobile or freemium product. Hero shows app
  mockups, leads with download/rating proof, app-store CTAs, freemium 2-tier pricing.
- **Agency / studio / high-ticket** (Agnos, MVN, TINKR, Nexilo, Machina, Startify):
  services or done-for-you. Leads with positioning + problem agitation + us-vs-them,
  shows portfolio/case studies, uses project/retainer pricing or "Custom", and
  "Book a call / Get a free audit" CTAs.

If unsure, ask the user. The archetype changes the whole page.

## Step 2 — Choose sections

Read `references/section-library.md`. It is the full menu — every section type
observed, what it's for, what goes in it, recommended sizing, and which archetype
uses it. Build the page as an ordered list of sections from that library before
writing a word of copy. A typical strong page is 9–14 sections.

## Step 3 — Write the copy

Read `references/copy-and-voice.md` for the headline/subhead formulas, tone-of-voice
rules, eyebrow pairing, and CTA language bank — all with verbatim examples from the
teardown. Default voice: confident, plain-spoken, benefit-led, anti-friction. Lead
with the outcome, never the feature. The hero headline is 80% of the work — draft
5–8 variants and pick.

For Swedish output, ALSO read `references/swedish-copy.md` (lagom tone, du-form,
which terms to keep in English, risk-reversal phrasing).

## Step 4 — Wire the persuasion

Read `references/selling-mechanics.md`. This is where pages win or lose: social-proof
escalation, middle-tier price anchoring, risk reversal repeated near every CTA,
quantified testimonials, problem agitation, scarcity, and trust badges. Layer these
deliberately — most weak pages have all the sections but none of the mechanics.

## Step 5 — Apply layout & sizing

Read `references/layout-and-sizing.md` for container widths, section padding, type
scale, grid conventions, spacing rhythm, and motion. These are the measurements that
make a page read as "premium template" rather than "bootstrap default".

## Step 6 — Build it

If producing live output, default to a single self-contained, responsive `index.html`
(semantic sections, CSS custom properties for theming, scroll-reveal animation, no
external deps beyond fonts/icons). For React, split each section into a component.
Use real, specific copy — never lorem ipsum or placeholder zeros ("0K+"); placeholder
stats are the #1 tell of an unfinished template.

## Step 7 — Verify against the checklist

Before delivering, run the page through `references/conversion-checklist.md`. It's a
25-point audit covering above-the-fold clarity, proof, CTA hygiene, pricing, mobile,
and the "5-second test". Fix every miss.

## Reference files

- `references/section-library.md` — the full section menu, purpose, contents, sizing.
- `references/copy-and-voice.md` — headline/subhead formulas, tone, CTA bank.
- `references/selling-mechanics.md` — the conversion levers and how to layer them.
- `references/layout-and-sizing.md` — widths, padding, type scale, grids, motion.
- `references/swedish-copy.md` — Swedish-language adaptation rules + phrase bank.
- `references/teardowns.md` — per-site notes on all 20 analyzed pages (the evidence).
- `references/conversion-checklist.md` — pre-launch 25-point audit.
