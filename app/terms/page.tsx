import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Nitron',
  description: 'Read Nitron\'s Terms of Service to understand the rules and guidelines for using our business management application and website.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="section-padding">
        <div className="container-max max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service ("Terms") govern your use of the Nitron business management application and website (collectively, the "Service") operated by Nitron ("we," "our," or "us").
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Description of Service</h2>
              <p className="text-gray-600 leading-relaxed">
                Nitron is a business management platform that helps freelancers and small business owners manage invoices, automate workflows, and streamline their business operations. Our Service includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                <li>Invoice creation and management</li>
                <li>Workflow automation tools</li>
                <li>Business analytics and reporting</li>
                <li>Integration with third-party services</li>
                <li>Mobile and web applications</li>
                <li>Customer support and documentation</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">User Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains accurate and up-to-date</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You must be at least 18 years old to create an account and use our Service.
              </p>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Acceptable Use Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Use the Service to send spam or unsolicited communications</li>
                <li>Reverse engineer, decompile, or disassemble our software</li>
                <li>Use automated systems to access the Service without permission</li>
              </ul>
            </section>

            {/* Subscription and Payment */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Subscription and Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Service offers both free and paid subscription plans:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Free Plan:</strong> Basic features available at no cost</li>
                <li><strong>Paid Plans:</strong> Advanced features available for a monthly or annual fee</li>
                <li><strong>Billing:</strong> Paid subscriptions are billed in advance on a recurring basis</li>
                <li><strong>Cancellation:</strong> You may cancel your subscription at any time</li>
                <li><strong>Refunds:</strong> We offer a 30-day money-back guarantee for paid plans</li>
                <li><strong>Price Changes:</strong> We may modify pricing with 30 days' notice</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                All payments are processed securely through our third-party payment processors. You agree to provide accurate billing information and authorize us to charge your payment method.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are owned by Nitron and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You retain ownership of any content you submit to our Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content solely for the purpose of providing our Service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may not use our trademarks, service marks, or logos without our prior written consent.
              </p>
            </section>

            {/* Privacy and Data */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Service, you consent to our collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Disclaimers and Limitations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Service Availability:</strong> We strive to provide reliable service but cannot guarantee uninterrupted access. The Service is provided "as is" and "as available" without warranties of any kind.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Data Accuracy:</strong> While we work to ensure data accuracy, we cannot guarantee that all information provided through our Service is complete, accurate, or up-to-date.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Third-Party Services:</strong> Our Service may integrate with third-party services. We are not responsible for the availability, accuracy, or content of third-party services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, Nitron shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Nitron and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upon termination, your right to use the Service will cease immediately. We may delete your account and data, though we may retain certain information as required by law or for legitimate business purposes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may terminate your account at any time by contacting us or using the account deletion feature in your settings.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of New Hampshire, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in Manchester, New Hampshire.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You agree to waive any right to a jury trial or to participate in a class action lawsuit.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Severability</h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable. The invalid provision will be replaced with a valid provision that most closely matches the intent of the original provision.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
