import React, { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { motion } from 'framer-motion';
import './ContactUs.css';

const ContactUs = () => {
    usePageTitle('Contact Us | SmartSync Services');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiryType: 'General Inquiry',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ success: null, message: '' });

        try {
            // Same-origin by default: Nginx proxies /api/ to the backend in production, Vite proxies it in local dev.
            // VITE_API_URL is only an optional override.
            const apiUrl = import.meta.env.VITE_API_URL || '/api/contact';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ success: true, message: data.message || 'Your inquiry has been sent successfully!' });
                setFormData({ name: '', email: '', inquiryType: 'General Inquiry', message: '' });
            } else {
                setSubmitStatus({ success: false, message: data.message || 'Failed to send inquiry.' });
            }
        } catch {
            setSubmitStatus({ success: false, message: 'Network error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>Contact <span className="text-accent">Us</span></h1>
                        <p className="hero-subtitle mb-0" style={{ maxWidth: '800px' }}>
                            We are ready to synchronize with your financial goals. Let's talk.
                        </p>
                    </motion.div>

                    <div className="about-grid responsive-grid-2-col">
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(26, 26, 26, 0.1)' }}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>Get In Touch</h2>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</strong>
                                <a href="mailto:akhilesh.p@smartsyncservices.com" style={{ fontSize: '1.1rem', color: 'var(--color-accent-primary)', fontWeight: 500 }}>akhilesh.p@smartsyncservices.com</a>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</strong>
                                <a href="tel:+919099956002" style={{ fontSize: '1.1rem', color: 'var(--color-accent-primary)', fontWeight: 500 }}><span className="sr-only">Phone: </span>+91 90999 56002</a>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WhatsApp</strong>
                                <a href="https://wa.me/919099956002" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'var(--color-accent-primary)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true" focusable="false">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    <span className="sr-only">WhatsApp: </span>+91 90999 56002<span className="sr-only"> (opens in a new tab)</span>
                                </a>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Office Address</strong>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                                    SmartSync Services<br />
                                    F-106, Shreedhar Auram,<br />
                                    Beside Shivalay Parisar, Kudasan,<br />
                                    Gandhinagar, Gujarat – 382421
                                </p>
                            </div>
                        </motion.div>

                        <motion.form
                            className="contact-form"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                            onSubmit={handleSubmit}
                        >
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 600 }}>Send a Message</h2>
                            <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>Fill out the form below and our advisory team will respond promptly.</p>
                            <p className="contact-required-note">All fields are required.</p>

                            {/* Always mounted so screen readers announce the message when it appears */}
                            <div role="status" className="contact-status-region">
                                {submitStatus.success !== null && (
                                    <p className={`contact-status ${submitStatus.success ? 'is-success' : 'is-error'}`}>
                                        {submitStatus.message}
                                    </p>
                                )}
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-name" className="contact-label">Full name</label>
                                <input
                                    id="contact-name"
                                    className="contact-control"
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label htmlFor="contact-email" className="contact-label">Email address</label>
                                <input
                                    id="contact-email"
                                    className="contact-control"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label htmlFor="contact-inquiry-type" className="contact-label">Inquiry type</label>
                                <select
                                    id="contact-inquiry-type"
                                    className="contact-control"
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleInputChange}
                                >
                                    <option>Inquiring about Model Portfolio</option>
                                    <option>Inquiring about Stock Advisory</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div className="contact-field">
                                <label htmlFor="contact-message" className="contact-label">Message</label>
                                <textarea
                                    id="contact-message"
                                    className="contact-control"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn-primary"
                                style={{ alignSelf: 'flex-start', border: 'none', opacity: isSubmitting ? 0.7 : 1 }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                            </button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
