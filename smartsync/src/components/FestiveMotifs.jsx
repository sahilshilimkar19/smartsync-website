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

/* Mandala — the garba circle */

const OUTER_PETALS = Array.from({ length: 24 }, (_, i) => i * 15);
const MIDDLE_PETALS = Array.from({ length: 12 }, (_, i) => i * 30 + 15);
const INNER_PETALS = Array.from({ length: 8 }, (_, i) => i * 45);
const BEADS = Array.from({ length: 36 }, (_, i) => polar(95, i * 10));

export const Mandala = ({ className }) => (
    <svg className={className} viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
        <circle r="99" fill="none" stroke={BRONZE} strokeWidth="0.8" opacity="0.7" />
        {BEADS.map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="1.8" fill={MARIGOLD} />
        ))}
        {OUTER_PETALS.map((deg) => (
            <ellipse key={deg} cx="0" cy="-74" rx="6" ry="14" fill={MARIGOLD} opacity="0.85" transform={`rotate(${deg})`} />
        ))}
        <circle r="60" fill="none" stroke={MARIGOLD} strokeWidth="5" strokeDasharray="2 4" opacity="0.6" />
        {MIDDLE_PETALS.map((deg) => (
            <path
                key={deg}
                d="M0 -56C11 -46 11 -30 0 -22C-11 -30 -11 -46 0 -56Z"
                fill={KUMKUM}
                stroke={MARIGOLD}
                strokeWidth="1"
                transform={`rotate(${deg})`}
            />
        ))}
        {INNER_PETALS.map((deg) => (
            <ellipse key={deg} cx="0" cy="-15" rx="5" ry="10" fill={MARIGOLD_DEEP} transform={`rotate(${deg})`} />
        ))}
        <circle r="7" fill={MARIGOLD} />
        <circle r="3" fill={KUMKUM} />
    </svg>
);

/* Dandiya — a crossed pair of sticks */

const STICK_BANDS = [-62, -34, -6, 22, 50];

const Stick = () => (
    <g>
        <rect x="-5" y="-80" width="10" height="150" rx="5" fill={MARIGOLD} />
        {STICK_BANDS.map((y, i) => (
            <rect key={y} x="-5" y={y} width="10" height="7" fill={i % 2 ? LEAF : KUMKUM} />
        ))}
        {STICK_BANDS.map((y) => (
            <circle key={y} cx="0" cy={y + 17} r="1.4" fill={PAPER} />
        ))}
        <path d="M-3 70L-6 86M0 70L0 88M3 70L6 86" stroke={KUMKUM} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="-6" cy="88" r="2.4" fill={MARIGOLD_DEEP} />
        <circle cx="0" cy="90" r="2.4" fill={MARIGOLD_DEEP} />
        <circle cx="6" cy="88" r="2.4" fill={MARIGOLD_DEEP} />
    </g>
);

export const Dandiya = ({ className }) => (
    <svg className={className} viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
        <g transform="rotate(-28)">
            <g className="fc-anim fc-tap">
                <Stick />
            </g>
        </g>
        <g transform="rotate(28)">
            <g className="fc-anim fc-tap fc-tap-mirror">
                <Stick />
            </g>
        </g>
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

/* Diyas — a row of lamps with flickering flames */

const DIYA_XS = [50, 130, 210, 290];
const RIM_Y = 96;

const Diya = ({ x, delay }) => (
    <g>
        <circle className="fc-anim fc-glow" cx={x} cy={RIM_Y - 26} r="24" fill={MARIGOLD} opacity="0.2" style={{ '--d': `${delay}s` }} />
        <g className="fc-anim fc-flame" style={{ '--d': `${delay}s` }}>
            <path
                d={`M${x} ${RIM_Y - 44}C${x + 9} ${RIM_Y - 30} ${x + 8} ${RIM_Y - 14} ${x} ${RIM_Y - 8}C${x - 8} ${RIM_Y - 14} ${x - 9} ${RIM_Y - 30} ${x} ${RIM_Y - 44}Z`}
                fill={MARIGOLD}
            />
            <path
                d={`M${x} ${RIM_Y - 30}C${x + 4} ${RIM_Y - 22} ${x + 4} ${RIM_Y - 14} ${x} ${RIM_Y - 10}C${x - 4} ${RIM_Y - 14} ${x - 4} ${RIM_Y - 22} ${x} ${RIM_Y - 30}Z`}
                fill="#FFE3A3"
            />
        </g>
        <path d={`M${x} ${RIM_Y - 8}V${RIM_Y - 2}`} stroke="#3A2A1A" strokeWidth="2" strokeLinecap="round" />
        <path d={`M${x - 30} ${RIM_Y}Q${x - 27} ${RIM_Y + 24} ${x} ${RIM_Y + 24}Q${x + 27} ${RIM_Y + 24} ${x + 30} ${RIM_Y}Z`} fill="#C2672B" />
        <ellipse cx={x} cy={RIM_Y} rx="30" ry="5" fill="#E08A3C" />
        <path d={`M${x - 20} ${RIM_Y + 11}H${x + 20}`} stroke={MARIGOLD} strokeWidth="1.5" strokeDasharray="2 3" strokeLinecap="round" />
    </g>
);

export const Diyas = ({ className }) => (
    <svg className={className} viewBox="0 36 340 94" aria-hidden="true" focusable="false">
        {DIYA_XS.map((x, i) => (
            <Diya key={x} x={x} delay={-i * 0.45} />
        ))}
    </svg>
);

/* NightStars — nine stars for nine nights, under a crescent */

const sparkle = (x, y, r) =>
    `M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z`;

const STARS = Array.from({ length: 9 }, (_, i) => {
    const rad = ((-170 + i * 20) * Math.PI) / 180;
    return {
        x: +(190 + 180 * Math.cos(rad)).toFixed(1),
        y: +(290 + 180 * Math.sin(rad)).toFixed(1),
        r: [7, 10, 13][i % 3],
        d: -i * 0.37
    };
});

const DUST = [[40, 40], [96, 78], [150, 30], [214, 58], [262, 24], [120, 210], [250, 236], [60, 120], [300, 190]];

const CRESCENT = 'M16 -36.66A40 40 0 1 0 16 36.66A48 48 0 0 1 16 -36.66Z';

export const NightStars = ({ className }) => (
    <svg className={className} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
        {DUST.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.2" fill={PAPER} opacity="0.5" />
        ))}
        <path d={CRESCENT} transform="translate(338 64)" fill={PAPER} opacity="0.92" />
        {STARS.map((star, i) => (
            <path
                key={i}
                className="fc-anim fc-twinkle"
                d={sparkle(star.x, star.y, star.r)}
                fill={i % 2 ? PAPER : MARIGOLD}
                style={{ '--d': `${star.d.toFixed(2)}s` }}
            />
        ))}
    </svg>
);
