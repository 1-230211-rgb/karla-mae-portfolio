/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Facebook, Instagram, ExternalLink, GraduationCap, Briefcase, Palette, Video, Layout, PenTool, Heart, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    bg: '#F9D9E3', // Soft pink from image
    text: '#7A2048', // Dark maroon/purple from image
    cardBg: '#FDEEF4', // Very light pink for sections
    white: '#FFFFFF',
    accent: '#F9D9E3',
    secondary: '#D81B60'
  };

  const tools = [
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
    { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg' },
    { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  ];

  const gallery = [
    { url: '/mar.jpg', title: 'Marilyn Monroe' },
    { url: '/kiss.jpg', title: 'The Kiss' },
    { url: '/boy.jpg', title: 'Portrait Study' },
    { url: '/joker.jpg', title: 'The Joker' },
    { url: '/candle.jpg', title: 'Rose & Shadow' },
    { url: '/girl.jpg', title: 'Audrey Hepburn' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    'Digital Arts',
    'Traditional Arts',
    'Basic HTML & CSS',
    'Creative Design',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Video Editing',
    'UI/UX Design'
  ];

  const services = [
    { title: 'Graphic Design', icon: <Palette size={32} />, desc: 'Creating visually stunning logos, posters, and social media graphics.' },
    { title: 'Video Editing', icon: <Video size={32} />, desc: 'Crafting engaging video content with smooth transitions and effects.' },
    { title: 'UI/UX Design', icon: <Layout size={32} />, desc: 'Designing user-friendly interfaces for web and mobile applications.' },
    { title: 'Illustration', icon: <PenTool size={32} />, desc: 'Custom digital and traditional illustrations tailored to your needs.' },
  ];

  const education = [
    { year: '2022 - Present', school: 'Multimedia Arts University', degree: 'Bachelor of Arts in Multimedia Arts', desc: 'Focusing on digital media, animation, and visual communication.' },
    { year: '2020 - 2022', school: 'Arts & Design High', degree: 'Senior High School (Arts & Design Track)', desc: 'Graduated with honors, specialized in traditional painting and sketching.' },
  ];

  const experience = [
    { year: '2023 - Present', role: 'Freelance Graphic Designer', company: 'Self-Employed', desc: 'Working with various clients on branding and social media assets.' },
    { year: '2023', role: 'Multimedia Intern', company: 'Creative Studio X', desc: 'Assisted in video production and layout design for marketing campaigns.' },
  ];

  const interests = [
    { name: 'Drawing', icon: <PenTool size={16} /> },
    { name: 'Photography', icon: <Heart size={16} /> },
    { name: 'Painting', icon: <Palette size={16} /> },
  ];

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-4 inline-block relative">
        {children}
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-pink-200 rounded-full"></div>
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-pink-200 scroll-smooth" style={{ backgroundColor: '#FFFFFF', color: colors.text }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ color: colors.text }}>My Portfolio</h1>
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold hover:text-pink-500 transition-colors"
                style={{ color: colors.text }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="mb-8 inline-block"
          >
            <div className="w-52 h-52 rounded-full border-8 border-white/50 overflow-hidden mx-auto shadow-2xl">
              <img
                src="/Karla.jpg" 
                alt="Karla Mae C. Caramay"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/karla/400/400";
                }}
              />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4 tracking-tight"
          >
            Karla Mae C. Caramay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl opacity-80 mb-10 font-medium"
          >
            Multimedia Student | Creative Designer | Visual Artist
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: <Mail size={28} />, href: "mailto:caramaykarlamae6@gmail.com", external: false },
              { icon: <Facebook size={28} />, href: "https://www.facebook.com/share/1KmVppACBv/", external: true },
              { icon: <Instagram size={28} />, href: "https://www.instagram.com/llalalamae?igsh=Nzk0amRwY2NxYXhq", external: true }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="p-3 bg-white/20 rounded-full hover:bg-white/40 hover:scale-110 transition-all shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed opacity-90">
                I am a Multimedia student with a passion for digital and traditional arts. 
                I enjoy creating soft, clean, and visually appealing designs while learning 
                web development using HTML and CSS.
              </p>
              <p className="text-lg opacity-70">
                My goal is to blend artistic creativity with technical skills to build 
                meaningful digital experiences. I believe that good design should not 
                only be beautiful but also functional and accessible.
              </p>
              <div className="pt-4">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Heart size={18} className="text-pink-500" /> My Interests
                </h4>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <span key={interest.name} className="flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-lg text-sm font-medium">
                      {interest.icon} {interest.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-pink-100 overflow-hidden shadow-inner">
                <img 
                  src="https://picsum.photos/seed/art/600/600" 
                  alt="Artistic background" 
                  className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-pink-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="education" className="py-24 px-6 bg-pink-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <GraduationCap className="text-pink-500" /> Education
              </h3>
              <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-pink-100 ml-2 pl-8">
                {education.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-pink-300 border-4 border-white"></div>
                    <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">{item.year}</span>
                    <h4 className="text-xl font-bold mt-1">{item.degree}</h4>
                    <p className="font-medium opacity-80">{item.school}</p>
                    <p className="mt-2 text-sm opacity-60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <Briefcase className="text-pink-500" /> Experience
              </h3>
              <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-pink-100 ml-2 pl-8">
                {experience.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-pink-300 border-4 border-white"></div>
                    <span className="text-sm font-bold text-pink-500 uppercase tracking-wider">{item.year}</span>
                    <h4 className="text-xl font-bold mt-1">{item.role}</h4>
                    <p className="font-medium opacity-80">{item.company}</p>
                    <p className="mt-2 text-sm opacity-60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[3rem] p-16 shadow-sm border border-pink-50" style={{ backgroundColor: colors.cardBg }}>
            <SectionTitle>Skills & Tools</SectionTitle>
            
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-8 text-center opacity-60 uppercase tracking-widest">Core Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-4 rounded-2xl text-base font-semibold shadow-sm transition-all hover:shadow-md bg-white"
                    style={{ color: colors.text }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8 text-center opacity-60 uppercase tracking-widest">Software Proficiency</h3>
              <div className="flex flex-wrap justify-center gap-10">
                {tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 p-3 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                      <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-bold opacity-60">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Creative Gallery</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h4 className="text-white font-bold text-xl">{item.title}</h4>
                  <p className="text-white/70 text-sm">Multimedia Work</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Services</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl text-center border border-pink-50 hover:border-pink-200 transition-all hover:shadow-xl hover:shadow-pink-100/50 group"
              >
                <div className="mb-6 inline-flex p-4 bg-pink-50 rounded-2xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[3rem] p-16 text-center shadow-2xl shadow-pink-100" style={{ backgroundColor: colors.cardBg }}>
            <SectionTitle>Get In Touch</SectionTitle>
            <p className="mb-10 text-lg opacity-70 max-w-md mx-auto">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out to me!
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="mailto:caramaykarlamae6@gmail.com" 
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all font-bold text-lg"
              >
                <Mail size={24} className="text-pink-500" />
                caramaykarlamae6@gmail.com
              </a>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1KmVppACBv/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-pink-500"><Facebook size={24} /></a>
                <a href="https://www.instagram.com/llalalamae?igsh=Nzk0amRwY2NxYXhq" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-pink-500"><Instagram size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-pink-50">
        <h2 className="text-xl font-bold mb-6">My Portfolio</h2>
        <div className="flex justify-center space-x-8 mb-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
              {link.name}
            </a>
          ))}
        </div>
        <p className="opacity-30 text-xs">© 2026 Karla Mae C. Caramay. Made with Love & Creativity.</p>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-10 right-10 p-4 bg-pink-500 text-white rounded-2xl shadow-lg hover:bg-pink-600 transition-colors z-50"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
