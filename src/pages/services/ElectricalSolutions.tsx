import { Link } from 'react-router-dom';
import {
  Zap,
  Shield,
  Settings,
  Gauge,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Wrench,
  TrendingUp,
} from 'lucide-react';

export default function ElectricalSolutions() {
  const services = [
    {
      icon: Settings,
      title: 'Panel Board Manufacturing',
      description: 'Custom-designed panel boards manufactured to exact specifications.',
      features: ['Custom design', 'MDB & SDB', 'PCC & MCC', 'Testing & commissioning'],
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Industrial Wiring',
      description: 'Complete electrical wiring for all applications.',
      features: ['Factory wiring', 'Conduit installation', 'Lighting circuits', 'Cable routing'],
      image: 'https://images.pexels.com/photos/8961183/pexels-photo-8961183.jpeg',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Gauge,
      title: '3-Phase Power',
      description: 'Expert three-phase electrical systems installation.',
      features: ['Load balancing', 'Transformers', 'Power factor', 'Energy metering'],
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Settings,
      title: 'Control Panels',
      description: 'Advanced control panels and automation systems.',
      features: ['PLC panels', 'SCADA integration', 'MCB & RCD', 'Smart metering'],
      image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileCheck,
      title: 'Safety Testing',
      description: 'Comprehensive safety testing and compliance.',
      features: ['Installation testing', 'Earth resistance', 'Load analysis', 'Certification'],
      image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg',
      color: 'from-emerald-500 to-cyan-500',
    },
    {
      icon: Wrench,
      title: 'Maintenance Services',
      description: 'Preventive and corrective maintenance solutions.',
      features: ['Regular inspections', 'Emergency repairs', 'Upgrades', '24/7 support'],
      image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const certifications = [
    { icon: Shield, title: 'ISO 9001:2015', subtitle: 'Certified Quality' },
    { icon: FileCheck, title: 'Licensed', subtitle: 'Electrical Contractors' },
    { icon: Shield, title: 'NFPA 70E', subtitle: 'Compliant' },
    { icon: TrendingUp, title: 'IEC Standards', subtitle: 'Adherence' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950 opacity-50"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-sm border border-cyan-400/50 rounded-3xl mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
              <Zap className="w-16 h-16 text-cyan-400" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
                Electrical Solutions
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional electrical solutions for industrial, commercial, and residential applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <cert.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
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
            <span className="inline-block px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-bold mb-6 border border-cyan-400/30">
              OUR EXPERTISE
            </span>
            <h2 className="text-5xl font-bold text-white mb-4">
              Comprehensive Electrical Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cutting-edge solutions powered by expertise and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-3 animate-fade-in"
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
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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

                  <div className="flex items-center text-cyan-400 font-semibold group-hover:gap-3 transition-all">
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
              { value: '500+', label: 'Projects Completed', icon: TrendingUp },
              { value: '15+', label: 'Years Experience', icon: Shield },
              { value: '100%', label: 'Safety Compliance', icon: FileCheck },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <Wrench className="w-20 h-20 mx-auto mb-6 text-white animate-bounce" style={{ animationDuration: '2s' }} />
              <h3 className="text-4xl font-bold mb-4 text-white">Need Electrical Solutions?</h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Our certified electrical experts are ready to help with your project, big or small
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 font-bold text-lg"
                >
                  Request a Quote
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
