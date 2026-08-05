export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const translations = {
  de: {
    meta: {
      title: 'quantum-saccharose-engine · Nullpunkt Labs',
      description:
        'Client-seitige Quantenfeld-Modulation für Saccharose-Matrizen: Potenzierung von D6 bis C200 im Browser via Photonen-Emission, Monte-Carlo-Vakuumfluktuation und optischem Bio-Feld-Feedback. Ohne Cloud. Ohne Kompromisse.',
    },
    nav: {
      fieldNominal: 'FELD: NOMINAL',
      about: 'Über uns',
      roadmap: 'Roadmap',
      leaflet: 'Fachinformation',
      fontSize: 'Schriftgröße umschalten',
    },
    hero: {
      eyebrow: 'QUANTUM FIELD SACCHAROSE MODULATION · REV 0.1',
      h1: ['Potenzierung.', 'Client-seitig.', 'Kompromisslos.'],
      sub: 'Die quantum-saccharose-engine induziert entropische Zustandsänderungen von D6 bis C200 in handelsüblichen Kohlenhydrat-Matrizen, direkt im Browser. Hochfrequente Photonen-Emission, Monte-Carlo-Vakuumfluktuation und optisches Bio-Feld-Feedback. Ohne Cloud. Ohne Latenz. Ohne Wirkung über den bekannten Referenzeffekt hinaus.',
      ctaScanner: 'BIO-FELD KALIBRIEREN',
      ctaEngine: 'FELD-MODULATION BEGINNEN →',
      stats: [
        { label: 'OPTISCHES BAND', value: '482.5 THz' },
        { label: 'ENTROPIE-BEREICH', value: 'D6 – C200' },
        { label: 'CLOUD-ABHÄNGIGKEITEN', value: '0' },
        { label: 'WIRKSAMKEIT', value: '0.000' },
      ],
    },
    library: {
      eyebrow: 'SUBSYSTEM 00 · SUBSTANZ-BIBLIOTHEK',
      h2: 'Ihre Substanz. Oder unsere Referenz.',
      body: 'Potenzieren Sie Ihr eigenes Material über die Bio-Resonanz-Sonde, oder laden Sie eines von 50 klassischen Referenz-Spektren aus der Nullpunkt-Bibliothek. Anschließend wählen Sie die Ziel-Potenz. Höhere Potenzen sind selbstverständlich wirksamer: Es ist ja weniger drin.',
      substanceLabel: 'REFERENZ-SUBSTANZ',
      potencyLabel: 'ZIEL-POTENZ',
      customOption: 'Eigene Substanz (Bio-Resonanz-Sonde)',
      readoutIdle:
        'AKTIVE MATRIX: Eigene Substanz · D30, Kalibrierung über Subsystem 01 erforderlich.',
      note: 'Alle Referenz-Spektren sind vollständig veröffentlicht und damit Stand der Technik (Prior Art). Wirksamkeit je Eintrag: 0.000.',
      groupClassic: 'Klassische Einzelmittel',
      groupBeta: 'Biochemie nach Dr. Schüssler, BETA',
      betaLabel:
        'Vorabzugang zu kommenden Potenzierungen aktivieren, Biochemisches Beta-Programm (Schüssler-Salze Nr. 1–27)',
      shareLabel: 'PRÄPARAT TEILEN (HASH-LINK)',
      creatorPlaceholder: 'creator-handle (optional)',
      sharePublic: 'ÖFFENTLICH TEILEN',
      sharePrivate: 'PRIVAT TEILEN',
      shareNote:
        'ÖFFENTLICH: Das Präparat darf gefunden, katalogisiert und künftig in der Galerie angezeigt werden (siehe Roadmap). PRIVAT: nur über den nicht erratbaren Link erreichbar und zusätzlich Ende-zu-Ende-AES-GCM-verschlüsselt, der Schlüssel steht ausschließlich im URL-Fragment und wird technisch bedingt niemals an einen Server übertragen (an unseren schon gar nicht, wir haben keinen). Übertragene Wirkung in beiden Fällen: 0.000.',
      galleryLabel: 'MEINE GETEILTEN PRÄPARATE (LOKALE GALERIE)',
      galleryNote:
        'Diese Galerie existiert ausschließlich in Ihrem Browser (localStorage). Ihre Präparate erreichen zu keinem Zeitpunkt unseren Server, wir hätten auch keinen. Private Präparate erscheinen aus Diskretionsgründen nicht einmal hier.',
      drmNote:
        'Deflationäre Tokenomics: Jeder Link trägt ein Dosis-Kontingent von 4 Potenzierungen (Client-Side-DRM für Zero-Efficacy-Assets). Das Kontingent wird ausschließlich auf dem Gerät des Empfängers geführt.',
    },
    scanner: {
      eyebrow: 'SUBSYSTEM 01 · BIO-RESONANZ-SONDE',
      h2: 'Zeigen Sie Ihre Substanz. Den Rest erledigt das Licht.',
      body: 'Platzieren Sie Ihre Substanz vor der Linse: Globuli, Bachblüten, Brennnesseltee. Die Sonde erfasst photonische Reflexionen in Echtzeit und justiert die Modulationsmatrix der gewählten Ziel-Potenz dynamisch nach.',
      start: 'BIO-FELD-KALIBRIERUNG STARTEN',
      stop: 'SONDE TRENNEN',
      idle: 'SONDE OFFLINE, KALIBRIERUNG ERFORDERLICH',
      labels: {
        status: 'STATUS',
        freq: 'SUBSTANZ-FREQUENZ',
        checksum: 'FELD-CHECKSUM',
        lock: 'QUANTUM-LOCK',
      },
      standby: 'Standby',
      privacy:
        'Ihre Photonen und Videostreams verlassen niemals das Gerät, lokale optische Resonanz-Analyse. Keine Uploads, kein Tracking.',
    },
    engine: {
      eyebrow: 'SUBSYSTEM 02 · VAKUUM-POTENZIATOR',
      h2: 'Rechenleistung, die man hören kann.',
      body: 'Der Energetische Nachweis: Monte-Carlo-Vakuumfluktuationen werden in dedizierten Rechenkanälen simuliert, bis die thermische Signatur Ihres Geräts die Potenzierung hörbar bestätigt.',
      ignite: 'FELD-MODULATION BEGINNEN',
      abort: 'POTENZIERUNG ABBRECHEN',
      locked:
        'Gesperrt, Subsystem 01 (Bio-Feld-Kalibrierung) muss zuerst ausgeführt werden, oder laden Sie ein Referenz-Spektrum aus der Bibliothek (Subsystem 00). Ohne Substanz-Spektrum keine Potenzierung.',
      ready: 'Bereit. Feld-Modulation nicht aktiv.',
      targetDefault: 'EIGENE SUBSTANZ · D30',
      standbyState: 'D01 · STANDBY',
      note: 'Prozess-Zyklus gemäß DIN EN ISO 17025, Homöopathischer Halbzyklus nach Hahnemann-Standard (5 Minuten), thermisch erzwungen durch CPU-Proof-of-Work. Der Lüfter Ihres Geräts wird hörbar anspringen; automatischer Stopp nach Zyklusende.',
      warning:
        'ACHTUNG: Dieser Vorgang potenziert nachweislich Ihren Strom- und Akkuverbrauch. Es ist der einzige Effekt dieser Engine mit belastbarer klinischer Evidenz.',
      safety:
        'Sicherheitsdatenblatt Saccharose-Staub (ISO 9001:2004): Bei der Potenzierung von D12 bis D30 kann es durch unkontrollierte photonische Vakuum-Emission zu einer thermischen Überlastung des Süßungsmittels kommen. Nicht in der Nähe von Kaffeemaschinen oder elektromagnetischen Kaffeemühlen betreiben.',
      consentTitle: 'Bio-Feld-Einwilligung (Art. 6 DSGVO)',
      consentBody:
        'Gemäß Art. 6 DSGVO wird hiermit versichert, dass Ihre optischen Photonenströme (Bachblüten-/Globuli-Spektrum) weder an Cloud-Konnektoren noch an Pharma-Großkonzerne übermittelt werden, sondern lokal im CPU-Cache verglühen.',
      consentAccept: 'ZUR KENNTNIS GENOMMEN, POTENZIERUNG FORTSETZEN',
    },
    viewer: {
      eyebrow: 'SUBSYSTEM 03 · OFFENER KERN',
      h2: 'Nichts zu verbergen. Wörtlich.',
      body: 'Vollständige Transparenz ist Teil der Nullpunkt-Philosophie: Der Kern der Engine liegt offen, inklusive sämtlicher Kommentare. Lesen lohnt sich.',
    },
    footer: {
      tagline: 'Quantum Field Saccharose Modulation · Rev 0.1.2',
      changelogLabel: 'Revisionshistorie',
      changelog: [
        'Rev 0.1.2, Korrektur im Monte-Carlo-Vakuum-Modul: thermische CPU-Last von 85 % auf 95 % angehoben, um die homöopathische Wirkstofffreisetzung im MacBook Pro hörbarer zu machen.',
        'Rev 0.1.1, Bugfix: Bio-Resonanz-Sonde erkennt nun auch billigen Discounter-Zucker zuverlässig als Hochsektor-Globuli.',
        'Rev 0.1.0, Erstfreigabe nach interner Placebo-Abnahme (bestanden: 0 von 0 Wirksamkeitstests).',
      ],
      license: 'Lizenz (MIT)',
      leaflet: 'Fachinformation',
      privacy: 'Datenschutz',
      smallprint:
        '© 2026 Nullpunkt Labs. Alle Messwerte werden lokal erhoben; kein Tracking, keine Cookies, keine Cloud. Zu Risiken und Nebenwirkungen lesen Sie die',
      smallprintLink: 'Fachinformation',
      smallprintEnd: 'oder fragen Sie Ihren Quantenphysiker.',
    },
  },
  en: {
    meta: {
      title: 'quantum-saccharose-engine · Nullpunkt Labs',
      description:
        'Client-side quantum field modulation for saccharose matrices: in-browser potentiation from D6 through C200 via photon emission, Monte-Carlo vacuum fluctuation, and optical bio-field feedback. No cloud. No compromises.',
    },
    nav: {
      fieldNominal: 'FIELD: NOMINAL',
      about: 'About us',
      roadmap: 'Roadmap',
      leaflet: 'Leaflet',
      fontSize: 'Toggle font size',
    },
    hero: {
      eyebrow: 'QUANTUM FIELD SACCHAROSE MODULATION · REV 0.1',
      h1: ['Potentiation.', 'Client-side.', 'Uncompromising.'],
      sub: 'The quantum-saccharose-engine induces entropic state changes from D6 through C200 in standard carbohydrate matrices, directly in your browser. High-frequency photon emission, Monte-Carlo vacuum fluctuation, and optical bio-field feedback. No cloud. No latency. No effect beyond the well-known reference effect.',
      ctaScanner: 'CALIBRATE BIO-FIELD',
      ctaEngine: 'IGNITE FIELD MODULATION →',
      stats: [
        { label: 'OPTICAL BAND', value: '482.5 THz' },
        { label: 'ENTROPY RANGE', value: 'D6 – C200' },
        { label: 'CLOUD DEPS', value: '0' },
        { label: 'EFFICACY', value: '0.000' },
      ],
    },
    library: {
      eyebrow: 'SUBSYSTEM 00 · SUBSTANCE LIBRARY',
      h2: 'Your substance. Or our reference.',
      body: 'Potentiate your own material via the bio-resonance probe, or load one of 50 classical reference spectra from the Nullpunkt library. Then select the target potency. Higher potencies are of course more effective: there is less in them.',
      substanceLabel: 'REFERENCE SUBSTANCE',
      potencyLabel: 'TARGET POTENCY',
      customOption: 'Own substance (bio-resonance probe)',
      readoutIdle:
        'ACTIVE MATRIX: Own substance · D30, calibration via subsystem 01 required.',
      note: 'All reference spectra are published in full and therefore prior art. Efficacy per entry: 0.000.',
      groupClassic: 'Classical remedies',
      groupBeta: 'Biochemistry after Dr. Schüssler, BETA',
      betaLabel:
        'Enable early access to upcoming potentiations, biochemical beta program (Schüssler salts Nos. 1–27)',
      shareLabel: 'SHARE PREPARATION (HASH LINK)',
      creatorPlaceholder: 'creator handle (optional)',
      sharePublic: 'SHARE PUBLICLY',
      sharePrivate: 'SHARE PRIVATELY',
      shareNote:
        'PUBLIC: the preparation may be found, cataloged, and eventually displayed in the gallery (see roadmap). PRIVATE: reachable only via the unguessable link and additionally end-to-end AES-GCM encrypted, the key lives exclusively in the URL fragment and is, by technical necessity, never transmitted to any server (least of all ours; we do not have one). Transferred efficacy in both cases: 0.000.',
      galleryLabel: 'MY SHARED PREPARATIONS (LOCAL GALLERY)',
      galleryNote:
        'This gallery exists exclusively in your browser (localStorage). Your preparations never reach our server at any point, we would not have one anyway. Private preparations, for reasons of discretion, do not even appear here.',
      drmNote:
        'Deflationary tokenomics: every link carries a dose quota of 4 potentiations (client-side DRM for zero-efficacy assets). The quota is maintained exclusively on the recipient’s device.',
    },
    scanner: {
      eyebrow: 'SUBSYSTEM 01 · BIO-RESONANCE PROBE',
      h2: 'Show us your substance. Light does the rest.',
      body: 'Place your substance in front of the lens: sugar globules, Bach flower remedies, nettle tea. The probe captures photonic reflections in real time and dynamically re-adjusts the modulation matrix of the selected target potency.',
      start: 'START BIO-FIELD CALIBRATION',
      stop: 'DISCONNECT PROBE',
      idle: 'PROBE OFFLINE, CALIBRATION REQUIRED',
      labels: {
        status: 'STATUS',
        freq: 'SUBSTANCE FREQUENCY',
        checksum: 'FIELD CHECKSUM',
        lock: 'QUANTUM-LOCK',
      },
      standby: 'Standby',
      privacy:
        'Your photons and video streams never leave the device, local optical resonance analysis. No uploads, no tracking.',
    },
    engine: {
      eyebrow: 'SUBSYSTEM 02 · VACUUM POTENTIATOR',
      h2: 'Computing power you can hear.',
      body: 'The energetic proof of work: Monte-Carlo vacuum fluctuations are simulated in dedicated compute channels until the thermal signature of your device audibly confirms potentiation.',
      ignite: 'IGNITE FIELD MODULATION',
      abort: 'ABORT POTENTIATION',
      locked:
        'Locked, run subsystem 01 (bio-field calibration) first, or load a reference spectrum from the library (subsystem 00). No substance spectrum, no potentiation.',
      ready: 'Ready. Field modulation inactive.',
      targetDefault: 'OWN SUBSTANCE · D30',
      standbyState: 'D01 · STANDBY',
      note: 'Process cycle per DIN EN ISO 17025, homeopathic half-cycle per Hahnemann standard (5 minutes), thermally enforced via CPU proof of work. Your device fan will audibly spin up; automatic stop at end of cycle.',
      warning:
        'WARNING: This process demonstrably potentiates your power and battery consumption. It is the only effect of this engine backed by solid clinical evidence.',
      safety:
        'Safety data sheet, saccharose dust (ISO 9001:2004): During potentiation from D12 to D30, uncontrolled photonic vacuum emission may cause thermal overload of the sweetening agent. Do not operate in the vicinity of coffee machines or electromagnetic coffee grinders.',
      consentTitle: 'Bio-Field Consent (Art. 6 GDPR)',
      consentBody:
        'Pursuant to Art. 6 GDPR, we hereby affirm that your optical photon streams (Bach flower / globule spectrum) are transmitted neither to cloud connectors nor to large pharmaceutical corporations, but burn up locally in the CPU cache.',
      consentAccept: 'ACKNOWLEDGED, CONTINUE POTENTIATION',
    },
    viewer: {
      eyebrow: 'SUBSYSTEM 03 · OPEN CORE',
      h2: 'Nothing to hide. Literally.',
      body: 'Full transparency is part of the Nullpunkt philosophy: the core of the engine is open, including every single comment. Reading it is worth your time.',
    },
    footer: {
      tagline: 'Quantum Field Saccharose Modulation · Rev 0.1.2',
      changelogLabel: 'Revision history',
      changelog: [
        'Rev 0.1.2, Correction in the Monte-Carlo vacuum module: thermal CPU load raised from 85% to 95% to make homeopathic active-ingredient release more audible on the MacBook Pro.',
        'Rev 0.1.1, Bugfix: the bio-resonance probe now reliably recognizes cheap discount sugar as high-sector globules.',
        'Rev 0.1.0, Initial release after internal placebo acceptance (passed: 0 of 0 efficacy tests).',
      ],
      license: 'License (MIT)',
      leaflet: 'Package leaflet',
      privacy: 'Privacy',
      smallprint:
        '© 2026 Nullpunkt Labs. All measurements are taken locally; no tracking, no cookies, no cloud. For risks and side effects, read the',
      smallprintLink: 'package leaflet',
      smallprintEnd: 'or ask your quantum physicist.',
    },
  },
} as const;

export type T = (typeof translations)['de'] | (typeof translations)['en'];
