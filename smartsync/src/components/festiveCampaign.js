// Dussehra 2026: Vijayadashami falls on Tuesday 20 October. The campaign runs from 19 October until the end of 20 October.
// Boundaries are pinned to IST so every visitor switches at the same moment.
export const START = Date.parse('2026-10-19T00:00:00+05:30');
export const END = Date.parse('2026-10-21T00:00:00+05:30'); // exclusive

export function isCampaignLive(now) {
    return Number.isFinite(now) && now >= START && now < END;
}

export function msUntilNextBoundary(now) {
    if (!Number.isFinite(now)) return Infinity;
    for (const boundary of [START, END]) {
        if (now < boundary) return boundary - now;
    }
    return Infinity;
}

export const DUSSEHRA_SLIDES = [
    {
        id: "greeting",
        theme: "dusk",
        art: "victory",
        eyebrow: "Vijayadashami · 20 October",
        title: "Happy Dussehra",
        text: "May the victory of good over evil bring courage, clarity and prosperity to you and your family. Warm wishes from all of us at SmartSync Services.",
        ctas: [{ label: "Explore our services", href: "#services" }]
    },
    {
        id: "advisory",
        theme: "maroon",
        art: "vices",
        eyebrow: "Advisory services",
        title: "Let discipline win over speculation",
        text: "This Dussehra, leave greed, fear and hot tips behind. Research-led stock advisory, built around your goals and risk profile.",
        note: "SEBI Registered Investment Adviser · INA000007881. Investments in securities market are subject to market risks. Read all the related documents carefully before investing.",
        ctas: [
            { label: "Stock SIP Portfolio", to: "/model-portfolio" },
            { label: "Flexi-Cap Advisory", to: "/flexi-cap-advisory-services", ghost: true }
        ]
    },
    {
        id: "learning",
        theme: "forest",
        art: "dawn",
        eyebrow: "MissioN S.M.I.L.E",
        title: "Every victory begins with learning",
        text: "150+ hours of video lessons on investing, used by nearly 7,000 investors.",
        ctas: [{ label: "Start learning", href: "https://missionsmile.smartsyncservices.com/learn", external: true }]
    }
];
