"use client";
import Image from "next/image";

const SAUCE_BADGES = [
  { label: "OG Sauce", cls: "badge-og" },
  { label: "Conquezo", cls: "badge-conquezo" },
  { label: "Hot Honey", cls: "badge-hothoney" },
];

function SauceBadges() {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {SAUCE_BADGES.map((s) => (
        <span key={s.label} className={`sauce-badge ${s.cls}`}>
          {s.label}
        </span>
      ))}
    </div>
  );
}

interface MenuItemProps {
  name: string;
  price: number | string;
  desc?: string;
  showSauces?: boolean;
  highlight?: boolean;
}

function MenuItem({ name, price, desc, showSauces, highlight }: MenuItemProps) {
  return (
    <div
      className={`menu-card p-4 flex flex-col gap-1 ${
        highlight ? "ring-2 ring-orange-400/50" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-darkgreen text-sm leading-tight flex-1">{name}</h3>
        <span className="price-badge shrink-0">₱{price}</span>
      </div>
      {desc && (
        <p className="text-xs text-darkgreen/60 leading-snug">{desc}</p>
      )}
      {showSauces && <SauceBadges />}
    </div>
  );
}

function CategoryHeader({ label }: { label: string }) {
  return (
    <div className="col-span-full mb-1 mt-4 first:mt-0">
      <span className="cat-pill">{label}</span>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-orange text-sm font-bold uppercase tracking-widest">
            What We Serve
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-darkgreen mt-2">
            Food Menu
          </h2>
          <p className="text-darkgreen/60 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Pick your mix-in, choose your combo, and don't forget your sauces.
          </p>
        </div>

        {/* Menu image banner */}
        <div className="relative w-full h-52 sm:h-64 rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="/menu-food.jpg"
            alt="Chix n' Fries food menu spread"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="font-display text-white text-2xl sm:text-3xl drop-shadow-lg">
              Freshly Made, Every Order 🍗
            </span>
          </div>
        </div>

        {/* Sauce explainer */}
        <div className="bg-white rounded-2xl border-2 border-orange-200 p-4 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="font-display text-darkgreen text-base shrink-0">
            🔥 Choose Your 2 Sauces:
          </span>
          <SauceBadges />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* MIX-INS */}
          <CategoryHeader label="🥡 Mix-Ins" />
          <MenuItem name="Chix n' Rice" price={105} desc="Crispy chicken served with steamed rice" showSauces />
          <MenuItem name="Chix n' Fries" price={115} desc="Crispy chicken + golden fries" showSauces />
          <MenuItem name="Chix n' Wrap" price={115} desc="Chicken wrapped in a soft tortilla" showSauces />
          <MenuItem name="Chix n' Shawarma" price={125} desc="Chicken in a shawarma-style fold" showSauces />
          <MenuItem name="Chix n' Nachos" price={125} desc="Chicken served over crunchy nachos" showSauces />

          {/* COMBOS */}
          <CategoryHeader label="🎉 Combos — All ₱135" />
          <MenuItem
            name="Combo Trio 1"
            price={135}
            desc="1 piece chicken with fries & rice"
            showSauces
            highlight
          />
          <MenuItem
            name="Combo Trio 2"
            price={135}
            desc="1 piece chicken with fries & nachos"
            showSauces
            highlight
          />
          <MenuItem
            name="Combo Trio 3"
            price={135}
            desc="Chicken wrap with fries"
            showSauces
            highlight
          />

          {/* CHIXN TENDERS */}
          <CategoryHeader label="🍗 Chixn Tenders" />
          <MenuItem name="3 Pcs with Fries" price={205} desc="Three golden tenders + fries" showSauces />
          <MenuItem name="4 Pcs with 2 Dips" price={205} desc="Four juicy tenders + 2 dipping sauces" showSauces />
          <MenuItem name="6 Pcs with 3 Dips" price={305} desc="Six tenders + 3 dipping sauces — party size!" showSauces />

          {/* EXTRAS */}
          <CategoryHeader label="➕ Extras" />
          <MenuItem name="Dip — OG / Conquezo" price={15} desc="Side dipping sauce" />
          <MenuItem name="Dip — Hot Honey" price={20} desc="Sweet & spicy honey dip" />
          <MenuItem name="Veggies" price={25} desc="Fresh side vegetables" />
          <MenuItem name="Rice" price={25} desc="Steamed white rice" />
        </div>
      </div>
    </section>
  );
}
