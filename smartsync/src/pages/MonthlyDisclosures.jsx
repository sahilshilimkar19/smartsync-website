import React from 'react';
import { motion } from 'framer-motion';

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.95rem',
    marginBottom: '0.5rem',
};

const thStyle = {
    border: '1px solid #ccc',
    padding: '0.75rem 1rem',
    textAlign: 'center',
    background: '#f5f5f0',
    fontWeight: 600,
    color: 'var(--color-text-primary)',
};

const tdStyle = {
    border: '1px solid #ccc',
    padding: '0.75rem 1rem',
    textAlign: 'center',
    color: 'var(--color-text-primary)',
};

const tdLeftStyle = {
    ...tdStyle,
    textAlign: 'left',
};

const sectionTitleStyle = {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: 'var(--color-accent-primary)',
    marginBottom: '1rem',
    marginTop: '2.5rem',
};

const noteStyle = {
    fontSize: '0.85rem',
    color: 'var(--color-text-secondary)',
    marginTop: '0.5rem',
    fontStyle: 'italic',
};

const MonthlyDisclosures = () => {
    return (
        <main className="page-wrapper pt-32">
            <section className="section">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                            Monthly <span className="text-accent">Disclosures</span>
                        </h1>
                        <p className="hero-subtitle mb-0">
                            Regulatory disclosures of investor complaints.
                        </p>
                    </motion.div>

                    <div style={{ marginTop: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{ background: 'var(--color-bg-surface)', padding: '3rem', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                                Monthly Disclosures of Investor Complaints
                            </h2>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '0.25rem' }}>
                                Annexure B – Formats for investors complaints data to be disclosed monthly by IAs on their website/mobile application
                            </p>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                                Data for the month ending September 2026
                            </p>

                            {/* Table 1 — Current Month */}
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tableStyle}>
                                    <thead>
                                        <tr>
                                            <th style={thStyle}>Sr No.</th>
                                            <th style={thStyle}>Received From</th>
                                            <th style={thStyle}>Pending at the end of last month</th>
                                            <th style={thStyle}>Received</th>
                                            <th style={thStyle}>Resolved*</th>
                                            <th style={thStyle}>Total Pending#</th>
                                            <th style={thStyle}>Pending Complaints for more than 3 months</th>
                                            <th style={thStyle}>Average Resolution time^(in days)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={tdStyle}>1</td>
                                            <td style={tdLeftStyle}>Directly from Investors</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>NA</td>
                                        </tr>
                                        <tr>
                                            <td style={tdStyle}>2</td>
                                            <td style={tdLeftStyle}>SEBI (SCORES)</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>NA</td>
                                        </tr>
                                        <tr>
                                            <td style={tdStyle}>3</td>
                                            <td style={tdLeftStyle}>Other Sources (If Any)</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>NA</td>
                                        </tr>
                                        <tr>
                                            <td style={{ ...tdStyle, fontWeight: 700 }} colSpan={1}></td>
                                            <td style={{ ...tdLeftStyle, fontWeight: 700 }}>Grand Total</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>NA</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p style={noteStyle}>^ Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by the total number of complaints resolved in the current month.</p>

                            {/* Table 2 — Monthly Trend */}
                            <p style={sectionTitleStyle}>The trend of monthly disposal of complaints</p>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tableStyle}>
                                    <thead>
                                        <tr>
                                            <th style={thStyle}>Sr No.</th>
                                            <th style={thStyle}>Month</th>
                                            <th style={thStyle}>Carried forward from previous Month</th>
                                            <th style={thStyle}>Received</th>
                                            <th style={thStyle}>Resolved*</th>
                                            <th style={thStyle}>Pending#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['1', 'June 2025'],
                                            ['2', 'July 2025'],
                                            ['3', 'August 2025'],
                                            ['4', 'September 2025'],
                                            ['5', 'October 2025'],
                                            ['6', 'November 2025'],
                                            ['7', 'December 2025'],
                                            ['8', 'January 2026'],
                                            ['9', 'February 2026'],
                                            ['10', 'March 2026'],
                                            ['11', 'April 2026'],
                                            ['12', 'May 2026'],
                                            ['13', 'June 2026'],
                                            ['14', 'July 2026'],
                                            ['15', 'August 2026'],
                                            ['16', 'September 2026'],
                                        ].map(([sr, month]) => (
                                            <tr key={sr}>
                                                <td style={tdStyle}>{sr}</td>
                                                <td style={tdLeftStyle}>{month}</td>
                                                <td style={tdStyle}>0</td>
                                                <td style={tdStyle}>0</td>
                                                <td style={tdStyle}>0</td>
                                                <td style={tdStyle}>0</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}></td>
                                            <td style={{ ...tdLeftStyle, fontWeight: 700 }}>Grand Total</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p style={noteStyle}>* Inclusive of complaints of previous months resolved in the current month.</p>
                            <p style={noteStyle}># Inclusive of complaints pending as on the last day of the month.</p>

                            {/* Table 3 — Annual Trend */}
                            <p style={sectionTitleStyle}>The trend of annual disposal of complaints</p>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tableStyle}>
                                    <thead>
                                        <tr>
                                            <th style={thStyle}>Sr. No</th>
                                            <th style={thStyle}>Year</th>
                                            <th style={thStyle}>Carried forward from previous year</th>
                                            <th style={thStyle}>Received</th>
                                            <th style={thStyle}>Resolved*</th>
                                            <th style={thStyle}>Pending#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={tdStyle}>1</td>
                                            <td style={tdLeftStyle}>2025-26</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                        </tr>
                                        <tr>
                                            <td style={tdStyle}>2</td>
                                            <td style={tdLeftStyle}>2026-27</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                            <td style={tdStyle}>0</td>
                                        </tr>
                                        <tr>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}></td>
                                            <td style={{ ...tdLeftStyle, fontWeight: 700 }}>Grand Total</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                            <td style={{ ...tdStyle, fontWeight: 700 }}>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p style={noteStyle}>* Inclusive of complaints of previous years resolved in the current year.</p>
                            <p style={noteStyle}># Inclusive of complaints pending as on the last day of the year.</p>

                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MonthlyDisclosures;
