# SEVR-sajt – innehållsarkitektur

Det här är inte designen. Det här är **underlaget** som designen byggs av.

Allt innehåll till SEVR Insights webbplats bor här, i markdown. Människor läser
och fyller i. AI (Claude, ChatGPT, Framer AI, v0, Lovable) läser samma filer och
genererar sidor. Utvecklaren läser samma filer. En källa, alla kan jobba mot den.

> Princip: **vi designar förståelsen av affären först – sajten är resultatet.**
> Så länge frågorna nedan saknar svar kan ingen design bli rätt.

---

## Metoden: uppifrån och ner

```
Sitemap  →  Sidor  →  Sektioner (klassiska typer)  →  Info per sektion  →  Fyll  →  Klient redigerar
```

Vi låser strukturen FÖRST, copy SEDAN. Så länge strukturen inte står är all text en gissning.

## Filerna

**Struktur (fas 1 – nu):**
| Fil | Vad den gör |
|---|---|
| `00-sitemap.md` | Litet antal sidor + globala element |
| `sektionsbibliotek.md` | Katalog över klassiska sektionstyper och vilken info varje behöver |
| `sidor/*.md` | Varje sida som en ordnad lista av sektioner, med tomma info-fält |

**Innehållsbank (fas 2 – fyll senare):**
| Fil | Vad den ger |
|---|---|
| `01-strategi.md` | Vad/för vem/problem/varför oss/varför nu/CTA |
| `02-malgrupper.md` | Byrå + Företag: smärtor, invändningar, vinster |
| `03-produkt.md` | Tre pelare som utfall |
| `04-budskap.md` | Röst, ton, rubrikbank, ord att undvika |
| `05-design.md` | Designsystem (SEVR Bridge-tokens) → sektionsmappning |

Arbetsgång: bekräfta sitemap → bekräfta sektioner per sida → fyll info-fälten
(med stöd av innehållsbanken) → generera sajt → klient redigerar.

---

## Hur du fyller i

Varje sektion i sidfilerna ser ut så här:

```md
### SEKTION: hero
STATUS: 🔴 tom
<!-- id: hero -->

**Rubrik:** [FYLL I]
**Underrubrik:** [FYLL I]
**CTA:** [FYLL I]

> FRÅGA: Vad ska besökaren känna på 3 sekunder?
> FRÅGA: Vilken målgrupp möter den här sidan först – byrå eller företag?
```

Tre saker att hålla reda på:

- **`[FYLL I]`** – tomt fält, skriv in text (eller be AI:n skriva ett utkast).
- **`> FRÅGA:`** – frågan du (eller kunden) måste besvara innan sektionen kan bli vass. Det är hjärtat i systemet. Radera frågan när den är besvarad.
- **`STATUS:`** – byt allt eftersom: `🔴 tom` → `🟡 utkast` → `✅ klar`.

Du behöver inte fylla allt själv. Öppna Claude/ChatGPT och skriv t.ex.
*"Skriv hero för startsidan utifrån 01-strategi.md och 04-budskap.md"* – AI:n har
all kontext den behöver i de här filerna.

---

## Kopplingen fil ↔ sajt (det här är poängen)

Varje sektion har ett stabilt **`id`** (t.ex. `<!-- id: hero -->`). Det id:t är
limmet mellan markdown och den genererade sajten:

1. Du fyller i sektionen `hero` här.
2. Generatorn (Framer AI / v0 / Claude) bygger en sektion med samma `id`.
3. Ändrar du copyn i `hero` här → regenerera bara den sektionen, inte hela sajten.

Så blir filen masterkällan och sajten en spegling. Ändringar börjar alltid i
markdown, aldrig direkt i designen – då hålls de i synk.

## Versionering

- Sidfilerna är "live". Vill du spara ett läge: kopiera till `versioner/`
  med datum, t.ex. `versioner/startsida-2026-06-18.md`.
- När en genererad sajtversion publiceras, notera vilket datum av filerna den
  byggdes på, längst upp i sidfilen (`Byggd från: 2026-06-18`).
- Ligger detta i Git räcker commit-historiken – då behövs ingen `versioner/`-mapp.

---

## För medarbetare (GitHub)

Det här repot är källan. Så jobbar vi ihop:

- **Redigera innehåll** = ändra markdown-filerna (`sidor/*.md`, `00-sitemap.md`, innehållsbanken `01–05`). Det är där allt bor.
- **Se prototypen** = `index.html` är en gråskalig wireframe av alla sidor. Den ligger live via GitHub Pages (länk i repots "About"/Settings → Pages).
- **Föreslå ändringar** = jobba i en egen branch och öppna en pull request, eller redigera direkt om du är collaborator.
- `index.html` är handbyggd från sidfilerna just nu. Ändrar du strukturen i markdown – säg till så regenererar vi prototypen.

Konvention och statustaggar står beskrivna ovan. Wireframe-läge: vi låser struktur och innehåll, design kommer sedan.

## Status just nu

Grundstrukturen är byggd och förifylld från befintlig vision- och säljcopy.
Nästa steg: besvara `> FRÅGA:`-raderna och fyll `[FYLL I]`, sektion för sektion.

Öppna frågor som blockerar (flaggade i filerna): egna SEVR-referenser/case,
riktiga siffror i värdestacken, status på agenterna (stäm av med Bartek),
företagsspårets story.
