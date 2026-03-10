import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Home;