import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Zap,
  Battery,
  Sun,
  Shield,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Clock,
  Star,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export default function Home() {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const projectsTarget = 1000;
    const clientsTarget = 500;
    const experienceTarget = 15;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.floor(projectsTarget * progress),
        clients: Math.floor(clientsTarget * progress),
        experience: Math.floor(experienceTarget * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters({
          projects: projectsTarget,
          clients: clientsTarget,
          experience: experienceTarget,
        });
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description: 'Professional electrical solutions for industrial and domestic needs.',
      color: 'blue',
      link: '/services/electrical-engineering',
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg',
    },
    {
      icon: Battery,
      title: 'EV & Hybrid Battery Solutions',
      description: 'Expert repair, reconditioning, and EV charger installation services.',
      color: 'green',
      link: '/services/ev-battery',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg',
    },
    {
      icon: Sun,
      title: 'Solar Power Systems',
      description: 'Complete solar installation and maintenance for homes and businesses.',
      color: 'yellow',
      link: '/services/solar-power',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
    },
    {
      icon: Shield,
      title: 'Energy Backup Solutions',
      description: 'Reliable power backup systems for uninterrupted operations.',
      color: 'red',
      link: '/services/power-backup',
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Highly qualified and certified technicians with years of experience',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Strict adherence to the highest safety standards in every project',
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency services',
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'Punctual and reliable service delivery guaranteed',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Factory Manager',
      text: 'Outstanding service! The team was professional and completed our electrical upgrade ahead of schedule.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      text: 'Our solar installation has been flawless. Already seeing significant savings on electricity bills!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      text: 'Reliable and efficient. ELEXCORE has been our trusted partner for all electrical needs.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-blue-950">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-black/50"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10 animate-grid-pulse" style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>

          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
            <defs>
              <linearGradient id="electricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(34, 211, 238)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path className="animate-electric-flow" d="M 0 100 Q 200 50 400 100 T 800 100" stroke="url(#electricGradient)" strokeWidth="2" fill="none" />
            <path className="animate-electric-flow-slow" d="M 1200 200 Q 1000 250 800 200 T 400 200" stroke="url(#electricGradient)" strokeWidth="2" fill="none" />
            <path className="animate-electric-flow-reverse" d="M 100 400 Q 300 450 500 400 T 900 400" stroke="url(#electricGradient)" strokeWidth="2" fill="none" />
            <path className="animate-electric-flow" d="M 600 50 Q 700 100 800 50 T 1000 50" stroke="url(#electricGradient)" strokeWidth="2" fill="none" style={{ animationDelay: '1s' }} />
          </svg>

          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-energy-pulse"></div>

          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-energy-pulse" style={{ animationDelay: '0.5s' }}></div>

          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-energy-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-energy-pulse" style={{ animationDelay: '1.5s' }}></div>

          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}

          <svg className="absolute top-20 left-10 w-16 h-16 text-cyan-400 animate-electric-pulse animate-float" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
          </svg>
          <svg className="absolute bottom-20 right-20 w-20 h-20 text-cyan-500 animate-electric-pulse" style={{ animationDelay: '1s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
          </svg>
          <svg className="absolute top-1/2 right-10 w-12 h-12 text-cyan-300 animate-electric-pulse animate-float" style={{ animationDelay: '0.5s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
          </svg>
          <svg className="absolute top-40 left-1/3 w-10 h-10 text-cyan-400 animate-electric-pulse" style={{ animationDelay: '1.5s' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
          </svg>

          <div className="absolute top-10 right-1/4 w-32 h-32 border-2 border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 border-2 border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>

          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-cyan-400/30 rounded-full animate-energy-ripple"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-cyan-500/30 rounded-full animate-energy-ripple" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-6 animate-bounce" style={{ animationDuration: '2s' }}>
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
                ELEXCORE
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <p className="text-xl md:text-2xl text-gray-100 font-semibold">
                Automobile • Solar Solutions • Electrical Solutions • Product Trading 
              </p>
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Powering your daily needs with simple and reliable solutions. We provide automobile services, electrical work, solar power systems, and quality item sales, delivering trusted service and practical solutions you can depend on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 group font-medium text-lg"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all hover:shadow-lg font-medium text-lg"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { value: `${counters.projects}+`, label: 'Projects Completed', icon: TrendingUp },
                { value: `${counters.clients}+`, label: 'Happy Clients', icon: Users },
                { value: `${counters.experience}+`, label: 'Years Experience', icon: Award },
                { value: '100%', label: 'Satisfaction Rate', icon: Star },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all hover:-translate-y-2 border border-white/20 animate-fade-in"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-950/50 via-slate-950 to-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-950/20 to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-blue-950/30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-400/30">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Cutting-edge services designed to power your world efficiently and sustainably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3 border border-slate-700 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className={`absolute top-4 right-4 p-3 bg-cyan-500 rounded-full shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center text-cyan-400 font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 font-medium"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-slate-950 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-400/30">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The ELEXCORE Advantage
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We combine expertise, reliability, and innovation to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group bg-slate-900 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-700 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-5 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="relative h-full min-h-[400px]">
              <img
                src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"
                alt="Solar installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-transparent"></div>
            </div>
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Power Your Future?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Join hundreds of satisfied customers who trust ELEXCORE for their electrical and
                energy solutions. Get a free consultation today.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Free initial consultation and assessment',
                  'Competitive pricing with no hidden costs',
                  'Quality assurance and warranty coverage',
                  'Expert technicians with certified credentials',
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 font-medium"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-blue-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-400/30">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real experiences from our valued customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-700 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Start Your Project Today
          </h2>
          <p className="text-xl text-gray-100 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transform your energy infrastructure with expert solutions from ELEXCORE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 font-medium text-lg"
            >
              Contact Us Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all hover:shadow-xl hover:shadow-cyan-500/50 font-medium text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
