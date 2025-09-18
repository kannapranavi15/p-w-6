'use client';

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Facebook, Twitter, Youtube, Play, ChevronLeft, ChevronRight, BookOpen, Award, Users, FileText } from 'lucide-react';

interface Testimonial {
  name: string;
  type: string;
  text: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      name: "Research Supervisor",
      type: "KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION",
      text: "Mr. Surendiran's research work in federated learning and autonomous vehicle systems demonstrates exceptional technical depth and innovation in emerging AI technologies.",
      image: "img1.jpg"
    },
    {
      name: "Industry Collaborator", 
      type: "NSTL & IIT INDORE PROJECTS",
      text: "Working with Mr. Surendiran on autonomous surface vehicles and bio-mimics robotics has been highly productive. His expertise in embedded systems makes him a valuable research partner.",
      image: "img1.jpg"
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center rounded-lg shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">D. Surendiran Muthukumar</h1>
                <p className="text-sm text-gray-600 font-medium">Assistant Professor & Research Scholar</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex gap-8">
              {['About Me', 'Education', 'Experience', 'Research', 'Achievement', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['about', 'education', 'experience', 'research', 'achievement', 'contact'][index])}
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
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-12">
            <div className="flex-1 text-center lg:text-left lg:pr-12">
              <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hello, I'm  
                <span>
                 <h2 className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">D. Surendiran Muthukumar</h2>
                </span>
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-4">
                Assistant Professor & PhD Research Scholar –
              </p>
              <p className="text-lg text-gray-600">
                Specializing in Algorithm Intelligence Systems, Robotics, and Federated Learning with expertise in autonomous vehicle systems and embedded technologies.
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src="/img1.jpg" 
                  alt="D. Surendiran Muthukumar"
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
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl transform group-hover:scale-105 transition duration-500"></div>
              <img 
                src="/img4.png" 
                alt="Research Lab"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl z-10"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  About{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h3>
                <p className="text-xl text-gray-700 font-medium mb-6">
                  Assistant Professor & Research Innovator –
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm an Assistant Professor at Kalasalingam Academy of Research and Education with extensive experience in algorithm intelligence systems and robotics. Currently pursuing my PhD with research focus on federated learning networks in healthcare, while contributing to cutting-edge projects in autonomous vehicle systems.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Research Specializations:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Algorithm Intelligence', 'Robotics Systems', 'Federated Learning', 'Autonomous Vehicles'].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                My career objective is to achieve the highest standard through innovation and dedication while simultaneously contributing to organizational growth. I've worked on funded projects from NSTL and IIT Indore, developing autonomous surface vehicles and bio-mimics robots for naval surveillance applications.
              </p>

              <div className="flex gap-4">
                <a href="/pd.pdf">
                <button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View CV
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Educational Journey</h3>
            <p className="text-xl text-gray-600">Academic Qualifications & Research Excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "Pursuing",
                title: "Ph.D. Computer Science",
                description: "Kalasalingam Academy of Research and Education. Research focus on Advanced Algorithm Intelligence Systems and Federated Learning Networks in Healthcare Industry",
                label: "01 \\ DOCTORAL DEGREE"
              },
              {
                year: "2015",
                title: "M.E. Computer Science & Engineering", 
                description: "Gojan School of Business and Technology, Chennai. Percentage: 89.4%. Advanced studies in computer science and engineering with focus on research methodologies",
                label: "02 \\ MASTER'S DEGREE"
              },
              {
                year: "2011",
                title: "B.Tech Information Technology",
                description: "Anna University of Technology, Tiruchirappalli. CGPA: 6.72/10. Project work in software development and programming technologies",
                label: "03 \\ BACHELOR'S DEGREE"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-7xl font-bold bg-gradient-to-br from-blue-200 to-blue-300 bg-clip-text text-transparent mb-6 group-hover:from-blue-300 group-hover:to-blue-400 transition duration-500">
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

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Professional Experience</h3>
            <p className="text-xl text-gray-600">Academic Leadership & Industry Experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current Position */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">KARE</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Current Position
                    </span>
                    <span className="text-gray-500 text-sm">July 2022 - Present</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                    Assistant Professor
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Teaching Algorithm Intelligence Systems, Design and Analysis of Algorithms, Object Oriented Programming with Java, and Data Structures. Leading research in federated learning and autonomous systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Algorithm Intelligence', 'Java Programming', 'Data Structures', 'Software Engineering'].map((subject, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Academic Role */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">TMI</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Senior Lecturer
                    </span>
                    <span className="text-gray-500 text-sm">June 2019 - July 2022</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition duration-300">
                    Senior Lecturer
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Thai Moogambigai Polytechnic College, Chennai</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Advanced teaching role with research responsibilities. Conducted workshops on Python programming and software testing methodologies. Active research in autonomous vehicle systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Python Programming', 'Software Testing', 'Research Projects', 'Workshop Conduct'].map((subject, index) => (
                      <span key={index} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Research Consultant Role */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">MGR</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Research Consultant
                    </span>
                    <span className="text-gray-500 text-sm">Feb 2018 - June 2019</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition duration-300">
                    Research Consultant
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Dr. M.G.R Educational and Research Institute, Chennai</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Led research projects on autonomous surface vehicles and underwater robotics. Collaborated with NSTL and IIT Indore on advanced robotics systems for naval applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Autonomous Vehicles', 'Underwater Robotics', 'Naval Systems', 'Research Leadership'].map((subject, index) => (
                      <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Early Teaching Experience */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">AMS</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Lecturer
                    </span>
                    <span className="text-gray-500 text-sm">June 2012 - May 2013, June 2015 - Feb 2018</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition duration-300">
                    Lecturer
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Aalim Muhammed Salegh Polytechnic College, Avadi</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Foundation teaching experience in computer science subjects. Developed curriculum and teaching methodologies while pursuing advanced research interests.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Foundation Teaching', 'Curriculum Development', 'Computer Science', 'Student Mentoring'].map((subject, index) => (
                      <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Research Excellence</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading research in autonomous systems, federated learning, and robotics with funded projects from premier institutions like NSTL and IIT Indore.
            </p>
          </div>
          
          {/* Autonomous Surface Vehicle Project */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 group hover:shadow-blue-200/50 transition duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src="/img2.png" 
                  alt="Autonomous Surface Vehicle Research"
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-12">
                <p className="text-sm text-gray-500 mb-2 font-semibold tracking-wide">01 / FUNDED RESEARCH PROJECT</p>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Renewable Energy Powered Autonomous Smart Ocean Surface Vehicle</h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Developed Arduino-based Autonomous Surface Water Vehicle with high-definition live transmitted camera for coastal surveillance and deep sea monitoring. Integrated GPS module for location tracking and real-time data transmission capabilities.
                </p>
                <div className="space-y-3">
                  {['NSTL & Dr.M.G.R University Funded', 'Embedded C & Web Technologies', 'GPS Navigation System', 'Coastal Surveillance Application'].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 group/skill">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover/skill:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Underwater Bio Mimics Robot */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-blue-200/50 transition duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 order-2 lg:order-1">
                <p className="text-sm text-gray-500 mb-2 font-semibold tracking-wide">02 / IIT INDORE COLLABORATION</p>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Underwater Bio Mimics Robot for Naval Surveillance</h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Developed Arduino-based Autonomous Underwater Bio Mimics Robot simulating fish behavior with obstacle avoidance capabilities. Designed for surveillance, seabed network mapping, and underwater resource scanning applications.
                </p>
                <div className="space-y-3">
                  {['IIT Indore Collaboration', 'Bio-Mimics Technology', 'Obstacle Avoidance System', 'Naval Surveillance Ready'].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 group/skill">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover/skill:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden order-1 lg:order-2">
                <img 
                  src="/img3.png" 
                  alt="Underwater Bio Mimics Robot"
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>

          {/* Publications Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <p className="text-gray-600 font-medium">Scopus Publications</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">2</div>
              <p className="text-gray-600 font-medium">Major Funded Projects</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <p className="text-gray-600 font-medium">Conference Presentations</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">1</div>
              <p className="text-gray-600 font-medium">National Workshop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievement" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Professional Achievements</h3>
            <p className="text-xl text-gray-600">Awards, workshops and academic excellence</p>
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
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="flex items-start gap-8 flex-col sm:flex-row">
                <div className="relative group mx-auto sm:mx-0">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
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
                  icon: FileText,
                  title: "National Workshop",
                  description: "Python for Higher Education",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  icon: BookOpen,
                  title: "Research Publications",
                  description: "Scopus Indexed Papers",
                  color: "from-emerald-400 to-emerald-600"
                },
                {
                  icon: Users,
                  title: "Industry Experience",
                  description: "Programming Trainer & Consultant",
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
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-100 to-blue-200">
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
                value: "smuthukumar313@gmail.com",
                href: "mailto:smuthukumar313@gmail.com"
              },
              {
                icon: Phone,
                label: "MOBILE –",
                value: "+91 8760624207",
                href: "tel:+918760624207"
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
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-lg">
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
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Address</h4>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">4L/13 Mahatma Gandhi Colony</p>
              <p>Kottai Villai Patti Road, Vickramasingapuram-627425</p>
              <p>Ambasamudram (Tk), Tirunelveli (Dt)</p>
              <p>Tamil Nadu, India</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Date of Birth: 14/06/1990</p>
              <p className="text-sm text-gray-500">Languages: Tamil & English</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center rounded-lg shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">D. Surendiran Muthukumar</h4>
                <p className="text-sm text-gray-600">Assistant Professor & Research Scholar</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              {[Mail, Phone, Linkedin].map((Icon, index) => (
                Icon === Linkedin ? (
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition duration-300 cursor-pointer group"
                  >
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition duration-300" />
                  </a>
                ) : (
                  <div
                    key={index}
                    className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition duration-300 cursor-pointer group"
                  >
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition duration-300" />
                  </div>
                )
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500 pt-8 border-t border-gray-200">
            <span>© 2024 D. Surendiran Muthukumar. All rights reserved.</span>
            <span>Research • Innovation • Excellence</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;