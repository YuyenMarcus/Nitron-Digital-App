'use client'

import { motion } from 'framer-motion'

const coreFeatures = [
  {
    title: "Ditch the Paperwork.",
    subtitle: "Automated Expense Capture",
    description: "Snap a photo of any receipt, and our AI will automatically extract all the details—vendor, amount, and date—so you can track expenses effortlessly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
      </svg>
    ),
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Make Smarter Decisions.",
    subtitle: "Business Dashboard & Reporting",
    description: "Transform raw data into actionable insights with a comprehensive dashboard. See your revenue trends, cash flow, and outstanding invoices at a glance, or generate a professional PDF report for your records.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
        <path d="M12 20V10"></path>
        <path d="M18 20V4"></path>
        <path d="M6 20v-4"></path>
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </svg>
    ),
    color: "from-light-blue-500 to-light-blue-600",
    bgColor: "bg-light-blue-50"
  },
  {
    title: "Keep Your Books in Sync.",
    subtitle: "QuickBooks Sync",
    description: "Connect your QuickBooks account once, and Nitron Digital will automatically sync your invoice and payment data, eliminating manual double-entry.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    ),
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50"
  }
]

const additionalFeatures = [
  {
    category: "Security & Control",
    title: "Secure Access, Peace of Mind.",
    features: [
      {
        name: "Two-Factor Authentication (2FA)",
        description: "Add an extra layer of security to your account to prevent unauthorized access.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M9 12l2 2 4-4"></path>
            <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
            <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
            <path d="M12 3c0 1 1 3 3 3s3-2 3-3-1-3-3-3-3 2-3 3"></path>
            <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3"></path>
          </svg>
        )
      },
      {
        name: "PIN Code & Biometrics",
        description: "Secure your data with a unique PIN or biometric login, keeping your sensitive information safe even if your phone is lost.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        )
      },
      {
        name: "Activity Tracking",
        description: "See a full history of all logins and devices that have accessed your account, so you always know who is viewing your data.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M3 3v18h18"></path>
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
          </svg>
        )
      }
    ]
  },
  {
    category: "Seamless Integrations", 
    title: "Connect to Your Business Ecosystem.",
    features: [
      {
        name: "Google Drive Sync",
        description: "Automatically save a copy of every invoice and receipt directly to a dedicated folder in your Google Drive.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        )
      },
      {
        name: "Slack Notifications",
        description: "Get real-time alerts in your team's Slack channel whenever a client pays an invoice or a new report is generated.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <line x1="9" y1="10" x2="15" y2="10"></line>
            <line x1="9" y1="14" x2="15" y2="14"></line>
          </svg>
        )
      },
      {
        name: "Stripe & QuickBooks",
        description: "Powerful core integrations that connect to the tools you already use, creating a seamless business workflow.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        )
      }
    ]
  },
  {
    category: "Modern Design & User Experience",
    title: "Beautifully Simple.",
    features: [
      {
        name: "Intuitive Dashboard",
        description: "A modern, easy-to-read dashboard with real-time data visualizations helps you understand your business at a glance.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="9"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
            <line x1="9" y1="12" x2="15" y2="12"></line>
          </svg>
        )
      },
      {
        name: "Streamlined Workflow",
        description: "Our clean UI and logical flows guide you through every task, from creating an invoice to generating a report, without any unnecessary complexity.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        )
      },
      {
        name: "Mobile-First Design",
        description: "Access your business data anywhere with our responsive design that works perfectly on iPhone, iPad, and desktop.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        )
      }
    ]
  }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Access All Features with{' '}
            <span className="gradient-text">Simple 1% Success Fee</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No subscriptions, no monthly fees. Get everything Nitron has to offer and only pay when you succeed.
          </p>
        </motion.div>

        {/* Core Features Grid */}
        <div className="features-grid mb-24">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: false, margin: "-100px", amount: 0.3 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="feature-card group"
            >
              <motion.div 
                className="feature-icon-container"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                viewport={{ once: false }}
                className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2"
              >
                {feature.subtitle}
              </motion.p>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                viewport={{ once: false }}
                className="text-2xl font-bold text-navy-900 mb-4"
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                viewport={{ once: false }}
                className="text-gray-600 leading-relaxed"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Sections */}
        {additionalFeatures.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
            viewport={{ once: false, margin: "-50px" }}
            className="mb-20"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.2 + 0.1 }}
                viewport={{ once: false }}
                className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3"
              >
                {section.category}
              </motion.p>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.2 + 0.2 }}
                viewport={{ once: false }}
                className="text-3xl md:text-4xl font-bold text-navy-900"
              >
                {section.title}
              </motion.h3>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {section.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: sectionIndex * 0.2 + featureIndex * 0.1 + 0.3,
                    ease: "easeOut"
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-white rounded-lg mr-4 shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-navy-900 mb-2">{feature.name}</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Access all features with no upfront costs. Only pay 1% when you get paid. No subscriptions, no commitments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Get Started Free
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                View Pricing Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 