"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  
  { name: "Portfolio", href: "/portfolio" },
  { name: "Custom Orders", href: "/custom-orders" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Adjust state when route changes without using useEffect to avoid cascading renders
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-gold/20">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="group">
              <h1 className="font-serif text-3xl tracking-widest text-foreground flex items-center">
                K<span className="text-gold">tS</span>
              </h1>

              <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-muted -mt-1">
                Kiki the{" "}
                <span className="text-gold/70">Seamstress</span>
              </p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[10px] uppercase tracking-[0.35em] transition-colors duration-300 hover:text-gold ${
                    pathname === link.href ? "text-gold" : "text-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/custom-orders"
                className="btn-primary min-w-[220px] px-10 mx-0"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden flex flex-col justify-center items-end gap-[6px] w-8 h-8 group focus:outline-none relative z-[70]"
              data-state={isOpen ? "open" : "closed"}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line w-4" />
              <span className="hamburger-line" />
            </button>

          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className="menu-overlay"
        data-state={isOpen ? "open" : "closed"}
      />

      {/* Mobile Drawer */}
      <aside
        className="mobile-menu-drawer"
        data-state={isOpen ? "open" : "closed"}
      >
        <div className="flex flex-col justify-between min-h-screen p-8 pt-28">

          {/* Navigation Links */}
          <nav className="flex flex-col gap-8">

            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group"
              >
                <span
                  className="
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    text-gold
                    mb-2
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`font-serif text-3xl sm:text-4xl transition-colors duration-300 ${
                    pathname === link.href ? "text-gold" : "text-foreground"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}

          </nav>

          {/* Bottom Area */}
          <div className="pt-10 mt-10 border-t border-border">

            <Link
              href="/custom-orders"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full px-8 mx-0"
            >
              Book Consultation
            </Link>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Kendi Dorcas Studio
              </p>

              <p className="mt-2 text-sm text-muted/60">
                Luxury Fashion Atelier
              </p>
            </div>

          </div>

        </div>
      </aside>
    </>
  );
  
}