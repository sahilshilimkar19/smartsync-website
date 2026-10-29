import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { ExternalLink, LegalSection, MailLink, TelLink } from '../components/LegalPage';

const SECTIONS = [
    { id: 's1', title: 'About this policy' },
    { id: 's2', title: 'Who we are' },
    { id: 's3', title: 'Personal data we collect' },
    { id: 's4', title: 'How we use your data' },
    { id: 's5', title: 'Consent and lawful use' },
    { id: 's6', title: 'Who we share data with' },
    { id: 's7', title: 'Third-party websites' },
    { id: 's8', title: 'Cookies' },
    { id: 's9', title: 'Where data is stored' },
    { id: 's10', title: 'How long we keep data' },
    { id: 's11', title: 'How we protect data' },
    { id: 's12', title: 'Your rights' },
    { id: 's13', title: 'Grievance Officer' },
    { id: 's14', title: 'Children' },
    { id: 's15', title: 'Changes to this policy' },
    { id: 's16', title: 'Contact us' }
];

// Heading props for clause n, taken from SECTIONS so the contents list and headings always match
const clause = (n) => ({ ...SECTIONS[n - 1], number: n });

const OFFICE = 'F-106, Shreedhar Auram, Beside Shivalay Parisar, Kudasan, Gandhinagar, Gujarat – 382421';

const PrivacyPolicy = () => (
    <LegalPage
        pageTitle="Privacy Policy | SmartSync Services"
        title="Privacy"
        accent="Policy"
        lastUpdated="29 October 2026"
        sections={SECTIONS}
    >
        <LegalSection {...clause(1)}>
            <p>This policy explains what personal data we collect, why we collect it, how we use, share, store and protect it, and the rights you have over it. It applies when you visit smartsyncservices.com, contact us, or use our investment advisory services, including Stock SIP Portfolio Advisory and Flexi-Cap Advisory Services.</p>
            <p>We handle personal data in line with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011; the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, as their provisions come into force; and the Securities and Exchange Board of India (Investment Advisers) Regulations, 2013 and related SEBI circulars.</p>
            <p>Our learning platform, MissioN S.M.I.L.E (<ExternalLink href="https://missionsmile.smartsyncservices.com">missionsmile.smartsyncservices.com</ExternalLink>), runs on a third-party platform, Learnyst. It has its own privacy policy, available on that site.</p>
            <p>By using our website or services, you acknowledge that you have read this policy.</p>
        </LegalSection>

        <LegalSection {...clause(2)}>
            <p>Smart Sync Investment Advisory Services is a SEBI Registered Investment Adviser (Registration No. INA000007881) and is the data fiduciary for the personal data described here.</p>
            <address className="legal-contact">
                <span>Office: {OFFICE}</span>
                <span>Email: <MailLink email="akhilesh.p@smartsyncservices.com" /></span>
                <span>Phone: <TelLink number="+91 90999 56002" /></span>
            </address>
        </LegalSection>

        <LegalSection {...clause(3)}>
            <div className="legal-sub">
                <h3>3.1 When you browse our website</h3>
                <ul>
                    <li>Our servers automatically record technical information for security and troubleshooting: your IP address, browser and device type, the pages you request, and the date and time.</li>
                    <li>Our pages load fonts from Google Fonts, so your browser connects to Google's servers, which receive your IP address and browser information.</li>
                    <li>We do not use cookies, analytics tools or advertising trackers on smartsyncservices.com (see clause 8).</li>
                </ul>
            </div>
            <div className="legal-sub">
                <h3>3.2 When you contact us</h3>
                <ul>
                    <li><strong>Contact form:</strong> your name, email address, the type of inquiry and your message.</li>
                    <li><strong>Email, phone and WhatsApp:</strong> the details you choose to share with us. WhatsApp messages are also handled by WhatsApp under its own privacy policy.</li>
                </ul>
            </div>
            <div className="legal-sub">
                <h3>3.3 When you become a client</h3>
                <p>SEBI requires us to collect and keep the following before and while we advise you:</p>
                <ul>
                    <li><strong>Identity and KYC:</strong> name, PAN, date of birth, address, email, mobile number, photograph and identity or address documents, and your KYC records with KYC Registration Agencies (KRAs) and the Central KYC Records Registry (CKYCR).</li>
                    <li><strong>Risk profile and suitability:</strong> age, occupation, income, assets and liabilities, investment experience, financial goals, investment horizon and risk tolerance.</li>
                    <li><strong>Agreement and advice records:</strong> the signed client agreement, the advice we give you with its rationale, and records of our interactions with you, including emails and messages.</li>
                    <li><strong>Portfolio information you share:</strong> holding statements you send us so we can track and rebalance your portfolio.</li>
                    <li><strong>Fee payments:</strong> fees are paid through Razorpay on Razorpay's own pages. We receive the payment confirmation (name, amount, date and transaction reference) and the billing details needed for invoices and GST, but not your card, UPI or net-banking credentials.</li>
                </ul>
                <p>We never ask for the login IDs, passwords or OTPs of your trading, demat or bank accounts, and we do not access or operate your accounts. If anyone claiming to be from SmartSync asks for them, do not share them and report it to us.</p>
            </div>
            <div className="legal-sub">
                <h3>3.4 Sensitive personal data</h3>
                <p>Financial information such as income, bank account and payment details is "sensitive personal data or information" under the 2011 Rules. We collect it only when it is needed for the purposes in clause 4, and with your consent.</p>
            </div>
        </LegalSection>

        <LegalSection {...clause(4)}>
            <ul>
                <li>To reply to your inquiries and tell you about the services you ask about.</li>
                <li>To onboard you as a client: KYC, risk profiling, suitability assessment and the client agreement, as SEBI requires.</li>
                <li>To provide our advisory services: model portfolios and rebalancing instructions, research, reviews and support by email and phone.</li>
                <li>To collect fees, issue invoices and meet tax and accounting requirements.</li>
                <li>To meet our legal and regulatory duties, including record keeping, the annual compliance audit, inspections and reporting to SEBI and its supervisory body, and handling complaints. Our monthly complaint disclosures contain only totals, never personal details.</li>
                <li>To keep our website and systems secure, for example by limiting repeated form submissions and investigating misuse.</li>
                <li>To send you service messages. We send newsletters or promotional messages only with your consent, and every such message lets you opt out.</li>
            </ul>
            <p><strong>Use of technology and AI tools.</strong> Our research team uses software tools, including AI-based tools, to support analysis. Investment advice is always reviewed and given by our qualified team, and we remain solely responsible for the security, confidentiality and integrity of your data whatever tools we use. We do not enter your personal data into public AI tools.</p>
            <p>We do not sell, rent or trade your personal data.</p>
        </LegalSection>

        <LegalSection {...clause(5)}>
            <p>We process your personal data with your consent, which you give when you submit our contact form, contact us, or sign up as a client. We also process personal data without separate consent where the law allows it, for example to comply with SEBI's requirements, a court order or a request from a lawful authority.</p>
            <p>You can withdraw your consent at any time by writing to our Grievance Officer (clause 13), and withdrawing is as easy as giving consent. Withdrawal does not affect processing already done. We may still have to keep certain records for the period SEBI requires (clause 10), and we may not be able to continue providing advisory services without the information SEBI requires us to hold.</p>
        </LegalSection>

        <LegalSection {...clause(6)}>
            <p>We share personal data only as needed for the purposes in clause 4:</p>
            <ul>
                <li><strong>Regulators and authorities:</strong> SEBI, BSE Administration &amp; Supervision Limited (the body that administers and supervises investment advisers), tax authorities, courts, and law-enforcement agencies when the law requires it.</li>
                <li><strong>KYC registries:</strong> KYC Registration Agencies and the Central KYC Records Registry, to register and verify your KYC.</li>
                <li><strong>Service providers who work on our behalf:</strong> email (Zoho), website contact-form delivery (Google Gmail), website hosting (Amazon Web Services) and payments (Razorpay). They may use your data only to provide their service to us.</li>
                <li><strong>Auditors and professional advisers:</strong> the auditor of our annual compliance audit, chartered accountants and legal advisers, under duties of confidentiality.</li>
                <li><strong>Business transfer:</strong> if our business is reorganised, merged or transferred, to the successor, who must protect your data in line with this policy.</li>
            </ul>
        </LegalSection>

        <LegalSection {...clause(7)}>
            <p>Our website links to other services, including Razorpay payment pages, WhatsApp, our social media pages (X, LinkedIn, YouTube, Instagram), SEBI's SCORES portal and our learning platform. Their own privacy policies apply once you leave our website, and we are not responsible for their practices.</p>
        </LegalSection>

        <LegalSection {...clause(8)}>
            <p>smartsyncservices.com does not set cookies or store information in your browser, and does not use analytics or advertising trackers. Third-party pages you visit through our links, such as payment pages, may use their own cookies. If we start using cookies or analytics, we will update this policy and ask for consent where the law requires it.</p>
        </LegalSection>

        <LegalSection {...clause(9)}>
            <p>Our website and contact service are hosted with Amazon Web Services in India (Mumbai region). Some of our service providers, such as our email provider, may store or process data outside India. Any transfer outside India is made only as permitted under Indian law, including any restrictions notified by the Government of India under the Digital Personal Data Protection Act, 2023.</p>
        </LegalSection>

        <LegalSection {...clause(10)}>
            <div className="table-scroll" tabIndex={0} role="region" aria-label="How long we keep data">
                <table className="legal-table">
                    <thead>
                        <tr><th scope="col">Data</th><th scope="col">How long we keep it</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Client records: KYC, risk profile, suitability, agreement, advice with rationale and interaction records</td><td>At least five years, as required by SEBI. If a dispute is raised, until it is resolved.</td></tr>
                        <tr><td>Invoices and payment records</td><td>For the period required by tax and accounting laws.</td></tr>
                        <tr><td>Inquiries from people who do not become clients</td><td>12 months from our last contact, unless you ask us to delete them sooner.</td></tr>
                        <tr><td>Website and server logs</td><td>90 days, or longer if needed to investigate a security incident.</td></tr>
                    </tbody>
                </table>
            </div>
            <p>When a retention period ends, we delete the data or anonymise it so it no longer identifies you.</p>
        </LegalSection>

        <LegalSection {...clause(11)}>
            <p>We use reasonable security practices and procedures to protect personal data against unauthorised access, loss, misuse, alteration and disclosure, including:</p>
            <ul>
                <li>encrypted (HTTPS) connections to our website;</li>
                <li>access to client records limited to staff who need it for their work;</li>
                <li>security protections on our web server, including limits on repeated form submissions.</li>
            </ul>
            <p>No method of transmission or storage is completely secure. If a personal data breach occurs, we will inform affected individuals and the Data Protection Board of India, and CERT-In where required, within the time limits set by law.</p>
        </LegalSection>

        <LegalSection {...clause(12)}>
            <p>Subject to applicable law, you have the right to:</p>
            <ul>
                <li><strong>Access</strong> a summary of the personal data we hold about you, how we process it, and who we have shared it with;</li>
                <li><strong>Correct, complete or update</strong> your personal data;</li>
                <li><strong>Erase</strong> personal data we no longer need, except records we must keep by law (clause 10);</li>
                <li><strong>Withdraw consent</strong> at any time (clause 5);</li>
                <li><strong>Opt out</strong> of promotional messages;</li>
                <li><strong>Nominate</strong> another person to exercise these rights if you die or become unable to do so;</li>
                <li><strong>Raise a grievance</strong> with our Grievance Officer and, if it is not resolved to your satisfaction, complain to the Data Protection Board of India.</li>
            </ul>
            <p>To use any of these rights, write to our Grievance Officer. We may ask you to verify your identity before acting on a request.</p>
        </LegalSection>

        <LegalSection {...clause(13)}>
            <p>For questions, requests or complaints about your personal data, contact:</p>
            <address className="legal-contact">
                <span>Krishna Satija, Principal Officer</span>
                <span>Email: <MailLink email="krishna.satija@smartsyncservices.com" /></span>
                <span>Phone: <TelLink number="+91 75099 74402" /></span>
                <span>Address: {OFFICE}</span>
            </address>
            <p>We will acknowledge your message within two working days and resolve it as quickly as possible, and in any case within 30 days of receiving it.</p>
            <p>Complaints about our investment advisory services, rather than about personal data, follow the process on our <Link to="/complaint-redressal" className="text-link legal-link">Complaint Redressal</Link> page and can also be raised with SEBI through SCORES (<ExternalLink href="https://scores.sebi.gov.in">scores.sebi.gov.in</ExternalLink>).</p>
        </LegalSection>

        <LegalSection {...clause(14)}>
            <p>Our services are meant for adults (18 years or older). We do not knowingly collect personal data from children. If you believe a child has given us personal data, contact our Grievance Officer and we will delete it.</p>
        </LegalSection>

        <LegalSection {...clause(15)}>
            <p>We may update this policy when our practices or the law change. The updated version will be posted on this page with a new "Last updated" date. If we make significant changes, we will tell our clients by email before they take effect.</p>
        </LegalSection>

        <LegalSection {...clause(16)}>
            <p>For any other questions about this policy, write to <MailLink email="akhilesh.p@smartsyncservices.com" /> or call <TelLink number="+91 90999 56002" />.</p>
        </LegalSection>
    </LegalPage>
);

export default PrivacyPolicy;
