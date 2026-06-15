import CollectionHero from "@/components/collections/CollectionHero";
import CollectionCard from "@/components/collections/CollectionCard";

const collections = [
  {
    title: "Bridal Elegance",
    category: "Bridal",
    image: "/images/collections/bridal.jpg",
  },
  {
    title: "Resort Wear",
    category: "Vacation",
    image: "/images/collections/resort.jpg",
  },
  {
    title: "Corporate Luxury",
    category: "Corporate",
    image: "/images/collections/corporate.jpg",
  },
  {
    title: "Custom Tailoring",
    category: "Bespoke",
    image: "/images/collections/tailoring.jpg",
  },
];

export default function CollectionsPage() {
  return (
    <>
      <CollectionHero />

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid md:grid-cols-2 gap-10">

            {collections.map((collection) => (
              <CollectionCard
                key={collection.title}
                title={collection.title}
                category={collection.category}
                image={collection.image}
              />
            ))}

          </div>

        </div>

      </section>

    </>
  );
}