import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        title: "IndiaMART InterMesh: New-Age Business | Old-Age Values",
        date: "December 07, 2024",
        excerpt: "What makes IndiaMART a new-age business with old-age values? The answer lies in its unique ability to blend modern scalability with traditional financial prudence...",
        link: "https://smartsyncservices.com/2024/12/07/indiamart-intermesh-new-age-business-old-age-values/"
    },
    {
        title: "Uncertainty",
        date: "November 14, 2024",
        excerpt: "Upset the established order, and everything becomes chaos. The majority of my writing inspirations happen during my travels. So as it happens in most of my business travels...",
        link: "https://smartsyncservices.com/2024/11/14/uncertainty/"
    },
    {
        title: "Accelya Solutions India Ltd: Navigating the Digital Transformation of Airline Fintech",
        date: "October 04, 2024",
        excerpt: "Revolutionizing Airline Operations: From NDC to ONE Order. The airline industry is at a crossroads, teetering between old, clunky legacy systems and a digital future...",
        link: "https://smartsyncservices.com/2024/10/04/accelya-solutions-india-ltd-navigating-the-digital-transformation-of-airline-fintech/"
    },
    {
        title: "SSIAS Coverage of 71 Companies",
        date: "September 28, 2024",
        excerpt: "Arihant Capital Bharat Connect Conference 2024 Unlock Exclusive Insights from the Arihant Bharat Connect 2024 Conference Are you looking for key insights into some of India’s most promising...",
        link: "https://smartsyncservices.com/2024/09/28/ssias-coverage-of-71-companies/"
    },
    {
        title: "Why Free Cash Flow is the Secret Sauce to Business Growth",
        date: "September 23, 2024",
        excerpt: "Free Cash Flow (FCF) is a crucial metric that reveals a company’s financial health beyond just profits and sales. It shows how efficiently a business generates and utilizes cash...",
        link: "https://smartsyncservices.com/2024/09/23/why-free-cash-flow-is-the-secret-sauce-to-business-growth-and-how-you-can-leverage-it/"
    },
    {
        title: "Economic Moats: Never Static, Strengthening or Weakening",
        date: "August 15, 2024",
        excerpt: "Never take economic moats for granted. Moats are never static. They are either strengthening or weakening. Stay longer with the strengthening moats and stay alert on the ones where the moat is weakening.",
        link: "https://smartsyncservices.com/2024/08/15/economic-moats-never-static-strengthening-or-weakening/"
    }
];

const Blog = () => {
    usePageTitle('Blog | SmartSync Services');
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
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>SSIAS <span className="text-accent">Blog</span></h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            Thoughts, analysis, and research from our investment advisory team.
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                style={{ background: 'var(--color-bg-surface)', padding: '2.5rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                            >
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{post.date}</p>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-link">
                                        {post.title}
                                    </a>
                                </h2>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                                    {post.excerpt}
                                </p>
                                <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', borderBottom: '1px solid currentColor', paddingBottom: '0.2rem', textDecoration: 'none' }}>
                                    Read more<span className="sr-only"> about {post.title} (opens in a new tab)</span> <span aria-hidden="true">&rarr;</span>
                                </a>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
