# 00 – Sitemap

Litet, medvetet. Vi bygger uppifrån och ner:
**Sitemap → Sidor → Sektioner (klassiska typer) → Info per sektion → fyll → klient redigerar.**

Nu låser vi bara strukturen. Ingen copy ännu.

---

## Sidor

| # | Sida | Rutt | Syfte | Primär målgrupp |
|---|---|---|---|---|
| 1 | Startsida | `/` | Hubb: vad är SEVR + dela i två spår | alla |
| 2 | För byråer | `/for-byraer` | Sälj värde till byrå + byråpris | byrå |
| 3 | För företag | `/for-foretag` | Sälj värde till företag/VD + företagspris | företag |
| 4 | Pris | `/pris` | Samlad prisöversikt | alla |
| 5 | Boka demo | `/demo` | Konvertering (formulär) | alla |
| 6 | Vision | `/vision` | Manifest/story – tron först, produkt sedan | alla |

**Möjliga senare (flaggade, ej i v1):**
- Regelverk-assistenten `/regelverk-assistenten` – egen erbjudandesida (pelare 2).

> FRÅGA: Räcker 5 sidor för v1? Ska Pris vara egen sida eller bara en sektion på varje spår?
> FRÅGA: Tar vi med Regelverk-assistenten som egen sida nu eller senare?

## Globala element (på alla sidor)

- **Nav** – logotyp, meny (För byråer · För företag · Pris), demo-knapp, ev. spårväljare.
- **Footer** – logotyp + tagline, snabblänkar, trygghetsmärken, juridiskt/kontakt.
- **Återkommande trygghetsmärken** – GDPR · ingen modellträning på er data · svar med källa.

Definieras som sektionstyper i `sektionsbibliotek.md`.

---

## Sektioner per sida (översikt)

Detaljerna ligger i `sidor/*.md`. Här bara ordningen, byggd av klassiska sektioner:

**Startsida:** Hero → Trygghetsrad → Logotyper → Spårval → Feature (3 pelare) → Så fungerar → Bevis/Stats → Omdömen → FAQ → CTA-band

**För byråer:** Hero → Problem → Lösning → Feature (pelare) → Så fungerar → Stats/Värde → Omdömen → Pris → FAQ → CTA-band

**För företag:** Hero → Problem → Lösning → Feature → Stats/Värde → Omdömen → Pris → FAQ → CTA-band

**Pris:** Hero (kort) → Pris (byrå) → Pris (företag) → FAQ → CTA-band

**Boka demo:** Hero (kort) → Formulär → Trygghetsrad → FAQ (kort)

**Vision:** Hero → Textblock (det här tror vi på) → Textblock (vår vision) → Textblock (människa & maskin) → Feature (hur vi gör det) → Textblock (varför det spelar roll) → CTA-band
