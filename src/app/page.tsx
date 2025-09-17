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
      name: "Prof. P. Deepalakshmi",
      type: "DOCTORAL SUPERVISOR, KALASALINGAM ACADEMY",
      text: "Dr. Chinnasamy's doctoral research on 'Enhanced and Scalable Access Control Mechanisms for Cloud Storage System' demonstrated exceptional technical depth and innovation in cloud security.",
      image: "img1.jpg"
    },
    {
      name: "Research Collaborator", 
      type: "CO-AUTHOR, SPRINGER PUBLICATIONS",
      text: "Working with Dr. Chinnasamy on blockchain and cloud security research has been highly productive. His systematic approach to cryptographic access control makes him a valuable research partner.",
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
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Dr. P. Chinnasamy</h1>
                <p className="text-sm text-gray-600 font-medium">Computer Science & Engineering</p>
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
                Hello,   I'm  
                <span >
                 <h2 className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Dr.P.Chinnasamy</h2>
                </span>
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-4">
                Associate Professor & Research Supervisor –
              </p>
              <p className="text-lg text-gray-600">
                Specializing in Cryptography, Cloud Computing & Access Control with extensive research in cybersecurity and blockchain technology.
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src="/img1.jpg" 
                  alt="Dr. P. Chinnasamy"
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
                  Anna University Research Supervisor & Cybersecurity Expert –
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm an Associate Professor at Kalasalingam Academy of Research and Education with extensive experience in cloud computing security. As a recognized Anna University Research Supervisor (ID: 4140166) in Information and Communication Engineering, I guide doctoral research in cutting-edge cybersecurity domains.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Research Specializations:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Cloud Security', 'Cryptography', 'Access Control', 'Blockchain Technology'].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                My doctoral research focused on "Enhanced and Scalable Access Control Mechanisms for Cloud Storage System," contributing significantly to cloud security frameworks. I've published extensively in high-impact journals and conferences, with expertise spanning from hybrid cryptography to AI-enabled IoT systems.
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
                year: "2019",
                title: "Ph.D. Computer Science & Engineering",
                description: "Kalasalingam Academy of Research and Education. Thesis: 'Design of Enhanced and Scalable Access Control Mechanisms for Cloud Storage System' under Prof. P. Deepalakshmi",
                label: "01 \\ DOCTORAL DEGREE"
              },
              {
                year: "2015",
                title: "M.Tech Computer Science & Engineering", 
                description: "Kalasalingam University. CGPA: 9.45/10. Thesis: 'Providing Resilience on Cloud Computing' under Prof. S. Radhakrishnan",
                label: "02 \\ MASTER'S DEGREE"
              },
              {
                year: "2011",
                title: "B.E. Computer Science & Engineering",
                description: "Dhanalakshmi College of Engineering, Anna University, Chennai. Percentage: 80%. Project: 'Intranet Chat Messenger'",
                label: "03 \\ BACHELOR'S DEGREE"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-8xl font-bold bg-gradient-to-br from-blue-200 to-blue-300 bg-clip-text text-transparent mb-6 group-hover:from-blue-300 group-hover:to-blue-400 transition duration-500">
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
                    <span className="text-gray-500 text-sm">June 2024 - Present</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                    Associate Professor
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Leading research initiatives in cloud security and cryptography. Anna University Research Supervisor guiding doctoral candidates in ICE domain.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Research Supervision', 'Cloud Security', 'Ph.D. Guidance', 'Patent Development'].map((subject, index) => (
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
                  <span className="text-white font-bold text-sm">MLR</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Associate Professor
                    </span>
                    <span className="text-gray-500 text-sm">Aug 2021 - June 2024</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition duration-300">
                    Associate Professor
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">MLR Institute of Technology, Hyderabad</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Advanced research in blockchain technology and cybersecurity. Published extensively in high-impact journals and conferences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Blockchain Research', 'Cybersecurity', 'Journal Publications', 'Conference Papers'].map((subject, index) => (
                      <span key={index} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Early Academic Role */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">SIET</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Assistant Professor
                    </span>
                    <span className="text-gray-500 text-sm">Jan 2019 - Apr 2021</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition duration-300">
                    Assistant Professor
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Sri Shakthi Institute of Engineering and Technology, Coimbatore</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Started academic career post-PhD, establishing research foundations in cloud security and access control mechanisms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Post-PhD Teaching', 'Research Foundation', 'Cloud Computing', 'Access Control'].map((subject, index) => (
                      <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Experience */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">IND</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Industry Experience
                    </span>
                    <span className="text-gray-500 text-sm">2012 - 2013</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition duration-300">
                    Software Professional
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Process Global Inc, Chennai & New Image Computer Education</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Developed desktop applications and web solutions. Gained practical experience in software development and training.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Software Development', 'Web Applications', 'Training', 'Project Management'].map((subject, index) => (
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
              Leading research in cloud security, cryptography, and blockchain technology with extensive publications and international collaborations.
            </p>
          </div>
          
          {/* High Impact Publications */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 group hover:shadow-blue-200/50 transition duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src="/img2.png" 
                  alt="Cloud Security Research"
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-12">
                <p className="text-sm text-gray-500 mb-2 font-semibold tracking-wide">01 / HIGH IMPACT PUBLICATIONS</p>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Cloud Security & Cryptography Research</h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Published 19 high-impact journal papers including SCI-indexed publications in Springer, IEEE, and MDPI journals. Research focuses on hybrid cryptographic access control, blockchain security, and AI-enabled IoT systems.
                </p>
                <div className="space-y-3">
                  {['19 SCIE Journal Publications', 'Springer & IEEE Transactions', 'Impact Factors up to 7.104', 'International Collaborations'].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 group/skill">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover/skill:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Research Supervision & Grants */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-blue-200/50 transition duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 order-2 lg:order-1">
                <p className="text-sm text-gray-500 mb-2 font-semibold tracking-wide">02 / RESEARCH SUPERVISION & GRANTS</p>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Doctoral Supervision & Funded Projects</h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Currently supervising 6 PhD scholars in AI, cybersecurity, and deep learning domains. Co-PI on international funded project with UTAR Malaysia focusing on multimodal machine learning for healthcare applications.
                </p>
                <div className="space-y-3">
                  {['6 PhD Scholars Under Guidance', 'UTAR Malaysia Collaboration (RM24,000)', 'Anna University Research Supervisor', 'AI & Cybersecurity Focus Areas'].map((achievement, index) => (
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
                  alt="Research Supervision"
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>

          {/* Research Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">19</div>
              <p className="text-gray-600 font-medium">SCIE Publications</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">16</div>
              <p className="text-gray-600 font-medium">Scopus Publications</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">67</div>
              <p className="text-gray-600 font-medium">Conference Papers</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">12</div>
              <p className="text-gray-600 font-medium">Book Chapters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievement" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Professional Recognition</h3>
            <p className="text-xl text-gray-600">Awards, fellowships and professional achievements</p>
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
                  icon: Award,
                  title: "Cybersecurity Innovator",
                  description: "CSI Mumbai Chapter - Lifetime Award",
                  color: "from-yellow-400 to-yellow-600"
                },
                {
                  icon: FileText,
                  title: "15 Patents",
                  description: "Granted & Published Patents",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  icon: BookOpen,
                  title: "Senior Research Associate",
                  description: "UTAR Malaysia (2024-2026)",
                  color: "from-emerald-400 to-emerald-600"
                },
                {
                  icon: Users,
                  title: "Research Supervisor",
                  description: "Anna University ICE Domain",
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
                value: "chinnasamyponnusamy@gmail.com",
                href: "mailto:chinnasamyponnusamy@gmail.com"
              },
              {
                icon: Phone,
                label: "MOBILE –",
                value: "+91 9600281664",
                href: "tel:+919600281664"
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
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Office Address</h4>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">Department of Computer Science and Engineering</p>
              <p>Kalasalingam Academy of Research and Education</p>
              <p>Anand Nagar, Krishnankoil – 626 126</p>
              <p>Tamil Nadu, India</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Research Supervisor ID: 4140166</p>
              <p className="text-sm text-gray-500">Anna University - Information and Communication Engineering</p>
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
                <h4 className="text-lg font-bold text-gray-900">Dr. P. Chinnasamy</h4>
                <p className="text-sm text-gray-600">Computer Science & Engineering</p>
              </div>
            </div>
            
<div className="flex gap-4">
  {[Mail, Phone, Linkedin].map((Icon, index) => (
    Icon === Linkedin ? (
      <a
        key={index}
        href="https://www.linkedin.com/in/dr-p-chinnasamy-52674b3b " // 🔗 replace with your LinkedIn profile
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
            <span>© 2024 Dr. P. Chinnasamy. All rights reserved.</span>
            <span>Research • Innovation • Excellence</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;