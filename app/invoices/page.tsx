'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Trash2,
  MoreHorizontal,
  Calendar,
  DollarSign,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  X
} from 'lucide-react'
import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

// Mock invoice data
const invoices = [
  {
    id: 'INV-001',
    client: 'Acme Corporation',
    amount: 2500.00,
    status: 'paid',
    dueDate: '2024-01-15',
    issueDate: '2023-12-15',
    items: 3,
    description: 'Website Development Services'
  },
  {
    id: 'INV-002',
    client: 'TechStart Inc',
    amount: 1800.00,
    status: 'pending',
    dueDate: '2024-01-20',
    issueDate: '2023-12-20',
    items: 2,
    description: 'Mobile App Consulting'
  },
  {
    id: 'INV-003',
    client: 'Design Studio Pro',
    amount: 3200.00,
    status: 'overdue',
    dueDate: '2024-01-10',
    issueDate: '2023-12-10',
    items: 4,
    description: 'Brand Identity Package'
  },
  {
    id: 'INV-004',
    client: 'Marketing Solutions',
    amount: 1200.00,
    status: 'draft',
    dueDate: '2024-01-25',
    issueDate: '2024-01-05',
    items: 1,
    description: 'SEO Optimization Services'
  },
  {
    id: 'INV-005',
    client: 'E-commerce Plus',
    amount: 4500.00,
    status: 'sent',
    dueDate: '2024-01-30',
    issueDate: '2024-01-01',
    items: 5,
    description: 'Full Stack Development'
  }
]

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
  },
  sent: { 
    label: 'Sent', 
    color: 'bg-blue-100 text-blue-800', 
    icon: FileText,
    iconColor: 'text-blue-600'
  }
}

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('dueDate')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([])

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const sortedInvoices = [...filteredInvoices].sort((a, b) => {
    switch (sortBy) {
      case 'amount':
        return b.amount - a.amount
      case 'client':
        return a.client.localeCompare(b.client)
      case 'dueDate':
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      default:
        return 0
    }
  })

  const handleSelectInvoice = (invoiceId: string) => {
    setSelectedInvoices(prev => 
      prev.includes(invoiceId) 
        ? prev.filter(id => id !== invoiceId)
        : [...prev, invoiceId]
    )
  }

  const handleSelectAll = () => {
    setSelectedInvoices(
      selectedInvoices.length === sortedInvoices.length 
        ? [] 
        : sortedInvoices.map(invoice => invoice.id)
    )
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const totalAmount = sortedInvoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const paidAmount = sortedInvoices
    .filter(invoice => invoice.status === 'paid')
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <AppLayout currentPage="invoices">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Invoices</h1>
            <p className="text-gray-600">Manage and track all your invoices</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4 mt-4 lg:mt-0"
          >
            <Link
              href="/invoices/create"
              className="bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center transform hover:scale-105 transition-all duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create Invoice
            </Link>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Invoiced</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalAmount)}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Amount Paid</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(paidAmount)}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Invoices</p>
                <p className="text-2xl font-bold text-gray-900">{sortedInvoices.length}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search invoices..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
              >
                <option value="dueDate">Sort by Due Date</option>
                <option value="amount">Sort by Amount</option>
                <option value="client">Sort by Client</option>
              </select>

              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Invoices Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedInvoices.length === sortedInvoices.length && sortedInvoices.length > 0}
                onChange={handleSelectAll}
                className="w-4 h-4 text-light-blue-600 border-gray-300 rounded focus:ring-light-blue-500"
              />
              <div className="ml-6 grid grid-cols-6 gap-4 flex-1 text-sm font-medium text-gray-600">
                <div>Invoice</div>
                <div>Client</div>
                <div>Amount</div>
                <div>Status</div>
                <div>Due Date</div>
                <div>Actions</div>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {sortedInvoices.map((invoice, index) => {
              const StatusIcon = statusConfig[invoice.status as keyof typeof statusConfig].icon
              
              return (
                <motion.div
                  key={invoice.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedInvoices.includes(invoice.id)}
                      onChange={() => handleSelectInvoice(invoice.id)}
                      className="w-4 h-4 text-light-blue-600 border-gray-300 rounded focus:ring-light-blue-500"
                    />
                    <div className="ml-6 grid grid-cols-6 gap-4 flex-1 items-center">
                      {/* Invoice */}
                      <div>
                        <div className="font-semibold text-gray-900">{invoice.id}</div>
                        <div className="text-sm text-gray-500">{invoice.description}</div>
                      </div>

                      {/* Client */}
                      <div>
                        <div className="font-medium text-gray-900">{invoice.client}</div>
                        <div className="text-sm text-gray-500">{invoice.items} items</div>
                      </div>

                      {/* Amount */}
                      <div className="font-semibold text-gray-900">
                        {formatCurrency(invoice.amount)}
                      </div>

                      {/* Status */}
                      <div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusConfig[invoice.status as keyof typeof statusConfig].color}`}>
                          <StatusIcon className={`w-3 h-3 mr-1 ${statusConfig[invoice.status as keyof typeof statusConfig].iconColor}`} />
                          {statusConfig[invoice.status as keyof typeof statusConfig].label}
                        </span>
                      </div>

                      {/* Due Date */}
                      <div>
                        <div className="text-gray-900">{formatDate(invoice.dueDate)}</div>
                        <div className="text-sm text-gray-500">
                          Issued: {formatDate(invoice.issueDate)}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/invoices/${invoice.id}`}
                          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/invoices/${invoice.id}/edit`}
                          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Empty State */}
          {sortedInvoices.length === 0 && (
            <div className="px-6 py-12 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No invoices found</h3>
              <p className="text-gray-600 mb-6">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filters'
                  : 'Get started by creating your first invoice'
                }
              </p>
              {!searchQuery && statusFilter === 'all' && (
                <Link
                  href="/invoices/create"
                  className="inline-flex items-center bg-gradient-to-r from-light-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-light-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create Your First Invoice
                </Link>
              )}
            </div>
          )}
        </motion.div>

        {/* Bulk Actions */}
        {selectedInvoices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg border border-gray-200 p-4"
          >
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                {selectedInvoices.length} invoice{selectedInvoices.length > 1 ? 's' : ''} selected
              </span>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Send Reminders
              </button>
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                Mark as Paid
              </button>
              <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                Delete
              </button>
              <button
                onClick={() => setSelectedInvoices([])}
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </AppLayout>
  )
}
