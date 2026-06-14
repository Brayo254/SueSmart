import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[\d\s()-]+$/, "Please enter a valid phone number"),
  subject: z
    .string()
    .min(1, "Please select a subject"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export const careerFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[\d\s()-]+$/, "Please enter a valid phone number"),
  position: z
    .string()
    .min(1, "Please select a position"),
  experience: z
    .string()
    .min(1, "Please specify years of experience"),
  linkedin: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  coverLetter: z
    .string()
    .min(50, "Cover letter must be at least 50 characters")
    .max(2000, "Cover letter must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CareerFormData = z.infer<typeof careerFormSchema>;

export const generalFAQs = [
  {
    question: "How do I schedule a consultation with SueSmart?",
    answer:
      "You can schedule a consultation by filling out our contact form, calling our office directly at +254 700 000 000, or emailing us at info@suesmart.co.ke. Our team will respond within 24 hours to discuss your legal needs.",
  },
  {
    question: "What are your office hours?",
    answer:
      "Our office is open Monday through Friday from 8:00 AM to 6:00 PM. We also offer after-hours consultations by appointment for urgent matters.",
  },
  {
    question: "How much does an initial consultation cost?",
    answer:
      "We offer a free initial consultation for all new clients. This allows us to understand your needs and determine how we can best assist you.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we understand that legal services can be a significant investment. We offer flexible payment plans tailored to your specific situation. Please discuss this during your initial consultation.",
  },
  {
    question: "Can you handle cases outside of Nairobi?",
    answer:
      "Yes, we handle cases throughout Kenya. While our office is based in Nairobi, we have the capability to represent clients in all Kenyan courts and can arrange virtual consultations for clients outside the capital.",
  },
];

export const practiceAreasData = [
  {
    slug: "commercial-real-estate",
    title: "Commercial Real Estate",
    shortDescription:
      "Expert legal guidance for commercial property transactions, developments, and disputes.",
    icon: "🏢",
    detailedContent: {
      overview:
        "Our Commercial Real Estate practice provides comprehensive legal services for developers, investors, landlords, and tenants. We handle transactions of all sizes, from small commercial leases to large-scale property developments.",
      services: [
        "Commercial property acquisitions and disposals",
        "Lease negotiations for retail, office, and industrial spaces",
        "Property development agreements",
        "Zoning and land use approvals",
        "Real estate litigation and dispute resolution",
        "Title searches and due diligence",
        "Property management agreements",
        "Real estate financing and securitization",
      ],
      whyChooseUs:
        "With extensive experience in Kenyan property law and deep understanding of local regulations, our team ensures smooth transactions and protects your interests at every stage. We have successfully closed deals worth over KES 10 billion in the last five years.",
    },
    faqs: [
      {
        question: "What due diligence is required for commercial property purchase?",
        answer:
          "Due diligence typically includes title search, land registry verification, zoning compliance check, environmental assessments, survey verification, and review of any existing leases or encumbrances. Our team conducts thorough investigations to ensure your investment is secure.",
      },
      {
        question: "How long does a commercial property transaction take?",
        answer:
          "The timeline varies depending on complexity. Simple lease agreements can be completed in 1-2 weeks, while property purchases may take 4-8 weeks for due diligence and documentation. We work efficiently to meet your business timeline.",
      },
      {
        question: "Can you assist with property dispute resolution?",
        answer:
          "Yes, we handle all aspects of real estate disputes including boundary disputes, title disputes, landlord-tenant disagreements, and development conflicts. We aim to resolve disputes through negotiation where possible, but are prepared to litigate when necessary.",
      },
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    shortDescription:
      "Compassionate legal support for family matters including divorce, custody, and inheritance.",
    icon: "👨‍👩‍👧",
    detailedContent: {
      overview:
        "Our Family Law practice offers sensitive and professional legal assistance for individuals and families navigating difficult personal situations. We approach each case with empathy while vigorously protecting our clients' rights and interests.",
      services: [
        "Divorce and separation proceedings",
        "Child custody and visitation rights",
        "Spousal support and alimony",
        "Division of marital assets",
        "Prenuptial and postnuptial agreements",
        "Adoption proceedings",
        "Inheritance and succession matters",
        "Domestic violence protection orders",
      ],
      whyChooseUs:
        "We understand that family legal matters are highly personal and emotionally charged. Our attorneys provide clear, practical advice while treating every client with dignity and respect. We strive to achieve the best possible outcomes while minimizing conflict.",
    },
    faqs: [
      {
        question: "What is the process for filing for divorce in Kenya?",
        answer:
          "In Kenya, divorce can be filed based on grounds such as adultery, cruelty, desertion, or irretrievable breakdown of marriage. The process involves filing a petition, serving the other party, and attending court hearings. We guide you through each step.",
      },
      {
        question: "How is child custody determined in Kenya?",
        answer:
          "Courts in Kenya prioritize the best interests of the child. Custody decisions consider the child's age, welfare, parents' ability to provide, and the child's own wishes if of sufficient age. We help you present a strong case for custody arrangements.",
      },
      {
        question: "What is the difference between legal and physical custody?",
        answer:
          "Legal custody refers to the right to make major decisions about the child's welfare (education, healthcare, religion), while physical custody refers to where the child primarily resides. Courts may award joint legal custody while designating one parent as the primary physical custodian.",
      },
    ],
  },
  {
    slug: "commercial-litigation",
    title: "Commercial Litigation",
    shortDescription:
      "Skilled advocacy in complex business disputes, contract breaches, and arbitration.",
    icon: "⚖️",
    detailedContent: {
      overview:
        "Our Commercial Litigation practice represents businesses in high-stakes disputes across all Kenyan courts and in international arbitration. We combine strategic thinking with aggressive advocacy to protect your business interests.",
      services: [
        "Contract dispute resolution",
        "Business tort claims",
        "Partnership and shareholder disputes",
        "Breach of fiduciary duty",
        "Debt recovery",
        "Injunctive relief",
        "International arbitration",
        "Appeals and judicial reviews",
      ],
      whyChooseUs:
        "Our litigation team has successfully handled cases involving millions of shillings in dispute. We approach each case with a strategic mindset, always considering the business implications alongside the legal merits. Our goal is to achieve the best result efficiently.",
    },
    faqs: [
      {
        question: "When should I consider litigation versus arbitration?",
        answer:
          "Arbitration may be preferable for faster resolution and confidentiality, while litigation is better for complex cases requiring extensive evidence or when you need precedential judgments. Many contracts specify dispute resolution methods. We advise on the best approach for your specific situation.",
      },
      {
        question: "How long does commercial litigation typically take?",
        answer:
          "Duration varies significantly based on case complexity and court backlog. Simple matters may resolve in 6-12 months, while complex litigation can take 2-4 years. We work diligently to move your case forward while keeping you informed throughout.",
      },
      {
        question: "What costs can I recover if I win my case?",
        answer:
          "In Kenyan commercial litigation, successful parties can typically recover reasonable legal costs from the losing party. However, costs awarded often don't cover the full legal fees. We discuss cost expectations during our initial consultation.",
      },
    ],
  },
  {
    slug: "products-liability",
    title: "Products Liability",
    shortDescription:
      "Protecting consumers and manufacturers in product defect claims and recalls.",
    icon: "🛡️",
    detailedContent: {
      overview:
        "Our Products Liability practice serves both consumers who have been harmed by defective products and businesses seeking to defend against liability claims. We have extensive experience in product safety regulations and defect litigation.",
      services: [
        "Product defect claims (design, manufacturing, warning defects)",
        "Product recall assistance",
        "Supplier and retailer liability",
        "Class action defense",
        "Product safety compliance",
        "Insurance coverage disputes",
        "Regulatory investigations",
        "Warranty claims",
      ],
      whyChooseUs:
        "We combine deep knowledge of product safety regulations with strong litigation skills. Whether you're seeking compensation for a defective product or defending your business, we have the expertise to handle your case effectively.",
    },
    faqs: [
      {
        question: "What do I need to prove in a products liability case?",
        answer:
          "In Kenya, products liability claims typically require proving: (1) the product was defective, (2) the defect existed when the product left the manufacturer's control, (3) the defect caused your injury, and (4) you were using the product as intended. We guide you through gathering necessary evidence.",
      },
      {
        question: "Can I file a products liability claim for a recalled product?",
        answer:
          "Yes, if you were harmed by a product that was later recalled, you may have a valid claim even if you didn't experience immediate symptoms. Many product defects cause delayed injuries. We help identify potential claims arising from recalls.",
      },
      {
        question: "How can manufacturers protect against products liability claims?",
        answer:
          "Key protective measures include: rigorous quality control, comprehensive warning labels, proper product testing, maintaining clear documentation, prompt handling of customer complaints, and working with legal counsel on compliance with safety regulations. We assist businesses with preventive strategies.",
      },
    ],
  },
];

export const statsData = [
  { value: 15, label: "Years of Experience", suffix: "+" },
  { value: 500, label: "Cases Won", suffix: "+" },
  { value: 98, label: "Success Rate", suffix: "%" },
  { value: 50, label: "Legal Professionals", suffix: "+" },
];