'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, ArrowLeft, Check, RefreshCw } from 'lucide-react'
import Link from 'next/link'

type ResetStep = 'email' | 'sent' | 'success'

export default function ResetPasswordPage() {
  const [currentStep, setCurrentStep] = useState<ResetStep>('email')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = () => {
    const newErrors: Record<string, string> = {}

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically make an API call to send reset email
    console.log('Sending reset email to:', email)
    
    setIsSubmitting(false)
    setCurrentStep('sent')
  }

  const handleResendEmail = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Resending reset email to:', email)
    
    setIsSubmitting(false)
  }

  const renderEmailStep = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-16 bg-gradient-to-r from-light-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
        >
          <RefreshCw className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold text-navy-900 mb-2">Reset Your Password</h1>
        <p className="text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors(prev => ({ ...prev, email: '' }))
              }}
              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-light-blue-500 focus:border-transparent transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john@example.com"
              autoComplete="email"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Send Reset Link
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link
          href="/login"
          className="inline-flex items-center text-sm text-light-blue-600 hover:text-light-blue-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Sign In
        </Link>
      </div>
    </motion.div>
  )

  const renderSentStep = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
      >
        <Mail className="w-8 h-8 text-white" />
      </motion.div>
      
      <h1 className="text-3xl font-bold text-navy-900 mb-2">Check Your Email</h1>
      <p className="text-gray-600 mb-6">
        We've sent a password reset link to <strong>{email}</strong>
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <p className="text-sm text-blue-800">
          <strong>Didn't receive the email?</strong> Check your spam folder or try resending the link.
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleResendEmail}
          disabled={isSubmitting}
          className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Resend Email
              <RefreshCw className="w-5 h-5 ml-2" />
            </>
          )}
        </button>

        <Link
          href="/login"
          className="block w-full text-center py-3 px-6 text-light-blue-600 hover:text-light-blue-700 font-medium"
        >
          Back to Sign In
        </Link>
      </div>
    </motion.div>
  )

  const renderSuccessStep = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
      >
        <Check className="w-8 h-8 text-white" />
      </motion.div>
      
      <h1 className="text-3xl font-bold text-navy-900 mb-2">Password Reset Successfully</h1>
      <p className="text-gray-600 mb-8">
        Your password has been reset. You can now sign in with your new password.
      </p>

      <Link
        href="/login"
        className="inline-flex items-center bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
      >
        Sign In Now
        <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-white to-gray-50 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {currentStep === 'email' && renderEmailStep()}
          {currentStep === 'sent' && renderSentStep()}
          {currentStep === 'success' && renderSuccessStep()}
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex justify-center space-x-2"
        >
          {['email', 'sent', 'success'].map((step, index) => {
            const isActive = currentStep === step
            const isCompleted = ['email', 'sent', 'success'].indexOf(currentStep) > index
            
            return (
              <div
                key={step}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-light-blue-500 w-8' 
                    : isCompleted 
                    ? 'bg-green-500' 
                    : 'bg-gray-300'
                }`}
              />
            )
          })}
        </motion.div>

        {/* Test Buttons (Remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 text-center space-x-2">
            <button
              onClick={() => setCurrentStep('email')}
              className="text-xs bg-gray-200 px-2 py-1 rounded"
            >
              Email
            </button>
            <button
              onClick={() => setCurrentStep('sent')}
              className="text-xs bg-gray-200 px-2 py-1 rounded"
            >
              Sent
            </button>
            <button
              onClick={() => setCurrentStep('success')}
              className="text-xs bg-gray-200 px-2 py-1 rounded"
            >
              Success
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}
