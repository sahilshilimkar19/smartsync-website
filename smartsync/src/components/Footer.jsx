import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Instagram, Youtube, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand">
                        <Link to="/" className="footer-logo-link" aria-label="Smart Sync Services home">
                            <img
                                src="/favicon.png"
                                alt=""
                                className="footer-logo-img"
                                style={{ height: '120px', width: 'auto', marginBottom: '1rem', display: 'block', imageRendering: 'crisp-edges' }}
                            />
                        </Link>
                        <p className="footer-slogan">Always in Sync with Your Investment Needs.</p>
                        <div className="social-links">
                            <a href="https://x.com/SmartSyncServ" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="SmartSync Services on X (opens in a new tab)"><Twitter size={20} /></a>
                            <a href="https://www.linkedin.com/company/smart-sync-services/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="SmartSync Services on LinkedIn (opens in a new tab)"><Linkedin size={20} /></a>
                            <a href="https://youtube.com/@smartsyncservices7803?si=lfrhpEBN2e0uxzvy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="SmartSync Services on YouTube (opens in a new tab)"><Youtube size={20} /></a>
                            <a href="https://www.instagram.com/smartsyncserv?igsh=MTR1bjIyeDl3Y3Z0eA==" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="SmartSync Services on Instagram (opens in a new tab)"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h2 className="footer-title">Advisory Services</h2>
                        <Link to="/model-portfolio" className="footer-link">Model Portfolio</Link>
                        <Link to="/flexi-cap-advisory-services" className="footer-link">Flexi-Cap Advisory Services</Link>
                        <a href="https://missionsmile.smartsyncservices.com/learn" className="footer-link" target="_blank" rel="noopener noreferrer">MissioN S.M.I.L.E</a>
                        <Link to="/blog" className="footer-link">Blog</Link>
                    </div>

                    <div className="footer-links-group">
                        <h2 className="footer-title">Company</h2>
                        <Link to="/about-us" className="footer-link">About Us</Link>
                        <Link to="/our-team" className="footer-link">Our Team</Link>
                        <Link to="/client-testimonials" className="footer-link">Client Testimonials</Link>
                        <Link to="/contact-us" className="footer-link">Contact Us</Link>
                    </div>

                    <div className="footer-links-group">
                        <h2 className="footer-title">SEBI Compliance</h2>
                        <Link to="/investor-charter" className="footer-link">Investor Charter</Link>
                        <Link to="/monthly-disclosures" className="footer-link">Monthly Disclosures</Link>
                        <Link to="/complaint-redressal" className="footer-link">Complaint Redressal & SCORES</Link>
                        <a href="mailto:akhilesh.p@smartsyncservices.com" className="footer-link highlight">akhilesh.p@smartsyncservices.com</a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SmartSync Services. SEBI Registered Investment Advisory firm (INA000007881).</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
