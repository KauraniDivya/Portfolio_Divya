import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, FolderGit2, User, Mail, ArrowUpRight, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Code } from 'lucide-react';
import DK from "../assets/DivyaSIH.jpg";
import SIH24 from "../assets/car2.jpg";
import SIH23 from "../assets/sih2023.jpg";
import xenesisposter from "../assets/xenp.jpeg";
import york from "../assets/york.JPG";
import car5 from "../assets/car5.JPG";
import car4 from "../assets/car4.JPG";
import vsitr from "../assets/vsitr.JPG";
import car6 from "../assets/xenesis 2.jpg";
import car7 from "../assets/car7.JPG";
import car8 from "../assets/sih-23.jpg";
import car9 from "../assets/car9.JPG";
import car10 from "../assets/car10.jpg";
import winner from "../assets/winner.JPG";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Check if device is mobile
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
  
      // Only add mousemove listener for non-mobile devices
      if (!isMobile) {
        const handleMouseMove = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
          
          const target = e.target;
          setIsPointer(
            window.getComputedStyle(target).cursor === 'pointer' ||
            target.tagName === 'BUTTON' ||
            target.tagName === 'A'
          );
        };
  
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('resize', checkMobile);
        };
      }
    }, [isMobile]);
  
    // Don't render cursor on mobile devices
    if (isMobile) return null;
  
    return (
      <>
        {/* Main cursor */}
        <motion.div
          ref={cursorRef}
          className="fixed top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-violet-400/50 pointer-events-none z-50 mix-blend-difference"
          animate={{
            x: position.x - 6,
            y: position.y - 6,
            scale: isPointer ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5
          }}
        />
        {/* Trailing cursor */}
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-violet-400/30 pointer-events-none z-50 mix-blend-difference"
          animate={{
            x: position.x - 12,
            y: position.y - 12,
            scale: isPointer ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
            mass: 0.8
          }}
        />
      </>
    );
  };

  

  
  // HoverInstruction component with responsive design
  const HoverInstruction = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
        className="absolute top-12 sm:top-16 md:top-20 lg:top-16 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-white/70 font-['Great_Vibes'] text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 pointer-events-none select-none text-center px-4"
           style={{
             textShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
             background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(139, 92, 246, 0.8))',
             WebkitBackgroundClip: 'text',
             WebkitTextFillColor: 'transparent'
           }}>
          ✨ Hover to unveil magic ✨
        </p>
        <ArrowDown className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-violet-400 animate-bounce mt-2" />
      </motion.div>
    );
  };
  
  const HeroSection = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoverPosition, setHoverPosition] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef(null);
    const autoSlideTimer = useRef(null);

    // Check for mobile device
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

  // Sample photo data with titles (replace with your actual photos and achievements)
  const photos = [
      { url: DK, title: "Divya Kaurani" },
      { url: SIH24, title: "SIH-24 Winner" },
      { url: vsitr, title: "3rd Prize at VSITR Poster Competition" },
      { url: car6, title: "X-Aavishkar First Prize" },
      { url: york, title: "York IE - React Intern" },
      { url: xenesisposter, title: "Xenesis-Poster Competition Runner Up" },
      { url: car8, title: "SIH-23" },
      { url: winner, title: "Team Saarthi - Smart India Hackathon 2024 Winner" },
      { url: car7, title: "3rd Prize at VSITR Poster Competition" },
      { url: SIH23, title: "SIH'23 Finalist" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Modified maxSlides calculation based on device
  const maxSlides = isMobile ? photos.length - 1 : photos.length - 1.5;
  useEffect(() => {
    setIsLoading(false);
    
    // Ensure currentSlide stays within bounds
    setCurrentSlide(prev => Math.min(prev, photos.length - 1));

    const startAutoSlide = () => {
      autoSlideTimer.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % photos.length);
      }, 5000);
    };

    const timer = setTimeout(startAutoSlide, 5000);

    return () => {
      clearTimeout(timer);
      if (autoSlideTimer.current) {
        clearInterval(autoSlideTimer.current);
      }
    };
  }, [photos.length]);
  
  useEffect(() => {
    // Initial loading animation
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Quick initial round of slides
    setTimeout(() => {
      let currentPos = 0;
      const quickSlideInterval = setInterval(() => {
        if (currentPos < maxSlides) {
          setCurrentSlide(currentPos + 1);
          currentPos++;
        } else {
          clearInterval(quickSlideInterval);
          setCurrentSlide(0);
          
          // Start slower automatic sliding after 5 seconds
          setTimeout(startAutoSlide, 5000);
        }
      }, 100);
    }, 2000);

    return () => {
      if (autoSlideTimer.current) {
        clearInterval(autoSlideTimer.current);
      }
    };
  }, []);

  const startAutoSlide = () => {
    autoSlideTimer.current = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev >= maxSlides) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000); // Slide every 5 seconds
  };

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

  const slideNext = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
  };

  const slidePrev = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  // Custom Tooltip Component
  const Tooltip = ({ children, title }) => (
    <div className="group relative">
      {children}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/90 
                   text-white text-sm rounded-lg whitespace-nowrap z-50 pointer-events-none
                   backdrop-blur-sm border border-white/10"
      >
        {title}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 
                      border-l-8 border-r-8 border-b-8 
                      border-l-transparent border-r-transparent border-b-black/90" />
      </motion.div>
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#0A0A0A]"
    >
         <CustomCursor />
      {isMobile ? (
        // Enhanced Mobile Layout
        <div className="relative h-full">
          {/* Background with enhanced blur effect */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative h-full"
            >
              <img
                src={photos[currentSlide].url}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
              <div className="absolute inset-0 backdrop-blur-xl bg-[#0A0A0A]/50" />
            </motion.div>
          </div>

          {/* Mobile Content */}
          <div className="relative h-full flex flex-col">
            {/* Top Navigation */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-between items-center p-6"
            >
              <div className="flex items-center gap-3">
                <img 
                  src="https://i.ibb.co/71jpqJF/avatar.png"
                  alt="Profile"
                  className="w-14 h-14 rounded-full object-cover border-2 border-violet-500/20"
                />
              </div>
              
              <div className="flex gap-3">
                {['GH', 'LN', 'TW'].map((link) => (
                  <motion.button
                    key={link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                              flex items-center justify-center text-white/80 text-sm"
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Center Hero Content */}
            <div className="flex-1 flex flex-col justify-center px-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-6 text-center"
              >
                <h1 
                  className="font-['Syne'] text-7xl font-extrabold tracking-tight leading-none mb-2
                           bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent
                           drop-shadow-[0_10px_10px_rgba(139,92,246,0.2)]"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                  }}
                >
                  DIVYA
                </h1>
                <h1 
                  className="font-['Syne'] text-7xl font-extrabold tracking-tight leading-none
                           bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent
                           drop-shadow-[0_10px_10px_rgba(139,92,246,0.2)]"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                  }}
                >
                  KAURANI
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="h-px mx-auto mt-4 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent w-3/4"
                />
              </motion.div>


             {/* Vertical Film Strip */}
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className=" relative h-64 object-cover"
              >
                <div className="absolute left-0 top-0 bottom-0 w-full overflow-hidden">
                  <div className="relative h-full">
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                          mass: 0.8
                        }}
                        className="absolute inset-0"
                      >
                        <img
                          src={photos[currentSlide].url}
                          alt={photos[currentSlide].title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                        <p className="absolute bottom-4 left-4 text-white font-medium">
                          {photos[currentSlide].title}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                {/* Slide Navigation */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  {photos.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentSlide === index ? 'bg-violet-400' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

                   {/* Profile Description */}
                   <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-violet-400 text-xl">⚡</span>
                  <p className="text-lg text-white/90 font-medium">
                    Full Stack Developer & Creative Innovator
                  </p>
                </div>
                <p className="text-base text-white/60 pl-7">
                  Crafting exceptional digital experiences with passion for innovation ✨
                </p>
              </motion.div>
            </div>

            {/* Bottom Action */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="p-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                          flex items-center justify-center gap-2 text-white/90"
              >
                <span>VIEW RESUME</span>
                <ArrowUpRight className="w-4 h-4 text-violet-400" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      ) : (
        // Desktop Layout
        <>
      
      {/* Background with your photo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        </div>

        {/* Your photo with blur effect */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={photos[currentSlide].url}
                alt=""
                className="w-full h-full object-cover filter blur-2xl opacity-40 scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-between items-center py-4 h-20 sm:h-24"
        >
          <div className="relative text-white font-light tracking-wide">
            <img 
              src="https://i.ibb.co/71jpqJF/avatar.png" 
              alt="Divya Kaurani" 
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-3 sm:px-4 lg:px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                     flex items-center gap-2 hover:border-violet-500/20 transition-all duration-300"
          >
            <span className="text-white/80 text-xs sm:text-sm">VIEW RESUME</span>
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
          </motion.button>
        </motion.div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full">
            {/* Name */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[160px] leading-none font-medium text-white/90 tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                DIVYA
              </motion.span>
            </motion.h1>

            <HoverInstruction />

            {/* Modified Film Strip Slider for better mobile experience */}
            <div className="relative -my-4 sm:-my-8 lg:-my-16 w-full h-[150px] sm:h-[250px] lg:h-[400px]">
              {/* Navigation buttons */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.1 }}
                onClick={slidePrev}
                disabled={currentSlide === 0}
                className={`absolute -left-4 sm:-left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/10 
                           ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.1 }}
                onClick={slideNext}
                disabled={currentSlide === maxSlides}
                className={`absolute -right-4 sm:-right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/10 
                           ${currentSlide === maxSlides ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </motion.button>

              {/* Film Strip Container with mobile optimization */}
              <div className="relative w-full h-full overflow-hidden">
                {/* Film Strip Edge Decorations */}
                <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 lg:w-8 bg-black/50 z-10 flex flex-col justify-between py-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={`left-${i}`} className="w-full h-2 sm:h-3 bg-black/50 border-y border-white/20" />
                  ))}
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-6 lg:w-8 bg-black/50 z-10 flex flex-col justify-between py-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={`right-${i}`} className="w-full h-2 sm:h-3 bg-black/50 border-y border-white/20" />
                  ))}
                </div>

                {/* Slides with mobile-first approach */}
                <motion.div 
                  className="absolute flex gap-1 h-full pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8"
                  animate={{
                    x: -currentSlide * (isMobile ? 100 : 25.25) + '%'
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200, // Reduced for smoother movement
                    damping: 25,    // Adjusted for better control
                    mass: 0.8,      // Added mass for more natural physics
                    velocity: 2,    // Added initial velocity
                    restSpeed: 0.5  // Lower rest speed for smoother stop
                  }}
                >
                  {photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      className={`relative ${isMobile ? 'w-full' : 'w-1/3'} shrink-0`}
                      onHoverStart={() => setHoverPosition(index)}
                      onHoverEnd={() => setHoverPosition(null)}
                      animate={{
                        scale: hoverPosition === index ? 1.05 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Rest of the slide content remains similar but with responsive classes */}
                      <div className={`relative h-full transition-opacity duration-300
                                    ${hoverPosition === index ? 'opacity-100' : 'opacity-70'}`}>
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover rounded-sm"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 
                                      via-transparent to-[#0A0A0A]/50 transition-opacity duration-300
                                      ${hoverPosition === index ? 'opacity-30' : 'opacity-70'}`} />
                        
                        {/* Mobile-optimized tooltip */}
                        {hoverPosition === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-0 right-0 flex justify-center px-2 sm:px-4"
                          >
                            <div className="bg-black/90 text-white text-xs sm:text-sm rounded-lg 
                                          backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2">
                              {photo.title}
                            </div>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Film perforations adjusted for mobile */}
                      <div className="absolute top-0 w-full h-6 sm:h-8 flex justify-between px-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border border-white/20" />
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border border-white/20" />
                      </div>
                      <div className="absolute bottom-0 w-full h-6 sm:h-8 flex justify-between px-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border border-white/20" />
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border border-white/20" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Last Name */}
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[160px] leading-none font-medium text-white/90 tracking-tight text-right"
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                KAURANI
              </motion.span>
            </motion.h1>

            {/* Bottom text with responsive adjustments */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="mt-4 sm:mt-8 lg:mt-12 flex justify-between items-end"
            >
              <div className="max-w-md">
                <div className="space-y-2">
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 flex items-center gap-2 sm:gap-3 font-light tracking-wide">
                    <span className="text-base sm:text-lg lg:text-xl text-violet-400">⚡</span>
                    Full Stack Developer & Creative Innovator
                  </p>
                  <div className="relative">
                    <p className="text-xs sm:text-sm lg:text-base text-white/60 pl-6 sm:pl-7 leading-relaxed">
                      Crafting exceptional digital experiences with passion for innovation 
                      <span className="inline-block animate-pulse ml-2">💫</span>
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 2.2, duration: 1 }}
                      className="absolute -bottom-2 left-6 sm:left-7 h-px bg-gradient-to-r from-violet-500/50 via-violet-400/25 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </>
      )}
\    </div>
  );
};
export default HeroSection;