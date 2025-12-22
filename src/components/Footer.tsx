import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Automobile Services',
    'Solar Systems',
    'Electrical Solutions',
    'Product Trading',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/19FtSVUDmD/?mibextid=wwXIfr%0A', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/elexcores?igsh=b3JlOWd0bThucmV5&utm_source=qr', label: 'Instagram' },
  ];

  return (
    <footer className="bg-black text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="text-xl font-bold text-white">ELEXCORE</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Automobile • Solar • Electrical • Product
            </p>
            <p className="text-sm text-gray-400">
              Providing comprehensive automobile and electrical solutions for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">No 69/D, Makawita, Ja-Ela.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm hover:text-cyan-400 transition-colors">
                  +94 773 46 7754
                </a>
                <a href="tel:+1234567890" className="text-sm hover:text-cyan-400 transition-colors">
                  +94 773 69 7754 
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:info@elexcore.com"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  elexcores@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-600 transition-all hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} ELEXCORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
