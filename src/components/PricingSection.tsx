
import { Check, CreditCard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <section className="py-20 px-6 bg-voyage-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable Participation</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A small investment for the chance to win an international adventure
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-elevated overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-voyage-accent flex items-center justify-center">
                <Ticket className="h-10 w-10 text-voyage-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-2">Monthly Entry</h3>
            <div className="flex justify-center items-baseline mb-6">
              <span className="text-3xl font-bold">2,000</span>
              <span className="text-lg text-gray-600 ml-1">FCFA</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                'One entry into the monthly draw',
                'Chance to win international trip',
                'Full visa support if selected',
                'Covered travel expenses',
                'Accommodation included'
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-voyage-success" />
                  </div>
                  <span className="ml-3 text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/register">
              <Button className="w-full rounded-full py-6 bg-voyage-primary hover:bg-voyage-secondary btn-press">
                Join Now
              </Button>
            </Link>
          </div>
          
          <div className="p-6 bg-gray-50">
            <p className="text-sm text-center text-gray-600 mb-4">Accepted payment methods</p>
            <div className="flex justify-center gap-6">
              <div className="flex items-center">
                <Smartphone className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm font-medium">Mobile Money</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm font-medium">Bank Card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ticket = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M13 5v2" />
    <path d="M13 17v2" />
    <path d="M13 11v2" />
  </svg>
);

export default PricingSection;
