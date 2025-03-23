
import { Award, Calendar, MapPin } from 'lucide-react';

interface WinnerCardProps {
  name: string;
  country: string;
  destination: string;
  date: string;
  image: string;
}

const WinnerCard = ({ name, country, destination, date, image }: WinnerCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        {/* Winner Image */}
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Award Badge */}
        <div className="absolute top-4 right-4">
          <div className="glass rounded-full p-2 shadow-subtle">
            <Award className="h-5 w-5 text-voyage-primary" />
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-voyage-primary" />
            <span>From {country}</span>
          </div>
          
          <div className="flex items-center">
            <Plane className="h-4 w-4 mr-2 text-voyage-primary" />
            <span>Won trip to {destination}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-voyage-primary" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
