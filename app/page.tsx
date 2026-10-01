import Hero from "@/components/home/Hero";
import Capabilities from "@/components/home/Capabilities";
import SelectedWork from "@/components/home/SelectedWork";
import SystemsApproach from "@/components/home/SystemsApproach";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import Tools from "@/components/home/Tools";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

// Production deployment test

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <SelectedWork />
      <SystemsApproach />
      <ExperiencePreview />
      <Tools />
      <AboutPreview />
      <Services />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
