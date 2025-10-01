'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Star } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-light-blue-500/20 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Join 10,000+ Business Owners
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Ready to Transform Your{' '}
              <span className="text-light-blue-300">Business?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false }}
              className="text-xl md:text-2xl text-navy-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Stop juggling multiple apps and manual processes. Start managing your business like a pro with Nitron.{' '}
              <span className="font-semibold text-white">No monthly fees. Only pay 1% when you get paid.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: false }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="bg-light-blue-500 hover:bg-light-blue-600 text-navy-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg flex items-center group">
                <Download className="w-5 h-5 mr-2" />
                Download on App Store
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#demo" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white/30 transition-all duration-200 transform hover:scale-105 text-lg backdrop-blur-sm">
                Watch Demo
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { value: "4.9/5", label: "App Store Rating" },
                { value: "10K+", label: "Active Users" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.9 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: false }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.1 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: false }}
                    className="text-3xl font-bold mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                    viewport={{ once: false }}
                    className="text-sm text-navy-200"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: false }}
              className="mt-16"
            >
              <p className="text-navy-200 mb-6">
                No credit card required • Start free
              </p>
              <button className="text-light-blue-300 hover:text-light-blue-200 font-semibold text-lg underline underline-offset-4 transition-colors">
                Learn more about our features →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 