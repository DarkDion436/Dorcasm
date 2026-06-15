"use client";

import { useState } from "react";

import PortfolioCard from "./PortfolioCard";
import CategoryFilter from "./CategoryFilter";

const portfolioItems = [
  {
    id: 1,
    title: "Modern Bridal Elegance",
    category: "Bridal",
    image: "/images/portfolio/bridal-1.jpg",
  },

  {
    id: 2,
    title: "Resort Collection",
    category: "Resort",
    image: "/images/portfolio/resort-1.jpg",
  },

  {
    id: 3,
    title: "Executive Sophistication",
    category: "Corporate",
    image: "/images/portfolio/corporate-1.jpg",
  },

  {
    id: 4,
    title: "Bespoke Tailoring",
    category: "Bespoke",
    image: "/images/portfolio/bespoke-1.jpg",
  },

  {
    id: 5,
    title: "Luxury Evening Wear",
    category: "Evening",
    image: "/images/portfolio/evening-1.jpg",
  },

  {
    id: 6,
    title: "Contemporary Bridal",
    category: "Bridal",
    image: "/images/portfolio/bridal-2.jpg",
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const categories = [
    "All",
    "Bridal",
    "Resort",
    "Corporate",
    "Bespoke",
    "Evening",
  ];

  const filteredItems =
    activeCategory === "All" || !activeCategory
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="bg-[#faf8f4] py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Portfolio Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
            />
          ))}

        </div>

      </div>

    </section>
  );
}