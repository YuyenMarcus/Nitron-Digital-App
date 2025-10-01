'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2,
  Users,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  Pause,
  Play,
  FolderOpen,
  BarChart3,
  X,
  MoreHorizontal
} from 'lucide-react'
import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

// Mock project data
const projects = [
  {
    id: 'PRJ-001',
    name: 'E-commerce Website Redesign',
    client: 'TechStart Inc',
    status: 'active',
    progress: 75,
    budget: 15000,
    spent: 11250,
    startDate: '2023-12-01',
    endDate: '2024-02-15',
    teamMembers: 4,
    tasksCompleted: 18,
    totalTasks: 24,
    description: 'Complete redesign of the e-commerce platform with new features',
    priority: 'high'
  },
  {
    id: 'PRJ-002',
    name: 'Mobile App Development',
    client: 'Acme Corporation',
    status: 'active',
    progress: 45,
    budget: 25000,
    spent: 11250,
    startDate: '2024-01-01',
    endDate: '2024-04-30',
    teamMembers: 6,
    tasksCompleted: 12,
    totalTasks: 28,
    description: 'Native iOS and Android app for customer engagement',
    priority: 'high'
  },
  {
    id: 'PRJ-003',
    name: 'Brand Identity Package',
    client: 'Design Studio Pro',
    status: 'completed',
    progress: 100,
    budget: 8000,
    spent: 7800,
    startDate: '2023-11-15',
    endDate: '2024-01-10',
    teamMembers: 3,
    tasksCompleted: 15,
    totalTasks: 15,
    description: 'Complete brand identity including logo, guidelines, and collateral',
    priority: 'medium'
  },
  {
    id: 'PRJ-004',
    name: 'SEO Optimization Campaign',
    client: 'Marketing Solutions',
    status: 'paused',
    progress: 30,
    budget: 5000,
    spent: 1500,
    startDate: '2024-01-05',
    endDate: '2024-03-05',
    teamMembers: 2,
    tasksCompleted: 6,
    totalTasks: 20,
    description: 'Comprehensive SEO audit and optimization implementation',
    priority: 'low'
  },
  {
    id: 'PRJ-005',
    name: 'Database Migration',
    client: 'E-commerce Plus',
    status: 'planning',
    progress: 10,
    budget: 12000,
    spent: 0,
    startDate: '2024-02-01',
    endDate: '2024-05-01',
    teamMembers: 3,
    tasksCompleted: 2,
    totalTasks: 18,
    description: 'Migration from legacy database to modern cloud infrastructure',
    priority: 'medium'
  }
]

const statusConfig = {
  active: { 
    label: 'Active', 
    color: 'bg-green-100 text-green-800',
    icon: Play,
    iconColor: 'text-green-600'
  },
  completed: { 
    label: 'Completed', 
    color: 'bg-blue-100 text-blue-800',
    icon: CheckCircle,
    iconColor: 'text-blue-600'
  },
  paused: { 
    label: 'Paused', 
    color: 'bg-yellow-100 text-yellow-800',
    icon: Pause,
    iconColor: 'text-yellow-600'
  },
  planning: { 
    label: 'Planning', 
    color: 'bg-purple-100 text-purple-800',
    icon: Clock,
    iconColor: 'text-purple-600'
  },
  overdue: { 
    label: 'Overdue', 
    color: 'bg-red-100 text-red-800',
    icon: AlertTriangle,
    iconColor: 'text-red-600'
  }
}

const priorityConfig = {
  high: { label: 'High', color: 'bg-red-100 text-red-800' },
  medium: { label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
  low: { label: 'Low', color: 'bg-green-100 text-green-800' }
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [sortBy, setSortBy] = useState('endDate')
  const [selectedProjects, setSelectedProjects] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || project.priority === priorityFilter
    
    return matchesSearch && matchesStatus && matchesPriority
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'budget':
        return b.budget - a.budget
      case 'progress':
        return b.progress - a.progress
      case 'client':
        return a.client.localeCompare(b.client)
      case 'endDate':
        return new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
      default:
        return 0
    }
  })

  const handleSelectProject = (projectId: string) => {
    setSelectedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
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

  const totalBudget = sortedProjects.reduce((sum, project) => sum + project.budget, 0)
  const totalSpent = sortedProjects.reduce((sum, project) => sum + project.spent, 0)
  const activeProjects = sortedProjects.filter(project => project.status === 'active').length
  const completedProjects = sortedProjects.filter(project => project.status === 'completed').length

  return (
    <AppLayout currentPage="projects">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
            <p className="text-gray-600">Manage and track all your client projects</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4 mt-4 lg:mt-0"
          >
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="w-4 h-4 flex flex-col justify-between">
                  <div className="h-0.5 bg-current rounded"></div>
                  <div className="h-0.5 bg-current rounded"></div>
                  <div className="h-0.5 bg-current rounded"></div>
                  <div className="h-0.5 bg-current rounded"></div>
                </div>
              </button>
            </div>
            <Link
              href="/projects/create"
              className="bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center transform hover:scale-105 transition-all duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Project
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
                <p className="text-sm font-medium text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalBudget)}</p>
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
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalSpent)}</p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-red-600" />
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
                <p className="text-sm font-medium text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">{activeProjects}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Play className="w-6 h-6 text-green-600" />
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
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{completedProjects}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600" />
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
                placeholder="Search projects..."
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
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
                <option value="planning">Planning</option>
              </select>

              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
              >
                <option value="all">All Priority</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
              >
                <option value="endDate">Sort by Due Date</option>
                <option value="budget">Sort by Budget</option>
                <option value="progress">Sort by Progress</option>
                <option value="client">Sort by Client</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProjects.map((project, index) => {
                const StatusIcon = statusConfig[project.status as keyof typeof statusConfig].icon
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <Link 
                          href={`/projects/${project.id}`}
                          className="text-lg font-semibold text-gray-900 hover:text-light-blue-600 transition-colors"
                        >
                          {project.name}
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">{project.client}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityConfig[project.priority as keyof typeof priorityConfig].color}`}>
                          {priorityConfig[project.priority as keyof typeof priorityConfig].label}
                        </span>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-gray-900">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                          className="bg-gradient-to-r from-light-blue-500 to-blue-600 h-2 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-600">Budget</p>
                        <p className="font-semibold text-gray-900">{formatCurrency(project.budget)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Spent</p>
                        <p className="font-semibold text-gray-900">{formatCurrency(project.spent)}</p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <StatusIcon className={`w-4 h-4 mr-2 ${statusConfig[project.status as keyof typeof statusConfig].iconColor}`} />
                        <span className="text-sm font-medium text-gray-900">
                          {statusConfig[project.status as keyof typeof statusConfig].label}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        {project.teamMembers}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-600">
                  <div>Project</div>
                  <div>Client</div>
                  <div>Progress</div>
                  <div>Budget</div>
                  <div>Due Date</div>
                  <div>Status</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {sortedProjects.map((project, index) => {
                  const StatusIcon = statusConfig[project.status as keyof typeof statusConfig].icon
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                      className="px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="grid grid-cols-6 gap-4 items-center">
                        {/* Project */}
                        <div>
                          <Link 
                            href={`/projects/${project.id}`}
                            className="font-semibold text-gray-900 hover:text-light-blue-600 transition-colors"
                          >
                            {project.name}
                          </Link>
                          <p className="text-sm text-gray-500">{project.id}</p>
                        </div>

                        {/* Client */}
                        <div>
                          <p className="font-medium text-gray-900">{project.client}</p>
                          <p className="text-sm text-gray-500">{project.teamMembers} members</p>
                        </div>

                        {/* Progress */}
                        <div>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                              <div 
                                className="bg-gradient-to-r from-light-blue-500 to-blue-600 h-2 rounded-full"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {project.tasksCompleted}/{project.totalTasks} tasks
                          </p>
                        </div>

                        {/* Budget */}
                        <div>
                          <p className="font-semibold text-gray-900">{formatCurrency(project.budget)}</p>
                          <p className="text-sm text-gray-500">Spent: {formatCurrency(project.spent)}</p>
                        </div>

                        {/* Due Date */}
                        <div>
                          <p className="text-gray-900">{formatDate(project.endDate)}</p>
                          <p className="text-sm text-gray-500">Started: {formatDate(project.startDate)}</p>
                        </div>

                        {/* Status */}
                        <div>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusConfig[project.status as keyof typeof statusConfig].color}`}>
                            <StatusIcon className={`w-3 h-3 mr-1 ${statusConfig[project.status as keyof typeof statusConfig].iconColor}`} />
                            {statusConfig[project.status as keyof typeof statusConfig].label}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Empty State */}
          {sortedProjects.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-12 text-center">
              <FolderOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">
                {searchQuery || statusFilter !== 'all' || priorityFilter !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Get started by creating your first project'
                }
              </p>
              {!searchQuery && statusFilter === 'all' && priorityFilter === 'all' && (
                <Link
                  href="/projects/create"
                  className="inline-flex items-center bg-gradient-to-r from-light-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-light-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create Your First Project
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AppLayout>
  )
}
