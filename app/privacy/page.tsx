import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Nitron',
  description: 'Learn how Nitron collects, uses, and protects your personal information. Our privacy policy explains your rights and our data practices.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="section-padding">
        <div className="container-max max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Nitron ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our business management application and website (collectively, the "Service").
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Business information (company name, industry, business size)</li>
                <li>Account credentials and profile information</li>
                <li>Communication preferences and marketing preferences</li>
                <li>Information you provide through our contact forms or support channels</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you use our Service, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Log data (access times, error logs, performance data)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Providing and maintaining our Service</li>
                <li>Processing transactions and managing your account</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending you important updates and notifications</li>
                <li>Improving our Service and developing new features</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our Service</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:info@nitron.digital" className="text-light-blue-600 hover:text-light-blue-700">info@nitron.digital</a>.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our Service. These technologies help us:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze how our Service is used</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve our Service performance and security</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our Service.
              </p>
            </section>

            {/* GDPR Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">GDPR Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Right to be informed about data processing</li>
                <li>Right of access to your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Rights related to automated decision making</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our legal basis for processing your personal data includes consent, contract performance, legitimate interests, and legal obligations.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600">
                  <strong>Email:</strong> <a href="mailto:info@nitron.digital" className="text-light-blue-600 hover:text-light-blue-700">info@nitron.digital</a><br />
                  <strong>Phone:</strong> <a href="tel:+18333648766" className="text-light-blue-600 hover:text-light-blue-700">(833) 364-8766</a><br />
                  <strong>Address:</strong> 923 Elm Street, Manchester, NH 03101
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
