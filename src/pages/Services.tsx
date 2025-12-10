import { Link } from 'react-router-dom';
import {
  Zap,
  Battery,
  Sun,
  Shield,
  Home,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'electrical',
      icon: Zap,
      title: 'Electrical Engineering Solutions',
      description:
        'Comprehensive electrical solutions including panel boards, industrial wiring, 3-phase distribution, and safety compliance.',
      link: '/services/electrical-engineering',
      color: 'blue',
      highlights: ['Panel Board Manufacturing', '3-Phase Systems', 'Safety Testing', 'Industrial Wiring'],
    },
    {
      id: 'ev-battery',
      icon: Battery,
      title: 'EV & Hybrid Battery Solutions',
      description:
        'Expert battery services including repair, reconditioning, cell balancing, BMS diagnostics, and EV charger installation.',
      link: '/services/ev-battery',
      color: 'green',
      highlights: ['Battery Repair', 'Cell Balancing', 'BMS Diagnostics', 'EV Charger Installation'],
    },
    {
      id: 'solar',
      icon: Sun,
      title: 'Solar Power & Renewable Energy',
      description:
        'Complete solar solutions for homes, commercial buildings, and factories with maintenance, storage, and monitoring systems.',
      link: '/services/solar-power',
      color: 'yellow',
      highlights: ['Solar Installation', 'Battery Storage', 'Performance Monitoring', 'Maintenance'],
    },
    {
      id: 'backup',
      icon: Shield,
      title: 'Power Backup & Energy Storage',
      description:
        'Reliable power backup systems including home UPS, industrial energy storage, lithium batteries, and smart power management.',
      link: '/services/power-backup',
      color: 'red',
      highlights: ['Home Backup', 'Industrial UPS', 'Lithium Systems', 'Smart Management'],
    },
    {
      id: 'smart-home',
      icon: Home,
      title: 'Smart Home & Automation',
      description:
        'Modern automation solutions with CCTV, smart lighting, IoT energy monitoring, and voice control integration.',
      link: '/services/smart-home',
      color: 'gray',
      highlights: ['CCTV Systems', 'Smart Lighting', 'IoT Monitoring', 'Voice Control'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive electrical and energy solutions tailored to your specific needs
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="group bg-slate-900 border-2 border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-cyan-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 bg-slate-800 text-gray-300 text-xs rounded-full border border-slate-600"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Our expert team is here to help you find the perfect solution for your requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105 font-medium"
              >
                Contact Our Experts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all font-medium"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose ELEXCORE for Your Project?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Free Consultation</h3>
              <p className="text-gray-300">
                We start with a detailed assessment of your requirements at no cost
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored designs and implementations specific to your needs
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                <span className="text-2xl font-bold text-cyan-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>
              <p className="text-gray-300">
                Comprehensive warranty and 24/7 support for complete peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
