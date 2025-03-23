
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const destinations = [
  {
    country: "United States",
    city: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop"
  },
  {
    country: "United Kingdom",
    city: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop"
  },
  {
    country: "Germany",
    city: "Berlin",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2670&auto=format&fit=crop"
  }
];

const Hero = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Crossfade */}
      {destinations.map((destination, index) => (
        <div
          key={destination.country}
          className="absolute inset-0 transition-opacity duration-1000 bg-black"
          style={{ 
            opacity: currentDestination === index ? 1 : 0,
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${destination.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: currentDestination === index ? 1 : 0
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-block mb-4 px-3 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">
            <p className="text-white text-sm font-medium">
              Monthly draw for just 2,000 FCFA
            </p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Your Chance to Experience
            <span className="block mt-2 transition-all duration-500">
              {destinations[currentDestination].country}
            </span>
          </h1>
          
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl">
            Join our monthly lottery for a chance to win a fully-funded trip to one of three dream destinations. Your journey awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button size="lg" className="rounded-full px-6 py-6 bg-voyage-primary hover:bg-voyage-secondary btn-press">
                Join the Draw
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/winners">
              <Button size="lg" variant="outline" className="rounded-full px-6 py-6 bg-white bg-opacity-10 border-white border-opacity-30 text-white hover:bg-opacity-20 btn-press">
                See Past Winners
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Destination Indicators */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDestination(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentDestination === index 
                  ? 'w-10 bg-white' 
                  : 'w-2 bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`View ${destinations[index].country}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
