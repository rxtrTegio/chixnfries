"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Chix n' Fries hero food spread"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Orange gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto fade-up">
        {/* Tag */}
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/30">
          🍗 Now Open — Order by Call
        </span>

        <h1 className="font-display text-white text-5xl sm:text-6xl md:text-8xl leading-none mb-6 drop-shadow-2xl">
          Crispy.{" "}
          <span className="text-orange-300">Saucy.</span>{" "}
          <br className="hidden sm:block" />
          Loaded.
        </h1>

        <p className="text-white/90 text-lg sm:text-xl font-medium mb-10 max-w-lg mx-auto leading-relaxed">
          The crunchiest chicken in town — choose your mix-in, pick your sauce,
          and dig in.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#menu"
            className="btn-orange px-8 py-3.5 text-base font-bold rounded-full w-full sm:w-auto text-center"
          >
            🍟 See Menu
          </Link>
          <a
            href="tel:09324711606"
            className="btn-outline px-8 py-3.5 text-base font-bold rounded-full w-full sm:w-auto text-center"
          >
            📞 Call 0932 471 1606
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 float-anim">
          <svg
            className="mx-auto opacity-60"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
