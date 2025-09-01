'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, TrendingUp, Shield, Zap, Heart } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with our customers' needs. We're here to make your business life easier."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your data security is our top priority. We use enterprise-grade security to protect your business information."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push boundaries to create tools that give you a competitive edge in today's fast-paced business world."
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in building a community of entrepreneurs who support and learn from each other."
  }
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former product manager at Stripe with 10+ years experience in fintech. Passionate about empowering small businesses.",
    image: "/team/sarah.jpg",
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer with expertise in scalable systems. Led engineering teams at multiple successful startups.",
    image: "/team/marcus.jpg",
    linkedin: "https://linkedin.com/in/marcusrodriguez"
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    bio: "Product leader with deep experience in SaaS and automation. Previously built products used by millions of users.",
    image: "/team/emily.jpg",
    linkedin: "https://linkedin.com/in/emilywatson"
  },
  {
    name: "David Kim",
    role: "Head of Design",
    bio: "Award-winning designer focused on creating intuitive user experiences. Former design lead at Airbnb.",
    image: "/team/david.jpg",
    linkedin: "https://linkedin.com/in/davidkim"
  }
]

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Nitron was born from a simple observation: small business owners were spending too much time on administrative tasks."
  },
  {
    year: "2024",
    title: "First 1,000 Users",
    description: "Reached our first major milestone with 1,000 active users managing their businesses with Nitron."
  },
  {
    year: "2024",
    title: "Series A Funding",
    description: "Secured $5M in funding to accelerate product development and expand our team."
  },
  {
    year: "2024",
    title: "Mobile App Launch",
    description: "Launched our mobile app, making business management truly accessible from anywhere."
  }
]

export default function AboutPage() {
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
                About Nitron
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to simplify business management for freelancers and small business owners, 
                so you can focus on what you do best.
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-light-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-light-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To democratize business management tools, making professional-grade automation and 
                financial management accessible to every entrepreneur, regardless of their technical expertise.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that when small businesses succeed, communities thrive. That's why we're 
                building the tools that will power the next generation of entrepreneurs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-navy-600" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                A world where running a business is as simple as using your favorite app. Where 
                entrepreneurs can focus on their passion and creativity, not paperwork and processes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every small business has access to the same powerful 
                tools that Fortune 500 companies use, leveling the playing field for entrepreneurs everywhere.
              </p>
            </motion.div>
          </div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                Nitron was born from frustration. Our founders, Sarah and Marcus, were running their own 
                consulting business and spending countless hours on administrative tasks that had nothing 
                to do with serving their clients or growing their business.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                They tried every tool on the market, but nothing was designed for the unique needs of 
                freelancers and small business owners. The existing solutions were either too complex, 
                too expensive, or required technical expertise that most entrepreneurs don't have.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                So they decided to build the solution themselves. What started as a simple invoicing 
                tool has grown into a comprehensive business management platform that handles everything 
                from client management to automated workflows.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Nitron serves thousands of entrepreneurs who are focused on what they do best: 
                building their businesses and serving their customers. We're just getting started.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="w-12 h-12 bg-light-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-light-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
                  <p className="text-light-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-blue-600 hover:text-light-blue-700 text-sm font-medium"
                  >
                    View LinkedIn →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-20"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                >
                  <div className="md:w-1/3 text-center">
                    <div className="text-4xl font-bold text-light-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-navy-900">{milestone.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
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
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
            <p className="text-xl text-light-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to simplify your business management? Start your journey with Nitron today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-white text-light-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
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
