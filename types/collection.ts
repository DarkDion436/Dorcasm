export interface Collection {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const collections = [
  {
    id: 1,
    title: "Bridal Elegance",
    category: "Bridal",
    image: "/images/collections/bridal.jpg",
    description:
      "Timeless bridal creations crafted for unforgettable moments.",
  },

  {
    id: 2,
    title: "Resort Wear",
    category: "Vacation",
    image: "/images/collections/resort.jpg",
    description:
      "Sophisticated silhouettes designed for luxury escapes.",
  },

  {
    id: 3,
    title: "Corporate Luxury",
    category: "Corporate",
    image: "/images/collections/corporate.jpg",
    description:
      "Refined tailoring for the modern professional woman.",
  },

  {
    id: 4,
    title: "Bespoke Tailoring",
    category: "Bespoke",
    image: "/images/collections/tailoring.jpg",
    description:
      "Custom-made garments tailored to your unique style.",
  },

  {
    id: 5,
    title: "Evening Glamour",
    category: "Evening",
    image: "/images/collections/evening.jpg",
    description:
      "Statement pieces created for special occasions.",
  },

  {
    id: 6,
    title: "Ready-To-Wear",
    category: "Luxury Essentials",
    image: "/images/collections/readywear.jpg",
    description:
      "Everyday elegance with premium craftsmanship.",
  },
];