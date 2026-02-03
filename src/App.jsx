import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Briefcase, Zap } from 'lucide-react';

export default function AnushreePortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const heroSkills = [
    'UI Design', 'UX Design', 'Wireframing', 'Prototyping',
    'User Research', 'Accessibility', 'Design Systems',
    'Graphic Design', 'Responsive Design', 'Strategic Design Approach',
    'User Centered Design', 'Usability Testing', 'Design & Interaction Design'
  ];

  const stats = [
    { number: 5, suffix: '+', label: 'Projects Completed' },
    { number: 4, suffix: '', label: 'Companies Worked With' },
    { number: 1, suffix: '+', label: 'Years Experience' },
    { number: 10, suffix: '+', label: 'Tools Mastered' }
  ];

  const services = [
    {
      icon: '✨',
      title: 'Intuitive UX Experiences',
      description: 'User flows and interfaces crafted with empathy—ensuring every interaction feels natural, seamless, and effortless.'
    },
    {
      icon: '🎨',
      title: 'Pixel-Perfect UI Craftsmanship',
      description: 'Clean, modern, and visually consistent interfaces built with strong attention to detail and aesthetic precision.'
    },
    {
      icon: '🔍',
      title: 'Research-Driven Designs',
      description: 'Solutions grounded in user research, usability testing, and data-backed insights for effective products.'
    },
    {
      icon: '📱',
      title: 'Wireframing & Prototyping',
      description: 'Creating low and high-fidelity prototypes to bring ideas to life quickly and enable rapid iteration.'
    },
    {
      icon: '♿',
      title: 'Accessible & Inclusive Design',
      description: 'Designing with accessibility guidelines ensuring digital experiences are usable by everyone.'
    },
    {
      icon: '🎯',
      title: 'Design Systems & Consistency',
      description: 'Building scalable design systems that maintain visual consistency across all touchpoints.'
    }
  ];

 const tools = [
  { 
    name: 'Figma', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    description: 'My dynamic design playground, fostering collaboration to ideate, prototype, and craft stunning UI.'
  },
  { 
    name: 'Adobe Illustrator', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
    description: 'A digital atelier where visions take shape, creating compelling and responsive websites with ease.'
  },
  { 
    name: 'Adobe Photoshop', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
    description: 'The visual storyteller for crafting pixel-perfect graphics, manipulating images, and bringing creative concepts to life.'
  },
  { 
    name: 'Adobe XD', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
    description: 'Rapid prototyping tool for designing and testing interactive user experiences with seamless workflows.'
  },
  { 
    name: 'Framer', 
    text: 'F', 
    bgColor: '#0055FF',
    description: 'Framer is the interactive canvas where ideas transform into real website through dynamic design.'
  },
  { 
    name: 'Notion', 
    text: 'N', 
    bgColor: '#000000',
    description: 'The organized realm for collaborative design, enhancing productivity with clean and effective interfaces.'
  },
  { 
    name: 'Miro', 
    text: 'M', 
    bgColor: '#FFD02F',
    description: 'My creative workshop for sculpting seamless and visually captivating e-commerce experiences.'
  },
  { 
    name: 'Sketch', 
    text: '💎', 
    bgColor: '#FDB300',
    description: 'Designing UI that harmonize with the joy of music discovery and deliver an immersive listening experience.'
  },
  { 
    name: 'Canva', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    description: 'Quick design solutions for creating social media graphics, presentations, and marketing materials effortlessly.'
  },
  { 
    name: 'HTML5', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Building the structural foundation of modern web experiences with semantic and accessible markup.'
  },
  { 
    name: 'CSS3', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Styling beautiful, responsive interfaces with animations and modern layout techniques.'
  },
  { 
    name: 'Jira', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    description: 'Managing design workflows and tracking project progress with agile methodology and team collaboration.'
  }
];

  const experiences = [
    {
      title: 'Associate UI/UX Designer',
      company: 'Camascope, Bengaluru',
      duration: 'Jan 2025 - Present',
      points: [
        'Designed scalable healthcare interfaces focusing on accessibility',
        'Conducted UX improvements through iterative design and feedback loops',
        'Enhanced feature usability through comprehensive testing'
      ]
    },
    {
      title: 'Associate Graphic Designer',
      company: 'BrightCHAMPS, Bengaluru',
      duration: 'Aug 2024 - Dec 2024',
      points: [
        'Developed visually engaging designs for K-12 educational institutes',
        'Enhanced student engagement by 25% based on user feedback',
        'Improved design-planning workflow efficiency by 20%'
      ]
    },
    {
      title: 'UI/UX Designer Intern',
      company: 'Brihat Infotech Private Limited',
      duration: 'Jan 2024 - Apr 2024',
      points: [
        'Designed responsive interfaces for Edzer platform',
        'Improved user engagement by 20% through iterative research',
        'Enhanced prototypes based on user feedback'
      ]
    },
    {
      title: 'UI/UX Designer Intern',
      company: 'Samartha InfoSolutions, Bengaluru',
      duration: 'Jul 2023 - Sept 2023',
      points: [
        'Designed IoT Device Management Dashboard',
        'Improved UX by 30% through user-centered design',
        'Streamlined workflows with data visualizations'
      ]
    }
  ];

  const projects = [
    {
      emoji: '🎧',
      title: 'HearMe - Inclusive Communication App',
      tags: ['Case Study', '2025', 'Mobile App'],
      description: 'Designed an assistive communication app supporting speech transcription and sign-language recognition for users with hearing impairments. Prioritized accessibility and inclusive UI.'
    },
    {
      emoji: '🏥',
      title: 'Healthcare Dashboard',
      tags: ['UI/UX', '2025', 'Web'],
      description: 'Scalable healthcare interface design focusing on accessibility and improved user flow efficiency for medical professionals.'
    },
    {
      emoji: '📚',
      title: 'Student Dashboard - BrightCHAMPS',
      tags: ['UI Design', '2024', 'Dashboard'],
      description: 'User-friendly dashboard interface for K-12 students, improving task efficiency by 20% and enhancing engagement by 25%.'
    },
    {
      emoji: '🌐',
      title: 'IoT Device Management Dashboard',
      tags: ['UX Design', '2023', 'Dashboard'],
      description: 'Comprehensive dashboard design improving UX by 30% through user-centered design, streamlined workflows, and data visualizations.'
    }
  ];

  const StatCounter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      if (countRef.current) {
        observer.observe(countRef.current);
      }

      return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <span ref={countRef}>{count}{suffix}</span>;
  };

  return (
    <div className="bg-gray-950 text-gray-100 overflow-x-hidden font-sans">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap');
        
        * {
          scroll-behavior: smooth;
        }

        .font-display {
          font-family: 'Syne', sans-serif;
        }

        .font-sans {
          font-family: 'Manrope', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
        .stagger-9 { animation-delay: 0.9s; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-900/90 backdrop-blur-xl border border-gray-800/50' 
            : 'bg-gray-900/60 backdrop-blur-md border border-gray-800/30'
        }`}>
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-900 font-medium text-sm transition-all duration-300"
          >
            <Home size={16} />
            <span>Home</span>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 font-medium text-sm transition-all duration-300"
          >
            <User size={16} />
            <span>About</span>
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 font-medium text-sm transition-all duration-300"
          >
            <Briefcase size={16} />
            <span>Works</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 font-medium text-sm transition-all duration-300"
          >
            <Zap size={16} />
            <span>Contact</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div className="opacity-0 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full text-sm font-medium text-gray-300 mb-6">
                <span>👋</span>
                <span>Anushree Welcomes You!</span>
              </div>
              <h1 className="font-display text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Hey, I'm Anushree
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                I create clean, user-focused designs that connect business goals with real user needs. With 
                3+ years in UI/UX and an MBA edge, I craft digital experiences that are both intuitive and impactful.
              </p>
            </div>

            <div className="flex justify-center gap-4 opacity-0 animate-fadeInUp stagger-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:-translate-y-0.5"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scrolling Skills Section */}
      <section className="py-8 overflow-hidden border-y border-gray-800/50 bg-gray-900/30">
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set */}
            {heroSkills.map((skill, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-2 px-6 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full text-sm font-medium text-gray-300"
              >
                {skill}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {heroSkills.map((skill, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-2 px-6 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full text-sm font-medium text-gray-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats" 
        ref={el => observerRefs.current[0] = el}
        className="py-20 px-6 lg:px-12 bg-gray-900/30"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="font-display text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-br from-violet-400 to-pink-400 bg-clip-text text-transparent">
                <StatCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="about" 
        ref={el => observerRefs.current[1] = el}
        className="py-24 px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              What I Bring to <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">the Table</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Combining strategic thinking with design excellence to deliver meaningful digital experiences 
              that resonate with users and achieve business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2 ${
                  visibleSections.has('about') ? 'opacity-0 animate-fadeInUp' : 'opacity-0'
                } stagger-${index + 1}`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
<section 
  ref={el => observerRefs.current[2] = el}
  className="py-24 px-6 lg:px-12 bg-gray-900/30"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
        Design <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Toolkit</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Leveraging industry-leading tools and technologies to bring creative visions to life
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <div
          key={tool.name}
          className="group p-8 rounded-2xl border border-gray-800 hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-xl bg-white">
              {tool.logo ? (
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl font-bold ${tool.logo ? 'hidden' : 'flex'}`}
                style={{ backgroundColor: tool.bgColor || '#1a1a1a' }}
              >
                {tool.text}
              </div>
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-100">
              {tool.name}
            </h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {tool.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Experience Section */}
      <section 
        ref={el => observerRefs.current[3] = el}
        className="py-24 px-6 lg:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-gray-400 text-lg">Building impactful experiences across healthcare, education, and technology</p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 to-pink-500 hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative lg:pl-12 ${
                    visibleSections.has('about') ? 'opacity-0 animate-fadeInLeft' : 'opacity-0'
                  } stagger-${index + 1}`}
                >
                  <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-violet-500 border-4 border-gray-950 hidden lg:block -translate-x-1.5"></div>

                  <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/50 transition-all duration-300">
                    <h3 className="font-display text-2xl font-semibold mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-violet-400 font-medium mb-2">{exp.company}</div>
                    <div className="text-gray-500 text-sm mb-6">{exp.duration}</div>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                          <span className="text-violet-500 mt-1 text-xs">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="work" 
        ref={el => observerRefs.current[4] = el}
        className="py-24 px-6 lg:px-12 bg-gray-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Selected <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Case studies and projects showcasing user-centered design solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div className="h-64 bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center border-b border-gray-800">
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-500">
                    {project.emoji}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Let's Create <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Open to new opportunities and exciting projects. Let's connect!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:anushree.h.design@gmail.com"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow- hover:shadow-violet-500/50 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              📧 Email Me
            </a>
            <a
              href="https://linkedin.com/in/anushreeh19"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://behance.net/anushreeh19"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              🎨 Behance
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="https://linkedin.com/in/anushreeh19" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors text-sm">
              LinkedIn
            </a>
            <a href="https://behance.net/anushreeh19" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
              Behance
            </a>
            <a href="mailto:anushree.h.design@gmail.com" className="text-gray-400 hover:text-violet-400 transition-colors text-sm">
              Email
            </a>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-1">© 2025 Anushree H. All rights reserved.</p>
            <p>UI/UX & Graphic Designer | Bangalore, Karnataka, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}