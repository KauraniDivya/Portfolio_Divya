import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, Github, Globe, 
  Rocket, Terminal, Brain, Database, 
  Server, Code, Monitor, Cpu,
  ChevronRight, Lightbulb, Link
} from 'lucide-react';

// Project categories for filtering
const categories = [
  "All", "Web App", "Mobile", "AI/ML", "DevOps", "Backend"
];

// Extended project data
const projects = [
  {
    id: 1,
    title: "StreamIt!",
    category: "Web App",
    shortDesc: "Next-gen video streaming platform",
    fullDesc: "A scalable streaming platform revolutionizing live content delivery with advanced features and real-time analytics.",
    image: "/api/placeholder/800/600",
    icon: Globe,
    color: "from-sky-400 to-blue-500",
    tech: ["Docker", "RTMP", "WebRTC", "Redis", "AWS"],
    features: [
      "Live streaming with < 2s latency",
      "Auto-scaling infrastructure",
      "Real-time analytics dashboard",
      "Multi-device synchronization",
      "Advanced content delivery network"
    ],
    metrics: [
      { label: "Active Users", value: "50K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Stream Quality", value: "4K" }
    ],
    links: {
      github: "https://github.com",
      live: "https://example.com",
      docs: "https://docs.example.com"
    }
  },
  // Add more projects here...
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header with Gradient */}
        <div className={`p-8 bg-gradient-to-r ${project.color} rounded-t-2xl relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 
                     flex items-center justify-center text-white/80 hover:bg-black/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white/10">
              <project.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-light text-white mb-2">{project.title}</h3>
              <div className="text-white/80">{project.category}</div>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 space-y-8">
          {/* Project Image */}
          <div className="rounded-xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h4 className="text-xl text-white font-light">Overview</h4>
            <p className="text-zinc-400 leading-relaxed">{project.fullDesc}</p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-xl text-white font-light">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h4 className="text-xl text-white font-light">Key Features</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div 
                  key={feature}
                  className="flex items-center gap-3 text-zinc-400"
                >
                  <Lightbulb className="w-4 h-4 text-teal-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {project.metrics.map((metric) => (
              <div 
                key={metric.label}
                className="p-4 rounded-xl bg-white/5 text-center"
              >
                <div className="text-2xl text-white mb-1">{metric.value}</div>
                <div className="text-sm text-zinc-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            {Object.entries(project.links).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 
                         text-white hover:bg-white/10 transition-colors"
              >
                {key === 'github' && <Github className="w-4 h-4" />}
                {key === 'live' && <Globe className="w-4 h-4" />}
                {key === 'docs' && <Terminal className="w-4 h-4" />}
                <span className="capitalize">{key}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    project => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(45,212,191,0.05),rgba(0,0,0,0))]" />
      
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-4"
        >
          <Rocket className="text-teal-400 w-6 h-6" />
          <h2 className="text-4xl font-light text-white">Featured Projects</h2>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all
                       ${selectedCategory === category 
                         ? 'bg-teal-400 text-black' 
                         : 'bg-white/5 text-white hover:bg-white/10'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-white/5 
                             overflow-hidden hover:border-teal-500/20 transition-colors">
                  {/* Project Card Content */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500
                               group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-6">
                      <project.icon className="w-8 h-8 text-teal-400 mb-3" />
                      <h3 className="text-xl text-white mb-1">{project.title}</h3>
                      <div className="text-zinc-400 text-sm">{project.category}</div>
                    </div>
                  </div>

                  <div className="p-6 pt-4">
                    <p className="text-zinc-400 text-sm mb-4">{project.shortDesc}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-white/5 text-white/70 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 text-white/50 text-xs">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <button className="flex items-center gap-2 text-teal-400 text-sm group">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsGrid;