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
  const frontendStack = [ 
    {
        name: "React",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FReact-icon.svg.png?alt=media&token=72e2d89a-06aa-480a-948d-8566db1d0323"
    },
    {
        name: "Node.js",
        icon: Server,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fnode-removebg-preview.png?alt=media&token=61266d78-2916-4b48-b6ce-6c2d75565c4b"
    },
    {
        name: "Next.js",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fnextjs.1024x1024.png?alt=media&token=b6c4f29f-aa25-499b-a828-8bcde4a74af9"
    },
    
    {
        name: "TypeScript",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Ftypescript-icon.1024x1024.png?alt=media&token=ca3d6b3e-0f7e-4cb7-ba31-c84aaf2cd332"
    },
    {
        name: "MongoDB",
        icon: Database,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fmongodb.png?alt=media&token=95a9ad9a-ec35-4872-ab81-a28c51c9022f"
    },
    {
        name: "Git",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fgitlogo.png?alt=media&token=06c105c1-016c-483e-aee2-18519b5f5b04"
    },
    {
        name: "GitHub",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fgithublogo.png?alt=media&token=38502405-4229-42cc-9e52-709ac9481a79"
    },
   
    {
        name: "Tailwind CSS",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Ftailwind.png?alt=media&token=dbd9f9df-59fe-4d63-920c-3a4cf903058c"
    },
    {
        name: "MySQL",
        icon: Database,
        logo: "phttps://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fmysql.png?alt=media&token=6f9067e4-13bd-471f-8510-06d9116c8bc6"
    },
    {
        name: "Sass",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fsass.png?alt=media&token=53002aa6-2a35-4134-a186-0531d747ef44"
    },
   
];
const backendStack = [
    {
        name: "HTML5",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fhtmllogo.png?alt=media&token=67aa657f-f946-4a2e-a345-210c2f886a52"
    },
    {
        name: "CSS3",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fcsslogo.png?alt=media&token=3f69377a-0701-4a64-887f-535b818a6025"
    },
    {
        name: "JavaScript",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fjslogo.png?alt=media&token=a9e0bac1-296d-48f8-bd3c-197d756f87e0"
    },
    {
        name : "Python",
        icon : Code,
        logo : "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fpython.png?alt=media&token=00fdd56d-b8e5-4186-9aeb-f82f2479bb0a"
    },
    {
        name: "C",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fclogo.png?alt=media&token=a6c3b9de-0767-47a4-b2c7-0246b8c5f16b"
    },
    {
        name: "C++",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fcpplogo.png?alt=media&token=acc7f552-cbcf-4a70-a13f-9c56475e308d"
    },
    {
        name: "Java",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fjava.png?alt=media&token=2ea6e799-047e-4383-9db3-9c7e42cbc166"
    },
     {
        name: "Canva",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fcanvalogo.png?alt=media&token=0e6ff64e-7fd8-471b-bb61-7e0f84c23417"
    },
    {
        name: "Figma",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Ffigmalogo.png?alt=media&token=ddf3a245-1bb0-4aba-949e-55b24d961354"
    },
    {
        name: "ChatGPT",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fchatgpt.png?alt=media&token=fe3786d9-aba1-49c5-b2ad-faea0879a3ae"
    }
];
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

  const TechStackItem = ({ name, logo }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative flex items-center"
    >
      <div className="flex items-center">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 
                      group-hover:border-violet-500/20 py-3 px-6 rounded-l-xl
                      flex items-center min-w-[120px]"
        >
          <span className="text-md text-zinc-300">{name}</span>
        </div>

        <div className="bg-zinc-800/50 backdrop-blur-sm border border-white/5 
                      group-hover:border-violet-500/20 p-2 rounded-r-xl
                      w-20 h-20 flex items-center justify-center 
                      -ml-2 relative z-10"
        >
          <div className="w-16 h-16 relative overflow-hidden rounded-lg">
            <img 
              src={logo} 
              alt={name}
              className="w-full h-full object-contain 
                         transform group-hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-violet-500/5 rounded-xl opacity-0 
                    group-hover:opacity-100 transition-opacity blur-xl" />
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

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
          
          <div className="flex flex-col gap-12 overflow-hidden">
            {/* First row - Frontend/Design Tools */}
            <div className="flex gap-8">
              <MarqueeGroup direction={1}>
                {frontendStack.map((tech) => (
                  <TechStackItem key={tech.name} {...tech} />
                ))}
              </MarqueeGroup>
              <MarqueeGroup direction={1}>
                {frontendStack.map((tech) => (
                  <TechStackItem key={`${tech.name}-2`} {...tech} />
                ))}
              </MarqueeGroup>
            </div>

            {/* Second row - Backend/Programming Languages */}
            <div className="flex gap-8">
              <MarqueeGroup direction={-1}>
                {backendStack.map((tech) => (
                  <TechStackItem key={tech.name} {...tech} />
                ))}
              </MarqueeGroup>
              <MarqueeGroup direction={-1}>
                {backendStack.map((tech) => (
                  <TechStackItem key={`${tech.name}-2`} {...tech} />
                ))}
              </MarqueeGroup>
            </div>
          </div>
        </div>
      </section>

      <ProjectsGrid />
      <StyledFooter />
    </div>
  );
};

export default Portfolio;