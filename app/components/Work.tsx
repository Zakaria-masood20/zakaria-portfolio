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
      "AI-powered chatbot using Node.js, Next.js, and Azure Entra-ID",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Azure", "Supabase", "NLP"],
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
    live: "https://www.gosign.de/ai-assistenten/",
    repo: "#",
    color: "text-blue-500",
  },
  {
    title: "Gait Recognition Research",
    description:
      "AI-based biometric gait recognition system for individuals in covered body attire, achieving 98% accuracy.",
    tech: ["Machine Learning", "Random Forest", "Decision Tree", "Python"],
    image:
      "https://images.unsplash.com/photo-1517777811156-8107dd473aca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hY2hpbmUlMjBsZWFybmluZyUyMGdhaXQlMjBhbmFseXNpcyUyMHVzaW5nJTIwYm9keSUyMGxhbmRtYXJrc3xlbnwwfHwwfHx8MA%3D%3D",
    live: "https://drive.google.com/file/d/1Hb3cz6DTV-jVhgVeZ05IDTa6VGkam4Qh/view?usp=sharing",
    repo: "#",
    color: "text-orange-500",
  },
  // {
  //   title: "Custom Chat-Bot",
  //   description:
  //     "AI-powered chatbot using Node.js, Next.js, and Azure Entra-ID",
  //   tech: ["Next.js", "Node.js", "PostgreSQL", "Azure", "Supabase", "NLP"],
  //   image:
  //     "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
  //   live: "https://www.gosign.de/ai-assistenten/",
  //   repo: "#",
  //   color: "text-blue-500",
  // },
  // {
  //   title: "Gait Recognition Research",
  //   description:
  //     "AI-based biometric gait recognition system for individuals in covered body attire, achieving 98% accuracy.",
  //   tech: ["Machine Learning", "Random Forest", "Decision Tree", "Python"],
  //   image:
  //     "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
  //   live: "https://drive.google.com/file/d/1Hb3cz6DTV-jVhgVeZ05IDTa6VGkam4Qh/view?usp=sharing",
  //   repo: "#",
  //   color: "text-orange-500",
  // },
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
                    Live Demo <ExternalLink className="w-4 h-4" />
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
