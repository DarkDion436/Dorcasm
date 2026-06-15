import Image from "next/image";

export default function CollectionHero() {
  return (
    <section className="bg-[#faf8f4] pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="mb-16">

          <span
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-neutral-500
            "
          >
            Our Collections
          </span>

          <h1
            className="
              mt-6
              font-serif
              text-6xl
              md:text-7xl
              lg:text-8xl
              leading-[0.9]
            "
          >
            Designed
            <br />
            To Be
            <br />
            Remembered.
          </h1>

        </div>

        {/* Hero Image */}

        <div className="relative overflow-hidden h-[500px] lg:h-[750px]">

          <Image
            src="/images/collections/hero.jpg"
            alt="Collections"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

        </div>

        {/* Intro */}

        <div className="max-w-3xl mt-12">

          <p
            className="
              text-lg
              md:text-xl
              leading-relaxed
              text-neutral-600
            "
          >
            Discover collections crafted with purpose,
            sophistication, and timeless elegance.
            Every piece is thoughtfully designed to
            celebrate individuality and confidence.
          </p>

        </div>

      </div>
    </section>
  );
}