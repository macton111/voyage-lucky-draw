
import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  country: string;
  city: string;
  image: string;
  description?: string;
}

const DestinationCard = ({ country, city, image, description }: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="rounded-2xl overflow-hidden bg-white shadow-elevated transition-all duration-300 hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={`${city}, ${country}`} 
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{city}</span>
          </div>
          <h3 className="text-xl font-bold">{country}</h3>
        </div>
      </div>
      
      {description && (
        <div className="p-6">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};

export default DestinationCard;
