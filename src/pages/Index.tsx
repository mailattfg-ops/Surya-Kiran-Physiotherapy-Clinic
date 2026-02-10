import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SlidingPainCards from "@/components/home/SlidingPainCards";
import ContactSection from "@/components/home/ContactSection";
import DoctorsSection from "@/components/home/DoctorsSection";


import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AssociatesSection from "@/components/home/AssociatesSection";


const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SlidingPainCards />


      <WhyChooseUsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <AssociatesSection />
      <ContactSection />

    </Layout>
  );
};

export default Index;
