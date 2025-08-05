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
import  useScrollManager  from './hooks/ScrollManager';
import FloatingNavbar from './components/FloatingNavbar';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const { refs, scrollToSection } = useScrollManager();

  // Updated tech stack with user's actual skills
  const frontendStack = [ 
    {
        name: "React",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FReact-icon.svg.png?alt=media&token=72e2d89a-06aa-480a-948d-8566db1d0323"
    },
    {
        name: "React Native",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
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
        name: "Tailwind CSS",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Ftailwind.png?alt=media&token=dbd9f9df-59fe-4d63-920c-3a4cf903058c"
    },
    {
        name: "Material UI",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
    },
    {
        name: "Redux",
        icon: Box,
        logo: "https://cdn.worldvectorlogo.com/logos/redux.svg"
    },
    {
        name: "Three.js",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/threejs-1.svg"
    },
    {
        name: "jQuery",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg"
    },
    {
        name: "Sass",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fsass.png?alt=media&token=53002aa6-2a35-4134-a186-0531d747ef44"
    }
];

const backendStack = [
    {
        name: "Node.js",
        icon: Server,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fnode-removebg-preview.png?alt=media&token=61266d78-2916-4b48-b6ce-6c2d75565c4b"
    },
    {
        name: "Express.js",
        icon: Server,
        logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg"
    },
    {
        name: ".NET",
        icon: Server,
        logo: "https://cdn.worldvectorlogo.com/logos/microsoft-net-1.svg"
    },
    {
        name: "REST API",
        icon: Server,
        logo: "https://cdn.worldvectorlogo.com/logos/api-1.svg"
    },
    {
        name: "WebSocket",
        icon: Server,
        logo: "https://cdn.worldvectorlogo.com/logos/websocket.svg"
    },
    {
        name: "JWT",
        icon: Server,
        logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
    },
    {
        name: "OAuth",
        icon: Server,
        logo: "https://cdn.worldvectorlogo.com/logos/oauth-2.svg"
    },
    {
        name: "GraphQL",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/graphql.svg"
    },
    {
        name: "Python",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fpython.png?alt=media&token=00fdd56d-b8e5-4186-9aeb-f82f2479bb0a"
    },
    {
        name: "Java",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fjava.png?alt=media&token=2ea6e799-047e-4383-9db3-9c7e42cbc166"
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
        name: "C#",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/c--4.svg"
    },
    {
        name: "PHP",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/php-1.svg"
    },
    {
        name: "JavaScript",
        icon: Code,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fjslogo.png?alt=media&token=a9e0bac1-296d-48f8-bd3c-197d756f87e0"
    }
];

const databaseStack = [
    {
        name: "MongoDB",
        icon: Database,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fmongodb.png?alt=media&token=95a9ad9a-ec35-4872-ab81-a28c51c9022f"
    },
    {
        name: "MySQL",
        icon: Database,
        logo: "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fmysql.png?alt=media&token=6f9067e4-13bd-471f-8510-06d9116c8bc6"
    },
    {
        name: "PostgreSQL",
        icon: Database,
        logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg"
    },
    {
        name: "Firebase",
        icon: Cloud,
        logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
    },
    {
        name: "Redis",
        icon: Database,
        logo: "https://cdn.worldvectorlogo.com/logos/redis.svg"
    },
    {
        name: "SQL Server",
        icon: Database,
        logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg"
    },
    {
        name: "DynamoDB",
        icon: Database,
        logo: "https://cdn.worldvectorlogo.com/logos/amazon-dynamodb.svg"
    }
];

const devOpsStack = [
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
        name: "Vercel",
        icon: Cloud,
        logo: "https://cdn.worldvectorlogo.com/logos/vercel-1.svg"
    },
    {
        name: "AWS",
        icon: Cloud,
        logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
        name: "Google Cloud",
        icon: Cloud,
        logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-2.svg"
    },
    {
        name: "Docker",
        icon: Box,
        logo: "https://cdn.worldvectorlogo.com/logos/docker.svg"
    }
];

const toolsStack = [
    {
        name: "React Testing",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/react-testing-library.svg"
    },
    {
        name: "Jest",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/jest.svg"
    },
    {
        name: "Postman",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/postman.svg"
    },
    {
        name: "JIRA",
        icon: Code,
        logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg"
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

// Updated Carousel Component for single line scrolling
const TechCarousel = ({ items, direction = 1, speed = 30 }) => {
  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex gap-6 items-center"
        animate={{
          x: direction > 0 ? [-2000, 0] : [0, -2000],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <TechStackItem key={`${tech.name}-${index}`} {...tech} />
        ))}
      </motion.div>
    </div>
  );
};

const TechStackItem = ({ name, logo, icon: Icon }) => (
  <motion.div
    whileHover={{ 
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    className="group relative flex-shrink-0"
  >
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 
                  group-hover:border-violet-500/30 rounded-lg p-4 transition-all duration-300
                  group-hover:bg-zinc-800/50 min-w-[120px]">
      
      <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
        <img 
          src={logo} 
          alt={name}
          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <h3 className="text-sm font-medium text-white/90 text-center group-hover:text-white transition-colors duration-300">
        {name}
      </h3>
    </div>
  </motion.div>
);

  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden">
      <div id="home">
        <HeroSection />
      </div>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-white mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Technologies and tools I use to build modern applications
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Frontend Carousel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2 justify-center">
                <Code className="w-5 h-5 text-violet-400" />
                Frontend
              </h3>
              <TechCarousel items={frontendStack} direction={1} speed={25} />
            </motion.div>

            {/* Backend Carousel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2 justify-center">
                <Server className="w-5 h-5 text-violet-400" />
                Backend & Languages
              </h3>
              <TechCarousel items={backendStack} direction={-1} speed={28} />
            </motion.div>

            {/* Database Carousel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2 justify-center">
                <Database className="w-5 h-5 text-violet-400" />
                Databases
              </h3>
              <TechCarousel items={databaseStack} direction={1} speed={22} />
            </motion.div>

            {/* DevOps & Tools Carousel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2 justify-center">
                <Cloud className="w-5 h-5 text-violet-400" />
                DevOps & Tools
              </h3>
              <TechCarousel items={[...devOpsStack, ...toolsStack]} direction={-1} speed={26} />
            </motion.div>
          </div>
        </div>
      </section>

      <div id="projects">
        <ProjectsGrid />
      </div>
      <div id="contact">
        <StyledFooter />
      </div>
      <FloatingNavbar onNavClick={scrollToSection} />
    </div>
  );
};

export default Portfolio;