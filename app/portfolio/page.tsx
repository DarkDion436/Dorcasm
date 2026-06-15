import PortfolioGrid from "@/components/portfolio/PortfolioGrid";


export default function PortfolioPage() {
  return (
    
    <main className="bg-[#faf8f4]">
    
      <section className="pt-40 pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <span
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-neutral-500
            "
          >
            Portfolio
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
            A Gallery
            <br />
            Of Timeless
            <br />
            Creations.
          </h1>

        </div>

      </section>

      <PortfolioGrid />

    </main>
  );
}