'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Camera,
  Upload,
  Save,
  Receipt,
  Calendar,
  DollarSign,
  Building,
  Tag,
  FileText,
  CreditCard,
  X,
  Check
} from 'lucide-react'
import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

const categories = [
  'Office Supplies',
  'Software',
  'Travel',
  'Meals',
  'Equipment',
  'Marketing',
  'Professional Services',
  'Utilities',
  'Insurance',
  'Other'
]

const paymentMethods = [
  'Credit Card',
  'Debit Card',
  'Cash',
  'Bank Transfer',
  'Corporate Card',
  'PayPal',
  'Other'
]

const projects = [
  'General',
  'Website Development',
  'Mobile App',
  'Brand Identity',
  'SEO Campaign',
  'Database Migration'
]

export default function CreateExpensePage() {
  const [expenseData, setExpenseData] = useState({
    vendor: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    project: '',
    paymentMethod: '',
    receiptFile: null as File | null,
    billable: false,
    recurring: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setExpenseData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      handleInputChange('receiptFile', file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setReceiptPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!expenseData.vendor.trim()) {
      newErrors.vendor = 'Vendor is required'
    }

    if (!expenseData.amount || parseFloat(expenseData.amount) <= 0) {
      newErrors.amount = 'Valid amount is required'
    }

    if (!expenseData.category) {
      newErrors.category = 'Category is required'
    }

    if (!expenseData.date) {
      newErrors.date = 'Date is required'
    }

    if (!expenseData.paymentMethod) {
      newErrors.paymentMethod = 'Payment method is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (action: 'save' | 'submit') => {
    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    const expensePayload = {
      ...expenseData,
      amount: parseFloat(expenseData.amount),
      status: action === 'save' ? 'draft' : 'pending'
    }

    console.log('Saving expense:', expensePayload)
    
    setIsLoading(false)
    
    // Redirect to expenses list
    // router.push('/expenses')
  }

  return (
    <AppLayout currentPage="expenses">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link
              href="/expenses"
              className="mr-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Add Expense</h1>
              <p className="text-gray-600">Record a new business expense</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <Link
              href="/expenses/scan"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center"
            >
              <Camera className="w-5 h-5 mr-2" />
              Scan Receipt
            </Link>
            <button
              onClick={() => handleSubmit('save')}
              disabled={isLoading}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold transition-colors flex items-center"
            >
              <Save className="w-5 h-5 mr-2" />
              Save Draft
            </button>
            <button
              onClick={() => handleSubmit('submit')}
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all flex items-center transform hover:scale-105"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <Check className="w-5 h-5 mr-2" />
              )}
              Submit Expense
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Expense Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vendor/Merchant</label>
                  <input
                    type="text"
                    value={expenseData.vendor}
                    onChange={(e) => handleInputChange('vendor', e.target.value)}
                    placeholder="e.g., Office Depot, Amazon"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent ${
                      errors.vendor ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.vendor && <p className="mt-1 text-sm text-red-600">{errors.vendor}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={expenseData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent ${
                        errors.amount ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={expenseData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent ${
                      errors.category ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={expenseData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <select
                    value={expenseData.paymentMethod}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent ${
                      errors.paymentMethod ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select payment method</option>
                    {paymentMethods.map(method => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                  {errors.paymentMethod && <p className="mt-1 text-sm text-red-600">{errors.paymentMethod}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project (Optional)</label>
                  <select
                    value={expenseData.project}
                    onChange={(e) => handleInputChange('project', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
                  >
                    <option value="">Select project</option>
                    {projects.map(project => (
                      <option key={project} value={project}>{project}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={expenseData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Brief description of the expense"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Options */}
              <div className="mt-6 space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={expenseData.billable}
                    onChange={(e) => handleInputChange('billable', e.target.checked)}
                    className="w-4 h-4 text-light-blue-600 border-gray-300 rounded focus:ring-light-blue-500"
                  />
                  <span className="ml-3 text-sm text-gray-700">This expense is billable to a client</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={expenseData.recurring}
                    onChange={(e) => handleInputChange('recurring', e.target.checked)}
                    className="w-4 h-4 text-light-blue-600 border-gray-300 rounded focus:ring-light-blue-500"
                  />
                  <span className="ml-3 text-sm text-gray-700">This is a recurring expense</span>
                </label>
              </div>
            </motion.div>

            {/* Receipt Upload */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Receipt</h3>
              
              {receiptPreview ? (
                <div className="relative">
                  <img
                    src={receiptPreview}
                    alt="Receipt preview"
                    className="w-full max-w-md mx-auto rounded-lg border border-gray-200"
                  />
                  <button
                    onClick={() => {
                      setReceiptPreview(null)
                      handleInputChange('receiptFile', null)
                    }}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive ? 'border-light-blue-500 bg-light-blue-50' : 'border-gray-300'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Receipt className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    Drag and drop your receipt here, or click to browse
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                    className="hidden"
                    id="receipt-upload"
                  />
                  <label
                    htmlFor="receipt-upload"
                    className="bg-light-blue-600 hover:bg-light-blue-700 text-white px-6 py-2 rounded-lg font-medium cursor-pointer transition-colors inline-flex items-center"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Choose File
                  </label>
                  <p className="text-sm text-gray-500 mt-2">
                    Supported formats: JPG, PNG, PDF (Max 5MB)
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Expense Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-semibold text-2xl text-gray-900">
                    ${expenseData.amount || '0.00'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">
                    {expenseData.category || 'Not selected'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">
                    {expenseData.date ? new Date(expenseData.date).toLocaleDateString() : 'Not set'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-medium">
                    {expenseData.paymentMethod || 'Not selected'}
                  </span>
                </div>

                {expenseData.project && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Project</span>
                    <span className="font-medium">{expenseData.project}</span>
                  </div>
                )}

                <hr className="border-gray-200" />

                <div className="space-y-2">
                  {expenseData.billable && (
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-green-600">Billable to client</span>
                    </div>
                  )}
                  {expenseData.recurring && (
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-blue-600">Recurring expense</span>
                    </div>
                  )}
                  {expenseData.receiptFile && (
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-purple-500 mr-2" />
                      <span className="text-purple-600">Receipt attached</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Quick Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-blue-50 rounded-xl border border-blue-200 p-6"
            >
              <h4 className="font-semibold text-blue-900 mb-4">💡 Quick Tips</h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Always attach receipts for better record keeping</li>
                <li>• Use detailed descriptions for easier categorization</li>
                <li>• Mark billable expenses to track client reimbursements</li>
                <li>• Set up recurring expenses for monthly subscriptions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
