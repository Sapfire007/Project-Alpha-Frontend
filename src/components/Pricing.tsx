
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

type PlanFeature = {
  text: string;
  available: boolean;
};

type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeature[];
  buttonText: string;
  isPopular?: boolean;
};

const PricingCard = ({ 
  plan, 
  isYearly 
}: { 
  plan: PricingPlan; 
  isYearly: boolean; 
}) => {
  return (
    <div className={`quantum-card flex flex-col h-full ${
      plan.isPopular ? 'border-quantum quantum-border-glow' : ''
    }`}>
      {plan.isPopular && (
        <div className="bg-quantum text-white text-xs font-semibold py-1 px-3 rounded-t-md self-center">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-orbitron font-semibold mb-2">{plan.name}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{plan.description}</p>
        
        <div className="mb-6">
          <div className="flex items-end gap-1">
            <span className="text-3xl font-orbitron font-bold">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            </span>
            <span className="text-gray-400 mb-1">
              /{isYearly ? 'year' : 'month'}
            </span>
          </div>
          {isYearly && (
            <div className="text-quantum-glow text-sm mt-1">
              Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} yearly
            </div>
          )}
        </div>
        
        <div className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`mr-3 ${feature.available ? 'text-quantum-glow' : 'text-gray-600'}`}>
                <Check size={18} />
              </div>
              <span className={feature.available ? 'text-gray-300' : 'text-gray-500'}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${
            plan.isPopular ? 'quantum-button' : 'bg-quantum-dark/50 hover:bg-quantum-dark/80 text-white'
          }`}
        >
          {plan.buttonText}
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  const plans: PricingPlan[] = [
    {
      name: "Free",
      description: "Basic access to BloodLine.AI for individual users",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: "3 reports per month", available: true },
        { text: "Basic blood analysis", available: true },
        { text: "Anomaly detection", available: true },
        { text: "Email support", available: true },
        { text: "Priority processing", available: false },
        { text: "Advanced drug recommendations", available: false },
        { text: "API access", available: false },
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      description: "For healthcare professionals and small clinics",
      monthlyPrice: 49,
      yearlyPrice: 470,
      features: [
        { text: "Unlimited reports", available: true },
        { text: "Advanced blood analysis", available: true },
        { text: "Anomaly detection", available: true },
        { text: "24/7 priority support", available: true },
        { text: "Priority processing", available: true },
        { text: "Advanced drug recommendations", available: true },
        { text: "API access", available: false },
      ],
      buttonText: "Upgrade to Pro",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For hospitals and large healthcare organizations",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        { text: "Unlimited reports", available: true },
        { text: "Advanced blood analysis", available: true },
        { text: "Anomaly detection", available: true },
        { text: "24/7 dedicated support", available: true },
        { text: "Priority processing", available: true },
        { text: "Advanced drug recommendations", available: true },
        { text: "Full API access", available: true },
      ],
      buttonText: "Contact Sales",
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,225,0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Simple <span className="text-quantum quantum-text-glow">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for your needs
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-quantum-dark"
              onClick={() => setIsYearly(!isYearly)}
            >
              <span
                className={`${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 rounded-full bg-white transform transition-transform duration-200`}
              />
            </button>
            <span className={`ml-3 ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-quantum-glow text-xs">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <PricingCard plan={plan} isYearly={isYearly} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
