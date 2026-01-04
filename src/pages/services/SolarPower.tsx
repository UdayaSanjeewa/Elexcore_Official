import { Link } from 'react-router-dom';
import {
  Sun,
  Home,
  Building2,
  Factory,
  Battery,
  Zap,
  LineChart,
  ArrowRight,
  Leaf,
  TrendingUp,
  Shield,
  Sparkles,
} from 'lucide-react';

export default function SolarPower() {
  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Complete rooftop solar panel installation for homes with grid-tied or off-grid options.',
      stats: '25-year warranty',
      features: ['Custom design', 'High-efficiency panels', 'Net metering', 'Monitoring'],
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
    },
    {
      icon: Building2,
      title: 'Commercial Solar',
      description: 'Large-scale solar installations for offices, retail spaces, and commercial buildings.',
      stats: 'Up to 90% savings',
      features: ['Capacity planning', 'Rooftop & ground-mount', 'Tax incentives', 'ROI planning'],
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg',
    },
    {
      icon: Factory,
      title: 'Industrial Solutions',
      description: 'High-capacity solar power systems for factories and industrial facilities.',
      stats: 'KW-scale',
      features: ['Load optimization', 'Hybrid solutions', 'Peak management', 'Remote monitoring'],
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
    },
    {
      icon: Battery,
      title: 'Battery Storage',
      description: 'Energy storage solutions to store excess solar power for night or power outages.',
      stats: '10-year warranty',
      features: ['Lithium-ion systems', 'Backup power', 'Smart management', 'Expandable'],
      image: 'https://cdn.prod.website-files.com/6620bd5a80a662c1e00c6cc1/68b79f470aa7b82a7a5d330b_sigenergy%20battery.jpeg',
    },
  ];

  const benefits = [
    { icon: Leaf, title: 'Environmental', desc: 'Reduce carbon footprint', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, title: 'Energy Independence', desc: 'Generate your own power', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, title: 'Cost Savings', desc: 'Save up to 90% on bills', color: 'from-yellow-500 to-orange-500' },
    { icon: Sparkles, title: 'Property Value', desc: 'Increase value by 4%', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 backdrop-blur-sm border border-yellow-400/50 rounded-full mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
            <Sun className="w-20 h-20 text-yellow-400" />
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
              Solar Power
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Harness the power of the sun with comprehensive solar energy solutions for homes, businesses, and industries
          </p>

          <div className="flex flex-wrap gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-yellow-400/50 hover:-translate-y-2 transition-all duration-300"
              >
                <benefit.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-white font-bold mb-1">{benefit.title}</div>
                <div className="text-sm text-gray-400">{benefit.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 font-bold text-lg"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-6 border border-yellow-400/30">
              OUR SOLUTIONS
            </span>
            <h2 className="text-5xl font-bold text-white mb-4">
              Comprehensive Solar Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From design to installation, we handle everything
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-yellow-500 transform -translate-x-1/2 hidden lg:block"></div>

            {services.map((service, index) => (
              <div
                key={index}
                className={`relative mb-24 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-1/2 top-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-black transform -translate-x-1/2 z-10 hidden lg:flex">
                  {index + 1}
                </div>

                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? '' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-500/30 shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center justify-between">
                            <div className="text-white">
                              <div className="text-3xl font-bold">{service.stats}</div>
                            </div>
                            <div className="p-4 bg-yellow-500/20 backdrop-blur-md border border-yellow-400/30 rounded-2xl">
                              <service.icon className="w-8 h-8 text-yellow-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-slate-900/80 backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl">
                          <service.icon className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                      </div>

                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-700">
                        <div className="flex items-center text-yellow-400 font-semibold hover:gap-3 transition-all group cursor-pointer">
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
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
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
                alt="Solar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/95 via-orange-600/95 to-yellow-600/95"></div>
            </div>

            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      opacity: 0.3,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="relative z-10 p-12 lg:p-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Sun className="w-24 h-24 text-white mb-6 animate-pulse" style={{ animationDuration: '2s' }} />
                  <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                    Ready to Go Solar?
                  </h3>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Get a free site assessment and personalized solar proposal for your property. Start saving on energy costs today.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-10 py-5 bg-white text-orange-600 rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 font-bold text-lg"
                    >
                      Get Free Assessment
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
                    { value: '50KW+', label: 'Capacity Installed' },
                    { value: '10+', label: 'Happy Customers' },
                    { value: '25 Years', label: 'Panel Warranty' },
                    { value: '90%', label: 'Bill Savings' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:-translate-y-2 transition-all"
                    >
                      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
