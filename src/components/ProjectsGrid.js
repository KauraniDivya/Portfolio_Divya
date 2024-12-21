import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Code, Rocket, Terminal, Brain, Database, 
  Medal, Star, Award, Book, Lightbulb, CheckCircle,
  Globe, Server, Monitor, Layout, Github, Play, ExternalLink
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'events', label: 'Events' }
];

const achievements = [
    {
      id: 1,
      heroimage:'https://i.ibb.co/WvgQrNj/ab724798-c6bb-47b8-99f2-95712faf5dac.jpg',
      type: 'hackathons',
      title: 'Smart India Hackathon 2024 Winner',
      event: 'Smart India Hackathon',
      date: '2024',
      location: 'IIT Gandhinagar',
      image: '/api/placeholder/800/500',
      description: 'Led the winning team in developing a comprehensive Alumni Association platform for strengthening the bond between alumni and institutions.',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      highlights: [
        'First Prize Winner at IIT Gandhinagar',
        'Led a team of 6 members',
        'Built Alumni Platform',
        'Real-world implementation',
        'Government of Gujarat Problem Statement'
      ],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      id: 2,
      heroimage:'https://i.ibb.co/Nn7ZzT9/odoo.png',
      type: 'hackathons',
      title: 'Odoo Combat 2024 Finalist',
      event: 'Odoo Coding Combat',
      date: '2024',
      image: 'https://i.ibb.co/Nn7ZzT9/odoo.png',
      description: 'Competed among 600+ teams, implemented Diet Recommendation System and Library Management System',
      stack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind', 'Chart.js'],
      highlights: [
        'Top 150 Teams among 2500+ participants',
        'Built Diet Recommendation System',
        'Developed Library Management System',
        'Implemented real-time features',
        'Used Gemini 1.5 Turbo for AI features'
      ]
    },
    {
      id: 3,
      heroimage:'https://i.ibb.co/s61Mx2S/nptel.png',
      type: 'certifications',
      title: 'NPTEL Star',
      event: 'NPTEL Discipline Stars',
      date: '2024',
      image: 'https://i.ibb.co/s61Mx2S/nptel.png',
      description: 'Recognized as NPTEL Star for completing five programming domain courses with excellence',
      stack: ['DSA in Java', 'Cloud Computing', 'Programming in Java',  'Database Management System', 'Introduction to Machine Learning'],
      highlights: [
        'Completed 5 Programming Domain Courses',
        'Invited to NPTEL Stars Interactive Session at IIT Bombay',
        'Recognition for academic excellence',
        'Free T-shirt as appreciation token'
      ],
      courses: [
        'Data Structures and Algorithms with Java',
        'Database Management Systems',
        'Programming in Java',
        'Introduction to Machine Learning',
        'Cloud Computing'
      ]
    },
    {
      id: 4,
      heroimage:'https://i.ibb.co/c28GMz2/streamit.jpg',
      type: 'projects',
      title: 'StreamIt!',
      category: 'Streaming Platform',
      image: 'https://i.ibb.co/c28GMz2/streamit.jpg',
      description: 'Robust, scalable streaming application for YouTube live streaming and recording',
      stack: ['Docker', 'FFmpeg', 'RTMP', 'Socket.io'],
      features: [
        'Live YouTube Streaming',
        'Video Recording & Download',
        'Container Isolation',
        'Real-time Communication'
      ],
      highlights: [
        'Containerized Application',
        'Efficient Video Processing',
        'Real-time Streaming Capabilities',
        'Scalable Architecture'
      ],
      links: {
        github: '#',
        live: '#',
        demo: '#'
      }
    },
    {
      id: 5,
      heroimage:'https://i.ibb.co/WxjtBc3/Screenshot-2024-12-21-at-3-03-14-PM.png',
      type: 'projects',
      title: 'IPL Dashboard',
      category: 'Sports Analytics',
      image: 'https://i.ibb.co/WxjtBc3/Screenshot-2024-12-21-at-3-03-14-PM.png',
      description: 'Dynamic platform providing real-time updates and comprehensive IPL information using web scraping',
      stack: ['React', 'Node.js', 'Cheerio', 'Puppeteer', 'Tailwind'],
      features: [
        'Live Scores',
        'IPL Points Table',
        'Team Information',
        'Stadium Details',
        'Match Results & Fixtures'
      ],
      links: {
        github: '#',
        live: '#',
        docs: '#',
        demo: '#'
      }
    },
    {
      id: 6,
      heroimage:'https://i.ibb.co/fqWC06Z/Screenshot-2024-12-21-at-3-08-06-PM.png',
      type: 'projects',
      title: 'VisioBrain',
      category: 'AI Platform',
      image: 'https://i.ibb.co/fqWC06Z/Screenshot-2024-12-21-at-3-08-06-PM.png',
      description: 'Revolutionary one-click platform for data analysis with AI capabilities',
      stack: ['MERN Stack', 'Python', 'Firebase', 'Machine Learning'],
      features: [
        'One-Click Analysis',
        'Universal Data Format Support',
        'Automated Operations',
        'Interactive Visualizations',
        'Custom Analysis Options'
      ],
      highlights: [
        'Automated Data Analysis',
        'ML Model Integration',
        'Visual Data Storytelling',
        'Security Implementation'
      ],
      links: {
        demo: '#',
        presentation: '#'
      }
    },
    {
      id: 7,
      heroimage:'https://i.ibb.co/yFcjvFr/xenesisp.jpg',
      type: 'events',
      title: 'Xenesis 2024',
      event: 'College Tech Fest',
      date: '2024',
      image: 'https://i.ibb.co/yFcjvFr/xenesisp.jpg',
      description: 'Contributed to the success of Xenesis 2024 as part of the Website Committee',
      highlights: [
        'Website Committee Member',
        'ReactJS Development',
        'Animation Implementation',
        'Second Prize in Poster Making',
        'First Prize in X-Avishkar'
      ],
      stack: ['React', 'Animation Libraries', 'Web Development']
    },
    {
      id: 8,
      heroimage:'https://i.ibb.co/B46JGH1/collegpt.png',
      type: 'projects',
      title: 'ColleGPT',
      category: 'Education Platform',
      image: 'https://i.ibb.co/B46JGH1/collegpt.png',
      description: 'Ultimate College Companion revolutionizing academic journey with comprehensive resources',
      stack: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
      features: [
        'गीता पाठ Integration',
        'Xclusive Notes',
        'Real-Time Event Updates',
        'Handy Cheat Sheets',
        'In-Depth Learning Guides'
      ],
      highlights: [
        'User-Friendly Interface',
        'Comprehensive Study Materials',
        'Community Features',
        'Event Management'
      ],
      links: {
        live: 'www.collegpt.com'
      }
    },
    {
      id: 9,
      heroimage:'https://i.ibb.co/LxmR9v9/Screenshot-2024-12-21-at-5-19-47-PM.png',
      type: 'hackathons',
      title: 'SIH 2023 Finalist',
      event: 'Smart India Hackathon',
      date: '2023',
      image: 'https://i.ibb.co/LxmR9v9/Screenshot-2024-12-21-at-5-19-47-PM.png',
      description: 'Created UNITEBHARAT - platform for student projects in Smart Education domain',
      location: 'Manipal Institute of Technology Jaipur',
      stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Recharts'],
      highlights: [
        '36+ Hour Hackathon',
        'Smart Education Domain',
        'Problem Statement SIH-1369',
        'Live Session with PM',
        'Collaborative Development'
      ]
    },
    {
      id: 10,
      heroimage:'https://i.ibb.co/7jR1Mn0/btb.png',
      type: 'hackathons',
      title: 'Break The Barrier Winner',
      event: 'BTB Hackathon',
      date: '2022',
      image: 'https://i.ibb.co/7jR1Mn0/btb.png',
      description: 'Won national level hackathon under MongoDB category with college canteen website',
      stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      highlights: [
        'National Level Winner',
        'MongoDB Category',
        'Built "THE HIDE OUT"',
        'Full-Stack Implementation'
      ],
      links: {
        github: '#'
      }
    }
  ];
  
  const AchievementsShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const containerRef = useRef(null);
  
    const filteredAchievements = achievements.filter(
      item => selectedCategory === 'all' || item.type === selectedCategory
    );
  
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header with animated text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Trophy className="w-12 h-12 text-violet-400 mx-auto mb-6" />
            <h1 className="text-5xl font-light mb-4">Achievements & Projects</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A showcase of hackathon victories, innovative projects, and technical accomplishments
            </p>
          </motion.div>
  
          {/* Category Navigation */}
          <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm transition-all whitespace-nowrap
                  ${selectedCategory === category.id 
                    ? 'bg-gradient-to-r from-violet-400 to-fuchsia-400 text-black' 
                    : 'bg-zinc-900/50 text-white hover:bg-zinc-800'}`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
  
          {/* Achievement Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredAchievements.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer relative"
                  onClick={() => setSelectedItem(item)}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-white/5 
                               overflow-hidden hover:border-violet-500/20 transition-all">
                    {/* Achievement Card Content */}
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          {item.type === 'hackathons' && <Trophy className="w-8 h-8 text-violet-400" />}
                          {item.type === 'projects' && <Code className="w-8 h-8 text-violet-400" />}
                          {item.type === 'certifications' && <Award className="w-8 h-8 text-violet-400" />}
                          {item.type === 'events' && <Star className="w-8 h-8 text-violet-400" />}
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredCard === item.id ? 1 : 0 }}
                          className="text-violet-400"
                        >
                          View Details →
                        </motion.div>
                      </div>
  
                      <img src={item.heroimage} alt={item.title} className="w-full h-48 object-cover mb-6 rounded-xl" />
                      
                      {/* Title */}
                      <h3 className="text-xl font-light text-white mb-2">{item.title}</h3>
                      {item.event && (
                        <div className="text-violet-400 text-sm mb-4">{item.event}</div>
                      )}
                      
                      {/* Description */}
                      <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                        {item.description}
                      </p>
  
                      {/* Tech Stack/Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {item.stack?.slice(0, 3).map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.stack?.length > 3 && (
                          <span className="px-3 py-1 text-zinc-500 text-xs">
                            +{item.stack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
  
          {/* Detailed Modal */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedItem(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header with Gradient */}
                  <div className="relative p-8 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-t-2xl">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 
                               flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors"
                    >
                      <p className="w-5 h-5">X</p> 
                    </button>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/5">
                        {selectedItem.type === 'hackathons' && <Trophy className="w-8 h-8 text-violet-400" />}
                        {selectedItem.type === 'projects' && <Code className="w-8 h-8 text-violet-400" />}
                        {selectedItem.type === 'certifications' && <Award className="w-8 h-8 text-violet-400" />}
                        {selectedItem.type === 'events' && <Star className="w-8 h-8 text-violet-400" />}
                      </div>
                      <div>
                        <div className="text-violet-400 text-sm tracking-wide mb-2">
                          {selectedItem.event || selectedItem.category}
                        </div>
                        <h3 className="text-2xl font-light text-white">{selectedItem.title}</h3>
                        {selectedItem.date && (
                          <div className="text-zinc-400 text-sm mt-2">{selectedItem.date}</div>
                        )}
                      </div>
                    </div>
                  </div>
  
                  {/* Content Sections */}
                  <div className="p-8 space-y-8">
                    {/* Description */}
                    <div className="space-y-4">
                      <h4 className="text-lg text-white font-light flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-violet-400" />
                        Overview
                      </h4>
                      <p className="text-zinc-400 leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>
  
                    {/* Key Highlights */}
                    {selectedItem.highlights && (
                      <div className="space-y-4">
                        <h4 className="text-lg text-white font-light flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-violet-400" />
                          Key Highlights
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {selectedItem.highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                              <span className="text-zinc-400">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
  
                    {/* Tech Stack */}
                    {selectedItem.stack && (
                      <div className="space-y-4">
                        <h4 className="text-lg text-white font-light flex items-center gap-2">
                          <Code className="w-4 h-4 text-violet-400" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.stack.map((tech, index) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm
                                       hover:bg-white/10 transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
  
                    {/* Features for Projects */}
                    {selectedItem.features && (
                      <div className="space-y-4">
                        <h4 className="text-lg text-white font-light flex items-center gap-2">
                          <Rocket className="w-4 h-4 text-violet-400" />
                          Key Features
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {selectedItem.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                              <span className="text-zinc-400">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
  
                    {/* Links */}
                    {selectedItem.links && (
                      <div className="flex flex-wrap gap-4 pt-4">
                        {Object.entries(selectedItem.links).map(([key, url], index) => (
                          <motion.a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r 
                                     from-violet-400/10 to-fuchsia-400/10 text-white hover:from-violet-400/20 
                                     hover:to-fuchsia-400/20 transition-all group"
                          >
                            {key === 'github' && <Github className="w-4 h-4 text-violet-400" />}
                            {key === 'live' && <Globe className="w-4 h-4 text-violet-400" />}
                            {key === 'demo' && <Play className="w-4 h-4 text-violet-400" />}
                            <span className="capitalize">{key}</span>
                            <ExternalLink className="w-4 h-4 text-violet-400 group-hover:translate-x-0.5 
                                                   transition-transform" />
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };
  
  export default AchievementsShowcase;