import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, FolderGit2, Mail } from 'lucide-react';

const FloatingNavbar = ({ onNavClick }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');
    const [isHovered, setIsHovered] = useState(null);
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);
  
    const handleClick = (item) => {
      setActiveTab(item.name);
      onNavClick(item.name);
    };
  
    const navItems = [
      { name: 'Home', icon: Layout, label: 'Homepage' },
      { name: 'TechStack', icon: Code, label: 'My Tech Stack' },
      { name: 'Projects', icon: FolderGit2, label: 'View Projects' },
      { name: 'Contact', icon: Mail, label: 'Get in Touch' }
    ];
  
    const NavItem = ({ item, isMobile }) => {
      const Icon = motion(item.icon);
      
      return (
        <motion.button
          onClick={() => handleClick(item)}
          onHoverStart={() => setIsHovered(item.name)}
          onHoverEnd={() => setIsHovered(null)}
          className="group relative"
        >
 <motion.div 
            className="flex flex-col items-center gap-1.5"
            whileHover={{ y: isMobile ? 0 : -2 }}
          >
            <div className="relative">
              <Icon 
                className={`w-5 h-5 ${
                  activeTab === item.name 
                    ? 'text-violet-400' 
                    : 'text-white/70 group-hover:text-white'
                } transition-colors duration-300`}
                animate={{ 
                  scale: activeTab === item.name ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {activeTab === item.name && (
                <motion.div
                  layoutId="indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-400"
                  transition={{ type: "spring", stiffness: 300 }}
                />
              )}
            </div>
            <span className={`text-xs font-medium tracking-wide whitespace-nowrap
              ${activeTab === item.name ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
              {item.name}
            </span>
          </motion.div>
  
          {/* Tooltip */}
          {isHovered === item.name && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5
                       bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
            >
              <span className="text-[10px] text-white/90 font-medium whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          )}
        </motion.button>
      );
    };
  
    if (isMobile) {
        return (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-6 left-0 right-0 mx-4 z-[999]"
          >
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 max-w-md mx-auto">
              <div className="grid grid-cols-4 gap-8">
                {navItems.map(item => (
                  <NavItem key={item.name} item={item} isMobile={true} />
                ))}
              </div>
            </div>
          </motion.div>
        );
      }
    
      return (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-8 left-0 right-0 mx-auto z-[999]"
        >
          <div className="flex justify-center">
            <motion.div
              className="px-6 py-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="grid grid-cols-4 gap-12">
                {navItems.map(item => (
                  <NavItem key={item.name} item={item} isMobile={false} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      );
      };
  
  export default FloatingNavbar;