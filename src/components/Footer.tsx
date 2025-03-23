
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex justify-start mb-4">
              <img src="https://i.imgur.com/fjHClAn.png" alt="Program Davrane" className="h-10 w-auto" />
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Program Davrane is a lottery platform offering participants the opportunity to win 
              fully-funded international trips through a transparent monthly draw.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook className="h-4 w-4" />} href="#" label="Facebook" />
              <SocialLink icon={<Twitter className="h-4 w-4" />} href="#" label="Twitter" />
              <SocialLink icon={<Instagram className="h-4 w-4" />} href="#" label="Instagram" />
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'How It Works', path: '/#how-it-works' },
                { name: 'Winners', path: '/winners' },
                { name: 'FAQs', path: '/faq' },
                { name: 'Terms & Conditions', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-voyage-primary text-sm flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Destinations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Destinations
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'United States', path: '/destinations/us' },
                { name: 'United Kingdom', path: '/destinations/uk' },
                { name: 'Germany', path: '/destinations/germany' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-voyage-primary text-sm flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mt-6 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Contact Us', path: '/contact' },
                { name: 'Help Center', path: '/help' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-voyage-primary text-sm flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-voyage-primary mr-3 mt-0.5" />
                <span className="text-gray-600 text-sm">contact@voyagechance.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-voyage-primary mr-3 mt-0.5" />
                <span className="text-gray-600 text-sm">+123 456 7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-voyage-primary mr-3 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  123 Lottery Street, City, Country
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Program Davrane. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm text-gray-600 hover:text-voyage-primary">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-voyage-primary">
              Privacy
            </Link>
            <Link to="/cookies" className="text-sm text-gray-600 hover:text-voyage-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-8 h-8 rounded-full bg-white shadow-subtle flex items-center justify-center hover:bg-voyage-primary hover:text-white transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
