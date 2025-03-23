
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import DestinationCard from '@/components/DestinationCard';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const destinations = [
  {
    country: "United States",
    city: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop",
    description: "Experience the vibrant energy of New York, where cultures collide amidst iconic skyscrapers and historic landmarks."
  },
  {
    country: "United Kingdom",
    city: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop",
    description: "Discover London's rich heritage, from royal palaces to modern art, all while enjoying its diverse culinary scene."
  },
  {
    country: "Germany",
    city: "Berlin",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2670&auto=format&fit=crop",
    description: "Immerse yourself in Berlin's revolutionary spirit, where history and innovation create a unique cultural landscape."
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Destinations Section */}
      <section className="py-20 px-6" id="destinations">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dream Destinations</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Every month, one lucky winner gets to experience one of these amazing destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.country}
                country={destination.country}
                city={destination.city}
                image={destination.image}
                description={destination.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <HowItWorks />
      <PricingSection />
      
      {/* Statistics Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Transforming lives through the power of international travel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '24+', label: 'Winners to date' },
              { value: '15K+', label: 'Participants' },
              { value: '3', label: 'Destination countries' },
              { value: '100%', label: 'Winner satisfaction' }
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 shadow-subtle text-center border border-gray-100">
                <span className="block text-4xl font-bold text-voyage-primary mb-2">{stat.value}</span>
                <span className="text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Winners' Stories</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Hear from those whose lives were changed by winning the Voyage Chance lottery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aminata Diallo",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop",
                quote: "Winning the trip to New York was a dream come true. The experience opened my eyes to a whole new world of possibilities.",
                country: "Senegal"
              },
              {
                name: "Emmanuel Okafor",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
                quote: "My journey to London changed my perspective on culture and history. I'm grateful for this life-changing opportunity.",
                country: "Nigeria"
              },
              {
                name: "Sarah Mensah",
                image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2576&auto=format&fit=crop",
                quote: "Berlin's vibrant art scene inspired me to pursue my passion for design. This trip was truly transformative.",
                country: "Ghana"
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-subtle border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
