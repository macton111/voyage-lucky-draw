
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-subtle' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-voyage-primary"
          aria-label="Voyage Chance Home"
        >
          <Globe className="h-6 w-6" />
          <span className="text-xl font-semibold tracking-tight hidden sm:inline-block">
            Voyage Chance
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
          <NavLink to="/winners" isActive={isActive('/winners')}>Winners</NavLink>
          {user && (
            <>
              <NavLink to="/dashboard" isActive={isActive('/dashboard')}>Dashboard</NavLink>
              <NavLink to="/profile" isActive={isActive('/profile')}>Profile</NavLink>
            </>
          )}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <Button 
              variant="outline" 
              className="rounded-full px-5 hover:bg-voyage-accent"
              onClick={logout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log out
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="rounded-full px-5 hover:bg-voyage-accent">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button className="rounded-full px-5 bg-voyage-primary hover:bg-voyage-secondary text-white">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-elevated animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            <MobileNavLink to="/" isActive={isActive('/')}>Home</MobileNavLink>
            <MobileNavLink to="/winners" isActive={isActive('/winners')}>Winners</MobileNavLink>
            
            {user ? (
              <>
                <MobileNavLink to="/dashboard" isActive={isActive('/dashboard')}>Dashboard</MobileNavLink>
                <MobileNavLink to="/profile" isActive={isActive('/profile')}>Profile</MobileNavLink>
                
                <div className="pt-4 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full"
                    onClick={logout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Log out
                  </Button>
                </div>
              </>
            ) : (
              <div className="pt-4 flex flex-col space-y-3 border-t border-gray-100">
                <Link to="/login">
                  <Button variant="outline" className="w-full rounded-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full rounded-full bg-voyage-primary">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, isActive, children }: { to: string, isActive: boolean, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
      isActive 
        ? 'text-voyage-primary bg-voyage-accent' 
        : 'text-gray-700 hover:text-voyage-primary hover:bg-gray-50'
    }`}
  >
    {children}
  </Link>
);

// Mobile Navigation Link
const MobileNavLink = ({ to, isActive, children }: { to: string, isActive: boolean, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${
      isActive 
        ? 'text-voyage-primary bg-voyage-accent' 
        : 'text-gray-700 hover:text-voyage-primary hover:bg-gray-50'
    }`}
  >
    {children}
  </Link>
);

export default Header;
