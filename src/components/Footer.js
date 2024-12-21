import React from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Github,
  Instagram,
  YoutubeIcon,
  Twitter,
  Send,
} from 'lucide-react';

const StyledFooter = () => {
  const socialLinks = [
    { 
      icon: Linkedin,
      href: "https://www.linkedin.com/in/divyakaurani/",
      label: "LinkedIn"
    },
    { 
      icon: Github,
      href: "https://github.com/KauraniDivya",
      label: "Github"
    },
    { 
      icon: Instagram,
      href: "https://www.instagram.com/divya_kaurani20/",
      label: "Instagram"
    },
    { 
      icon: YoutubeIcon,
      href: "https://www.youtube.com/channel/UCSdls-ZlC1jv5tWtJDYIcqw",
      label: "YouTube"
    },
    { 
      icon: Twitter,
      href: "https://twitter.com/d_kaurani61801",
      label: "Twitter"
    },
    { 
      icon: Send,
      href: "https://t.me/+919558059911",
      label: "Telegram"
    }
  ];

  return (
    <footer className="relative w-full bg-[#0A0A0A] overflow-hidden pt-20">
      {/* Quote Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <p className="text-zinc-400 text-2xl md:text-4xl font-light tracking-wide font-serif">
          "Learning, Living, and Leveling Up."
        </p>
      </motion.div>

      {/* GetinTouch Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h3 className="text-violet-400 font-mono text-xl md:text-2xl tracking-wide">
          GetinTouch();
        </h3>
      </motion.div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 md:gap-8 mb-20 flex-wrap px-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="group relative"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center 
                          transition-all duration-300 group-hover:bg-violet-50">
              <Icon className="w-5 h-5 text-black transition-all duration-300" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Let's Talk Section */}
      <div className="flex justify-between items-center px-4 md:px-20 inset-0 bg-gradient-to-t from-[#642f70] via-transparent to-transparent">
        {/* LET'S text - hidden on mobile */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="hidden md:block text-[180px] leading-none text-white font-medium drop-shadow-xl"
        >
          LET'S
        </motion.h2>
        
        {/* Avatar - visible on all screens */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative w-64 h-64 md:w-96 md:h-96 mx-auto md:mx-0"
        >
          <img 
            src="https://i.ibb.co/71jpqJF/avatar.png" 
            alt="Divya Kaurani" 
            className="w-full h-full object-cover z-10"
          />
          <div className="absolute" />
        </motion.div>

        {/* TALK text - hidden on mobile */}
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="hidden md:block text-[180px] leading-none text-white font-medium drop-shadow-xl"
        >
          TALK
        </motion.h2>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-zinc-800">
        <div className="container mx-auto py-6 px-4 text-center">
          <p className="text-zinc-500 text-sm font-mono">
            Design & Built by Divya Kaurani © twentytwentyfour
          </p>
        </div>
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent 
                    pointer-events-none -z-10" />
    </footer>
  );
};

export default StyledFooter;