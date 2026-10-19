import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { motion } from 'framer-motion';
import '../components/Hero.css'; // Reusing some base styles

const AboutUs = () => {
    usePageTitle('About Us | SmartSync Services');
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
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>We are <span className="text-accent">SmartSync</span></h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            Invest boldly. Grow fearlessly. With Smart Sync Investment Advisory Services.
                        </p>
                    </motion.div>

                    <div className="about-grid responsive-grid-2-col">
                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Who We Are</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Welcome to Smart Sync Investment Advisory Services, your trusted partner in the world of investments. As a SEBI Registered investment advisory firm, we are dedicated to empowering investors like you to navigate the complexities of financial markets with confidence and clarity.
                            </p>
                            <p>
                                At Smart Sync Investment Advisory Services (SSIAS), we’re proud to boast a team of young, passionate professionals who bring a fresh perspective and boundless enthusiasm to the world of investing. With a blend of youthful energy and seasoned expertise, we’re poised to redefine the way you approach investing.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Our Approach</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Driven by a relentless pursuit of understanding businesses through the prism of first principles, our team is dedicated to conducting in-depth research to uncover opportunities that maximize your investment potential. We thrive on the thrill of discovery, constantly exploring emerging trends and market dynamics to keep you ahead of the curve.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                At Smart Sync Investment Advisory Services, we understand that trust is earned through transparency and integrity. That’s why we prioritize open communication and ethical practices in everything we do. We’re not just your advisors – we are your partners in growth.
                            </p>
                            <p style={{ fontWeight: 600, color: 'var(--color-accent-primary)' }}>
                                We commit to building lasting relationships based on mutual respect and shared success.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
