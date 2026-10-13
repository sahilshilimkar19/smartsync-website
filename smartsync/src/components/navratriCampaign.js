// Sharad Navratri 2026: 11–19 October. Vijayadashami (Dussehra): 20 October.
// Boundaries are pinned to IST so every visitor switches at the same moment.
export const START = Date.parse('2026-10-11T00:00:00+05:30');
export const DUSSEHRA_START = Date.parse('2026-10-20T00:00:00+05:30');
export const END = Date.parse('2026-10-21T00:00:00+05:30'); // exclusive

export function getCampaignPhase(now) {
    if (!Number.isFinite(now) || now < START || now >= END) return null;
    return now < DUSSEHRA_START ? 'navratri' : 'dussehra';
}

export function msUntilNextBoundary(now) {
    if (!Number.isFinite(now)) return Infinity;
    for (const boundary of [START, DUSSEHRA_START, END]) {
        if (now < boundary) return boundary - now;
    }
    return Infinity;
}

const GREETING = {
    id: "greeting",
    theme: "forest",
    art: "garba",
    eyebrow: "Sharad Navratri · 11–19 October",
    title: "Shubh Navratri",
    text: "Nine nights of devotion, discipline and new beginnings. Warm wishes from all of us at SmartSync Services.",
    ctas: [{ label: "Explore our services", href: "#services" }]
};

const ADVISORY = {
    id: "advisory",
    theme: "maroon",
    art: "diyas",
    eyebrow: "Advisory services",
    title: "Invest with discipline, not speculation",
    text: "Research-led stock advisory built around your goals and risk profile.",
    note: "SEBI Registered Investment Adviser · INA000007881. Investments in securities market are subject to market risks. Read all the related documents carefully before investing.",
    ctas: [
        { label: "Stock SIP Portfolio", to: "/model-portfolio" },
        { label: "Flexi-Cap Advisory", to: "/flexi-cap-advisory-services", ghost: true }
    ]
};

const LEARNING = {
    id: "learning",
    theme: "indigo",
    art: "stars",
    eyebrow: "MissioN S.M.I.L.E",
    title: "Nine nights. Endless learning.",
    text: "150+ hours of video lessons on investing, used by nearly 7,000 investors.",
    ctas: [{ label: "Start learning", href: "https://missionsmile.smartsyncservices.com/learn", external: true }]
};

export const NAVRATRI_SLIDES = [GREETING, ADVISORY, LEARNING];

export const DUSSEHRA_SLIDES = [
    {
        ...GREETING,
        eyebrow: "Vijayadashami · 20 October",
        title: "Happy Dussehra",
        text: "Wishing you and your family a joyous Vijayadashami. Warm wishes from all of us at SmartSync Services."
    },
    ADVISORY,
    LEARNING
];
