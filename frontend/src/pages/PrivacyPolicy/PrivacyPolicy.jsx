import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useBrandContext } from '../../context/BrandContext';
import { Shield, Clock, Mail } from 'lucide-react';

export const PrivacyPolicy = () => {
  const { colors } = useBrandContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-green-600" />
              <h1 className="text-responsive-h1" style={{ color: colors.primary }}>
                Privacy Policy
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Last Updated: January 2024
            </p>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container max-w-3xl">
          <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jaivik Vikalp Urja LLP ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our website. By accessing and using our website, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Information You Provide Directly</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Contact Form Data: Name, email address, phone number, and message content</li>
                <li>Product Inquiry Information: Product preferences, quantity requirements, and usage details</li>
                <li>Account Information: If you create an account, we collect login credentials and profile information</li>
                <li>Communication Data: Any correspondence, feedback, or inquiries you send us</li>
                <li>Payment Information: Billing address and payment details (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Information Collected Automatically</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Device Information: IP address, browser type, operating system, and device identifiers</li>
                <li>Usage Data: Pages visited, time spent on pages, links clicked, and navigation patterns</li>
                <li>Location Data: General geographic location based on IP address (not precise location)</li>
                <li>Cookies and Tracking Technologies: Information collected through cookies, web beacons, and similar technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.3 Information from Third Parties</h3>
              <p className="text-gray-600 leading-relaxed">
                We may receive information about you from third-party sources, including analytics providers, advertising partners, and publicly available sources, to enhance our services and verify information.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To process and fulfill product orders and inquiries</li>
                <li>To send transactional emails (order confirmations, shipping updates)</li>
                <li>To improve our website, products, and services</li>
                <li>To personalize your experience and provide relevant content</li>
                <li>To conduct marketing and promotional activities (with your consent)</li>
                <li>To analyze website usage and trends</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To prevent fraud and ensure website security</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                3. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement comprehensive security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure password storage using industry-standard hashing</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls limiting employee access to personal data</li>
                <li>Firewalls and intrusion detection systems</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. You use our website at your own risk.
              </p>
            </div>

            {/* Data Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and conducting business</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                <li><strong>Aggregated Data:</strong> We may share anonymized, aggregated data for research and analytics</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                5. Your Privacy Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of marketing communications</li>
                <li><strong>Right to Data Portability:</strong> Request your data in a portable format</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your experience. For detailed information about our use of cookies, please refer to our Cookie Policy.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                7. Children's Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate the child's account.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                8. Third-Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your personal information.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our website following the posting of revised Privacy Policy means that you accept and agree to the changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
                <Mail className="w-6 h-6 text-green-600" />
                10. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Company:</strong> Jaivik Vikalp Urja LLP</p>
                <p><strong>Address:</strong> Near Hussainpur, Tehsil Bilari, Moradabad, Uttar Pradesh</p>
                <p><strong>Email:</strong> privacy@jaikvikvikalp.com</p>
                <p><strong>Phone:</strong> 9008383900</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Last Updated Section */}
      <motion.section
        className="section-padding bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container max-w-3xl">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 text-gray-600"
          >
            <Clock className="w-5 h-5 text-green-600" />
            <p>
              <strong>Last Updated:</strong> January 2024. This policy is effective immediately for new users and will be effective 30 days after posting for existing users.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PrivacyPolicy;
