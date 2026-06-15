"use client";

export default function ContactForm() {
  return (
    <form className="space-y-8">

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
            border-b
            border-neutral-300
            bg-transparent
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
          Email
        </label>

        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="
            w-full
            border-b
            border-neutral-300
            bg-transparent
            py-4
            outline-none
            focus:border-black
            transition
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
          Service
        </label>

        <select
          id="service"
          className="
            w-full
            border-b
            border-neutral-300
            bg-transparent
            py-4
            outline-none
            focus:border-black
          "
        >
          <option>Bespoke Tailoring</option>
          <option>Bridal Wear</option>
          <option>Corporate Styling</option>
          <option>Consultation</option>
        </select>
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
          Message
        </label>

        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your vision..."
          className="
            w-full
            border-b
            border-neutral-300
            bg-transparent
            py-4
            outline-none
            resize-none
            focus:border-black
            transition
          "
        />
      </div>

      {/* Submit */}

      <button
        type="submit"
        className="
          inline-flex
          items-center
          justify-center
          min-w-[260px]
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
        Send Inquiry
      </button>

    </form>
  );
}