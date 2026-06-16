import CollectionHero from "@/components/collections/CollectionHero";
import CollectionCard from "@/components/collections/CollectionCard";
import bridalImage from "@/images/collections/bridal.jpg";
import resortImage from "@/images/collections/resort.jpg";
import corporateImage from "@/images/collections/corporate.jpg";
import tailoringImage from "@/images/collections/tailoring1.jpg";



const collections = [
  {
    title: "Bridal Elegance",
    category: "Bridal",
    image: bridalImage,
  },
  {
    title: "Resort Wear",
    category: "Vacation",
    image: resortImage,
  },
  {
    title: "Corporate Luxury",
    category: "Corporate",
    image: corporateImage,
  },
  {
    title: "Custom Tailoring",
    category: "Bespoke",
    image: tailoringImage,
  },
];

export default function CollectionsPage() {
  return (
    <>
      <CollectionHero />

      <section className="pb-32 bg-background">
        <div className="container-custom">

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