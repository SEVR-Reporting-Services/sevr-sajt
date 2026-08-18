# SEVR — animerade embeds

Självbärande HTML-filer. Varje fil innehåller allt den behöver (CSS, SVG, skript)
och har transparent bakgrund. De är byggda för att läggas in i Framer som
**Embed → URL**, med bakgrund **None** och **Fill width**.

## Publicera med GitHub Pages

```bash
git init
git add .
git commit -m "SEVR embeds"
git branch -M main
git remote add origin git@github.com:<ditt-konto>/sevr-embeds.git
git push -u origin main
```

Sedan i repot: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save.**
Efter en minut ligger filerna på

```
https://<ditt-konto>.github.io/sevr-embeds/<filnamn>.html
```

Öppna `index.html` på samma adress för en översikt med alla länkar.

## Filerna

| Fil | Duk (b × h) | Vad den gör |
| --- | --- | --- |
| `agent-stack.html` | 680 × 720 | Vertikal kortkarusell, namn + underrad + taggar. Mittkortet i fokus, resten mindre och suddiga. |
| `agent-stack-ren.html` | 680 × 560 | Samma karusell, bara ikon och namn. |
| `agent-karusell.html` | 680 × 440 | Tre band som glider åt olika håll: sex agenter plus «Kommer snart». |
| `agent-tidslinje.html` | 680 × 660 | Lodrät tidslinje, agenterna kör och blir klara i tur och ordning. |
| `agent-loop.html` | 680 × 680 | Ringlopp — agenter mot manuellt arbete. |
| `bruttovinst-sammanfattning.html` | 680 × 660 | Diagramkort → klick på **Sammanfatta** → sammanfattningskort med löpande kantljus. |
| `dataskydd-skold.html` | 680 × 680 | Kunddata rinner uppåt, pixelmoln lägger sig över, glassköld landar. |
| `vatsson-kalla.html` | 680 × 680 | Vatsson svarar, klick på källchippet öppnar källkortet med radvis överstrykning. |
| `personalisera-pill.html` | 680 × 448 | Pillret «Personalisera din AI-kollega» fälls upp och menyn vecklas ut. |
| `personalisera-chatt.html` | 680 × 680 | Chatt med personaliseringsrad och **Använd kunddata**. |
| `likviditet-kort.html` | 680 × 520 | Likviditetskortet. |
| `an3-2c77f5f74f.html`, `an3b-2334dd0513.html` | — | Lottie-animationerna för likviditet, lappade: rundade hörn, ram, klippt kurva och gradienter på staplarna. `an3b` är den med bildförhållande 1440/1287. |

## Om typsnittet

Filerna hämtar Inter från Google Fonts via `<link>` i `<head>`. Ligger de på en
sida som redan laddar Inter kan den raden tas bort.
