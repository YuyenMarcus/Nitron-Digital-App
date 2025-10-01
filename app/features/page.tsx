'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Camera, 
  BarChart3, 
  RefreshCw, 
  Shield, 
  Smartphone, 
  Bell, 
  Cloud,
  Lock,
  Activity,
  Zap,
  Users
} from 'lucide-react'

const coreFeatures = [
  {
    title: "Ditch the Paperwork.",
    subtitle: "Automated Expense Capture",
    description: "Snap a photo of any receipt, and our AI will automatically extract all the details—vendor, amount, and date—so you can track expenses effortlessly.",
    icon: <Camera className="feature-icon" />,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Make Smarter Decisions.",
    subtitle: "Business Dashboard & Reporting",
    description: "Transform raw data into actionable insights with a comprehensive dashboard. See your revenue trends, cash flow, and outstanding invoices at a glance, or generate a professional PDF report for your records.",
    icon: <BarChart3 className="feature-icon" />,
    color: "from-light-blue-500 to-light-blue-600",
    bgColor: "bg-light-blue-50"
  },
  {
    title: "Keep Your Books in Sync.",
    subtitle: "QuickBooks Sync",
    description: "Connect your QuickBooks account once, and Nitron Digital will automatically sync your invoice and payment data, eliminating manual double-entry.",
    icon: <RefreshCw className="feature-icon" />,
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
        icon: <Lock className="w-6 h-6" />
      },
      {
        name: "PIN Code & Biometrics",
        description: "Secure your data with a unique PIN or biometric login, keeping your sensitive information safe even if your phone is lost.",
        icon: <Smartphone className="w-6 h-6" />
      },
      {
        name: "Activity Tracking",
        description: "See a full history of all logins and devices that have accessed your account, so you always know who is viewing your data.",
        icon: <Activity className="w-6 h-6" />
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
        icon: <Cloud className="w-6 h-6" />
      },
      {
        name: "Slack Notifications",
        description: "Get real-time alerts in your team's Slack channel whenever a client pays an invoice or a new report is generated.",
        icon: <Bell className="w-6 h-6" />
      },
      {
        name: "Stripe & QuickBooks",
        description: "Powerful core integrations that connect to the tools you already use, creating a seamless business workflow.",
        icon: <Zap className="w-6 h-6" />
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
        icon: <BarChart3 className="w-6 h-6" />
      },
      {
        name: "Streamlined Workflow",
        description: "Our clean UI and logical flows guide you through every task, from creating an invoice to generating a report, without any unnecessary complexity.",
        icon: <Zap className="w-6 h-6" />
      },
      {
        name: "Mobile-First Design",
        description: "Access your business data anywhere with our responsive design that works perfectly on iPhone, iPad, and desktop.",
        icon: <Smartphone className="w-6 h-6" />
      }
    ]
  }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-50 via-white to-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
              Powerful Features for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue-400 to-blue-300">
                Modern Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your business operations, automate workflows, and focus on what matters most - growing your business.
            </p>
          </motion.div>

          {/* Core Features Grid */}
          <div className="features-grid mb-24">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
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
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {feature.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Sections */}
      <section className="section-padding">
        <div className="container-max">
          {additionalFeatures.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-20"
            >
              {/* Section Header */}
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  {section.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900">
                  {section.title}
                </h3>
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
                    viewport={{ once: true, margin: "-50px" }}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy-50 via-white to-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Experience These Features?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Start using all these powerful features today. No setup fees, no monthly costs - just pay 1% when you get paid.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Get Started Free
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
