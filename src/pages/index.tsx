import HeroSection from "@/components/pages/home/HeroSection";
import OurHeros from "@/components/pages/home/OurHeros";
import SearchDonor from "@/components/pages/home/SearchDonor";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <SearchDonor />
      <OurHeros />
    </section>
  );
}
