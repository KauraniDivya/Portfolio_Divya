import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Code, Star, Award, Github, Globe,
  Play, ExternalLink, CheckCircle, X,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { g } from 'framer-motion/client';


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
      heroimage:'https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%207.42.10%E2%80%AFPM.png?alt=media&token=8381e6fd-eb5a-4f18-812e-beac80162f22',
      galleryImages: [
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%207.43.26%E2%80%AFPM.png?alt=media&token=7d39fce8-bf92-4469-a695-cd337d1e350a",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%209.02.32%E2%80%AFPM.png?alt=media&token=7a357659-b42f-4f96-a94d-dd83c1a575a9",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%209.03.54%E2%80%AFPM.png?alt=media&token=f1fce734-47c6-48c7-9acc-25e40463e118",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%209.04.59%E2%80%AFPM.png?alt=media&token=2060891f-59ca-45d8-b36f-eb04a1230fa3"
        ],
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
      galleryImages: [
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%2011.20.20%E2%80%AFPM.png?alt=media&token=0520c7b0-5b52-4a90-816b-147170836756",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%2011.20.31%E2%80%AFPM.png?alt=media&token=919dcb1d-8259-4773-8f19-687a5031aab2",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%2011.20.56%E2%80%AFPM.png?alt=media&token=29f74db9-b481-4975-ad0e-fe6c5d0c427f"
      ],
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
      galleryImages: [
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%209.11.26%E2%80%AFPM.png?alt=media&token=ad3b2541-d895-4f34-ba6b-bd7d1e70bbcf",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%209.11.02%E2%80%AFPM.png?alt=media&token=761e2ff6-0631-4bee-927f-8a99ced6b126",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fxen.png?alt=media&token=cd0668cf-58e9-4273-b3be-fa7b75d36e0a",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%209.10.16%E2%80%AFPM.png?alt=media&token=72199898-8a6c-49bd-aaae-e6b6630639e7"
        ],
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
      galleryImages: [
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%209.18.36%E2%80%AFPM.png?alt=media&token=79470013-a248-4add-90c3-305b8b7dec26",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%209.18.04%E2%80%AFPM.png?alt=media&token=5dd737e2-6e4f-4067-97f0-84172f272220",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fcollegpt.png?alt=media&token=24f1c0ee-61c7-4f8a-b2fb-1e8c277880a9",
        "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%209.15.41%E2%80%AFPM.png?alt=media&token=60df7cfd-0e06-4b9a-8363-9784d68010bb"
      ],
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
        galleryImages: [
            "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%2011.23.36%E2%80%AFPM.png?alt=media&token=0c35cb85-e3e1-474d-9869-94f38bf9bb86",
            "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2Fsih23.png?alt=media&token=582a086e-673b-44f3-b398-4f333dbbcb1c",
            "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%2011.24.32%E2%80%AFPM.png?alt=media&token=d01e46cf-c3ad-4330-9872-0b7b095c0112",
            "https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/portfolio%2FScreenshot%202024-12-22%20at%2011.23.52%E2%80%AFPM.png?alt=media&token=7714394b-1dff-45f9-ab56-bd6d15744677"
        ],

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
const Card = ({ item, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleClick = (e) => {
      e.stopPropagation();
      onClick(item);
    };
  
    return (
      <motion.div
        layout
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative rounded-3xl overflow-hidden bg-[#14141F] border border-white/[0.02]
                   cursor-pointer transition-all duration-300 hover:-translate-y-1"
      >
        {/* Background with Image */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Image with fallback and loading state handling */}
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative h-full w-full"
          >
            <img
              src={item.heroimage}
              alt={item.title}
              onLoad={() => setImageLoaded(true)}
              className={`h-full w-full object-cover transition-opacity duration-500 ease-out
                        ${imageLoaded ? 'opacity-40' : 'opacity-0'}`}
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14141F] via-[#14141F]/80 to-transparent" />
            <div className="absolute inset-0 bg-[#14141F]/40" />
          </motion.div>
        </div>
  
        {/* Content Container */}
        <div className="relative h-[400px] p-8 flex flex-col">
          {/* Top Section */}
          <div className="flex items-start justify-between">
            {/* Type Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="p-1.5 rounded-full bg-gradient-to-b from-violet-500/20 to-fuchsia-500/20">
                {item.type === 'hackathons' && <Trophy className="w-4 h-4 text-violet-300" />}
                {item.type === 'projects' && <Code className="w-4 h-4 text-violet-300" />}
                {item.type === 'certifications' && <Award className="w-4 h-4 text-violet-300" />}
                {item.type === 'events' && <Star className="w-4 h-4 text-violet-300" />}
              </div>
              <span className="text-sm text-white/90 font-light">
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-auto space-y-6">
            {/* Title & Description */}
            <div className="space-y-3">
              <h3 className="text-2xl text-white font-medium leading-tight">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-white/60 line-clamp-2">
                {item.description}
              </p>
            </div>
  
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {item.stack?.slice(0, 3).map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-[13px] bg-white/[0.03] text-white/70
                            border border-white/[0.08] hover:border-violet-500/20
                            hover:bg-violet-500/[0.02] transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {item.stack?.length > 3 && (
                <span className="px-2 py-1.5 text-[13px] text-white/40">
                  +{item.stack.length - 3} more
                </span>
              )}
            </div>
  
            {/* View Details Link */}
            <button
              onClick={handleClick}
              className="flex items-center gap-2 text-[14px] text-white/80 group/link
                       hover:text-white transition-colors duration-300"
            >
              <span>View Details</span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-4 h-4 text-violet-300 group-hover/link:text-violet-200" />
              </motion.div>
            </button>
          </div>
        </div>
  
        {/* Hover Glow Effect */}
        <div className="absolute -inset-[1px] rounded-[31px] opacity-0 group-hover:opacity-100
                       bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10
                       blur-xl transition-opacity duration-500" />
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
          <h1 className="text-5xl font-light mb-4">Work</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A showcase of hackathon victories, innovative projects, and technical accomplishments
          </p>
        </motion.div>


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