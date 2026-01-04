import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about', hasSubmenu: true },
    { name: 'Product Trading', path: '/product-trading' },
    { name: 'Contact', path: '/contact' },
  ];

  const aboutLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  const serviceLinks = [
    { name: 'All Services', path: '/services' },
    { name: 'Electrical Solutions', path: '/services/electrical-solutions' },
    { name: 'Automobile Services', path: '/services/automobile-services' },
    // { name: 'EV & Battery Solutions', path: '/services/ev-battery' },
    { name: 'Solar Systems', path: '/services/solar-power' },
    // { name: 'Power Backup', path: '/services/power-backup' },
    { name: 'Smart Home', path: '/services/smart-home' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-black via-slate-950 to-blue-950/80 shadow-lg shadow-cyan-500/10' : 'bg-gradient-to-r from-black/95 via-slate-950/95 to-blue-950/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">ELEXCORE</h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors relative group ${
                location.pathname === '/'
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full ${
                  location.pathname === '/' ? 'w-full' : ''
                }`}
              ></span>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors relative group flex items-center ${
                  location.pathname === '/about' || location.pathname === '/projects'
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                About Us
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full ${
                    location.pathname === '/about' || location.pathname === '/projects' ? 'w-full' : ''
                  }`}
                ></span>
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-slate-900 rounded-lg shadow-xl border border-slate-700 overflow-hidden transition-all duration-200 ${
                  isAboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {aboutLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                        : 'text-gray-300 hover:bg-slate-800'
                    } ${link.name === 'About Us' ? 'border-b border-slate-700' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors relative group flex items-center ${
                  location.pathname.startsWith('/services')
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full ${
                    location.pathname.startsWith('/services') ? 'w-full' : ''
                  }`}
                ></span>
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-slate-900 rounded-lg shadow-xl border border-slate-700 overflow-hidden transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                        : 'text-gray-300 hover:bg-slate-800'
                    } ${link.name === 'All Services' ? 'border-b border-slate-700' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/product-trading"
              className={`text-sm font-medium transition-colors relative group ${
                location.pathname === '/product-trading'
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Product Trading
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full ${
                  location.pathname === '/product-trading' ? 'w-full' : ''
                }`}
              ></span>
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors relative group ${
                location.pathname === '/contact'
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Contact
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full ${
                  location.pathname === '/contact' ? 'w-full' : ''
                }`}
              ></span>
            </Link>

            <Link
              to="/contact"
              className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[700px] border-t border-slate-800' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-4 space-y-2 bg-gradient-to-b from-slate-950 to-blue-950">
          <Link
            to="/"
            className={`block px-4 py-2 rounded-lg transition-colors ${
              location.pathname === '/'
                ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                : 'text-gray-300 hover:bg-slate-800'
            }`}
          >
            Home
          </Link>

          <div className="pt-2">
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-300 hover:bg-slate-800"
            >
              <span className={location.pathname === '/about' || location.pathname === '/projects' ? 'text-cyan-400 font-medium' : ''}>
                About Us
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all ${isAboutOpen ? 'max-h-96' : 'max-h-0'}`}>
              {aboutLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block pl-8 pr-4 py-2 text-sm rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                      : 'text-gray-400 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-300 hover:bg-slate-800"
            >
              <span className={location.pathname.startsWith('/services') ? 'text-cyan-400 font-medium' : ''}>
                Services
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
              {serviceLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block pl-8 pr-4 py-2 text-sm rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                      : 'text-gray-400 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/product-trading"
            className={`block px-4 py-2 rounded-lg transition-colors ${
              location.pathname === '/product-trading'
                ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                : 'text-gray-300 hover:bg-slate-800'
            }`}
          >
            Product Trading
          </Link>

          <Link
            to="/contact"
            className={`block px-4 py-2 rounded-lg transition-colors ${
              location.pathname === '/contact'
                ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                : 'text-gray-300 hover:bg-slate-800'
            }`}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="block bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-center font-medium mt-4"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
