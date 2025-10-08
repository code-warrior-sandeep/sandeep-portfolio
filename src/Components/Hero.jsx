import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white dark:bg-gray-900">
      
      {/* 🌌 Twinkling Background */}
      <div className="absolute inset-0 z-0 twinkling-stars pointer-events-none" />

      {/* 🧑‍💻 Left Section – Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
  👋 Hi, I'm{" "}
  <span className="text-blue-600 dark:text-blue-400">Sandeep</span>
</h1>

<p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
  💻 I’m a passionate full-stack developer crafting sleek, fast, and
  user-friendly web experiences with a focus on performance and clean design.
</p>



        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            🚀 View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            📬 Contact Me
          </a>
        </div>
      </motion.div>

      {/* 🖼️ Right Section – Profile Image */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/images/sandeep.jpg"
          alt="Portrait of Sandeep – Full Stack Developer"
          loading="lazy"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
