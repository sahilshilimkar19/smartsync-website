import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { motion } from 'framer-motion';

const InvestorCharter = () => {
    usePageTitle('Investor Charter | SmartSync Services');
    return (
        <div className="page-wrapper pt-32">
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Investor <span className="text-accent">Charter</span></h1>
                        <p className="hero-subtitle mb-0">
                            Our commitment to transparency, ethical practices, and your financial protection.
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600, borderBottom: '1px solid rgba(26,26,26,0.1)', paddingBottom: '0.5rem' }}>A. Vision and Mission</h2>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Vision</strong>
                                <p style={{ color: 'var(--color-text-secondary)' }}>Return of Capital is more important than Return on Capital. Always think about risk-adjusted returns.</p>
                            </div>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Mission</strong>
                                <p style={{ color: 'var(--color-text-secondary)' }}>Know your risks and chart out your financial plan. Invest in financial products only based on your financial plan.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600, borderBottom: '1px solid rgba(26,26,26,0.1)', paddingBottom: '0.5rem' }}>B. Details of Business Transacted</h2>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li>To enter into an agreement with the client providing all details including fee details, aspect of Conflict-of-interest disclosure, and maintaining the confidentiality of information.</li>
                                <li>To do a proper and unbiased risk – profiling and suitability assessment of the client.</li>
                                <li>To obtain registration with Know Your Client Registration Agency (KRA) and Central Know Your Customer Registry (CKYC).</li>
                                <li>To conduct an audit annually.</li>
                                <li>To disclose the status of complaints on its website.</li>
                                <li>To disclose the name, proprietor name, type of registration, registration number, validity, complete address with telephone numbers, and associated SEBI regional/local Office details in its website.</li>
                                <li>To employ only qualified and certified employees.</li>
                                <li>To deal with clients only from an official number.</li>
                                <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to advice has taken place.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600, borderBottom: '1px solid rgba(26,26,26,0.1)', paddingBottom: '0.5rem' }}>C. Details of Services Provided</h2>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Onboarding of Clients</h3>
                            <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                                <li>Sharing of agreement copy</li>
                                <li>Completing KYC of clients</li>
                            </ul>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Disclosure to Clients</h3>
                            <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                                <li>To provide full disclosure about its business, affiliations, compensation in the agreement.</li>
                                <li>To not access client's accounts or holdings for offering advice.</li>
                                <li>To disclose the risk profile to the client.</li>
                                <li>To provide investment advice to the client based on the risk-profiling of the clients and suitability of the client.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600, borderBottom: '1px solid rgba(26,26,26,0.1)', paddingBottom: '0.5rem' }}>E. Expectations from the Investors</h2>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-text-primary)' }}>Do's</h3>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                                        <li>Always deal with SEBI registered Investment Advisers.</li>
                                        <li>Ensure that the Investment Adviser has a valid registration certificate.</li>
                                        <li>Pay only advisory fees to your Investment Adviser strictly through banking channels.</li>
                                        <li>Always ask for your risk profiling before accepting investment advice.</li>
                                        <li>Ask all relevant questions and clear your doubts before acting on advice.</li>
                                        <li>Assess the risk-return profile, liquidity, and safety aspects before investing.</li>
                                        <li>Insist on getting terms & conditions in writing.</li>
                                        <li>Be vigilant in your transactions.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-text-primary)' }}>Don'ts</h3>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                                        <li>Don't fall for stock tips offered under the pretext of investment advice.</li>
                                        <li>Do not provide funds for investment to the Investment Adviser directly.</li>
                                        <li>Don't fall for the promise of indicative, exorbitant, or assured returns.</li>
                                        <li>Don't fall prey to luring advertisements or market rumors.</li>
                                        <li>Avoid transactions purely based on phone calls or messages.</li>
                                        <li>Do not share login credentials/passwords of your Demat accounts with the Advisor.</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InvestorCharter;
