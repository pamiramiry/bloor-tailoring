import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import ServicesTeaser from "@/components/ServicesTeaser";
import PhotoGrid from "@/components/PhotoGrid";
import ProcessStrip from "@/components/ProcessStrip";
import Reviews from "@/components/Reviews";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <ServicesTeaser />
      <PhotoGrid />
      <ProcessStrip />
      <Reviews />
      <CtaBanner />
    </>
  );
}
