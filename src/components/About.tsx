import React, { useState, useEffect } from 'react';

const About = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const languages = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'C++', 
    'Rust', 'Go', 'React', 'Node.js', 'SQL', 'HTML/CSS'
  ];

  const helloInLanguages = [
    'Hello',      // English
    'Hola',       // Spanish
    'Bonjour',    // French
    'Hallo',      // German
    'Ciao',       // Italian
    'Olá',        // Portuguese
    'Привет',     // Russian
    '你好',        // Chinese
    'こんにちは',    // Japanese
    '안녕하세요',    // Korean
    'مرحبا',       // Arabic
    'नमस्ते',      // Hindi
    'שלום',       // Hebrew
  ];

  const skills = [
    'Data Structures and Algorithms',
    'Operating Systems',
    'Microprocessors',
    'Digital Design',
    'Machine Learning',
    'Web Development'
  ];

  const frameworks = [
    'React', 'Node.js', 'Django', 'Flask', 'Express',
    'Git', 'Docker', 'Quartus', 'VHDL', 'BigQuery'
  ];

  useEffect(() => {
    const currentWord = helloInLanguages[currentLanguageIndex];
    
    const typewriterInterval = setInterval(() => {
      if (isDeleting) {
        // Deleting characters
        setDisplayedText(prev => {
          if (prev.length === 0) {
            setIsDeleting(false);
            setCurrentLanguageIndex(prevIndex => (prevIndex + 1) % helloInLanguages.length);
            return '';
          }
          return prev.slice(0, -1);
        });
      } else {
        // Typing characters
        setDisplayedText(prev => {
          if (prev.length === currentWord.length) {
            // Word complete, wait then start deleting
            setTimeout(() => setIsDeleting(true), 1500);
            return prev;
          }
          return currentWord.slice(0, prev.length + 1);
        });
      }
    }, isDeleting ? 100 : 150); // Faster deletion than typing

    return () => clearInterval(typewriterInterval);
  }, [currentLanguageIndex, isDeleting, helloInLanguages]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Main Content */}
          <div className="flex-1 text-center lg:text-center">
            <div className="mb-8">
              {/* Headshot */}
              <div className="flex justify-center mb-8">
                <img 
                  src="/headshot.jpg" 
                  alt="Alexander Aron" 
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-purple-500/50 
                           shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
                           transition-all duration-300 transform hover:scale-105"
                />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-500">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
                <br />
                <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  I am Alexander Aron
                </span>
              </h1>
              
              <div className="text-white-400 text-lg font-medium tracking-wider drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                Computer Engineering Student @ University of Florida
              </div>
            </div>

            {/* Social Icons */}
            <div className="mb-6 flex items-center justify-center gap-6">
              <a 
                href="https://linkedin.com/in/AlexanderAron" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-purple-300 hover:text-blue-300 
                         transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://github.com/Alex-Aron" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-purple-300 hover:text-blue-300 
                         transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* Resume Link */}
            <div className="flex justify-center mb-8">
              <a 
                href="/Alex_s.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 text-purple-300 
                         border-2 border-purple-500/50 rounded-full font-medium
                         hover:bg-purple-600/30 hover:border-purple-400/70 
                         hover:text-purple-200 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]
                         transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
                My Resume
              </a>
            </div>
          </div>

          {/* Skills Section }
          <div className="flex-1 max-w-md">
            <h2 className="text-3xl text-white mb-8 text-center 
                         drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
              I am Alexander Aron, a rising senior at the University of Florida majoring in Computer Engineering. 
            </h2>
          </div>{*/}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-4xl md:text-4xl font-bold text-center mb-16">
            <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
              Education
            </span>
          </h3>
            
          <div className="bg-gray-900/50 border-2 border-purple-500/30 rounded-2xl p-8
                        backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.2)]
                        hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300">
            
            {/* Bachelor's Degree */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-3
                               drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    Bachelor of Science in Computer Engineering
                  </h4>
                  <h5 className="text-xl text-purple-300 font-semibold mb-2
                               drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]">
                    University of Florida
                  </h5>
                  <p className="text-gray-400 text-lg">Gainesville, FL</p>
                </div>
                <div className="lg:text-right mt-4 lg:mt-0">
                  <span className="inline-block bg-purple-600/20 text-purple-300 px-4 py-2 rounded-lg
                                 border border-purple-500/30 font-medium">
                    May 2026 (Expected)
                  </span>
                </div>
              </div>
            </div>

            {/* Master's Degree */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-3
                               drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    Masters of Engineering in Computer Engineering
                  </h4>
                  <h5 className="text-xl text-purple-300 font-semibold mb-2
                               drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]">
                    University of Florida
                  </h5>
                  <p className="text-gray-400 text-lg">Gainesville, FL</p>
                </div>
                <div className="lg:text-right mt-4 lg:mt-0">
                  <span className="inline-block bg-purple-600/20 text-purple-300 px-4 py-2 rounded-lg
                                 border border-purple-500/30 font-medium">
                    May 2027 (Expected)
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Details */}
            <div className="border-t border-purple-500/20 pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h6 className="text-purple-300 font-semibold mb-2">GPA</h6>
                  <p className="text-gray-300">4.0</p>
                </div>
                <div>
                  <h6 className="text-purple-300 font-semibold mb-2">Achievements:</h6>
                  <p className="text-gray-300">College of Engineering Dean's List: Spring 2023 & Fall 2024, University Scholars Program</p>
                </div>
                <div>
                  <h6 className="text-purple-300 font-semibold mb-2">Notable Coursework:</h6>
                  <p className="text-gray-300">Data Structures and Algorithms, Operating Systems, Microprocessors, Digital Design, Digital Logic and Computer Systems, Computer Organization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 