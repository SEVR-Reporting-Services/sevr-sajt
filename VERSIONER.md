# SEVR Insights — versionslogg & designlogik

Det här dokumentet förklarar **varför** prototypen har utvecklats som den gjort — från den första råa ifyllningen (V0) till den genomarbetade basen (V5) och de sju skin-varianterna (V5.1–V5.7). Tanken är att vem som helst i teamet ska kunna öppna sajten, klicka mellan versionerna (väljaren nere till höger) och förstå resonemanget bakom varje steg.

Live: **https://sevr-reporting-services.github.io/sevr-sajt/** — lägg till filnamnet för en specifik version, t.ex. `/prototyp-v5.html`.

---

## Utgångspunkt: källdokumenten

Allt innehåll bottnar i de interna dokumenten om SEVR Insights (vision, sidcopy, produktmodell, "Funktioner-säljande", regelverks-onepager m.fl.). Produkten: **en AI-plattform för ekonomer** — för redovisningsbyråer som vill skala rådgivning, och för företag som vill förstå sin ekonomi och fatta bättre beslut. Den röda tråden genom alla versioner: *AI gör grovjobbet, människan gör bedömningen.*

---

## Översikt över versionerna

| Version | Fil | Vad det är | Roll |
|---|---|---|---|
| **V0** | `version-0/index.html` | Nära kopia av källdokumenten — rå ifyllning | Referens / startpunkt (markerad med prick i väljaren) |
| **V1** | `index.html` | Första wireframe | Struktur, inget visuellt |
| **V2** | `prototyp-v2.html` | Typografisk wireframe | Hierarki & läsbarhet |
| **V3** | `salj-sajt.html` | Säljsajt i Hormozi-stil | Konverteringslogik |
| **V4** | `prototyp-v4.html` | Flersidig (Hem/byrå/företag/pris/vision) | Distinkta sektioner per sida |
| **V5** | `prototyp-v5.html` | **Basen** — genomarbetad, Framer-/lynai-inspirerad | Master som allt annat utgår från |
| **V5.1–V5.7** | `prototyp-v6…v12.html` | Sju skins av V5 | Samma struktur, olika visuell identitet |

---

## Logiken steg för steg

### V0 — startpunkten
Nästan en ren avskrift av källdokumenten. Ingen design, ingen säljvinkel — bara innehållet på pränt så att vi ser vad vi faktiskt har att jobba med. Den finns kvar som referens och är markerad med en liten prick i versionsväljaren: *här började vi*.

### V1 — wireframe
Första steget från text till sida: vilka sektioner finns, i vilken ordning, hur navigerar man. Avsiktligt avskalad — vi bestämmer struktur innan vi bryr oss om utseende.

### V2 — typografisk wireframe
Samma struktur, men nu med fokus på **typografisk hierarki**: rubriknivåer, läsrytm, vad ögat ska se först. Fortfarande nästan monokromt — formen ska bära innehållet innan färg och bilder kommer in.

### V3 — säljsajt i Hormozi-stil
Ett medvetet experiment i ren konverteringscopy.

**Vem är Alex Hormozi?** En amerikansk entreprenör och författare (*$100M Offers*, *$100M Leads*) känd för en mycket direkt, värdedriven metod för säljtexter. Kärnan i hans ramverk: gör erbjudandet *oemotståndligt* genom att maximera drömutfallet och den upplevda sannolikheten att lyckas, och minimera tidsåtgång och uppoffring. Konkret betyder det rubriker som leder med resultatet, en staplad värdelista, garanti, samt knapphet/urgens och en tydlig CTA.

**Varför vi gjorde den:** för att testa hur långt vi kan trycka säljvinkeln innan tonen blir för "hård sälj" för en seriös B2B-/ekonomimålgrupp. Slutsatsen blev att vi vill ha Hormozis *tydlighet och nyttofokus* men i en lugnare, mer förtroendeingivande förpackning — vilket vägledde tonen i V5.

### V4 — flersidigt
Här delade vi upp i riktiga sidor (Hem, För byrå, För företag, Pris, Vision) och gav varje sida distinkta sektioner. Steget handlade om informationsarkitektur: olika målgrupper behöver olika ingångar.

### V5 — basen (den vi bygger vidare på)
**Det här är masterversionen.** Djupt genomarbetad, Framer-/lynai-inspirerad layout, och fylld med de genomtänkta sektionerna och texterna från källdokumenten. Allt annat (skins V5.1–V5.7) är V5:s struktur ompaketerad visuellt.

Sektionerna och varför de finns:

- **Hero med flik-modul** — en mening som säger vad det är, plus tre flikar (Rapportering & analys / Vatsson / AI-agenter) som låter besökaren själv välja vinkel utan att skrolla. Flikarna är utformade som *bokmärken* anslutna till panelen så det är tydligt att de är klickbara.
- **Trust-rad + logotypvägg + Accountec-citat** — socialt bevis tidigt ("1 000+ byråer och företag i Norden") och ett namngivet kundcitat för trovärdighet.
- **Säg adjö till …** — rullande problemord (manuella rapporter, sena bokslut, …) + en statsrad som "räknas upp" (count-up) när den kommer in i bild. Avdramatiserar problemet och ger snabba bevis.
- **Produkten** — en AI-motor, sex rådgivningsprodukter (01–06) + "Fråga AI". Visar bredden utan att tappa fokus.
- **Vatsson (AI-agent)** — svar med källa och sidnummer; tre kort som bygger förtroende för träffsäkerheten. (Notera: namnet är **Vatsson**, aldrig "Watson".)
- **AI-agenter** — det agentiska lagret: en specialist per process (Lön, Bokslut, Compliance, Skatt …) dirigerade av en Orchestrator.
- **Kunder (bento)** — mix av citat och resultatrutor med kundlogga; konkret bevis i ett luftigt rutnät.
- **Välj väg** — två tydliga ingångar: byrå vs företag.
- **Trygghet** — GDPR, ingen modellträning, integritet, DPA. Avgörande för en ekonomimålgrupp.
- **FAQ → CTA → Footer (med juridiska sidor).**

Typografi i V5: brödtext i **Inter** (modern, neutral), rubriker i **Instrument Serif** (lätt, redaktionell serif med vacker kursiv). Logotypen är satt som text: **SEVR** i Inter + *Insights* i kursiv serif. Det utvalda ordet i hero-rubriken (*tråkiga*) är färglagt, understruket med en gradient och **byts automatiskt** (tråkiga → grova → tunga → sega → repetitiva → manuella) för att dra blicken.

Rörelse i V5 (medvetet sparsam): mjuk **fade-in nerifrån** på sektioner vid skroll, **count-up** på siffrorna, roterande hero-ord, och bokmärkesflikar. Allt respekterar `prefers-reduced-motion`.

---

## Skins V5.1–V5.7 — samma struktur, olika hud

Varför skins? När strukturen och texten väl satt (V5) ville vi kunna prova **helt olika visuella identiteter** utan att röra innehållet. Därför har varje skin *exakt* samma sektioner och copy som V5 — bara färger, typsnitt, ytor, radier och placeholders skiljer. Det gör det lätt att jämföra känsla mot känsla.

| Skin | Fil | Kort karaktär | Varför testa den |
|---|---|---|---|
| **V5.1 Gleap** | v6 | Cream + lila/blå pasteller, Playfair-serif, mjukt rundade kort | Redaktionellt och varmt, "designmagasin" |
| **V5.2 Slack** | v7 | Aubergine på cream, Space Grotesk, radiella gradient-washar, mörkt plum-band | Trygg, etablerad B2B-känsla med ett tydligt accentögonblick |
| **V5.3 Apollo** | v8 | Limestone + marble, gul highlight-CTA, platt, hårlinjer | Premium och avskalat — "verktyg som inte ser ut som ett verktyg" |
| **V5.4 Vanta** | v9 | Lavendel-hero + violett pill-CTA, Source-serif | Förtroende/compliance-ton, tryckt rapport-känsla |
| **V5.5 Maze** | v10 | Bone-papper, ljus serif (300), chartreuse som highlighter | Lugnt forskningsjournal-uttryck |
| **V5.6 Huddle** | v11 | Vit canvas, dämpade pastell-kort (salvia/lavendel/rosa) | Kurerad katalog-/poster-känsla |
| **V5.7 Awesomic** | v12 | Mist + extremt rundade kort, nästan-svart CTA, ett dekorativt rosa moment | Modernt, mjukt, marknadsplats-aktigt |

Versionsväljaren (nere till höger) är **identisk på alla sidor**: rad 1 = V0–V4, rad 2 = V5–V5.7, med prick på V0. Den visar alltid alla versioner oavsett var man är, så det går snabbt att hoppa runt och jämföra.

---

## Status & nästa steg

V5 är riktningen vi gillar och bygger vidare på. Skins finns kvar som referensbibliotek av visuella alternativ. Undersidorna (byrå, företag, pris, FAQ, kontakt, juridik) är byggda på V5:s formspråk. Sajten ligger på GitHub Pages och uppdateras vid varje push.
