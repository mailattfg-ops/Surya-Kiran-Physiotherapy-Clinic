import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SlidingPainCards from "@/components/home/SlidingPainCards";
import ContactSection from "@/components/home/ContactSection";
import DoctorsSection from "@/components/home/DoctorsSection";


import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AssociatesSection from "@/components/home/AssociatesSection";
import SEO from "@/components/layout/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Surya Kiran Physiotherapy | Best Physiotherapy Clinic in Kadakkal"
        description="Regain your mobility with Surya Kiran Physiotherapy Clinic. Expert care for back pain, sports injuries, and post-surgical recovery in Kadakkal, Kerala."
      />
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
