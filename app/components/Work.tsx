"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Slider from "react-slick";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FeaturedWorkIcon = ({
  icon: Icon,
  color,
}: {
  icon: any;
  color: string;
  className?: string;
}) => (
  <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg">
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
);

const featuredProjects = [
  {
    title: "Custom Chat-Bot",
    description:
      "Developed a cross-platform AI-powered chatbot platform with Node.js & Next.js, secured by Azure Entra ID. Supports multiple AI models for text, image, and video processing, with features like Deep Search, letterhead generation, dynamic workflows, and automated delivery. Designed for enterprise-scale customer interaction and workflow automation.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Azure Bot Services", "Supabase", "NLP", "AI Automation"],
    image:
      "/gosign-chat.png",
    live: "https://www.gosign.de/ai-assistenten/",
    repo: "https://github.com/Zakaria-masood20",
    color: "text-blue-500",
  },  
  {
    title: "Gait Recognition Research",
    description:
      "Developed an AI-powered biometric system that identifies individuals by gait even under covered body attire. Built a custom multi-angle video dataset, extracted landmarks with Mediapipe, and trained Decision Tree & Random Forest classifiers. Achieved 98% accuracy, proving gait as a reliable alternative to facial recognition.",
    tech: ["Machine Learning", "Mediapipe", "Random Forest", "Decision Tree", "Python"],
    image:
      "/Gait Recognition research Banner.jpg",
    live: "https://drive.google.com/file/d/1Hb3cz6DTV-jVhgVeZ05IDTa6VGkam4Qh/view?usp=sharing",
    repo: "https://github.com/Zakaria-masood20/gait-recognition-covered-attire",
    color: "text-orange-500",
  }  
];

export default function FeaturedWork() {
  const settings = {
    dots: true, // Removed dots for a cleaner UI
    infinite: false, // Continuous loop scrolling
    speed: 1000, // Smooth transition speed
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 2200, // Smooth timing for better engagement
    cssEase: "ease-in-out", // Natural effect
    pauseOnHover: true, // Keeps animation running for attraction
    swipeToSlide: true, // Allows smooth touch swipe interaction
    centerMode: false, // Disabled to remove the cropped side effect
    arrows: false, // Remove navigation arrows for minimal UI
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Small screens
        settings: { slidesToShow: 1 },
      },
    ],
  };

  

  return (
    <section
      id="featured"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>
      {/* Illustrations */}

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http:www.w3.org/2000/svg">
          <defs>
            <pattern
              id="skill-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />

              <path
                d="M50 30 L50 70 M30 50 L70 50"
                stroke="currentColor"
                strokeWidth="2"
              />
            </pattern>
          </defs>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#skill-pattern)"
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Featured Work" />

        {/* Slider Section */}
        <Slider {...settings} className="mt-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="p-4 h-full flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Project Info */}
                <h3 className="text-lg font-semibold dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-wrap">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.live}
                    className="text-blue-600 dark:text-blue-400 flex items-center gap-1"
                  >
                    Demo <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.repo}
                    className="text-gray-600 dark:text-gray-300 flex items-center gap-1"
                  >
                    GitHub{" "}
                    <FeaturedWorkIcon
                      icon={Github}
                      color={project.color}
                      className="w-4 h-4"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
