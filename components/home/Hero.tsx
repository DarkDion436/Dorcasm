import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[#fcfaf7]">
      {/* Abstract Background Detail */}
      <div className="absolute  w-1/3 h-full bg-[#f5f1ea] -z-10" />
      
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl md:ml-12 lg:ml-24">
            {/* Studio Label */}
            <div className="atelier-label px-6 md:mb-0.5 lg:mb-2">
              <p className="label-main">
                K<span className="text-[#c5a059]">tS</span>
              </p>
              <p className="label-sub">Kiki the Seamstress</p>
            </div>

            <h1 className="heading-xl text-neutral-900 mb-2">
              Engineered
              <br />
              <span className="italic font-light">Garments for</span>
              <br />
              the Modern Soul.
            </h1>
            <p className="body-text max-w-xl text-lg md:text-xl mb-8">
              Sustainable fashion crafted with architectural precision,
              intentional design, and timeless elegance for the modern soul.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <Link href="/portfolio" className="btn-primary min-w-[240px] text-center">
                View Collection
              </Link>

              <Link href="/custom-orders" className="btn-secondary min-w-[240px] text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}