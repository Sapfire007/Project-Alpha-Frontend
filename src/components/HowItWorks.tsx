
import { Upload, Search, Zap } from 'lucide-react';

const TimelineItem = ({ 
  step, 
  title, 
  description, 
  icon: Icon 
}: { 
  step: number; 
  title: string; 
  description: string; 
  icon: React.ElementType; 
}) => {
  return (
    <div className="timeline-item animate-fade-in" style={{ animationDelay: `${step * 200}ms` }}>
      <div className="timeline-dot">
        <Icon size={16} className="text-white" />
      </div>
      <div className="ml-8">
        <span className="inline-block bg-quantum px-2 py-1 rounded text-xs font-semibold mb-2">
          Step {step}
        </span>
        <h3 className="text-xl font-orbitron font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Report",
      description: "The receptionist AI receives your blood report in any format - PDF, image, or lab data feed."
    },
    {
      icon: Search,
      title: "Diagnosis & Analysis",
      description: "Quantum-powered AI scans the report, detects anomalies, and compares with millions of historical cases."
    },
    {
      icon: Zap,
      title: "AI Drug Recommendation",
      description: "RL agent suggests best-fit treatments instantly, personalized to your exact biomarker profile."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,94,255,0.15),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            How It <span className="text-quantum quantum-text-glow">Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our advanced AI system processes your reports in three simple steps
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <TimelineItem
              key={index}
              step={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
