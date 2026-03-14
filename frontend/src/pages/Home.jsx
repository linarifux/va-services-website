import Hero from '../components/home/Hero';
import TechStack from '../components/home/TechStack';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      {/* 1. First impression and main hook */}
      <Hero />
      
      {/* 2. Immediate validation of technical skills */}
      <TechStack />
      
      {/* 3. Detailed breakdown of what you offer */}
      <ServicesSection />
      
      {/* 4. Why your agency is different (Operational Partners) */}
      <WhyChooseUs />
      
      {/* 5. The logical next step: How the engagement works */}
      <HowItWorks />
      
      {/* 6. Social proof to remove remaining doubts */}
      <Testimonials />
      
      {/* 7. Final push to contact form */}
      <CtaSection />
    </div>
  );
};

export default Home;