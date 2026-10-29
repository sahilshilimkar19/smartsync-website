import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { ExternalLink, LegalSection, MailLink, TelLink } from '../components/LegalPage';

const SECTIONS = [
    { id: 's1', title: 'About these terms' },
    { id: 's2', title: 'Who we are' },
    { id: 's3', title: 'Who can use our services' },
    { id: 's4', title: 'Website content is not advice' },
    { id: 's5', title: 'Risk and no guaranteed returns' },
    { id: 's6', title: 'Fees and payments' },
    { id: 's7', title: 'Your responsibilities' },
    { id: 's8', title: 'Intellectual property' },
    { id: 's9', title: 'Acceptable use' },
    { id: 's10', title: 'Third-party websites' },
    { id: 's11', title: 'Limitation of liability' },
    { id: 's12', title: 'Privacy' },
    { id: 's13', title: 'Complaints and disputes' },
    { id: 's14', title: 'Changes to these terms' },
    { id: 's15', title: 'General' },
    { id: 's16', title: 'Contact us' }
];

// Heading props for clause n, taken from SECTIONS so the contents list and headings always match
const clause = (n) => ({ ...SECTIONS[n - 1], number: n });

const OFFICER_EMAIL = 'krishna.satija@smartsyncservices.com';
const OFFICER_PHONE = '+91 75099 74402';

const TermsOfService = () => (
    <LegalPage
        pageTitle="Terms of Service | SmartSync Services"
        title="Terms of"
        accent="Service"
        lastUpdated="22 October 2026"
        sections={SECTIONS}
    >
        <LegalSection {...clause(1)}>
            <p>These Terms of Service ("Terms") govern your use of smartsyncservices.com (the "website"), operated by Smart Sync Investment Advisory Services. By using the website, you agree to these Terms. If you do not agree, please do not use the website.</p>
            <p>We provide investment advice only to clients who have signed a client agreement with us, as SEBI requires. If anything in these Terms conflicts with your client agreement or with SEBI's regulations, your client agreement and SEBI's regulations prevail.</p>
            <p>Read these Terms together with our <Link to="/privacy-policy" className="text-link legal-link">Privacy Policy</Link> and our <Link to="/refund-policy" className="text-link legal-link">Refund &amp; Cancellation Policy</Link>.</p>
        </LegalSection>

        <LegalSection {...clause(2)}>
            <p>Smart Sync Investment Advisory Services, a partnership firm, is registered with the Securities and Exchange Board of India (SEBI) as an Investment Adviser under the SEBI (Investment Advisers) Regulations, 2013, Registration No. INA000007881, and is a member of BSE Administration &amp; Supervision Limited (BASL), Membership No. 1260.</p>
            <address className="legal-contact">
                <span>Office: F-106, Shreedhar Auram, Beside Shivalay Parisar, Kudasan, Gandhinagar, Gujarat – 382421</span>
                <span>Principal Officer: Krishna Satija, <MailLink email={OFFICER_EMAIL} />, <TelLink number={OFFICER_PHONE} /></span>
                <span>Compliance Officer: Krishna Satija, <MailLink email={OFFICER_EMAIL} />, <TelLink number={OFFICER_PHONE} /></span>
            </address>
        </LegalSection>

        <LegalSection {...clause(3)}>
            <ul>
                <li>You must be at least 18 years old and legally able to enter into a contract under Indian law.</li>
                <li>Our advisory services are available to residents of India and non-resident Indians, subject to applicable law.</li>
                <li>To become a client, you must complete KYC and a risk-profiling assessment, and sign a client agreement.</li>
            </ul>
        </LegalSection>

        <LegalSection {...clause(4)}>
            <ul>
                <li>Content on the website, on our blog and social media, and in sample research reports is general information and education. It is not personalised investment advice, a recommendation to buy or sell any security, or an offer of any kind.</li>
                <li>We give investment advice only to clients, after completing KYC, assessing their risk profile and the suitability of our advice, and signing a client agreement.</li>
                <li>Stocks or model portfolios mentioned publicly are examples and may not be suitable for you. Do not act on them without considering your own circumstances.</li>
                <li>We do not offer free trials of our advisory services, as SEBI does not permit investment advisers to.</li>
            </ul>
        </LegalSection>

        <LegalSection {...clause(5)}>
            <ul>
                <li>Investments in securities market are subject to market risks. Read all the related documents carefully before investing.</li>
                <li>We do not promise or guarantee any return, and we never offer assured, fixed or indicative returns. If anyone claiming to represent us promises guaranteed returns, report it to us.</li>
                <li>Past performance, including examples of past recommendations, does not indicate future results.</li>
                <li>Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</li>
            </ul>
        </LegalSection>

        <LegalSection {...clause(6)}>
            <ul>
                <li>Fees for each service are shown on that service's page and confirmed in your client agreement. GST is charged in addition.</li>
                <li>Our fees stay within the limits SEBI sets. Fees are collected in advance only with your consent, and for no more than one year.</li>
                <li>Pay fees only through banking channels: our Razorpay payment pages or a transfer to SmartSync's own bank account. Never pay in cash or into anyone's personal account.</li>
                <li>Cancellations and refunds follow our <Link to="/refund-policy" className="text-link legal-link">Refund &amp; Cancellation Policy</Link> and your client agreement.</li>
            </ul>
        </LegalSection>

        <LegalSection {...clause(7)}>
            <ul>
                <li>Give us accurate and complete information, and tell us when it changes, because our advice depends on it.</li>
                <li>You decide whether to act on our advice, and you place your own trades through your broker. We do not hold your money or securities and do not trade on your behalf.</li>
                <li>Never share the login details, passwords or OTPs of your trading, demat or bank accounts with anyone, including us. We will never ask for them.</li>
                <li>Our advice and research are for your personal use only. Do not share, publish or resell them.</li>
            </ul>
        </LegalSection>

        <LegalSection {...clause(8)}>
            <p>The website's content, including text, research, model portfolios, videos, graphics, and the SmartSync name and logo, belongs to SmartSync Services or its licensors. You may view and print it for your personal, non-commercial use. You may not copy, republish, distribute or commercially use it, or feed it into automated systems, without our written permission.</p>
        </LegalSection>

        <LegalSection {...clause(9)}>
            <p>When using the website, you must not:</p>
            <ul>
                <li>break any law or use the website for a fraudulent purpose;</li>
                <li>try to gain unauthorised access to the website, its servers or its data, or interfere with its security or operation;</li>
                <li>send spam or malicious code, or use bots or scrapers to collect content;</li>
                <li>impersonate SmartSync Services or its staff, or submit false information through our forms.</li>
            </ul>
            <p>Our official phone numbers and email addresses are the ones shown on this website. If someone claiming to be from SmartSync contacts you from any other number or address, do not share information or make payments, and report it to us.</p>
        </LegalSection>

        <LegalSection {...clause(10)}>
            <p>The website links to services run by others, including Razorpay payment pages, WhatsApp, our social media pages, SEBI's SCORES portal and our learning platform, MissioN S.M.I.L.E. Their own terms and privacy policies apply, and we are not responsible for their content or availability.</p>
        </LegalSection>

        <LegalSection {...clause(11)}>
            <ul>
                <li>The website is provided "as is". We work to keep its information accurate and up to date, but we do not guarantee that it is complete, current or free of errors, or that the website will always be available.</li>
                <li>To the extent permitted by law, we are not liable for any loss arising from your use of the website, from relying on its general content, or from investment decisions you make without a client agreement with us.</li>
                <li>Nothing in these Terms limits our obligations to clients under the SEBI (Investment Advisers) Regulations, 2013 or your client agreement, or any liability that cannot be limited under applicable law.</li>
            </ul>
        </LegalSection>

        <LegalSection {...clause(12)}>
            <p>Our <Link to="/privacy-policy" className="text-link legal-link">Privacy Policy</Link> explains how we collect, use and protect your personal data.</p>
        </LegalSection>

        <LegalSection {...clause(13)}>
            <ul>
                <li>If you have a complaint about our services, contact us as described on our <Link to="/complaint-redressal" className="text-link legal-link">Complaint Redressal</Link> page.</li>
                <li>If you are not satisfied with our response, you can lodge a complaint with SEBI through SCORES (<ExternalLink href="https://scores.sebi.gov.in">scores.sebi.gov.in</ExternalLink>) and, where applicable, use SEBI's online dispute resolution platform, SMART ODR (<ExternalLink href="https://smartodr.in">smartodr.in</ExternalLink>).</li>
                <li>These Terms are governed by the laws of India. Subject to the above, the courts at Gandhinagar, Gujarat have exclusive jurisdiction.</li>
            </ul>
        </LegalSection>

        <LegalSection {...clause(14)}>
            <p>We may update these Terms from time to time. The updated version will be posted on this page with a new "Last updated" date. Continuing to use the website after a change means you accept the updated Terms. Changes do not alter a signed client agreement unless both parties agree, and we will tell clients about any change that affects them.</p>
        </LegalSection>

        <LegalSection {...clause(15)}>
            <p>If any part of these Terms is found to be unenforceable, the rest remains in effect. If we do not enforce a right under these Terms, we have not waived it.</p>
        </LegalSection>

        <LegalSection {...clause(16)}>
            <p>For questions about these Terms, write to <MailLink email="akhilesh.p@smartsyncservices.com" /> or call <TelLink number="+91 90999 56002" />.</p>
        </LegalSection>
    </LegalPage>
);

export default TermsOfService;
