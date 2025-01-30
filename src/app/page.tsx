
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { LogoTicker } from "@/sections/logo-ticker";
import { ProductShowcase } from "@/sections/product-showcase";
import { Pricing } from "@/sections/pricing";
import { Testimonials } from "@/sections/testimonials";
import { CallToAction } from "@/sections/call-to-action";
import { Footer } from "@/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}







