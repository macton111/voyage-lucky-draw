
import { DollarSign, Ticket, Gift, Plane } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const Step = ({ icon, title, description, step }: StepProps) => (
  <div className="relative flex flex-col items-center text-center p-6">
    {/* Step number */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-voyage-primary text-white flex items-center justify-center text-xs font-medium">
      {step}
    </div>
    
    {/* Icon */}
    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-voyage-accent text-voyage-primary mb-4">
      {icon}
    </div>
    
    {/* Content */}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm max-w-xs">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Join our monthly lottery in four simple steps and get a chance to win an international trip
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step
            icon={<DollarSign className="h-8 w-8" />}
            title="Make a Contribution"
            description="Pay just 2,000 FCFA per month via Mobile Money or bank card to participate"
            step={1}
          />
          
          <Step
            icon={<Ticket className="h-8 w-8" />}
            title="Get Your Ticket"
            description="Receive a digital ticket confirming your entry into the monthly draw"
            step={2}
          />
          
          <Step
            icon={<Gift className="h-8 w-8" />}
            title="Monthly Draw"
            description="Winners are selected randomly every month with complete transparency"
            step={3}
          />
          
          <Step
            icon={<Plane className="h-8 w-8" />}
            title="Win a Trip"
            description="Winners receive a fully-funded trip to the US, UK, or Germany"
            step={4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
