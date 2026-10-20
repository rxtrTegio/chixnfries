import type { Metadata } from "next";
import { Bowlby_One, Poppins } from "next/font/google";
import "./globals.css";

const bowlby = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bowlby",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chix n' Fries | Crispy. Saucy. Loaded.",
  description:
    "Chix n' Fries — the home of crispy fried chicken, loaded fries, wraps, shawarma, and nachos. Order now and pick your sauce!",
  keywords: ["fried chicken", "chix n fries", "fast food", "fries", "chicken wraps"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bowlby.variable} ${poppins.variable}`}>
      <body className="font-poppins bg-cream text-darkgreen antialiased">
        {children}
      </body>
    </html>
  );
}
