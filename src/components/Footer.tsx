
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-footer py-16 relative overflow-hidden">
      {/* Background particle elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-quantum-glow animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-quantum animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-quantum-blue animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="h-8 w-8 rounded-full bg-quantum animate-pulse"></div>
            <span className="font-orbitron text-xl font-bold text-white">
              Blood<span className="text-quantum">Line.AI</span>
            </span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="social-icon">
              <Github size={20} />
            </a>
            <a href="#" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-quantum/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-quantum-glow transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-quantum-glow transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-quantum-glow transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-quantum-glow transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">News</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Cookies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-quantum-glow transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-quantum/20 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 BloodLine.AI — Built with ❤️, ML, RL & Quantum Precision by Team QBits
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
