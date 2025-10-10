'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Tomato Plant Disease Detection',
    description:
      'Developed a deep learning model using CNNs to classify diseases in tomato leaves, integrated with a clean web interface.',
    link: 'https://github.com/yudhveer10/tomato-plant-disease-detection',
  },
  {
    title: 'Covid-19 Analysis Dashboard',
    description:
      'Designed an interactive Power BI dashboard visualizing COVID-19 trends across Indian states with drill-down analytics.',
    link: 'https://app.powerbi.com/links/QfLUPYxABP?ctid=7088c9fc-7349-4b24-afd1-a7200e6fc029&pbi_source=linkShare',
  },
  {
    title: 'Biometric Authentication System',
    description:
      'Developed a secure prototype integrating face recognition, liveness detection, and Aadhaar-based verification with a WebRTC frontend.',
    link: 'https://github.com/aarinbadola/Authentication-proj',
  },
  {
    title: 'Diabetes Prediction Using GAN',
    description:
      'Built a Flask web app that predicts diabetes risk using GAN-generated synthetic data to improve model accuracy.',
    link: 'https://github.com/yudhveer10/Glucopredict',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Projects = () => {
  return (
    <section
      id="work"
      className="relative py-24 overflow-hidden text-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Background glowing blobs */}
      <div className="absolute -top-40 left-10 w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/25 blur-3xl rounded-full animate-pulse" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 font-semibold text-lg tracking-wide">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of the projects I’ve worked on that showcase my
            skills, creativity, and problem-solving mindset.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 25px rgba(0, 255, 255, 0.25)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <ArrowUpRight className="text-gray-300 group-hover:text-cyan-400 transition-transform duration-300 group-hover:rotate-45" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
