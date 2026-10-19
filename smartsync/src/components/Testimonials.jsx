import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        text: "Working with Smart Sync Services has indeed been a rewarding and fulfilling journey so far. This team proactively engages and helps build a portfolio based on one's goals and investing profile. They work more like partners and genuinely care about client expectations during every market cycle. I would also like to specifically thank Akhilesh for building a great team by embracing honesty and empathy as core values throughout.",
        author: "Yogesh Aigalikar",
        title: "Regional Sales Director – Global Analytics OEM"
    },
    {
        text: "Working with Smart Sync Services has been one of the best financial decisions I've ever made. From the very beginning, they took the time to understand my goals and built a portfolio that truly worked for me. Their timely advice and clear explanations gave me the confidence to stay invested, even in uncertain markets. Thanks to their guidance, my investments have grown steadily beyond expectations. Akhilesh, in particular, has been amazing—always keeping in touch, discussing market moves, and ensuring I make the right calls at the right time.",
        author: "Ashok Mishra",
        title: "Global Head – Customer Service, US Data Analytics MNC"
    },
    {
        text: "Smart Sync Services has been instrumental in transforming my investment approach. Their deep market knowledge, personalized strategies, and clear communication have given me the confidence to stay focused on my long-term goals. Every recommendation is backed by thorough research and timely market insights, helping me navigate both opportunities and risks with ease. The team's professionalism and dedication, especially their proactive updates and transparent advice, make them a trusted partner for wealth creation. I wholeheartedly recommend Smart Sync Services to anyone serious about growing their investments with expert guidance.",
        author: "Yogesh Mishra",
        title: "Director – Technology Operations, Indian MNC"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-gradient">Client Testimonials</h2>
                    <p className="section-subtitle">Read what our clients have to say about our guidance and principles.</p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            className="testimonial-card"
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <Quote className="quote-icon" size={48} />
                            <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                            <div className="testimonial-author-info">
                                <h3 className="testimonial-author">{t.author}</h3>
                                <span className="testimonial-author-title">{t.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
