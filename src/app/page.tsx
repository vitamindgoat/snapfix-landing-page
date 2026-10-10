import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Features } from "@/components/site/features";
import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
