"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-glass shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.jpg"
            alt="Chix n' Fries Logo"
            width={44}
            height={44}
            className="rounded-full object-cover border-2 border-orange-400"
          />
          <span className="font-display text-white text-xl leading-none hidden sm:block tracking-wide">
            Chix <span className="text-orange-400">n'</span> Fries
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "Menu", href: "#menu" },
            { label: "Drinks", href: "#drinks" },
            { label: "Visit", href: "#visit" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-white/85 hover:text-white font-semibold text-sm transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:09324711606"
            className="btn-orange px-5 py-2 text-sm font-bold rounded-full"
          >
            📞 Call to Order
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden navbar-glass border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {[
            { label: "Menu", href: "#menu" },
            { label: "Drinks", href: "#drinks" },
            { label: "Visit", href: "#visit" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold text-base py-1 border-b border-white/10"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:09324711606"
            className="btn-orange px-5 py-2.5 text-sm font-bold rounded-full text-center mt-1"
          >
            📞 Call to Order
          </a>
        </div>
      )}
    </header>
  );
}
