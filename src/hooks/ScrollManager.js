import { useEffect, useRef } from 'react';

const useScrollManager = () => {
  const homeRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      'Home': homeRef,
      'TechStack': techStackRef,
      'Projects': projectsRef,
      'Contact': contactRef
    };

    const targetRef = refs[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else if (section === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Handle initial navigation if URL has hash
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 500);
    }
  }, []);

  return {
    refs: {
      homeRef,
      techStackRef,
      projectsRef,
      contactRef
    },
    scrollToSection
  };
};

export default useScrollManager;