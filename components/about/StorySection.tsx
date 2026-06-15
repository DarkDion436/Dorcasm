import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-[#faf8f4] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}

          <div className="relative overflow-hidden">
            <div className="relative h-[700px]">

              <Image
                src="/images/about/founder.jpg"
                alt="Founder"
                fill
                className="object-cover"
              />

            </div>
          </div>

          {/* Content */}

          <div>

            <span
              className="
                uppercase
                tracking-[0.45em]
                text-xs
                text-neutral-500
              "
            >
              Our Story
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
              A Studio Built
              <br />
              On Purpose.
            </h2>

            <div className="mt-10 space-y-6 text-neutral-600 leading-relaxed text-lg">

              <p>
                Kendi Dorcas Studio was founded from a passion
                for creating timeless garments that celebrate
                individuality, confidence, and elegance.
              </p>

              <p>
                Our journey began with a simple belief:
                fashion should be meaningful, intentional,
                and designed to last beyond fleeting trends.
              </p>

              <p>
                Every creation reflects our commitment to
                craftsmanship, sustainability, and exceptional
                attention to detail.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}