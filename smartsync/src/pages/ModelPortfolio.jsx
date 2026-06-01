import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';

const ModelPortfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <main className="page-wrapper pt-32">
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Stock <span className="text-accent">SIP</span> Portfolio Advisory</h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px', marginBottom: '2rem' }}>
                            Build your wealth one SIP at a time. Designed to leverage rupee-cost averaging while generating above-average returns with downside protection.
                        </p>
                        <button
                            className="btn-primary"
                            style={{ marginTop: '2rem' }}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Schedule a Call
                        </button>
                    </motion.div>

                    <div style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0 auto' }}>
                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ marginBottom: '4rem' }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>Our SIP Philosophy</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                                {['Investment, Not Speculation', 'Specialization Based On Circle of Competence', 'Above Average Returns, Below Average Risk', 'Risk Management & Capital Protection', 'Emphasis On Consistent Performance', "Focus on Company's Fundamentals"].map((item, i) => (
                                    <div key={i} style={{ background: 'var(--color-bg-surface)', padding: '2rem', border: '1px solid rgba(26,26,26,0.1)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                        <div style={{ width: '8px', height: '8px', background: 'var(--color-accent-primary)', borderRadius: '50%', flexShrink: 0 }} />
                                        <span style={{ fontWeight: 500, fontSize: '1.05rem' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{ marginBottom: '4rem' }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>How SIP Advisory Works</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                                {[
                                    { title: "Monthly Investment Amount", desc: "Say you allocate INR 1 lakh every month for investment." },
                                    { title: "Stock Distribution (Equal Weightage)", desc: "Let's divide the total investment amount by the number of stocks. So, for each of the 20 individual stocks, we propose investing INR 5000 every month." },
                                    { title: "Implementation", desc: "We will email you on the 1st trading day of every month, with the portfolio of 20 stocks, along with their weightage. These trades are to be then executed by you." },
                                    { title: "Rebalancing", desc: "We will also inform you via email of any instructions regarding getting in or out of any stock, required to adjust the allocation over time and maintain the balanced weightage in your portfolio." },
                                    { title: "Tracking and Monitoring", desc: "To help us keep track of the performance of each investment, we require you to share your holding information with us after you execute the trades at the beginning of every month." }
                                ].map((step, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--color-bg-surface)', padding: '2.5rem', border: '1px solid rgba(26, 26, 26, 0.1)', alignItems: 'center' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--color-accent-primary)', lineHeight: 1, fontFamily: 'var(--font-display)', opacity: 0.5, minWidth: '60px' }}>
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{step.title}</h3>
                                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 0 }}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>Pricing Options</h2>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ borderRight: '1px solid rgba(26,26,26,0.1)', paddingRight: '2rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-accent-primary)' }}>Retail</h3>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Investment Amount &lt; INR 30,00,000</p>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <p style={{ fontWeight: 500, fontSize: '1rem', marginBottom: '0.35rem', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>INR 48,000 + 18% GST</p>
                                        <p style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.25rem', color: 'var(--color-accent-primary)' }}>INR 24,000 + 18% GST</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                                            <span style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'linear-gradient(135deg, #0f766e, #0ea5a5)', color: '#ffffff', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.06em', borderRadius: '999px', boxShadow: '0 6px 14px rgba(15, 118, 110, 0.25)' }}>50% OFF</span>
                                            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#c2410c', letterSpacing: '0.02em', textTransform: 'uppercase' }}>Discount ending soon! Hurry.</span>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Email and Call Support.</p>
                                    <a href="https://razorpay.me/@smartsyncservices?amount=eh3jhVdIy2W8Wc3l4sF8AQ%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'inline-block', textDecoration: 'none' }}>Sign Up</a>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-accent-primary)' }}>HNI</h3>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Investment Amount &gt; INR 30,00,000</p>
                                    <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>Minimum INR 48,000 or 1.5% of AUM + 18% GST</p>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Exclusive Access to Detailed Research of Portfolio Holding Companies. Email and Call Support.</p>
                                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        <a href="https://pages.razorpay.com/pl_SfH7WTvnnDFtCp/view" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'inline-block', textDecoration: 'none' }}>Sign Up</a>
                                        <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }} onClick={() => setIsModalOpen(true)}>Schedule a Call</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,26,0.5)', backdropFilter: 'blur(4px)' }}
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            style={{ position: 'relative', background: 'var(--color-bg-base)', padding: '2.5rem', width: '100%', maxWidth: '500px', border: '1px solid rgba(26,26,26,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        >
                            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--color-text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }}>
                                <X size={24} />
                            </button>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Schedule a Call</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Reach out to us through any of the options below.</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a href="tel:+919099956002" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', border: '1px solid rgba(26,26,26,0.15)', background: 'var(--color-bg-surface)', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s' }}>
                                    <Phone size={20} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '1rem' }}>Call Us</div>
                                        <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>+91 90999 56002</div>
                                    </div>
                                </a>

                                <a href="https://wa.me/919099956002" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', border: '1px solid rgba(26,26,26,0.15)', background: 'var(--color-bg-surface)', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '1rem' }}>WhatsApp</div>
                                        <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>+91 90999 56002</div>
                                    </div>
                                </a>

                                <a href="mailto:akhilesh.p@smartsyncservices.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', border: '1px solid rgba(26,26,26,0.15)', background: 'var(--color-bg-surface)', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s' }}>
                                    <Mail size={20} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '1rem' }}>Email</div>
                                        <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>akhilesh.p@smartsyncservices.com</div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default ModelPortfolio;
