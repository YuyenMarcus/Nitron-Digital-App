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
  Camera,
  Receipt,
  Calendar,
  DollarSign,
  Tag,
  Building,
  X,
  Upload
} from 'lucide-react'
import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

// Mock expense data
const expenses = [
  {
    id: 'EXP-001',
    vendor: 'Office Supplies Co',
    amount: 234.50,
    category: 'Office Supplies',
    date: '2024-01-15',
    description: 'Printer paper and pens',
    receipt: true,
    status: 'approved',
    project: 'General',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'EXP-002',
    vendor: 'Adobe Systems',
    amount: 99.00,
    category: 'Software',
    date: '2024-01-14',
    description: 'Creative Cloud subscription',
    receipt: true,
    status: 'pending',
    project: 'Design Project',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'EXP-003',
    vendor: 'Delta Airlines',
    amount: 456.78,
    category: 'Travel',
    date: '2024-01-13',
    description: 'Business trip to NYC',
    receipt: true,
    status: 'approved',
    project: 'Client Meeting',
    paymentMethod: 'Corporate Card'
  },
  {
    id: 'EXP-004',
    vendor: 'The Bistro',
    amount: 67.89,
    category: 'Meals',
    date: '2024-01-12',
    description: 'Client lunch meeting',
    receipt: false,
    status: 'pending',
    project: 'Sales',
    paymentMethod: 'Cash'
  },
  {
    id: 'EXP-005',
    vendor: 'AWS',
    amount: 189.45,
    category: 'Software',
    date: '2024-01-11',
    description: 'Cloud hosting services',
    receipt: true,
    status: 'approved',
    project: 'Web Development',
    paymentMethod: 'Credit Card'
  }
]

const categories = [
  'All Categories',
  'Office Supplies',
  'Software',
  'Travel',
  'Meals',
  'Equipment',
  'Marketing',
  'Professional Services'
]

const statusConfig = {
  approved: { 
    label: 'Approved', 
    color: 'bg-green-100 text-green-800'
  },
  pending: { 
    label: 'Pending', 
    color: 'bg-yellow-100 text-yellow-800'
  },
  rejected: { 
    label: 'Rejected', 
    color: 'bg-red-100 text-red-800'
  }
}

export default function ExpensesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All Categories')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  const [selectedExpenses, setSelectedExpenses] = useState<string[]>([])
  const [dateRange, setDateRange] = useState('all')

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expense.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expense.id.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = categoryFilter === 'All Categories' || expense.category === categoryFilter
    const matchesStatus = statusFilter === 'all' || expense.status === statusFilter
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    switch (sortBy) {
      case 'amount':
        return b.amount - a.amount
      case 'vendor':
        return a.vendor.localeCompare(b.vendor)
      case 'category':
        return a.category.localeCompare(b.category)
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      default:
        return 0
    }
  })

  const handleSelectExpense = (expenseId: string) => {
    setSelectedExpenses(prev => 
      prev.includes(expenseId) 
        ? prev.filter(id => id !== expenseId)
        : [...prev, expenseId]
    )
  }

  const handleSelectAll = () => {
    setSelectedExpenses(
      selectedExpenses.length === sortedExpenses.length 
        ? [] 
        : sortedExpenses.map(expense => expense.id)
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

  const totalExpenses = sortedExpenses.reduce((sum, expense) => sum + expense.amount, 0)
  const approvedExpenses = sortedExpenses
    .filter(expense => expense.status === 'approved')
    .reduce((sum, expense) => sum + expense.amount, 0)
  const pendingExpenses = sortedExpenses
    .filter(expense => expense.status === 'pending')
    .reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <AppLayout currentPage="expenses">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Expenses</h1>
            <p className="text-gray-600">Track and manage all your business expenses</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4 mt-4 lg:mt-0"
          >
            <Link
              href="/expenses/scan"
              className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold flex items-center transition-all duration-200"
            >
              <Camera className="w-5 h-5 mr-2" />
              Scan Receipt
            </Link>
            <Link
              href="/expenses/create"
              className="bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center transform hover:scale-105 transition-all duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Expense
            </Link>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalExpenses)}</p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-red-600" />
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
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(approvedExpenses)}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Receipt className="w-6 h-6 text-green-600" />
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
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(pendingExpenses)}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">{sortedExpenses.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Tag className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
                placeholder="Search expenses..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="amount">Sort by Amount</option>
                <option value="vendor">Sort by Vendor</option>
                <option value="category">Sort by Category</option>
              </select>

              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Expenses Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedExpenses.length === sortedExpenses.length && sortedExpenses.length > 0}
                onChange={handleSelectAll}
                className="w-4 h-4 text-light-blue-600 border-gray-300 rounded focus:ring-light-blue-500"
              />
              <div className="ml-6 grid grid-cols-7 gap-4 flex-1 text-sm font-medium text-gray-600">
                <div>Expense</div>
                <div>Vendor</div>
                <div>Amount</div>
                <div>Category</div>
                <div>Date</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {sortedExpenses.map((expense, index) => (
              <motion.div
                key={expense.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedExpenses.includes(expense.id)}
                    onChange={() => handleSelectExpense(expense.id)}
                    className="w-4 h-4 text-light-blue-600 border-gray-300 rounded focus:ring-light-blue-500"
                  />
                  <div className="ml-6 grid grid-cols-7 gap-4 flex-1 items-center">
                    {/* Expense */}
                    <div>
                      <div className="flex items-center">
                        <div className="font-semibold text-gray-900">{expense.id}</div>
                        {expense.receipt && (
                          <Receipt className="w-4 h-4 text-green-500 ml-2" />
                        )}
                      </div>
                      <div className="text-sm text-gray-500 truncate">{expense.description}</div>
                    </div>

                    {/* Vendor */}
                    <div>
                      <div className="font-medium text-gray-900">{expense.vendor}</div>
                      <div className="text-sm text-gray-500">{expense.paymentMethod}</div>
                    </div>

                    {/* Amount */}
                    <div className="font-semibold text-gray-900">
                      {formatCurrency(expense.amount)}
                    </div>

                    {/* Category */}
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {expense.category}
                      </span>
                    </div>

                    {/* Date */}
                    <div>
                      <div className="text-gray-900">{formatDate(expense.date)}</div>
                      <div className="text-sm text-gray-500">{expense.project}</div>
                    </div>

                    {/* Status */}
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusConfig[expense.status as keyof typeof statusConfig].color}`}>
                        {statusConfig[expense.status as keyof typeof statusConfig].label}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/expenses/${expense.id}`}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/expenses/${expense.id}/edit`}
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
            ))}
          </div>

          {/* Empty State */}
          {sortedExpenses.length === 0 && (
            <div className="px-6 py-12 text-center">
              <Receipt className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No expenses found</h3>
              <p className="text-gray-600 mb-6">
                {searchQuery || categoryFilter !== 'All Categories' || statusFilter !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Get started by adding your first expense'
                }
              </p>
              {!searchQuery && categoryFilter === 'All Categories' && statusFilter === 'all' && (
                <div className="flex items-center justify-center space-x-4">
                  <Link
                    href="/expenses/scan"
                    className="inline-flex items-center bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Scan Receipt
                  </Link>
                  <Link
                    href="/expenses/create"
                    className="inline-flex items-center bg-gradient-to-r from-light-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-light-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Expense
                  </Link>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Bulk Actions */}
        {selectedExpenses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg border border-gray-200 p-4"
          >
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                {selectedExpenses.length} expense{selectedExpenses.length > 1 ? 's' : ''} selected
              </span>
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                Approve
              </button>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Export
              </button>
              <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                Delete
              </button>
              <button
                onClick={() => setSelectedExpenses([])}
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
