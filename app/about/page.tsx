import StorySection from "@/components/about/StorySection";
import Philosophy from "@/components/about/Philosophy";
import Values from "@/components/about/Values";

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <span className="uppercase tracking-[0.45em] text-xs text-neutral-500">
            About Us
          </span>

          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-none">
            Crafting
            <br />
            Timeless
            <br />
            Elegance.
          </h1>

        </div>
      </section>

      <StorySection />
      <Philosophy />
      <Values />
    </>
  );
}