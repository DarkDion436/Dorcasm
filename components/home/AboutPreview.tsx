import Image from "next/image";
import Link from "next/link";
// Import the image statically to verify the path and get automatic optimization
import aboutImage from "@/images/about/about.jpg";

export default function AboutPreview() {
  return (
    <section className="bg-[#faf8f4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Section */}
          <div className="relative overflow-hidden">
            <div className="relative h-[500px] md:h-[650px] lg:h-[750px]">

              <Image
                src={aboutImage}
                alt="Kendi Dorcas Studio"
                fill
                placeholder="blur"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>
          </div>

          {/* Content Section */}
          <div>

            <span
              className="
                uppercase
                tracking-[0.4em]
                text-xs
                text-neutral-500
              "
            >
              About The Studio
            </span>

            <h2
              className="
                mt-6
                font-serif
                text-4xl
                md:text-5xl
                lg:text-6xl
                leading-[1]
                text-neutral-900
              "
            >
              Crafted With
              <br />
              Purpose.
              <br />
              Designed To
              <br />
              Endure.
            </h2>

            <div className="mt-10 space-y-6">

              <p
                className="
                  text-neutral-600
                  leading-relaxed
                  text-lg
                "
              >
                Kendi Dorcas Studio is a contemporary fashion
                atelier dedicated to creating timeless garments
                rooted in craftsmanship, sustainability, and
                intentional design.
              </p>

              <p
                className="
                  text-neutral-600
                  leading-relaxed
                  text-lg
                "
              >
                Every piece is thoughtfully engineered to
                celebrate individuality while maintaining the
                highest standards of quality, elegance, and
                modern sophistication.
              </p>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-12">

              <div>
                <h3 className="font-serif text-4xl">
                  5+
                </h3>

                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-neutral-500
                    mt-2
                  "
                >
                  Years
                </p>
              </div>

              <div>
                <h3 className="font-serif text-4xl">
                  200+
                </h3>

                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-neutral-500
                    mt-2
                  "
                >
                  Designs
                </p>
              </div>

              <div>
                <h3 className="font-serif text-4xl">
                  100%
                </h3>

                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-neutral-500
                    mt-2
                  "
                >
                  Handmade
                </p>
              </div>

            </div>

            {/* CTA */}

            <div className="mt-12">

              <Link
                href="/about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  max-w-[240px]
                  px-8
                  py-8
                  border
                  border-black
                  text-black
                  uppercase
                  tracking-[0.25em]
                  text-3xs
                  gap-5
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                Discover Our Story
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}