"use client";

import { useState } from "react";

import PortfolioCard from "./PortfolioCard";
import CategoryFilter from "./CategoryFilter";
import bridalImage1 from "@/images/portfolio/bridalImage2.jpg";
import resortImage1 from "@/images/portfolio/resort.jpg";
import corporateImage1 from "@/images/portfolio/corporate.jpg";
import bespokeImage1 from "@/images/portfolio/bespokeImage1.jpg";
import eveningImage1 from "@/images/portfolio/eveningImage1.jpg";
import bridalImage2 from "@/images/portfolio/bridal.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Modern Bridal Elegance",
    category: "Bridal",
    image: bridalImage1,
  },

  {
    id: 2,
    title: "Resort Collection",
    category: "Resort",
    image: resortImage1,
  },

  {
    id: 3,
    title: "Executive Sophistication",
    category: "Corporate",
    image: corporateImage1,
  },

  {
    id: 4,
    title: "Bespoke Tailoring",
    category: "Bespoke",
    image: bespokeImage1,
  },

  {
    id: 5,
    title: "Luxury Evening Wear",
    category: "Evening",
    image: eveningImage1,
  },

  {
    id: 6,
    title: "Contemporary Bridal",
    category: "Bridal",
    image: bridalImage2,
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