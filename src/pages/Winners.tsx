
import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import WinnerCard from '@/components/WinnerCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Winner {
  id: number;
  name: string;
  country: string;
  destination: string;
  date: string;
  image: string;
}

const mockWinners: Winner[] = [
  {
    id: 1,
    name: 'Aminata Diallo',
    country: 'Senegal',
    destination: 'United States',
    date: '2023-07',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Emmanuel Okafor',
    country: 'Nigeria',
    destination: 'United Kingdom',
    date: '2023-06',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sarah Mensah',
    country: 'Ghana',
    destination: 'Germany',
    date: '2023-05',
    image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2576&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Kofi Adu',
    country: 'Ghana',
    destination: 'United States',
    date: '2023-04',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Fatou Sow',
    country: 'Senegal',
    destination: 'Germany',
    date: '2023-03',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Jean Biyogo',
    country: 'Cameroon',
    destination: 'United Kingdom',
    date: '2023-02',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Ama Darko',
    country: 'Ghana',
    destination: 'United States',
    date: '2023-01',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Omar Diop',
    country: 'Senegal',
    destination: 'Germany',
    date: '2022-12',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=2575&auto=format&fit=crop'
  },
  {
    id: 9,
    name: 'Chinwe Okoro',
    country: 'Nigeria',
    destination: 'United Kingdom',
    date: '2022-11',
    image: 'https://images.unsplash.com/photo-1519011985187-444d62641929?q=80&w=2564&auto=format&fit=crop'
  }
];

const Winners = () => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [filteredWinners, setFilteredWinners] = useState<Winner[]>([]);
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [destinationFilter, setDestinationFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    const fetchWinners = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWinners(mockWinners);
      setFilteredWinners(mockWinners);
      setIsLoading(false);
    };
    
    fetchWinners();
  }, []);
  
  useEffect(() => {
    let filtered = [...winners];
    
    if (countryFilter !== 'all') {
      filtered = filtered.filter(winner => winner.country === countryFilter);
    }
    
    if (destinationFilter !== 'all') {
      filtered = filtered.filter(winner => winner.destination === destinationFilter);
    }
    
    setFilteredWinners(filtered);
  }, [countryFilter, destinationFilter, winners]);
  
  const formatMonth = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };
  
  // Get unique countries and destinations for filters
  const countries = ['all', ...new Set(winners.map(winner => winner.country))];
  const destinations = ['all', ...new Set(winners.map(winner => winner.destination))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-64 bg-voyage-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-voyage-primary to-voyage-secondary opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Winners</h1>
            <p className="text-xl max-w-2xl">
              Meet the lucky individuals who won their dream trip through Voyage Chance
            </p>
          </div>
        </section>
        
        {/* Filters and Winners */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl font-bold mb-2">Previous Winners</h2>
              <p className="text-gray-600">Browse through our past lottery winners</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-48">
                <Select value={countryFilter} onValueChange={setCountryFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>
                        {country === 'all' ? 'All Countries' : country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-48">
                <Select value={destinationFilter} onValueChange={setDestinationFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map(destination => (
                      <SelectItem key={destination} value={destination}>
                        {destination === 'all' ? 'All Destinations' : destination}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-pulse space-y-4">
                <div className="h-12 w-64 bg-gray-200 rounded-md"></div>
                <div className="h-64 w-80 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          )}
          
          {/* Winners Grid */}
          {!isLoading && (
            <>
              {filteredWinners.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No winners match your filters.</p>
                  <p className="text-gray-500 mt-2">Try adjusting your filter criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredWinners.map(winner => (
                    <WinnerCard
                      key={winner.id}
                      name={winner.name}
                      country={winner.country}
                      destination={winner.destination}
                      date={formatMonth(winner.date)}
                      image={winner.image}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Winners;
