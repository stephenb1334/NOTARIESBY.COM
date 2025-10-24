export type FAQItem = {
  question: string
  answer: string
}

export type FAQProps = {
  title?: string
  columnA?: FAQItem[]
  columnB?: FAQItem[]
  className?: string
  id?: string
}

const defaultColumnA: FAQItem[] = [
  {
    question: "Do you verify identity beyond a photo ID, and what if my ID is expired?",
    answer:
      "We must verify identity using current, government‑issued photo ID (driver’s license, passport, or state ID). Expired IDs are not accepted. If your ID was recently renewed and you’re awaiting the card, bring qualifying alternative ID permitted by Florida law.",
  },
  {
    question: "Can you notarize documents that are already signed?",
    answer:
      "No. Signatures must occur in the notary’s presence. If a document was pre‑signed, we’ll require a fresh signature during the appointment.",
  },
  {
    question: "What if a signer cannot be present or has mobility constraints?",
    answer:
      "All signers must be present and able to communicate willingness. We offer mobile appointments and can meet at residences, hospitals, care facilities, or offices with appropriate access.",
  },
  {
    question: "Do you provide witnesses if my document requires them?",
    answer:
      "Yes, by prior arrangement. Some documents require one or two witnesses; we can coordinate witnesses when scheduled in advance. Witnesses must be impartial and meet eligibility requirements.",
  },
]

const defaultColumnB: FAQItem[] = [
  {
    question: "Can you explain loan signing packages and how long a typical appointment takes?",
    answer:
      "Loan signing packages (refi, purchase, HELOC) include lender and title documents requiring detailed execution and initials. Appointments typically run 60–90 minutes; we guide signers page‑by‑page to ensure accuracy and compliance.",
  },
  {
    question: "Which estate planning documents do you commonly notarize?",
    answer:
      "We frequently notarize Powers of Attorney, Living Wills, Healthcare Directives, and related real estate documents. We confirm identity, voluntariness, and proper execution; for legal drafting, consult your attorney.",
  },
  {
    question: "Do you offer Apostille facilitation and what information do you need?",
    answer:
      "Yes. We facilitate Florida Apostille processing for documents destined for Hague Convention countries. We’ll confirm the originating state/agency and the destination country; processing times vary by authority and workload.",
  },
  {
    question: "What payment methods do you accept and when is payment collected?",
    answer:
      "Payment is collected at or before service. We accept major cards and digital wallets such as Apple Pay and Google Pay. Invoices and receipts are provided for your records.",
  },
]

export function FAQ({
  title = "FAQs",
  columnA = defaultColumnA,
  columnB = defaultColumnB,
  className = "",
  id,
}: FAQProps) {
  return (
    <section id={id} className={className} aria-labelledby={id ? `${id}-title` : undefined}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "2rem 1rem",
        }}
      >
        <header style={{ marginBottom: "1.25rem" }}>
          <h2
            id={id ? `${id}-title` : undefined}
            style={{
              fontSize: "1.75rem",
              lineHeight: 1.2,
              fontWeight: 700,
              margin: 0,
            }}
          >
            {title}
          </h2>
        </header>

        <div
          role="list"
          aria-label="Frequently Asked Questions"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
        >
          <div
            role="listitem"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
            }}
          >
            {columnA.slice(0, 4).map((item, idx) => (
              <article
                key={`faq-a-${idx}`}
                aria-labelledby={`faq-a-${idx}-q`}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "1rem",
                  background: "#ffffff",
                }}
              >
                <h3
                  id={`faq-a-${idx}-q`}
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    margin: 0,
                    color: "#111827",
                  }}
                >
                  {item.question}
                </h3>
                <p
                  style={{
                    margin: "0.5rem 0 0",
                    color: "#374151",
                    lineHeight: 1.6,
                  }}
                >
                  {item.answer}
                </p>
              </article>
            ))}
          </div>

          <div
            role="listitem"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
            }}
          >
            {columnB.slice(0, 4).map((item, idx) => (
              <article
                key={`faq-b-${idx}`}
                aria-labelledby={`faq-b-${idx}-q`}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "1rem",
                  background: "#ffffff",
                }}
              >
                <h3
                  id={`faq-b-${idx}-q`}
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    margin: 0,
                    color: "#111827",
                  }}
                >
                  {item.question}
                </h3>
                <p
                  style={{
                    margin: "0.5rem 0 0",
                    color: "#374151",
                    lineHeight: 1.6,
                  }}
                >
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            section > div > div[role="list"] {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default FAQ
