'use client'

import { motion } from 'framer-motion'
import { Search, CheckCircle, BookOpen, Wrench, CreditCard, Zap, Code, ArrowRight, ExternalLink } from 'lucide-react'

const popularArticles = [
  { title: "How to Create Your First Invoice", href: "#" },
  { title: "Setting Up Payment Processing", href: "#" },
  { title: "Connecting Your Bank Account", href: "#" },
  { title: "Understanding Automation Rules", href: "#" },
  { title: "Exporting Your Data", href: "#" },
  { title: "Managing Team Permissions", href: "#" }
]

const helpCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "New to Nitron? Learn the basics and get up and running quickly.",
    articles: [
      "Creating Your First Account",
      "Setting Up Your Business Profile", 
      "Connecting Your First Integration",
      "Creating Your First Invoice",
      "Understanding the Dashboard"
    ]
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description: "Solutions to common issues and problems you might encounter.",
    articles: [
      "Login Issues",
      "Payment Processing Problems",
      "Integration Connection Errors",
      "Invoice Generation Issues",
      "Data Sync Problems"
    ]
  },
  {
    icon: CreditCard,
    title: "Billing & Account",
    description: "Everything you need to know about payments, subscriptions, and account management.",
    articles: [
      "Understanding Your Bill",
      "Upgrading Your Plan",
      "Canceling Your Subscription",
      "Payment Method Updates",
      "Account Security Settings"
    ]
  },
  {
    icon: Zap,
    title: "Features & Integrations",
    description: "Detailed guides on how to use Nitron's features and integrations.",
    articles: [
      "Invoice Automation",
      "Workflow Builder",
      "Analytics & Reporting",
      "Team Collaboration",
      "Mobile App Features"
    ]
  },
  {
    icon: Code,
    title: "API Documentation",
    description: "Technical documentation for developers integrating with Nitron.",
    articles: [
      "Authentication Guide",
      "API Endpoints Reference",
      "Webhook Setup",
      "Rate Limits & Quotas",
      "SDK Downloads"
    ]
  }
]

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="section-padding">
        <div className="container-max">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
                Help Center
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers to your questions, troubleshoot issues, and learn how to make the most of Nitron.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 mb-12 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-gray-900">All Systems Operational</span>
              </div>
              <a
                href="/status"
                className="text-light-blue-600 hover:text-light-blue-700 font-medium flex items-center gap-1"
              >
                View detailed status page
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Popular Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Popular Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <a
                    href={article.href}
                    className="text-navy-900 hover:text-light-blue-600 font-medium block"
                  >
                    {article.title}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Help Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-light-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-light-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a
                          href="#"
                          className="text-navy-900 hover:text-light-blue-600 text-sm block"
                        >
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#"
                    className="text-light-blue-600 hover:text-light-blue-700 font-medium text-sm flex items-center gap-1"
                  >
                    View all {category.title} articles
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Need More Help?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Contact Support</h3>
                <p className="text-gray-600 mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get in Touch
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Community Resources</h3>
                <p className="text-gray-600 mb-6">
                  Join our community forum and connect with other Nitron users.
                </p>
                <a
                  href="#"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Join Community
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
