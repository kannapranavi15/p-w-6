'use client';

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Facebook, Twitter, Youtube, Play, ChevronLeft, ChevronRight, BookOpen, Award, Users, FileText, Settings, Cpu, Wrench, GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Testimonial {
  name: string;
  type: string;
  text: string;
  image: string;
}

interface Publication {
  title: string;
  venue: string;
  year: string;
  type: string;
}

const Portfolio: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      name: "Dr. N. Janakiraman",
      type: "PROFESSOR, K.L.N. COLLEGE OF ENGINEERING",
      text: "Dr. Nagarajan's expertise in wireless sensor networks and cloud computing is exceptional. His research contributions in energy-efficient routing protocols demonstrate his deep understanding of network optimization.",
      image: "/img1.jpg"
    },
    {
      name: "Dr. C. Balasubramanian", 
      type: "PRINCIPAL, P.S.R.R. ENGINEERING COLLEGE",
      text: "Working with Dr. Nagarajan on various research projects has been remarkable. His dedication to academic excellence and innovation in computer science education makes him an invaluable colleague.",
      image: "/img1.jpg"
    }
  ];

  const publications: Publication[] = [
    {
      title: "A NEW ROUTING PROTOCOL FOR WSN USING LIMIT-BASED JAYA SAIL FISH OPTIMIZATION",
      venue: "Wireless Networks (Impact Factor: 2.701)",
      year: "2022",
      type: "Journal"
    },
    {
      title: "TWO-TIER METAHEURISTIC BASED ENERGY AWARE CLUSTERING TECHNIQUE",
      venue: "Turkish Journal of Physiotherapy and Rehabilitation",
      year: "2021",
      type: "Journal"
    },
    {
      title: "URBAN STREET CLEANLINESS ASSESSMENT USING MOBILE EDGE COMPUTING",
      venue: "IJETCSE",
      year: "2021",
      type: "Journal"
    },
    {
      title: "A NOVEL SWARM INTELLIGENCE ROUTING PROTOCOL IN WSN",
      venue: "Springer Singapore",
      year: "2022",
      type: "Conference"
    },
    {
      title: "INNOVATING ELECTRONICS SMART VOTING THROUGH FACIAL RECOGNITION",
      venue: "IEEE Xplore",
      year: "2023",
      type: "Journal"
    }
  ];

  const nextTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center rounded-lg shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Dr. Nagarajan M.K.</h1>
                <p className="text-sm text-gray-600 font-medium">Associate Professor • Computer Science & Engineering</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex gap-8">
              {['About Me', 'Education', 'Experience', 'Research', 'Publications', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['about', 'education', 'experience', 'research', 'publications', 'contact'][index])}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Mail, Phone].map((Icon, index) => (
                <Icon key={index} className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200" />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-12">
            <div className="flex-1 text-center lg:text-left lg:pr-12">
              <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hello, I'm{'  '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Dr.Nagarajan
                </span>
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-4">
                Associate Professor & Computer Science Research Expert –
              </p>
              <p className="text-lg text-gray-600">
                Specializing in Wireless Sensor Networks, Cloud Computing, and Network Security with 15+ years of academic excellence and innovative research.
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src="/img1.jpg" 
                  alt="Dr. Nagarajan M.K."
                  className="relative w-94 h-120 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-300 rounded-2xl transform group-hover:scale-105 transition duration-500"></div>
              <img 
                src="/img4.png" 
                alt="Computer Lab"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl z-10"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  About{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h3>
                <p className="text-xl text-gray-700 font-medium mb-6">
                  Academic Leader & Computer Science Researcher –
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm an Associate Professor at Kalasalingam Academy of Research and Education with 15+ years of dedicated experience in computer science education and research. With a Ph.D. in I&CE from Anna University, Chennai (2024), I specialize in cutting-edge research in wireless sensor networks, cloud computing, and network security.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Competencies:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Wireless Sensor Networks', 'Cloud Computing', 'Network Security', 'Software Engineering', 'Database Technology', 'Research Supervision'].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full group-hover:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Throughout my career, I've handled diverse subjects including Fundamentals of Computing, Computer Networks, Object Oriented Programming, Operating Systems, Software Engineering, Web Technology, Database Technology, and Information Security. My research focus spans energy-efficient routing protocols, optimization algorithms, and innovative applications in IoT and cloud computing.
              </p>

              <div className="flex gap-4">
                <a href="/pd.pdf">
                <button className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View Resume
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Educational Journey</h3>
            <p className="text-xl text-gray-600">Academic Qualifications & Professional Development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                title: "Ph.D. in I&CE",
                description: "Anna University, Chennai. Doctoral research in Information & Communication Engineering with focus on advanced network optimization and wireless sensor technologies.",
                label: "01 \\ DOCTORAL DEGREE"
              },
              {
                year: "2009",
                title: "M.E. Software Engineering", 
                description: "Vel Tech Engineering College, Anna University, Chennai. Scored 79% First Class. Specialized in software engineering methodologies and quality assurance.",
                label: "02 \\ MASTER'S DEGREE"
              },
              {
                year: "2006",
                title: "B.E. Computer Science", 
                description: "Syed Ammal Engineering College, Anna University, Chennai. Scored 68% First Class. Strong foundation in computer science and engineering principles.",
                label: "03 \\ BACHELOR'S DEGREE"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-8xl font-bold bg-gradient-to-br from-blue-200 to-purple-300 bg-clip-text text-transparent mb-6 group-hover:from-blue-300 group-hover:to-purple-400 transition duration-500">
                  {item.year}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Professional Experience</h3>
            <p className="text-xl text-gray-600">15+ Years in Academic Excellence</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Current Position */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Current Position
                    </span>
                    <span className="text-gray-500 text-sm">June 2024 - Present</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                    Associate Professor
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Leading research initiatives and teaching advanced computer science courses. Serving as Grade Verification Committee member and Lab In-charge for department laboratories.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Research Leadership', 'Advanced Teaching', 'Lab Management', 'Committee Roles'].map((subject, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Positions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        Senior Role
                      </span>
                      <span className="text-gray-500 text-sm">Nov 2021 - May 2024</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition duration-300">
                      Assistant Professor - II
                    </h4>
                    <p className="text-gray-600 text-sm font-medium mb-2">Kalasalingam Academy of Research and Education</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Advanced teaching responsibilities and research supervision. Served as NAAC Criteria coordinator and NBA sub-coordinator.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['NAAC Coordination', 'NBA Assessment', 'Research Supervision'].map((subject, index) => (
                        <span key={index} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-xs font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        Foundation Years
                      </span>
                      <span className="text-gray-500 text-sm">June 2009 - Nov 2021</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition duration-300">
                      Assistant Professor
                    </h4>
                    <p className="text-gray-600 text-sm font-medium mb-2">Kalasalingam Institute of Technology (12.5 Years)</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Comprehensive teaching across multiple CS subjects. Served as Timetable Coordinator and Assistant Director, International Relations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Teaching Excellence', 'International Relations', 'Administrative Roles'].map((subject, index) => (
                        <span key={index} className="bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Research Focus</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering research in wireless sensor networks, cloud computing, and optimization algorithms with practical applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Settings,
                title: "Wireless Sensor Networks",
                description: "Energy-efficient routing protocols using swarm intelligence and optimization algorithms for enhanced network performance.",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: Cpu,
                title: "Cloud Computing",
                description: "Secure data liability, urban computing solutions, and mobile edge computing applications for smart cities.",
                color: "from-emerald-400 to-emerald-600"
              },
              {
                icon: Wrench,
                title: "Network Security",
                description: "Advanced security protocols, facial recognition systems, and AI-based multi-objective optimization for secure communications.",
                color: "from-purple-400 to-purple-600"
              }
            ].map((area, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-lg`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition duration-300">
                  {area.title}
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Patents Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-12">
            <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patents & Innovations</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Robotic Surgery Machine",
                  status: "Granted",
                  number: "384324-001",
                  date: "April 19, 2023"
                },
                {
                  title: "AI-Based Multi-Mathematical Modelling",
                  status: "Published",
                  number: "202441029033 A",
                  date: "April 19, 2024"
                },
                {
                  title: "Distributed Renewable Energy Systems",
                  status: "Published",
                  number: "202441052613 A",
                  date: "July 19, 2024"
                }
              ].map((patent, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition duration-300">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    patent.status === 'Granted' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {patent.status}
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">{patent.title}</h5>
                  <p className="text-sm text-gray-600 mb-1">Patent No: {patent.number}</p>
                  <p className="text-sm text-gray-500">{patent.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Supervision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Research Supervision</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">UG Final Year Projects in Computer Networks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">UG Projects in Cloud Computing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">M.E. Students in Cloud Computing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">M.E. Students in Network Security</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Professional Certifications</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-gray-900">IBM DB2 UDB V 8.1</h5>
                  <p className="text-gray-600 text-sm">Family Fundamentals Certification</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-gray-900">Sun Certified Java Programmer</h5>
                  <p className="text-gray-600 text-sm">Standard Edition 5 Platform</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h5 className="font-semibold text-gray-900">Java Full Stack</h5>
                  <p className="text-gray-600 text-sm">Virtusa Certification & Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Research Publications</h3>
            <p className="text-xl text-gray-600">Peer-reviewed journals and international conference presentations</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 group">
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    pub.type === 'Journal' ? 'bg-blue-100' : 'bg-emerald-100'
                  } group-hover:scale-110 transition duration-300`}>
                    <FileText className={`w-6 h-6 ${
                      pub.type === 'Journal' ? 'text-blue-600' : 'text-emerald-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                        pub.type === 'Journal' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {pub.type}
                      </span>
                      <span className="text-gray-500 text-sm">{pub.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                      {pub.title}
                    </h4>
                    <p className="text-gray-600 font-medium">
                      {pub.venue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Publication Impact</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <p className="text-gray-600 font-medium">Research Papers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
                  <p className="text-gray-600 font-medium">Patents</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">30+</div>
                  <p className="text-gray-600 font-medium">FDPs Attended</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievement" className="py-20 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Recognition & Awards</h3>
            <p className="text-xl text-gray-600">Testimonials from academic colleagues and research collaborators</p>
          </div>
          
          <div className="relative">
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={prevTestimonial}
                className="w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition duration-300 hover:scale-110 hover:bg-blue-50 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition duration-300 hover:scale-110 hover:bg-blue-50 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </button>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600"></div>
              <div className="flex items-start gap-8 flex-col sm:flex-row">
                <div className="relative group mx-auto sm:mx-0">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="relative w-20 h-20 rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-6 font-semibold">
                    {testimonials[currentTestimonial].type}
                  </p>
                  <div className="relative">
                    <div className="text-8xl text-blue-200 font-serif absolute -top-4 -left-4">"</div>
                    <p className="text-gray-600 italic leading-relaxed text-lg relative z-10 pl-8">
                      {testimonials[currentTestimonial].text}
                    </p>
                    <div className="text-8xl text-blue-200 font-serif absolute -bottom-8 right-0">"</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "15+ Years Experience",
                  description: "Academic excellence & research",
                  color: "from-yellow-400 to-yellow-600"
                },
                {
                  icon: FileText,
                  title: "Ph.D. Achievement",
                  description: "Anna University, Chennai 2024",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  icon: Users,
                  title: "Research Supervision",
                  description: "UG & PG project guidance",
                  color: "from-emerald-400 to-emerald-600"
                },
                {
                  icon: Settings,
                  title: "Administrative Roles",
                  description: "NAAC, NBA coordination",
                  color: "from-purple-400 to-purple-600"
                }
              ].map((achievement, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-lg`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                    {achievement.title}
                  </h5>
                  <p className="text-gray-600 font-medium">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-100 to-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-xl text-gray-700">Get in touch for research collaborations and academic consultations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                label: "EMAIL –",
                value: "nagarajan45@gmail.com",
                href: "mailto:nagarajan45@gmail.com"
              },
              {
                icon: Phone,
                label: "MOBILE –",
                value: "+91 9994450768",
                href: "tel:+919994450768"
              },
              {
                icon: BookOpen,
                label: "INSTITUTION –",
                value: "Kalasalingam Academy of Research and Education",
                href: "#"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 block"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-lg">
                  <contact.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">
                  {contact.label}
                </p>
                <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition duration-300">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          {/* Address Information */}
          <div className="mt-16 bg-white rounded-3xl p-12 shadow-2xl text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 text-gray-600">
                <h5 className="font-semibold text-gray-900 mb-3">Office Address</h5>
                <p>Kalasalingam Academy of Research and Education</p>
                <p>Madurai, Tamil Nadu, India</p>
              </div>
              <div className="space-y-2 text-gray-600">
                <h5 className="font-semibold text-gray-900 mb-3">Permanent Address</h5>
                <p>10/394, Erattai Pillaiyar Kovil Street</p>
                <p>Paramakudi – 623 707, Ramanathapuram District</p>
                <p>Tamil Nadu, India</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Languages:</span> English, Tamil
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-semibold">Alternative Contact:</span> +91 8667863096
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center rounded-lg shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Dr. Nagarajan M.K.</h4>
                <p className="text-sm text-gray-600">Associate Professor • Computer Science & Engineering</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              {[Mail, Phone].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition duration-300 cursor-pointer group"
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition duration-300" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500 pt-8 border-t border-gray-200">
            <span>© 2024 Dr. Nagarajan M.K. All rights reserved.</span>
            <span>Research • Teaching • Innovation</span>
                    </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
     