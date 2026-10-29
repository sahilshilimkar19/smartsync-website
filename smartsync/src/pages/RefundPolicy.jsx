import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { ExternalLink, MailLink, TelLink } from '../components/LegalPage';

const RefundPolicy = () => (
    <LegalPage
        pageTitle="Refund & Cancellation Policy | SmartSync Services"
        title="Refund & Cancellation"
        accent="Policy"
        lastUpdated="29 October 2026"
    >
        <div className="legal-sub">
            <p>We do not guarantee returns, so fees are not refunded because of investment performance or because you are dissatisfied with the results. Please read the service details, our <Link to="/terms-of-service" className="text-link legal-link">Terms of Service</Link>, <Link to="/privacy-policy" className="text-link legal-link">Privacy Policy</Link>, this policy and your client agreement before paying. If you are unhappy with our service, write to us and we will do our best to resolve it.</p>
            <p>Refunds are made only in these cases:</p>
            <ul>
                <li><strong>Before onboarding:</strong> if you cancel before signing the client agreement, or we cannot take you on as a client, we refund the full amount paid, including GST.</li>
                <li><strong>Early termination:</strong> if you or we end the service early, we refund the fee for the unexpired days, less a breakage fee of one quarter (three months) of the annual fee, as SEBI permits, along with the GST on the refunded amount. If about three months or less remain, no refund is due.</li>
                <li><strong>Duplicate payments:</strong> refunded in full.</li>
            </ul>
            <p><strong>To cancel</strong>, email <MailLink email="akhilesh.p@smartsyncservices.com" /> from your registered email address with your name, service and payment date. We will confirm in writing within 2 working days and start any refund within 7 working days, to your original payment method or a bank account in your name.</p>
            <p>Our services are delivered digitally; nothing is shipped. For complaints, contact our Grievance Redressal Officer, Krishna Satija, at <MailLink email="krishna.satija@smartsyncservices.com" /> or <TelLink number="+91-7509974402" />, or SEBI's SCORES portal (<ExternalLink href="https://scores.sebi.gov.in">scores.sebi.gov.in</ExternalLink>). This policy covers our advisory fees; MissioN S.M.I.L.E courses follow that platform's own terms.</p>
        </div>
    </LegalPage>
);

export default RefundPolicy;
