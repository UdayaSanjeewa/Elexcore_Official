import { Link } from 'react-router-dom';
import {
  Battery,
  Zap,
  Activity,
  ArrowRight,
  Gauge,
  Wrench,
  ShoppingBag,
  TrendingUp,
  Award,
  Users,
} from 'lucide-react';

export default function EVBattery() {
  const services = [
    {
      icon: Wrench,
      title: 'Hybrid Battery Repair',
      description: 'Expert diagnosis and repair to restore performance and extend lifespan.',
      highlights: [
        'Complete diagnostics',
        'Module replacement',
        'Cooling system repair',
        'BMS servicing',
      ],
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg',
    },
    {
      icon: Activity,
      title: 'Battery Reconditioning',
      description: 'Restore capacity and performance of degraded battery packs.',
      highlights: [
        'Capacity restoration',
        'Deep cycle conditioning',
        'Cell rejuvenation',
        'Performance optimization',
      ],
      image: 'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg',
    },
    {
      icon: Gauge,
      title: 'Cell Balancing',
      description: 'Precision balancing for optimal performance and longevity.',
      highlights: [
        'Voltage testing',
        'Active balancing',
        'Charge equalization',
        'Thermal balancing',
      ],
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg',
    },
    {
      icon: Zap,
      title: 'EV Home Charger Installation',
      description: 'Professional Level 2 charger installation with smart features.',
      highlights: [
        'Fast charging setup',
        'Smart features',
        'Load management',
        'Mobile app integration',
      ],
      image: 'https://images.pexels.com/photos/7841419/pexels-photo-7841419.jpeg',
    },
    {
      icon: ShoppingBag,
      title: 'EV Accessories',
      description: 'Wide range of accessories and upgrade options.',
      highlights: [
        'Charging cables',
        'Adapters',
        'Range extenders',
        'Safety equipment',
      ],
      image: 'https://images.pexels.com/photos/4315570/pexels-photo-4315570.jpeg',
    },
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Save 70%', text: 'Compared to dealer replacement' },
    { icon: Activity, title: 'Extended Life', text: 'Add years to your battery' },
    { icon: Award, title: '2 Year Warranty', text: 'On all repairs' },
    { icon: Users, title: '300+ Served', text: 'Batteries serviced' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-black to-emerald-950 opacity-50"></div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-6">
                <Battery className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">EV & Hybrid Specialists</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Battery</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-green-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert battery services for electric and hybrid vehicles - repair, reconditioning, and charging solutions that save you money.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 font-bold"
                >
                  Book Diagnostic
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl hover:bg-white/20 transition-all font-semibold"
                >
                  All Services
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-3xl overflow-hidden border-4 border-green-500/30 shadow-2xl shadow-green-500/20">
                <img
                  src="https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg"
                  alt="EV Battery"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl border border-green-400/30 backdrop-blur-sm">
                <div className="text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-white/90 font-semibold">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center group-hover:border-green-400/50 group-hover:-translate-y-2 transition-all duration-300">
                  <benefit.icon className="w-10 h-10 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-white mb-1">{benefit.title}</div>
                  <div className="text-sm text-gray-400">{benefit.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Our EV Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions for all your electric vehicle needs
            </p>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group animate-fade-in ${index % 2 === 0 ? '' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`grid lg:grid-cols-2 gap-0 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-[400px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

                    <div className={`absolute inset-0 flex items-center ${index % 2 === 1 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                      <div className={`max-w-md ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-flex p-4 bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl mb-4 ${index % 2 === 1 ? 'float-right' : 'float-left'}`}>
                          <service.icon className="w-10 h-10 text-green-400" />
                        </div>
                        <div className="clear-both"></div>
                        <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                          {service.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-sm font-semibold text-green-400"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`bg-slate-950 h-[400px] flex items-center justify-center p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-center">
                      <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-emerald-500 mb-4">
                        0{index + 1}
                      </div>
                      <div className="text-gray-400 text-lg">Service #{index + 1}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-black to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-16 items-center">
              <div>
                <Battery className="w-20 h-20 text-white mb-6 animate-pulse" />
                <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Is Your EV Battery Underperforming?
                </h3>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Get a free diagnostic assessment and discover how we can restore your battery's performance and save you thousands.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 font-bold text-lg"
                  >
                    Free Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all font-bold text-lg"
                  >
                    All Services
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '300+', label: 'Batteries Serviced' },
                  { value: '95%', label: 'Success Rate' },
                  { value: '2 Years', label: 'Warranty' },
                  { value: '70%', label: 'Cost Savings' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
                  >
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
