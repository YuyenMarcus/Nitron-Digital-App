'use client'

import { motion } from 'framer-motion'
import { FileText, BarChart3, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: "Effortless Invoicing",
    description: "Automate invoice creation and delivery to get paid faster and spend less time on manual tasks.",
    color: "from-navy-500 to-navy-600",
    bgColor: "bg-navy-50"
  },
  {
    icon: BarChart3,
    title: "Smart Reporting & Sync",
    description: "Automatically sync your financial data with popular accounting software and generate insightful reports.",
    color: "from-light-blue-500 to-light-blue-600",
    bgColor: "bg-light-blue-50"
  },
  {
    icon: MessageSquare,
    title: "Seamless Client Communication",
    description: "Keep clients in the loop with automated updates and notifications, all at the press of a button.",
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-50"
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
            Powerful Automations at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From day-to-day tasks to long-term goals, Nitron streamlines your business with intelligent automations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-navy-50 to-light-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Ready to Automate Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their workflow with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                See All Features
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 