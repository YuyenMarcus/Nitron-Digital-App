import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Nitron',
  description: 'Learn about how Nitron uses cookies and similar technologies to improve your experience on our website and application.',
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="section-padding">
        <div className="container-max max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
              </p>
            </section>

            {/* How We Use Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nitron uses cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Help us improve our website by collecting usage information</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Authentication and security cookies</li>
                    <li>Session management cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Performance Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Google Analytics cookies</li>
                    <li>Page load time tracking</li>
                    <li>Error tracking cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Functional Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Language preference cookies</li>
                    <li>Theme and display preferences</li>
                    <li>Form auto-fill cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Marketing Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Social media cookies</li>
                    <li>Advertising network cookies</li>
                    <li>Retargeting cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use third-party services that place cookies on your device. These services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
                <li><strong>Customer Support Tools:</strong> For providing customer assistance</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                These third-party services have their own privacy policies and cookie practices. We encourage you to review their policies.
              </p>
            </section>

            {/* Cookie Management */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                <li><strong>Contact Us:</strong> Reach out to us for assistance with cookie management</li>
              </ul>
              
              <div className="bg-gray-50 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">Browser-Specific Instructions</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </div>
            </section>

            {/* GDPR Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">GDPR Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Right to Consent:</strong> We will ask for your explicit consent before setting non-essential cookies</li>
                <li><strong>Right to Withdraw:</strong> You can withdraw your consent at any time</li>
                <li><strong>Right to Access:</strong> You can request information about what data we collect</li>
                <li><strong>Right to Erasure:</strong> You can request deletion of your personal data</li>
                <li><strong>Right to Portability:</strong> You can request a copy of your data in a portable format</li>
              </ul>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Email:</strong> privacy@nitron.digital</li>
                  <li><strong>Phone:</strong> (833) 364-8766</li>
                  <li><strong>Address:</strong> 923 Elm Street, Manchester, NH 03101</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
