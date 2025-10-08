import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Resume Page (Frontend)",
    description:
      "A fully responsive personal resume webpage designed using HTML, CSS, and JavaScript — showcasing modern layout, animations, and adaptability across devices.",
    image: "/images/desktop-view.jpg",
    link: "https://code-warrior-sandeep.github.io/responsive-resume-page/",
    code: "https://github.com/code-warrior-sandeep/responsive-resume-page",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Pre-Approved Student Portal (Full Stack)",
    description:
      "A full-stack student portal enabling admin approval, form submission, and dashboard management. Built using Node.js, Express, EJS Template Engine, and MongoDB.",
    image: "/images/full-stack.jpg",
    link: "https://bcatechteam.onrender.com/",
    code: "https://github.com/code-warrior-sandeep/preapproved-student-portal",
    tags: ["Node.js", "Express", "EJS", "MongoDB"],
  },
  {
    title: "Birthday Card Generator (Basic)",
    description:
      "A simple yet interactive birthday card generator app that lets users create and share digital greeting cards with custom messages and designs.",
    image: "/images/Basic.jpg",
    link: "https://b-day-card-generator.vercel.app/",
    code: "https://github.com/code-warrior-sandeep/b-day-card-generator",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Project = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 sm:px-8 lg:px-20 py-20">
      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-tight"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🚀 My <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </motion.h2>

      {/* Projects Layout */}
      <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 max-w-sm w-full transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
                >
                  Visit Project 🔗
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition text-sm sm:text-base"
                >
                  Visit Code 💻
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          href="/projects"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
        >
          See More Work →
        </a>
      </motion.div>
    </section>
  );
};

export default Project;
