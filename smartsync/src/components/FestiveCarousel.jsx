import React, { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { DUSSEHRA_SLIDES, NAVRATRI_SLIDES, getCampaignPhase, msUntilNextBoundary } from './festiveCampaign';
import { Dandiya, Diyas, Mandala, NightStars, Sparks, Toran } from './FestiveMotifs';
import './FestiveCarousel.css';

const SWIPE_THRESHOLD = 50;
const MAX_TIMEOUT = 2147483647;

// Dev-only preview of other phases: ?fcPhase=navratri | dussehra | off
const DEV_PHASE = import.meta.env.DEV ? new URLSearchParams(window.location.search).get('fcPhase') : null;

const getPhase = () => {
    if (DEV_PHASE === 'off') return null;
    if (DEV_PHASE === 'navratri' || DEV_PHASE === 'dussehra') return DEV_PHASE;
    return getCampaignPhase(Date.now());
};

// Re-renders at each campaign boundary, so an open tab switches to Dussehra and then hides itself.
const subscribeClock = (onChange) => {
    let timer;
    const arm = () => {
        const ms = msUntilNextBoundary(Date.now());
        if (ms === Infinity) return;
        timer = setTimeout(() => {
            onChange();
            arm();
        }, Math.min(ms + 1000, MAX_TIMEOUT));
    };
    arm();
    document.addEventListener('visibilitychange', onChange);
    return () => {
        clearTimeout(timer);
        document.removeEventListener('visibilitychange', onChange);
    };
};

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

const subscribeReducedMotion = (onChange) => {
    const query = window.matchMedia(REDUCED_MOTION);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
};

const getReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

const subscribeVisibility = (onChange) => {
    document.addEventListener('visibilitychange', onChange);
    return () => document.removeEventListener('visibilitychange', onChange);
};

const getHidden = () => document.hidden;

const isKeyboardFocus = (element) => {
    try {
        return element.matches(':focus-visible');
    } catch {
        return false;
    }
};

const GarbaArt = () => (
    <>
        <Mandala className="fc-art-mandala fc-anim fc-spin" />
        <Dandiya className="fc-art-dandiya" />
        <Sparks className="fc-art-sparks" />
    </>
);

const DiyasArt = () => (
    <>
        <Mandala className="fc-art-mandala fc-art-faint fc-anim fc-spin" />
        <Diyas className="fc-art-diyas" />
    </>
);

const StarsArt = () => <NightStars className="fc-art-stars" />;

const ART = { garba: GarbaArt, diyas: DiyasArt, stars: StarsArt };

const SlideCta = ({ cta }) => {
    const className = `fc-btn${cta.ghost ? ' fc-btn-ghost' : ''}`;

    if (cta.to) {
        return <Link to={cta.to} className={className}>{cta.label}</Link>;
    }

    if (cta.external) {
        return (
            <a href={cta.href} className={className} target="_blank" rel="noopener noreferrer">
                {cta.label}
                <ArrowUpRight size={16} aria-hidden="true" />
                <span className="fc-sr-only"> (opens in a new tab)</span>
            </a>
        );
    }

    return <a href={cta.href} className={className}>{cta.label}</a>;
};

const Carousel = ({ slides }) => {
    const [active, setActive] = useState(0);
    const [userPaused, setUserPaused] = useState(null); // null = follow prefers-reduced-motion
    const [hovered, setHovered] = useState(false);
    const [keyboardFocus, setKeyboardFocus] = useState(false);
    const [offscreen, setOffscreen] = useState(false);
    const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion);
    const hidden = useSyncExternalStore(subscribeVisibility, getHidden);
    const swipeStart = useRef(null);
    const sectionRef = useRef(null);
    const viewportId = useId();

    const count = slides.length;
    const rotationOn = !(userPaused ?? reducedMotion);
    const paused = !rotationOn || hovered || keyboardFocus || hidden || offscreen;

    // While the band is scrolled out of view, autoplay and the artwork's animations wait
    useEffect(() => {
        const section = sectionRef.current;
        if (!section || typeof IntersectionObserver === 'undefined') return undefined;
        const observer = new IntersectionObserver(([entry]) => setOffscreen(!entry.isIntersecting));
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const next = () => setActive((a) => (a + 1) % count);
    const prev = () => setActive((a) => (a - 1 + count) % count);

    // The progress fill's CSS animation is the autoplay clock: pausing it pauses rotation.
    const handleProgressEnd = (e) => {
        if (e.target === e.currentTarget && e.animationName === 'fc-progress') next();
    };

    const handleFocus = (e) => {
        setKeyboardFocus(isKeyboardFocus(e.target) && !e.target.closest('.fc-rotation'));
    };

    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setKeyboardFocus(false);
    };

    const handlePointerEnter = (e) => {
        if (e.pointerType === 'mouse') setHovered(true);
    };

    const handlePointerLeave = (e) => {
        if (e.pointerType === 'mouse') setHovered(false);
    };

    const handlePointerDown = (e) => {
        if (e.pointerType === 'mouse') return;
        swipeStart.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e) => {
        const start = swipeStart.current;
        swipeStart.current = null;
        if (!start) return;
        const dx = e.clientX - start.x;
        const dy = e.clientY - start.y;
        if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
        if (dx < 0) next();
        else prev();
    };

    const handlePointerCancel = () => {
        swipeStart.current = null;
    };

    return (
        <section
            ref={sectionRef}
            className="festive-carousel"
            aria-roledescription="carousel"
            aria-label="Festive highlights"
            data-paused={paused}
            data-still={!rotationOn}
            data-offscreen={offscreen}
        >
            <div className="fc-panel" data-theme={slides[active].theme} onFocus={handleFocus} onBlur={handleBlur}>
                <Toran className="fc-toran" />

                <div className="fc-controls container">
                    <button
                        type="button"
                        className="fc-control fc-rotation"
                        onClick={() => setUserPaused(rotationOn)}
                        aria-label={rotationOn ? 'Pause slide show and animations' : 'Play slide show and animations'}
                    >
                        {rotationOn ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
                    </button>
                    <button type="button" className="fc-control" onClick={prev} aria-controls={viewportId} aria-label="Previous slide">
                        <ChevronLeft size={20} aria-hidden="true" />
                    </button>
                    <div className="fc-dots">
                        {slides.map((slide, i) => (
                            <button
                                key={slide.id}
                                type="button"
                                className={`fc-dot${i === active ? ' is-active' : ''}`}
                                onClick={() => setActive(i)}
                                aria-controls={viewportId}
                                aria-label={`Go to slide ${i + 1} of ${count}`}
                                aria-current={i === active ? 'true' : undefined}
                            >
                                <span className="fc-dot-track">
                                    {i === active && <span className="fc-fill" onAnimationEnd={handleProgressEnd} />}
                                </span>
                            </button>
                        ))}
                    </div>
                    <button type="button" className="fc-control" onClick={next} aria-controls={viewportId} aria-label="Next slide">
                        <ChevronRight size={20} aria-hidden="true" />
                    </button>
                </div>

                <div
                    id={viewportId}
                    className="fc-viewport"
                    aria-live={paused ? 'polite' : 'off'}
                    onPointerEnter={handlePointerEnter}
                    onPointerLeave={handlePointerLeave}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerCancel}
                >
                    {slides.map((slide, i) => {
                        const Art = ART[slide.art];
                        return (
                            <div
                                key={slide.id}
                                className={`fc-slide container${i === active ? ' is-active' : ''}`}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${i + 1} of ${count}`}
                                inert={i !== active}
                            >
                                <div className="fc-copy">
                                    <p className="fc-eyebrow fc-rise" style={{ '--i': 0 }}>{slide.eyebrow}</p>
                                    <h2 className="fc-title fc-rise" style={{ '--i': 1 }}>{slide.title}</h2>
                                    <p className="fc-text fc-rise" style={{ '--i': 2 }}>{slide.text}</p>
                                    <div className="fc-actions fc-rise" style={{ '--i': 3 }}>
                                        {slide.ctas.map((cta) => (
                                            <SlideCta key={cta.label} cta={cta} />
                                        ))}
                                    </div>
                                    {slide.note && <p className="fc-note fc-rise" style={{ '--i': 4 }}>{slide.note}</p>}
                                </div>
                                <div className="fc-art" aria-hidden="true">
                                    <Art />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const FestiveCarousel = () => {
    const phase = useSyncExternalStore(subscribeClock, getPhase);
    if (!phase) return null;
    return <Carousel slides={phase === 'dussehra' ? DUSSEHRA_SLIDES : NAVRATRI_SLIDES} />;
};

export default FestiveCarousel;
