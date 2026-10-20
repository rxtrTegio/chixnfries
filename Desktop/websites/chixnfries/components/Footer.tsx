export default function Footer() {
  return (
    <footer className="bg-darkgreen text-white/70 py-10 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <span className="font-display text-white text-2xl tracking-wide">
          Chix <span className="text-orange-400">n'</span> Fries
        </span>
        <p className="text-sm max-w-xs">
          Crispy. Saucy. Loaded. — order by phone today.
        </p>
        <a
          href="tel:09324711606"
          className="text-orange-400 font-bold hover:text-orange-300 transition-colors text-sm"
        >
          📞 0932 471 1606
        </a>
        <div className="border-t border-white/10 w-full pt-4 text-xs text-white/40">
          © {new Date().getFullYear()} Chix n' Fries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
