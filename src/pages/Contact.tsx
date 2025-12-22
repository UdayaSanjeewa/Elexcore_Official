import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['No 69/D', 'Makawita, Ja-Ela'],
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+94 773 46 7754', '+94 773 69 7754'],
      color: 'green',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['elexcores@gmail.com'],
      color: 'red',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'yellow',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for expert consultation and personalized solutions
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all hover:-translate-y-1"
              >
                <div className="inline-flex p-3 bg-cyan-500/20 rounded-lg mb-4">
                  <info.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="xxxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="xxxx@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="+94 xx xxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none placeholder-gray-400"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-cyan-500/50'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-cyan-500/20 border border-cyan-400 text-cyan-400 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-400 text-red-400 px-4 py-3 rounded-lg">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Location</h2>
              <div className="bg-slate-800 rounded-xl overflow-hidden h-96 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.5817483178603!2d79.9318061206449!3d7.107042960654659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb002defe4e3%3A0x1c5cce8eb486a7!2ssanda&#39;s%20Place!5e0!3m2!1sen!2slk!4v1766338520700!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ELEXCORE Location"
                ></iframe>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6 text-gray-100">
                  Our emergency support team is available 24/7 for urgent electrical issues.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+1234567890"
                    className="block bg-white text-cyan-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all text-center font-medium"
                  >
                    Call Emergency Hotline
                  </a>
                  <a
                    href="mailto:emergency@elexcore.com"
                    className="block bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-all text-center font-medium"
                  >
                    Email Emergency Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-left mt-8">
            <details className="bg-slate-900 border border-slate-700 rounded-lg p-6 shadow-sm">
              <summary className="font-semibold text-white cursor-pointer">
                What areas do you service?
              </summary>
              <p className="mt-3 text-gray-300">
                We provide services across the entire metro area and surrounding regions. Contact us
                to confirm if we cover your location.
              </p>
            </details>
            <details className="bg-slate-900 border border-slate-700 rounded-lg p-6 shadow-sm">
              <summary className="font-semibold text-white cursor-pointer">
                Do you offer emergency services?
              </summary>
              <p className="mt-3 text-gray-300">
                Yes, we have a 24/7 emergency response team available for urgent electrical issues.
              </p>
            </details>
            <details className="bg-slate-900 border border-slate-700 rounded-lg p-6 shadow-sm">
              <summary className="font-semibold text-white cursor-pointer">
                How long does a typical installation take?
              </summary>
              <p className="mt-3 text-gray-300">
                Project timelines vary based on scope and complexity. We provide detailed timelines
                during the consultation phase.
              </p>
            </details>
            <details className="bg-slate-900 border border-slate-700 rounded-lg p-6 shadow-sm">
              <summary className="font-semibold text-white cursor-pointer">
                Do you provide warranties on your work?
              </summary>
              <p className="mt-3 text-gray-300">
                Yes, all our installations and services come with comprehensive warranties. Specific
                terms vary by service type.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
