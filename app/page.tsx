import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import ServicesTeaser from "@/components/ServicesTeaser";
import HomepageGallery from "@/components/HomepageGallery";
import ProcessStrip from "@/components/ProcessStrip";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need an appointment?",
      acceptedAnswer: { "@type": "Answer", text: "Walk-ins are welcome for most alterations. For wedding gown fittings and complex custom work, we recommend calling ahead to schedule a time." },
    },
    {
      "@type": "Question",
      name: "How long do alterations take?",
      acceptedAnswer: { "@type": "Answer", text: "Most alterations are ready within 3–5 business days. Rush service is available — call us at (437) 962-1515 to discuss your timeline." },
    },
    {
      "@type": "Question",
      name: "What types of garments do you work on?",
      acceptedAnswer: { "@type": "Answer", text: "Everything — suits, dresses, wedding gowns, coats, leather, formal and casual wear. If it's a garment, we can tailor it." },
    },
    {
      "@type": "Question",
      name: "How is pricing determined?",
      acceptedAnswer: { "@type": "Answer", text: "Pricing depends on the garment and the work involved. We provide an accurate quote in-store after seeing your piece. No surprises." },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: { "@type": "Answer", text: "We accept cash, debit, and major credit cards." },
    },
    {
      "@type": "Question",
      name: "Can I get a rush alteration?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Call us at (437) 962-1515 to discuss your timeline and we'll do our best to accommodate you." },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <StatsBanner />
      <ServicesTeaser />
      <HomepageGallery />
      <ProcessStrip />
      <Reviews />
      <Faq />
      <CtaBanner />
    </>
  );
}
