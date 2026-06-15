import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";



export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-neutral-200">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <span
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-neutral-500
            "
          >
            Contact
          </span>

          <h1
            className="
              mt-6
              font-serif
              text-5xl
              md:text-7xl
              lg:text-8xl
              leading-[0.9]
            "
          >
            We would Love
            <br />
            To Hear
            <br />
            From You.
          </h1>

        </div>

      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-20">

            {/* Left Side */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right Side */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 shadow-sm border border-neutral-200">
                <ContactForm />
              </div>
            </div>

          </div>

        </div>

      </section>

    </>
  );
}