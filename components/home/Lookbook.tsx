import Image from "next/image";
import Link from "next/link";

const lookbookImages = [
  {
    image: "/images/portfolio/lookbook-1.jpg",
    title: "Bridal Elegance",
  },
  {
    image: "/images/portfolio/lookbook-2.jpg",
    title: "Resort Collection",
  },
  {
    image: "/images/portfolio/lookbook-3.jpg",
    title: "Contemporary Tailoring",
  },
];

export default function Lookbook() {
  return (
    <section className="bg-[#faf8f4] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">

          <div>
            <span
              className="
                uppercase
                tracking-[0.4em]
                text-xs
                text-neutral-500
              "
            >
              Lookbook
            </span>

            <h2
              className="
                mt-6
                font-serif
                text-5xl
                md:text-6xl
                lg:text-7xl
                leading-[0.95]
              "
            >
              A Collection
              <br />
              Of Stories.
            </h2>
          </div>

          <p
            className="
              max-w-lg
              text-neutral-600
              leading-relaxed
              text-lg
            "
          >
            Explore selected creations that embody
            craftsmanship, individuality, and timeless
            sophistication.
          </p>

        </div>

        {/* Editorial Grid */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Large Image */}

          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden h-[700px]">

              <Image
                src={lookbookImages[0].image}
                alt={lookbookImages[0].title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

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

              <div className="absolute bottom-8 left-8 text-white">

                <h3 className="font-serif text-4xl">
                  {lookbookImages[0].title}
                </h3>

                <p className="mt-2 uppercase tracking-[0.3em] text-xs">
                  Featured Collection
                </p>

              </div>

            </div>
          </div>

          {/* Right Images */}

          <div className="lg:col-span-5 flex flex-col gap-6">

            {lookbookImages.slice(1).map((item) => (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  h-[337px]
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

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-transparent
                    to-transparent
                  "
                />

                <div className="absolute bottom-6 left-6 text-white">

                  <h3 className="font-serif text-2xl">
                    {item.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="text-center mt-20">

          <Link
            href="/portfolio"
            className="
              inline-flex
              items-center
              justify-center
              min-w-[260px]
              px-12
              py-5
              border
              border-black
              uppercase
              tracking-[0.25em]
              text-xs
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            View Full Portfolio
          </Link>

        </div>

      </div>
    </section>
  );
}