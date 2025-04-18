import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Demo from '@/components/Demo';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-quantum-bg text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <Demo />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
