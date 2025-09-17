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
      name: "Prof. Department Head",
      type: "HEAD OF DEPARTMENT, ANNA UNIVERSITY TRICHY",
      text: "Ms. Kardeepa's dedication to teaching and research during her tenure as Teaching Fellow was exemplary. Her expertise in Machine Learning  makes her a valuable asset to academic institutions.",
      image: "/image/img1.jpg"
    },
    {
      name: "Dr. Research Collaborator", 
      type: "RESEARCH COLLEAGUE, KARE 2024",
      text: "Working with Ms. Kardeepa on ML research projects has been rewarding. Her systematic approach to neural networks and spam detection research demonstrates exceptional technical and analytical skills.",
      image: "/image/img1.jpg"
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
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">P. Kardeepa</h1>
                <p className="text-sm text-gray-600 font-medium">Computer Science & Engineering</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex gap-8">
              {['About Me', 'Education', 'Teaching', 'Research', 'Achievement', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['about', 'education', 'teaching', 'research', 'achievement', 'contact'][index])}
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
                Hello,  I'm {''}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    P.Kardeepa
                </span>
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-4">
                Assistant Professor & UGC NET Qualified –
              </p>
              <p className="text-lg text-gray-600">
                Specializing in Machine Learning, Embedded Systems with 5.5 years of teaching experience.
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src="/image/img1.jpg" 
                  alt="P. Kardeepa"
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
                src="/image/img2.png" 
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
                  UGC NET Qualified Academic Professional –
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm an Assistant Professor at Kalasalingam Academy of Research and Education with 5.5 years of teaching experience. Qualified National Eligibility Test (UGC NET) for Assistant Professor/Lectureship , demonstrating my academic excellence and commitment to higher education.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas of Expertise:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Machine Learning', 'Embedded Systems', 'Operating Systems', 'Pervasive Computing'].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                My research focuses on Machine Learning applications, With 5.5 years of teaching experience including roles at Anna University Trichy and current position at KARE, I bring academic excellence with practical teaching methodologies to guide students in computer science fundamentals and emerging technologies.
              </p>

              <div className="flex gap-4">
                 <a 
                   href="/image/pd1.pdf"  // path to your PDF in public/
                  target="_blank"     // opens in new tab
                   rel="noopener noreferrer"
                 >
              <button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
               View Resume
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
            <p className="text-xl text-gray-600">Academic Qualifications & Professional Development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                year: "2014",
                title: "M.E. Pervasive Computing Technology",
                description: "University College of Engineering (BIT CAMPUS), Anna University, Trichy. CGPA: 8.14. Advanced studies in pervasive computing and embedded systems.",
                label: "01 \\ MASTER'S DEGREE"
              },
              {
                year: "2011",
                title: "B.E. Information Technology", 
                description: "Avinashilingam University for Women, Coimbatore. CGPA: 8.45. Strong foundation in information technology and computer science.",
                label: "02 \\ BACHELOR'S DEGREE"
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

      {/* Teaching Section */}
      <section id="teaching" className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Professional Experience</h3>
            <p className="text-xl text-gray-600">Academic & Teaching Experience</p>
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
                    <span className="text-gray-500 text-sm">Feb 2023 - Present</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                    Assistant Professor
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Teaching computer science courses, conducting research in ML , serving as Women Empowerment Cell Member and ACM-W Professional Member.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'IoT Teaching', 'Research Guidance', 'ACM-W Member'].map((subject, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching Fellow */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">AUT</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Teaching Fellow
                    </span>
                    <span className="text-gray-500 text-sm">June 2016 - Dec 2018</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition duration-300">
                    Teaching Fellow
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Anna University, BIT Campus, Trichy (Faculty ID: 8100267)</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Department of Computer Applications. Extensive teaching experience, project guidance for UG & PG students, and timetable coordination responsibilities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Project Guidance', 'Timetable Coordination', 'UG/PG Mentoring', 'Research Support'].map((subject, index) => (
                      <span key={index} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching Assistantship */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">TEQIP</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      TEQIP-II Program
                    </span>
                    <span className="text-gray-500 text-sm">2013-2014</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition duration-300">
                    Teaching Assistantship
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Technical Education Quality Improvement Programme (TEQIP-II)</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Selected by NPIU, New Delhi for Teaching Assistantship under Government of India's National Project Implementation Unit program.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['GOI Selection', 'NPIU Program', 'Quality Enhancement', 'Academic Excellence'].map((subject, index) => (
                      <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* UGC NET Qualification */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">NET</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      National Qualification
                    </span>
                    <span className="text-gray-500 text-sm">2021 & 2022</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition duration-300">
                    UGC NET Qualified
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">National Eligibility Test for Assistant Professor/Lectureship</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Qualified NTA UGC NET , demonstrating academic excellence and eligibility for higher education roles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['NTA UGC NET', 'Academic Excellence', 'Teaching Eligibility', 'Research Qualification'].map((subject, index) => (
                      <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="mt-16 bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400"></div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">Professional Philosophy</h4>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                "I believe in combining theoretical knowledge with practical hands-on experience to provide comprehensive learning. My approach emphasizes project-based learning in Machine Learning, encouraging innovation while building strong foundations in computer science fundamentals through systematic teaching methodologies."
              </p>
              <div className="mt-8 flex justify-center gap-8 text-center">
                <div className="group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition duration-300">5.5+</div>
                  <p className="text-gray-600 font-medium">Years Teaching</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition duration-300">9</div>
                  <p className="text-gray-600 font-medium">Research Publications</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition duration-300">2</div>
                  <p className="text-gray-600 font-medium">Book Publications</p>
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
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Research Contributions</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research in Machine Learning, spam detection with focus on practical implementations.
            </p>
          </div>
          
          {/* Machine Learning & Spam Detection Research */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 group hover:shadow-blue-200/50 transition duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src="/image/img3.png" 
                  alt="Machine Learning Research"
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-12">
                <p className="text-sm text-gray-500 mb-2 font-semibold tracking-wide">01 / RECENT PUBLICATIONS</p>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Advanced ML & Neural Network Research</h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Extensive research in spam detection using Twitter data, Random Group Coupled Neural Networks for fake news detection, and brain tumor classification using CNN and Vision Transformers.
                </p>
                <div className="space-y-3">
                  {['IEEE Conference Publications (2023-2025)', 'RGCNN Implementation', 'CNN & ViT for Medical Applications', 'Social Media Data Analysis'].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 group/skill">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover/skill:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* IoT & Embedded Systems Research */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-blue-200/50 transition duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 order-2 lg:order-1">
                <p className="text-sm text-gray-500 mb-2 font-semibold tracking-wide">02 / BOOK PUBLICATIONS & INNOVATIONS</p>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">IoT & Embedded Systems</h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Author and co-author of significant publications on Embedded Systems & IoT, and comprehensive handbook on Machine Learning Techniques covering concepts and algorithms.
                </p>
                <div className="space-y-3">
                  {['Book: Embedded Systems and IOT (2024)', 'Book: ML Techniques Handbook (2024)'].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 group/skill">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover/skill:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden order-1 lg:order-2">
                <img 
                  src="/image/img4.png" 
                  alt="IoT Research"
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>

          {/* Research Profiles */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Recent Publications</h4>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-700 mb-2">IEEE Conferences (2023-2025)</p>
                  <p>• RGCNN: Fake News Detection</p>
                  <p>• Brain Tumor Detection using CNN & ViT</p>
                  <p>• Twitter Spam Detection</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Professional Development</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• ACM-W Student Chapter Member (Chapter ID: 180857)</p>
                <p>• Women Empowerment Cell Member (2024-2025)</p>
                <p>• NPTEL Certification (IoT ) </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievement" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Recognition & Awards</h3>
            <p className="text-xl text-gray-600">Testimonials from colleagues and collaborators</p>
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
                  title: "UGC NET Qualified",
                  description: "Assistant Professor/Lectureship",
                  color: "from-yellow-400 to-yellow-600"
                },
                {
                  icon: FileText,
                  title: "9 Publications",
                  description: "IEEE conferences & journals",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  icon: BookOpen,
                  title: "2 Book Publications",
                  description: "Embedded Systems & ML Handbook",
                  color: "from-emerald-400 to-emerald-600"
                },
                {
                  icon: Users,
                  title: "ACM-W Member",
                  description: "Professional society membership",
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
                value: "kardeepa91@gmail.com",
                href: "mailto:kardeepa91@gmail.com"
              },
              {
                icon: Phone,
                label: "MOBILE –",
                value: "+91 9787303000",
                href: "tel:+919787303000"
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
              <p className="font-semibold">School of Computing</p>
              <p>Kalasalingam Academy of Research and Education</p>
              <p>Anand Nagar, Krishnankoil – 626 126</p>
              <p>Tamil Nadu, India</p>
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
                <h4 className="text-lg font-bold text-gray-900">P. Kardeepa</h4>
                <p className="text-sm text-gray-600">Computer Science & Engineering</p>
              </div>
            </div>
            
            <div className="flex gap-4">
               {[Mail, Phone, Linkedin].map((Icon, index) => (
    Icon === Linkedin ? (
      <a
        key={index}
        href="https://www.linkedin.com/in/p-kardeepa-cse-684a51306 "
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
            <span>© 2024 P. Kardeepa. All rights reserved.</span>
            <span>Teaching • Research • Innovation</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;