import React from 'react';

// Decorative, code-drawn festive motifs. Flat fills only (no <defs>/ids), so any
// motif can appear on several slides without id collisions.
const MARIGOLD = '#F2A33A';
const MARIGOLD_DEEP = '#E07B24';
const MARIGOLD_CORE = '#B8541A';
const KUMKUM = '#B3261E';
const LEAF = '#3E7C4A';
const LEAF_DEEP = '#2C5E37';
const BRONZE = '#9E7C50';
const PAPER = '#F7F5F0';
const GOLD = '#F6C66B';
const GOLD_LIGHT = '#FFE3A3';

const polar = (radius, deg) => {
    const rad = (deg * Math.PI) / 180;
    return [+(radius * Math.sin(rad)).toFixed(2), +(-radius * Math.cos(rad)).toFixed(2)];
};

const Marigold = ({ x, y, r }) => (
    <g>
        <circle cx={x} cy={y} r={r} fill={MARIGOLD_DEEP} />
        <circle
            cx={x}
            cy={y}
            r={r * 0.72}
            fill="none"
            stroke={MARIGOLD}
            strokeWidth={r * 0.56}
            strokeDasharray={`${(r * 0.42).toFixed(2)} ${(r * 0.3).toFixed(2)}`}
        />
        <circle cx={x} cy={y} r={r * 0.3} fill={MARIGOLD_CORE} />
    </g>
);

/* Toran — marigold garland with swaying latkans */

// 2880 units wide so the garland stays at natural scale on bands up to 2880px (slice only crops, never enlarges)
const TORAN_UNITS = Array.from({ length: 60 }, (_, i) => 24 + i * 48);

const Strand = ({ x, long, delay }) => {
    const flowerY = long ? 36 : 30;
    const dropTop = long ? 48 : 40;
    return (
        <g className="fc-anim fc-strand" style={{ '--d': `${delay}s` }}>
            <path d={`M${x} 18V${dropTop}`} stroke={BRONZE} strokeWidth="1.5" />
            <Marigold x={x} y={flowerY} r={5.5} />
            <path
                d={`M${x} ${dropTop}C${x + 5} ${dropTop + 5} ${x + 4} ${dropTop + 11} ${x} ${dropTop + 12}C${x - 4} ${dropTop + 11} ${x - 5} ${dropTop + 5} ${x} ${dropTop}Z`}
                fill={KUMKUM}
            />
        </g>
    );
};

export const Toran = ({ className }) => (
    <svg className={className} viewBox="0 0 2880 64" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">
        <path d="M0 4H2880" stroke={BRONZE} strokeWidth="2" />
        <path d="M0 8H2880" stroke={KUMKUM} strokeWidth="1.5" />
        {TORAN_UNITS.map((x, i) => (
            <g key={x}>
                {i % 2 === 0 && <Strand x={x} long={i % 4 === 0} delay={-(i % 5) * 0.6} />}
                <path d={`M${x + 24} 7Q${x + 15} 11 ${x + 18} 25Q${x + 25} 15 ${x + 24} 7Z`} fill={LEAF} />
                <path d={`M${x + 24} 7Q${x + 33} 11 ${x + 30} 25Q${x + 23} 15 ${x + 24} 7Z`} fill={LEAF_DEEP} />
                <Marigold x={x} y={12} r={8} />
            </g>
        ))}
    </svg>
);

/* Sparks — embers drifting up */

const EMBERS = [
    { x: 24, y: 200, r: 2.2, d: 0 },
    { x: 58, y: 214, r: 1.6, d: -2.6 },
    { x: 92, y: 196, r: 2.6, d: -5.1 },
    { x: 128, y: 210, r: 1.4, d: -1.3 },
    { x: 160, y: 204, r: 2, d: -3.8 },
    { x: 196, y: 216, r: 1.8, d: -6.2 },
    { x: 228, y: 198, r: 2.4, d: -0.7 },
    { x: 262, y: 212, r: 1.5, d: -4.4 },
    { x: 288, y: 202, r: 2, d: -2 }
];

export const Sparks = ({ className }) => (
    <svg className={className} viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        {EMBERS.map((ember, i) => (
            <circle
                key={i}
                className="fc-anim fc-ember"
                cx={ember.x}
                cy={ember.y}
                r={ember.r}
                fill={MARIGOLD}
                style={{ '--d': `${ember.d}s` }}
            />
        ))}
    </svg>
);

/* Firework — rays and sparks drawn symmetrically around (0, 0), so it scales from its centre */

const Firework = ({ x, y, r, rays = 12, className, delay }) => {
    const step = 360 / rays;
    return (
        <g transform={`translate(${x} ${y})`}>
            <g className={className} style={delay === undefined ? undefined : { '--d': `${delay}s` }}>
                {Array.from({ length: rays }, (_, i) => {
                    const [x1, y1] = polar(r * 0.38, i * step);
                    const [x2, y2] = polar(r, i * step);
                    return (
                        <path
                            key={`ray${i}`}
                            d={`M${x1} ${y1}L${x2} ${y2}`}
                            stroke={i % 2 ? GOLD_LIGHT : MARIGOLD}
                            strokeWidth={Math.max(1.5, +(r * 0.06).toFixed(2))}
                            strokeLinecap="round"
                        />
                    );
                })}
                {Array.from({ length: rays }, (_, i) => {
                    const [cx, cy] = polar(r * 1.14, i * step + step / 2);
                    return <circle key={`spark${i}`} cx={cx} cy={cy} r={Math.max(1.2, +(r * 0.045).toFixed(2))} fill={GOLD} />;
                })}
                <circle r={+(r * 0.12).toFixed(2)} fill={GOLD_LIGHT} />
            </g>
        </g>
    );
};

/* VictoryBow — a gold recurve bow drawing and loosing an arrow that bursts into fireworks */

// The bow lies in a frame tilted 28° upward; the string's two halves pivot at the tips (±96) and meet 36 units behind
// the rest line when drawn, which is rotate(±20.56deg) scaleY(1.068) — see .fc-string-* in FestiveCarousel.css.
const BOW_LIMB = 'M0 -96C26 -84 44 -46 42 0C44 46 26 84 0 96';
const BOW_EARS = 'M0 -96C-6 -100 -6 -108 2 -112M0 96C-6 100 -6 108 2 112';

export const VictoryBow = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Firework x={300} y={226} r={12} rays={8} className="fc-anim fc-sparkle" delay={-1.2} />
        <Firework x={188} y={44} r={10} rays={8} className="fc-anim fc-sparkle fc-sparkle-slow" delay={-3.1} />
        <Firework x={238} y={58} r={30} className="fc-anim fc-burst" delay={2.6} />
        <Firework x={362} y={170} r={26} rays={10} className="fc-anim fc-burst" delay={3} />

        <g transform="translate(96 212) rotate(-28)">
            <Firework x={262} y={0} r={56} rays={16} className="fc-anim fc-burst fc-burst-main" delay={2.25} />
            <path className="fc-anim fc-trail" d="M114 0H254" pathLength="1" stroke={GOLD_LIGHT} strokeWidth="2" strokeLinecap="round" strokeDasharray="1 1" />

            <g transform="translate(0 -96)">
                <rect className="fc-anim fc-string fc-string-top" x="-0.75" y="0" width="1.5" height="96" fill={PAPER} />
            </g>
            <g transform="translate(0 96)">
                <rect className="fc-anim fc-string fc-string-bottom" x="-0.75" y="-96" width="1.5" height="96" fill={PAPER} />
            </g>

            <path d={BOW_LIMB} fill="none" stroke={MARIGOLD_CORE} strokeWidth="8" strokeLinecap="round" />
            <path d={BOW_LIMB} fill="none" stroke={GOLD} strokeWidth="4.5" strokeLinecap="round" />
            <path d={BOW_EARS} fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
            <circle cx="2" cy="-112" r="3" fill={GOLD_LIGHT} />
            <circle cx="2" cy="112" r="3" fill={GOLD_LIGHT} />
            <rect x="36" y="-13" width="12" height="26" rx="3" fill={KUMKUM} />
            <path d="M36 -7H48M36 0H48M36 7H48" stroke={GOLD} strokeWidth="1.5" />

            <g className="fc-anim fc-arrow">
                <path d="M4 0L-4 -8H12L20 0ZM4 0L-4 8H12L20 0Z" fill={KUMKUM} />
                <rect x="0" y="-1.2" width="136" height="2.4" rx="1.2" fill={GOLD_LIGHT} />
                <path d="M134 -6L150 0L134 6L138 0Z" fill={GOLD} />
            </g>
        </g>
    </svg>
);

/* RisingSun — the sun rising over still water, rays turning slowly */

const SUN_X = 200;
const HORIZON = 206;
const SUN_RAYS = Array.from({ length: 18 }, (_, i) => i * 20);
const RIPPLES = [
    { y: 216, w: 96, d: 0 },
    { y: 226, w: 64, d: -1.1 },
    { y: 236, w: 40, d: -2.2 },
    { y: 246, w: 22, d: -0.6 }
];

export const RisingSun = ({ className }) => (
    <svg className={className} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
        {/* A nested viewport ending at the horizon clips the sun and rays below it */}
        <svg x="0" y="0" width="400" height={HORIZON} viewBox={`0 0 400 ${HORIZON}`}>
            <g className="fc-seq fc-rise-sun">
                <g transform={`translate(${SUN_X} ${HORIZON})`}>
                    <g className="fc-anim fc-rays">
                        {SUN_RAYS.map((deg) => (
                            <path key={deg} d="M-7 -74L0 -190L7 -74Z" fill={GOLD} opacity="0.22" transform={`rotate(${deg})`} />
                        ))}
                    </g>
                    <circle r="92" fill={MARIGOLD} opacity="0.12" />
                    <circle r="74" fill={MARIGOLD} opacity="0.2" />
                    <circle r="58" fill={MARIGOLD_DEEP} />
                    <circle r="50" fill={MARIGOLD} />
                    <circle r="40" fill={GOLD} />
                </g>
            </g>
        </svg>
        <path d={`M24 ${HORIZON}H376`} stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        {RIPPLES.map((ripple) => (
            <path
                key={ripple.y}
                className="fc-anim fc-ripple"
                d={`M${SUN_X - ripple.w} ${ripple.y}H${SUN_X + ripple.w}`}
                stroke={GOLD}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="14 10"
                style={{ '--d': `${ripple.d}s` }}
            />
        ))}
    </svg>
);

/* GoldLeaves — twin-lobed apta leaves, exchanged as "gold" on Dussehra, drifting down */

const APTA = 'M0 12C-5 8 -14 5 -14 -4C-14 -11 -7 -14 -2 -10C-1 -9 0 -8 0 -6C0 -8 1 -9 2 -10C7 -14 14 -11 14 -4C14 5 5 8 0 12Z';

const LEAVES = [
    { x: 64, y: -24, s: 1, dur: 11, d: 0 },
    { x: 140, y: -40, s: 0.75, dur: 13, d: -5.5 },
    { x: 262, y: -30, s: 0.9, dur: 12, d: -2.4 },
    { x: 336, y: -46, s: 0.7, dur: 14, d: -8.2 },
    { x: 104, y: -36, s: 0.6, dur: 15, d: -10.6 },
    { x: 300, y: -22, s: 0.8, dur: 10, d: -6.8 }
];

export const GoldLeaves = ({ className }) => (
    <svg className={className} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
        {LEAVES.map((leaf) => (
            <g key={leaf.x} transform={`translate(${leaf.x} ${leaf.y})`}>
                <g className="fc-anim fc-leaf-fall" style={{ '--d': `${leaf.d}s`, '--dur': `${leaf.dur}s` }}>
                    <g className="fc-anim fc-leaf-sway" style={{ '--d': `${leaf.d}s` }}>
                        <g transform={`scale(${leaf.s})`}>
                            <path d={APTA} fill={GOLD} />
                            <path d="M0 12V-6M0 12V17" stroke={MARIGOLD_CORE} strokeWidth="1.2" strokeLinecap="round" />
                        </g>
                    </g>
                </g>
            </g>
        ))}
    </svg>
);
