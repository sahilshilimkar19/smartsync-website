import React from 'react';
import LegalPage, { ExternalLink, LegalSection, MailLink, TelLink } from '../components/LegalPage';

const SECTIONS = [
    { id: 's1', title: 'Our Commitment to Investors' },
    { id: 's2', title: 'How to Lodge a Complaint with Smart Sync Services' },
    { id: 's3', title: 'Internal Escalation and Resolution' },
    { id: 's4', title: 'Escalation to SEBI – SCORES' },
    { id: 's5', title: 'Online Dispute Resolution (ODR)' },
    { id: 's6', title: 'Grievance Redressal Contact' },
    { id: 's7', title: 'Investor Awareness and Transparency' }
];

// Heading props for section n, taken from SECTIONS so the contents list and headings always match
const section = (n) => ({ ...SECTIONS[n - 1], number: n });

const OFFICER_EMAIL = 'krishna.satija@smartsyncservices.com';
const OFFICER_PHONE = '+91-7509974402';

const META = (
    <p className="legal-meta">
        <strong>SMART SYNC SERVICES</strong><br />
        SEBI REGISTERED INVESTMENT ADVISER<br />
        SEBI Registration No.: INA000007881
    </p>
);

const ComplaintRedressal = () => (
    <LegalPage
        pageTitle="Complaint Redressal / Grievance Redressal Mechanism | SmartSync Services"
        title="Grievance Redressal"
        accent="Mechanism"
        meta={META}
        sections={SECTIONS}
    >
        <LegalSection {...section(1)}>
            <p>Smart Sync Services is committed to providing fair, transparent and professional investment advisory services to its clients. We endeavour to address investor queries, concerns and grievances promptly, fairly and impartially, in accordance with applicable SEBI regulations and guidelines.</p>
            <p>We have established the following grievance redressal mechanism to facilitate the effective handling and resolution of investor complaints.</p>
        </LegalSection>

        <LegalSection {...section(2)}>
            <p>Investors may submit their queries or grievances through any of the following channels:</p>
            <ul>
                <li><strong>Email:</strong> <MailLink email={OFFICER_EMAIL} /></li>
                <li><strong>Telephone:</strong> <TelLink number={OFFICER_PHONE} /></li>
                <li>
                    <strong>Postal Address:</strong>
                    <address className="legal-contact">
                        <span>Smart Sync Services</span>
                        <span>F-106, Shreedhar Auram, Beside Shivalay Parisar,</span>
                        <span>Kudasan, Gandhinagar, Gujarat – 382421.</span>
                    </address>
                </li>
            </ul>
            <p>Investors are requested to provide relevant details of their grievance and supporting documents, wherever applicable, to facilitate timely examination and resolution.</p>
        </LegalSection>

        <LegalSection {...section(3)}>
            <p>Investors who are dissatisfied with the response received from the Client Servicing Team, or whose grievances remain unresolved, may escalate the matter to the firm's designated Grievance Redressal Officer / Principal Officer through the official contact details provided by Smart Sync Services.</p>
            <p>Smart Sync Services shall endeavour to resolve investor grievances promptly and, in any event, within 21 calendar days from receipt of the grievance, in accordance with applicable SEBI requirements.</p>
            <p>The firm shall maintain appropriate records of complaints received, actions taken and their resolution status.</p>
        </LegalSection>

        <LegalSection {...section(4)}>
            <p>If an investor is not satisfied with the resolution provided by Smart Sync Services, the investor may lodge a complaint through the SEBI Complaint Redress System (SCORES 2.0).</p>
            <p><strong>Official website: <ExternalLink href="https://scores.sebi.gov.in/">https://scores.sebi.gov.in/</ExternalLink></strong></p>
            <p>SCORES facilitates the lodging and tracking of investor grievances against SEBI-registered intermediaries. Investors should first approach the concerned intermediary for redressal of their grievances. The applicable SCORES review mechanism includes review by the designated body and, subsequently, SEBI, in accordance with the prevailing framework.</p>
        </LegalSection>

        <LegalSection {...section(5)}>
            <p>Investors who are not satisfied with the resolution provided by the market participant may also have the option to approach the Securities Market Online Dispute Resolution (SMARTODR) platform for online conciliation or arbitration, subject to the applicable regulatory framework and process.</p>
            <p><strong>Official website: <ExternalLink href="https://smartodr.in/">https://smartodr.in/</ExternalLink></strong></p>
        </LegalSection>

        <LegalSection {...section(6)}>
            <p><strong>For assistance regarding investor grievances, please contact:</strong></p>
            <ul>
                <li>Smart Sync Services<br />SEBI Registration No.: INA000007881</li>
                <li>Designated Grievance Redressal Officer / Principal Officer: Krishna Satija</li>
                <li>Email: <MailLink email={OFFICER_EMAIL} /></li>
                <li>Telephone: <TelLink number={OFFICER_PHONE} /></li>
            </ul>
        </LegalSection>

        <LegalSection {...section(7)}>
            <p>Smart Sync Services shall comply with applicable SEBI requirements concerning grievance redressal, maintenance of complaint records, prescribed disclosure of investor complaint data and the Investor Charter.</p>
            <p>Investors are encouraged to communicate their concerns through the above channels so that the firm may examine and address them appropriately.</p>
        </LegalSection>

        <div className="legal-sub">
            <p><strong>For Smart Sync Services<br />SEBI Registered Investment Adviser<br />Registration No.: INA000007881</strong></p>
            <p>Last Updated: 29/10/2026</p>
        </div>
    </LegalPage>
);

export default ComplaintRedressal;
