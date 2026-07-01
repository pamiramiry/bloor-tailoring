import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import CallNowBar from "@/components/CallNowBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://bloortailoring.com"),
  title: "Bloor Tailoring | Expert Tailor in Toronto's Bloor West Village",
  description:
    "Toronto's trusted tailor for custom suits, alterations, wedding gown fitting, and repairs. Rated 4.7★ on Google. Located at 2323 Bloor St W.",
  alternates: { canonical: "https://bloortailoring.com" },
  openGraph: {
    title: "Bloor Tailoring | Expert Tailor in Toronto",
    description:
      "Custom suits, alterations, bridal fittings, and repairs. Rated 4.7★ on Google. Bloor West Village, Toronto.",
    url: "https://bloortailoring.com",
    siteName: "Bloor Tailoring",
    locale: "en_CA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bloor Tailoring",
  description:
    "Expert tailor in Toronto offering custom suits, alterations, wedding gown fittings, and repairs.",
  url: "https://bloortailoring.com",
  telephone: "+14379621515",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2323 Bloor St W Unit 8",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6S 4W1",
    addressCountry: "CA",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "70",
  },
  priceRange: "$$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tailoring Services",
    itemListElement: [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Suit Tailoring" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Gown Alterations" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pants Hemming" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Leather Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridesmaid Dress Alterations" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Formal Wear Tailoring" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400&family=Jost:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CallNowBar />
        </Providers>
      </body>
    </html>
  );
}
