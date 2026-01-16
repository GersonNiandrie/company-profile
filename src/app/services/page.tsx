import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesList from "@/components/services/ServicesList";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";

export default function ServicesPage() {
  return (
    <main>
      <ServicesIntro />
      <ServicesList />
      <ServicesTestimonials />
    </main>
  );
}
