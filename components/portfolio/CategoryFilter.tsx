"use client";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryFilterProps) {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-500 ${
            activeCategory === category
              ? "text-[#c5a059] font-medium"
              : "text-neutral-400 hover:text-neutral-900"
          }`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}