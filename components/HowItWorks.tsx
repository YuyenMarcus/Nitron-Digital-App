'use client'

import { motion } from 'framer-motion'
import { UserPlus, Settings, PlayCircle } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    number: "1",
    title: "Securely Connect Your Tools",
    description: "Create your account and securely link the tools you already use, including QuickBooks, Stripe, and Google Drive, in just a few taps. We handle the data so you don't have to.",
    color: "from-navy-500 to-navy-600",
    bgColor: "bg-navy-50",
    iconColor: "text-navy-600",
    integrations: ["QuickBooks", "Stripe", "Google Drive"]
  },
  {
    icon: Settings,
    number: "2", 
    title: "Create Your First Workflow",
    description: "Easily build powerful automations by choosing from our pre-built templates. Each template is a ready-to-use solution designed to simplify your day-to-day.",
    color: "from-light-blue-500 to-light-blue-600",
    bgColor: "bg-light-blue-50",
    iconColor: "text-light-blue-600",
    templates: [
      { 
        name: "Invoice to Drive", 
        desc: "Auto-saves new invoices from QuickBooks as PDFs to your Google Drive.", 
        icon: "📄" 
      },
      { 
        name: "Payment Alerts", 
        desc: "Sends real-time Slack or email alerts for every new payment you receive.", 
        icon: "🔔" 
      },
      { 
        name: "Receipt Capture", 
        desc: "Automatically scans, extracts data, and categorizes receipt photos for easy expense tracking.", 
        icon: "📸" 
      }
    ]
  },
  {
    icon: PlayCircle,
    number: "3",
    title: "Watch Your Business Flow",
    description: "Once active, your automations run in the background, handling tasks instantly while keeping you fully informed with real-time notifications and an insightful dashboard.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    showDashboard: true
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Go From Clutter to Clarity in 3 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is engineered to streamline your business and automate your workflows, so you can stop managing tasks and start scaling your business.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: false, margin: "-50px", amount: 0.3 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <motion.div 
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: false }}
                  className="w-16 h-16 bg-gradient-to-r from-light-blue-500 to-light-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg"
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Step Card */}
              <div className="card pt-12 text-center group hover:scale-105 transition-transform duration-300">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: false }}
                  className="text-2xl font-bold text-navy-900 mb-4"
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: false }}
                  className="text-gray-600 leading-relaxed mb-6"
                >
                  {step.description}
                </motion.p>

                {/* Step 1: Seamless Integration Flow */}
                {step.integrations && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: false }}
                    className="pt-6 border-t border-gray-200"
                  >
                    <div className="flex items-center justify-center space-x-3">
                      {step.integrations.map((integration, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.7 + idx * 0.1 }}
                          viewport={{ once: false }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-2 hover:shadow-lg transition-shadow duration-300">
                            {integration === "QuickBooks" && (
                              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
                            )}
                            {integration === "Stripe" && (
                              <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg"></div>
                            )}
                            {integration === "Google Drive" && (
                              <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-green-500 rounded-lg"></div>
                            )}
                          </div>
                          <span className="text-xs text-gray-600 font-medium">{integration}</span>
                        </motion.div>
                      ))}
                    </div>
                    {/* Connection Flow Visualization */}
                    <div className="flex items-center justify-center mt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-light-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-light-blue-400 to-light-blue-500"></div>
                        <div className="w-2 h-2 bg-light-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-light-blue-500 to-light-blue-600"></div>
                        <div className="w-2 h-2 bg-light-blue-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Interactive Template Gallery */}
                {step.templates && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: false }}
                    className="pt-6 border-t border-gray-200"
                  >
                    <p className="text-center text-sm text-gray-500 mb-4 font-medium">Choose from ready-to-use templates</p>
                    <div className="space-y-3">
                      {step.templates.map((template, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -30, scale: 0.95 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.2 + 0.7 + idx * 0.15,
                            type: "spring",
                            stiffness: 100
                          }}
                          viewport={{ once: false }}
                          whileHover={{ 
                            scale: 1.02,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer group"
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-light-blue-50 to-light-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                              <span className="text-lg">{template.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-semibold text-navy-900 text-sm mb-1 group-hover:text-light-blue-600 transition-colors duration-200">
                                {template.name}
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {template.desc}
                              </p>
                            </div>
                            <div className="flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="w-5 h-5 bg-light-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-light-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Dashboard Preview */}
                {step.showDashboard && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: false }}
                    className="pt-6 border-t border-gray-200"
                  >
                    <p className="text-center text-sm text-gray-500 mb-4 font-medium">Your business in real-time</p>
                    
                    {/* Mini Dashboard Visualization */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                      viewport={{ once: false }}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                    >
                      {/* Mini Chart */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-600">Revenue Trend</span>
                          <span className="text-xs text-green-600 font-semibold">+12%</span>
                        </div>
                        <div className="flex items-end space-x-1 h-12">
                          {[40, 65, 45, 80, 70, 95, 85].map((height, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${height}%` }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.2 + 1.0 + idx * 0.1,
                                ease: "easeOut"
                              }}
                              viewport={{ once: false }}
                              className="bg-gradient-to-t from-light-blue-400 to-light-blue-500 rounded-sm flex-1"
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Live Notifications */}
                      <div className="space-y-2">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 1.5 }}
                          viewport={{ once: false }}
                          className="flex items-center text-xs"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-gray-600">Payment received: $1,200</span>
                          <span className="text-gray-400 ml-auto">2m ago</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 1.7 }}
                          viewport={{ once: false }}
                          className="flex items-center text-xs"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-gray-600">Invoice auto-saved to Drive</span>
                          <span className="text-gray-400 ml-auto">5m ago</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 1.9 }}
                          viewport={{ once: false }}
                          className="flex items-center text-xs"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-gray-600">Expense categorized</span>
                          <span className="text-gray-400 ml-auto">8m ago</span>
                        </motion.div>
                </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines (Desktop Only) */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 step-connection-line transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-3/4 w-1/2 h-0.5 step-connection-line transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  )
} 