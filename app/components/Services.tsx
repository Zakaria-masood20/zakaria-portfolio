"use client"

import { motion } from "framer-motion"
import { Bot, Workflow, Code, Brain, Cloud, Shield } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      title: "AI-Powered Applications & Chatbots",
      description: "Cut operational costs by 60% with intelligent assistants that handle customer queries 24/7, generate documents automatically, and streamline complex workflows. Built with Azure Bot Services, OpenAI, and enterprise-grade security.",
      highlights: ["70% faster response time", "24/7 availability", "Multi-language support"],
      useCases: "Customer support, Lead generation, Document automation, Internal help desks"
    },
    {
      icon: <Workflow className="w-12 h-12 text-orange-500" />,
      title: "Workflow Automation & System Integration",
      description: "Save 20+ hours weekly by automating repetitive tasks and connecting disparate systems. Custom n8n workflows, Power Automate solutions, and API integrations that eliminate manual data entry and reduce errors by 90%.",
      highlights: ["20+ hrs/week saved", "90% error reduction", "Real-time sync"],
      useCases: "Invoice processing, Data synchronization, Email automation, Report generation"
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "Full-Stack Web Application Development",
      description: "Launch your MVP 40% faster with modern, scalable applications. React/Next.js frontends with lightning-fast performance, backed by robust Node.js/Python APIs. Mobile-responsive, SEO-optimized, and built for growth.",
      highlights: ["40% faster delivery", "99.9% uptime", "SEO optimized"],
      useCases: "SaaS platforms, E-commerce, Dashboards, Enterprise portals"
    },
    {
      icon: <Brain className="w-12 h-12 text-red-500" />,
      title: "AI & Machine Learning Solutions",
      description: "Transform your data into competitive advantage with custom ML models achieving 95%+ accuracy. From computer vision for quality control to predictive analytics that forecast trends 30 days ahead.",
      highlights: ["95%+ accuracy", "3x ROI average", "Custom models"],
      useCases: "Fraud detection, Quality control, Predictive analytics, Image recognition"
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-500" />,
      title: "Cloud & DevOps Engineering",
      description: "Reduce infrastructure costs by 40% while improving reliability to 99.99% uptime. Automated deployments, auto-scaling, and disaster recovery solutions on AWS/Azure that grow with your business.",
      highlights: ["40% cost reduction", "99.99% uptime", "Auto-scaling"],
      useCases: "Migration to cloud, CI/CD setup, Containerization, Infrastructure as Code",
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "IT Infrastructure & Cybersecurity",
      description: "Protect your business with enterprise-grade security that blocks 99% of threats before they reach your network. GDPR-compliant solutions, penetration testing, and 24/7 monitoring to safeguard your data and reputation.",
      highlights: ["99% threat prevention", "GDPR compliant", "24/7 monitoring"],
      useCases: "Security audits, Network design, Compliance setup, Incident response",
    }
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold ml-4 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              
              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    ✓ {highlight}
                  </span>
                ))}
              </div>
              
              {/* Use Cases */}
              <div className="mb-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Perfect for:</span> {service.useCases}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

