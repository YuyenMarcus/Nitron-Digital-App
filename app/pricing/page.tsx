'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, DollarSign, TrendingUp, Shield } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
              Simple & Transparent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue-400 to-blue-300">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no monthly subscriptions. Pay only when you succeed.
            </p>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-light-blue-500 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 text-center">
                {/* Core Proposition - 1% Fee */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    type: "spring", 
                    stiffness: 100,
                    delay: 0.4
                  }}
                  className="my-12"
                >
                  <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-light-blue-400 to-blue-300 mb-4">
                    1%
                  </div>
                  <p className="text-2xl md:text-3xl font-semibold text-gray-300">
                    Success Fee
                  </p>
                  <p className="text-lg text-gray-400 mt-2">
                    Only when you get paid
                  </p>
                </motion.div>

                {/* Value Proposition */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mb-12"
                >
                  <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-light-blue-500 rounded-2xl flex items-center justify-center mb-4">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">No Monthly Fees</h3>
                      <p className="text-gray-400 text-center">Start free. No subscriptions, no commitments.</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Pay When You Win</h3>
                      <p className="text-gray-400 text-center">Only pay a small fee when you receive payment.</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-4">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">No Hidden Costs</h3>
                      <p className="text-gray-400 text-center">Transparent pricing with no surprises.</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <button className="bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white text-xl font-semibold px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto">
                    Get Started Free
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </button>
                  <p className="text-gray-400 mt-4 text-sm">
                    No credit card required • Start earning today
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <Check className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-navy-900 mb-2">No Setup Fees</h4>
                <p className="text-gray-600 text-sm">Start immediately with zero upfront costs</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <Check className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-navy-900 mb-2">No Contracts</h4>
                <p className="text-gray-600 text-sm">Cancel anytime with no penalties</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <Check className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-navy-900 mb-2">No Hidden Fees</h4>
                <p className="text-gray-600 text-sm">What you see is what you pay</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <Check className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-navy-900 mb-2">Instant Payouts</h4>
                <p className="text-gray-600 text-sm">Receive your money within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "When do I pay the 1% fee?",
                  answer: "You only pay the 1% success fee when you actually receive payment from your clients. If you don't get paid, you don't pay us anything."
                },
                {
                  question: "Are there any monthly subscription fees?",
                  answer: "No monthly fees, ever. We believe in aligning our success with yours. You only pay when your business succeeds."
                },
                {
                  question: "What happens if a client doesn't pay?",
                  answer: "If your client doesn't pay their invoice, you owe us nothing. The 1% fee only applies to successful payments you receive."
                },
                {
                  question: "How is the fee calculated?",
                  answer: "The 1% fee is calculated on the gross payment amount you receive from your clients, before any processing fees or taxes."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h4 className="font-semibold text-navy-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
