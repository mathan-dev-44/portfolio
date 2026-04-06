import { Link } from "@tanstack/react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center px-4">
      <style>{`
        @keyframes nfFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-18px); }
        }
        @keyframes nfComet {
          0%   { transform: translate(0px, 0px); opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 1; }
          100% { transform: translate(295px, -215px); opacity: 0; }
        }
        @keyframes nfTwa { 0%,100% { opacity:.9 } 50% { opacity:.1 } }
        @keyframes nfTwb { 0%,100% { opacity:.7 } 50% { opacity:.15 } }
        @keyframes nfTwc { 0%,100% { opacity:.8 } 50% { opacity:.2  } }
        .nf-float { animation: nfFloat 4.5s ease-in-out infinite; }
        .nf-comet { animation: nfComet 6s linear infinite; }
        .nf-twa   { animation: nfTwa 2.2s ease-in-out infinite; }
        .nf-twb   { animation: nfTwb 3.4s ease-in-out infinite .8s; }
        .nf-twc   { animation: nfTwc 2.8s ease-in-out infinite 1.5s; }
      `}</style>

      <svg
        viewBox="0 0 320 280"
        className="w-full max-w-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nfBg" cx="45%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#111827" />
            <stop offset="100%" stopColor="#030408" />
          </radialGradient>
          <radialGradient id="nfVisor" cx="32%" cy="28%" r="72%">
            <stop offset="0%"   stopColor="#1e3a6e" />
            <stop offset="100%" stopColor="#030d20" />
          </radialGradient>
          <radialGradient id="nfPlanet" cx="30%" cy="28%" r="72%">
            <stop offset="0%"   stopColor="#2e1f54" />
            <stop offset="100%" stopColor="#0a0718" />
          </radialGradient>
        </defs>

        {/* Background */}
        {/* <rect width="320" height="280" rx="16" fill="url(#nfBg)" /> */}

        {/* Twinkling stars */}
        <circle className="nf-twa" cx="22"  cy="28"  r="1.8" fill="white" />
        <circle className="nf-twb" cx="72"  cy="18"  r="1.4" fill="white" />
        <circle className="nf-twc" cx="210" cy="14"  r="1.8" fill="white" />
        <circle className="nf-twa" cx="288" cy="32"  r="1.4" fill="white" />
        <circle className="nf-twb" cx="305" cy="90"  r="1.6" fill="white" />
        <circle className="nf-twc" cx="18"  cy="120" r="1.4" fill="white" />
        <circle className="nf-twa" cx="12"  cy="188" r="1.6" fill="white" />
        <circle className="nf-twb" cx="302" cy="195" r="1.4" fill="white" />
        <circle className="nf-twc" cx="14"  cy="250" r="1.8" fill="white" />
        <circle className="nf-twa" cx="296" cy="258" r="1.4" fill="white" />

        {/* Static micro-stars */}
        {[
          [50,52],[100,24],[148,16],[240,28],[268,62],
          [312,148],[8,72],[16,218],[312,168],[58,264],
          [258,268],[178,272],[108,268],[232,260],[130,270],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="0.9" fill="white" fillOpacity="0.5" />
        ))}

        {/* Saturn-like planet (upper-right) */}
        <circle cx="265" cy="56" r="29" fill="url(#nfPlanet)" />
        <ellipse cx="265" cy="56" rx="46" ry="9" fill="none" stroke="#4a2a8a" strokeWidth="5" strokeOpacity="0.55" />
        <ellipse cx="265" cy="56" rx="46" ry="9" fill="none" stroke="#6040a0" strokeWidth="2" strokeOpacity="0.3" />
        {/* Crescent shadow */}
        <circle cx="272" cy="60" r="25" fill="rgba(0,0,0,0.3)" />

        {/* Comet — starts lower-left, flies to upper-right */}
        <g className="nf-comet">
          <ellipse cx="-18" cy="274" rx="44" ry="8"   fill="rgba(160,200,255,0.09)" transform="rotate(-17,-18,274)" />
          <ellipse cx="-6"  cy="272" rx="32" ry="6"   fill="rgba(190,220,255,0.16)" transform="rotate(-17,-6,272)" />
          <ellipse cx="6"   cy="270" rx="20" ry="4.5" fill="rgba(215,235,255,0.26)" transform="rotate(-17,6,270)" />
          <line x1="20" y1="268" x2="-42" y2="286" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="20" y1="268" x2="-28" y2="280" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="268" r="15"  fill="rgba(200,225,255,0.07)" />
          <circle cx="20" cy="268" r="9"   fill="rgba(220,240,255,0.18)" />
          <circle cx="20" cy="268" r="5"   fill="rgba(240,250,255,0.5)" />
          <circle cx="20" cy="268" r="3.5" fill="white" />
        </g>

        {/* ── Astronaut (floats up/down) ── */}
        <g className="nf-float">

          {/* Tether cable */}
          <path d="M156 192 Q128 212 95 248" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />

          {/* Life-support backpack */}
          <rect x="186" y="154" width="15" height="52" rx="5" fill="#a8b4ca" stroke="#90a0ba" strokeWidth="1" />
          <rect x="188" y="162" width="11" height="7"  rx="2" fill="#88a0ba" />
          <rect x="188" y="174" width="11" height="7"  rx="2" fill="#88a0ba" />
          <rect x="188" y="186" width="11" height="7"  rx="2" fill="#88a0ba" />

          {/* Suit body */}
          <rect x="122" y="148" width="68" height="76" rx="22" fill="#dde3ee" stroke="#b8c4d8" strokeWidth="1.5" />
          <rect x="122" y="162" width="18" height="46" rx="9" fill="rgba(0,0,0,0.04)" />

          {/* Chest control panel */}
          <rect x="138" y="162" width="46" height="36" rx="8" fill="#c4ccdc" />
          <circle cx="148" cy="174" r="4" fill="#3b9dff" />
          <circle cx="161" cy="174" r="4" fill="#ff5f5f" />
          <circle cx="174" cy="174" r="4" fill="#50e8a0" />
          <rect x="141" y="184" width="38" height="8" rx="3" fill="#080f1e" fillOpacity="0.65" />
          <rect x="143" y="186" width="14" height="4" rx="2" fill="#3b9dff" fillOpacity="0.7" />

          {/* Left arm + glove */}
          <rect x="78"  y="152" width="46" height="20" rx="10" fill="#dde3ee" stroke="#b8c4d8" strokeWidth="1.5" transform="rotate(12,124,162)" />
          <circle cx="82"  cy="170" r="13" fill="#c0c8dc" stroke="#a8b4c8" strokeWidth="1.5" />
          <circle cx="82"  cy="170" r="7"  fill="#aab0c4" />

          {/* Right arm + glove */}
          <rect x="196" y="152" width="46" height="20" rx="10" fill="#dde3ee" stroke="#b8c4d8" strokeWidth="1.5" transform="rotate(-12,196,162)" />
          <circle cx="238" cy="170" r="13" fill="#c0c8dc" stroke="#a8b4c8" strokeWidth="1.5" />
          <circle cx="238" cy="170" r="7"  fill="#aab0c4" />

          {/* Left leg + boot */}
          <rect x="128" y="218" width="24" height="40" rx="12" fill="#dde3ee" stroke="#b8c4d8" strokeWidth="1.5" />
          <ellipse cx="140" cy="256" rx="19" ry="9" fill="#b0bccc" stroke="#98a8b8" strokeWidth="1" />

          {/* Right leg + boot */}
          <rect x="168" y="218" width="24" height="40" rx="12" fill="#dde3ee" stroke="#b8c4d8" strokeWidth="1.5" />
          <ellipse cx="180" cy="256" rx="19" ry="9" fill="#b0bccc" stroke="#98a8b8" strokeWidth="1" />

          {/* Collar ring */}
          <ellipse cx="156" cy="147" rx="31" ry="9" fill="#c4ccdc" stroke="#b0bace" strokeWidth="1.5" />

          {/* Helmet shell */}
          <circle cx="156" cy="103" r="44" fill="#dde3ee" stroke="#b8c4d8" strokeWidth="1.5" />
          <path d="M120 95 Q112 110 118 128" stroke="rgba(0,0,0,0.06)" strokeWidth="10" fill="none" strokeLinecap="round" />

          {/* Visor */}
          <circle cx="156" cy="106" r="30" fill="url(#nfVisor)" />
          <circle cx="156" cy="106" r="30" fill="none" stroke="#3a5a90" strokeWidth="2" strokeOpacity="0.5" />

          {/* Stars visible inside visor */}
          <circle cx="164" cy="98"  r="1.4" fill="white" fillOpacity="0.7" />
          <circle cx="172" cy="108" r="1"   fill="white" fillOpacity="0.55" />
          <circle cx="148" cy="113" r="1"   fill="white" fillOpacity="0.5" />
          <circle cx="168" cy="117" r="1.2" fill="white" fillOpacity="0.65" />
          <circle cx="144" cy="99"  r="0.8" fill="white" fillOpacity="0.45" />

          {/* Visor reflection highlights */}
          <ellipse cx="141" cy="93" rx="12" ry="7"   fill="rgba(255,255,255,0.17)" transform="rotate(-25,141,93)" />
          <ellipse cx="146" cy="88" rx="6"  ry="3.5" fill="rgba(255,255,255,0.24)" transform="rotate(-25,146,88)" />

          {/* Helmet stripe */}
          <path d="M126 88 Q156 68 186 88" stroke="rgba(180,200,240,0.4)" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Antenna */}
          <rect x="152" y="58" width="8" height="12" rx="4" fill="#c4ccdc" stroke="#b0bace" strokeWidth="1" />
          <circle cx="156" cy="57" r="4" fill="#d0d8e8" stroke="#b8c4d4" strokeWidth="1" />
        </g>
      </svg>

      <div className="space-y-1">
        <h1 className="text-7xl font-bold tracking-tight">404</h1>
        <h2 className="text-2xl font-semibold">Lost in Space</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs mx-auto mt-1">
          Houston, we have a problem. This page has drifted into the void.
        </p>
      </div>

      <Link
        to="/"
        className="px-6 py-2.5 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:opacity-80 transition-opacity"
      >
        Return to Earth
      </Link>
    </div>
  );
}
