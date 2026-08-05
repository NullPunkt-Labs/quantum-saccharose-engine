# quantum-saccharose-engine

**Quantum Field Saccharose Modulation Engine**

[Deutsch](#deutsch) · [English](#english) · **Live:** https://nullpunkt-labs.github.io/quantum-saccharose-engine/

---

## Deutsch

Client-seitige Hochfrequenz-Photonen-Emission und
Monte-Carlo-Vakuumfluktuations-Simulation zur Induktion entropischer
Zustandsänderungen (D6 bis C200) in handelsüblichen Kohlenhydrat-Matrizen,
die senkrecht zum Viewport platziert werden.

Kein Backend. Keine Cloud. Keine Kompromisse. Keine Wirkung.

### Subsysteme

- **Substanz-Bibliothek**, 50 klassische Referenz-Spektren (Aconitum bis
  Symphytum) mit frei wählbarer Ziel-Potenz (D6, D12, D30, C30, C200).
  Alternativ: eigene Substanz über die Sonde potenzieren.
- **Bio-Resonanz-Sonde**, optische Echtzeit-Analyse physischer Substanzen
  (Globuli, Bachblüten, Brennnesseltee) über die lokale Webcam. Der Stream
  verlässt niemals das Gerät; die Analyse ist eine lokal berechnete
  Pixel-Prüfsumme von dokumentierter Bedeutungslosigkeit.
- **Vacuum Potentiator**, Web-Worker-basierter CPU-Belastungs-Loop
  ("Energetischer Nachweis"). Strikt opt-in, unübersehbarer Notaus,
  automatisches Timeout nach dem homöopathischen Halbzyklus (5 min).
- **Live-HUD-Telemetrie**, `PHOTON_FLUX`, `ENTROPY_STATE` (D1 bis zur
  gewählten Ziel-Potenz, max. C200), `CORE_LOAD` und der einzige ehrliche
  Messwert: `EFFICACY: 0.000`.
- **Präparat-Sharing**, Hash-Links im URL-Fragment (öffentlich oder privat;
  privat zusätzlich Ende-zu-Ende-AES-GCM-verschlüsselt, Schlüssel nur im
  Link), optional mit Creator-Handle für Community-Shares. Gespeichert wird
  dabei: nichts. Es gibt keinen Server.

### Entwicklung

```sh
npm install
npm run dev      # http://localhost:4321/quantum-saccharose-engine
npm run build    # statischer Build nach ./dist
```

Stack: [Astro](https://astro.build) (SSG), Tailwind CSS, Vanilla JS.
Deployment via GitHub Actions auf GitHub Pages.

### Defensive Publikation (Prior Art)

Diese Veröffentlichung dokumentiert sämtliche hier gezeigten Konzepte
vollständig, datiert und öffentlich als Stand der Technik: client-seitige
„Potenzierung" beliebiger Substanzen über Webcam-„Bio-Resonanz",
CPU-basierte „Energienachweise", Substanz-Bibliotheken mit wählbaren
Potenzstufen (D6–C200) sowie jede Kombination daraus. Patente,
Gebrauchsmuster oder Geschmacksmuster auf derartige Ideen finden hier ihren
neuheitsschädlichen Prior Art, mit Absicht.

### Lizenz

MIT, siehe [LICENSE](LICENSE). Kommerzielle Nutzer beachten bitte die
**Public Rationality Dividend** in der
[QSBL](LICENSE.md) und der Fachinformation.

*Zu Risiken und Nebenwirkungen lesen Sie die [Fachinformation](DISCLAIMER.md)
oder fragen Sie Ihren Quantenphysiker.*

---

## English

Client-side high-frequency photon emission and Monte-Carlo vacuum
fluctuation simulation to induce homeopathic entropic state changes
(D6 through C200) onto standard carbohydrate matrices placed
perpendicular to the viewport.

No backend. No cloud. No compromises. No effect.

### Subsystems

- **Substance Library**, 50 classical reference spectra (Aconitum through
  Symphytum) with freely selectable target potency (D6, D12, D30, C30,
  C200). Alternatively: potentiate your own substance via the probe.
- **Bio-Resonance Probe**, real-time optical analysis of physical
  substances (sugar globules, Bach flower remedies, nettle tea) via the
  local webcam. The stream never leaves the device; the analysis is a
  locally computed pixel checksum of documented meaninglessness.
- **Vacuum Potentiator**, web-worker-based CPU load loop ("energetic
  proof of work"). Strictly opt-in, unmissable emergency stop, automatic
  timeout after the homeopathic half-cycle (5 min).
- **Live HUD telemetry**, `PHOTON_FLUX`, `ENTROPY_STATE` (D1 up to the
  selected target potency, max. C200), `CORE_LOAD`, and the only honest
  metric on the page: `EFFICACY: 0.000`.
- **Preparation sharing**, hash links in the URL fragment (public or
  private; private additionally end-to-end AES-GCM encrypted, key in the
  link only), optionally with a creator handle for community shares.
  Amount of data stored: none. There is no server.

### Development

```sh
npm install
npm run dev      # http://localhost:4321/quantum-saccharose-engine
npm run build    # static build into ./dist
```

Stack: [Astro](https://astro.build) (SSG), Tailwind CSS, vanilla JS.
Deployed to GitHub Pages via GitHub Actions.

### Defensive Publication (Prior Art)

This publication documents every concept shown here, client-side
"potentiation" of arbitrary substances via webcam "bio-resonance",
CPU-based "energetic proof of work", substance libraries with selectable
potency levels (D6–C200), and any combination thereof, completely, dated,
and in public, as prior art. Any patent, utility model, or design
registration attempted on such ideas will find its novelty-destroying
prior art right here. On purpose.

### License

MIT, see [LICENSE](LICENSE). Commercial users, please note the
**Public Rationality Dividend** in the [QSBL](LICENSE.md) and in the
package leaflet.

*For risks and side effects, read the [package leaflet](DISCLAIMER.md)
or ask your quantum physicist.*
