'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    monthlyPrice: "$0",
    annualPrice: "$0",
    description: "Perfect for getting started",
    icon: Star,
    features: [
      "Up to 5 invoices per month",
      "Basic automation features",
      "Google Drive integration",
      "Email support",
      "Mobile app access"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Professional",
    price: "$19",
    period: "per month",
    monthlyPrice: "$19",
    annualPrice: "$180",
    description: "For growing businesses",
    icon: Zap,
    features: [
      "Unlimited invoices",
      "Advanced automation",
      "Slack integration",
      "Priority support",
      "Analytics dashboard",
      "Custom branding",
      "Team collaboration (up to 3 users)"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "per month",
    monthlyPrice: "$49",
    annualPrice: "$468",
    description: "For established businesses",
    icon: Crown,
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Advanced security features",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Advanced reporting"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const togglePricing = () => {
    setIsAnnual(!isAnnual)
  }

  return (
    <section className="section-padding bg-gray-50">
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
            Simple,{' '}
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises. Choose the plan that fits your business needs.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-4">
              <span className={`text-sm font-medium transition-colors duration-200 ${!isAnnual ? 'text-navy-900' : 'text-gray-600'}`}>Monthly</span>
              <div 
                className="w-12 h-6 bg-navy-500 rounded-full relative cursor-pointer pricing-toggle"
                onClick={togglePricing}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    togglePricing()
                  }
                }}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-200 ${
                  isAnnual ? 'right-1' : 'left-1'
                }`}></div>
              </div>
              <span className={`text-sm font-medium transition-colors duration-200 ${isAnnual ? 'text-navy-900' : 'text-gray-600'}`}>Annual</span>
              <div className="bg-light-blue-100 text-light-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                Save 20%
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-light-blue-500 to-light-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              {/* Plan Card */}
              <div className={`card h-full ${plan.popular ? 'ring-2 ring-light-blue-500 shadow-2xl' : ''} ${plan.popular ? 'pt-8' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular ? 'bg-light-blue-100' : 'bg-navy-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.popular ? 'text-light-blue-600' : 'text-navy-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-navy-900">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                      {isAnnual && <span className="text-xs text-light-blue-600"> (billed annually)</span>}
                    </span>
                    {isAnnual && plan.name !== 'Free' && (
                      <div className="text-sm text-light-blue-600 mt-1">
                        Save ${parseInt(plan.monthlyPrice.replace('$', '')) * 12 - parseInt(plan.annualPrice.replace('$', ''))} annually
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'btn-accent'
                    : plan.name === 'Free'
                    ? 'btn-secondary'
                    : 'btn-primary'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-navy-900 mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-navy-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="text-left bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-navy-900 mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600 text-sm">No setup fees. You only pay for the plan you choose, starting from $0.</p>
            </div>
            <div className="text-left bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-navy-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, and Apple Pay for iOS users.</p>
            </div>
            <div className="text-left bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-navy-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600 text-sm">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 