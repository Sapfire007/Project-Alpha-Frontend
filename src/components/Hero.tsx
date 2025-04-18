
import { ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Animated quantum grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.15)_0,rgba(26,31,44,0)_50%)]"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,255,225,0.05)_0%,rgba(0,94,255,0.05)_100%)]"></div>
        
        {/* Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-quantum-glow animate-pulse"></div>
        <div className="absolute top-1/3 left-2/3 w-3 h-3 rounded-full bg-quantum animate-pulse"></div>
        <div className="absolute top-2/3 left-1/2 w-2 h-2 rounded-full bg-quantum-blue animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-quantum-glow animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-3/5 space-y-6 md:pr-12">
          <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block animate-fade-in">Revolutionizing</span>
            <span className="block animate-fade-in" style={{ animationDelay: "300ms" }}>Diagnostics with</span>
            <span className="block text-quantum animate-fade-in quantum-text-glow" style={{ animationDelay: "600ms" }}>Quantum Intelligence.</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl animate-fade-in-slow" style={{ animationDelay: "900ms" }}>
            Welcome to BloodLine.AI — the AI-powered virtual hospital that reads your blood reports and delivers drug recommendations powered by quantum algorithms and reinforcement learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-slow" style={{ animationDelay: "1200ms" }}>
            <Button 
              className="quantum-button flex items-center gap-2 group"
              onClick={() => scrollToSection('how-it-works')}
            >
              Get Started
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-quantum text-quantum hover:bg-quantum/10 flex items-center gap-2 group"
              onClick={() => scrollToSection('demo')}
            >
              <Play size={18} className="fill-quantum" />
              <span>See it in Action</span>
            </Button>
          </div>
        </div>
        
        <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Animated 3D molecule */}
            <div className="absolute inset-0 rounded-full bg-quantum/10 animate-pulse"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64">
              {/* Center sphere */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-quantum-glow/80 to-quantum-blue/80 shadow-[0_0_20px_rgba(0,255,225,0.5)] animate-pulse"></div>
              
              {/* Orbiting spheres */}
              <div className="absolute w-full h-full animate-rotate-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-quantum-glow shadow-[0_0_10px_rgba(0,255,225,0.5)]"></div>
              </div>
              
              <div className="absolute w-full h-full animate-rotate-slow" style={{ animationDelay: "-5s" }}>
                <div className="absolute top-1/2 right-0 transform translate-y-1/2 w-8 h-8 rounded-full bg-quantum shadow-[0_0_10px_rgba(155,135,245,0.5)]"></div>
              </div>
              
              <div className="absolute w-full h-full animate-rotate-slow" style={{ animationDelay: "-10s" }}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-quantum-blue shadow-[0_0_10px_rgba(0,94,255,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-quantum flex items-center justify-center">
          <div className="w-1 h-3 bg-quantum rounded-full animate-fade-in-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
