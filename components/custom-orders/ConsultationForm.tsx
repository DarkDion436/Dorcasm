"use client";

export default function ConsultationForm() {
  return (
    <section className="bg-[#f5f1ea] py-28 lg:py-36">

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-20">

          <span
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-neutral-500
            "
          >
            Consultation Request
          </span>

          <h2
            className="
              mt-6
              font-serif
              text-5xl
              md:text-6xl
              leading-[0.95]
            "
          >
            Let us Create
            <br />
            Something Extraordinary.
          </h2>

          <p
            className="
              mt-8
              text-neutral-600
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Tell us about your vision and we will get in
            touch to begin crafting your bespoke piece.
          </p>

        </div>

        {/* Form */}

        <form className="space-y-10">

          {/* Name */}

          <div>
            <label
              htmlFor="name"
              className="
                block
                uppercase
                tracking-[0.25em]
                text-xs
                mb-3
              "
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="
                w-full
                bg-transparent
                border-b
                border-neutral-300
                py-4
                outline-none
                focus:border-black
                transition
              "
            />
          </div>

          {/* Email */}

          <div>
            <label
              htmlFor="email"
              className="
                block
                uppercase
                tracking-[0.25em]
                text-xs
                mb-3
              "
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="
                w-full
                bg-transparent
                border-b
                border-neutral-300
                py-4
                outline-none
                focus:border-black
              "
            />
          </div>

          {/* Phone */}

          <div>
            <label
              htmlFor="phone"
              className="
                block
                uppercase
                tracking-[0.25em]
                text-xs
                mb-3
              "
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="+254..."
              className="
                w-full
                bg-transparent
                border-b
                border-neutral-300
                py-4
                outline-none
                focus:border-black
              "
            />
          </div>

          {/* Service */}

          <div>
            <label
              htmlFor="service"
              className="
                block
                uppercase
                tracking-[0.25em]
                text-xs
                mb-3
              "
            >
              Service Required
            </label>

            <select
              id="service"
              className="
                w-full
                bg-transparent
                border-b
                border-neutral-300
                py-4
                outline-none
                focus:border-black
              "
            >
              <option>Bespoke Tailoring</option>
              <option>Bridal Wear</option>
              <option>Evening Wear</option>
              <option>Corporate Styling</option>
            </select>
          </div>

          {/* Budget */}

          <div>
            <label
              htmlFor="budget"
              className="
                block
                uppercase
                tracking-[0.25em]
                text-xs
                mb-3
              "
            >
              Estimated Budget
            </label>

            <input
              id="budget"
              type="text"
              placeholder="KES 50,000+"
              className="
                w-full
                bg-transparent
                border-b
                border-neutral-300
                py-4
                outline-none
                focus:border-black
              "
            />
          </div>

          {/* Message */}

          <div>
            <label
              htmlFor="message"
              className="
                block
                uppercase
                tracking-[0.25em]
                text-xs
                mb-3
              "
            >
              Tell Us About Your Vision
            </label>

            <textarea
              id="message"
              rows={6}
              placeholder="Describe your project..."
              className="
                w-full
                bg-transparent
                border-b
                border-neutral-300
                py-4
                outline-none
                resize-none
                focus:border-black
              "
            />
          </div>

          {/* Submit */}

          <div className="pt-6">

            <button
              type="submit"
              className="
                inline-flex
                items-center
                justify-center
                min-w-[280px]
                px-12
                py-5
                bg-black
                text-white
                uppercase
                tracking-[0.25em]
                text-xs
                border
                border-black
                hover:bg-transparent
                hover:text-black
                transition-all
                duration-300
              "
            >
              Request Consultation
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}