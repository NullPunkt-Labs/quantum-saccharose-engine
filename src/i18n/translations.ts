export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const translations = {
  de: {
    meta: {
      title: 'quantum-saccharose-engine — Nullpunkt Labs',
      description:
        'Client-seitige Quantenfeld-Modulation für Saccharose-Matrizen: D30-Potenzierung im Browser via Photonen-Emission, Monte-Carlo-Vakuumfluktuation und optischem Bio-Feld-Feedback. Ohne Cloud. Ohne Kompromisse.',
    },
    nav: {
      fieldNominal: 'FELD: NOMINAL',
    },
    hero: {
      eyebrow: 'QUANTUM FIELD SACCHAROSE MODULATION · REV 0.1',
      h1: ['Potenzierung.', 'Client-seitig.', 'Kompromisslos.'],
      sub: 'Die quantum-saccharose-engine induziert entropische D30-Zustandsänderungen in handelsüblichen Kohlenhydrat-Matrizen — direkt im Browser. Hochfrequente Photonen-Emission, Monte-Carlo-Vakuumfluktuation und optisches Bio-Feld-Feedback. Ohne Cloud. Ohne Latenz. Ohne Wirkung über den bekannten Referenzeffekt hinaus.',
      ctaScanner: 'BIO-FELD KALIBRIEREN',
      ctaEngine: 'FELD-MODULATION ZÜNDEN →',
      stats: [
        { label: 'OPTISCHES BAND', value: '482.5 THz' },
        { label: 'ENTROPIE-BEREICH', value: 'D1 – D30' },
        { label: 'CLOUD-ABHÄNGIGKEITEN', value: '0' },
        { label: 'WIRKSAMKEIT', value: '0.000' },
      ],
    },
    scanner: {
      eyebrow: 'SUBSYSTEM 01 · OPTISCHE RESONANZ & BIO-FELD-FEEDBACK',
      h2: 'Die Bio-Resonanz-Sonde',
      body: 'Platzieren Sie Ihre Substanz — Globuli, Bachblüten, Brennnesseltee — vor der Linse. Die Sonde erfasst photonische Reflexionen in Echtzeit und justiert die D30-Modulationsmatrix dynamisch nach.',
      start: 'BIO-FELD-KALIBRIERUNG STARTEN',
      stop: 'SONDE TRENNEN',
      idle: 'SONDE OFFLINE — KALIBRIERUNG ERFORDERLICH',
      labels: {
        status: 'STATUS',
        freq: 'SUBSTANZ-FREQUENZ',
        checksum: 'FELD-CHECKSUM',
        lock: 'QUANTUM-LOCK',
      },
      standby: 'Standby',
      privacy:
        'Ihre Photonen und Videostreams verlassen niemals das Gerät — lokale optische Resonanz-Analyse. Keine Uploads, kein Tracking.',
    },
    engine: {
      eyebrow: 'SUBSYSTEM 02 · VAKUUM-POTENZIATOR',
      h2: 'Die Quantum-Saccharose-Engine',
      body: 'Der Energetische Nachweis: Monte-Carlo-Vakuumfluktuationen werden in dedizierten Rechenkanälen simuliert, bis die thermische Signatur Ihres Geräts die Potenzierung hörbar bestätigt.',
      ignite: 'FELD-MODULATION ZÜNDEN',
      abort: 'POTENZIERUNG ABBRECHEN',
      locked:
        'Gesperrt — Subsystem 01 (Bio-Feld-Kalibrierung) muss zuerst ausgeführt werden. Ohne Substanz-Spektrum keine Potenzierung.',
      ready: 'Bereit. Feld-Modulation nicht aktiv.',
      standbyState: 'D01 · STANDBY',
      note: 'Hinweis: Der Energetische Nachweis lastet Ihre CPU gezielt aus — der Lüfter Ihres Geräts wird hörbar anspringen. Automatischer Stopp nach dem homöopathischen Halbzyklus (5 Minuten).',
      warning:
        'ACHTUNG: Dieser Vorgang potenziert nachweislich Ihren Strom- und Akkuverbrauch. Es ist der einzige Effekt dieser Engine mit belastbarer klinischer Evidenz.',
    },
    viewer: {
      eyebrow: 'SUBSYSTEM 03 · OFFENER KERN',
      h2: 'Der Algorithmus. Ungeschönt.',
      body: 'Vollständige Transparenz ist Teil der Nullpunkt-Philosophie: Der Kern der Engine liegt offen — inklusive sämtlicher Kommentare. Lesen lohnt sich.',
    },
    footer: {
      tagline: 'Quantum Field Saccharose Modulation · Rev 0.1.0',
      license: 'Lizenz (MIT)',
      leaflet: 'Fachinformation',
      smallprint:
        '© 2026 Nullpunkt Labs. Alle Messwerte werden lokal erhoben; kein Tracking, keine Cookies, keine Cloud. Zu Risiken und Nebenwirkungen lesen Sie die',
      smallprintLink: 'Fachinformation',
      smallprintEnd: 'oder fragen Sie Ihren Quantenphysiker.',
    },
  },
  en: {
    meta: {
      title: 'quantum-saccharose-engine — Nullpunkt Labs',
      description:
        'Client-side quantum field modulation for saccharose matrices: in-browser D30 potentiation via photon emission, Monte-Carlo vacuum fluctuation, and optical bio-field feedback. No cloud. No compromises.',
    },
    nav: {
      fieldNominal: 'FIELD: NOMINAL',
    },
    hero: {
      eyebrow: 'QUANTUM FIELD SACCHAROSE MODULATION · REV 0.1',
      h1: ['Potentiation.', 'Client-side.', 'Uncompromising.'],
      sub: 'The quantum-saccharose-engine induces entropic D30 state changes in standard carbohydrate matrices — directly in your browser. High-frequency photon emission, Monte-Carlo vacuum fluctuation, and optical bio-field feedback. No cloud. No latency. No effect beyond the well-known reference effect.',
      ctaScanner: 'CALIBRATE BIO-FIELD',
      ctaEngine: 'IGNITE FIELD MODULATION →',
      stats: [
        { label: 'OPTICAL BAND', value: '482.5 THz' },
        { label: 'ENTROPY RANGE', value: 'D1 – D30' },
        { label: 'CLOUD DEPS', value: '0' },
        { label: 'EFFICACY', value: '0.000' },
      ],
    },
    scanner: {
      eyebrow: 'SUBSYSTEM 01 · OPTICAL RESONANCE & BIO-FIELD FEEDBACK',
      h2: 'The Bio-Resonance Probe',
      body: 'Place your substance — sugar globules, Bach flower remedies, nettle tea — in front of the lens. The probe captures photonic reflections in real time and dynamically re-adjusts the D30 modulation matrix.',
      start: 'START BIO-FIELD CALIBRATION',
      stop: 'DISCONNECT PROBE',
      idle: 'PROBE OFFLINE — CALIBRATION REQUIRED',
      labels: {
        status: 'STATUS',
        freq: 'SUBSTANCE FREQUENCY',
        checksum: 'FIELD CHECKSUM',
        lock: 'QUANTUM-LOCK',
      },
      standby: 'Standby',
      privacy:
        'Your photons and video streams never leave the device — local optical resonance analysis. No uploads, no tracking.',
    },
    engine: {
      eyebrow: 'SUBSYSTEM 02 · VACUUM POTENTIATOR',
      h2: 'The Quantum Saccharose Engine',
      body: 'The energetic proof of work: Monte-Carlo vacuum fluctuations are simulated in dedicated compute channels until the thermal signature of your device audibly confirms potentiation.',
      ignite: 'IGNITE FIELD MODULATION',
      abort: 'ABORT POTENTIATION',
      locked:
        'Locked — subsystem 01 (bio-field calibration) must run first. No substance spectrum, no potentiation.',
      ready: 'Ready. Field modulation inactive.',
      standbyState: 'D01 · STANDBY',
      note: 'Note: The energetic proof of work deliberately loads your CPU — the fan of your device will audibly spin up. Automatic stop after the homeopathic half-cycle (5 minutes).',
      warning:
        'WARNING: This process demonstrably potentiates your power and battery consumption. It is the only effect of this engine backed by solid clinical evidence.',
    },
    viewer: {
      eyebrow: 'SUBSYSTEM 03 · OPEN CORE',
      h2: 'The Algorithm. Unvarnished.',
      body: 'Full transparency is part of the Nullpunkt philosophy: the core of the engine is open — including every single comment. Reading it is worth your time.',
    },
    footer: {
      tagline: 'Quantum Field Saccharose Modulation · Rev 0.1.0',
      license: 'License (MIT)',
      leaflet: 'Package leaflet',
      smallprint:
        '© 2026 Nullpunkt Labs. All measurements are taken locally; no tracking, no cookies, no cloud. For risks and side effects, read the',
      smallprintLink: 'package leaflet',
      smallprintEnd: 'or ask your quantum physicist.',
    },
  },
} as const;

export type T = (typeof translations)['de'] | (typeof translations)['en'];
