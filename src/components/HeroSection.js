import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, ChevronDown, ArrowRight, Code, Sparkles } from 'lucide-react';

const FloatingParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
    animate={{
      y: [-20, -40, -20],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const imageY = useTransform(scrollY, [0, 300], [0, 50]);
  const parallaxY = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles positions
  const particles = Array.from({ length: 15 }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Blurred background image with enhanced overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A]/20 to-[#0A0A0A]/30" />
      </motion.div>

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <div
          key={i}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          className="absolute"
        >
          <FloatingParticle delay={particle.delay} />
        </div>
      ))}

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-fuchsia-500/10 animate-pulse" />
      </div>

      {/* Enhanced animated lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent w-full"
            style={{ 
              top: `${i * 5}%`,
              filter: 'blur(1px)',
            }}
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

      {/* Main content with enhanced animations */}
      <div className="relative min-h-screen max-w-7xl mx-auto px-8">
        <div className="min-h-screen flex items-center">
          <motion.div 
            className="relative z-10 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left content with enhanced animations */}
              <div className="col-span-6 space-y-12">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Animated intro line */}
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="h-px w-12 bg-gradient-to-r from-violet-400 to-fuchsia-400"
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                    <motion.span 
                      className="text-violet-400 tracking-[0.2em] text-sm font-light"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Sparkles className="inline-block w-4 h-4 mr-2" />
                      WELCOME
                    </motion.span>
                  </div>

                  {/* Enhanced main title */}
                  <div className="space-y-2 relative">
                    <div className="text-white text-7xl font-light tracking-tighter">
                      I'm
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="ml-4 text-white relative"
                      >
                        Divya
                        <motion.div
                          className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-violet-400 to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 1, duration: 1 }}
                        />
                      </motion.span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-7xl font-bold tracking-tight relative"
                    >
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300">
                        Kaurani
                      </span>
                      <motion.div
                        className="absolute -right-8 top-0 text-violet-400/40 text-lg"
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Code className="w-6 h-6" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Enhanced role description */}
                  <div className="relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-violet-400 to-transparent"
                    />
                    <p className="text-zinc-400 text-lg leading-relaxed py-2">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        Full Stack Developer crafting exceptional digital experiences
                      </motion.span>
                    </p>
                  </div>
                </motion.div>

                {/* Enhanced action buttons */}
                <motion.div 
                  className="flex items-center gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02, gap: '1.5rem' }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 
                             rounded-full text-black font-medium flex items-center gap-4 
                             transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Explore Work</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 to-violet-400 opacity-0 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 text-violet-400 font-medium relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-px bg-violet-400/30"
                      whileHover={{ scaleX: 1 }}
                      initial={{ scaleX: 0 }}
                    />
                  </motion.button>
                </motion.div>
              </div>

              {/* Enhanced right content */}
              <div className="col-span-6 relative">
                {/* Enhanced animated text overlay */}
                <motion.div
                  className="absolute left-32 top-3/4 z-20 mix-blend-difference w-full text-center"
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
                
                {/* Enhanced profile image with parallax */}
                <motion.div 
                  className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden"
                  style={{ scale: imageScale, y: imageY }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <img
                    src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697563140/ablotx3mpzcysvrofysu.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover object-center relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
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
        <ChevronDown className="w-6 h-6 text-violet-400/50" />
      </motion.div>
    </div>
  );
};

export default HeroSection;