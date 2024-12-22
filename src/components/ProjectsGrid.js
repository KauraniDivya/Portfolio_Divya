import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Code, Star, Award, Github, Globe,
  Play, ExternalLink, CheckCircle, X,
  ChevronLeft, ChevronRight
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
      galleryImages: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
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
// Card Component
const Card = ({ item, onClick }) => (
  <motion.div
    layout
    onClick={onClick}
    className="group cursor-pointer relative rounded-2xl border border-white/5 
               overflow-hidden transition-all duration-300 hover:border-violet-500/20
               bg-zinc-900/50 backdrop-blur-sm"
  >
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="p-2 rounded-xl bg-white/5">
          {item.type === 'hackathons' && <Trophy className="w-6 h-6 text-violet-400" />}
          {item.type === 'projects' && <Code className="w-6 h-6 text-violet-400" />}
          {item.type === 'certifications' && <Award className="w-6 h-6 text-violet-400" />}
          {item.type === 'events' && <Star className="w-6 h-6 text-violet-400" />}
        </div>
        <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
          View Details →
        </span>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img
          src={item.heroimage}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        {item.event && (
          <div className="text-violet-400 text-sm">{item.event}</div>
        )}
        <h3 className="text-xl font-light text-white">{item.title}</h3>
        <p className="text-zinc-400 text-sm line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Tech Stack */}
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
  </motion.div>
);

// Detail Modal Component


const DetailModal = ({ item: initialItem, items, onClose }) => {
  const [currentItem, setCurrentItem] = useState(initialItem);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const currentIndex = items.findIndex(item => item.id === currentItem.id);
  // Combine heroimage with additional gallery images if they exist
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

  const goToNextItem = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentItem(items[nextIndex]);
    setCurrentImageIndex(0);
  };

  const goToPrevItem = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentItem(items[prevIndex]);
    setCurrentImageIndex(0);
  };

  const goToNextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };

  const goToPrevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Navigation */}
      <button 
        onClick={goToPrevItem}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full 
                 bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors
                 border border-white/10 group"
      >
        <ChevronLeft className="w-8 h-8 text-white/50 group-hover:text-white/90" />
      </button>

      <button 
        onClick={goToNextItem}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full 
                 bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors
                 border border-white/10 group"
      >
        <ChevronRight className="w-8 h-8 text-white/50 group-hover:text-white/90" />
      </button>

      {/* Modal Content */}
      <div className="fixed inset-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={e => e.stopPropagation()}
          className="w-full max-w-7xl bg-zinc-900 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-2">
            {/* Left Side - Content with Blurred Background */}
            <div className="relative">
              {/* Blurred Background */}
              <div className="absolute inset-0">
                <img
                  src={images[currentImageIndex]}
                  alt={currentItem.title}
                  className="w-full h-full object-cover filter blur-xl opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent" />
              </div>

              {/* Content */}
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

                  <h2 className="text-4xl font-light text-white">{currentItem.title}</h2>
                  {currentItem.date && (
                    <div className="text-zinc-400">{currentItem.date}</div>
                  )}
                </div>

                <p className="text-zinc-400 leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h3 className="text-lg font-light text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.stack?.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-white/5 text-zinc-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                {currentItem.highlights && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-light text-white">Key Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentItem.highlights.map((highlight, index) => (
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

            {/* Right Side - Image Gallery */}
            <div className="relative h-[800px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative h-full"
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={currentItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  {/* Arrow Navigation */}
                  <button 
                    onClick={goToPrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 
                             rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>

                  <button 
                    onClick={goToNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 
                             rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  {/* Dots Navigation */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex === index 
                            ? 'bg-white w-4' 
                            : 'bg-white/50'
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
        </motion.div>
      </div>
    </motion.div>
  );
};


// Main Component
const AchievementsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredAchievements = achievements.filter(
    item => selectedCategory === 'all' || item.type === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
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

       {/* Category Navigation (continued) */}
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

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item) => (
              <Card 
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
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
    </div>
  );
};

export default AchievementsShowcase;