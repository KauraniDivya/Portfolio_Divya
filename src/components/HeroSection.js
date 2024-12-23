import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [hoverPosition, setHoverPosition] = useState(null);

  // Photo sections for the slider
  const photoSections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#0A0A0A]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        </div>

        {/* Radial Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                        rgba(139, 92, 246, 0.15), 
                        rgba(10, 10, 10, 0) 50%)`
          }}
        />

        {/* Blurred Photo Background */}
        <div className="absolute inset-0">
          <img
            src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697563140/ablotx3mpzcysvrofysu.jpg"
            alt=""
            className="w-full h-full object-cover filter blur-3xl opacity-30 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-full max-w-7xl mx-auto px-8">
        {/* Top Navigation */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center py-8"
        >
          <div className="text-white font-light tracking-wide">DK.</div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                     flex items-center gap-2 hover:border-violet-500/20 transition-all duration-300"
          >
            <span className="text-white/80 text-sm">VIEW RESUME</span>
            <ArrowUpRight className="w-4 h-4 text-violet-400" />
          </motion.button>
        </motion.div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full">
            {/* First Name */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[160px] leading-none font-medium text-white/90 tracking-tight"
            >
              DIVYA
            </motion.h1>

            {/* Interactive Photo Slider */}
            <div className="relative -my-16 w-full h-[300px] flex gap-1">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="relative flex-1 overflow-hidden"
                  onHoverStart={() => setHoverPosition(index)}
                  onHoverEnd={() => setHoverPosition(null)}
                  animate={{
                    flex: hoverPosition === index ? 2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 transition-opacity duration-300
                                ${hoverPosition === index ? 'opacity-100' : 'opacity-70'}`}>
                    <img
                      src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697563140/ablotx3mpzcysvrofysu.jpg"
                      alt="Divya Kaurani"
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b from-[#0A0A0A] 
                                  via-transparent to-[#0A0A0A] transition-opacity duration-300
                                  ${hoverPosition === index ? 'opacity-30' : 'opacity-70'}`} />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-violet-500/20 transition-opacity duration-300
                                ${hoverPosition === index ? 'opacity-30' : 'opacity-0'}`} />
                </motion.div>
              ))}
            </div>

            {/* Last Name */}
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[160px] leading-none font-medium text-white/90 tracking-tight text-right"
            >
              KAURANI
            </motion.h1>

            {/* Description and Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex justify-between items-end"
            >
              {/* Description */}
              <div className="max-w-md">
                <p className="text-lg text-white/60">
                  Full Stack Developer and Creative Innovator, crafting exceptional digital experiences.
                </p>
              </div>

              {/* Navigation */}
              <nav className="flex gap-8">
                {['Home', 'Work', 'About', 'Contact'].map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ y: -2 }}
                    className="group relative text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-violet-400
                                  group-hover:w-full transition-all duration-300" />
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-8 flex items-center gap-6"
        >
          {['GH', 'LN', 'TW'].map((social) => (
            <motion.button
              key={social}
              whileHover={{ y: -2 }}
              className="group relative text-white/40 hover:text-white transition-colors duration-300"
            >
              {social}
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-violet-400
                            group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;