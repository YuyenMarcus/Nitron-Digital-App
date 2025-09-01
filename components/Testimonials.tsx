'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelance Designer",
    company: "Chen Design Studio",
    content: "Nitron has completely transformed how I manage my freelance business. The automation features save me hours every week, and the security gives me peace of mind.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Consultant",
    company: "Rodriguez Consulting",
    content: "As a consultant, I need to look professional. Nitron's clean interface and automated invoicing make me look like a much larger company than I am.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "Photographer",
    company: "Watson Photography",
    content: "The Google Drive integration is a game-changer. All my invoices are automatically organized, and I can access them from anywhere. Highly recommend!",
    rating: 5,
    avatar: "EW"
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
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
            Loved by{' '}
            <span className="gradient-text">Business Owners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what freelancers and small business owners are saying about how Nitron has transformed their workflow.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-navy-500 opacity-60" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-light-blue-500 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-light-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-navy-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-navy-600">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy-50 to-light-blue-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-navy-900 mb-12">
            Trusted by Thousands
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-navy-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy-600 mb-2">50K+</div>
              <div className="text-gray-600">Invoices Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy-600 mb-2">4.9/5</div>
              <div className="text-gray-600">App Store Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 