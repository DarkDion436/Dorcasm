const features = [
  {
    title: "Timeless Design",
    description:
      "Every garment is thoughtfully designed to transcend trends and remain relevant across seasons and generations.",
  },
  {
    title: "Artisan Craftsmanship",
    description:
      "Meticulously handcrafted pieces created with exceptional attention to detail, precision, and quality.",
  },
  {
    title: "Sustainable Fashion",
    description:
      "We embrace responsible production practices and conscious design choices that honor both people and the planet.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#faf8f4] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}

        <div className="max-w-4xl mb-24">
          <div className="atelier-label">
            <p className="label-main">Our Philosophy</p>
            <p className="label-sub">Values</p>
          </div>

          <h2 className="heading-lg text-neutral-900">
            Fashion With
            <br />
            Meaning.
          </h2>

        </div>

        {/* Features Grid */}

        <div className="grid lg:grid-cols-3 gap-20">

          {features.map((feature, index) => (
            <div key={feature.title}>
              <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-medium">
                0{index + 1}
              </span>

              <div className="w-full h-px bg-neutral-200 my-8" />

              <h3 className="font-serif text-3xl mb-6 text-neutral-900">
                {feature.title}
              </h3>

              <p className="body-text">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}