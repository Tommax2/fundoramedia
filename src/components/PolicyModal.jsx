import React, { useEffect } from "react";

const POLICIES = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "May 2026",
    content: [
      {
        heading: "1. Introduction",
        body: "Fundora Creative Media ('we', 'our', or 'us') is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit fundoramedia.com or engage our services."
      },
      {
        heading: "2. Information We Collect",
        body: "We collect information you provide directly to us, including: your name and email address when you fill out our consultation form or newsletter signup; payment details processed securely through Paystack or Flutterwave (we do not store card details); and any project-related information you share with us via email or our website."
      },
      {
        heading: "3. How We Use Your Information",
        body: "We use the information we collect to: respond to your consultation requests and deliver our services; process payments for our packages; send project updates and communications; improve our website and services; and send occasional updates about new offerings (you may opt out at any time)."
      },
      {
        heading: "4. Sharing Your Information",
        body: "We do not sell or rent your personal information to third parties. We may share your data with trusted service providers (such as payment processors Paystack and Flutterwave) solely to deliver our services. These partners are obligated to keep your information confidential."
      },
      {
        heading: "5. Data Security",
        body: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All payment transactions are encrypted and processed through secure, PCI-compliant payment gateways."
      },
      {
        heading: "6. Cookies",
        body: "Our website may use basic cookies to improve your browsing experience. We do not use cookies to track you across third-party websites or for advertising purposes."
      },
      {
        heading: "7. Your Rights",
        body: "You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at hello@fundoramedia.com and we will respond within 7 business days."
      },
      {
        heading: "8. Changes to This Policy",
        body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date."
      },
      {
        heading: "9. Contact Us",
        body: "If you have any questions about this Privacy Policy, please contact us at hello@fundoramedia.com."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "May 2026",
    content: [
      {
        heading: "1. Acceptance of Terms",
        body: "By accessing fundoramedia.com or purchasing any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
      },
      {
        heading: "2. Services",
        body: "Fundora Creative Media provides crowdfunding campaign management, book promotion, marketing consulting, and related creative services. The specific scope of work for each engagement is agreed upon in writing before any payment is processed."
      },
      {
        heading: "3. Payment",
        body: "All service fees are clearly stated on our website. Payment is required to initiate any project. We accept payments via Paystack and Flutterwave. By making a payment, you confirm that you are authorised to use the payment method provided. All prices are subject to change; however, any quoted price at the time of your order will be honoured."
      },
      {
        heading: "4. Project Delivery",
        body: "Delivery timelines are agreed upon at the start of each project. Delays caused by the client providing incomplete information or failing to respond to communications in a timely manner may extend the agreed timeline. We will communicate any changes to delivery schedules as soon as possible."
      },
      {
        heading: "5. Client Responsibilities",
        body: "You agree to provide accurate and complete information required for service delivery, respond to communication within a reasonable timeframe, and ensure that any content or materials you provide do not infringe on third-party rights."
      },
      {
        heading: "6. Intellectual Property",
        body: "Upon full payment, all deliverables created specifically for your project become your property. We retain the right to display completed work in our portfolio unless you request otherwise in writing."
      },
      {
        heading: "7. Limitation of Liability",
        body: "Fundora Creative Media is not liable for campaign funding outcomes, book sales figures, or any indirect or consequential losses. Our liability is limited to the total amount paid for the specific service in question."
      },
      {
        heading: "8. Governing Law",
        body: "These Terms of Service are governed by the laws of the Federal Republic of Nigeria. Any disputes will be resolved through good-faith negotiation, and if unresolved, through the appropriate Nigerian courts."
      },
      {
        heading: "9. Changes to Terms",
        body: "We reserve the right to update these terms at any time. Continued use of our services after changes constitutes your acceptance of the revised terms."
      },
      {
        heading: "10. Contact",
        body: "For any questions regarding these Terms of Service, contact us at hello@fundoramedia.com."
      }
    ]
  },
  delivery: {
    title: "Service Delivery Policy",
    lastUpdated: "May 2026",
    content: [
      {
        heading: "1. Overview",
        body: "This Service Delivery Policy outlines how Fundora Creative Media delivers its marketing services, the timelines you can expect, and our communication standards. By engaging our services, you agree to the process described below."
      },
      {
        heading: "2. Onboarding Process",
        body: "After payment is confirmed, we will contact you within 1–2 business days to schedule an onboarding call. During this session, we gather all necessary information about your campaign or book project, set project goals, establish timelines, and assign a dedicated account manager to your project."
      },
      {
        heading: "3. Service Timelines",
        body: "Estimated delivery timelines by package: Basic Package (consultation, research, and roadmap) — delivered within 5–7 business days of onboarding. Standard Package (campaign creation, branding, and page setup) — delivered within 10–14 business days. Premium Package (full marketing execution) — ongoing, with an initial setup phase of 7–10 business days, followed by active campaign management throughout the agreed period."
      },
      {
        heading: "4. Deliverables",
        body: "All deliverables are shared digitally via email or a shared Google Drive folder. You will receive a project summary at the close of each phase. For ongoing packages, you will receive weekly performance reports and monthly strategy reviews."
      },
      {
        heading: "5. Communication Standards",
        body: "We are available Monday through Friday, 9 AM – 6 PM WAT (West Africa Time). We respond to all client emails and messages within 24 business hours. Your account manager will be your primary point of contact throughout the project. Urgent issues are escalated and typically resolved within 4 business hours."
      },
      {
        heading: "6. Client Responsibilities",
        body: "To ensure timely delivery, clients must provide all required materials (brand assets, campaign details, author bio, manuscript summary, etc.) within 3 business days of the onboarding call. Delays in providing information may extend the delivery timeline proportionally."
      },
      {
        heading: "7. Revisions",
        body: "Each package includes a reasonable number of revisions: Basic — up to 2 revision rounds on deliverables; Standard — up to 3 revision rounds; Premium — revisions are handled on an ongoing basis as part of active campaign management. Revision requests must be submitted in writing via email."
      },
      {
        heading: "8. Project Completion",
        body: "A project is considered complete when all deliverables have been provided and client sign-off has been received. For Basic and Standard packages, clients have 5 business days to review deliverables and request revisions. After sign-off, the project is closed."
      },
      {
        heading: "9. Contact",
        body: "For questions about service delivery, reach us at hello@fundoramedia.com or call +234 800 000 0000."
      }
    ]
  },
  refund: {
    title: "Refund Policy",
    lastUpdated: "May 2026",
    content: [
      {
        heading: "1. Our Commitment",
        body: "At Fundora Creative Media, we are committed to delivering high-quality services. We handle refund requests fairly and transparently."
      },
      {
        heading: "2. Eligibility for Refunds",
        body: "You may be eligible for a refund if: you request a cancellation within 48 hours of payment and before any work has commenced; we are unable to deliver the agreed services; or the final deliverable significantly differs from the agreed scope of work."
      },
      {
        heading: "3. Non-Refundable Situations",
        body: "Refunds will not be issued in the following circumstances: work has already commenced and a portion of the service has been delivered; the client has provided incorrect or incomplete information that affected delivery; project delays were caused by the client's lack of response or cooperation; or a change of mind after work has begun."
      },
      {
        heading: "4. Partial Refunds",
        body: "For projects where work has partially commenced, we may offer a partial refund proportional to the work not yet completed. This is assessed on a case-by-case basis."
      },
      {
        heading: "5. How to Request a Refund",
        body: "To request a refund, email hello@fundoramedia.com with your name, the service purchased, payment date, and reason for the request. We will review and respond within 5 business days."
      },
      {
        heading: "6. Refund Processing",
        body: "Approved refunds are processed back to your original payment method within 7–14 business days, depending on your bank or card provider."
      },
      {
        heading: "7. Disputes",
        body: "If you are unsatisfied with our response to a refund request, you may escalate through your payment provider. We encourage direct communication first, as we are always willing to find a fair resolution."
      }
    ]
  }
};

function PolicyModal({ policy, onClose }) {
  const doc = POLICIES[policy];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!doc) return null;

  return (
    <div className="policy-backdrop" onClick={onClose}>
      <div className="policy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="policy-modal-header">
          <div>
            <h2 className="policy-modal-title">{doc.title}</h2>
            <p className="policy-modal-date">Last updated: {doc.lastUpdated}</p>
          </div>
          <button className="policy-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="policy-modal-body">
          {doc.content.map((section) => (
            <div key={section.heading} className="policy-section">
              <h3>{section.heading}</h3>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
        <div className="policy-modal-footer">
          <p>Questions? Email us at <a href="mailto:hello@fundoramedia.com">hello@fundoramedia.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default PolicyModal;
