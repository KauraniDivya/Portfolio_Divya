import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageScale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const imageY = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Blurred background image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697563140/ablotx3mpzcysvrofysu.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center filter blur-2xl opacity-40 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A]/30 to-[#0A0A0A]/40" />
      </motion.div>

      {/* Animated lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent w-full"
            style={{ top: `${i * 5}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative min-h-screen max-w-7xl mx-auto px-8">
        <div className="min-h-screen flex items-center">
          {/* Content section */}
          <motion.div 
            className="relative z-10 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left content */}
              <div className="col-span-6 space-y-12">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Intro line */}
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="h-px w-12 bg-teal-400"
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                    <span className="text-teal-400 tracking-[0.2em] text-sm font-light">WELCOME</span>
                  </div>

                  {/* Main title with creative layout */}
                  <div className="space-y-2">
                    <div className="text-white text-7xl font-light tracking-tighter">
                      I'm
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="ml-4 text-white"
                      >
                        Divya
                      </motion.span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300"
                    >
                      Kaurani
                    </motion.div>
                  </div>

                  {/* Role description with gradient underline */}
                  <div className="relative inline-block">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-teal-400 to-transparent"
                    />
                    <p className="text-zinc-400 text-lg leading-relaxed py-2">
                      Full Stack Developer crafting exceptional digital experiences
                    </p>
                  </div>
                </motion.div>

                {/* Action buttons with modern design */}
                <motion.div 
                  className="flex items-center gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02, gap: '1.5rem' }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-gradient-to-r from-teal-400 to-emerald-400 
                             rounded-full text-black font-medium flex items-center gap-4 
                             transition-all duration-300"
                  >
                    Explore Work
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 text-teal-400 font-medium relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-px bg-teal-400/30"
                      whileHover={{ scaleX: 1 }}
                      initial={{ scaleX: 0 }}
                    />
                  </motion.button>
                </motion.div>
              </div>

              {/* Right content with image and animated text */}
              <div className="col-span-6 relative">
                {/* Animated text overlay - positioned to right */}
                <motion.div
                  className="absolute left-32 top-3/4  z-20 mix-blend-difference w-full text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="relative">
                    {['DEVELOPER', 'INNOVATOR'].map((text, index) => (
                      <motion.div
                        key={text}
                        className="absolute"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          y: [20, 0, -20]
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 3,
                          repeat: Infinity,
                          repeatDelay: 6
                        }}
                      >
                        <span className="text-white text-7xl font-bold tracking-tighter whitespace-nowrap">
                          {text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Profile image with modern frame */}
                <motion.div 
                  className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden"
                  style={{ scale: imageScale, y: imageY }}
                >
                  <img
                    src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697563140/ablotx3mpzcysvrofysu.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </div>
  );
};

export default HeroSection;