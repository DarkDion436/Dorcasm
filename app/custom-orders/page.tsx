import ProcessSection from "@/components/custom-orders/ProcessSection";
import ConsultationForm from "@/components/custom-orders/ConsultationForm";

export default function CustomOrdersPage() {
  return (
    <main className="bg-[#faf8f4]">

      {/* Hero */}
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
            Bespoke Atelier
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
            Custom
            <br />
            Creations
            <br />
            Made For You.
          </h1>

        </div>

      </section>

      <ProcessSection />
      <ConsultationForm />

    </main>
  );
}