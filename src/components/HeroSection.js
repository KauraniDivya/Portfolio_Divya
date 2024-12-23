import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverPosition, setHoverPosition] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const autoSlideTimer = useRef(null);

  // Sample photo data with titles (replace with your actual photos and achievements)
  const photos = [
    { url: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fcar5.JPG?alt=media&token=678aa7e3-b719-448c-8dd7-7e8a0bcbbfa1", title: "Design Excellence Award" },
    { url: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fcar2.jpg?alt=media&token=cc72cafe-0c56-4bbd-b026-687cf67477ff", title: "Featured Project - AI Implementation" },
    { url: "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697563140/ablotx3mpzcysvrofysu.jpg", title: "Hackathon Winner - Social Impact" },
    { url: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Faf912b16-5927-4d25-ac5e-41cc7eaf2963%202.JPG?alt=media&token=45796db4-71da-4580-9fc9-f26ac7aa1e2a", title: "First Place - Web Design Competition 2023" },
    { url: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fsih23.png?alt=media&token=582a086e-673b-44f3-b398-4f333dbbcb1c", title: "Best Innovation Award - Tech Summit" },
    { url: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fcar6.JPG?alt=media&token=fe3d8b1c-8a23-483e-ba56-ccede1dc5752", title: "Open Source Contribution Award" },
    { url: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fcar7.JPG?alt=media&token=aa22b181-b333-4900-9929-328e8fdb307f", title: "Best Mobile App Design" },
    { url: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fcar8.jpg?alt=media&token=3c26bcb6-a7ae-4410-bcc5-5b180bd43c9f", title: "Innovation Challenge Winner" }
  ];

  const maxSlides = photos.length - 4;

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
      {/* Background remains the same */}
      <div className="absolute inset-0">
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

        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                        rgba(139, 92, 246, 0.15), 
                        rgba(10, 10, 10, 0) 50%)`
          }}
        />

        <div className="absolute inset-0">
          <img
            src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697563140/ablotx3mpzcysvrofysu.jpg"
            alt=""
            className="w-full h-full object-cover filter blur-2xl opacity-40 scale-100"
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
          transition={{ duration: 0.6, delay: 0.5 }}
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
            {/* Animated Name */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-[160px] leading-none font-medium text-white/90 tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                DIVYA
              </motion.span>
            </motion.h1>

            {/* Film Strip Slider */}
            <div className="relative -my-16 w-full h-[400px]">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.1 }}
                onClick={slidePrev}
                disabled={currentSlide === 0}
                className={`absolute -left-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 
                           ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.1 }}
                onClick={slideNext}
                disabled={currentSlide === maxSlides}
                className={`absolute -right-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 
                           ${currentSlide === maxSlides ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.button>

              {/* Film Strip Container */}
              <div className="relative w-full h-full overflow-hidden">
                {/* Film Strip Edge Decorations */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/50 z-10 flex flex-col justify-between py-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={`left-${i}`} className="w-full h-3 bg-black/50 border-y border-white/20" />
                  ))}
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-black/50 z-10 flex flex-col justify-between py-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={`right-${i}`} className="w-full h-3 bg-black/50 border-y border-white/20" />
                  ))}
                </div>

                {/* Slides */}
                <motion.div 
                  className="absolute flex gap-1 h-full pl-8 pr-8"
                  animate={{
                    x: -currentSlide * (25.25 + 0.25) + '%'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      className="relative w-1/4 shrink-0"
                      onHoverStart={() => setHoverPosition(index)}
                      onHoverEnd={() => setHoverPosition(null)}
                      animate={{
                        scale: hoverPosition === index ? 1.05 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`relative h-full transition-opacity duration-300
                                    ${hoverPosition === index ? 'opacity-100' : 'opacity-70'}`}>
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b from-[#0A0A0A] 
                                    via-transparent to-[#0A0A0A] transition-opacity duration-300
                                    ${hoverPosition === index ? 'opacity-30' : 'opacity-70'}`} />
                        
                        {/* Simple Tooltip */}
                        {hoverPosition === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-16 left-0 right-0 flex justify-center px-4"
                          >
                            <div className="bg-black/90 text-white text-sm rounded-lg whitespace-nowrap
                                          backdrop-blur-sm border border-white/10 px-4 py-2">
                              {photo.title}
                            </div>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-violet-500/20 transition-opacity duration-300
                                    ${hoverPosition === index ? 'opacity-30' : 'opacity-0'}`} />
                      
                      {/* Film Strip Perforations */}
                      <div className="absolute top-0 w-full h-8 flex justify-between px-2 pointer-events-none">
                        <div className="w-4 h-4 rounded-full bg-black border border-white/20" />
                        <div className="w-4 h-4 rounded-full bg-black border border-white/20" />
                      </div>
                      <div className="absolute bottom-0 w-full h-8 flex justify-between px-2 pointer-events-none">
                        <div className="w-4 h-4 rounded-full bg-black border border-white/20" />
                        <div className="w-4 h-4 rounded-full bg-black border border-white/20" />
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
              className="text-[160px] leading-none font-medium text-white/90 tracking-tight text-right"
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                KAURANI
              </motion.span>
            </motion.h1>

            {/* Bottom Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="mt-12 flex justify-between items-end"
            >
              <div className="max-w-md">
                <p className="text-lg text-white/60">
                  Full Stack Developer and Creative Innovator, crafting exceptional digital experiences.
                </p>
              </div>
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
      </div>
    </div>
  );
};

export default HeroSection;