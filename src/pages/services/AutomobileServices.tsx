import { Link } from 'react-router-dom';
import {
  Car,
  Zap,
  Battery,
  Wrench,
  CheckCircle,
  ArrowRight,
  Shield,
  TrendingUp,
  Settings,
  Gauge,
} from 'lucide-react';

export default function AutomobileServices() {
  const services = [
    {
      icon: Zap,
      title: 'EV Charging Solutions',
      description: 'Complete EV charging infrastructure installation and maintenance.',
      features: ['Fast charging stations', 'Home charging setup', 'Fleet solutions', 'Smart grid integration'],
      image: 'https://images.pexels.com/photos/8945970/pexels-photo-8945970.jpeg',
      color: 'from-green-500 to-cyan-500',
    },
    {
      icon: Battery,
      title: 'Battery Management Systems',
      description: 'Advanced BMS for electric and hybrid vehicles.',
      features: ['Cell balancing', 'Thermal management', 'Diagnostic tools', 'Performance optimization'],
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Wrench,
      title: 'Electric Motor Repairs',
      description: 'Specialized repair and maintenance for electric motors.',
      features: ['Motor diagnostics', 'Winding replacement', 'Bearing service', 'Performance testing'],
      image: 'https://images.pexels.com/photos/355365/pexels-photo-355365.jpeg',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Settings,
      title: 'Powertrain Integration',
      description: 'Complete powertrain solutions for electric vehicles.',
      features: ['Motor & inverter', 'Transmission systems', 'Control systems', 'Integration testing'],
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Gauge,
      title: 'Vehicle Diagnostics',
      description: 'Comprehensive diagnostic and monitoring services.',
      features: ['OBD scanning', 'Performance analysis', 'Fault detection', 'Real-time monitoring'],
      image: 'https://images.pexels.com/photos/3714896/pexels-photo-3714896.jpeg',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Car,
      title: 'Maintenance & Support',
      description: 'Complete maintenance and after-sales support.',
      features: ['Regular servicing', 'Parts replacement', 'Emergency support', '24/7 helpline'],
      image: 'https://images.pexels.com/photos/3714894/pexels-photo-3714894.jpeg',
      color: 'from-pink-500 to-red-500',
    },
  ];

  const certifications = [
    { icon: Shield, title: 'ISO 9001:2015', subtitle: 'Quality Certified' },
    { icon: CheckCircle, title: 'OEM Certified', subtitle: 'Partnership' },
    { icon: Zap, title: 'EV Specialist', subtitle: 'Certified' },
    { icon: TrendingUp, title: 'Industry Standard', subtitle: 'Compliance' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-black to-cyan-950 opacity-50"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-green-500/30 to-cyan-500/30 backdrop-blur-sm border border-green-400/50 rounded-3xl mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
              <Car className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-green-500">
                Automobile Services
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete automotive solutions for electric and conventional vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <cert.icon className="w-10 h-10 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-lg font-bold text-white mb-1">{cert.title}</p>
                <p className="text-sm text-gray-400">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-6 py-3 bg-green-500/20 text-green-400 rounded-full text-sm font-bold mb-6 border border-green-400/30">
              OUR SERVICES
            </span>
            <h2 className="text-5xl font-bold text-white mb-4">
              Complete Automobile Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expert service and support for all your automotive needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="absolute top-4 right-4 p-4 bg-black/50 backdrop-blur-md rounded-2xl border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-green-400 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-black to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { value: '2000+', label: 'Vehicles Serviced', icon: TrendingUp },
              { value: '50+', label: 'Certified Technicians', icon: Shield },
              { value: '98%', label: 'Customer Satisfaction', icon: CheckCircle },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-r from-green-600 via-cyan-600 to-green-600 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <Car className="w-20 h-20 mx-auto mb-6 text-white animate-bounce" style={{ animationDuration: '2s' }} />
              <h3 className="text-4xl font-bold mb-4 text-white">Need Automobile Services?</h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Our expert technicians are ready to service and maintain your vehicle with professional care
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-600 rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 font-bold text-lg"
                >
                  Book Service
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all font-bold text-lg"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
