'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, DollarSign, FileText, Calendar, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const metrics = [
  {
    title: "Total Revenue",
    value: "$8,500",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Invoices Processed",
    value: "124",
    change: "+8%", 
    trend: "up",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Average Invoice Value",
    value: "$685",
    change: "+5%",
    trend: "up",
    icon: TrendingUp,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Active Clients",
    value: "32",
    change: "+2%",
    trend: "up", 
    icon: Users,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50"
  }
]

const recentActivity = [
  {
    vendor: "Acme Corp.",
    amount: "$500",
    date: "Jul 15, 2025",
    status: "paid"
  },
  {
    vendor: "Creative Studio", 
    amount: "$1,200",
    date: "Jul 12, 2025",
    status: "pending"
  },
  {
    vendor: "Marketing Co.",
    amount: "$250", 
    date: "Jul 10, 2025",
    status: "paid"
  },
  {
    vendor: "Tech Solutions",
    amount: "$850",
    date: "Jul 8, 2025", 
    status: "overdue"
  }
]

const chartData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5100 },
  { month: "Mar", revenue: 4800 },
  { month: "Apr", revenue: 6200 },
  { month: "May", revenue: 7100 },
  { month: "Jun", revenue: 8500 }
]

export default function InsightsDashboard() {
  return (
    <section id="insights" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Gain Clarity with Financial Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform raw data into actionable business intelligence. Get real-time insights into your financial performance and make smarter decisions.
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${metric.bgColor}`}>
                  <metric.icon className={`w-6 h-6 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`} />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
              <div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: false }}
                  className="text-3xl font-bold text-navy-900 mb-2"
                >
                  {metric.value}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: false }}
                  className="text-gray-600 text-sm"
                >
                  {metric.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Financial Trends Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-50px" }}
            className="bg-gray-50 rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Monthly Revenue Trend</h3>
                <p className="text-gray-600">Track your business growth over time</p>
              </div>
              <div className="p-3 bg-light-blue-100 rounded-xl">
                <BarChart3 className="w-6 h-6 text-light-blue-600" />
              </div>
            </div>

            {/* Simple Bar Chart Visualization */}
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: `${(data.revenue / 8500) * 100}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="flex items-center"
                >
                  <div className="w-12 text-sm text-gray-600 font-medium">{data.month}</div>
                  <div className="flex-1 ml-4">
                    <div className="bg-gray-200 rounded-full h-8 relative overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-light-blue-500 to-light-blue-600 h-full rounded-full flex items-center justify-end pr-3"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(data.revenue / 8500) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: false }}
                      >
                        <span className="text-white text-sm font-semibold">
                          ${data.revenue.toLocaleString()}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-50px" }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Recent Activity</h3>
                <p className="text-gray-600">Latest invoice updates and payments</p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-white rounded-lg mr-4">
                      <FileText className="w-5 h-5 text-navy-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">{activity.vendor}</h4>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {activity.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-navy-900 text-lg">{activity.amount}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'paid' 
                        ? 'bg-green-100 text-green-800'
                        : activity.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <button className="w-full text-center text-light-blue-600 hover:text-light-blue-700 font-semibold transition-colors">
                View All Activity →
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-navy-50 to-light-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Ready to Get Clear Insights?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start making data-driven decisions today. See exactly how your business is performing with real-time dashboards and automated reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Dashboard
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Demo Dashboard
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
