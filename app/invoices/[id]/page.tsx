'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Download,
  Send,
  Edit,
  Copy,
  MoreHorizontal,
  CheckCircle,
  Clock,
  AlertTriangle,
  DollarSign,
  Calendar,
  User,
  Building,
  Mail,
  Phone,
  MapPin,
  FileText,
  Eye,
  Share,
  Trash2
} from 'lucide-react'
import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

// Mock invoice data - in real app, this would come from API based on ID
const mockInvoice = {
  id: 'INV-001',
  invoiceNumber: 'INV-001',
  status: 'paid',
  issueDate: '2023-12-15',
  dueDate: '2024-01-15',
  paidDate: '2024-01-12',
  client: {
    name: 'Acme Corporation',
    email: 'billing@acme.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105'
  },
  items: [
    {
      id: '1',
      description: 'Website Design and Development',
      quantity: 1,
      rate: 2000.00,
      amount: 2000.00
    },
    {
      id: '2',
      description: 'Monthly Maintenance (3 months)',
      quantity: 3,
      rate: 150.00,
      amount: 450.00
    },
    {
      id: '3',
      description: 'SEO Optimization',
      quantity: 1,
      rate: 500.00,
      amount: 500.00
    }
  ],
  subtotal: 2950.00,
  tax: 8.25,
  taxAmount: 243.38,
  discount: 0,
  discountAmount: 0,
  total: 3193.38,
  notes: 'Thank you for your business! Please contact us if you have any questions.',
  terms: 'Payment is due within 30 days of invoice date. Late payments may incur additional fees.',
  paymentHistory: [
    {
      id: '1',
      date: '2024-01-12',
      amount: 3193.38,
      method: 'Bank Transfer',
      reference: 'TXN-789123'
    }
  ]
}

const statusConfig = {
  paid: { 
    label: 'Paid', 
    color: 'bg-green-100 text-green-800', 
    icon: CheckCircle,
    iconColor: 'text-green-600'
  },
  pending: { 
    label: 'Pending', 
    color: 'bg-yellow-100 text-yellow-800', 
    icon: Clock,
    iconColor: 'text-yellow-600'
  },
  overdue: { 
    label: 'Overdue', 
    color: 'bg-red-100 text-red-800', 
    icon: AlertTriangle,
    iconColor: 'text-red-600'
  },
  draft: { 
    label: 'Draft', 
    color: 'bg-gray-100 text-gray-800', 
    icon: FileText,
    iconColor: 'text-gray-600'
  }
}

export default function InvoiceDetailsPage({ params }: { params: { id: string } }) {
  const [showActionsMenu, setShowActionsMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const StatusIcon = statusConfig[mockInvoice.status as keyof typeof statusConfig].icon

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleAction = async (action: string) => {
    setIsLoading(true)
    setShowActionsMenu(false)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log(`Performing action: ${action}`)
    setIsLoading(false)
  }

  return (
    <AppLayout currentPage="invoices">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-4 lg:mb-0"
          >
            <Link
              href="/invoices"
              className="mr-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold text-gray-900">{mockInvoice.invoiceNumber}</h1>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${statusConfig[mockInvoice.status as keyof typeof statusConfig].color}`}>
                  <StatusIcon className={`w-4 h-4 mr-1 ${statusConfig[mockInvoice.status as keyof typeof statusConfig].iconColor}`} />
                  {statusConfig[mockInvoice.status as keyof typeof statusConfig].label}
                </span>
              </div>
              <p className="text-gray-600 mt-1">Invoice details and payment information</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
            {mockInvoice.status !== 'paid' && (
              <button className="px-6 py-3 bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all flex items-center transform hover:scale-105">
                <Send className="w-5 h-5 mr-2" />
                Send Reminder
              </button>
            )}
            <div className="relative">
              <button
                onClick={() => setShowActionsMenu(!showActionsMenu)}
                className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
              
              {showActionsMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
                  <Link
                    href={`/invoices/${mockInvoice.id}/edit`}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Edit className="w-4 h-4 mr-3" />
                    Edit Invoice
                  </Link>
                  <button
                    onClick={() => handleAction('duplicate')}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Copy className="w-4 h-4 mr-3" />
                    Duplicate
                  </button>
                  <button
                    onClick={() => handleAction('share')}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Share className="w-4 h-4 mr-3" />
                    Share
                  </button>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button
                      onClick={() => handleAction('delete')}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4 mr-3" />
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Invoice Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(mockInvoice.total)}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Issue Date</p>
                    <p className="text-lg font-semibold text-gray-900">{formatDate(mockInvoice.issueDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Due Date</p>
                    <p className="text-lg font-semibold text-gray-900">{formatDate(mockInvoice.dueDate)}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Client Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Bill To</h3>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">{mockInvoice.client.name}</h4>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{mockInvoice.client.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{mockInvoice.client.phone}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        {mockInvoice.client.address}<br />
                        {mockInvoice.client.city}, {mockInvoice.client.state} {mockInvoice.client.zipCode}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Invoice Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Invoice Items</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Description</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">Qty</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-600">Rate</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-600">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockInvoice.items.map((item, index) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{item.description}</div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">{item.quantity}</td>
                        <td className="px-6 py-4 text-right text-gray-600">{formatCurrency(item.rate)}</td>
                        <td className="px-6 py-4 text-right font-semibold text-gray-900">{formatCurrency(item.amount)}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="border-t border-gray-200 bg-gray-50 p-6">
                <div className="space-y-3 max-w-sm ml-auto">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">{formatCurrency(mockInvoice.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax ({mockInvoice.tax}%):</span>
                    <span className="font-medium">{formatCurrency(mockInvoice.taxAmount)}</span>
                  </div>
                  {mockInvoice.discountAmount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount:</span>
                      <span className="font-medium">-{formatCurrency(mockInvoice.discountAmount)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-light-blue-600">{formatCurrency(mockInvoice.total)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Notes and Terms */}
            {(mockInvoice.notes || mockInvoice.terms) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Additional Information</h3>
                <div className="space-y-6">
                  {mockInvoice.notes && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Notes</h4>
                      <p className="text-gray-600">{mockInvoice.notes}</p>
                    </div>
                  )}
                  {mockInvoice.terms && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Terms & Conditions</h4>
                      <p className="text-gray-600">{mockInvoice.terms}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Status</h3>
              
              {mockInvoice.status === 'paid' ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Received</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Paid on {formatDate(mockInvoice.paidDate!)}
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-800 font-medium">
                      {formatCurrency(mockInvoice.total)}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Full payment received
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Pending</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Due {formatDate(mockInvoice.dueDate)}
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-sm text-yellow-800 font-medium">
                      {formatCurrency(mockInvoice.total)}
                    </p>
                    <p className="text-xs text-yellow-600 mt-1">
                      Outstanding balance
                    </p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Payment History */}
            {mockInvoice.paymentHistory.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment History</h3>
                <div className="space-y-4">
                  {mockInvoice.paymentHistory.map((payment, index) => (
                    <div key={payment.id} className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">{formatCurrency(payment.amount)}</p>
                          <p className="text-sm text-gray-600">{payment.method}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Ref: {payment.reference}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500">{formatDate(payment.date)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href={`/invoices/${mockInvoice.id}/edit`}
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Invoice
                </Link>
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Copy className="w-4 h-4 mr-2" />
                  Duplicate
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 bg-light-blue-600 hover:bg-light-blue-700 text-white rounded-lg transition-colors">
                  <Eye className="w-4 h-4 mr-2" />
                  View PDF
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Click outside to close actions menu */}
        {showActionsMenu && (
          <div
            className="fixed inset-0 z-5"
            onClick={() => setShowActionsMenu(false)}
          />
        )}
      </div>
    </AppLayout>
  )
}
