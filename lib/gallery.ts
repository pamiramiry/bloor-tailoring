export type Category =
  | "alterations"
  | "before-after"
  | "custom"
  | "wedding-formal"
  | "details";

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  category: Category;
  featured?: boolean;
  objectPosition?: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/wedding-dress.webp",
    alt: "Wedding dress alterations — Bloor Tailoring, Toronto",
    caption: "Wedding gown fitted and altered for the ceremony.",
    category: "wedding-formal",
    featured: true,
    objectPosition: "center center",
  },
  {
    src: "/images/red-jacket.webp",
    alt: "Custom embroidered velvet coat — Bloor Tailoring",
    caption: "Custom velvet coat, fully tailored to size.",
    category: "custom",
    objectPosition: "center top",
  },
  {
    src: "/images/black-dress.webp",
    alt: "Formal gown fitting — Bloor Tailoring",
    caption: "Evening gown taken in and hemmed.",
    category: "alterations",
    objectPosition: "center 20%",
  },
  {
    src: "/images/yellow-dress.webp",
    alt: "Garment alteration fitting — Bloor Tailoring",
    caption: "Dress altered for fit and proportion.",
    category: "alterations",
    objectPosition: "center 20%",
  },
];

export const CATEGORY_LABELS: Record<Category | "all", string> = {
  all: "All",
  alterations: "Alterations",
  "before-after": "Before & After",
  custom: "Custom / Made to Measure",
  "wedding-formal": "Wedding & Formal",
  details: "Details & Craftsmanship",
};

export const CATEGORIES = Object.entries(CATEGORY_LABELS) as [
  Category | "all",
  string,
][];
