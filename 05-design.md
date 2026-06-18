# 05 – Designsystem & sektionsmappning

Hur innehållet blir en sajt. Generatorn (Framer AI / v0 / Claude) läser den här
filen för stil och tokens, och sidfilernas `id` för struktur.

---

## Designsystem-rekommendation (B2B SaaS / fintech-närliggande)

PATTERN: Hero-centrerad hubb → tre pelare → bevis/trygghet → spårval (byrå/företag) → pris → FAQ → CTA
STYLE: Minimalism / Swiss-modern med varm bas – tryggt, redaktionellt, inte hypigt
ACCESSIBILITY: WCAG AA (kontroll redan gjord i tokenfilen)

COLORS (källa: `../SEVR Bridge.tokens.json`, mode "SEVR Bridge"):
- Bas (ljus): `#FBF7F0`
- Text / mörka sektioner: svartbrun `#1E1712`
- Primär (ledande): fräsch blå `#2B5CE6`
- Varma accenter: brons `#B5793A`, korall `#D8452B`
- Lila i spektrum `#7C7CE6`; teal `#BFEDE2` perifert (Accountec-kontinuitet)
- Kort: periwinkle/sky/lila/korall `#F7D9CF`/brons `#EAD6BC` – alltid svartbrun text

TYPOGRAFI: [FYLL I – bekräfta typsnitt; geometrisk sans för rubrik + läsbar sans för brödtext]

AVOID: generiska AI-gradienter (lila→rosa), guld i gradienter (daterat), vit text på varma fält (faller kontrast), stockfoton.

> Alternativt token-läge för en mer monokrom variant: `../SEVR Warm.tokens.json` (mode "SEVR Warm Mono"). Bekräfta vilket läge sajten ska köra.
> Designbaseline i Figma: "SEVR Flow" (file 5AWmEasIY6rfHCKosVQuGR).

---

## Sektion → komponent

| Sektions-`id` | Komponent | Noter |
|---|---|---|
| `hero` | Hero med rubrik + underrubrik + 1 primär CTA | spårval kan ligga här |
| `trygghetsrad` | Logorad / trygghetspunkter | GDPR, källa, human-in-the-loop |
| `produkt-rapportering` | Feature-sektion (text + bild/illustration) | |
| `produkt-regelverk` | Feature-sektion | |
| `produkt-agenter` | Feature-sektion | |
| `fraga-ai` | Exempel-kort (frågor → svar med källa) | |
| `bevis` | Social proof / case / siffror | behöver eget SEVR-case |
| `sparval` | Två kort: För byråer / För företag | leder till undersidor |
| `pris` | Pris-sektion | byrå 19 kr/kund + credits |
| `faq` | Accordion | |
| `cta-slut` | Mörk band-CTA | "AI gör 80 %. Ditt omdöme gör resten." |

Samma `id` används i sidfilerna och i den genererade sajten – det är så
markdown och design hålls i synk (se README).
