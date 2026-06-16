import Image from "next/image";
import Link from "next/link";
import tailoringImage from "@/images/collections/tailoring1.jpg";
import bridalImage from "@/images/collections/bridal.jpg";
import resortImage from "@/images/collections/resort.jpg";
import corporateImage from "@/images/collections/corporate.jpg";

const collections = [
  {
    title: "Custom Tailoring",
    image: tailoringImage,
  },
  {
    title: "Bridal Collection",
    image: bridalImage,
  },
  {
    title: "Resort Wear",
    image: resortImage,
  },
  {
    title: "Corporate Elegance",
    image: corporateImage,
  },
];

export default function Collections() {
  return (
    <section className="bg-[#faf8f4] py-24 lg:py-32">
      <div className="max-w-7xl px-6 lg:px-12">

        {/* Section Header */}

        <div className="max-w-4xl mb-24 ">
          <div className="atelier-label mx-auto mb-12 ">
            <p className="label-main">Our Portfolio</p>
            <p className="label-sub">Collections</p>
          </div>

          <h2 className="heading-lg text-neutral-900">
            Designed For
            <br />
            Modern Expression.
          </h2>

          <p className="body-text mt-8 max-w-2xl">
            Explore thoughtfully crafted collections
            inspired by elegance, individuality, and
            timeless sophistication.
          </p>

        </div>

        {/* Collection Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {collections.map((item) => (
            <Link
              href="/collections"
              key={item.title}
              className="group"
            >

              <div
                className="
                  relative
                  overflow-hidden
                  h-[500px]
                  lg:h-[600px]
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                  "
                />

                {/* Title */}

                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    text-white
                  "
                >
                  <h3
                    className="
                      font-serif
                      text-3xl
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                    "
                  >
                    Explore →
                  </span>
                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-24 text-center">
          <Link
            href="/collections"
            className="btn-secondary min-w-[260px]"
          >
            View All Collections
          </Link>

        </div>

      </div>
    </section>
  );
}