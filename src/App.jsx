import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Briefcase, Zap } from 'lucide-react';
import heroBg from './assets/hero-bg.png';
import hearme from './assets/HearMe.png';
import kindroute from './assets/kindroute.png';
import elearning from './assets/elearning.png';
import nures from './assets/Nurse.png';

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
    { number: 10, suffix: '+', label: 'Projects Completed' },
    { number: 4, suffix: '', label: 'Companies Worked With' },
    { number: 4, suffix: '', label: 'Freelance Projects' },
    { number: 2, suffix: '+', label: 'Years Experience' },
    { number: 10, suffix: '+', label: 'Tools Mastered' }
  ];

  const services = [
    {
      icon: '🔍',
      title: 'Research-Driven Design',
      description: 'Grounding every solution in user research, usability testing, and data-backed insights to solve the right problems.'
    },
    {
      icon: '✨',
      title: 'Intuitive UX Experiences',
      description: 'Designing empathetic user journeys and seamless interactions that feel natural, effortless, and intuitive.'
    },
    {
      icon: '📱',
      title: 'Wireframing & Prototyping',
      description: 'Translating ideas into low- and high-fidelity wireframes and interactive prototypes for rapid validation and iteration.'
    },
    {
      icon: '🎨',
      title: 'Pixel-Perfect UI Craftsmanship',
      description: 'Crafting clean, modern, and visually consistent interfaces with strong attention to detail and aesthetic precision.'
    },
    {
      icon: '♿',
      title: 'Accessible & Inclusive Design',
      description: 'Building accessibility-first experiences that follow usability and WCAG guidelines, ensuring inclusivity for all users.'
    },
    {
      icon: '🎯',
      title: 'Design Systems & Consistency',
      description: 'Creating scalable design systems that maintain visual consistency and efficiency across products and touchpoints.'
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
    name: 'React', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Building interactive, component-driven user interfaces that are scalable, reusable, and performance-focused.'
  },
 { 
    name: 'Tailwind CSS', 
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    description: 'Crafting modern, responsive designs rapidly using utility-first styling and consistent design patterns.'
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
        'Worked on three healthcare products, designing user-friendly and scalable interfaces.',
        'Got an Opportunity to Involve in end-to-end user research, including requirement gathering, usability testing, and feedback analysis.',
        'Designed and maintained the design system to ensure consistency across products.',
        'Improved usability through iterative design and testing, focusing on accessibility and clarity.',
        'Collaborated with cross-functional teams to deliver effective UX solutions.',
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
    image: hearme, // add image path
    title: 'HearMe – Inclusive Communication App',
    tags: ['UX Case Study', '2025', 'Mobile App'],
    description:
      'Designed an assistive communication app supporting speech transcription and sign-language recognition for users with hearing impairments. Prioritized accessibility and inclusive UI.',
    link: 'https://www.behance.net/gallery/239109907/HearMe-UIUX-Case-Study-Inclusive-Communication-App'
  },
  {
    image: kindroute,
    title: 'KindRoute – Safety-First Navigation Experience',
    tags: ['UI/UX', '2025', 'Web'],
    description:
      'KindRoute is a safety-first navigation app that prioritizes secure routes, real-time safety features, and peace of mind during everyday travel.',
    link: 'https://www.behance.net/gallery/239272143/KindRoute-UIUX-Case-Study-for-Navigation-App'
  },
  {
    image: elearning,
    title: 'E-Learning Platform',
    tags: ['UI Design', '2024', 'Dashboard'],
    description:
      'E-learning is a clean and intuitive online learning platform designed to make accessing courses and learning content easy and engaging.',
    link: 'https://www.behance.net/gallery/203785451/E-Learning-Website'
  },
  {
    image: nures,
    title: 'Nurse Management',
    tags: ['UX Design', '2023', 'Dashboard'],
    description:
      'A nurse management system designed to efficiently add, edit, and delete nurse records. The interface focuses on clarity, ease of use, and streamlined workflows to support smooth healthcare operations',
    link: 'https://www.behance.net/gallery/243515335/Nurse-Management-System'
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
    <div className="bg-white text-gray-900 overflow-x-hidden font-sans">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap');
        
        * {
          scroll-behavior: smooth;
        }

        .font-display {
          font-family: 'Poppins', sans-serif;
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

<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
  <div
    className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-xl border border-gray-200 shadow-lg'
        : 'bg-white/80 backdrop-blur-md border border-gray-200'
    }`}
  >
    {[
      { id: 'home', label: 'Home', icon: Home },
      { id: 'about', label: 'About', icon: User },
      { id: 'work', label: 'Works', icon: Briefcase },
      { id: 'contact', label: 'Contact', icon: Zap },
    ].map(({ id, label, icon: Icon }) => (
      <button
        key={id}
        onClick={() => scrollToSection(id)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
      >
        <Icon size={16} />
        <span className="hidden sm:inline">{label}</span>
      </button>
    ))}
  </div>
</nav>



      {/* Hero Section */}
<section
  id="home"
  ref={el => (observerRefs.current[5] = el)}
  className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-center"
    style={{ backgroundImage: `url(${heroBg})` }}
  />

  {/* Decorative gradient blobs */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
  </div>

  {/* Content */}
  <div className="max-w-5xl mx-auto text-center relative z-10">
    <div className="space-y-8">
      <div
        className={`${
          visibleSections.has('home')
            ? 'opacity-0 animate-fadeInUp'
            : 'opacity-0'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6">
          <span>👋</span>
          <span>Anushree Welcomes You!</span>
        </div>

        <h1 className="font-display text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
          Hey, I'm Anushree
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                I create clean, user-focused designs that bridge business goals with real user needs. With 2+ years of experience in UI/UX,
                I craft digital experiences that are intuitive, meaningful, and impactful.
        </p>
      </div>

      <div
        className={`flex justify-center gap-4 ${
          visibleSections.has('home')
            ? 'opacity-0 animate-fadeInUp stagger-2'
            : 'opacity-0'
        }`}
      >
        <a
          href="/public/anushree.pdf"
          download="Anushree_Resume.pdf"
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Auto-scrolling Skills Section */}
      <section className="py-8 overflow-hidden border-y border-gray-200 bg-gray-50">
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set */}
            {heroSkills.map((skill, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700"
              >
                {skill}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {heroSkills.map((skill, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700"
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
        className="py-20 px-6 lg:px-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                visibleSections.has('stats') ? 'opacity-0 animate-scaleIn' : 'opacity-0'
              } stagger-${index + 1}`}
            >
              <div className="font-display text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-br from-violet-600 to-pink-600 bg-clip-text text-transparent">
                <StatCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
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
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              What I Bring to <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">the Table</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Combining strategic thinking with design excellence to deliver meaningful digital experiences 
              that resonate with users and achieve business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-8 rounded-2xl bg-white border border-gray-200 hover:border-violet-400 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
                  visibleSections.has('about') ? 'opacity-0 animate-fadeInUp' : 'opacity-0'
                } stagger-${index + 1}`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
  id="tools"
  className="py-24 px-6 lg:px-12 bg-gray-50"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className={`font-display text-4xl lg:text-5xl font-bold mb-6 text-gray-900 ${
        visibleSections.has('tools') ? 'opacity-0 animate-fadeInUp' : 'opacity-0'
      }`}>
        Design <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">Toolkit</span>
      </h2>
      <p className={`text-gray-600 text-lg max-w-3xl mx-auto ${
        visibleSections.has('tools') ? 'opacity-0 animate-fadeInUp stagger-1' : 'opacity-0'
      }`}>
        Leveraging industry-leading tools and technologies to bring creative visions to life
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <div
          key={tool.name}
          className={`group p-8 rounded-2xl bg-white border border-gray-200 hover:border-violet-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ${
            visibleSections.has('tools') ? 'opacity-0 animate-fadeInUp' : 'opacity-0'
          } stagger-${(index % 6) + 2}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-200">
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
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl font-bold text-white ${tool.logo ? 'hidden' : 'flex'}`}
                style={{ backgroundColor: tool.bgColor || '#1a1a1a' }}
              >
                {tool.text}
              </div>
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900">
              {tool.name}
            </h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
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
        id="experience"
        className="py-24 px-6 lg:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`font-display text-4xl lg:text-5xl font-bold mb-6 text-gray-900 ${
              visibleSections.has('experience') ? 'opacity-0 animate-fadeInUp' : 'opacity-0'
            }`}>
              Professional <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className={`text-gray-600 text-lg ${
              visibleSections.has('experience') ? 'opacity-0 animate-fadeInUp stagger-1' : 'opacity-0'
            }`}>Building impactful experiences across healthcare, education, and technology</p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 to-pink-500 hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative lg:pl-12 ${
                    visibleSections.has('experience') ? 'opacity-0 animate-fadeInLeft' : 'opacity-0'
                  } stagger-${index + 2}`}
                >
                  <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-violet-500 border-4 border-white hidden lg:block -translate-x-1.5"></div>

                  <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-display text-2xl font-semibold mb-2 text-gray-900">
                      {exp.title}
                    </h3>
                    <div className="text-violet-600 font-medium mb-2">{exp.company}</div>
                    <div className="text-gray-500 text-sm mb-6">{exp.duration}</div>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-3">
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
  className="py-24 px-6 lg:px-12 bg-gray-50"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2
        className={`font-display text-4xl lg:text-5xl font-bold mb-6 text-gray-900 ${
          visibleSections.has('work')
            ? 'opacity-0 animate-fadeInUp'
            : 'opacity-0'
        }`}
      >
        Selected{' '}
        <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
          Work
        </span>
      </h2>

      <p
        className={`text-gray-600 text-lg max-w-3xl mx-auto ${
          visibleSections.has('work')
            ? 'opacity-0 animate-fadeInUp stagger-1'
            : 'opacity-0'
        }`}
      >
        Case studies and projects showcasing user-centered design solutions
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
            visibleSections.has('work')
              ? 'opacity-0 animate-fadeInUp'
              : 'opacity-0'
          } stagger-${index + 2}`}
        >
          {/* Project Image */}
          <div className="h-72 overflow-hidden border-b border-gray-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col min-h-[260px]">
            <h3 className="font-display text-2xl font-semibold mb-4 text-gray-900">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-violet-50 border border-violet-200 text-violet-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* View Project Button */}
            <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto text-sm font-medium text-violet-600 hover:text-pink-600 transition"
>
  View Project →
</a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" ref={el => observerRefs.current[6] = el} className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-display text-4xl lg:text-5xl font-bold mb-6 text-gray-900 ${
            visibleSections.has('contact') ? 'opacity-0 animate-fadeInUp' : 'opacity-0'
          }`}>
            Let's Create <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className={`text-gray-600 text-lg mb-12 ${
            visibleSections.has('contact') ? 'opacity-0 animate-fadeInUp stagger-1' : 'opacity-0'
          }`}>
            Open to new opportunities and exciting projects. Let's connect!
          </p>

          <div className={`flex flex-wrap justify-center gap-4 ${
            visibleSections.has('contact') ? 'opacity-0 animate-fadeInUp stagger-2' : 'opacity-0'
          }`}>
            <a
              href="mailto:anushree.h.design@gmail.com"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/anushreeh19"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://behance.net/anushreeh19"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1769FF">
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.685-1.14-.444-.49-.78-1.08-1.005-1.73-.222-.67-.334-1.42-.334-2.28 0-.85.125-1.63.373-2.34.243-.71.594-1.31 1.047-1.82.455-.49.99-.87 1.625-1.15.63-.27 1.35-.41 2.14-.41.94 0 1.74.18 2.41.53.67.36 1.22.82 1.66 1.4.44.59.75 1.26.94 2.02.19.75.27 1.54.24 2.38h-7.69c.03.92.29 1.63.47 2.05l.03-.03zm-3.99-8.863h5.295v-1.31H12.95v1.31zm-7.983 3.12c.708 0 1.275-.15 1.696-.43.42-.28.63-.76.63-1.44 0-.585-.15-1.05-.48-1.39-.324-.35-.83-.52-1.528-.52H2.908v3.78h1.97zm-1.97 5.43h2.36c.76 0 1.39-.18 1.87-.53.48-.35.72-.91.72-1.68 0-.78-.24-1.37-.71-1.77-.47-.4-1.12-.6-1.95-.6H2.036v4.58h.95z"/>
              </svg>
              Behance
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="https://linkedin.com/in/anushreeh19" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">
              LinkedIn
            </a>
            <a href="https://behance.net/anushreeh19" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
              Behance
            </a>
            <a href="mailto:anushree.h.design@gmail.com" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">
              Email
            </a>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-1">© 2026 Anushree H. All rights reserved.</p>
            <p>UI/UX & Graphic Designer | Bangalore, Karnataka, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}