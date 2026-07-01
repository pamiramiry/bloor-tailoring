export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "have-it-made",
    title: "Have It Made",
    tagline: "Custom garments built to your exact measurements and specifications.",
    services: [
      "Custom tailoring",
      "Custom made clothing",
      "Suit tailoring",
      "Shirt tailoring",
      "Formal wear tailoring",
      "Uniform tailoring",
    ],
  },
  {
    id: "make-it-fit",
    title: "Make It Fit",
    tagline: "Every garment deserves a perfect fit, regardless of where it came from.",
    services: [
      "Pants alterations",
      "Pants hemming",
      "Dress alterations",
      "Blouse alterations",
      "Coat & jacket alterations",
      "Suit resizing",
      "Men's clothing alterations",
      "Women's clothing alterations",
      "Kids' clothing alterations",
    ],
  },
  {
    id: "bridal-occasion",
    title: "Bridal & Occasion",
    tagline: "Precision fittings for the moments that deserve nothing less.",
    services: [
      "Wedding gown alterations",
      "Bridesmaid dress alterations",
      "Formal wear tailoring",
    ],
  },
  {
    id: "restore-renew",
    title: "Restore & Renew",
    tagline: "Exceptional garments are worth preserving.",
    services: [
      "Leather repair",
      "Zipper replacement",
      "Hem repairs",
      "Drapery & curtains alterations",
      "Repair knitted clothes",
    ],
  },
];
