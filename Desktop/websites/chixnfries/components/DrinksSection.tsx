"use client";
import Image from "next/image";

interface DrinkItemProps {
  name: string;
  price: number | string;
  desc?: string;
  emoji?: string;
}

function DrinkItem({ name, price, desc, emoji = "🥤" }: DrinkItemProps) {
  return (
    <div className="menu-card p-4 flex flex-col gap-1">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-lg">{emoji}</span>
          <h3 className="font-bold text-darkgreen text-sm leading-tight">{name}</h3>
        </div>
        <span className="price-badge shrink-0">₱{price}</span>
      </div>
      {desc && <p className="text-xs text-darkgreen/55 leading-snug pl-7">{desc}</p>}
    </div>
  );
}

function DrinkCategory({ label }: { label: string }) {
  return (
    <div className="col-span-full mb-1 mt-6 first:mt-0">
      <span className="cat-pill">{label}</span>
    </div>
  );
}

export default function DrinksSection() {
  return (
    <section id="drinks" className="py-20 bg-darkgreen relative overflow-hidden">
      {/* decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">
            Sip Something Good
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white mt-2">
            Drinks Menu
          </h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Cold drinks and frosty frappes to wash down that crunch.
          </p>
        </div>

        {/* Image banner */}
        <div className="relative w-full h-52 sm:h-64 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src="/menu-drinks.jpg"
            alt="Chix n' Fries drinks"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="font-display text-white text-2xl sm:text-3xl drop-shadow-lg">
              Cold &amp; Refreshing 🧊
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cold Drinks */}
          <DrinkCategory label="🥤 Cold Drinks" />
          <DrinkItem name="Softdrinks" price={25} desc="Coke, Sprite, or Royal" emoji="🥤" />
          <DrinkItem name="Bottled Water" price={15} desc="Still, chilled water" emoji="💧" />
          <DrinkItem name="Red Iced Tea" price={35} desc="Fruity red iced tea" emoji="🍵" />
          <DrinkItem name="Blue Lemonade" price={35} desc="Bright, tangy blue lemonade" emoji="🫐" />

          {/* Non-Coffee Frappe */}
          <DrinkCategory label="🧋 Non-Coffee Frappe" />
          <DrinkItem
            name="Cheesecake Frappe"
            price={135}
            desc="Rich, creamy cheesecake blended frappe"
            emoji="🍰"
          />
          <DrinkItem
            name="Milosaur Frappe"
            price={135}
            desc="Choco-malty milosaur goodness"
            emoji="🦖"
          />
          <DrinkItem
            name="Chocolate Chip Cream"
            price={135}
            desc="Velvety chocolate chip cream frappe"
            emoji="🍫"
          />
        </div>
      </div>
    </section>
  );
}
