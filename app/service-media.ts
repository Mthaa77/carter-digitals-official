const svgData = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const scene = (title: string, accent: string, accent2: string, body: string) => svgData(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1000" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071116"/><stop offset="0.55" stop-color="#10252e"/><stop offset="1" stop-color="#071116"/></linearGradient>
    <radialGradient id="halo" cx="70%" cy="24%" r="60%"><stop stop-color="${accent}" stop-opacity="0.42"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff" stop-opacity="0.26"/><stop offset="0.35" stop-color="#ffffff" stop-opacity="0.05"/><stop offset="1" stop-color="#b8f3ff" stop-opacity="0.12"/></linearGradient>
    <filter id="blur"><feGaussianBlur stdDeviation="24"/></filter>
    <filter id="shadow"><feDropShadow dx="0" dy="28" stdDeviation="26" flood-color="#000000" flood-opacity="0.52"/></filter>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0V44" fill="none" stroke="#d9f8ff" stroke-opacity="0.08"/></pattern>
  </defs>
  <rect width="1400" height="1000" fill="url(#bg)"/>
  <rect width="1400" height="1000" fill="url(#grid)"/>
  <ellipse cx="1040" cy="210" rx="420" ry="340" fill="url(#halo)" filter="url(#blur)"/>
  <ellipse cx="260" cy="830" rx="330" ry="230" fill="${accent2}" fill-opacity="0.15" filter="url(#blur)"/>
  <path d="M0 740C260 630 470 890 700 730S1130 620 1400 730" fill="none" stroke="#dffaff" stroke-opacity="0.12" stroke-width="2"/>
  ${body}
  <rect x="54" y="54" width="1292" height="892" rx="30" fill="none" stroke="#e8fbff" stroke-opacity="0.16" stroke-width="2"/>
  <g fill="#d9f9ff" font-family="Arial, Helvetica, sans-serif" letter-spacing="4"><text x="88" y="112" font-size="20" fill-opacity="0.74">CARTER DIGITALS / CAPABILITY VISUAL</text><text x="88" y="886" font-size="18" fill-opacity="0.56">PREMIUM DIGITAL DELIVERY · PRETORIA</text></g>
</svg>`);

export const serviceVisuals = {
  signature: scene("Signature websites visual", "#38c7ff", "#ef5c73", `
    <g filter="url(#shadow)">
      <rect x="300" y="190" width="780" height="510" rx="34" fill="#0b171d" stroke="#baf4ff" stroke-opacity="0.6" stroke-width="4"/>
      <rect x="326" y="218" width="728" height="44" rx="16" fill="#132a32"/>
      <circle cx="358" cy="240" r="7" fill="#ef5c73"/><circle cx="381" cy="240" r="7" fill="#ffd27c"/><circle cx="404" cy="240" r="7" fill="#6ee9b3"/>
      <rect x="350" y="294" width="255" height="360" rx="20" fill="#122d38"/>
      <rect x="632" y="294" width="390" height="120" rx="22" fill="url(#glass)" stroke="#9ae8fa" stroke-opacity="0.46"/>
      <rect x="660" y="332" width="198" height="14" rx="7" fill="#e9fbff" fill-opacity="0.85"/><rect x="660" y="364" width="124" height="10" rx="5" fill="#c7e3e7" fill-opacity="0.5"/>
      <rect x="632" y="440" width="178" height="214" rx="22" fill="#0e222a"/><rect x="838" y="440" width="184" height="214" rx="22" fill="#152e39"/>
      <path d="M378 592C432 510 486 541 540 455" fill="none" stroke="#5ed9ff" stroke-width="11" stroke-linecap="round"/><circle cx="540" cy="455" r="12" fill="#ef5c73"/>
      <text x="350" y="335" fill="#f3feff" font-size="32" font-family="Arial" font-weight="700">YOUR BUSINESS</text><text x="350" y="376" fill="#a6c4c8" font-size="21" font-family="Arial">positioned with intent</text>
    </g>
  `),
  leads: scene("Lead engine visual", "#f05f71", "#49d6ff", `
    <g filter="url(#shadow)">
      <path d="M320 272H1080L910 470H490Z" fill="#13252d" stroke="#ffd0d5" stroke-opacity="0.55" stroke-width="4"/>
      <path d="M490 470H910L807 612H593Z" fill="#152f3b" stroke="#ffd0d5" stroke-opacity="0.5" stroke-width="4"/>
      <path d="M593 612H807L740 714H660Z" fill="#193946" stroke="#c8f7ff" stroke-opacity="0.6" stroke-width="4"/>
      <g fill="#eafcff"><circle cx="420" cy="225" r="22"/><circle cx="590" cy="178" r="16"/><circle cx="764" cy="226" r="26"/><circle cx="970" cy="170" r="18"/></g>
      <g stroke="#76dcff" stroke-width="4" stroke-linecap="round" stroke-opacity="0.72"><path d="M420 250l120 64"/><path d="M590 194l55 89"/><path d="M764 252l-12 62"/><path d="M970 187l-95 110"/></g>
      <circle cx="700" cy="665" r="52" fill="#f45e70"/><path d="M678 665l16 17 31-39" fill="none" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="348" y="330" fill="#ffffff" font-size="28" font-family="Arial" font-weight="700">ATTENTION</text><text x="542" y="528" fill="#ffffff" font-size="28" font-family="Arial" font-weight="700">INTEREST</text><text x="620" y="687" fill="#ffffff" font-size="20" font-family="Arial" font-weight="700">ACTION</text>
    </g>
  `),
  applications: scene("Web applications visual", "#60e0d0", "#6787ff", `
    <g filter="url(#shadow)">
      <rect x="295" y="174" width="810" height="560" rx="38" fill="#0c1b20" stroke="#c6fff8" stroke-opacity="0.55" stroke-width="4"/>
      <rect x="326" y="205" width="748" height="82" rx="22" fill="#14313a"/>
      <rect x="360" y="232" width="132" height="14" rx="7" fill="#eaffff" fill-opacity="0.8"/><rect x="908" y="228" width="118" height="20" rx="10" fill="#66dfc9"/>
      <rect x="326" y="316" width="210" height="388" rx="22" fill="#112a31"/>
      <rect x="564" y="316" width="510" height="158" rx="22" fill="url(#glass)" stroke="#bafff8" stroke-opacity="0.36"/>
      <rect x="564" y="500" width="244" height="204" rx="22" fill="#12323a"/>
      <rect x="832" y="500" width="242" height="204" rx="22" fill="#162833"/>
      <g fill="#bcefed"><rect x="359" y="355" width="116" height="12" rx="6"/><rect x="359" y="405" width="87" height="10" rx="5" fill-opacity="0.46"/><rect x="359" y="449" width="105" height="10" rx="5" fill-opacity="0.46"/><rect x="359" y="493" width="71" height="10" rx="5" fill-opacity="0.46"/></g>
      <path d="M600 431C658 397 690 424 742 369S846 375 912 336" fill="none" stroke="#68e7d3" stroke-width="11" stroke-linecap="round"/><circle cx="912" cy="336" r="12" fill="#80a6ff"/>
      <circle cx="686" cy="600" r="54" fill="#4ad2bb" fill-opacity="0.23"/><path d="M654 617l31-35 34 35" fill="none" stroke="#72ead8" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="862" y="547" width="142" height="18" rx="9" fill="#eafcff" fill-opacity="0.76"/><rect x="862" y="585" width="99" height="12" rx="6" fill="#b6cfd3" fill-opacity="0.42"/>
    </g>
  `),
  systems: scene("Business systems visual", "#ffbe70", "#4ec8ff", `
    <g filter="url(#shadow)">
      <g fill="#11262e" stroke="#d6f6ff" stroke-opacity="0.42" stroke-width="3"><rect x="246" y="260" width="230" height="148" rx="25"/><rect x="585" y="174" width="230" height="148" rx="25"/><rect x="924" y="260" width="230" height="148" rx="25"/><rect x="585" y="545" width="230" height="148" rx="25"/></g>
      <g stroke="#76dfff" stroke-width="5" stroke-linecap="round" stroke-opacity="0.68"><path d="M476 334h109"/><path d="M815 334h109"/><path d="M700 322v223"/></g>
      <g fill="#f3feff"><circle cx="476" cy="334" r="11"/><circle cx="585" cy="334" r="11"/><circle cx="815" cy="334" r="11"/><circle cx="924" cy="334" r="11"/><circle cx="700" cy="322" r="11"/><circle cx="700" cy="545" r="11"/></g>
      <g font-family="Arial" fill="#f7feff"><text x="282" y="319" font-size="23" font-weight="700">LEADS</text><text x="620" y="233" font-size="23" font-weight="700">WORKFLOW</text><text x="965" y="319" font-size="23" font-weight="700">CLIENTS</text><text x="634" y="605" font-size="23" font-weight="700">INSIGHT</text></g>
      <g fill="#b5d1d5" font-family="Arial" font-size="16"><text x="282" y="353">Capture and assign</text><text x="620" y="267">Move work forward</text><text x="965" y="353">Keep people informed</text><text x="634" y="639">See what matters</text></g>
      <circle cx="700" cy="742" r="43" fill="#ffbe70" fill-opacity="0.25"/><circle cx="700" cy="742" r="18" fill="#ffbe70"/>
    </g>
  `),
  ai: scene("AI ready growth visual", "#ca8dff", "#44d6ff", `
    <g filter="url(#shadow)">
      <rect x="490" y="226" width="420" height="420" rx="54" fill="#142a35" stroke="#d3b8ff" stroke-opacity="0.68" stroke-width="4"/>
      <rect x="534" y="270" width="332" height="332" rx="38" fill="#0c1a21" stroke="#79dbf7" stroke-opacity="0.38" stroke-width="3"/>
      <text x="700" y="444" text-anchor="middle" fill="#f6efff" font-size="86" font-family="Arial" font-weight="700">AI</text>
      <text x="700" y="489" text-anchor="middle" fill="#bbeaff" font-size="19" font-family="Arial" letter-spacing="5">READY LAYER</text>
      <g fill="none" stroke="#83e8ff" stroke-width="7" stroke-linecap="round" stroke-opacity="0.72"><path d="M490 337H330V210"/><path d="M910 337h160V210"/><path d="M490 535H330V695"/><path d="M910 535h160V695"/></g>
      <g fill="#cf9dff"><circle cx="330" cy="210" r="18"/><circle cx="1070" cy="210" r="18"/><circle cx="330" cy="695" r="18"/><circle cx="1070" cy="695" r="18"/></g>
      <g fill="#dffaff" font-family="Arial"><text x="195" y="176" font-size="18">AUTOMATE</text><text x="1030" y="176" font-size="18">ASSIST</text><text x="185" y="746" font-size="18">ANALYSE</text><text x="1022" y="746" font-size="18">EVOLVE</text></g>
      <path d="M629 561c38-37 105-37 143 0" fill="none" stroke="#ca8dff" stroke-width="7" stroke-linecap="round"/>
    </g>
  `),
};

export const showcaseVisuals = {
  hero: scene("Carter Digital Theatre visual", "#55cfff", "#ed6175", `
    <g filter="url(#shadow)">
      <rect x="269" y="201" width="862" height="498" rx="44" fill="#0d1c22" stroke="#c7f4ff" stroke-opacity="0.55" stroke-width="4"/>
      <rect x="303" y="232" width="794" height="403" rx="28" fill="#0a1419"/>
      <text x="700" y="359" text-anchor="middle" fill="#f4feff" font-size="74" font-family="Georgia" letter-spacing="-2">WE BUILD</text><text x="700" y="436" text-anchor="middle" fill="#f4feff" font-size="74" font-family="Georgia" letter-spacing="-2">DIGITAL THEATRE</text>
      <g transform="translate(700 520)"><path d="M0-97 58-19 18 90-70 48z" fill="#73e9ff" fill-opacity="0.75"/><path d="M-97 15-21-58 85-20 39 80z" fill="#f67a9b" fill-opacity="0.75"/><path d="M-52-69 98 3-37 101-89-10z" fill="none" stroke="#f6fdff" stroke-opacity="0.9" stroke-width="8"/><circle r="122" fill="none" stroke="#7cdfff" stroke-width="4" stroke-dasharray="18 18"/></g>
      <rect x="570" y="586" width="260" height="11" rx="5" fill="#d9f7f9" fill-opacity="0.66"/>
      <path d="M319 724h762" stroke="#5a7880" stroke-width="32" stroke-linecap="round"/><path d="M371 763h658" stroke="#16363f" stroke-width="29" stroke-linecap="round"/>
    </g>
  `),
  workbench: scene("Carter product workbench visual", "#ffbd74", "#5acfff", `
    <g filter="url(#shadow)">
      <rect x="228" y="198" width="944" height="550" rx="40" fill="#0c171b" stroke="#d9fbff" stroke-opacity="0.42" stroke-width="4"/>
      <rect x="266" y="236" width="868" height="474" rx="28" fill="#12272f"/>
      <rect x="300" y="270" width="330" height="398" rx="22" fill="#0d1d24"/><rect x="662" y="270" width="434" height="178" rx="22" fill="#1c3a45"/><rect x="662" y="475" width="205" height="193" rx="22" fill="#142b35"/><rect x="891" y="475" width="205" height="193" rx="22" fill="#27313d"/>
      <g fill="#dffbff"><rect x="335" y="314" width="184" height="17" rx="8"/><rect x="335" y="355" width="142" height="11" rx="5" fill-opacity="0.4"/><rect x="335" y="397" width="164" height="11" rx="5" fill-opacity="0.4"/></g>
      <path d="M707 410c68-70 109 15 164-54s91 17 166-49" fill="none" stroke="#ffbd74" stroke-width="11" stroke-linecap="round"/><circle cx="1037" cy="307" r="12" fill="#59d3ff"/>
      <g fill="#f4fdfd" font-family="Arial"><text x="706" y="322" font-size="25" font-weight="700">BUILD INTELLIGENCE</text><text x="706" y="355" font-size="17" fill-opacity="0.64">Make decisions visible.</text></g>
    </g>
  `),
  workflow: scene("Carter workflow visual", "#5ee8c8", "#8b9cff", `
    <g filter="url(#shadow)">
      <path d="M232 512C371 317 539 718 700 504S1017 301 1171 506" fill="none" stroke="#81f1da" stroke-width="9" stroke-linecap="round" stroke-opacity="0.72"/>
      <g fill="#112a32" stroke="#d8fff7" stroke-opacity="0.48" stroke-width="4"><rect x="192" y="346" width="222" height="173" rx="28"/><rect x="590" y="407" width="222" height="173" rx="28"/><rect x="988" y="332" width="222" height="173" rx="28"/></g>
      <g fill="#f4fffd" font-family="Arial"><text x="232" y="414" font-size="26" font-weight="700">CAPTURE</text><text x="630" y="475" font-size="26" font-weight="700">DECIDE</text><text x="1028" y="400" font-size="26" font-weight="700">DELIVER</text></g>
      <g fill="#b9d6d5" font-family="Arial" font-size="17"><text x="232" y="449">Every opportunity</text><text x="630" y="510">What matters next</text><text x="1028" y="435">A better experience</text></g>
      <circle cx="700" cy="504" r="42" fill="#72e7cf" fill-opacity="0.2"/><circle cx="700" cy="504" r="13" fill="#72e7cf"/>
    </g>
  `),
};
