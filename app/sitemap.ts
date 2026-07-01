import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://bloortailoring.com", priority: 1.0, changeFrequency: "monthly" },
    { url: "https://bloortailoring.com/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "https://bloortailoring.com/about", priority: 0.7, changeFrequency: "yearly" },
    { url: "https://bloortailoring.com/contact", priority: 0.8, changeFrequency: "yearly" },
  ];
}
