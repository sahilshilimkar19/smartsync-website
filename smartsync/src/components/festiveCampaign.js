// Diwali 2026 (India / New Delhi panchang): a different carousel for each festival day, 6–11 November.
// Every boundary is midnight IST, so all visitors switch at the same moment. 9 November has no festival of its
// own (Amavasya continues past sunrise), so the Diwali carousel stays up through it.
const ist = (day) => Date.parse(`2026-11-${day}T00:00:00+05:30`);

const WISHES = 'Warm wishes from all of us at SmartSync Services.';
const SEBI_NOTE = 'SEBI Registered Investment Adviser · INA000007881. Investments in securities market are subject to market risks. Read all the related documents carefully before investing.';
const ADVISORY_TEXT = 'Research-led stock advisory, built around your goals and risk profile.';
const LEARNING_TEXT = '150+ hours of video lessons on investing, used by nearly 7,000 investors.';

const GREETING_CTAS = [{ label: 'Explore our services', href: '#services' }];
const ADVISORY_CTAS = [
    { label: 'Stock SIP Portfolio', to: '/model-portfolio' },
    { label: 'Flexi-Cap Advisory', to: '/flexi-cap-advisory-services', ghost: true }
];
const LEARNING_CTAS = [{ label: 'Start learning', href: 'https://missionsmile.smartsyncservices.com/learn', external: true }];

const greeting = ({ art, eyebrow, title, text }) => ({
    id: 'greeting',
    art,
    eyebrow,
    title,
    text: `${text} ${WISHES}`,
    ctas: GREETING_CTAS
});

const advisory = ({ art, title, text }) => ({
    id: 'advisory',
    art,
    eyebrow: 'Advisory services',
    title,
    text: `${text} ${ADVISORY_TEXT}`,
    note: SEBI_NOTE,
    ctas: ADVISORY_CTAS
});

const learning = ({ title, text = LEARNING_TEXT }) => ({
    id: 'learning',
    art: 'book',
    eyebrow: 'MissioN S.M.I.L.E',
    title,
    text,
    ctas: LEARNING_CTAS
});

export const PHASES = [
    {
        key: 'dhanteras',
        theme: 'royal',
        start: ist('06'),
        end: ist('07'),
        slides: [
            greeting({
                art: 'kalash',
                eyebrow: 'Dhanteras · 6 November',
                title: 'Happy Dhanteras',
                text: 'May this Dhanteras bring good health, wealth and prosperity to you and your family.'
            }),
            advisory({
                art: 'coins',
                title: 'Build wealth one step at a time',
                text: 'This Dhanteras, invest in a habit: a little, every month.'
            }),
            learning({ title: 'Knowledge is wealth too' })
        ]
    },
    {
        key: 'choti',
        theme: 'indigo',
        start: ist('07'),
        end: ist('08'),
        slides: [
            greeting({
                art: 'diyas',
                eyebrow: 'Choti Diwali · Kali Chaudas · 7 November',
                title: 'Happy Choti Diwali',
                text: 'May every diya you light today brighten your home with joy, health and peace.'
            }),
            advisory({
                art: 'path',
                title: 'Light the way to your goals',
                text: 'A clear plan lights every step ahead.'
            }),
            learning({ title: 'Light up your learning' })
        ]
    },
    {
        key: 'diwali',
        theme: 'night',
        start: ist('08'),
        end: ist('10'),
        slides: [
            greeting({
                art: 'lanterns',
                eyebrow: 'Deepavali · Lakshmi Puja · 8 November',
                title: 'Happy Diwali',
                text: 'May the festival of lights fill your home with prosperity, good health and happiness.'
            }),
            advisory({
                art: 'chopda',
                title: 'Start the new books with discipline',
                text: 'This Chopda Pujan, open your new books with a plan you can stick to.'
            }),
            learning({ title: 'Learn to invest with confidence' })
        ]
    },
    {
        key: 'newyear',
        theme: 'sunrise',
        start: ist('10'),
        end: ist('11'),
        slides: [
            greeting({
                art: 'sunrise',
                eyebrow: 'Nutan Varsh Abhinandan · Diwali Padwa · Govardhan Puja · 10 November',
                title: 'Saal Mubarak',
                text: 'Wishing you and your family a prosperous and healthy Vikram Samvat 2083, and a joyful Diwali Padwa.'
            }),
            advisory({
                art: 'rangoli',
                title: 'New year, clear goals',
                text: 'Begin Samvat 2083 with clear goals and a disciplined plan.'
            }),
            learning({ title: 'A new year to learn something new' })
        ]
    },
    {
        key: 'bhaidooj',
        theme: 'rose',
        start: ist('11'),
        end: ist('12'),
        slides: [
            greeting({
                art: 'thali',
                eyebrow: 'Bhai Dooj · 11 November',
                title: 'Happy Bhai Dooj',
                text: 'Celebrating the bond between brothers and sisters. Wishing you love, health and happiness.'
            }),
            learning({
                title: 'Gift the habit of learning',
                text: 'Share it with your brother or sister: 150+ hours of video lessons on investing, used by nearly 7,000 investors.'
            }),
            advisory({
                art: 'family',
                title: "Plan your family's goals together",
                text: 'From education to a first home, give each goal a plan.'
            })
        ]
    }
];

// The phase showing at `now`, or null outside the campaign
export function getCampaignPhase(now) {
    if (!Number.isFinite(now)) return null;
    return PHASES.find((phase) => now >= phase.start && now < phase.end) ?? null;
}

export function getPhaseByKey(key) {
    return PHASES.find((phase) => phase.key === key) ?? null;
}

const BOUNDARIES = [...new Set(PHASES.flatMap((phase) => [phase.start, phase.end]))].sort((a, b) => a - b);

// Time until the carousel next changes: the campaign starts, the day switches, or the campaign ends
export function msUntilNextBoundary(now) {
    if (!Number.isFinite(now)) return Infinity;
    const next = BOUNDARIES.find((boundary) => boundary > now);
    return next === undefined ? Infinity : next - now;
}
