'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Edit,
  MoreHorizontal,
  Users,
  User,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertTriangle,
  Plus,
  Play,
  Pause,
  FileText,
  MessageSquare,
  Upload,
  Download,
  Target,
  BarChart3,
  TrendingUp
} from 'lucide-react'
import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

// Mock project data
const mockProject = {
  id: 'PRJ-001',
  name: 'E-commerce Website Redesign',
  description: 'Complete redesign of the e-commerce platform with new features including advanced search, wishlist functionality, and improved checkout process.',
  client: {
    name: 'TechStart Inc',
    email: 'contact@techstart.com',
    avatar: 'TS'
  },
  status: 'active',
  progress: 75,
  budget: 15000,
  spent: 11250,
  startDate: '2023-12-01',
  endDate: '2024-02-15',
  priority: 'high',
  teamMembers: [
    { id: '1', name: 'John Doe', role: 'Project Manager', avatar: 'JD', status: 'online' },
    { id: '2', name: 'Sarah Smith', role: 'UI/UX Designer', avatar: 'SS', status: 'busy' },
    { id: '3', name: 'Mike Johnson', role: 'Frontend Developer', avatar: 'MJ', status: 'online' },
    { id: '4', name: 'Lisa Chen', role: 'Backend Developer', avatar: 'LC', status: 'offline' }
  ],
  tasks: [
    { id: '1', title: 'Homepage Design Mockups', status: 'completed', assignee: 'Sarah Smith', dueDate: '2024-01-10', priority: 'high' },
    { id: '2', title: 'Product Catalog Development', status: 'in-progress', assignee: 'Mike Johnson', dueDate: '2024-01-20', priority: 'high' },
    { id: '3', title: 'Payment Gateway Integration', status: 'in-progress', assignee: 'Lisa Chen', dueDate: '2024-01-25', priority: 'medium' },
    { id: '4', title: 'User Authentication System', status: 'pending', assignee: 'Lisa Chen', dueDate: '2024-02-01', priority: 'medium' },
    { id: '5', title: 'Mobile Responsiveness', status: 'pending', assignee: 'Mike Johnson', dueDate: '2024-02-05', priority: 'low' }
  ],
  milestones: [
    { id: '1', title: 'Design Phase Complete', date: '2024-01-15', status: 'completed' },
    { id: '2', title: 'Development Phase 1', date: '2024-01-30', status: 'active' },
    { id: '3', title: 'Testing & QA', date: '2024-02-10', status: 'pending' },
    { id: '4', title: 'Launch', date: '2024-02-15', status: 'pending' }
  ],
  recentActivity: [
    { id: '1', user: 'Mike Johnson', action: 'completed task', target: 'Homepage Layout', time: '2 hours ago' },
    { id: '2', user: 'Sarah Smith', action: 'uploaded file', target: 'Design Mockups v2.pdf', time: '4 hours ago' },
    { id: '3', user: 'John Doe', action: 'added comment', target: 'Payment Integration', time: '6 hours ago' },
    { id: '4', user: 'Lisa Chen', action: 'started task', target: 'API Development', time: '1 day ago' }
  ]
}

const statusConfig = {
  active: { label: 'Active', color: 'bg-green-100 text-green-800', icon: Play },
  paused: { label: 'Paused', color: 'bg-yellow-100 text-yellow-800', icon: Pause },
  completed: { label: 'Completed', color: 'bg-blue-100 text-blue-800', icon: CheckCircle },
  planning: { label: 'Planning', color: 'bg-purple-100 text-purple-800', icon: Clock }
}

const taskStatusConfig = {
  completed: { label: 'Completed', color: 'bg-green-100 text-green-800', icon: CheckCircle },
  'in-progress': { label: 'In Progress', color: 'bg-blue-100 text-blue-800', icon: Clock },
  pending: { label: 'Pending', color: 'bg-gray-100 text-gray-800', icon: AlertTriangle }
}

const priorityConfig = {
  high: { label: 'High', color: 'bg-red-100 text-red-800' },
  medium: { label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
  low: { label: 'Low', color: 'bg-green-100 text-green-800' }
}

export default function ProjectDashboardPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [showActions, setShowActions] = useState(false)

  const StatusIcon = statusConfig[mockProject.status as keyof typeof statusConfig].icon

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

  const completedTasks = mockProject.tasks.filter(task => task.status === 'completed').length
  const totalTasks = mockProject.tasks.length
  const daysRemaining = Math.ceil((new Date(mockProject.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  return (
    <AppLayout currentPage="projects">
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
              href="/projects"
              className="mr-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold text-gray-900">{mockProject.name}</h1>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${statusConfig[mockProject.status as keyof typeof statusConfig].color}`}>
                  <StatusIcon className="w-4 h-4 mr-1" />
                  {statusConfig[mockProject.status as keyof typeof statusConfig].label}
                </span>
              </div>
              <p className="text-gray-600 mt-1">Client: {mockProject.client.name}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <Link
              href={`/projects/${mockProject.id}/edit`}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center"
            >
              <Edit className="w-5 h-5 mr-2" />
              Edit Project
            </Link>
            <div className="relative">
              <button
                onClick={() => setShowActions(!showActions)}
                className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
              
              {showActions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Download className="w-4 h-4 mr-3" />
                    Export Report
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Upload className="w-4 h-4 mr-3" />
                    Upload Files
                  </button>
                </div>
              )}
            </div>
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
                <p className="text-sm font-medium text-gray-600">Progress</p>
                <p className="text-2xl font-bold text-gray-900">{mockProject.progress}%</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-light-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${mockProject.progress}%` }}
                />
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
                <p className="text-sm font-medium text-gray-600">Budget Used</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(mockProject.spent)}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              of {formatCurrency(mockProject.budget)} budget
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tasks Completed</p>
                <p className="text-2xl font-bold text-gray-900">{completedTasks}/{totalTasks}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {Math.round((completedTasks / totalTasks) * 100)}% complete
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Days Remaining</p>
                <p className="text-2xl font-bold text-gray-900">{daysRemaining}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Due {formatDate(mockProject.endDate)}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Description</h3>
              <p className="text-gray-600 leading-relaxed">{mockProject.description}</p>
            </motion.div>

            {/* Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Tasks</h3>
                  <button className="bg-light-blue-600 hover:bg-light-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Task
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {mockProject.tasks.map((task, index) => {
                  const TaskStatusIcon = taskStatusConfig[task.status as keyof typeof taskStatusConfig].icon
                  
                  return (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-medium text-gray-900">{task.title}</h4>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${taskStatusConfig[task.status as keyof typeof taskStatusConfig].color}`}>
                              <TaskStatusIcon className="w-3 h-3 mr-1" />
                              {taskStatusConfig[task.status as keyof typeof taskStatusConfig].label}
                            </span>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${priorityConfig[task.priority as keyof typeof priorityConfig].color}`}>
                              {priorityConfig[task.priority as keyof typeof priorityConfig].label}
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 space-x-4">
                            <span>Assigned to: {task.assignee}</span>
                            <span>Due: {formatDate(task.dueDate)}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Milestones</h3>
              <div className="space-y-4">
                {mockProject.milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-4 ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'active' ? 'bg-blue-500' :
                      'bg-gray-300'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium ${
                          milestone.status === 'completed' ? 'text-green-700' :
                          milestone.status === 'active' ? 'text-blue-700' :
                          'text-gray-700'
                        }`}>
                          {milestone.title}
                        </h4>
                        <span className="text-sm text-gray-600">{formatDate(milestone.date)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Members */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Team Members</h3>
              <div className="space-y-4">
                {mockProject.teamMembers.map(member => (
                  <div key={member.id} className="flex items-center">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-light-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">{member.avatar}</span>
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        member.status === 'online' ? 'bg-green-500' :
                        member.status === 'busy' ? 'bg-yellow-500' :
                        'bg-gray-400'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {mockProject.recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span>{' '}
                        {activity.action}{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-light-blue-600 hover:bg-light-blue-700 text-white rounded-lg transition-colors">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Files
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Team Chat
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Click outside to close actions menu */}
        {showActions && (
          <div
            className="fixed inset-0 z-5"
            onClick={() => setShowActions(false)}
          />
        )}
      </div>
    </AppLayout>
  )
}
