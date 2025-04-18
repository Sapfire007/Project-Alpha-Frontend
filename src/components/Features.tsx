
import { Atom, Pill, Brain, FileText, Sparkles } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="quantum-card group">
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-quantum/10 flex items-center justify-center
                       group-hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-500">
          <Icon className="w-8 h-8 text-quantum-glow group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      
      <h3 className="text-xl font-orbitron font-semibold mb-3 text-center group-hover:text-quantum transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300 text-center">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum-Powered Analysis",
      description: "BloodLine.AI uses quantum-enhanced kernels to detect deep biomarker patterns in blood test data."
    },
    {
      icon: Pill,
      title: "RL-based Drug Discovery",
      description: "Our AI doctor suggests real-time drug candidates via reinforcement learning—tailored to your unique results."
    },
    {
      icon: Brain,
      title: "Multi-Persona AI Doctor",
      description: "Trained on specialized datasets with quantum models, the AI doctor mimics expert behaviors for precision insights."
    },
    {
      icon: FileText,
      title: "Seamless Report Management",
      description: "Easily upload and manage blood reports. Our virtual receptionist handles everything securely."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(155,135,245,0.15),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Advanced <span className="text-quantum quantum-text-glow">Features</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the future of medical diagnostics with our state-of-the-art quantum-powered technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
