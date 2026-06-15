const values = [
  {
    number: "01",
    title: "Craftsmanship",
    description:
      "Every garment is meticulously crafted with exceptional attention to detail and precision.",
  },
  {
    number: "02",
    title: "Sustainability",
    description:
      "We prioritize responsible production and thoughtful sourcing to create lasting impact.",
  },
  {
    number: "03",
    title: "Individuality",
    description:
      "Our creations celebrate uniqueness and empower every client to express their authentic self.",
  },
];

export default function Values() {
  return (
    <section className="bg-[#faf8f4] py-28 lg:py-36">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="mb-20">

          <span
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-neutral-500
            "
          >
            Our Values
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
            What Guides
            <br />
            Everything We Create.
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-16">

          {values.map((value) => (
            <div key={value.title}>

              <span
                className="
                  text-neutral-400
                  text-sm
                  tracking-[0.3em]
                "
              >
                {value.number}
              </span>

              <div className="w-full h-px bg-neutral-300 my-6" />

              <h3
                className="
                  font-serif
                  text-3xl
                  mb-6
                "
              >
                {value.title}
              </h3>

              <p
                className="
                  text-neutral-600
                  leading-relaxed
                  text-lg
                "
              >
                {value.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}