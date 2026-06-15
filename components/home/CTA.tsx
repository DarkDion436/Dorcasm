import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#f5f1ea] py-32 lg:py-48">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="atelier-label mx-auto mb-12">
          <p className="label-main">Custom Atelier Experience</p>
          <p className="label-sub">Collaboration</p>
        </div>

        <h2 className="heading-lg text-neutral-900 mb-10">
          Let's Create
          <br />
          Something
          <br />
          Extraordinary.
        </h2>

        <p className="body-text max-w-2xl mx-auto">
          Whether you're seeking a bespoke garment,
          bridal masterpiece, or a timeless wardrobe
          investment, our studio is dedicated to
          bringing your vision to life with elegance,
          craftsmanship, and precision.
        </p>

        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">

          <Link
            href="/custom-orders"
            className="btn-primary min-w-[260px]"
          >
            Book Consultation
          </Link>

          <Link
            href="/collections"
            className="btn-secondary min-w-[260px]"
          >
            View Collections
          </Link>

        </div>

      </div>
    </section>
  );
}