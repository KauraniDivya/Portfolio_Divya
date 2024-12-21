import React, { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { 
  ArrowUpRight, Github, Linkedin, Mail, Twitter,
   Terminal, Database, Server, Globe,
  Box, Cloud, GitGraph, Code, Layers, Cpu, Radio
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import StyledFooter from './components/Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Updated tech stack with icons
  const techStack = [
    { name: "React", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "TypeScript", icon: Code },
    { name: "Python", icon: Terminal },
    { name: "MongoDB", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Box },
    { name: "GraphQL", icon: GitGraph },
    { name: "Next.js", icon: Layers },
    { name: "TensorFlow", icon: Cpu },
    { name: "PostgreSQL", icon: Database },
    { name: "Redis", icon: Radio }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.05),rgba(0,0,0,0))]" />
        
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-4"
          >
            <Terminal className="text-violet-400 w-6 h-6" />
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
                  {techStack.map(({ name, icon: Icon }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.1 }}
                      className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5
                               hover:border-violet-500/20 flex items-center gap-3 min-w-max"
                    >
                      <Icon className="w-5 h-5 text-violet-400" />
                      <span>{name}</span>
                    </motion.div>
                  ))}
                </MarqueeGroup>
                <MarqueeGroup direction={direction}>
                  {techStack.map(({ name, icon: Icon }) => (
                    <motion.div
                      key={`${name}-2`}
                      whileHover={{ scale: 1.1 }}
                      className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5
                               hover:border-violet-500/20 flex items-center gap-3 min-w-max"
                    >
                      <Icon className="w-5 h-5 text-violet-400" />
                      <span>{name}</span>
                    </motion.div>
                  ))}
                </MarqueeGroup>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid remains unchanged */}
      <ProjectsGrid />

    

      {/* Updated Footer */}
     <StyledFooter />
    </div>
  );
};

export default Portfolio;