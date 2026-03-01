'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Download, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import { TypeAnimation } from 'react-type-animation';

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-cyan-400 animate-pulse">
      Initializing Neural Network...
    </div>
  ),
});

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816]"
    >
      {/* 1. Background Scene with Dark Overlay for readability */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        {/* Radial gradient to fade the 3D scene edges and make text pop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050816_100%)]" />
      </div>

      <div className="container relative z-10 grid items-center gap-12 px-6 mx-auto lg:grid-cols-2">
        
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium border rounded-full border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
          >
            <Sparkles size={14} />
            <span>Available for Internships</span>
          </motion.div>

          <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Yudhveer</span>
          </h1>

          <div className="h-12 mb-6 text-2xl font-bold text-gray-300 md:text-3xl">
            <TypeAnimation
              sequence={[
                'AI Student', 2000,
                'Machine Learning Enthusiast', 2000,
                'Full Stack Developer', 2000,
                'Tech Innovator', 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-cyan-400"
            />
          </div>

          <p className="max-w-xl mx-auto mb-10 text-lg leading-relaxed text-gray-400 lg:mx-0">
            I bridge the gap between complex AI architectures and intuitive user experiences. 
            Currently engineering the future of digital intelligence.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:justify-start">
            {/* Download Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/Yudhveer_resume2.pdf"
                download
                className="relative flex items-center gap-2 px-8 py-4 overflow-hidden font-bold text-black transition-all group bg-cyan-500 rounded-xl"
              >
                <div className="absolute inset-0 transition-transform duration-300 translate-y-full bg-white/20 group-hover:translate-y-0" />
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Get Resume</span>
              </a>
            </motion.div>

            {/* Socials */}
            <div className="flex items-center gap-5">
              {[
                { icon: <Github />, href: "https://github.com/yudhveer10" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/in/yudhveer10" },
                { icon: <Code />, href: "https://leetcode.com/u/yudhveerpanwar/" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 transition-colors border border-gray-700 rounded-full hover:text-cyan-400 hover:border-cyan-400"
                  whileHover={{ y: -5, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - The "Cyber" Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          {/* Animated Glow Rings */}
          <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] bg-cyan-500/20 rounded-full blur-[80px] animate-pulse" />
          
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Outer Decorative Border */}
            <div className="p-2 rounded-3xl bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <div className="bg-[#050816] rounded-[1.4rem] p-1">
                <img
                  src="/yudhveer.jpg"
                  alt="Yudhveer Singh Panwar"
                  className="w-72 md:w-[350px] h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              className="absolute p-4 border shadow-xl -bottom-6 -right-6 bg-gray-900/80 backdrop-blur-md border-cyan-500/50 rounded-2xl"
            >
              <p className="text-xl font-bold text-cyan-400">2+</p>
              <p className="text-xs tracking-wider text-gray-400 uppercase">Years Coding</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute flex justify-center w-6 h-10 p-1 -translate-x-1/2 border-2 border-gray-500 rounded-full bottom-10 left-1/2"
      >
        <div className="w-1 h-2 rounded-full bg-cyan-400" />
      </motion.div>
    </section>
  );
};

export default Hero;