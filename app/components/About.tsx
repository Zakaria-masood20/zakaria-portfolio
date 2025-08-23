"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code,
  Database,
  Server,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend",
      description: "React, Next.js, Tailwind CSS",
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Backend",
      description: "Node.js, Express, Python, PHP",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Database",
      description: "MongoDB, MySQL, PostgreSQL",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-red-500" />,
      title: "AI & ML",
      description:
        "TensorFlow, PyTorch, OpenAI, Chatbots, NLP, Computer Vision",
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: "Cloud & DevOps",
      description: "AWS, Microsoft Azure, Docker, CI/CD",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      title: "Network & Security",
      description: "Network-designing, Routing, Switching, VPNs, Cybersecurity",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a <b>Software Engineer & AI Specialist</b> passionate about 
              <b>building intelligent, scalable, and secure solutions</b>. With
              expertise in <b>Full-Stack Development, Cloud Computing, and
              IT Management</b>, I thrive on solving complex challenges and
              optimizing performance.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in <b>AI-powered applications, cloud-native systems,
              and secure IT infrastructures</b>, always exploring new ways to
              enhance efficiency and automation. Let’s innovate together.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
