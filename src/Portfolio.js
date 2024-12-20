import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Rocket, Zap, Cpu, Globe, Brain, Terminal,
  ArrowUpRight, Github, Linkedin, Mail, Twitter,
  Code, CommandIcon, Database, Server
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const techStack = [
    "React", "Node.js", "TypeScript", "Python", "MongoDB", "AWS", 
    "Docker", "GraphQL", "Next.js", "TensorFlow", "PostgreSQL", "Redis"
  ];



  // Infinite marquee animation for tech stack
  const MarqueeGroup = ({ children, direction = 1 }) => (
    <motion.div
      initial={{ x: direction > 0 ? 0 : -1000 }}
      animate={{ x: direction > 0 ? -1000 : 0 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-8 items-center"
    >
      {children}
    </motion.div>
  );

  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden">
      <HeroSection />

      {/* Tech Stack with Infinite Marquee */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.05),rgba(0,0,0,0))]" />
        
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-4"
          >
            <CommandIcon className="text-teal-400 w-6 h-6" />
            <h2 className="text-4xl font-light">Tech Arsenal</h2>
          </motion.div>
        </div>

        {/* Double marquee effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
          
          <div className="flex flex-col gap-8 overflow-hidden">
            {[1, -1].map((direction, idx) => (
              <div key={idx} className="flex gap-8">
                <MarqueeGroup direction={direction}>
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5
                               hover:border-teal-500/20 flex items-center gap-3 min-w-max"
                    >
                      <Code className="w-5 h-5 text-teal-400" />
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </MarqueeGroup>
                <MarqueeGroup direction={direction}>
                  {techStack.map((tech) => (
                    <motion.div
                      key={`${tech}-2`}
                      whileHover={{ scale: 1.1 }}
                      className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5
                               hover:border-teal-500/20 flex items-center gap-3 min-w-max"
                    >
                      <Code className="w-5 h-5 text-teal-400" />
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </MarqueeGroup>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
     <ProjectsGrid />

      {/* Interactive Contact Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.05),rgba(0,0,0,0))]" />
        
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <Zap className="w-6 h-6 text-teal-400 mx-auto mb-4" />
            <h2 className="text-4xl font-light">Let's Create Together</h2>
          </motion.div>

          {/* Floating social links */}
          <div className="relative h-64 mb-12">
            {[
              { Icon: Github, delay: 0 },
              { Icon: Linkedin, delay: 0.1 },
              { Icon: Twitter, delay: 0.2 },
              { Icon: Mail, delay: 0.3 }
            ].map(({ Icon, delay }, index) => (
              <motion.a
                key={index}
                href="#"
                className="absolute left-1/2 top-1/2"
                animate={{
                  x: Math.cos(index * (Math.PI / 2)) * 100,
                  y: Math.sin(index * (Math.PI / 2)) * 100,
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  delay,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-xl opacity-0 
                               group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-full bg-zinc-900/50 border border-white/5 
                               group-hover:border-teal-500/20 flex items-center justify-center 
                               text-zinc-400 group-hover:text-teal-400 transition-all relative">
                    <Icon className="w-5 h-5" />
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-600"
          >
            Crafted with precision by Divya Kaurani
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 45 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative group"
          >
            <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-xl opacity-0 
                         group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 rounded-full bg-zinc-900/50 border border-white/5 
                         group-hover:border-teal-500/20 flex items-center justify-center 
                         text-zinc-400 group-hover:text-teal-400 transition-all relative">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </motion.button>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;