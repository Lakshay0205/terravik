import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useBrandContext } from '../../context/BrandContext';
import { FileText, AlertCircle, Clock } from 'lucide-react';

export const TermsOfService = () => {
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
              <FileText className="w-8 h-8 text-green-600" />
              <h1 className="text-responsive-h1" style={{ color: colors.primary }}>
                Terms of Service
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
                These Terms of Service ("Terms") govern your access to and use of the website and services provided by Jaivik Vikalp Urja LLP ("Company," "we," "us," or "our"). By accessing and using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
              </p>
            </div>

            {/* Use License */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                1. Use License
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reproduce, duplicate, copy, or sell any portion of our website or services</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Transmit viruses, malware, or any code of destructive nature</li>
                <li>Engage in any form of harassment, abuse, or threatening behavior</li>
                <li>Use automated tools or bots to access our website without permission</li>
                <li>Collect or track personal information of others without consent</li>
                <li>Interfere with the normal operation of our website</li>
                <li>Use our website for any illegal or unauthorized purpose</li>
              </ul>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                2. Disclaimer of Warranties
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>The accuracy, completeness, or reliability of website content</li>
                <li>The uninterrupted or error-free operation of our website</li>
                <li>The absence of viruses or harmful components</li>
                <li>The fitness of our products or services for a particular purpose</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                3. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Loss of goodwill or reputation</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Our total liability for any claim arising from your use of our website shall not exceed the amount you paid to us, if any.
              </p>
            </div>

            {/* Product Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                4. Product Information and Inquiries
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All product information, descriptions, and specifications provided on our website are for informational purposes only. We strive to provide accurate information, but we do not warrant the accuracy or completeness of product descriptions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you submit a product inquiry through our website:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>You authorize us to contact you regarding your inquiry</li>
                <li>You confirm that the information provided is accurate and complete</li>
                <li>You understand that inquiries do not constitute a binding offer or contract</li>
                <li>We reserve the right to accept or decline any inquiry</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                5. Intellectual Property Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of Jaivik Vikalp Urja LLP or its content suppliers and is protected by international copyright laws.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Reproduce or distribute our content without permission</li>
                <li>Modify or create derivative works from our content</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Remove or alter any copyright or proprietary notices</li>
              </ul>
            </div>

            {/* User-Generated Content */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                6. User-Generated Content
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you submit any content to our website (including comments, feedback, or inquiries), you grant us a non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and distribute such content.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>You own or have the right to submit the content</li>
                <li>The content does not infringe on any third-party rights</li>
                <li>The content is not defamatory, obscene, or illegal</li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                7. Third-Party Links and Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may contain links to third-party websites and services. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is governed by their terms and conditions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We do not endorse or warrant any third-party products or services linked from our website.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                8. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Jaivik Vikalp Urja LLP and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our website or violation of these Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                9. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to terminate or suspend your access to our website at any time, without notice, for any reason, including violation of these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use our website ceases immediately. All provisions of these Terms that by their nature should survive termination shall survive.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                10. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You agree to submit to the exclusive jurisdiction of the courts located in Moradabad, Uttar Pradesh, India for the resolution of any disputes arising from these Terms or your use of our website.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                11. Modifications to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                12. Severability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
                <AlertCircle className="w-6 h-6 text-green-600" />
                13. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Company:</strong> Jaivik Vikalp Urja LLP</p>
                <p><strong>Address:</strong> Near Hussainpur, Tehsil Bilari, Moradabad, Uttar Pradesh</p>
                <p><strong>Email:</strong> legal@jaikvikvikalp.com</p>
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
              <strong>Last Updated:</strong> January 2024. These Terms are effective immediately for new users and will be effective 30 days after posting for existing users.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default TermsOfService;
