'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-[var(--text-light)]">
      Loading 3D Model...
    </div>
  ),
});

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f24] via-[#0f193b] to-[#1a1039]"
    >
      {/* Background Scene */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Suspense>
          <Scene />
        </Suspense>
      </div>

      <div className="container relative z-10 grid items-center gap-12 px-6 mx-auto md:grid-cols-2">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Yudhveer Singh Panwar
          </h1>
          <h2 className="text-2xl text-[#00ffff] font-semibold mb-4">
            AI Student & Aspiring Developer
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lg text-gray-300 md:mx-0">
            I build intelligent, futuristic tech that bridges creativity and AI —
            from neural-inspired designs to smart digital systems.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            {/* ✅ Resume Download Button */}
            <motion.a
              href="/Yudhveer_Resume1.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <motion.a
                href="https://github.com/yudhveer10"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="w-8 h-8 text-gray-300 hover:text-[#00ffff]" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/yudhveer10"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="w-8 h-8 text-gray-300 hover:text-[#00ffff]" />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/yudhveerpanwar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Code className="w-8 h-8 text-gray-300 hover:text-[#00ffff]" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.img
            src="/yudhveer.jpg"
            alt="Yudhveer Singh Panwar"
            className="w-72 md:w-[340px] h-auto object-cover rounded-2xl border-4 border-cyan-400 shadow-[0_0_30px_#00ffff40] hover:shadow-[0_0_60px_#00ffff80] transition-all duration-500"
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;





