'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  FileText, 
  Receipt, 
  Clock,
  Users,
  AlertCircle,
  CheckCircle,
  Calendar,
  ArrowRight,
  Plus
} from 'lucide-react'
import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

// Mock data - replace with real data from API
const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    name: 'Pending Invoices',
    value: '$12,234.00',
    change: '+4.3%',
    trend: 'up',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Total Expenses',
    value: '$3,456.78',
    change: '-2.5%',
    trend: 'down',
    icon: Receipt,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    name: 'Active Projects',
    value: '12',
    change: '+1',
    trend: 'up',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
]

const recentInvoices = [
  { id: 'INV-001', client: 'Acme Corp', amount: '$1,200.00', status: 'paid', date: '2024-01-15' },
  { id: 'INV-002', client: 'TechStart Inc', amount: '$2,400.00', status: 'pending', date: '2024-01-14' },
  { id: 'INV-003', client: 'Design Studio', amount: '$800.00', status: 'overdue', date: '2024-01-10' },
  { id: 'INV-004', client: 'Marketing Pro', amount: '$1,600.00', status: 'draft', date: '2024-01-12' }
]

const recentExpenses = [
  { id: 'EXP-001', vendor: 'Office Supplies Co', amount: '$234.50', category: 'Office Supplies', date: '2024-01-15' },
  { id: 'EXP-002', vendor: 'Software License', amount: '$99.00', category: 'Software', date: '2024-01-14' },
  { id: 'EXP-003', vendor: 'Travel Booking', amount: '$456.78', category: 'Travel', date: '2024-01-13' },
  { id: 'EXP-004', vendor: 'Client Lunch', amount: '$67.89', category: 'Meals', date: '2024-01-12' }
]

const upcomingTasks = [
  { id: 1, title: 'Send invoice to Acme Corp', priority: 'high', dueDate: '2024-01-16' },
  { id: 2, title: 'Review Q1 expenses', priority: 'medium', dueDate: '2024-01-18' },
  { id: 3, title: 'Update project timeline', priority: 'low', dueDate: '2024-01-20' },
  { id: 4, title: 'Client meeting preparation', priority: 'high', dueDate: '2024-01-17' }
]

const chartData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 }
]

export default function DashboardPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'overdue':
        return 'bg-red-100 text-red-800'
      case 'draft':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <AppLayout currentPage="dashboard">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
            </div>
            
            {/* Simple bar chart visualization */}
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={data.month} className="flex items-center">
                  <div className="w-8 text-sm text-gray-600">{data.month}</div>
                  <div className="flex-1 ml-4">
                    <div className="flex space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-3 relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(data.revenue / 5000) * 100}%` }}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                          className="bg-gradient-to-r from-light-blue-500 to-blue-600 h-3 rounded-full"
                        />
                      </div>
                      <div className="w-16 text-sm text-gray-600 text-right">${data.revenue}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/invoices/create"
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Create Invoice</span>
              </Link>
              <Link
                href="/expenses/create"
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Receipt className="w-8 h-8 text-green-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Log Expense</span>
              </Link>
              <Link
                href="/projects/create"
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Users className="w-8 h-8 text-purple-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">New Project</span>
              </Link>
              <Link
                href="/reports"
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">View Reports</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Invoices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Invoices</h3>
              <Link href="/invoices" className="text-sm text-blue-600 hover:text-blue-700">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentInvoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{invoice.id}</p>
                    <p className="text-sm text-gray-600">{invoice.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{invoice.amount}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Expenses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Expenses</h3>
              <Link href="/expenses" className="text-sm text-blue-600 hover:text-blue-700">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentExpenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{expense.vendor}</p>
                    <p className="text-sm text-gray-600">{expense.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{expense.amount}</p>
                    <p className="text-sm text-gray-600">{expense.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{task.title}</p>
                    <p className="text-sm text-gray-600">{task.dueDate}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  )
}
