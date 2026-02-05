import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SlidingPainCards from "@/components/home/SlidingPainCards";
import ContactSection from "@/components/home/ContactSection";
import DoctorsSection from "@/components/home/DoctorsSection";


import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";


const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SlidingPainCards />


      <WhyChooseUsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <ContactSection />

    </Layout>
  );
};

export default Index;
