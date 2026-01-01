import Hero from "../sections/Hero";
import ServicesPreview from "../sections/ServicesPreview";
import Features from "../sections/Features";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  return (
    <main id="main" className="pt-20">
      <Hero />
      <ServicesPreview />
      <Features />
      <Testimonials />
    </main>
  );
}
