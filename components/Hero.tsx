'use client'

import { motion } from 'framer-motion'
import { Download, Play, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-50 via-white to-gray-50 overflow-hidden">
      {/* Subtle Background Element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-light-blue-100 to-navy-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-navy-100 to-gray-100 rounded-full opacity-15 blur-3xl"></div>
      </div>
      
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 hero-pattern"></div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-light-blue-100 text-light-blue-700 text-sm font-medium mb-10 border border-light-blue-200"
            >
              <span className="w-2 h-2 bg-light-blue-500 rounded-full mr-2"></span>
              Start Free • Only 1% When You Get Paid
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-8 leading-tight"
            >
              <span className="gradient-text">Nitron: All Your Automations, Everywhere.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl lg:max-w-none leading-relaxed"
            >
              Effortlessly manage invoices, workflows, and client interactions across all your devices. 
              <span className="font-semibold text-navy-900">No monthly fees. Ever.</span> Only pay when you get paid.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16"
            >
              <a href="#pricing" className="btn-primary text-lg px-8 py-4 flex items-center group">
                <Download className="w-5 h-5 mr-2" />
                Create Your Free Account
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#demo" className="btn-secondary text-lg px-8 py-4 flex items-center group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </motion.div>

            {/* App Store Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <div className="inline-flex items-center px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors cursor-pointer">
                <div className="text-left mr-3">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="text-sm text-gray-500"
            >
              <p>Trusted by 10,000+ freelancers and small business owners</p>
            </motion.div>
          </motion.div>

          {/* Right Side - Multi-Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 15, y: 20 }}
            animate={{ opacity: 1, x: 0, rotate: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="multi-device-mockup-container">
              {/* MacBook Component - Self-contained with perfect proportions */}
              <div className="macbook-wrapper">
                <div className="macbook-screen">
                  <div className="macbook-camera"></div>
                  <div className="w-20 h-20 relative">
                    <Image
                      src="/logo.png"
                      alt="Nitron Logo"
                      fill
                      className="object-contain opacity-95"
                    />
                  </div>
                </div>
                <div className="macbook-base"></div>
              </div>

              {/* iPhone Component - Self-contained with perfect proportions */}
              <div className="iphone-wrapper">
                <div className="iphone-screen">
                  <div className="iphone-dynamic-island"></div>
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logo.png"
                      alt="Nitron Logo"
                      fill
                      className="object-contain opacity-95"
                    />
                  </div>
                </div>
              </div>

              {/* Apple Watch Component - Self-contained with perfect proportions */}
              <div className="watch-wrapper">
                <div className="watch-screen">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/logo.png"
                      alt="Nitron Logo"
                      fill
                      className="object-contain opacity-95"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements for Depth */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-light-blue-100 rounded-full opacity-60 animate-bounce-gentle"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-navy-100 rounded-full opacity-60 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 