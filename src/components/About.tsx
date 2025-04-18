
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatWithNisha = () => {
    setIsChatOpen(true);
    
    // Create the ElevenLabs Convai element if it doesn't exist
    if (!document.querySelector('elevenlabs-convai')) {
      const convaiElement = document.createElement('elevenlabs-convai');
      convaiElement.setAttribute('agent-id', 'gMSQsbN82OlbCp4YAZX5');
      document.body.appendChild(convaiElement);
    } else {
      // If it exists but was hidden, make it visible
      const convaiElement = document.querySelector('elevenlabs-convai');
      if (convaiElement) {
        (convaiElement as HTMLElement).style.display = 'block';
      }
    }
  };

  return (
    <section id="about" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(155,135,245,0.2),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            About <span className="text-quantum quantum-text-glow">BloodLine.AI</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet our AI assistant who will guide you through the process
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto glassmorphism rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-quantum/30 to-quantum-dark/10 p-8 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* AI Avatar - Stylized female figure with Indian cultural elements */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-quantum to-quantum-blue animate-pulse opacity-30"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-quantum-glow/80 to-quantum/50 flex items-center justify-center">
                  <Sparkles size={40} className="text-white animate-float" />
                </div>
                
                {/* Orbiting particles */}
                <div className="absolute w-full h-full animate-rotate-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-quantum-glow shadow-[0_0_10px_rgba(0,255,225,0.7)]"></div>
                </div>
                
                <div className="absolute w-full h-full animate-rotate-slow" style={{ animationDelay: "-7s" }}>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-quantum-blue shadow-[0_0_10px_rgba(0,94,255,0.7)]"></div>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-2xl font-orbitron font-semibold mb-2 flex items-center gap-2">
                  <span className="text-quantum-glow">Nisha</span>
                  <span className="text-white">- Your Virtual AI Receptionist</span>
                </h3>
                <div className="h-1 w-20 bg-gradient-button rounded-full mb-6"></div>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="animate-fade-in">
                  Nisha is your first point of contact at BloodLine.AI. As our virtual AI receptionist, she securely manages your reports and coordinates with our AI doctor.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Trained on quantum algorithms and reinforcement learning, Nisha ensures you get the fastest, most personalized care possible.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                  She can process your blood reports in any format, communicate in multiple languages, and provide real-time updates on your analysis.
                </p>
                
                <div className="pt-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
                  <Button 
                    className="quantum-button flex items-center gap-2 group"
                    onClick={handleChatWithNisha}
                  >
                    <Sparkles size={18} className="text-white" />
                    Chat with Nisha
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
