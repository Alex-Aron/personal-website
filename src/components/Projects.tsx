import React from 'react';

interface Project {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  highlights?: string[];
  githubUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "32-bit MIPS-like Microprocessor",
      period: "January 2025 – May 2025",
      description: [
        "Designed and implemented a 32-bit microprocessor in VHDL with a custom instruction set inspired by MIPS architecture",
        "Built datapath and control units from scratch, supporting arithmetic, memory, and branching instructions",
        "Simulated processor behavior using ModelSim and verified functionality with provided test programs",
        "Integrated components including ALU, register file, memory, and FSM-based controller into a complete working CPU"
      ],
      technologies: ["VHDL", "Quartus Prime", "ModelSim"],
      highlights: ["Custom instruction set", "Complete CPU implementation", "Verified functionality"],
    },
    {
      title: "Lilypad Code Editor",
      period: "March 2023 – Present",
      description: [
        "Developed a next generation dual modal code editor that currently supports Python, Java, and C#",
        "Integrated tree-sitter into Lilypad to enable real-time parsing and syntax highlighting for C# and Rust, extending editor capabilities through custom grammar bindings",
        "Accepted as a short paper/demonstration for VL/HCC 2023 as a result of its importance to Computer Science education research"
      ],
      technologies: ["Rust", "WASM", "Git", "Python", "C#", "Java"],
      highlights: ["Multi-language support", "Real-time parsing", "Published research"],
      githubUrl: "https://github.com/cacticouncil/lilypad"
    },
    {
      title: "CHIP-8 Emulator",
      period: "May 2025",
      description: [
        "Developed a fully functional CHIP-8 emulator in C that interprets and executes original CHIP-8 instructions.",
        "Integrated SDL2 to render 64x32 pixel monochrome display and handle 16-key hexadecimal keyboard inputs.",
        "Implemented instruction decoding and execution for 30+ CHIP-8 opcodes including arithmetic, logic, graphics, and control flow."
      ],
      technologies: [
        "C",
        "SDL2",
        "Emulation"
      ],
      highlights: [
        "Low-level Systems Programming",
        "Function-pointer dispatch for opcode execution",
        "Accurate emulation of CHIP-8 specifications"
      ],
      githubUrl: "https://github.com/Alex-Aron/chip8"
    }
  ];

  const technicalSkills = {
    "Programming Languages": [
      "System Verilog", "VHDL", "Rust", "Python", "C/C++", "Java", "HTML", "C#"
    ],
    "Developer Tools and Frameworks": [
      "Git", "React", "Node.js", "Django", "WASM", "BigQuery", "SQL", "Tailwind", "Docker", "Quartus"
    ]
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
            Projects
          </span>
        </h2>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border-2 border-purple-500/30 rounded-2xl p-8
                       backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.2)]
                       hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300
                       relative"
            >
              {/* GitHub Icon */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-gray-800/80 border border-purple-500/30 
                           rounded-full p-2 backdrop-blur-sm hover:bg-gray-700/80
                           hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <svg 
                    className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 
                               drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    {project.title}
                  </h3>
                </div>
                <div className="lg:text-right mt-4 lg:mt-0">
                  <span className="inline-block bg-purple-600/20 text-purple-300 px-4 py-2 rounded-lg
                                 border border-purple-500/30 font-medium">
                    {project.period}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {project.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-0.5 text-sm">●</span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.highlights && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3
                               drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]">
                    Key Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="bg-purple-600/20 text-purple-200 px-3 py-1 rounded-lg text-sm
                                 border border-purple-500/30 font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-gray-800 text-purple-300 px-3 py-1 rounded-full text-sm
                             border border-purple-500/20 hover:border-purple-500/40
                             transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
              Technical Skills
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border-2 border-purple-500/30 rounded-2xl p-6
                         backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                <h4 className="text-xl font-bold text-white mb-6 text-center
                             drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-800 text-purple-300 px-3 py-2 rounded-lg text-sm
                               border border-purple-500/20 hover:border-purple-500/40
                               transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 border-2 border-purple-500/30 rounded-2xl p-8
                        backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <h3 className="text-2xl font-bold text-white mb-4
                         drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              Want to see more?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Check out my GitHub for more projects and contributions to open source software.
            </p>
            <a 
              href="https://github.com/AlexanderAron" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 
                       text-white px-6 py-3 rounded-lg font-medium transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 