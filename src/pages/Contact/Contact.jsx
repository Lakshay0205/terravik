import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';
import { sendInquiryEmails } from '../../utils/emailService';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Clock, AlertCircle, CheckCircle, Youtube } from 'lucide-react';

export const Contact = () => {
  const { brand, colors, brandId } = useBrandContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    address: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Company details
  const companyDetails = {
    name: 'Jaivik Vikalp Urja LLP',
    location: 'Near Hussainpur, Tehsil Bilari, Moradabad, Uttar Pradesh',
    phone: '9008383900',
    email: brandId === 'terravik' ? 'info@terravik.com' : 'info@hawaiagro.com',
  };

  const productOptions = brandId === 'terravik'
    ? ['TerraVik Liquid Gold', 'General Inquiry']
    : ['Hawai Agro FOM', 'General Inquiry'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }
    if (!formData.productInterest) {
      setError('Please select a product of interest');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Send inquiry emails via backend
      const inquiryData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        productInterest: formData.productInterest,
        message: formData.message,
        address: formData.address,
        brandName: brand.name,
        companyName: companyDetails.name,
      };
      
      await sendInquiryEmails(inquiryData);

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        productInterest: '',
        address: '',
        message: '',
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending inquiry:', error);
      setError('Failed to send message. Please contact us directly at slakshay1002@gmail.com or call 9008383900.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
              Get In Touch
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions about our products? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Contact Section */}
      <motion.section
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8" style={{ color: colors.primary }}>
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Company Name */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: colors.secondary }}>
                    Company
                  </h3>
                  <p className="text-gray-700 font-semibold">{companyDetails.name}</p>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-2" style={{ color: colors.secondary }}>
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span>Location</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{companyDetails.location}</p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-2" style={{ color: colors.secondary }}>
                    <Phone className="w-5 h-5 text-green-600" />
                    <span>Phone</span>
                  </div>
                  <a
                    href={`tel:${companyDetails.phone}`}
                    className="text-gray-700 font-semibold hover:opacity-80 transition-opacity flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-green-600" />
                    {companyDetails.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-2" style={{ color: colors.secondary }}>
                    <Mail className="w-5 h-5 text-green-600" />
                    <span>Email</span>
                  </div>
                  <a
                    href={`mailto:${companyDetails.email}`}
                    className="text-gray-700 font-semibold hover:opacity-80 transition-opacity flex items-center gap-2 break-all"
                  >
                    <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {companyDetails.email}
                  </a>
                </div>

                {/* Business Hours */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-4" style={{ color: colors.secondary }}>
                    <Clock className="w-5 h-5 text-green-600" />
                    <span>Business Hours</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">Weekdays:</span> 9:00 AM - 6:00 PM
                    </p>
                    <p>
                      <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM
                    </p>
                    <p>
                      <span className="font-semibold">Sunday:</span> Closed
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: colors.secondary }}>
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {(brandId === 'terravik' ? [
                      { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/terra.vik/' },
                      { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61580561327179' },
                      { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@TheTerravik' },
                    ] : [
                      { icon: Facebook, label: 'Facebook', href: '#' },
                      { icon: Instagram, label: 'Instagram', href: '#' },
                      { icon: Twitter, label: 'Twitter', href: '#' },
                    ]).map((social, idx) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          style={{ backgroundColor: `${colors.secondary}20` }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title={social.label}
                        >
                          <IconComponent className="w-5 h-5 text-green-600 hover:text-green-700 transition-colors" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div
                id="contact-form"
                className="rounded-lg p-8 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}05 0%, ${colors.secondary}05 100%)`,
                }}
              >
                <h2 className="text-2xl font-bold mb-8" style={{ color: colors.primary }}>
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>

                  {/* Product Interest Field */}
                  <div>
                    <label htmlFor="productInterest" className="block text-sm font-semibold text-gray-900 mb-2">
                      Product of Interest *
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors bg-white"
                    >
                      <option value="">Select a product...</option>
                      {productOptions.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Address Field */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your complete address..."
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors resize-none"
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
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Success Message */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 text-sm flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Message sent successfully!</p>
                          <p className="text-xs">We've sent a confirmation email to {formData.email || 'your email'}. We'll get back to you soon.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading || submitted}
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.secondary }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <><span>Sending...</span></>
                    ) : submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Message Sent</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 text-green-600" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    * All fields are required
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="section-padding bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
              Visit Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Located in Moradabad, Uttar Pradesh
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200"
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br" style={{
              backgroundImage: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.secondary}20 100%)`,
            }}>
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <p className="text-gray-600 font-semibold">
                  Near Hussainpur, Tehsil Bilari
                </p>
                <p className="text-gray-600">
                  Moradabad, Uttar Pradesh
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How quickly will I receive a response?',
                answer: 'We typically respond to inquiries within 24 hours during business hours.',
              },
              {
                question: 'What are your delivery options?',
                answer: 'We offer multiple delivery options including standard and express shipping.',
              },
              {
                question: 'Do you offer bulk discounts?',
                answer: 'Yes, we offer competitive pricing for bulk orders. Contact us for details.',
              },
              {
                question: 'Can I return products?',
                answer: 'We have a 30-day return policy for unopened products in original packaging.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors"
              >
                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Fill out the form above or call us directly. We're here to help!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${companyDetails.phone}`}
                className="px-8 py-3 rounded-lg font-semibold bg-white transition-all flex items-center justify-center gap-2"
                style={{ color: colors.primary }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 text-green-600" />
                Call Us
              </motion.a>
              <motion.a
                href={`mailto:${companyDetails.email}`}
                className="px-8 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-green-600" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
