import { Metadata } from "next";
import Hero from "@/components/content/home/Hero";
import Features from "@/components/content/home/Features";
import About from "@/components/content/home/About";
import Testimonials from "@/components/content/home/Testimonials";
import Contact from "@/components/content/home/Contact";

export const metadata: Metadata = {
  title: "Cuisine Cart | Taste of Home",
  description:
    "Cuisine Cart connects international students, workers, and food enthusiasts to home-cooked meals made with love and authenticity.",
};

export default function Home() {
  return (
    <>
      <div className="fixed bottom-4 right-4">
        <a
          href="#hero"
          className="text-white p-2 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700">
          ↑
        </a>
      </div>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
