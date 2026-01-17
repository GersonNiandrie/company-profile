import IntroSection from "@/components/services/ServicesIntro";
import ProductListSection from "@/components/services/ServicesList";
import ProductTestimonials
 from "@/components/services/ServicesTestimonials";
export default function ProductsPage() {
  return (
    <main>
      <IntroSection />
      <ProductListSection />
      <ProductTestimonials />
    </main>
  );
}
