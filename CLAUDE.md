# CLAUDE.md — kontext för AI-agenter som jobbar i detta repo

Läs det här först. Det förklarar vad projektet är, hur filerna hänger ihop och vilka regler du ska följa när du gör ändringar. För **varför**-resonemanget bakom varje version, läs `VERSIONER.md`.

---

## Vad det här är

En statisk prototyp-sajt för **SEVR Insights** — en AI-plattform för ekonomer (redovisningsbyråer som vill skala rådgivning, och företag som vill förstå sin ekonomi). Röd tråd i all copy: *AI gör grovjobbet, människan gör bedömningen.*

- Ren **statisk HTML** — ingen byggprocess, inget ramverk, ingen npm. En sida = en `.html`-fil med inline `<style>` och en liten `<script>` i slutet.
- Typsnitt laddas via Google Fonts. Inga andra externa beroenden.
- Publiceras med **GitHub Pages** från `main`. Varje push går live på ~1 min. `.nojekyll` finns (hoppar över Jekyll).
- Live: https://sevr-reporting-services.github.io/sevr-sajt/

## Förhandsvisa

Öppna valfri `.html`-fil direkt i webbläsaren (dubbelklick) — inget kommando behövs.

---

## Filkarta

| Fil | Vad |
|---|---|
| `index.html` | **STARTSIDAN / MASTER (V5).** Roten `/sevr-sajt/` serverar denna. Utgå härifrån när du ändrar huvudsidan. |
| `v5.1.html … v5.7.html` | Skins V5.1–V5.7 (Gleap, Slack, Apollo, Vanta, Maze, Huddle, Awesomic) — **samma struktur & copy som V5/index**, bara annan visuell hud. Filnamnet matchar etiketten. |
| `v1.html, v2.html, v3.html, v4.html` | Äldre versioner V1–V4 (v3 = Hormozi-säljsajt). |
| `version-0/index.html` | V0 — tidig rå version (referens). |
| `prototyp-*.html`, `salj-sajt.html` | Redirect-stubbar från de gamla filnamnen → de nya. Rör ej. |
| `byra.html`, `foretag.html`, `pris.html`, `faq.html`, `kontakt.html` | Undersidor byggda på V5:s formspråk. |
| `villkor.html`, `integritetspolicy.html`, `cookiepolicy.html`, `dpa.html` | Juridiska sidor — **platshållartext**, ej färdig juridik. |
| `VERSIONER.md` | Designlogg: varför V0→V5 + skin-beskrivningar. Läs för kontext. |
| `skills/` | Referens-skills för metodiken: `copy-alex-hormozi` (offert-copy), `apollo-style-copy` (svensk onboarding/webb-copy), `saas-landing-architect` (landningssidearkitektur + references). Läs dessa innan du skriver copy eller bygger nya sektioner. |

---

## Regler du MÅSTE följa

1. **Svenska genomgående**, du-tilltal. Skriv svensk copy, inte översatt engelska.
2. **AI-agenten heter `Vatsson`** — aldrig "Watson". (Vanligt fel.)
3. **V5 är basen.** Om du ändrar *strukturen* i V5 (lägger till/tar bort sektioner): antingen spegla det i skins V5.1–V5.7, eller säg tydligt till användaren att skins nu skiljer sig. Skins ska annars ha identisk sektionsuppsättning och copy som V5.
4. **Versionsväljaren (`#vswitch`) ska vara identisk på alla sidor** — två rader (V0–V4 / V5–V5.7), prick-markör på V0, ingen aktiv-markering. Om du rör den, uppdatera den likadant i *alla* filer.
5. **Behåll det platta/flata per skin.** Varje skin har egna tokens (färg, typsnitt, radier, om skuggor används eller ej). Blanda inte skinens uttryck — håll dig till respektive fils `:root`-variabler och stil.
6. **Rör inte sönder animationerna i V5:** roterande hero-ord (`#rotw`), count-up på siffror (`.cup`), och mjuk fade-in-up på sektioner (`.reveal`/IntersectionObserver). Alla respekterar `prefers-reduced-motion` — behåll det.
7. **Siffror är uppskattningar** och märks med `(est.)`. Hitta inte på hårda påståenden/siffror som inte finns i källmaterialet.
8. **Innehållet bottnar i interna källdokument** (vision, sidcopy, produktmodell). Håll fakta konsekventa med befintlig copy.
9. **Pusha bara när användaren ber om det.** Hantera inte GitHub-inloggning åt användaren.

## Konventioner i koden

- V5 och undersidor delar formspråk: cream-canvas, `Inter` (brödtext) + `Instrument Serif` (rubriker), gul CTA (`--yellow:#FCD519`), sammanlimmade fyrkantsceller med hårlinjer i sektionsmoduler.
- Logotypen är **text** (inte bild): `SEVR` i Inter + *Insights* i kursiv Instrument Serif.
- Sektioner använder `.wrap` med longhand `padding-left/right` så vertikal sektions-padding inte nollställs (en bugg vi redan fixat — återinför den inte med kortform `padding:0 24px` på ett `<section>`).
- Skins skapades genom att kopiera V5:s sektioner och byta `:root`-tokens + typsnitt. Samma princip om en ny skin ska till.

---

## Snabb orientering för en ny uppgift

1. Läs `VERSIONER.md` för helheten.
2. Identifiera vilken fil uppgiften gäller (oftast `prototyp-v5.html`).
3. Gör ändringen i den filen; håll copy svensk och regler ovan.
4. Om det rör struktur som finns i skins — synka eller flagga.
5. Visa/förhandsgranska, och pusha **bara på begäran**.
