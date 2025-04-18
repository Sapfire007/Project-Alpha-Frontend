
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Home, Layers, HelpCircle, Users, DollarSign, LogIn, LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on component mount
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'features', 'how-it-works', 'about', 'pricing'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Logout action
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      setIsLoggedIn(false);
      
      // If currently on a restricted page, redirect to home
      if (window.location.pathname !== '/') {
        navigate('/');
      }
    } else {
      // Login action
      navigate('/login');
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gradient-header border-b border-quantum/20 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-quantum animate-pulse"></div>
          <span className="font-orbitron text-xl font-bold text-white">
            Blood<span className="text-quantum">Line.AI</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className={`nav-link flex items-center gap-1 ${activeSection === 'home' ? 'active' : ''}`}
          >
            <Home size={18} />
            <span>Home</span>
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className={`nav-link flex items-center gap-1 ${activeSection === 'features' ? 'active' : ''}`}
          >
            <Layers size={18} />
            <span>Features</span>
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className={`nav-link flex items-center gap-1 ${activeSection === 'how-it-works' ? 'active' : ''}`}
          >
            <HelpCircle size={18} />
            <span>How It Works</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`nav-link flex items-center gap-1 ${activeSection === 'about' ? 'active' : ''}`}
          >
            <Users size={18} />
            <span>About</span>
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className={`nav-link flex items-center gap-1 ${activeSection === 'pricing' ? 'active' : ''}`}
          >
            <DollarSign size={18} />
            <span>Pricing</span>
          </button>
        </div>
        
        <div>
          <Button 
            className="quantum-button flex items-center gap-2"
            onClick={handleAuthAction}
          >
            {isLoggedIn ? (
              <>
                <LogOut size={18} />
                <span>Logout</span>
              </>
            ) : (
              <>
                <LogIn size={18} />
                <span>Login</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
