import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { motion } from 'framer-motion';

const FlexiCapAdvisory = () => {
    usePageTitle('Flexi-Cap Advisory Services | SmartSync Services');
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
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                            Flexi-Cap <span className="text-accent">Advisory</span> Services
                        </h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            Customised investment plans, 1:1 guidance, and end-to-end wealth management — fully SEBI RIA compliant.
                        </p>
                    </motion.div>

                    <div style={{ maxWidth: '860px', margin: '4rem auto 0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* Why Choose Us */}
                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.6rem', marginBottom: '1.75rem', fontWeight: 600 }}>
                                Why Choose Our Flexi-Cap Advisory Service?
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <li style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', fontSize: '1.05rem' }}>
                                    <span style={{ color: 'var(--color-accent-primary)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✦</span>
                                    <span>
                                        <strong>SEBI RIA Advantage vs RA —</strong> Unlike SEBI Research Analysts (RA) who provide generic stock lists/research reports, we as a SEBI Registered Investment Advisor deliver <strong>customised investment plans, ongoing 1:1 guidance, and end-to-end wealth management</strong> with full compliance &amp; transparency.
                                    </span>
                                </li>
                                <li style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', fontSize: '1.05rem' }}>
                                    <span style={{ color: 'var(--color-accent-primary)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✦</span>
                                    <span>Flexible Portfolio Allocation across large-cap, mid-cap, small-cap &amp; micro-cap stocks</span>
                                </li>
                                <li style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', fontSize: '1.05rem' }}>
                                    <span style={{ color: 'var(--color-accent-primary)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✦</span>
                                    <span>Expert Research &amp; Insights backed by in-depth analysis</span>
                                </li>
                                <li style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', fontSize: '1.05rem' }}>
                                    <span style={{ color: 'var(--color-accent-primary)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✦</span>
                                    <span>Tailored Recommendations aligned to your risk profile &amp; goals</span>
                                </li>
                                <li style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', fontSize: '1.05rem' }}>
                                    <span style={{ color: 'var(--color-accent-primary)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✦</span>
                                    <span>Proactive Investment advice with periodic reviews &amp; rebalancing</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Track Record */}
                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.6rem', marginBottom: '1.25rem', fontWeight: 600 }}>
                                Proven Track Record — Research That Delivers
                            </h2>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                                Our research has consistently identified high-potential opportunities early. One such case is <strong>Gabriel India</strong>, where we spotted its growth potential much before it became a market favourite.
                            </p>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                                Check our research updates <em>(first shared with HNIs in March 2024, later posted publicly)</em>:
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                <a href="https://x.com/SmartSyncServ/status/1914173365448827363" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-primary)', fontWeight: 500, textDecoration: 'underline', fontSize: '1rem' }}>
                                    🔗 x.com/SmartSyncServ — Gabriel India Research Update
                                </a>
                                <a href="https://x.com/akhileshnpathak/status/1897635178153123925" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-primary)', fontWeight: 500, textDecoration: 'underline', fontSize: '1rem' }}>
                                    🔗 x.com/akhileshnpathak — Gabriel India Follow-up
                                </a>
                            </div>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                                📌 Gabriel India has delivered excellent returns to our clients and partners, many of whom have been holding the stock from much lower levels.
                            </p>
                            <p style={{ fontSize: '1.05rem' }}>
                                💼 With our advisory, we provide a <strong>customised portfolio of 20–25 carefully selected stocks</strong> tailored to your risk appetite, investment horizon, and financial objectives. We expect similar wealth-creating potential from many of our investment recommendations, just like Gabriel India.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.23 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 600 }}>Fee Details</h2>

                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-accent-primary)' }}>Retail</h3>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Investment Amount &lt; INR 30,00,000 per year</p>
                                <div style={{ marginBottom: '1rem' }}>
                                    <p style={{ fontWeight: 500, fontSize: '1rem', marginBottom: '0.35rem', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>INR 48,000 per year + 18% GST</p>
                                    <p style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.25rem', color: 'var(--color-accent-primary)' }}>INR 24,000 per year + 18% GST</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                                        <span style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: '#0f766e', color: '#ffffff', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.06em', borderRadius: '999px', boxShadow: '0 6px 14px rgba(15, 118, 110, 0.25)' }}>50% OFF</span>
                                        <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#c2410c', letterSpacing: '0.02em', textTransform: 'uppercase' }}>Discount ending soon! Hurry.</span>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Email and Call Support.</p>
                                <a href="https://razorpay.me/@smartsyncservices?amount=eh3jhVdIy2W8Wc3l4sF8AQ%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'inline-block', textDecoration: 'none' }}>Sign Up</a>
                            </div>
                        </motion.div>

                        {/* Sample Reports */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                        >
                            <a href="/Fineotex Chemicals Detailed report_SSS.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-primary)', fontWeight: 600, textDecoration: 'underline', fontSize: '1rem' }}>
                                Click here to view / download sample research report — Fineotex Chemicals
                            </a>
                        </motion.div>

                        {/* Get Started CTA */}
                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)', textAlign: 'center' }}
                        >
                            <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 600 }}>Get Started Today!</h2>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                                We'd love to discuss how this service can help you achieve your financial aspirations. Call us for your <strong>complimentary consultation</strong>.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                                <a href="tel:+917016659985" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent-primary)', textDecoration: 'none' }}>
                                    📞 +91-7016659985
                                </a>
                                <a href="tel:+919099956002" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent-primary)', textDecoration: 'none' }}>
                                    📞 +91-9099956002
                                </a>
                            </div>
                            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                                Join our growing investor community of over <strong>46,000 followers on X</strong>, where we share insightful research content.
                            </p>
                            <a href="https://x.com/SmartSyncServ?t=a8Z1sKRA5NulDJfgNkeB0A&s=09" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                                Follow us on X
                            </a>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlexiCapAdvisory;
