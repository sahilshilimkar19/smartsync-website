import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section" id="home">
            <div className="hero-bg-animated"></div>
            <div className="container">

                <div className="hero-content">
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        SEBI Registered Investment Advisory (INA000007881)
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        We are <span className="text-accent">Always in Sync</span><br />
                        with Your Investment Needs.
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        SmartSync Services is a premier advisory firm built on continuous learning, transparency, and deep fundamental analysis. Let us meticulously guide your wealth journey.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <a href="#services" className="btn-primary hero-btn">
                            Explore Our Services
                        </a>
                        <Link to="/about-us" className="btn-secondary hero-btn">
                            About SmartSync
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="stat-card">
                        <span className="stat-label">Advised Assets</span>
                        <span className="stat-val">₹72+ Cr</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Clients Served</span>
                        <span className="stat-val">500+</span>
                    </div>
                    <div className="stat-card manifesto">
                        <p className="manifesto-text">Don't predict. Prepare.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
