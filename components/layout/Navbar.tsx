"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Collections", href: "/collections" },
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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#faf8f4]/90 backdrop-blur-md border-b border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="group">
              <h1 className="font-serif text-3xl tracking-widest text-neutral-900 flex items-center">
                K<span className="text-[#c5a059]">D</span>
              </h1>

              <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-neutral-500 -mt-1">
                KENDI DORCAS{" "}
                <span className="text-[#c5a059]/70">STUDIO</span>
              </p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    transition-colors
                    duration-300
                    hover:text-[#c5a059]
                    ${
                      pathname === link.href
                        ? "text-[#c5a059]"
                        : "text-neutral-500"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/custom-orders"
                className="
                  inline-flex
                  items-center
                  justify-center
                  min-w-[220px]
                  px-10
                  py-4
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
                Book Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="
                lg:hidden
                relative
                z-[70]
                flex
                items-center
                justify-center
                w-10
                h-10
              "
            >
              <span
                className={`
                  absolute
                  h-[2px]
                  w-6
                  bg-black
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "rotate-45"
                      : "-translate-y-2"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  h-[2px]
                  w-6
                  bg-black
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  h-[2px]
                  w-6
                  bg-black
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "-rotate-45"
                      : "translate-y-2"
                  }
                `}
              />
            </button>

          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          bg-black/40
          backdrop-blur-sm
          z-50
          lg:hidden
          transition-all
          duration-300
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Mobile Drawer */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-[60]
          h-screen
          w-full
          sm:w-[420px]
          bg-[#faf8f4]
          border-l
          border-[#c5a059]/20
          overflow-y-auto
          transition-transform
          duration-500
          ease-out
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
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
                    text-[#c5a059]
                    mb-2
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`
                    font-serif
                    text-3xl
                    sm:text-4xl
                    transition-colors
                    duration-300
                    ${
                      pathname === link.href
                        ? "text-[#c5a059]"
                        : "text-neutral-900"
                    }
                  `}
                >
                  {link.name}
                </span>
              </Link>
            ))}

          </nav>

          {/* Bottom Area */}
          <div className="pt-10 mt-10 border-t border-neutral-200">

            <Link
              href="/custom-orders"
              onClick={() => setIsOpen(false)}
              className="
                inline-flex
                items-center
                justify-center
                w-full
                px-8
                py-4
                bg-[#c5a059]
                text-white
                uppercase
                tracking-[0.25em]
                text-xs
                hover:bg-black
                transition-colors
                duration-300
              "
            >
              Book Consultation
            </Link>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Kendi Dorcas Studio
              </p>

              <p className="mt-2 text-sm text-neutral-400">
                Luxury Fashion Atelier
              </p>
            </div>

          </div>

        </div>
      </aside>
    </>
  );
}