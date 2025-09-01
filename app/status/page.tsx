import { Metadata } from 'next'
import { CheckCircle, AlertCircle, Clock, Wifi, WifiOff, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'System Status - Nitron',
  description: 'Check the real-time status of Nitron services. Monitor uptime, view incident history, and stay informed about maintenance.',
}

const services = [
  {
    name: "Web Application",
    status: "operational",
    uptime: "99.98%",
    lastIncident: "2024-01-15",
    description: "Main web interface for Nitron"
  },
  {
    name: "Mobile App",
    status: "operational",
    uptime: "99.95%",
    lastIncident: "2024-01-10",
    description: "iOS and Android applications"
  },
  {
    name: "API",
    status: "operational",
    uptime: "99.99%",
    lastIncident: "2024-01-20",
    description: "REST API for integrations"
  },
  {
    name: "Payment Processing",
    status: "operational",
    uptime: "99.97%",
    lastIncident: "2024-01-12",
    description: "Credit card and payment processing"
  },
  {
    name: "Email Notifications",
    status: "operational",
    uptime: "99.96%",
    lastIncident: "2024-01-18",
    description: "Email delivery and notifications"
  },
  {
    name: "Database",
    status: "operational",
    uptime: "99.99%",
    lastIncident: "2024-01-05",
    description: "Primary data storage"
  }
]

const incidents = [
  {
    id: "INC-2024-001",
    title: "Scheduled Maintenance - Database Optimization",
    status: "resolved",
    severity: "maintenance",
    startTime: "2024-01-20T02:00:00Z",
    endTime: "2024-01-20T04:00:00Z",
    description: "Routine database maintenance to improve performance. Some features may be temporarily unavailable.",
    updates: [
      {
        time: "2024-01-20T04:15:00Z",
        message: "Maintenance completed successfully. All services are operational."
      },
      {
        time: "2024-01-20T02:00:00Z",
        message: "Maintenance started. Expected completion in 2 hours."
      }
    ]
  },
  {
    id: "INC-2024-002",
    title: "Payment Processing Interruption",
    status: "resolved",
    severity: "minor",
    startTime: "2024-01-15T14:30:00Z",
    endTime: "2024-01-15T15:45:00Z",
    description: "Some payment processing requests were experiencing delays due to third-party service issues.",
    updates: [
      {
        time: "2024-01-15T15:45:00Z",
        message: "Issue resolved. All payment processing is back to normal."
      },
      {
        time: "2024-01-15T15:00:00Z",
        message: "Working with payment provider to resolve the issue."
      },
      {
        time: "2024-01-15T14:30:00Z",
        message: "Investigating payment processing delays."
      }
    ]
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="w-5 h-5 text-green-500" />
    case 'degraded':
      return <AlertCircle className="w-5 h-5 text-yellow-500" />
    case 'outage':
      return <WifiOff className="w-5 h-5 text-red-500" />
    case 'maintenance':
      return <Clock className="w-5 h-5 text-blue-500" />
    default:
      return <Activity className="w-5 h-5 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational':
      return 'text-green-600'
    case 'degraded':
      return 'text-yellow-600'
    case 'outage':
      return 'text-red-600'
    case 'maintenance':
      return 'text-blue-600'
    default:
      return 'text-gray-600'
  }
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-800'
    case 'major':
      return 'bg-orange-100 text-orange-800'
    case 'minor':
      return 'bg-yellow-100 text-yellow-800'
    case 'maintenance':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function StatusPage() {
  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded'
  
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="section-padding">
        <div className="container-max max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time status of all Nitron services and infrastructure
            </p>
          </div>

          {/* Overall Status */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-navy-900">Overall System Status</h2>
              <div className="flex items-center space-x-3">
                {getStatusIcon(overallStatus)}
                <span className={`text-xl font-bold ${getStatusColor(overallStatus)}`}>
                  {overallStatus === 'operational' ? 'All Systems Operational' : 'Partial System Issues'}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99.97%</div>
                <div className="text-sm text-gray-600">Uptime (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900">2</div>
                <div className="text-sm text-gray-600">Incidents (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900">6</div>
                <div className="text-sm text-gray-600">Services Monitored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">Active Issues</div>
              </div>
            </div>
          </div>

          {/* Service Status */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Service Status</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-semibold text-navy-900">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${getStatusColor(service.status)}`}>
                      {service.status === 'operational' ? 'Operational' : 
                       service.status === 'degraded' ? 'Degraded Performance' :
                       service.status === 'outage' ? 'Outage' : 'Maintenance'}
                    </div>
                    <div className="text-sm text-gray-600">
                      Uptime: {service.uptime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className="text-sm text-gray-600">#{incident.id}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-navy-900">{incident.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">
                        {new Date(incident.startTime).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-600">
                        {new Date(incident.startTime).toLocaleTimeString()} - {new Date(incident.endTime).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{incident.description}</p>
                  
                  {/* Updates */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-navy-900">Updates</h4>
                    {incident.updates.map((update, updateIndex) => (
                      <div key={updateIndex} className="flex space-x-3">
                        <div className="text-sm text-gray-500 min-w-0">
                          {new Date(update.time).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-700 flex-1">
                          {update.message}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="bg-gradient-to-r from-light-blue-500 to-light-blue-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 text-light-blue-100">
              Get notified about system status changes, incidents, and maintenance windows.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="bg-white text-light-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mt-4 text-sm text-light-blue-100">
              <p>• Email notifications for incidents</p>
              <p>• RSS feed available</p>
              <p>• Unsubscribe anytime</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-600">
            <p className="mb-2">
              For urgent issues, contact our support team at{' '}
              <a href="mailto:support@nitron.digital" className="text-light-blue-600 hover:text-light-blue-700">
                support@nitron.digital
              </a>
            </p>
            <p className="text-sm">
              Last updated: {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
