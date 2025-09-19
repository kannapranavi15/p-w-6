'use client';

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Facebook, Twitter, Youtube, Play, ChevronLeft, ChevronRight, BookOpen, Award, Users, FileText, Settings, Cpu, Wrench, GraduationCap, Calendar, MapPin, Code, Database, Brain } from 'lucide-react';

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
      name: "ACM Student Chapter",
      type: "KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION",
      text: "Dr. Gurusigaamani's dedication to organizing technical events and hackathons has been exceptional. Her leadership in coordinating ACM-W activities and mentoring students in coding competitions demonstrates her commitment to student development.",
      image: "/img1.jpg"
    },
    {
      name: "Department Colleague", 
      type: "COMPUTER SCIENCE & ENGINEERING DEPARTMENT",
      text: "Working with Dr. Gurusigaamani on research projects in AI and machine learning has been remarkable. Her expertise in deep learning, IoT, and healthcare applications makes her an invaluable team member.",
      image: "/img1.jpg"
    }
  ];

  const publications: Publication[] = [
    {
      title: "IoT Based Health Monitoring System Using Optimized Hybrid Quantum-Classical GANs",
      venue: "IEEE ICICI 2025",
      year: "2025",
      type: "Conference"
    },
    {
      title: "Comprehensive Study of Sleep Disorder Classification using XGBoost Algorithm",
      venue: "IEEE ICPCSN 2025",
      year: "2025",
      type: "Conference"
    },
    {
      title: "Classification of Astrocytoma using MLP and LSTM",
      venue: "IEEE ICPCSN 2025",
      year: "2025",
      type: "Conference"
    },
    {
      title: "Optimizing Brain Tumor Classification with GridSearchCV Using Multimodal Image Fusion",
      venue: "IEEE ICICT 2025",
      year: "2025",
      type: "Conference"
    },
    {
      title: "Advanced IoT Intrusion Detection for Intelligent Homes using Optimized Cross-Contextual Transformers",
      venue: "IEEE I-SMAC 2024",
      year: "2024",
      type: "Conference"
    },
    {
      title: "A Novel Bacterial Foraging Optimization Based Multimodal Medical Image Fusion Approach",
      venue: "Applied Science and Engineering Progress",
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
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-700 flex items-center justify-center rounded-lg shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Dr. A.M. Gurusigaamani</h1>
                <p className="text-sm text-gray-600 font-medium">Assistant Professor • Computer Science & Engineering</p>
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
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
      <section id="home" className="bg-gradient-to-br from-pink-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-12">
            <div className="flex-1 text-center lg:text-left lg:pr-12">
              <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hello, I'm{'  '}
                <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                  Dr. Gurusigaamani
                </span>
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-4">
                Assistant Professor & AI Research Expert –
              </p>
              <p className="text-lg text-gray-600">
                Specializing in Machine Learning, Deep Learning, IoT Applications, and Healthcare AI with 10+ years of teaching excellence and innovative research.
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src="/img1.jpg" 
                  alt="Dr. A.M. Gurusigaamani"
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
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl transform group-hover:scale-105 transition duration-500"></div>
              <img 
                src="/img4.png" 
                alt="AI Lab"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl z-10"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  About{' '}
                  <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h3>
                <p className="text-xl text-gray-700 font-medium mb-6">
                  AI Researcher & Computer Science Educator –
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm an Assistant Professor at Kalasalingam Academy of Research and Education with 10+ years of dedicated experience in computer science education and cutting-edge research. Currently pursuing Ph.D. in Computer Science and Engineering, I specialize in Machine Learning, Deep Learning, IoT applications, and Healthcare AI solutions.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Competencies:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Machine Learning', 'Deep Learning', 'Python Programming', 'IoT Applications', 'Healthcare AI', 'Data Analytics'].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full group-hover:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                My goal is to contribute to advancing knowledge through innovative research and high-quality teaching. I foster a collaborative learning environment that encourages critical thinking and creativity while mentoring the next generation of scholars. I've supervised 260+ undergraduate students and organized numerous technical events and hackathons.
              </p>

              <div className="flex gap-4">
                <a href="/pd.pdf">
                <button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View Resume
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-20 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Educational Journey</h3>
            <p className="text-xl text-gray-600">Academic Qualifications & Professional Development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                title: "Ph.D. Pursuing (CSE)",
                description: "Kalasalingam Academy of Research and Education, Krishnankoil. Doctoral research in Computer Science and Engineering with focus on AI and machine learning applications.",
                label: "01 \\ DOCTORAL STUDIES"
              },
              {
                year: "2013",
                title: "M.Tech Computer Science", 
                description: "Kalasalingam University, Krishnankoil. CGPA: 8.38. Specialized in advanced computer science concepts and research methodologies.",
                label: "02 \\ MASTER'S DEGREE"
              },
              {
                year: "2011",
                title: "B.Tech Computer Science", 
                description: "Kalasalingam University, Krishnankoil. CGPA: 7.62. Strong foundation in computer science and engineering principles.",
                label: "03 \\ BACHELOR'S DEGREE"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-8xl font-bold bg-gradient-to-br from-pink-200 to-purple-300 bg-clip-text text-transparent mb-6 group-hover:from-pink-300 group-hover:to-purple-400 transition duration-500">
                  {item.year}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition duration-300">
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
      <section id="experience" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Professional Experience</h3>
            <p className="text-xl text-gray-600">10+ Years in Academic Excellence & Research</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Current Position */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Current Position
                    </span>
                    <span className="text-gray-500 text-sm">Nov 2021 - Present</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition duration-300">
                    Assistant Professor
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Teaching advanced courses in Python Programming, Machine Learning, Deep Learning, Database Management Systems, and Secured Computing. Supervised 140+ undergraduate students and coordinating multiple ACM technical events.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Python Programming', 'Machine Learning', 'Deep Learning', 'DBMS', 'ACM Coordination'].map((subject, index) => (
                      <span key={index} className="bg-pink-50 text-pink-700 px-3 py-1 rounded-lg text-sm font-medium">
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
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        Previous Role
                      </span>
                      <span className="text-gray-500 text-sm">Jul 2014 - Nov 2021</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition duration-300">
                      Assistant Professor
                    </h4>
                    <p className="text-gray-600 text-sm font-medium mb-2">Kalasalingam Institute of Technology (7+ Years)</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Comprehensive teaching across multiple CS subjects including Data Structures, Algorithms, Cryptography, Mobile Computing, and Software Engineering. Supervised 120+ students and served in various administrative roles.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Cryptography', 'Mobile Computing', 'Software Engineering'].map((subject, index) => (
                        <span key={index} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-xs font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        Early Career
                      </span>
                      <span className="text-gray-500 text-sm">Jul 2013 - Jul 2014</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition duration-300">
                      Assistant Professor
                    </h4>
                    <p className="text-gray-600 text-sm font-medium mb-2">Anand Institute of Higher Technology, IT Department</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Foundation teaching experience in core computer science subjects including Data Structures, Programming in C, Software Engineering, and Digital Systems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Programming in C', 'Digital Systems', 'Foundation Teaching'].map((subject, index) => (
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

          {/* Administrative Roles */}
          <div className="mt-16 bg-white rounded-3xl p-12 shadow-2xl">
            <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">Administrative & Service Roles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "University Placement Coordinator", icon: Users },
                { title: "Exam Cell Coordinator", icon: FileText },
                { title: "Timetable Coordinator", icon: Calendar },
                { title: "Admission Convenor", icon: BookOpen },
                { title: "Tamil Mandram Coordinator", icon: Award },
                { title: "Sports In-charge", icon: Award }
              ].map((role, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <role.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{role.title}</span>
                </div>
              ))}
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
              Pioneering research in AI, machine learning, healthcare applications, and IoT solutions with practical implementations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Advanced research in deep learning, neural networks, sleep disorder classification, and brain tumor detection using cutting-edge algorithms.",
                color: "from-pink-400 to-pink-600"
              },
              {
                icon: Cpu,
                title: "Healthcare AI",
                description: "IoT-based health monitoring systems, medical image fusion, astrocytoma classification, and quantum-classical hybrid models for healthcare.",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: Database,
                title: "IoT & Security",
                description: "Smart home intrusion detection, cross-contextual transformers, traffic safety systems, and secure IoT applications for intelligent environments.",
                color: "from-emerald-400 to-emerald-600"
              }
            ].map((area, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-lg`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition duration-300">
                  {area.title}
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Books Published */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-12">
            <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">Published Books</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "FUNDAMENTALS OF IOT AND BIG DATA",
                  authors: "Dr. Vinoth N.A.S., Mrs. Ramaprabha M., Dr. Velmurugan S.P., Mrs. Gurusigaamani A.M.",
                  publisher: "Scientific International Publishing House",
                  isbn: "978-93-5757-810-3"
                },
                {
                  title: "AI IN CLOUD",
                  authors: "Dr. Rekha V., Dr. Swathi H Y, M., Mrs. Gurusigaamani, A.M., Dr. Prasannaanjaneyulu A N K",
                  publisher: "Scientific International Publishing House",
                  isbn: "978-93-6674-442-1"
                }
              ].map((book, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-pink-300 transition duration-300">
                  <div className="bg-pink-100 text-pink-800 inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Published Book
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">{book.title}</h5>
                  <p className="text-sm text-gray-600 mb-2">{book.authors}</p>
                  <p className="text-sm text-gray-500 mb-1">{book.publisher}</p>
                  <p className="text-sm text-gray-500">ISBN: {book.isbn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACM Events Organized */}
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Events Organized</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "SQL KNIGHTS - EUPHORIA 2024",
                "TECH QUEST - THE DIGITAL ODYSSEY",
                "SHEROES CODEATHON (Women-only)",
                "Brain Computer Interface Workshop",
                "Hour of Code Event",
                "Techathon'25 - 24 Hour Hackathon",
                "SHE-CODES APP DEVELOPMENT",
                "Industry Colloquium on AI"
              ].map((event, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border-l-4 border-pink-400 hover:shadow-lg transition duration-300">
                  <p className="text-gray-800 font-medium text-sm">{event}</p>
                  <p className="text-gray-500 text-xs mt-1">ACM Student Chapter</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Research Publications</h3>
            <p className="text-xl text-gray-600">IEEE conferences and peer-reviewed journals</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 group">
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    pub.type === 'Journal' ? 'bg-pink-100' : 'bg-purple-100'
                  } group-hover:scale-110 transition duration-300`}>
                    <FileText className={`w-6 h-6 ${
                      pub.type === 'Journal' ? 'text-pink-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                        pub.type === 'Journal' ? 'bg-pink-100 text-pink-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {pub.type}
                      </span>
                      <span className="text-gray-500 text-sm">{pub.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition duration-300">
                      {pub.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{pub.venue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Testimonials</h4>
              <p className="text-lg text-gray-600">What colleagues and students say about my work</p>
            </div>
            
            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                <button 
                  onClick={prevTestimonial}
                  className="w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition duration-300 hover:scale-110 hover:bg-pink-50 group"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-pink-600" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition duration-300 hover:scale-110 hover:bg-pink-50 group"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-pink-600" />
                </button>
              </div>
              
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-purple-600"></div>
                <div className="flex items-start gap-8 flex-col sm:flex-row">
                  <div className="relative group mx-auto sm:mx-0">
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
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
                      <div className="text-8xl text-pink-200 font-serif absolute -top-4 -left-4">"</div>
                      <p className="text-gray-600 italic leading-relaxed text-lg relative z-10 pl-8">
                        {testimonials[currentTestimonial].text}
                      </p>
                      <div className="text-8xl text-pink-200 font-serif absolute -bottom-8 right-0">"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Publication Statistics */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    number: "10+",
                    label: "Research Publications",
                    description: "IEEE Conferences & Journals",
                    color: "from-pink-400 to-pink-600"
                  },
                  {
                    number: "260+",
                    label: "Students Supervised",
                    description: "Undergraduate & Graduate",
                    color: "from-purple-400 to-purple-600"
                  },
                  {
                    number: "15+",
                    label: "Technical Events",
                    description: "ACM Hackathons & Workshops",
                    color: "from-emerald-400 to-emerald-600"
                  },
                  {
                    number: "2",
                    label: "Books Published",
                    description: "IoT, Big Data & AI",
                    color: "from-blue-400 to-blue-600"
                  }
                ].map((stat, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-lg`}>
                      <span className="text-white font-bold text-lg">{stat.number}</span>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition duration-300">
                      {stat.label}
                    </h5>
                    <p className="text-gray-600 font-medium">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-100 to-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-xl text-gray-700">Get in touch for research collaborations and academic discussions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                label: "EMAIL –",
                value: "gurusigaamani@gmail.com",
                href: "mailto:gurusigaamani@gmail.com"
              },
              {
                icon: Phone,
                label: "MOBILE –",
                value: "+91-9600217070",
                href: "tel:+919600217070"
              },
              {
                icon: MapPin,
                label: "LOCATION –",
                value: "Kalasalingam Academy of Research and Education",
                href: "#"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 block"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-lg">
                  <contact.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">
                  {contact.label}
                </p>
                <p className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition duration-300">
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
                <p>Department of Computer Science & Engineering</p>
                <p>Kalasalingam Academy of Research and Education</p>
                <p>Krishnankoil, Tamil Nadu, India</p>
              </div>
              <div className="space-y-2 text-gray-600">
                <h5 className="font-semibold text-gray-900 mb-3">Permanent Address</h5>
                <p>125A/9, South Street, Sankarapandiapuram</p>
                <p>Chatrapatti, Rajapalayam - 626102</p>
                <p>Tamil Nadu, India</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">LinkedIn:</span> 
                <a href="https://www.linkedin.com/in/ms-gurusigaamani-a-m-cse-961464304/" className="text-pink-600 hover:text-pink-800 transition duration-300 ml-1">
                  Connect with me on LinkedIn
                </a>
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
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-700 flex items-center justify-center rounded-lg shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Dr. A.M. Gurusigaamani</h4>
                <p className="text-sm text-gray-600">Assistant Professor • Computer Science & Engineering</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              {[Mail, Phone].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-gray-100 hover:bg-pink-100 rounded-full flex items-center justify-center transition duration-300 cursor-pointer group"
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition duration-300" />
                </div>
              ))}

              <a
                href="https://www.linkedin.com/in/ms-gurusigaamani-a-m-cse-961464304/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 hover:bg-pink-100 rounded-full flex items-center justify-center transition duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition duration-300" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500 pt-8 border-t border-gray-200">
            <span>© 2024 Dr. A.M. Gurusigaamani. All rights reserved.</span>
            <span>Research • Teaching • Innovation</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;