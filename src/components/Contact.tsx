import React, { useState } from 'react';

const Contact = () => {


  const contactInfo = [
    {
      label: 'Email',
      value: 'aronmalex@gmail.com',
      href: 'mailto:aronmalex@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'School Email',
      value: 'alexander.aron@ufl.edu',
      href: 'mailto:alexander.aron@ufl.edu',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'Phone',
      value: '561-221-5320',
      href: 'tel:561-221-5320',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/AlexanderAron',
      href: 'https://linkedin.com/in/AlexanderAron',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      label: 'GitHub',
      value: 'github.com/Alex-Aron',
      href: 'https://github.com/Alex-Aron',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8
                         drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              I'm always open to discussing new opportunities, exciting projects, or just having a chat. 
              Whether you're looking for a talented developer, want to collaborate on a project, or have questions about my work, 
              I'd love to hear from you!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 border-2 border-purple-500/30 
                           rounded-lg backdrop-blur-sm hover:border-purple-500/50 
                           transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                           group"
                >
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </div>
                    <div className="text-white font-medium group-hover:text-purple-300 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-400">
            © 2025 Alexander Aron. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 