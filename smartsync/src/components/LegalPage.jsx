import React from 'react';
// Capitalised alias: ESLint here has no React plugin, so a lower-case name used only in JSX reads as unused
import { motion as Motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';
import './LegalPage.css';

// Shared layout for the Privacy Policy, Terms of Service and Refund Policy pages
const LegalPage = ({ pageTitle, title, accent, lastUpdated, sections, children }) => {
    usePageTitle(pageTitle);
    return (
        <div className="page-wrapper pt-32">
            <section className="section">
                <div className="container legal-page">
                    <Motion.header
                        className="legal-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title legal-title">{title} <span className="text-accent">{accent}</span></h1>
                        <p className="legal-meta">
                            <strong>Smart Sync Investment Advisory Services</strong> (“SmartSync Services”, “we”, “us”, “our”), a partnership firm, SEBI Registered Investment Adviser, Registration No. INA000007881.
                        </p>
                        <p className="legal-meta">Last updated: {lastUpdated}</p>
                    </Motion.header>

                    {sections && (
                        <nav className="legal-toc" aria-label="On this page">
                            <ol>
                                {sections.map((section) => (
                                    <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
                                ))}
                            </ol>
                        </nav>
                    )}

                    <div className="legal-body">{children}</div>
                </div>
            </section>
        </div>
    );
};

export const LegalSection = ({ id, number, title, children }) => (
    <section id={id} className="legal-section">
        <h2>{number}. {title}</h2>
        {children}
    </section>
);

export const MailLink = ({ email }) => (
    <a href={`mailto:${email}`} className="text-link legal-link">{email}</a>
);

// Shows the number as written (e.g. +91 90999 56002) and dials it without spaces
export const TelLink = ({ number }) => (
    <a href={`tel:${number.replace(/\s+/g, '')}`} className="text-link legal-link">{number}</a>
);

export const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-link legal-link">
        {children}<span className="sr-only"> (opens in a new tab)</span>
    </a>
);

export default LegalPage;
