import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Home,
  Building,
  Battery,
  Cpu,
  Zap,
  ArrowRight,
  Power,
  CheckCircle,
  TrendingUp,
  Clock,
  Smartphone,
} from 'lucide-react';

export default function PowerBackup() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { id: 0, name: 'Home Backup', icon: Home, color: 'from-blue-500 to-cyan-500' },
    { id: 1, name: 'Office Solutions', icon: Building, color: 'from-purple-500 to-pink-500' },
    { id: 2, name: 'Industrial UPS', icon: Shield, color: 'from-orange-500 to-red-500' },
    { id: 3, name: 'Smart Systems', icon: Cpu, color: 'from-green-500 to-emerald-500' },
  ];

  const services = [
    [
      {
        title: 'Whole-Home Backup',
        description: 'Complete power backup for your entire home during outages.',
        features: ['Automatic transfer', 'Silent operation', 'Solar integration', 'Mobile monitoring'],
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      },
      {
        title: 'Essential Load Backup',
        description: 'Targeted backup for critical appliances and systems.',
        features: ['Cost-effective', 'Quick installation', 'Expandable', 'Battery options'],
        image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg',
      },
    ],
    [
      {
        title: 'Rack-Mounted UPS',
        description: 'Professional power protection for server rooms and data centers.',
        features: ['Modular design', 'Hot-swappable batteries', 'Remote monitoring', 'Scalable capacity'],
        image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg',
      },
      {
        title: 'Network Protection',
        description: 'Specialized UPS systems for network equipment and IT infrastructure.',
        features: ['Line-interactive', 'Surge protection', 'AVR technology', 'Management software'],
        image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg',
      },
    ],
    [
      {
        title: 'Three-Phase UPS',
        description: 'Industrial-grade power backup for manufacturing and production.',
        features: ['N+1 redundancy', 'High capacity', 'Generator compatible', '24/7 support'],
        image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg',
      },
      {
        title: 'Energy Storage',
        description: 'Large-scale battery banks for grid services and peak shaving.',
        features: ['Grid stabilization', 'Peak demand management', 'Frequency regulation', 'Microgrid ready'],
        image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
      },
    ],
    [
      {
        title: 'Smart Power Management',
        description: 'AI-powered systems to optimize energy usage and reduce costs.',
        features: ['Load prioritization', 'Predictive analytics', 'Cost tracking', 'Cloud-based'],
        image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg',
      },
      {
        title: 'IoT Integration',
        description: 'Connected power systems with real-time monitoring and control.',
        features: ['Mobile app', 'Alerts & notifications', 'Usage analytics', 'Remote control'],
        image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg',
      },
    ],
  ];

  const benefits = [
    { icon: Clock, title: '<5ms Transfer', desc: 'Lightning-fast switchover' },
    { icon: Smartphone, title: 'Remote Control', desc: 'Monitor from anywhere' },
    { icon: Battery, title: 'Long Runtime', desc: 'Extended backup duration' },
    { icon: TrendingUp, title: '99.9% Uptime', desc: 'Maximum reliability' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950 opacity-50"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-blue-400/50 rounded-full mb-8">
              <Shield className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
                Power Backup Solutions
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Uninterrupted power solutions with advanced energy storage technology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 text-center hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-lg font-bold text-white mb-1">{benefit.title}</p>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-3 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold mb-6 border border-blue-400/30">
              EXPLORE BY CATEGORY
            </span>
            <h2 className="text-5xl font-bold text-white mb-4">
              Choose Your Solution
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select a category to explore tailored power backup solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeTab === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                    : 'bg-slate-900 text-gray-400 hover:text-white border border-slate-700 hover:border-slate-600'
                }`}
              >
                <category.icon className={`w-6 h-6 transition-transform ${activeTab === category.id ? 'scale-110' : 'group-hover:scale-110'}`} />
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services[activeTab].map((service, index) => {
              const CategoryIcon = categories[activeTab].icon;
              return (
              <div
                key={index}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${categories[activeTab].color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="absolute top-4 right-4 p-4 bg-black/50 backdrop-blur-md rounded-2xl border border-white/20">
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-700">
                    <div className="flex items-center text-blue-400 font-semibold group-hover:gap-3 transition-all cursor-pointer">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-black to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-full h-full">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  >
                    <Zap
                      className="text-white/20 animate-pulse"
                      style={{
                        width: `${20 + Math.random() * 20}px`,
                        height: `${20 + Math.random() * 20}px`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-20 items-center">
              <div>
                <Power className="w-24 h-24 text-white mb-6 animate-pulse" style={{ animationDuration: '2s' }} />
                <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Never Lose Power Again
                </h3>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Protect your critical systems and ensure business continuity with our reliable, cutting-edge power backup solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 font-bold text-lg"
                  >
                    Get Custom Solution
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all font-bold text-lg"
                  >
                    All Services
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '99.9%', label: 'System Uptime', icon: TrendingUp },
                  { value: '<5ms', label: 'Transfer Time', icon: Clock },
                  { value: '10 Years', label: 'Battery Life', icon: Battery },
                  { value: '24/7', label: 'Support', icon: Shield },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:-translate-y-2 transition-all"
                  >
                    <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
