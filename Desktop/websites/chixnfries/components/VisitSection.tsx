"use client";
import Image from "next/image";

export default function VisitSection() {
  return (
    <section id="visit" className="py-20 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange text-sm font-bold uppercase tracking-widest">
            Find Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-darkgreen mt-2">
            Come &amp; Visit
          </h2>
          <p className="text-darkgreen/60 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Walk in or call ahead — we&apos;re ready to serve your crunch fix.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Photo collage */}
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/menu-photos.jpg"
              alt="Chix n' Fries restaurant photos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="font-display text-white text-xl sm:text-2xl drop-shadow-lg">
                Real Food, Real Fast 🔥
              </span>
            </div>
          </div>

          {/* Info card */}
          <div className="flex flex-col gap-5">
            {/* Hours */}
            <div className="menu-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🕐</span>
                <h3 className="font-display text-xl text-darkgreen">Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-darkgreen/80">
                <div className="flex justify-between">
                  <span className="font-semibold">Mon – Sat</span>
                  <span>10:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span>11:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="menu-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📞</span>
                <h3 className="font-display text-xl text-darkgreen">Contact</h3>
              </div>
              <a
                href="tel:09324711606"
                className="font-display text-2xl text-orange hover:text-orange-dark transition-colors"
              >
                0932 471 1606
              </a>
              <p className="text-xs text-darkgreen/50 mt-1">Call or text to order</p>
            </div>

            {/* CTA */}
            <a
              href="tel:09324711606"
              className="btn-orange px-8 py-4 text-base font-bold rounded-full text-center w-full"
            >
              📞 Call to Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
