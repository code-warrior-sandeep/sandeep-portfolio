import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaServer, FaDatabase } from "react-icons/fa";

const About = () => {
  // Tailwind-safe color mapping
  const colorClasses = {
    blue: {
      text: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900",
      textDark: "text-blue-800 dark:text-blue-200",
      ring: "hover:ring-blue-500",
      iconBg: "bg-blue-600",
    },
    green: {
      text: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900",
      textDark: "text-green-800 dark:text-green-200",
      ring: "hover:ring-green-500",
      iconBg: "bg-green-600",
    },
    purple: {
      text: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-100 dark:bg-purple-900",
      textDark: "text-purple-800 dark:text-purple-200",
      ring: "hover:ring-purple-500",
      iconBg: "bg-purple-600",
    },
    yellow: {
      text: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-yellow-100 dark:bg-yellow-900",
      textDark: "text-yellow-800 dark:text-yellow-200",
      ring: "hover:ring-yellow-500",
      iconBg: "bg-yellow-600",
    },
  };

  const sections = [
    {
      title: "💻 Frontend Development",
      icon: FaCode,
      color: "blue",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
      description:
        "✨ Crafting sleek, responsive, and high-performing user interfaces using modern technologies and frameworks.",
    },
    {
      title: "⚙️ Backend & Logic",
      icon: FaServer,
      color: "green",
      skills: ["Node.js", "Express.js", "RESTful APIs"],
      description:
        "🧠 Developing robust and scalable server-side logic with secure, efficient APIs and structured architecture.",
    },
    {
      title: "🗄️ Data Management",
      icon: FaDatabase,
      color: "purple",
      skills: ["MongoDB", "SQL", "Mongoose"],
      description:
        "💾 Designing and maintaining efficient database systems to ensure smooth data flow and optimized performance.",
    },
    {
      title: "🎨 Design & UX",
      icon: FaPaintBrush,
      color: "yellow",
      skills: ["Responsive Design", "UI/UX Principles", "Figma (Basic)"],
      description:
        "🧩 Creating visually appealing and user-friendly designs that ensure accessibility and a great user experience.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-6"
        >
          🚀 My Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-center leading-8 max-w-3xl mx-auto mb-16 font-light text-gray-600 dark:text-gray-400"
        >
          I'm a <strong>Full-Stack Developer</strong> 💼 passionate about
          building complete web solutions that balance <strong>design 🎨</strong> and{" "}
          <strong>functionality ⚙️</strong>.
        </motion.p>

        {/* 🧭 Timeline Container (Desktop) */}
        <div className="relative hidden md:block min-h-full">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          {sections.map((item, index) => {
            const color = colorClasses[item.color];
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-12 flex flex-col md:flex-row items-center w-full gap-y-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 md:w-5/12 p-6 rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-xl ${color.ring}`}
                >
                  <h3 className={`text-2xl font-bold mb-3 ${color.text}`}>
                    {item.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-0.5 text-xs font-semibold rounded-full ${color.bg} ${color.textDark}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="md:w-2/12 z-10 flex justify-center py-4 md:py-0">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${color.iconBg} text-white shadow-xl ring-4 ring-white dark:ring-gray-900`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            );
          })}
        </div>

        {/* 📱 Horizontal Scroll Timeline (Mobile) */}
        <div className="md:hidden flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
          {sections.map((item, index) => {
            const color = colorClasses[item.color];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[80%] snap-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${color.iconBg} text-white shadow-md mb-4`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${color.text}`}>
                  {item.title}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-0.5 text-xs font-semibold rounded-full ${color.bg} ${color.textDark}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-[1.05] duration-300"
          >
            <span>🚀 View My Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
