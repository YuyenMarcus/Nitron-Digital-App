'use client'

import { motion } from 'framer-motion'
import { Users, Heart, Zap, Shield, Globe, Coffee, BookOpen, Award, MapPin, Clock, DollarSign } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and mental health support for you and your family."
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Above-market salaries with equity options and performance-based bonuses."
  },
  {
    icon: Clock,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO to maintain work-life balance."
  },
  {
    icon: BookOpen,
    title: "Learning & Growth",
    description: "Professional development budget, conference attendance, and mentorship programs."
  },
  {
    icon: Coffee,
    title: "Team Events",
    description: "Regular team building activities, virtual happy hours, and annual company retreats."
  },
  {
    icon: Globe,
    title: "Remote Culture",
    description: "Work from anywhere with a home office setup allowance and co-working space access."
  }
]

const values = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best ideas come from working together and supporting each other."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We encourage experimentation and thinking outside the box to solve complex problems."
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We trust our team members to make decisions and take ownership of their work."
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "We put ourselves in our customers' shoes to build products that truly serve their needs."
  }
]

const openPositions = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our core engineering team to build scalable, user-friendly features that help entrepreneurs manage their businesses.",
    requirements: [
      "5+ years of experience with React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Strong understanding of database design and optimization",
      "Experience with payment processing and financial systems"
    ],
    responsibilities: [
      "Design and implement new features for our business management platform",
      "Collaborate with product and design teams to create intuitive user experiences",
      "Mentor junior engineers and contribute to technical architecture decisions",
      "Ensure code quality through testing and code reviews"
    ]
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Lead product strategy and execution for features that help small business owners automate their workflows.",
    requirements: [
      "3+ years of product management experience in SaaS or fintech",
      "Strong analytical skills and data-driven decision making",
      "Experience with user research and customer development",
      "Excellent communication and stakeholder management skills"
    ],
    responsibilities: [
      "Define product vision and strategy for key features",
      "Conduct user research and gather customer feedback",
      "Work closely with engineering and design teams to ship high-quality products",
      "Analyze product metrics and optimize for user engagement"
    ]
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Help our customers succeed by providing exceptional support and guidance on using Nitron effectively.",
    requirements: [
      "2+ years of customer success or account management experience",
      "Experience with CRM systems and customer support tools",
      "Strong problem-solving and communication skills",
      "Passion for helping small business owners succeed"
    ],
    responsibilities: [
      "Onboard new customers and ensure successful product adoption",
      "Provide proactive support and guidance to customers",
      "Gather customer feedback and advocate for product improvements",
      "Work with sales and product teams to improve customer experience"
    ]
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Develop and execute marketing strategies to grow our brand and acquire new customers.",
    requirements: [
      "3+ years of marketing experience in B2B SaaS",
      "Experience with digital marketing channels and analytics",
      "Strong content creation and copywriting skills",
      "Experience with marketing automation and CRM tools"
    ],
    responsibilities: [
      "Develop and execute multi-channel marketing campaigns",
      "Create compelling content for website, blog, and social media",
      "Manage paid advertising campaigns and optimize for ROI",
      "Work with sales team to generate qualified leads"
    ]
  }
]

export default function CareersPage() {
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
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Help us build the future of business management. We're looking for passionate people 
                who want to make a difference in the lives of entrepreneurs.
              </p>
              <a
                href="#open-positions"
                className="btn-primary px-8 py-3 text-lg"
              >
                View Open Positions
              </a>
            </motion.div>
          </div>

          {/* Culture Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Our Culture</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-8 text-center">
                At Nitron, we believe that great products are built by great teams. We foster a culture 
                of collaboration, innovation, and continuous learning where everyone has a voice and 
                the opportunity to make an impact.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-light-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-light-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="w-12 h-12 bg-light-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-light-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div
            id="open-positions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Open Positions</h2>
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">{position.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="bg-light-blue-100 text-light-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {position.department}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="btn-primary mt-4 lg:mt-0"
                    >
                      Apply Now
                    </a>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <span className="text-light-blue-600 mr-2">•</span>
                            <span className="text-gray-600 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <span className="text-light-blue-600 mr-2">•</span>
                            <span className="text-gray-600 text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-light-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-light-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Apply</h3>
                <p className="text-gray-600 text-sm">Submit your resume and cover letter through our application portal.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-light-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-light-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Interview</h3>
                <p className="text-gray-600 text-sm">Meet with our team to discuss your experience and the role.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-light-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-light-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Technical</h3>
                <p className="text-gray-600 text-sm">Complete a technical assessment relevant to the position.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-light-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-light-blue-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Offer</h3>
                <p className="text-gray-600 text-sm">Receive an offer and join our team to build amazing products!</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-light-blue-500 to-light-blue-600 rounded-xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-xl text-light-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people to join our team. Send us your resume and we'll 
              reach out when the right opportunity opens up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@nitron.digital"
                className="bg-white text-light-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Send Resume
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-light-blue-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
