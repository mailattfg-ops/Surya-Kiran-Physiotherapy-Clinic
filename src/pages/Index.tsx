import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SlidingPainCards from "@/components/home/SlidingPainCards";
import DoctorsSection from "@/components/home/DoctorsSection";

import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";


const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SlidingPainCards />
      <DoctorsSection />

      <WhyChooseUsSection />
      <TestimonialsSection />

    </Layout>
  );
};

export default Index;
