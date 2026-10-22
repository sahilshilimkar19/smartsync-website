import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { motion } from 'framer-motion';

const ComplaintRedressal = () => {
    usePageTitle('Complaint Redressal & SCORES | SmartSync Services');
    return (
        <div className="page-wrapper pt-32">
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Complaint Redressal & <span className="text-accent">SCORES</span></h1>
                        <p className="hero-subtitle mb-0">
                            Our process for ensuring all your concerns are heard and resolved efficiently.
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <p style={{ marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                                Client queries/complaints may arise due to a lack of understanding or a deficiency of service experienced by clients. Deficiency of service may include lack of explanation, clarifications, understanding which escalates into shortfalls in the expected delivery standards, either due to inadequacy of facilities available or through the attitude of staff towards the client.
                            </p>

                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Step 1: Contact Our Client Servicing Team</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                Clients can seek clarification to their query and are further entitled to make a complaint in writing, orally, or telephonically. An email may be sent to the Client Servicing Team at <a href="mailto:cahimanshu.shah@smartsyncservices.com" className="text-link" style={{ color: 'var(--color-accent-primary)', fontWeight: 500 }}>cahimanshu.shah@smartsyncservices.com</a>. Alternatively, the Investor may call on <a href="tel:+917016659985" className="text-link" style={{ color: 'var(--color-accent-primary)', fontWeight: 500 }}>+91 70166 59985</a>.
                            </p>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                A letter may also be written with their query/complaint and posted at the below-mentioned address:
                            </p>
                            <address style={{ fontStyle: 'normal', backgroundColor: 'var(--color-bg-base)', padding: '1.5rem', borderLeft: '4px solid var(--color-accent-primary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                <strong>SmartSync Services</strong><br />
                                F-106, Shridhar Auram, <br />
                                Beside Shivalay Parisar, Kudasan, <br />
                                Gandhinagar, Gujarat-382421
                            </address>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                                Clients can write to the Investment Adviser directly if the Investor does not receive a response within 10 business days of writing to the Client Servicing Team. The client can expect a reply within 10 business days of approaching the Investment Advisor.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Step 2: SEBI SCORES Portal</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                                In case you are not satisfied with our response, you can lodge your grievance with SEBI at their SCORES portal or you may also write to any of the offices of SEBI.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <a href="http://scores.gov.in" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
                                    Visit SCORES Portal
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.sebi.invapp" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', textDecoration: 'none', color: 'var(--color-text-primary)' }}>
                                    Download SCORES App
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComplaintRedressal;
