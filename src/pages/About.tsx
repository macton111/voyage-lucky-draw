
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Heart, Globe, Users, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-voyage-primary">Our Mission</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Learn about why we created Program Davrane and how we're making dreams come true across Senegal.
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="border-none shadow-subtle overflow-hidden">
              <div className="bg-voyage-primary/10 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="bg-voyage-primary/20 p-5 rounded-full">
                    <Lightbulb className="h-10 w-10 text-voyage-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                    <p className="text-gray-700">
                      Program Davrane was created with a simple yet powerful vision: to give every Senegalese an opportunity to realize their dreams of traveling abroad. We believe that travel is not just a luxury, but a transformative experience that opens minds, builds connections, and changes lives. 
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Heart className="h-5 w-5 mr-2 text-voyage-primary" />
                    Community Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our lottery is designed to be accessible to everyone, regardless of background or income level. With affordable entry prices, we've created a fair system that gives everyone an equal chance to win and experience the world.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Globe className="h-5 w-5 mr-2 text-voyage-primary" />
                    Global Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    By providing trips to countries across the globe, we're creating opportunities for cultural exchange, education, and personal growth that might otherwise be inaccessible to many Senegalese citizens.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="h-5 w-5 mr-2 text-voyage-primary" />
                  A Fair Chance for Everyone
                </CardTitle>
                <CardDescription>
                  Our transparent lottery system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We founded Program Davrane on principles of fairness and transparency. Our lottery system ensures:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Completely random selection with public draws</li>
                  <li>Affordable entry fees that make participation possible for everyone</li>
                  <li>Full transparency in winner selection and prize distribution</li>
                  <li>Regular draws to provide multiple opportunities throughout the year</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Sparkles className="h-5 w-5 mr-2 text-voyage-primary" />
                  Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Since our founding, we've helped dozens of Senegalese citizens experience the world beyond our borders. From students who've gotten educational opportunities to entrepreneurs who've formed international business connections, our winners have returned with new perspectives and opportunities.
                </p>
                <p className="text-gray-700">
                  Each winner becomes an ambassador, sharing their experiences and inspiring others in their communities. In this way, the impact of Program Davrane extends far beyond the individual winners to enrich Senegalese society as a whole.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
