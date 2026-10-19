import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Working with Smart Sync Services has indeed been a rewarding and fulfilling journey so far. This team proactively engages and helps build a portfolio based on one's goals and investing profile. They work more like partners and genuinely care about client expectations during every market cycle. I would also like to specifically thank Akhilesh for building a great team by embracing honesty and empathy as core values throughout.",
        author: "Yogesh Aigalikar",
        descriptor: "Regional Sales Director – Global Analytics OEM"
    },
    {
        quote: "Working with Smart Sync Services has been one of the best financial decisions I've ever made. From the very beginning, they took the time to understand my goals and built a portfolio that truly worked for me. Their timely advice and clear explanations gave me the confidence to stay invested, even in uncertain markets. Thanks to their guidance, my investments have grown steadily beyond expectations. Akhilesh, in particular, has been amazing—always keeping in touch, discussing market moves, and ensuring I make the right calls at the right time.",
        author: "Ashok Mishra",
        descriptor: "Global Head – Customer Service, US Data Analytics MNC"
    },
    {
        quote: "Smart Sync Services has been instrumental in transforming my investment approach. Their deep market knowledge, personalized strategies, and clear communication have given me the confidence to stay focused on my long-term goals. Every recommendation is backed by thorough research and timely market insights, helping me navigate both opportunities and risks with ease. The team's professionalism and dedication, especially their proactive updates and transparent advice, make them a trusted partner for wealth creation. I wholeheartedly recommend Smart Sync Services to anyone serious about growing their investments with expert guidance.",
        author: "Yogesh Mishra",
        descriptor: "Director – Technology Operations, Indian MNC"
    }
];

const ClientTestimonials = () => {
    usePageTitle('Client Testimonials | SmartSync Services');
    return (
        <div className="page-wrapper pt-32">
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Client <span className="text-accent">Testimonials</span></h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            Here is what our clients say about us!
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ color: 'var(--color-accent-primary)', fontSize: '3rem', lineHeight: 1, marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>“</div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, flexGrow: 1, marginBottom: '2rem', fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
                                    {testimonial.quote}
                                </p>
                                <div style={{ borderTop: '1px solid rgba(26, 26, 26, 0.1)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                                    <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.25rem' }}>{testimonial.author}</h2>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{testimonial.descriptor}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientTestimonials;
