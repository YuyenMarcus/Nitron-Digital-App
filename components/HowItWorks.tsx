'use client'

import { motion } from 'framer-motion'
import { UserPlus, Cog, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const steps = [
  {
    icon: UserPlus,
    number: "1",
    title: "Sign Up & Connect",
    description: "Create your account, and securely connect your existing tools like invoicing and accounting platforms.",
    color: "from-navy-500 to-navy-600",
    bgColor: "bg-navy-50"
  },
  {
    icon: Cog,
    number: "2", 
    title: "Set Your Rules",
    description: "Easily build powerful automations by choosing from our pre-built templates or creating your own custom rules.",
    color: "from-light-blue-500 to-light-blue-600",
    bgColor: "bg-light-blue-50"
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Watch It Work",
    description: "Your automations now run in the background, handling tasks automatically so you can focus on growing your business.",
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-50"
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
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Automation in Three Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've made it effortless to streamline your business and automate your workflows, so you can focus on what matters most.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-light-blue-500 to-light-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Step Card */}
              <div className="card pt-12 text-center group hover:scale-105 transition-transform duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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