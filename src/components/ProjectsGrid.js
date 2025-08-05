import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Code, Star, Award, Github, Globe,
  Play, ExternalLink, CheckCircle, X,
  ChevronLeft, ChevronRight, Filter
} from 'lucide-react';

const achievements = [
    {
      id: 1,
      heroimage:'https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fab724798-c6bb-47b8-99f2-95712faf5dac.JPG?alt=media&token=0798dfef-ad8b-4078-ab4a-c7bea80b9257',
      galleryImages: [
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Faf99dd70-f938-472d-9683-3731a0bed727%202.JPG?alt=media&token=3879d2ee-db94-4be3-8035-c371365f9918",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Faf912b16-5927-4d25-ac5e-41cc7eaf2963%202.JPG?alt=media&token=45796db4-71da-4580-9fc9-f26ac7aa1e2a",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2F8a19fba6-6d61-4863-8865-27160e80aefc.JPG?alt=media&token=c0aad35b-f5c0-41d3-a81b-93a16eabd21d",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fdbc5e835-0405-4e79-b8f4-34eec0121977.JPG?alt=media&token=2655aea5-262f-4395-914f-21a02935b261",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2F2480e28f-fb96-4993-8bf8-4bf78a433913%202.jpg?alt=media&token=86d6ad7b-24f2-4bfe-bbaf-0f3bd6ebb408"
      ],
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
      heroimage:'../assets/odoo.png',
      type: 'hackathons',
      title: 'Odoo Combat 2024 Finalist',
      event: 'Odoo Coding Combat',
      date: '2024',
      image: '../assets/odoo.png',
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
      heroimage:'https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FNPTEL_D.jpg?alt=media&token=8cf0113e-97f1-4fcf-8477-cd0dc97ddecd',
      galleryImages: [
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fnptel.jpeg?alt=media&token=c1fa68f5-2c8f-4ca3-af09-71f752306532",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FNPTEL%20(1).png?alt=media&token=973bc09a-aa4d-4bea-94aa-d8ff78f28897",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fnptel1.jpeg?alt=media&token=f0ad87e7-6200-4d28-b727-d7629c09da71"
        ],
      type: 'certifications',
      title: 'NPTEL Star',
      event: 'NPTEL Discipline Stars',
      date: '2024',
      image: '../assets/nptel.png',
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
      heroimage:'../assets/streamit.jpg',
      type: 'projects',
      title: 'StreamIt!',
      category: 'Streaming Platform',
      image: '../assets/streamit.jpg',
      description: 'Robust, scalable streaming application for YouTube live streaming and recording',
      stack: ['Docker', 'FFmpeg', 'RTMP', 'Socket.io'],
      features: [
        'Live YouTube Streaming',
        'Video Recording & Download',
        'Real-time Chat Integration',
        'Multi-platform Support',
        'Custom RTMP Server'
      ],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 5,
      heroimage:'../assets/xenesis.jpg',
      type: 'projects',
      title: 'Xenesis',
      category: 'E-commerce Platform',
      image: '../assets/xenesis.jpg',
      description: 'Full-stack e-commerce platform with advanced features and modern UI/UX',
      stack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      features: [
        'User Authentication & Authorization',
        'Product Management',
        'Shopping Cart & Checkout',
        'Payment Integration',
        'Admin Dashboard'
      ],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 6,
      heroimage:'../assets/portfolio.jpg',
      type: 'projects',
      title: 'Portfolio Website',
      category: 'Personal Portfolio',
      image: '../assets/portfolio.jpg',
      description: 'Modern, responsive portfolio website showcasing skills and projects',
      stack: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      features: [
        'Responsive Design',
        'Smooth Animations',
        'Dark Theme',
        'Interactive Elements',
        'Performance Optimized'
      ],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 7,
      heroimage:'../assets/voice-ai.jpg',
      type: 'projects',
      title: 'Voice AI Experiment',
      category: 'AI Voice Assistant',
      image: '../assets/voice-ai.jpg',
      description: 'Flexible voice-to-voice AI system with multiple personality companions including Detective Mr. X, Dr. Sage, Coach Elite, and Alex',
      stack: ['React', 'Vite', 'Web Speech API', 'Gemini AI', 'ElevenLabs API', 'Vercel'],
      features: [
        'Multiple AI Personalities',
        'Voice-to-Voice Interaction',
        'Real-time Speech Processing',
        'Personality Switching',
        'Premium Voice Synthesis'
      ],
      highlights: [
        'Built 5 unique AI personalities',
        'Seamless voice conversation flow',
        'Instant personality switching',
        'Advanced prompt engineering',
        'Learning experiment with AI tools'
      ],
      links: {
        github: 'https://github.com/yourusername/voice-ai-experiment',
        live: 'https://voice-ai-experiment.vercel.app'
      }
    },
    {
      id: 8,
      heroimage:'../assets/voice-ai-experiment.jpg',
      type: 'projects',
      title: 'Voice AI Experiment Complete! 🎙️✨',
      category: 'AI Voice Assistant',
      image: '../assets/voice-ai-experiment.jpg',
      description: 'Built a flexible voice-to-voice AI system with multiple personality companions! Features Detective Mr. X, Dr. Sage, Coach Elite, Alex, and Custom AI personalities.',
      stack: ['React', 'Vite', 'Web Speech API', 'Google Gemini AI', 'ElevenLabs API', 'Chrome Speech Synthesis', 'Vercel'],
      features: [
        '🕵️‍♂️ Detective Mr. X - Witty problem solver with analytical charm',
        '🧠 Dr. Sage - Compassionate therapist with gentle wisdom',
        '💪 Coach Elite - High-energy motivational performance coach',
        '👋 Alex - Your fun-loving, loyal conversation buddy',
        '⚡ Custom AI - Design your own unique personality'
      ],
      highlights: [
        '🗣️ Speak → Web Speech API captures',
        '🧠 Process → Gemini AI responds with personality',
        '🔊 Speak back → ElevenLabs converts to voice',
        'Switch personalities instantly!',
        'Each companion has unique prompt that transforms conversation style'
      ],
      learnings: [
        'The real power isn\'t in the APIs - it\'s in crafting personality and conversation flow 🎭',
        'Voice interfaces create surprisingly intimate AI interactions',
        'Prompt engineering can completely transform user experience',
        'Simple architecture can enable powerful experiments 🚀',
        'No memory between sessions, no complex architecture - just pure exploration'
      ],
      links: {
        github: 'https://lnkd.in/dFcYbQNG',
        live: 'https://lnkd.in/d7aX--tK'
      }
    }
];

// Enhanced Card Component
const ProjectCard = ({ item, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    onClick(item);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'hackathons': return <Trophy className="w-4 h-4 text-violet-400" />;
      case 'projects': return <Code className="w-4 h-4 text-violet-400" />;
      case 'certifications': return <Award className="w-4 h-4 text-violet-400" />;
      case 'events': return <Star className="w-4 h-4 text-violet-400" />;
      default: return <Code className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <motion.div
      layout
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 
                 rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                 hover:border-violet-500/30 hover:bg-zinc-800/50 h-[500px] flex flex-col"
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <motion.img
          src={item.heroimage}
          alt={item.title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500
                    ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                    ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 
                       bg-zinc-900/80 backdrop-blur-sm border border-white/20 rounded-full">
          {getTypeIcon(item.type)}
          <span className="text-xs text-white/90 font-medium capitalize">
            {item.type}
          </span>
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 
                       bg-zinc-900/80 backdrop-blur-sm border border-white/20 rounded-full">
          <span className="text-xs text-white/70">{item.date}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white group-hover:text-violet-200 transition-colors duration-300 mb-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/60 line-clamp-3 leading-relaxed mb-4 flex-1">
          {item.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.stack?.slice(0, 4).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs bg-zinc-800/50 text-white/70 rounded-md
                        border border-white/10 hover:border-violet-500/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {item.stack?.length > 4 && (
            <span className="px-2 py-1 text-xs text-white/40">
              +{item.stack.length - 4}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <motion.button
          onClick={handleClick}
          className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 
                   transition-colors duration-300 group/btn mt-auto"
          whileHover={{ x: 4 }}
        >
          <span>View Details</span>
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                     bg-gradient-to-r from-violet-500/5 to-purple-500/5
                     transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

// Detail Modal Component

const DetailModal = ({ item: initialItem, items, onClose }) => {
  const [currentItem, setCurrentItem] = useState(initialItem);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [imageOrientation, setImageOrientation] = useState('landscape');

  const currentIndex = items.findIndex(item => item.id === currentItem.id);
  const images = [currentItem.heroimage, ...(currentItem.galleryImages || [])];

  useEffect(() => {
    let timer;
    if (isAutoplay && images.length > 1) {
      timer = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoplay, images.length]);

  // Check image orientation
  const checkImageOrientation = (imageUrl) => {
    const img = new Image();
    img.onload = () => {
      setImageOrientation(img.width >= img.height ? 'landscape' : 'portrait');
    };
    img.src = imageUrl;
  };

  useEffect(() => {
    checkImageOrientation(images[currentImageIndex]);
  }, [currentImageIndex, images]);

  const navigationHandlers = {
    goToNextItem: (e) => {
      e.stopPropagation();
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentItem(items[nextIndex]);
      setCurrentImageIndex(0);
    },
    goToPrevItem: (e) => {
      e.stopPropagation();
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      setCurrentItem(items[prevIndex]);
      setCurrentImageIndex(0);
    },
    goToNextImage: (e) => {
      e?.stopPropagation();
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    },
    goToPrevImage: (e) => {
      e?.stopPropagation();
      setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Navigation Buttons */}
      <div className="hidden md:block">
        <button 
          onClick={navigationHandlers.goToPrevItem}
          className="fixed left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full 
                   bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors
                   border border-white/10 group"
        >
          <ChevronLeft className="w-8 h-8 text-white/50 group-hover:text-white/90" />
        </button>
        <button 
          onClick={navigationHandlers.goToNextItem}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full 
                   bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors
                   border border-white/10 group"
        >
          <ChevronRight className="w-8 h-8 text-white/50 group-hover:text-white/90" />
        </button>
      </div>

      {/* Modal Content */}
      <div className="fixed inset-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-7xl bg-zinc-900 rounded-2xl overflow-hidden max-h-[95vh]"
        >
          <div className={`flex flex-col md:grid ${
            imageOrientation === 'portrait' ? 'md:grid-cols-[40%_60%]' : 'md:grid-cols-2'
          }`}>
            {/* Image Section */}
            <div className="relative w-full">
              {/* Blurred background for image section */}
              <div className="absolute inset-0">
                <img
                  src={images[currentImageIndex]}
                  alt=""
                  className="w-full h-full object-cover blur-xl opacity-70 scale-10"
                />
                <div className="absolute inset-0 bg-zinc-950/70" />
              </div>

              <div className={`
                relative w-full
                ${imageOrientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
                md:aspect-auto md:h-[800px]
              `}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <img
                      src={images[currentImageIndex]}
                      alt={currentItem.title}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Image Navigation */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={navigationHandlers.goToPrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 
                               rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button 
                      onClick={navigationHandlers.goToNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 
                               rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full 
                           bg-black/20 hover:bg-black/40 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative md:h-[800px] overflow-y-auto">
              {/* Blurred background for content section */}
              <div className="absolute inset-0">
                <img
                  src={images[currentImageIndex]}
                  alt=""
                  className="w-full h-full object-cover blur-xl opacity-50 scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/80 via-zinc-950/70 to-zinc-950/80" />
              </div>

              <div className="relative p-8 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-white/5">
                      {currentItem.type === 'hackathons' && <Trophy className="w-6 h-6 text-violet-400" />}
                      {currentItem.type === 'projects' && <Code className="w-6 h-6 text-violet-400" />}
                      {currentItem.type === 'certifications' && <Award className="w-6 h-6 text-violet-400" />}
                      {currentItem.type === 'events' && <Star className="w-6 h-6 text-violet-400" />}
                    </div>
                    <div className="text-violet-400 text-sm tracking-wide">
                      {currentItem.event || currentItem.category}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-light text-white">{currentItem.title}</h2>
                  {currentItem.date && (
                    <div className="text-zinc-400">{currentItem.date}</div>
                  )}
                </div>

                <p className="text-zinc-400 leading-relaxed">{currentItem.description}</p>

                {/* Tech Stack */}
                {currentItem.stack && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-light text-white">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentItem.stack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-4 py-2 bg-white/5 text-zinc-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {currentItem.highlights && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-light text-white">Key Highlights</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {currentItem.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                          <span className="text-zinc-400">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learnings */}
                {currentItem.learnings && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-light text-white">What I Learned</h3>
                    <div className="space-y-3">
                      {currentItem.learnings.map((learning, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 shrink-0" />
                          <span className="text-zinc-400 leading-relaxed">{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                {currentItem.links && (
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(currentItem.links).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                               bg-white/5 hover:bg-white/10 text-white transition-all group"
                      >
                        {key === 'github' && <Github className="w-4 h-4 text-violet-400" />}
                        {key === 'live' && <Globe className="w-4 h-4 text-violet-400" />}
                        {key === 'demo' && <Play className="w-4 h-4 text-violet-400" />}
                        <span className="capitalize">{key}</span>
                        <ExternalLink className="w-4 h-4 text-violet-400 
                                            group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


// Main Component
const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', label: 'All', icon: <Code className="w-4 h-4" /> },
    { id: 'hackathons', label: 'Hackathons', icon: <Trophy className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="w-4 h-4" /> }
  ];

  const filteredAchievements = achievements.filter(
    item => selectedCategory === 'all' || item.type === selectedCategory
  );

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-white mb-4">
            Projects & Achievements
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A showcase of hackathon victories, innovative projects, and technical accomplishments
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-2 p-1 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                          ${selectedCategory === category.id 
                            ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                            : 'text-white/60 hover:text-white/80 hover:bg-white/5'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard 
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <DetailModal 
              item={selectedItem}
              items={filteredAchievements}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsGrid;