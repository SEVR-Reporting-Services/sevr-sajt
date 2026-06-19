# Layout & Sizing

The measurements that make a page read as "premium template" rather than default.
These are the conventions shared across the teardown (modern Framer/SaaS norms).

## Container & grid
- **Max content width:** 1200–1280px, centered. Wide "screenshot shelves" and logo
  marquees may go full-bleed; text columns never exceed ~720px for readability.
- **Side gutters:** 24px mobile, 40–80px desktop.
- **Grid:** 12-col desktop. Feature grids = 3 col; bento = mixed 2/3-col with one
  feature cell spanning 2. Collapse to 1 col below 768px.
- **Section rhythm:** alternate full-width bands (stats, CTA, logo wall) with
  contained sections to create visual pacing.

## Vertical spacing (the #1 "premium" signal)
- **Section padding (top+bottom):** 96–160px desktop, 64–80px mobile. When in doubt,
  add more. Cramped vertical space is the biggest tell of an amateur page.
- **Spacing scale:** use an 8px base (4, 8, 12, 16, 24, 32, 48, 64, 96, 128). Every
  gap is a multiple. Consistency here reads as craft.
- **Hero:** 80–100vh, content vertically centered, generous space above the visual.

## Type scale
Use a clear, large-stepped scale. Suggested desktop / mobile:
- **Hero H1:** 56–80px / 34–40px, weight 600–700, line-height 1.05–1.1, letter-spacing
  −0.02em. Tight tracking on big type looks expensive.
- **Section H2:** 36–48px / 28–32px, weight 600.
- **Card/feature H3:** 18–22px, weight 600.
- **Eyebrow:** 13–14px, uppercase, letter-spacing 0.08em, weight 600, accent or muted
  color.
- **Body:** 16–18px, line-height 1.5–1.6, weight 400, muted foreground (not pure black).
- **Subhead under hero:** 18–22px, muted, max-width ~560px.
Pair at most two families: a characterful display/sans for headings + a clean sans for
body. Many premium SaaS pages use one well-set grotesk (Inter, General Sans, Geist,
Satoshi) across the board.

## Color system
- Define everything as CSS custom properties: `--bg`, `--surface`, `--fg`, `--fg-muted`,
  `--border`, `--primary`, `--primary-fg`, `--accent`.
- **One** primary/accent color, used for the primary CTA and almost nothing else, so
  the CTA always wins the eye. Secondary CTAs are ghost/outline or low-contrast.
- **Dark theme** suits AI/dev/enterprise products (Echo, Worklane, Alter, Nexilo,
  Machina, LynAI) — near-black bg (#0A0B0D–#111317), neon/saturated accent, subtle
  dashed-grid or glow decoration. **Light theme** suits finance/productivity/agency
  (Finns, Remote, Dreelio, Lunera, Agnos, Startify) — warm off-white bg, soft shadows,
  realistic UI mockups.
- Surfaces: cards sit on `--surface` slightly off the page bg, 1px `--border`, radius
  16–24px, soft shadow (light theme) or subtle inner border/glow (dark theme).

## Components
- **Buttons:** height 44–52px, padding 16–28px horizontal, radius 10–14px (or pill).
  Primary = solid accent; secondary = outline/ghost. Hover: slight lift + shade shift.
- **Cards:** radius 16–24px, padding 24–32px, 1px border, soft shadow. Consistent
  across the page.
- **Pricing card (highlighted):** ~8% taller or lifted with accent border + "Most
  popular" pill; others muted.
- **Badges/eyebrows:** pill, 6px×12px padding, tinted accent background at ~10% opacity.
- **Logo wall:** logos 28–40px tall, grayscale, ~60% opacity, equal optical spacing.

## Imagery
- Product UI mockups are the dominant asset — render them large, slightly angled or in
  a browser/phone frame, with a soft shadow. Float small UI "stat cards" near the hero
  (Lunera, Alter) for life.
- Avoid stock photography of people at desks. Use product, abstract gradient meshes, or
  real customer/founder photos only.

## Motion
- **Scroll-reveal:** fade + 12–24px rise on entry, 0.4–0.6s ease-out, staggered ~60ms
  across a row. Subtle, once per element.
- **Count-up** animation on stat numbers when they enter the viewport.
- **Sticky nav** that gains background blur/opacity after ~80px scroll.
- **Marquees** for logo walls and testimonials, slow (~30–60s loop), pause on hover.
- **Hover micro-interactions** on cards/buttons (lift, border glow).
- Respect `prefers-reduced-motion` — disable transforms for those users.

## Responsive
- Breakpoints ~480 / 768 / 1024 / 1280.
- Stack all multi-col layouts to 1 col on mobile; hero visual moves below copy.
- Nav collapses to a hamburger; keep the primary CTA visible in the mobile bar.
- Re-check the hero on a 380px-wide screen: headline must not overflow, CTA must be
  thumb-reachable, proof line stays above the fold.
