import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="max-w-md">
      <div className="atelier-label">
        <p className="label-main">Contact</p>
        <p className="label-sub">Connect</p>
      </div>

      <h2 className="heading-lg text-neutral-900 mb-8">
        Let's Begin
        <br />
        Your Journey.
      </h2>

      <p
        className="
          mt-8
          text-neutral-600
          leading-relaxed
          text-lg
        "
      >
        Whether you're looking for a bespoke garment,
        bridal masterpiece, or a consultation,
        we'd love to hear your vision.
      </p>

      {/* Contact Details */}

      <div className="mt-12 space-y-10">

        <div>
          <h3
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              mb-2
            "
          >
            Studio
          </h3>

          <p className="text-neutral-600">
            Nairobi, Kenya
          </p>
        </div>

        <div>
          <h3
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              mb-2
            "
          >
            Email
          </h3>

          <a
            href="mailto:hello@kendidorcasstudio.com"
            className="text-neutral-600 hover:text-black transition"
          >
            hello@kendidorcasstudio.com
          </a>
        </div>

        <div>
          <h3
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              mb-2
            "
          >
            Phone
          </h3>

          <a
            href="tel:+254700000000"
            className="text-neutral-600 hover:text-black transition"
          >
            +254 700 000 000
          </a>
        </div>

        <div>
          <h3
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              mb-2
            "
          >
            Follow
          </h3>

          <div className="flex gap-6">

            <Link
              href="#"
              className="text-neutral-600 hover:text-black transition"
            >
              Instagram
            </Link>

            <Link
              href="#"
              className="text-neutral-600 hover:text-black transition"
            >
              Pinterest
            </Link>

            <Link
              href="#"
              className="text-neutral-600 hover:text-black transition"
            >
              Facebook
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}