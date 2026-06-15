const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your vision, preferences, occasion, and personal style.",
  },
  {
    step: "02",
    title: "Design Development",
    description:
      "Our studio creates a tailored concept including fabrics, silhouettes, and detailing.",
  },
  {
    step: "03",
    title: "Measurements & Fittings",
    description:
      "Precise measurements and fittings ensure exceptional comfort and a flawless fit.",
  },
  {
    step: "04",
    title: "Final Creation",
    description:
      "Your garment is meticulously crafted and delivered with the highest attention to detail.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#faf8f4] py-28 lg:py-36">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}

        <div className="max-w-3xl mb-24">

          <span
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-neutral-500
            "
          >
            Our Process
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
            Your Journey
            <br />
            To Bespoke
            <br />
            Elegance.
          </h2>

        </div>

        {/* Steps */}

        <div className="grid lg:grid-cols-4 gap-12">

          {process.map((item) => (
            <div key={item.step}>

              <span
                className="
                  text-neutral-400
                  tracking-[0.3em]
                  text-sm
                "
              >
                {item.step}
              </span>

              <div className="w-full h-px bg-neutral-300 my-6" />

              <h3
                className="
                  font-serif
                  text-3xl
                  mb-6
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-neutral-600
                  leading-relaxed
                "
              >
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}