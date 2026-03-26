import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useBrandContext } from '../../context/BrandContext';
import { Cookie, Settings, Clock } from 'lucide-react';

export const CookiePolicy = () => {
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
              <Cookie className="w-8 h-8 text-green-600" />
              <h1 className="text-responsive-h1" style={{ color: colors.primary }}>
                Cookie Policy
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
                This Cookie Policy explains how Jaivik Vikalp Urja LLP ("Company," "we," "us," or "our") uses cookies and similar tracking technologies on our website. By accessing and using our website, you consent to our use of cookies as described in this policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this Cookie Policy carefully. If you do not agree with our use of cookies, you can adjust your browser settings or opt out as described below.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                1. What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They contain information about your browsing activity and preferences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                There are two main types of cookies:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a specified period or until you delete them</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Cookies can also be categorized as first-party cookies (set by our website) or third-party cookies (set by other domains).
              </p>
            </div>

            {/* Types of Cookies We Use */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                2. Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Essential Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>User authentication and login</li>
                <li>Session management</li>
                <li>Security and fraud prevention</li>
                <li>Remembering user preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Performance Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies help us understand how visitors use our website by collecting and reporting information anonymously. They help us:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Analyze website traffic and usage patterns</li>
                <li>Identify popular pages and features</li>
                <li>Measure website performance</li>
                <li>Improve user experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Functional Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies remember your choices and preferences to provide a personalized experience:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Language preferences</li>
                <li>Theme preferences (light/dark mode)</li>
                <li>Previously viewed products</li>
                <li>Saved form data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.4 Marketing Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies track your browsing activity to deliver targeted advertisements and marketing content:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Tracking conversion and campaign effectiveness</li>
                <li>Displaying relevant product recommendations</li>
                <li>Retargeting advertisements</li>
                <li>Social media integration</li>
              </ul>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                3. Third-Party Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use third-party services that may set their own cookies on your device:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior tracking</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Advertising Networks:</strong> For targeted advertising and campaign tracking</li>
                <li><strong>Email Marketing Services:</strong> For tracking email campaign performance</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                These third parties have their own privacy policies governing their use of cookies. We recommend reviewing their policies for more information.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                4. How We Use Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To provide and maintain our website services</li>
                <li>To authenticate users and manage sessions</li>
                <li>To remember user preferences and settings</li>
                <li>To analyze website usage and improve performance</li>
                <li>To deliver personalized content and recommendations</li>
                <li>To track marketing campaign effectiveness</li>
                <li>To prevent fraud and enhance security</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
            </div>

            {/* Cookie Duration */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                5. Cookie Duration
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The duration for which cookies remain on your device varies:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain for a specified period (typically 1 month to 2 years)</li>
                <li><strong>Analytics Cookies:</strong> Typically retained for 26 months</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You can delete cookies manually through your browser settings at any time.
              </p>
            </div>

            {/* Your Cookie Choices */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                6. Your Cookie Choices
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have control over cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Accept All Cookies:</strong> Allow all cookies to be stored on your device</li>
                <li><strong>Reject All Cookies:</strong> Disable all non-essential cookies</li>
                <li><strong>Customize Preferences:</strong> Choose which types of cookies to accept</li>
                <li><strong>Delete Cookies:</strong> Remove existing cookies from your device</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Please note that disabling essential cookies may affect the functionality of our website.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Manage Cookies:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
              </ul>
            </div>

            {/* Do Not Track */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                7. Do Not Track Signals
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some browsers include a "Do Not Track" feature. Currently, there is no industry standard for recognizing Do Not Track signals. Our website does not respond to Do Not Track browser signals at this time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                However, you can use other tools to control cookies and tracking as described in Section 6 above.
              </p>
            </div>

            {/* Analytics */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                8. Analytics and Tracking
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use Google Analytics to collect and analyze information about website usage. Google Analytics uses cookies to track:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Number of visitors and page views</li>
                <li>Time spent on pages</li>
                <li>User demographics and interests</li>
                <li>Traffic sources and user flow</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Google Analytics data is anonymized and does not identify individual users. You can opt out of Google Analytics tracking by:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Installing the Google Analytics Opt-out Browser Add-on</li>
                <li>Adjusting your browser cookie settings</li>
                <li>Using privacy-focused browser extensions</li>
              </ul>
            </div>

            {/* Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                9. Cookie Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement security measures to protect cookie data:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure cookie flags to prevent unauthorized access</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to cookie data</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                However, no method of transmission over the internet is completely secure. We cannot guarantee absolute security of cookie data.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: colors.primary }}>
                10. Changes to This Cookie Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our website following the posting of revised Cookie Policy means that you accept and agree to the changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
                <Settings className="w-6 h-6 text-green-600" />
                11. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Company:</strong> Jaivik Vikalp Urja LLP</p>
                <p><strong>Address:</strong> Near Hussainpur, Tehsil Bilari, Moradabad, Uttar Pradesh</p>
                <p><strong>Email:</strong> cookies@jaikvikvikalp.com</p>
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

export default CookiePolicy;
