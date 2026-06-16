import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-10 md:py-12">

        {/* Top Footer */}
        <div className="grid gap-x-24 gap-y-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="inline-block ">
              <p className="font-serif text-3xl tracking-[0.15em] uppercase text-foreground">
                K<span className="text-gold">tS</span>
              </p>
              <p className="font-serif text-[10px] tracking-[0.5em] uppercase text-gold mt-2 border-t border-gold/30 pt-2">
                Kiki the Seamstress
              </p>
            </div>

            <p className="mt-10 text-sm text-muted leading-relaxed max-w-xs font-light tracking-wide">
              A luxury fashion and design studio creating timeless,
              sustainable, and bespoke garments for modern women.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="footer-heading">
              Navigation
            </h3>

            <ul className="footer-links-gap text-sm text-muted grid gap-y-2 font-light">
              <li>
                <Link href="/" className="hover:text-gold footer-interactive">Home</Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-gold footer-interactive">About</Link>
              </li>

              <li>
                <Link href="/collections" className="hover:text-gold footer-interactive">Collections</Link>
              </li>

              <li>
                <Link href="/portfolio" className="hover:text-gold footer-interactive">Portfolio</Link>
              </li>

              <li>
                <Link href="/custom-orders" className="hover:text-gold footer-interactive">
                  Custom Orders
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-gold footer-interactive">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading">
              Services
            </h3>

            <ul className="footer-links-gap text-sm text-muted font-light grid gap-y-2">
              <li>Custom Tailoring</li>
              <li>Bridal Wear</li>
              <li>Resort Wear</li>
              <li>Corporate Styling</li>
              <li>Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-heading">
              Contact
            </h3>

            <div className="footer-links-gap text-sm text-muted font-light">
              <p>Diani, Kenya</p>

              <p>+254 746 319 099</p>

              <p className="break-all">hello@kikitheseamstress.com</p>
            </div>

            <div className="flex gap-6 mt-10">

              <Link
                href="#"
                className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-gold footer-interactive"
              >
                Instagram
              </Link>

              <Link
                href="#"
                className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-gold footer-interactive"
              >
                Pinterest
              </Link>

              <Link
                href="#"
                className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-gold footer-interactive"
              >
                Facebook
              </Link>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              © {new Date().getFullYear()} Kiki the Seamstress. All rights reserved.
            </p>

            <div className="flex gap-12 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              <Link href="#" className="hover:text-gold footer-interactive">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-gold footer-interactive">
                Terms of Service
              </Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}