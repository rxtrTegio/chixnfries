import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import DrinksSection from "@/components/DrinksSection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <DrinksSection />
      <VisitSection />
      <Footer />
    </main>
  );
}
