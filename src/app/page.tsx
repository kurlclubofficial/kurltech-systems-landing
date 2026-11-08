import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ProductSpotlight } from "@/components/sections/product-spotlight";
import { Services } from "@/components/sections/services";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
        <ProductSpotlight />
        <Services />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
