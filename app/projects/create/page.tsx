'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Save,
  Users,
  Calendar,
  DollarSign,
  Target,
  Plus,
  X,
  User,
  Building,
  CheckCircle
} from 'lucide-react'
import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

const mockClients = [
  { id: '1', name: 'Acme Corporation', email: 'contact@acme.com' },
  { id: '2', name: 'TechStart Inc', email: 'hello@techstart.com' },
  { id: '3', name: 'Design Studio Pro', email: 'info@designstudio.com' }
]

const projectTemplates = [
  {
    id: 'web-dev',
    name: 'Website Development',
    description: 'Full-stack web application project',
    estimatedDuration: 12,
    defaultTasks: ['Planning', 'Design', 'Development', 'Testing', 'Deployment']
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    description: 'Native or cross-platform mobile application',
    estimatedDuration: 16,
    defaultTasks: ['Research', 'UI/UX Design', 'Development', 'Testing', 'App Store Submission']
  },
  {
    id: 'branding',
    name: 'Brand Identity',
    description: 'Complete brand identity and design system',
    estimatedDuration: 8,
    defaultTasks: ['Brand Strategy', 'Logo Design', 'Brand Guidelines', 'Marketing Materials']
  }
]

interface TeamMember {
  id: string
  name: string
  email: string
  role: string
}

interface Task {
  id: string
  title: string
  assignee: string
  dueDate: string
}

export default function CreateProjectPage() {
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    clientId: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    budget: '',
    priority: 'medium',
    status: 'planning',
    template: ''
  })

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showClientModal, setShowClientModal] = useState(false)
  const [showMemberModal, setShowMemberModal] = useState(false)
  const [selectedClient, setSelectedClient] = useState<any>(null)

  const handleInputChange = (field: string, value: string) => {
    setProjectData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const addTeamMember = (member: TeamMember) => {
    setTeamMembers(prev => [...prev, member])
    setShowMemberModal(false)
  }

  const removeTeamMember = (id: string) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id))
  }

  const addTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: '',
      assignee: '',
      dueDate: ''
    }
    setTasks(prev => [...prev, newTask])
  }

  const updateTask = (id: string, field: keyof Task, value: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, [field]: value } : task
    ))
  }

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const applyTemplate = (templateId: string) => {
    const template = projectTemplates.find(t => t.id === templateId)
    if (template) {
      handleInputChange('template', templateId)
      handleInputChange('description', template.description)
      
      // Calculate end date based on estimated duration
      const startDate = new Date(projectData.startDate)
      const endDate = new Date(startDate)
      endDate.setDate(endDate.getDate() + (template.estimatedDuration * 7)) // Convert weeks to days
      handleInputChange('endDate', endDate.toISOString().split('T')[0])

      // Add default tasks
      const defaultTasks: Task[] = template.defaultTasks.map((taskTitle, index) => ({
        id: `template-${index}`,
        title: taskTitle,
        assignee: '',
        dueDate: ''
      }))
      setTasks(defaultTasks)
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!projectData.name.trim()) {
      newErrors.name = 'Project name is required'
    }

    if (!projectData.clientId) {
      newErrors.client = 'Please select a client'
    }

    if (!projectData.startDate) {
      newErrors.startDate = 'Start date is required'
    }

    if (!projectData.endDate) {
      newErrors.endDate = 'End date is required'
    } else if (new Date(projectData.endDate) <= new Date(projectData.startDate)) {
      newErrors.endDate = 'End date must be after start date'
    }

    if (!projectData.budget || parseFloat(projectData.budget) <= 0) {
      newErrors.budget = 'Valid budget is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (action: 'draft' | 'start') => {
    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    const projectPayload = {
      ...projectData,
      budget: parseFloat(projectData.budget),
      teamMembers,
      tasks: tasks.filter(task => task.title.trim()),
      status: action === 'draft' ? 'planning' : 'active'
    }

    console.log('Creating project:', projectPayload)
    
    setIsLoading(false)
    
    // Redirect to projects list or project details
    // router.push('/projects')
  }

  return (
    <AppLayout currentPage="projects">
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
              href="/projects"
              className="mr-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Create Project</h1>
              <p className="text-gray-600">Set up a new project for your client</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <button
              onClick={() => handleSubmit('draft')}
              disabled={isLoading}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold transition-colors flex items-center"
            >
              <Save className="w-5 h-5 mr-2" />
              Save Draft
            </button>
            <button
              onClick={() => handleSubmit('start')}
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-light-blue-500 to-blue-600 hover:from-light-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all flex items-center transform hover:scale-105"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <CheckCircle className="w-5 h-5 mr-2" />
              )}
              Create & Start Project
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Templates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Start from Template (Optional)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projectTemplates.map(template => (
                  <button
                    key={template.id}
                    onClick={() => applyTemplate(template.id)}
                    className={`p-4 border rounded-lg text-left transition-all hover:shadow-md ${
                      projectData.template === template.id
                        ? 'border-light-blue-500 bg-light-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{template.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                    <p className="text-xs text-gray-500">{template.estimatedDuration} weeks</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Basic Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
                  <input
                    type="text"
                    value={projectData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="e.g., E-commerce Website Redesign"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={projectData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe the project scope and objectives"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Client Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
                  {selectedClient ? (
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{selectedClient.name}</p>
                        <p className="text-sm text-gray-600">{selectedClient.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedClient(null)
                          handleInputChange('clientId', '')
                        }}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowClientModal(true)}
                      className={`w-full p-4 border-2 border-dashed rounded-lg text-center hover:bg-gray-50 transition-colors ${
                        errors.client ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <Building className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Select a client</p>
                    </button>
                  )}
                  {errors.client && <p className="mt-1 text-sm text-red-600">{errors.client}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      value={projectData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent ${
                        errors.startDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.startDate && <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                    <input
                      type="date"
                      value={projectData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent ${
                        errors.endDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.endDate && <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={projectData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent ${
                          errors.budget ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.budget && <p className="mt-1 text-sm text-red-600">{errors.budget}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <select
                      value={projectData.priority}
                      onChange={(e) => handleInputChange('priority', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Members */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
                <button
                  onClick={() => setShowMemberModal(true)}
                  className="bg-light-blue-600 hover:bg-light-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Member
                </button>
              </div>

              {teamMembers.length > 0 ? (
                <div className="space-y-3">
                  {teamMembers.map(member => (
                    <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-light-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-semibold text-sm">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeTeamMember(member.id)}
                        className="p-1 text-gray-400 hover:text-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No team members added yet</p>
                </div>
              )}
            </motion.div>

            {/* Initial Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Initial Tasks</h3>
                <button
                  onClick={addTask}
                  className="bg-light-blue-600 hover:bg-light-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </button>
              </div>

              {tasks.length > 0 ? (
                <div className="space-y-4">
                  {tasks.map(task => (
                    <div key={task.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <input
                            type="text"
                            value={task.title}
                            onChange={(e) => updateTask(task.id, 'title', e.target.value)}
                            placeholder="Task title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <input
                            type="date"
                            value={task.dueDate}
                            onChange={(e) => updateTask(task.id, 'dueDate', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <select
                            value={task.assignee}
                            onChange={(e) => updateTask(task.id, 'assignee', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue-500 focus:border-transparent"
                          >
                            <option value="">Assign to...</option>
                            {teamMembers.map(member => (
                              <option key={member.id} value={member.id}>{member.name}</option>
                            ))}
                          </select>
                          <button
                            onClick={() => removeTask(task.id)}
                            className="p-2 text-gray-400 hover:text-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No tasks added yet</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Budget</span>
                  <span className="font-semibold text-xl text-gray-900">
                    ${projectData.budget || '0.00'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">
                    {projectData.startDate && projectData.endDate 
                      ? `${Math.ceil((new Date(projectData.endDate).getTime() - new Date(projectData.startDate).getTime()) / (1000 * 60 * 60 * 24))} days`
                      : 'Not set'
                    }
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Priority</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    projectData.priority === 'high' ? 'bg-red-100 text-red-800' :
                    projectData.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {projectData.priority.charAt(0).toUpperCase() + projectData.priority.slice(1)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Team Members</span>
                  <span className="font-medium">{teamMembers.length}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Initial Tasks</span>
                  <span className="font-medium">{tasks.filter(task => task.title.trim()).length}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Client Selection Modal */}
        {showClientModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Select Client</h3>
                <button
                  onClick={() => setShowClientModal(false)}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                {mockClients.map(client => (
                  <button
                    key={client.id}
                    onClick={() => {
                      setSelectedClient(client)
                      handleInputChange('clientId', client.id)
                      setShowClientModal(false)
                    }}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-600">{client.email}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

// Helper function to add weeks to date
declare global {
  interface Date {
    setWeeks(weeks: number): Date
  }
}

Date.prototype.setWeeks = function(weeks: number) {
  this.setDate(this.getDate() + (weeks * 7))
  return this
}
