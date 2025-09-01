'use client'

import { motion } from 'framer-motion'
import { Download, Calendar, FileText, Image, Mail, ExternalLink, ArrowRight } from 'lucide-react'



const pressReleases = [
  {
    date: "2024-01-15",
    title: "Nitron Secures $5M Series A Funding to Accelerate Business Management Platform",
    summary: "Funding will be used to expand product development, grow the team, and accelerate market expansion for the business management platform.",
    link: "#",
    category: "Funding"
  },
  {
    date: "2024-01-10",
    title: "Nitron Launches Mobile App for Business Management on the Go",
    summary: "New mobile application brings powerful business management tools to iOS and Android devices, enabling entrepreneurs to manage their businesses from anywhere.",
    link: "#",
    category: "Product Launch"
  },
  {
    date: "2024-01-05",
    title: "Nitron Reaches 1,000 Active Users Milestone",
    summary: "Company celebrates major milestone as thousands of entrepreneurs adopt Nitron's business management platform to streamline their operations.",
    link: "#",
    category: "Company News"
  },
  {
    date: "2023-12-20",
    title: "Nitron Introduces Advanced Automation Features for Small Businesses",
    summary: "New workflow automation tools help small business owners save time and reduce manual tasks through intelligent process automation.",
    link: "#",
    category: "Product Update"
  },
  {
    date: "2023-12-10",
    title: "Nitron Partners with Leading Payment Processors for Enhanced Financial Management",
    summary: "Strategic partnerships with major payment processors enable seamless payment processing and financial management for Nitron users.",
    link: "#",
    category: "Partnership"
  }
]

const mediaKit = [
  {
    name: "Company Logo",
    description: "High-resolution Nitron logo in various formats (PNG, SVG, EPS)",
    size: "2.3 MB",
    icon: Image
  },
  {
    name: "Brand Guidelines",
    description: "Complete brand guidelines including colors, typography, and usage rules",
    size: "1.8 MB",
    icon: FileText
  },
  {
    name: "Product Screenshots",
    description: "High-quality screenshots of Nitron's web and mobile applications",
    size: "5.2 MB",
    icon: Image
  },
  {
    name: "Team Photos",
    description: "Professional headshots of Nitron's leadership team",
    size: "3.1 MB",
    icon: Image
  },
  {
    name: "Company Fact Sheet",
    description: "Key facts, statistics, and company information for media use",
    size: "0.8 MB",
    icon: FileText
  }
]

const companyStats = [
  { label: "Active Users", value: "1,000+" },
  { label: "Countries Served", value: "25+" },
  { label: "Team Members", value: "15+" },
  { label: "Uptime", value: "99.97%" }
]

export default function PressPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="section-padding">
        <div className="container-max">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
                Press & Media
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the latest news, press releases, and media resources about Nitron. 
                We're here to help journalists and media outlets tell our story.
              </p>
            </motion.div>
          </div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-20"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Company Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-light-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Press Releases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-light-blue-100 text-light-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {release.category}
                        </span>
                        <span className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(release.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">{release.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{release.summary}</p>
                    </div>
                    <a
                      href={release.link}
                      className="flex items-center text-light-blue-600 hover:text-light-blue-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media Kit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Media Kit</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Download our media kit for high-resolution logos, brand guidelines, product screenshots, 
              and other resources to help you create compelling content about Nitron.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaKit.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-light-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-light-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-navy-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{item.size}</span>
                        <a
                          href="#"
                          className="flex items-center text-light-blue-600 hover:text-light-blue-700 text-sm font-medium"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="#"
                className="btn-primary inline-flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Complete Media Kit (ZIP)
              </a>
            </div>
          </motion.div>

          {/* Press Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-light-blue-500 to-light-blue-600 rounded-xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Press Contact</h2>
            <p className="text-xl text-light-blue-100 mb-8 max-w-2xl mx-auto">
              For press inquiries, interview requests, or additional information, 
              please contact our press team.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:press@nitron.digital"
                  className="text-white hover:text-light-blue-100 font-medium"
                >
                  press@nitron.digital
                </a>
              </div>
              <div className="text-light-blue-100">
                <p>Response time: Within 24 hours</p>
                <p>For urgent inquiries: (833) 364-8766</p>
              </div>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Company Information</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Founded: 2023</li>
                  <li>• Headquarters: Manchester, NH</li>
                  <li>• Industry: Business Management Software</li>
                  <li>• Funding: $5M Series A</li>
                  <li>• Team Size: 15+ employees</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/about" className="text-light-blue-600 hover:text-light-blue-700 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="text-light-blue-600 hover:text-light-blue-700 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/help" className="text-light-blue-600 hover:text-light-blue-700 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/status" className="text-light-blue-600 hover:text-light-blue-700 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      System Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
