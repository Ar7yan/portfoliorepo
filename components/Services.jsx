'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, BrainCircuit, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Code size={36} className="text-cyan-400 drop-shadow-lg" />,
    title: 'Development',
    description:
      'Proficient in Python, C++, and SQL with hands-on experience in AI & Data Science.',
  },
  {
    icon: <BrainCircuit size={36} className="text-purple-400 drop-shadow-lg" />,
    title: 'Machine Learning',
    description:
      'Experience in data analysis, machine learning, and Deep Learning (CNNs).',
  },
  {
    icon: <Rocket size={36} className="text-pink-400 drop-shadow-lg" />,
    title: 'Project Management',
    description:
      'Led social media initiatives and managed TEDx event collaborations successfully.',
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

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden text-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 left-10 w-[600px] h-[600px] bg-cyan-500/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-pink-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-cyan-400 font-semibold text-lg tracking-wide">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Think. Design. Develop. Launch.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From ideation to deployment — delivering AI-powered, creative, and
            scalable solutions with innovation at every step.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 30px rgba(0, 255, 255, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-5">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


