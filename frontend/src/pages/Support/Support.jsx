import { motion } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';
import { Phone, Mail, MapPin, Clock, MessageSquare, Headphones, AlertCircle, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Support = () => {
  const { navigateToBrand } = useBrandNavigation();
  const { colors, brandId } = useBrandContext();
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const companyDetails = {
    name: 'Jaivik Vikalp Urja LLP',
    location: 'Near Hussainpur, Tehsil Bilari, Moradabad, Uttar Pradesh',
    phone: '9008383900',
    email: brandId === 'terravik' ? 'support@terravik.com' : 'support@hawaiagro.com',
  };

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us during business hours',
      contact: companyDetails.phone,
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your inquiry',
      contact: companyDetails.email,
      hours: 'Response within 24 hours',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Sat: 10:00 AM - 5:00 PM',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Visit our office',
      contact: companyDetails.location,
      hours: 'By appointment',
    },
  ];

  const handleTicketChange = (e) => {
    const { name, value } = e.target;
    setTicketForm((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const validateForm = () => {
    if (!ticketForm.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!ticketForm.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ticketForm.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!ticketForm.subject.trim()) {
      setError('Subject is required');
      return false;
    }
    if (!ticketForm.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmitTicket = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log('Support ticket submitted:', ticketForm);
    setSubmitted(true);
    setTicketForm({ name: '', email: '', phone: '', subject: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <motion.section
        className="section-padding bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-responsive-h1 mb-4" style={{ color: colors.primary }}>
              Customer Support
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're here to help! Get in touch with our support team through any of these channels
            </p>
          </div>
        </div>
      </motion.section>

      {/* Support Channels */}
      <motion.section
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, idx) => {
              const IconComponent = channel.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all text-center border-t-4"
                  style={{ borderTopColor: colors.secondary }}
                >
                  <IconComponent className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">{channel.contact}</p>
                    <p className="text-xs text-gray-500">{channel.hours}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Support Ticket Form */}
      <motion.section
        className="section-padding bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container max-w-2xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
              Submit a Support Ticket
            </h2>
            <p className="text-gray-600 text-lg">
              Describe your issue and we'll get back to you as soon as possible
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <form onSubmit={handleSubmitTicket} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={ticketForm.name}
                  onChange={handleTicketChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={ticketForm.email}
                  onChange={handleTicketChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={ticketForm.phone}
                  onChange={handleTicketChange}
                  placeholder="9876543210"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={ticketForm.subject}
                  onChange={handleTicketChange}
                  placeholder="Brief description of your issue"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={ticketForm.message}
                  onChange={handleTicketChange}
                  placeholder="Please describe your issue in detail..."
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors resize-none"
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 text-sm flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Support ticket submitted successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitted}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all disabled:opacity-50"
                style={{ backgroundColor: colors.secondary }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? 'Ticket Submitted' : 'Submit Ticket'}
              </motion.button>

              <p className="text-xs text-gray-500 text-center">* All fields are required</p>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Quick Links */}
      <motion.section
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
              Quick Resources
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions or explore our guides
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: 'FAQs',
                description: 'Browse frequently asked questions',
                icon: '❓',
                action: () => navigateToBrand('faqs'),
              },
              {
                title: 'Guides',
                description: 'Download helpful guides and resources',
                icon: '📚',
                action: () => navigateToBrand('guides'),
              },
              {
                title: 'Blog',
                description: 'Read articles and tips',
                icon: '📝',
                action: () => navigateToBrand('blog'),
              },
            ].map((resource, idx) => (
              <motion.button
                key={idx}
                variants={itemVariants}
                onClick={resource.action}
                className="p-6 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all text-center hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Business Hours Section */}
      <motion.section
        className="section-padding bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container max-w-2xl">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
              Business Hours
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Weekdays (Mon-Fri)</span>
                </div>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Saturday</span>
                </div>
                <span className="text-gray-600">10:00 AM - 4:00 PM</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Sunday</span>
                </div>
                <span className="text-gray-600">Closed</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6 text-center">
              Response times may vary during peak hours. We appreciate your patience!
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="section-padding text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container text-center">
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <h2 className="text-responsive-h2 mb-6 text-white">
              Thank You for Choosing Us
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Your satisfaction is our priority. We're committed to providing excellent support and service.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateToBrand('contact')}
              className="px-8 py-3 rounded-lg font-semibold bg-white transition-all"
              style={{ color: colors.primary }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Support;
