import React from 'react';

// Decorative, code-drawn festive motifs. Flat fills only (no <defs>/ids), so any motif can appear on several
// slides without id collisions. Elements animated from CSS never carry a transform attribute of their own (a CSS
// transform would replace it), so each sits inside a positioned <g>.
const MARIGOLD = '#F2A33A';
const MARIGOLD_DEEP = '#E07B24';
const MARIGOLD_CORE = '#B8541A';
const KUMKUM = '#B3261E';
const KUMKUM_DEEP = '#7E1A14';
const LEAF = '#3E7C4A';
const LEAF_DEEP = '#2C5E37';
const LEAF_LIGHT = '#6DB27A';
const BRONZE = '#9E7C50';
const PAPER = '#F7F5F0';
const GOLD = '#F6C66B';
const GOLD_LIGHT = '#FFE3A3';
const GLINT_WHITE = '#FFF6DB';
const ROSE = '#E8628F';
const ROSE_LIGHT = '#F7A9C4';
const ROSE_DEEP = '#A8325E';
const TEAL = '#4FBFAE';
const TEAL_LIGHT = '#BFF0E7';
const BRASS = '#D69A34';
const BRASS_LIGHT = '#F3C969';
const BRASS_DEEP = '#A66B1A';
const BRASS_DARK = '#6B4210';
const CLAY = '#C2622A';
const CLAY_LIGHT = '#E58A4A';
const CLAY_DEEP = '#8A3A14';
const OIL = '#4A1D0A';
const WICK = '#2A1206';
const PAGE_EDGE = '#E4DAC6';
const RULE = '#D8CDB8';
const INK = '#5B3A22';
const COVER = '#8E2130';

const round = (value) => +value.toFixed(2);

const polar = (radius, deg) => {
    const rad = (deg * Math.PI) / 180;
    return [round(radius * Math.sin(rad)), round(-radius * Math.cos(rad))];
};

// An n-pointed star around (0, 0), first point straight up
const starPath = (points, outer, inner) =>
    Array.from({ length: points * 2 }, (_, i) => {
        const [x, y] = polar(i % 2 ? inner : outer, (i * 180) / points);
        return `${i ? 'L' : 'M'}${x} ${y}`;
    }).join('') + 'Z';

// A petal from (0, 0) pointing straight up
const petalPath = (len, w) =>
    `M0 0C${round(w)} ${round(-len * 0.3)} ${round(w * 0.7)} ${round(-len * 0.8)} 0 ${-len}` +
    `C${round(-w * 0.7)} ${round(-len * 0.8)} ${round(-w)} ${round(-len * 0.3)} 0 0Z`;

const STAR4 = starPath(4, 6, 1.5);
const GLINT = starPath(4, 9, 1.6);

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

/* Shared pieces */

// Four-pointed stars that twinkle: [x, y, scale, delay]
const Twinkles = ({ stars, fill = GOLD_LIGHT }) => (
    <g>
        {stars.map(([x, y, s, d]) => (
            <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${s})`}>
                <path className="fc-anim fc-twinkle" d={STAR4} fill={fill} style={{ '--d': `${d}s` }} />
            </g>
        ))}
    </g>
);

// Faint concentric rings that together read as a soft radial glow (no gradient <defs> needed)
const HALO_STEPS = [1, 0.84, 0.68, 0.52, 0.36];

const Halo = ({ x = 0, y = 0, r, fill = GOLD, strength = 0.035 }) => (
    <g>
        {HALO_STEPS.map((k) => (
            <circle key={k} cx={x} cy={y} r={round(r * k)} fill={fill} opacity={strength} />
        ))}
    </g>
);

// A soft halo that breathes behind the main subject
const Glow = ({ x, y, r, fill = GOLD }) => (
    <g className="fc-anim fc-glow">
        <Halo x={x} y={y} r={r} fill={fill} />
    </g>
);

const FLAME_OUTER = 'M0 -34C7 -24 9 -14 0 -2C-9 -14 -7 -24 0 -34Z';
const FLAME_MID = 'M0 -27C4.5 -20 5.5 -12 0 -4C-5.5 -12 -4.5 -20 0 -27Z';
const FLAME_CORE = 'M0 -18C2.4 -14 2.8 -9 0 -5C-2.8 -9 -2.4 -14 0 -18Z';
const DIYA_BOWL = 'M-26 0C-24 13 -13 20 0 20C13 20 24 13 26 0Z';

// A clay diya drawn around the centre of its rim. `light` (seconds) makes it light up at that moment of each visit.
const Diya = ({ x, y, s = 1, light, flicker = 0 }) => {
    const seq = light === undefined ? undefined : { '--d': `${light}s` };
    return (
        <g transform={`translate(${x} ${y}) scale(${s})`}>
            <g className={seq && 'fc-seq fc-light'} style={seq}>
                <Halo y={-16} r={32} strength={0.05} />
                <circle cy="-16" r="11" fill={GOLD_LIGHT} opacity="0.12" />
            </g>
            <path d={DIYA_BOWL} fill={CLAY} />
            <path d="M-20 8C-12 13.5 12 13.5 20 8" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="0.1 5" />
            <ellipse rx="26" ry="5" fill={CLAY_LIGHT} />
            <ellipse cy="0.6" rx="22" ry="3.6" fill={OIL} />
            <rect x="-9" y="18.5" width="18" height="4.5" rx="2.25" fill={CLAY_DEEP} />
            <path d="M0 0.5V-3" stroke={WICK} strokeWidth="1.6" strokeLinecap="round" />
            <g className={seq && 'fc-seq fc-ignite'} style={seq}>
                <g className="fc-anim fc-flame" style={{ '--d': `${flicker}s` }}>
                    <path d={FLAME_OUTER} fill={MARIGOLD_DEEP} />
                    <path d={FLAME_MID} fill={GOLD} />
                    <path d={FLAME_CORE} fill={GOLD_LIGHT} />
                </g>
            </g>
        </g>
    );
};

// Rangoli dots laid on the floor in front-facing arcs, glimmering
const DOT_COLOURS = [MARIGOLD, ROSE, PAPER, LEAF_LIGHT, GOLD];

const FloorDots = ({ cx, cy, rows }) => (
    <g>
        {rows.flatMap(({ rx, ry, count, r }, row) =>
            Array.from({ length: count }, (_, i) => {
                const t = (Math.PI * i) / (count - 1);
                return (
                    <circle
                        key={`${row}-${i}`}
                        className="fc-anim fc-glimmer"
                        cx={round(cx - rx * Math.cos(t))}
                        cy={round(cy + ry * Math.sin(t))}
                        r={r}
                        fill={DOT_COLOURS[(i + row) % DOT_COLOURS.length]}
                        style={{ '--d': `${-round((i * 0.37 + row * 0.6) % 2.4)}s` }}
                    />
                );
            })
        )}
    </g>
);

/* Firework — rays and sparks drawn symmetrically around (0, 0), so it scales from its centre */

const GOLD_BURST = [MARIGOLD, GOLD_LIGHT, GOLD];
const ROSE_BURST = [ROSE, '#FFD1E0', ROSE_LIGHT];
const TEAL_BURST = [TEAL, TEAL_LIGHT, '#8FE0D2'];

const Firework = ({ x, y, r, rays = 12, className, delay, colors = GOLD_BURST }) => {
    const step = 360 / rays;
    const [ray, rayAlt, spark] = colors;
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
                            stroke={i % 2 ? rayAlt : ray}
                            strokeWidth={Math.max(1.5, round(r * 0.06))}
                            strokeLinecap="round"
                        />
                    );
                })}
                {Array.from({ length: rays }, (_, i) => {
                    const [cx, cy] = polar(r * 1.14, i * step + step / 2);
                    return <circle key={`spark${i}`} cx={cx} cy={cy} r={Math.max(1.2, round(r * 0.045))} fill={spark} />;
                })}
                <circle r={round(r * 0.12)} fill={rayAlt} />
            </g>
        </g>
    );
};

/* Rangoli — a flower mandala that blooms petal by petal, drawn around (0, 0) with a radius of about 105 */

const RANGOLI_RINGS = [
    { count: 8, inner: 9, len: 22, w: 9, fill: KUMKUM, turn: 0, at: 0.5 },
    { count: 8, inner: 18, len: 30, w: 12, fill: MARIGOLD, turn: 22.5, at: 0.85 },
    { count: 16, inner: 54, len: 20, w: 7, fill: ROSE, turn: 0, at: 1.3 },
    { count: 16, inner: 72, len: 18, w: 7, fill: LEAF_LIGHT, turn: 11.25, at: 1.75 }
];
const RANGOLI_DOTS = Array.from({ length: 24 }, (_, i) => polar(98, i * 15));

const RangoliPattern = () => (
    <g>
        <circle className="fc-seq fc-draw" r="104" pathLength="1" fill="none" stroke={GOLD} strokeWidth="1" strokeDasharray="1 1" opacity="0.6" style={{ '--d': '0.3s' }} />
        <circle className="fc-seq fc-draw" r="51" pathLength="1" fill="none" stroke={GOLD} strokeWidth="1.4" strokeDasharray="1 1" style={{ '--d': '0.4s' }} />
        {RANGOLI_RINGS.map((ring) =>
            Array.from({ length: ring.count }, (_, i) => {
                const petal = petalPath(ring.len, ring.w);
                return (
                    <g key={`${ring.inner}-${i}`} transform={`rotate(${ring.turn + (i * 360) / ring.count}) translate(0 ${-ring.inner})`}>
                        <g className="fc-seq fc-petal" style={{ '--d': `${round(ring.at + (i * 0.45) / ring.count)}s` }}>
                            <path d={petal} fill={ring.fill} />
                        </g>
                    </g>
                );
            })
        )}
        {RANGOLI_DOTS.map(([x, y], i) => (
            <g key={`dot${i}`} transform={`translate(${x} ${y})`}>
                <circle className="fc-seq fc-pop" r="2.8" fill={i % 2 ? PAPER : GOLD_LIGHT} style={{ '--d': `${round(2.2 + i * 0.03)}s` }} />
            </g>
        ))}
        <g className="fc-anim fc-pulse">
            <circle r="9" fill={GOLD} />
            <circle r="4" fill={KUMKUM} />
        </g>
    </g>
);

// Rangoli laid on the floor: flattened into an ellipse in front of the scene
const FloorRangoli = ({ x, y, size }) => (
    <g transform={`translate(${x} ${y}) scale(${size} ${round(size * 0.38)})`}>
        <RangoliPattern />
    </g>
);

const NIGHT_STARS = [
    [40, 44, 0.9, 0],
    [104, 22, 0.6, -1.1],
    [176, 54, 0.75, -2.3],
    [246, 26, 0.6, -0.6],
    [312, 50, 1, -1.7],
    [370, 24, 0.65, -2.8],
    [70, 120, 0.55, -0.4],
    [338, 128, 0.6, -2]
];

/* KalashCoins (Dhanteras) — gold coins arc into a brass kalash, each landing with a glint */

// Coins leave from the upper corners in turn and land on the pile in the kalash's mouth (200, 146)
const COIN_FLIGHTS = [
    { side: -1, d: 0.5, gx: 190, gy: 139 },
    { side: 1, d: 0.9, gx: 211, gy: 137 },
    { side: -1, d: 1.3, gx: 199, gy: 130 },
    { side: 1, d: 1.7, gx: 185, gy: 146 },
    { side: -1, d: 2.1, gx: 215, gy: 145 },
    { side: 1, d: 2.5, gx: 202, gy: 141 }
];

const Coin = () => (
    <g>
        <circle r="9" fill={GOLD} stroke={BRASS_DEEP} strokeWidth="1.2" />
        <circle r="5.6" fill="none" stroke={BRASS_DEEP} strokeWidth="0.9" opacity="0.7" />
        <path d="M-4 -5A7 7 0 0 1 4.5 -4.5" fill="none" stroke={GLINT_WHITE} strokeWidth="1.4" strokeLinecap="round" />
    </g>
);

const PILE_COINS = [
    [186, 149],
    [201, 151],
    [215, 148],
    [193, 141],
    [208, 140],
    [200, 133]
];

export const KalashCoins = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Glow x={200} y={196} r={124} />
        <Twinkles stars={[[60, 54, 1.1, 0], [122, 26, 0.7, -1.2], [284, 30, 0.9, -0.6], [344, 62, 0.75, -1.8], [96, 214, 0.6, -2.2], [306, 212, 0.7, -0.9]]} />

        {/* Mango leaves */}
        <path d="M172 152C156 136 134 132 116 140C134 152 154 156 172 152Z" fill={LEAF} />
        <path d="M178 148C170 128 154 116 136 116C146 134 160 146 178 148Z" fill={LEAF_DEEP} />
        <path d="M228 152C244 136 266 132 284 140C266 152 246 156 228 152Z" fill={LEAF} />
        <path d="M222 148C230 128 246 116 264 116C254 134 240 146 222 148Z" fill={LEAF_DEEP} />
        <path d="M170 150C152 142 134 140 120 141M176 146C166 132 152 122 140 118M230 150C248 142 266 140 280 141M224 146C234 132 248 122 260 118" fill="none" stroke={LEAF_LIGHT} strokeWidth="1" opacity="0.7" />

        {/* Kalash */}
        <path d="M170 290C176 296 224 296 230 290L236 302C226 310 174 310 164 302Z" fill={BRASS_DEEP} />
        <ellipse cx="200" cy="236" rx="72" ry="60" fill={BRASS} />
        <path d="M158 204C144 226 146 258 166 278C156 254 156 228 168 208Z" fill={BRASS_LIGHT} opacity="0.7" />
        <path d="M240 192C262 212 266 258 244 284C254 256 254 218 234 196Z" fill={BRASS_DEEP} opacity="0.55" />
        <path d="M136 216C164 236 236 236 264 216" fill="none" stroke={GOLD_LIGHT} strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 9" />
        <path d="M131 230C160 252 240 252 269 230" fill="none" stroke={KUMKUM} strokeWidth="5" />
        <path d="M140 252C166 270 234 270 260 252" fill="none" stroke={GOLD_LIGHT} strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 9" />
        <path d="M172 184C180 174 182 164 176 154H224C218 164 220 174 228 184Z" fill={BRASS} />
        <path d="M214 156C210 166 212 176 220 184H228C220 174 218 164 224 154Z" fill={BRASS_DEEP} opacity="0.5" />
        <path d="M175 172C188 178 212 178 225 172" fill="none" stroke={KUMKUM} strokeWidth="3" />
        <path d="M200 177L197 191M200 177L204 190" stroke={KUMKUM} strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="200" cy="156" rx="36" ry="8" fill={BRASS_DEEP} />
        <ellipse cx="200" cy="154" rx="36" ry="8" fill={BRASS_LIGHT} />
        <ellipse cx="200" cy="153.5" rx="29" ry="5.4" fill={BRASS_DARK} />

        {/* The pile of coins in its mouth */}
        <path d="M172 154C176 136 190 128 200 128C210 128 224 136 228 154C214 158 186 158 172 154Z" fill={GOLD} />
        {PILE_COINS.map(([x, y]) => (
            <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="7.5" ry="3" fill={GOLD_LIGHT} stroke={BRASS_DEEP} strokeWidth="0.8" />
        ))}
        <path d="M164 154A36 8 0 0 0 236 154" fill="none" stroke={BRASS_LIGHT} strokeWidth="3.5" />

        {COIN_FLIGHTS.map((coin) => (
            <g key={`coin${coin.d}`} transform={`translate(${coin.side < 0 ? 40 : 360} 110)`}>
                <g className="fc-anim fc-coin-x" style={{ '--d': `${coin.d}s`, '--dx': `${-coin.side * 160}px` }}>
                    <g className="fc-anim fc-coin-y" style={{ '--d': `${coin.d}s` }}>
                        <g className="fc-anim fc-coin-spin">
                            <Coin />
                        </g>
                    </g>
                </g>
            </g>
        ))}
        {COIN_FLIGHTS.map((coin) => (
            <g key={`glint${coin.d}`} transform={`translate(${coin.gx} ${coin.gy})`}>
                <path className="fc-anim fc-glint" d={GLINT} fill={GLINT_WHITE} style={{ '--d': `${coin.d}s` }} />
            </g>
        ))}

        <Diya x={74} y={284} s={0.8} flicker={-0.4} />
        <Diya x={326} y={284} s={0.8} flicker={-1.1} />
    </svg>
);

/* CoinStack (Dhanteras advisory) — one more coin every month: stacks of 1 to 6 coins drop into place */

const STACKS = [1, 2, 3, 4, 5, 6];
const STACK_BASE = 250;
const COIN_STEP = 13;
const stackX = (i) => 60 + i * 56;
const GARLAND = Array.from({ length: 12 }, (_, i) => 24 + i * 32);

const StackCoin = () => (
    <g>
        <path d="M-22 0V7A22 7 0 0 0 22 7V0Z" fill={BRASS_DEEP} />
        <ellipse rx="22" ry="7" fill={GOLD} />
        <ellipse rx="15" ry="4.4" fill="none" stroke={BRASS} strokeWidth="1.3" />
    </g>
);

export const CoinStack = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Glow x={200} y={200} r={120} />
        <Twinkles stars={[[54, 60, 0.8, -0.5], [150, 34, 0.6, -1.9], [262, 44, 0.7, -1.1], [350, 70, 0.9, -2.4]]} />
        {STACKS.map((count, i) => (
            <ellipse key={`shadow${i}`} cx={stackX(i)} cy={STACK_BASE + 11} rx="28" ry="7" fill="#000" opacity="0.22" />
        ))}
        {STACKS.map((count, i) =>
            Array.from({ length: count }, (_, k) => {
                const order = (i * (i + 1)) / 2 + k;
                return (
                    <g key={`${i}-${k}`} transform={`translate(${stackX(i)} ${STACK_BASE - k * COIN_STEP})`}>
                        <g className="fc-seq fc-drop" style={{ '--d': `${round(0.3 + order * 0.11)}s` }}>
                            <StackCoin />
                        </g>
                    </g>
                );
            })
        )}
        <Twinkles
            fill={GLINT_WHITE}
            stars={STACKS.map((count, i) => [stackX(i) + 11, STACK_BASE - (count - 1) * COIN_STEP - 5, 0.8, round(-i * 0.45)])}
        />
        <path d="M8 292H392" stroke={BRONZE} strokeWidth="1.2" opacity="0.6" />
        {GARLAND.map((x, i) => (
            <g key={x}>
                <path d={`M${x + 16} 292Q${x + 10} 296 ${x + 12} 304Q${x + 17} 298 ${x + 16} 292Z`} fill={i % 2 ? LEAF_DEEP : LEAF} />
                <Marigold x={x} y={292} r={7} />
            </g>
        ))}
    </svg>
);

/* LampBook (learning) — an open book lit by a diya, a page turning and sparks of light rising from it */

const PAGE = 'M200 258C170 246 132 246 98 254V152C132 144 170 144 200 158Z';
const PAGE_BLOCK = 'M200 264C168 252 128 252 92 260V158C128 150 168 150 200 164Z';
const BOOK_COVER = 'M200 270C166 258 124 258 84 266V164C124 156 166 156 200 170Z';
const PAGE_LINES = [170, 183, 196, 209, 222, 235]
    .map((y, k) => {
        const end = k === 5 ? 158 : 188;
        return `M112 ${y}C132 ${y - 5} ${end - 22} ${y - 5} ${end} ${y + (k === 5 ? 2 : 4)}`;
    })
    .join('');
const MIRROR = 'matrix(-1 0 0 1 400 0)';

const BookPage = () => (
    <g>
        <path d={PAGE} fill={PAPER} />
        <path d={PAGE_LINES} fill="none" stroke={RULE} strokeWidth="2.4" strokeLinecap="round" />
    </g>
);

const BOOK_SPARKS = [
    { x: 128, y: 168, r: 2, d: 0 },
    { x: 156, y: 158, r: 1.6, d: -2.4 },
    { x: 182, y: 150, r: 2.4, d: -4.6 },
    { x: 218, y: 150, r: 1.8, d: -1.2 },
    { x: 246, y: 158, r: 2.2, d: -3.5 },
    { x: 274, y: 166, r: 1.6, d: -5.8 }
];

export const LampBook = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Glow x={200} y={196} r={124} />
        <Twinkles stars={[[64, 70, 0.8, -0.8], [336, 58, 0.9, -2], [118, 30, 0.55, -1.4], [286, 26, 0.6, -0.2]]} />
        <path d={BOOK_COVER} fill={COVER} />
        <path d={BOOK_COVER} fill={COVER} transform={MIRROR} />
        <path d={PAGE_BLOCK} fill={PAGE_EDGE} />
        <path d={PAGE_BLOCK} fill={PAGE_EDGE} transform={MIRROR} />
        <BookPage />
        <g transform={MIRROR}>
            <BookPage />
        </g>
        <path d="M204 262V292L208 286L212 292V262Z" fill={ROSE} />
        <path d="M200 158V258" stroke={RULE} strokeWidth="2" />
        <g className="fc-anim fc-page">
            <g transform={MIRROR}>
                <BookPage />
            </g>
        </g>
        {BOOK_SPARKS.map((spark) => (
            <circle key={spark.x} className="fc-anim fc-ember" cx={spark.x} cy={spark.y} r={spark.r} fill={GOLD} style={{ '--d': `${spark.d}s` }} />
        ))}
        <Diya x={338} y={278} s={0.8} flicker={-0.7} />
    </svg>
);

/* DiyaRow (Choti Diwali, and the family on Bhai Dooj) — diyas light one by one over rangoli dots */

const ROW_LAMPS = {
    choti: [
        { x: 64, y: 222, s: 0.82 },
        { x: 132, y: 214, s: 0.94 },
        { x: 200, y: 208, s: 1.08 },
        { x: 268, y: 214, s: 0.94 },
        { x: 336, y: 222, s: 0.82 }
    ],
    // Two grown-ups and two children
    family: [
        { x: 98, y: 214, s: 1.06 },
        { x: 168, y: 226, s: 0.76 },
        { x: 232, y: 226, s: 0.76 },
        { x: 302, y: 214, s: 1.06 }
    ]
};

const ROW_DOTS = [
    { rx: 150, ry: 26, count: 15, r: 2.6 },
    { rx: 172, ry: 38, count: 17, r: 2.2 },
    { rx: 192, ry: 50, count: 19, r: 1.8 }
];

export const DiyaRow = ({ className, variant = 'choti' }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Glow x={200} y={196} r={124} />
        <Twinkles stars={NIGHT_STARS} />
        <FloorDots cx={200} cy={240} rows={ROW_DOTS} />
        {ROW_LAMPS[variant].map((lamp, i) => (
            <Diya key={lamp.x} {...lamp} light={round(0.5 + i * 0.4)} flicker={round(-i * 0.37)} />
        ))}
    </svg>
);

/* DiyaPath (Choti Diwali advisory) — a path of diyas lights up, near to far, towards a flag on a hill */

const PATH_LAMPS = [
    { x: 74, y: 284, s: 0.9 },
    { x: 150, y: 254, s: 0.74 },
    { x: 212, y: 228, s: 0.61 },
    { x: 260, y: 205, s: 0.5 },
    { x: 294, y: 183, s: 0.42 },
    { x: 316, y: 164, s: 0.35 }
];

export const DiyaPath = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Twinkles stars={[[40, 40, 0.9, 0], [112, 70, 0.6, -1.1], [180, 30, 0.75, -2.3], [250, 64, 0.6, -0.6], [392, 40, 0.7, -1.7], [60, 150, 0.55, -2.8]]} />
        <path d="M8 320C100 276 214 236 314 162L328 164C246 238 156 292 118 320Z" fill={GOLD} opacity="0.1" />
        <path d="M268 166C296 140 362 134 396 166Z" fill="#34306E" />
        <path d="M336 147V88" stroke={BRONZE} strokeWidth="2" strokeLinecap="round" />
        <g className="fc-anim fc-flag">
            <path d="M337 89L372 99L337 110Z" fill={KUMKUM} />
        </g>
        <g transform="translate(336 64)">
            <g className="fc-seq fc-pop" style={{ '--d': '2.4s' }}>
                <circle r="20" fill={GOLD} opacity="0.16" />
                <g className="fc-anim fc-twinkle">
                    <path d={starPath(4, 13, 3)} fill={GOLD_LIGHT} />
                </g>
            </g>
        </g>
        {PATH_LAMPS.map((lamp, i) => (
            <Diya key={lamp.x} {...lamp} light={round(0.4 + i * 0.32)} flicker={round(-i * 0.41)} />
        ))}
    </svg>
);

/* Lanterns (Diwali) — akash kandils sway, fireworks rise and burst, a rangoli blooms on the floor */

// Lanterns hang from a cord tied across the top; it passes y = 11 at both lanterns
const LANTERN_CORD = 'M20 6Q200 24 380 6';
const CORD_Y = 11;

const Lantern = ({ x, len, r, body, inner, edge, tail, delay }) => {
    const cy = CORD_Y + len + r;
    const tailTop = cy + round(r * 0.48);
    const tails = [
        { dx: -5, length: round(r * 1), fill: tail, knot: GOLD },
        { dx: 0, length: round(r * 1.25), fill: GOLD, knot: tail },
        { dx: 5, length: round(r * 1), fill: tail, knot: GOLD }
    ];
    return (
        <g className="fc-anim fc-lantern" style={{ '--d': `${delay}s` }}>
            <path d={`M${x} ${CORD_Y}V${round(cy - r * 0.7)}`} stroke={BRONZE} strokeWidth="1.2" />
            <g transform={`translate(${x} ${cy})`}>
                <Halo r={round(r * 1.5)} strength={0.04} />
                <path d={starPath(5, r, round(r * 0.48))} fill={body} stroke={edge} strokeWidth="1.5" strokeLinejoin="round" />
                <path d={starPath(5, round(r * 0.62), round(r * 0.3))} fill={inner} />
                <circle r={round(r * 0.2)} fill={GOLD_LIGHT} />
            </g>
            <g transform={`translate(${x} ${tailTop})`}>
                <g className="fc-anim fc-tail" style={{ '--d': `${delay - 0.5}s` }}>
                    {tails.map((t) => (
                        <g key={t.dx}>
                            <path d={`M${t.dx} 0V${t.length}`} stroke={t.fill} strokeWidth="2.6" strokeLinecap="round" />
                            <circle cx={t.dx} cy={t.length + 3} r="2.4" fill={t.knot} />
                        </g>
                    ))}
                </g>
            </g>
        </g>
    );
};

const BURSTS = [
    { x: 204, y: 86, r: 44, rays: 16, d: 0.8, colors: GOLD_BURST },
    { x: 300, y: 172, r: 30, rays: 12, d: 2, colors: ROSE_BURST },
    { x: 104, y: 186, r: 26, rays: 12, d: 3.1, colors: TEAL_BURST },
    { x: 250, y: 132, r: 20, rays: 10, d: 4.3, colors: GOLD_BURST }
];

export const Lanterns = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Twinkles stars={NIGHT_STARS} />
        <Firework x={150} y={40} r={9} rays={8} className="fc-anim fc-sparkle" delay={-1.2} />
        <Firework x={368} y={150} r={10} rays={8} className="fc-anim fc-sparkle fc-sparkle-slow" delay={-3.1} />
        {BURSTS.map((burst) => (
            <g key={burst.d}>
                <g className="fc-anim fc-rocket" style={{ '--d': `${round(burst.d - 0.5)}s`, '--rise': `${300 - burst.y}px` }}>
                    <path d={`M${burst.x} ${burst.y}V${burst.y + 16}`} stroke={GOLD_LIGHT} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
                    <circle cx={burst.x} cy={burst.y} r="2.2" fill={GOLD_LIGHT} />
                </g>
                <Firework {...burst} className="fc-anim fc-burst" delay={burst.d} />
            </g>
        ))}
        <path d={LANTERN_CORD} fill="none" stroke={BRONZE} strokeWidth="1.5" />
        <path d={LANTERN_CORD} fill="none" stroke={GOLD} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="0.1 14" />
        <Lantern x={86} len={52} r={32} body={MARIGOLD_DEEP} inner={GOLD} edge={KUMKUM} tail={KUMKUM} delay={0} />
        <Lantern x={318} len={30} r={26} body={ROSE} inner={ROSE_LIGHT} edge={ROSE_DEEP} tail={ROSE_DEEP} delay={-1.6} />
        <Marigold x={20} y={6} r={5} />
        <Marigold x={380} y={6} r={5} />
        <Marigold x={86} y={CORD_Y} r={4} />
        <Marigold x={318} y={CORD_Y} r={4} />
        <FloorRangoli x={200} y={274} size={0.86} />
        <Diya x={58} y={290} s={0.78} flicker={-0.3} />
        <Diya x={342} y={290} s={0.78} flicker={-0.9} />
    </svg>
);

/* Chopda (Diwali advisory) — the new ledger opens on "Shubh" and "Labh" and fills with neat, ticked entries */

const LEFT_ENTRIES = [62, 48, 70, 40, 56];
const RIGHT_ENTRIES = [44, 58, 36, 50, 42];
const LEDGER_ROWS = [184, 202, 220, 238, 256];

const LedgerPage = ({ x, word, margin, entries, startAt, ticks }) => (
    <g>
        <rect x={x} y="116" width="114" height="156" rx="2" fill={PAPER} />
        <g transform={`translate(${x + 57} 150)`}>
            <text className="fc-seq fc-word fc-chopda-word" textAnchor="middle" fill={KUMKUM} style={{ '--d': `${startAt - 0.4}s` }}>
                {word}
            </text>
        </g>
        <path d={`M${x + 28} 162H${x + 86}`} stroke={KUMKUM} strokeWidth="2" strokeLinecap="round" strokeDasharray="0.1 6" />
        <path d={`M${margin} 172V264`} stroke={KUMKUM} strokeWidth="1" opacity="0.45" />
        <path d={LEDGER_ROWS.map((y) => `M${x + 6} ${y}H${x + 108}`).join('')} stroke={RULE} strokeWidth="1" />
        {LEDGER_ROWS.map((y, i) => {
            const at = round(startAt + i * 0.22);
            const end = margin + 6 + entries[i];
            return (
                <g key={y}>
                    <path
                        className="fc-seq fc-write"
                        d={`M${margin + 6} ${y - 5}H${end}`}
                        pathLength="1"
                        stroke={INK}
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeDasharray="1 1"
                        style={{ '--d': `${at}s` }}
                    />
                    {ticks && (
                        <g transform={`translate(${end + 10} ${y - 5})`}>
                            <path className="fc-seq fc-pop" d="M-4 0L-1 3L5 -4" fill="none" stroke={LEAF} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ '--d': `${round(at + 0.25)}s` }} />
                        </g>
                    )}
                </g>
            );
        })}
    </g>
);

export const Chopda = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Glow x={200} y={196} r={124} />
        <Twinkles stars={[[48, 60, 0.9, -0.3], [356, 54, 0.8, -1.6], [124, 32, 0.6, -2.2], [282, 28, 0.6, -0.9]]} />
        <g className="fc-seq fc-book-in">
            <rect x="72" y="108" width="132" height="176" rx="8" fill={KUMKUM} />
            <path d="M80 112H198M80 280H198" stroke={GOLD} strokeWidth="1.5" opacity="0.8" />
            <LedgerPage x={84} word="Shubh" margin={106} entries={LEFT_ENTRIES} startAt={1.4} />
            <g className="fc-seq fc-open">
                <rect x="196" y="108" width="132" height="176" rx="8" fill={KUMKUM} />
                <path d="M202 112H320M202 280H320" stroke={GOLD} strokeWidth="1.5" opacity="0.8" />
                <LedgerPage x={202} word="Labh" margin={224} entries={RIGHT_ENTRIES} startAt={2.5} ticks />
            </g>
            <rect x="196" y="110" width="8" height="172" rx="2" fill={KUMKUM_DEEP} />
        </g>
        <Marigold x={66} y={284} r={11} />
        <Marigold x={90} y={298} r={8} />
        <Diya x={346} y={286} s={0.72} flicker={-0.6} />
    </svg>
);

/* RisingSun (New Year) — the sun rises between the Govardhan hills, birds cross, a rangoli blooms below */

const SUN_X = 200;
const HORIZON = 200;
const SUN_RAYS = Array.from({ length: 18 }, (_, i) => i * 20);
const BIRD = 'M-8 0Q-4 -5 0 0Q4 -5 8 0';
const BIRDS = [
    { x: 0, y: 70, s: 1, d: 0 },
    { x: 18, y: 58, s: 0.8, d: -0.2 },
    { x: 34, y: 76, s: 0.7, d: -0.35 }
];

export const RisingSun = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        {/* A nested viewport ending at the horizon clips the sun and rays below it */}
        <svg x="0" y="0" width="400" height={HORIZON} viewBox={`0 0 400 ${HORIZON}`}>
            <g className="fc-seq fc-rise-sun">
                <g transform={`translate(${SUN_X} ${HORIZON - 22})`}>
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
        <path d="M0 200V170C30 160 70 150 110 160C142 168 162 186 200 190C238 186 258 168 290 160C330 150 370 160 400 170V200Z" fill="#8A3A1C" />
        <path d="M0 200V186C30 178 60 176 92 184C114 190 128 196 140 200ZM400 200V184C372 176 340 176 308 184C286 190 272 196 260 200Z" fill="#6A2A15" />
        <path d={`M16 ${HORIZON}H384`} stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <g className="fc-anim fc-birds">
            {BIRDS.map((bird) => (
                <g key={bird.x} transform={`translate(${bird.x} ${bird.y}) scale(${bird.s})`}>
                    <path className="fc-anim fc-flap" d={BIRD} fill="none" stroke={PAPER} strokeWidth="1.8" strokeLinecap="round" opacity="0.8" style={{ '--d': `${bird.d}s` }} />
                </g>
            ))}
        </g>
        <FloorRangoli x={200} y={262} size={0.8} />
        <Diya x={58} y={286} s={0.74} flicker={-0.5} />
        <Diya x={342} y={286} s={0.74} flicker={-1.2} />
    </svg>
);

/* Rangoli (New Year advisory) — a full rangoli blooms and turns slowly, its centre glowing like a goal in sight */

export const Rangoli = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Glow x={200} y={160} r={150} />
        <Twinkles stars={[[40, 40, 0.9, 0], [360, 42, 0.8, -1.3], [44, 280, 0.7, -2.1], [356, 282, 0.9, -0.7]]} />
        <g transform="translate(200 160) scale(1.25)">
            <g className="fc-anim fc-spin-slow">
                <RangoliPattern />
            </g>
        </g>
    </svg>
);

/* AartiThali (Bhai Dooj) — the aarti thali circles gently, its diya flickering, as petals drift down */

const FALLING_PETALS = [
    { x: 60, s: 1, dur: 9, d: 0, fill: ROSE, py: 70 },
    { x: 120, s: 0.8, dur: 11, d: -4, fill: MARIGOLD, py: 150 },
    { x: 168, s: 0.9, dur: 10, d: -7, fill: ROSE_LIGHT, py: 40 },
    { x: 236, s: 0.75, dur: 12, d: -2.5, fill: MARIGOLD, py: 110 },
    { x: 290, s: 1, dur: 9.5, d: -5.5, fill: ROSE, py: 60 },
    { x: 344, s: 0.85, dur: 11.5, d: -8.5, fill: ROSE_LIGHT, py: 160 },
    { x: 92, s: 0.7, dur: 13, d: -10, fill: GOLD, py: 20 },
    { x: 318, s: 0.7, dur: 12.5, d: -1.2, fill: GOLD, py: 120 }
];
const PETAL = petalPath(14, 6);
const PLATE_PETALS = [
    [136, 254, -30],
    [262, 254, 40],
    [200, 262, 90],
    [104, 236, -70],
    [296, 236, 70]
];

const Katori = ({ x, y, fill }) => (
    <g transform={`translate(${x} ${y})`}>
        <path d="M-20 0C-18 11 18 11 20 0Z" fill={BRASS_DEEP} />
        <ellipse rx="20" ry="5.5" fill={BRASS_LIGHT} />
        <ellipse cy="0.5" rx="16" ry="3.8" fill={fill} />
    </g>
);

export const AartiThali = ({ className }) => (
    <svg className={className} viewBox="0 0 400 320" aria-hidden="true" focusable="false">
        <Glow x={200} y={196} r={124} fill={ROSE_LIGHT} />
        <Twinkles stars={[[52, 48, 0.9, -0.4], [348, 40, 0.8, -1.5], [140, 24, 0.6, -2.4], [262, 30, 0.6, -0.8]]} />
        <g transform="translate(0 -14)">
            <g className="fc-anim fc-aarti-x">
                <g className="fc-anim fc-aarti-y">
                    <ellipse cx="200" cy="244" rx="130" ry="40" fill={BRASS_DEEP} />
                    <ellipse cx="200" cy="236" rx="130" ry="40" fill={BRASS} />
                    <ellipse cx="200" cy="236" rx="121" ry="36.5" fill="none" stroke={GOLD_LIGHT} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="0.1 7.5" />
                    <ellipse cx="200" cy="237" rx="108" ry="31" fill="#E3AC4A" />
                    {PLATE_PETALS.map(([x, y, a]) => (
                        <path key={`${x}-${y}`} d={PETAL} fill={ROSE} transform={`translate(${x} ${y}) rotate(${a}) scale(0.8)`} />
                    ))}
                    <Marigold x={116} y={246} r={8} />
                    <Marigold x={284} y={246} r={8} />
                    <Marigold x={166} y={256} r={7} />
                    <Marigold x={234} y={256} r={7} />
                    <Katori x={140} y={230} fill={KUMKUM} />
                    <Katori x={260} y={230} fill="#FBF3DD" />
                    <path d="M252 230h3M259 229h3M265 231h3" stroke="#E2D3B0" strokeWidth="1.4" strokeLinecap="round" />
                    <Diya x={200} y={224} s={1.25} flicker={-0.3} />
                </g>
            </g>
        </g>
        {FALLING_PETALS.map((petal) => (
            <g key={petal.x} transform={`translate(${petal.x} -20)`}>
                <g className="fc-anim fc-fall" style={{ '--d': `${petal.d}s`, '--dur': `${petal.dur}s`, '--py': `${petal.py}px` }}>
                    <g className="fc-anim fc-flutter" style={{ '--d': `${petal.d}s` }}>
                        <path d={PETAL} fill={petal.fill} transform={`scale(${petal.s})`} />
                    </g>
                </g>
            </g>
        ))}
    </svg>
);
