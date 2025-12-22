import {
  Target,
  Eye,
  Heart,
  Award,
  Shield,
  Users,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Safety & Quality',
      description: 'We never compromise on safety standards and deliver only the highest quality work.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver solutions that exceed expectations.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and sustainable practices to stay ahead of industry trends.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'We constantly enhance our skills and processes to provide better service every day.',
    },
  ];

  const trustReasons = [
    {
      title: 'Certified Professionals',
      description: 'Our team consists of licensed electricians and certified automobile specialists with years of experience.',
    },
    {
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous quality checks to ensure it meets industry standards and your expectations.',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. We provide detailed quotes upfront so you know exactly what to expect.',
    },
    {
      title: 'Comprehensive Warranty',
      description: 'We stand behind our work with comprehensive warranties on all installations and services.',
    },
    {
      title: 'Safety Compliance',
      description: 'We strictly adhere to national and international safety standards, ensuring your complete peace of mind.',
    },
    {
      title: 'Responsive Support',
      description: 'Our customer support team is available around the clock to address your concerns and questions.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About ELEXCORE</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering automobiles and electrical systems with expertise, integrity, and innovation
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded with a vision to deliver dependable and modern technical solutions, 
                  ELEXCORE has grown into a trusted name in automobile services, solar systems, 
                  electrical solutions, and product trading.
                </p>
                <p>
                  Our journey began with a simple goal: to provide safe, reliable, 
                  and practical solutions for homes, vehicles, and businesses. 
                  Over time, we have expanded our expertise to meet the growing demand 
                  for efficient energy systems, advanced vehicle services, and quality products.

                </p>
                <p>
                  Today, we proudly serve clients across residential, commercial, and automotive sectors. 
                  From vehicle diagnostics and repairs to solar power installations and electrical projects, 
                  customer trust and quality work remain at the heart of everything we do.
                </p>
                <p>
                  With a skilled team, modern tools, and a strong focus on innovation, 
                  ELEXCORE continues to deliver solutions that are reliable, cost-effective, and built for the future.
                </p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">What ELEXCORE Means</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                    EL
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Electrical</h4>
                    <p className="text-gray-400 text-sm">
                      Our foundation in comprehensive electrical engineering and solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                    EX
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Experts</h4>
                    <p className="text-gray-400 text-sm">
                      A team of certified professionals with unmatched expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    CORE
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Core Solutions</h4>
                    <p className="text-gray-400 text-sm">
                      Essential and fundamental solutions at the heart of modern electrical needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all">
              <div className="inline-flex p-3 bg-cyan-500/20 rounded-lg mb-4">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To deliver innovative, safe, and sustainable electrical and automobile solutions that
                empower our clients and contribute to a greener future. We strive to exceed
                expectations through excellence, integrity, and continuous improvement.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all">
              <div className="inline-flex p-3 bg-cyan-500/20 rounded-lg mb-4">
                <Eye className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading provider of electrical and automobile solutions, recognized for our
                commitment to quality, innovation, and sustainability. We envision a world powered
                by clean, efficient, and reliable energy systems.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all">
              <div className="inline-flex p-3 bg-cyan-500/20 rounded-lg mb-4">
                <Heart className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-300">
                Integrity, safety, customer satisfaction, and innovation form the bedrock of
                everything we do. We believe in building lasting relationships based on trust,
                transparency, and exceptional service delivery.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all hover:-translate-y-1"
                >
                  <div className="inline-flex p-3 bg-cyan-500/20 rounded-lg mb-4">
                    <value.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 bg-cyan-500/20 rounded-full mb-4">
              <Award className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Trust ELEXCORE?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've built our reputation on reliability, expertise, and unwavering commitment to
              customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustReasons.map((reason, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-colors hover:border-cyan-400"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{reason.title}</h4>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Experience the ELEXCORE Difference</h3>
            <p className="text-xl mb-8 text-gray-100">
              Join our growing family of satisfied customers who trust us for their electrical and
              energy needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 font-medium"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all font-medium"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
