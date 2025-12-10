import { Link } from 'react-router-dom';
import {
  Home,
  Camera,
  Lightbulb,
  Activity,
  Smartphone,
  Wifi,
  ArrowRight,
  Settings,
  Lock,
  Thermometer,
  Volume2,
  Zap,
} from 'lucide-react';

export default function SmartHome() {
  const services = [
    {
      icon: Camera,
      title: 'CCTV & Security',
      description: 'HD cameras with remote viewing and advanced features',
      features: ['4K cameras', 'Night vision', 'Motion alerts', 'Cloud storage'],
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
      size: 'large',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Lightbulb,
      title: 'Smart Lighting',
      description: 'Intelligent lighting with automated control',
      features: ['LED smart bulbs', 'Voice control', 'Scheduling'],
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
      size: 'small',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Activity,
      title: 'Energy Monitoring',
      description: 'Real-time energy tracking and optimization',
      features: ['Smart meters', 'Usage analytics', 'Cost tracking'],
      image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg',
      size: 'small',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Lock,
      title: 'Smart Locks',
      description: 'Keyless entry with smartphone control',
      features: ['Remote access', 'Guest codes', 'Activity logs'],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      size: 'medium',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Voice Control',
      description: 'Integration with Alexa, Google Home, and more',
      features: ['Multi-room audio', 'Routines', 'Commands'],
      image: 'https://images.pexels.com/photos/4009591/pexels-photo-4009591.jpeg',
      size: 'medium',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Thermometer,
      title: 'Climate Control',
      description: 'Smart thermostats for optimal comfort',
      features: ['Auto-scheduling', 'Remote control', 'Energy savings'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      size: 'small',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Settings,
      title: 'Home Automation',
      description: 'Centralized control for your entire home',
      features: ['Scene programming', 'Automated gates', 'Curtain control'],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      size: 'large',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Volume2,
      title: 'Audio Systems',
      description: 'Multi-room audio and entertainment',
      features: ['Wireless speakers', 'Streaming', 'Zones'],
      image: 'https://images.pexels.com/photos/4009591/pexels-photo-4009591.jpeg',
      size: 'small',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const benefits = [
    { icon: Smartphone, title: 'Control Anywhere', value: '100%', color: 'text-blue-400' },
    { icon: Activity, title: 'Energy Savings', value: '30%', color: 'text-green-400' },
    { icon: Camera, title: 'Enhanced Security', value: '24/7', color: 'text-red-400' },
    { icon: Zap, title: 'Smart Automation', value: '∞', color: 'text-yellow-400' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-pink-950 opacity-60"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  opacity: Math.random() * 0.5,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <Home className="w-20 h-20 text-purple-400 animate-pulse" />
                <div className="absolute inset-0 bg-purple-400 blur-2xl opacity-50"></div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
                Smart Home & Automation
              </span>
            </h1>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Transform your home into an intelligent living space with cutting-edge automation
            </p>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/50 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <benefit.icon className={`w-8 h-8 ${benefit.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                    <div className="text-3xl font-bold text-white mb-1">{benefit.value}</div>
                    <div className="text-sm text-gray-400">{benefit.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold mb-6 border border-purple-400/30">
              OUR SOLUTIONS
            </span>
            <h2 className="text-5xl font-bold text-white mb-4">
              Complete Smart Home Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to create your perfect smart home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const spanClass = service.size === 'large' ? 'md:col-span-2' : service.size === 'medium' ? 'md:col-span-1 lg:col-span-2' : 'md:col-span-1';
              const heightClass = service.size === 'large' ? 'h-[500px]' : service.size === 'medium' ? 'h-[400px]' : 'h-[300px]';

              return (
                <div
                  key={index}
                  className={`group relative ${spanClass} ${heightClass} rounded-3xl overflow-hidden border border-slate-700 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70 group-hover:opacity-50 transition-opacity`}></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                      <div className="inline-flex p-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-3">
                        {service.title}
                      </h3>

                      <p className="text-white/90 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-semibold text-white"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-2">
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>

            <div className="absolute inset-0">
              {[Home, Camera, Lightbulb, Lock, Smartphone, Activity].map((Icon, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                >
                  <Icon
                    className="text-white/10 animate-pulse"
                    style={{
                      width: `${40 + Math.random() * 40}px`,
                      height: `${40 + Math.random() * 40}px`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="relative z-10 p-12 lg:p-20">
              <div className="max-w-3xl mx-auto text-center">
                <Wifi className="w-24 h-24 text-white mx-auto mb-8 animate-pulse" style={{ animationDuration: '2s' }} />

                <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Upgrade Your Home?
                </h3>

                <p className="text-2xl text-white/90 mb-10 leading-relaxed">
                  Experience the future of living with comprehensive smart home solutions. Control everything from anywhere.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {[
                    { value: '200+', label: 'Homes Installed' },
                    { value: '30%', label: 'Energy Savings' },
                    { value: '24/7', label: 'Support' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:-translate-y-2 transition-all"
                    >
                      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-10 py-5 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 font-bold text-lg"
                  >
                    Schedule Consultation
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
