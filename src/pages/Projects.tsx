import { Star, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Commercial Solar Installation',
      category: 'Solar Power',
      location: 'Tech Park, City Center',
      date: 'November 2024',
      description:
        'Complete 500kW solar panel installation for a commercial office complex with battery storage system.',
      results: ['40% reduction in energy costs', 'ROI achieved in 4 years', '600 tons CO2 saved annually'],
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg',
    },
    {
      id: 2,
      title: 'Industrial Electrical Upgrade',
      category: 'Electrical Engineering',
      location: 'Manufacturing District',
      date: 'October 2024',
      description:
        'Full electrical system overhaul for a manufacturing facility including 3-phase distribution and control panels.',
      results: ['Zero downtime migration', 'Enhanced safety compliance', 'Improved power efficiency'],
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg',
    },
    {
      id: 3,
      title: 'Residential EV Charging Station',
      category: 'EV Solutions',
      location: 'Green Valley Residences',
      date: 'September 2024',
      description:
        'Installation of 20 EV charging points in a residential complex with smart load management.',
      results: ['Level 2 fast charging', 'Mobile app integration', 'Dynamic load balancing'],
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg',
    },
    {
      id: 4,
      title: 'Smart Home Automation',
      category: 'Home Automation',
      location: 'Luxury Villa, Hillside',
      date: 'August 2024',
      description:
        'Complete smart home setup with automated lighting, security systems, and energy monitoring.',
      results: ['30% energy savings', 'Voice control integration', '24/7 security monitoring'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    },
    {
      id: 5,
      title: 'Hospital Backup Power System',
      category: 'Power Backup',
      location: 'City General Hospital',
      date: 'July 2024',
      description:
        'Critical power backup system with UPS and generator for uninterrupted hospital operations.',
      results: ['99.99% uptime', 'Automatic failover', 'Redundant power systems'],
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg',
    },
    {
      id: 6,
      title: 'Rooftop Solar Array',
      category: 'Solar Power',
      location: 'Residential Complex, Suburb',
      date: 'June 2024',
      description:
        'Grid-tied solar installation for 50 residential units with net metering setup.',
      results: ['100kW total capacity', 'Net metering enabled', '35% bill reduction'],
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Factory Manager',
      company: 'TechManufacturing Ltd',
      rating: 5,
      text: 'ELEXCORE transformed our facility electrical system. Their team was professional, completed the project on time, and the results exceeded our expectations. Highly recommended!',
    },
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      company: 'Green Valley Residences',
      rating: 5,
      text: 'The solar installation for our home was seamless. The team explained everything clearly, and we are already seeing significant savings on our electricity bills.',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'City General Hospital',
      rating: 5,
      text: 'Critical infrastructure requires the best, and ELEXCORE delivered. Our backup power system has been flawless, giving us complete peace of mind.',
    },
    {
      name: 'Anita Desai',
      role: 'Building Manager',
      company: 'Tech Park Office Complex',
      rating: 5,
      text: 'From consultation to installation, the entire experience was excellent. The commercial solar system is performing better than projected, and maintenance has been hassle-free.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through successful project deliveries
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-white">Key Results:</p>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-cyan-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can bring your vision to life with our expertise and dedication
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105 font-medium"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
