"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

  return (
    <>
      <header className="fixed top-0 left-5 right-5 z-50 bg-white/90 backdrop-blur-md border-b border-[#c5a059]/150">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 ">

            {/* Logo */}
            <Link href="/" className="group">
              <h1 className="font-serif text-3xl tracking-widest text-neutral-900 flex items-center">
                K<span className="text-[#c5a059]">D</span>
              </h1>
              <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-neutral-500 -mt-1">
                KENDI DORCAS <span className="text-[#c5a059]/60">STUDIO</span>
              </p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-neutral-700 hover:text-black transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link  
              href="/custom-orders"  
              className="btn-primary min-w-[220px] text-center">
                Book Consultation
            </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[320px] bg-white z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">

          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-xl">
              Menu
            </h2>

            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="uppercase tracking-widest text-sm text-neutral-700"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/custom-orders"
            className="btn-primary mt-12 block text-center"
          >
            Book Consultation
          </Link>

        </div>
      </aside>
    </>
  );
}