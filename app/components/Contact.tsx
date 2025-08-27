"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Mail, MapPin, Phone, Send, Loader2, 
  Clock, Calendar, 
  CheckCircle, MessageCircle, Globe
} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "emailjs-com"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(5, "Please provide more details about your inquiry"),
})

type FormData = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error: any) {
      console.error("Failed to send email:", error?.text || error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get in touch to discuss your project and see how I can help
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information Card */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute transform rotate-45 -left-1/2 -top-1/2 w-96 h-96 border-8 border-white rounded-3xl"></div>
                <div className="absolute transform rotate-45 -right-1/2 -bottom-1/2 w-96 h-96 border-8 border-white rounded-3xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                {/* Response Time Badge */}
                <div className="mb-6 inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Usually responds within 24 hours
                </div>

                <div className="space-y-4">
                  <a 
                    href="mailto:mzakariamasood@gmail.com" 
                    className="flex items-center hover:translate-x-2 transition-transform duration-300"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <span className="text-sm">mzakariamasood@gmail.com</span>
                  </a>
                  
                  <a 
                    href="tel:+923211166066" 
                    className="flex items-center hover:translate-x-2 transition-transform duration-300"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    <span className="text-sm">+92-321-1166066</span>
                  </a>
                  
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span className="text-sm">Sargodha, Pakistan</span>
                  </div>

                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-3" />
                    <span className="text-sm">Available Worldwide (Remote)</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/30">
                  <h4 className="text-sm font-semibold mb-4">Connect with me</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/Zakaria-masood20"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/zakaria-masood-a543a1212/"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/923211166066"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
            >
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <span className="flex items-center">
                      Name <span className="text-red-500 ml-1">*</span>
                    </span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:text-white transition-all duration-300"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <span className="flex items-center">
                      Email <span className="text-red-500 ml-1">*</span>
                    </span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:text-white transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              {/* Subject */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <span className="flex items-center">
                    Subject <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  placeholder="Brief description of your project"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:text-white transition-all duration-300"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <span className="flex items-center">
                    Message <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me more about your project, goals, and how I can help..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:shadow-xl transform hover:-translate-y-0.5"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Sending your message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-1">I'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    100% Confidential
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-blue-500" />
                    24hr Response
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-purple-500" />
                    Free Consultation
                  </span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}