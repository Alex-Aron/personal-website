import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Teaching Assistant - Data Structures and Algorithms",
      company: "University of Florida",
      location: "Gainesville, FL",
      period: "August 2024 – December 2024",
      description: [
        "Led workshops on C++ data structures and algorithms: AVL trees, page-rank, hash tables and graphs",
        "Conducted code reviews that improved code clarity",
        "Developed supplemental study materials and practice problems that reinforced lecture topics and improved student comprehension"
      ],
      technologies: ["C++", "Data Structures", "Algorithms"]
    },
    {
      title: "Teaching Assistant - Digital Logic and Computer Systems",
      company: "University of Florida",
      location: "Gainesville, FL", 
      period: "January 2025 – May 2025",
      description: [
        "Hosted weekly lab sessions and office hours to support student understanding of digital design concepts",
        "Guided students through creating Logic Blocks (HDL modules) in Quartus using VHDL modules",
        "Proctored exams and assisted in grading to ensure fair assessment and timely feedback"
      ],
      technologies: ["VHDL", "Quartus Prime", "Digital Design", "Quartus"]
    },
    {
      title: "2x Software Engineering Intern",
      company: "Home Depot",
      location: "Remote",
      period: "May – July 2024/2025",
      description: [
        "Architected and maintained data pipelines using BigQuery, resulting in a 30% improvement in data processing efficiency and ensuring timely availability of analytics for business decision-making",
        "Collaborated with cross-functional teams to design and deploy scalable data solutions with the use of Docker, enhancing overall data infrastructure",
        "Utilized Python and SQL to optimize data validation, reducing manual data handling by 40%"
      ],
      technologies: ["BigQuery", "Python", "SQL", "Docker", "Data Pipelines"]
    },
    {
      title: "Undergraduate Research Assistant", 
      company: "University of Florida",
      location: "Gainesville, FL",
      period: "January 2023 – Present",
      description: [
        "Utilized React and WASM to develop a dual-modal code editor targeted towards beginner programmers",
        "Assisted in the finalization of research paper focused on compiler usage in CS exams",
        "Found a significant improvement of over 10% in compile-and-run scores through analysis of data comparing pseudo-code and compile-and-run exams"
      ],
      technologies: ["React", "WASM", "Research", "Compiler Design"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
            Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border-2 border-purple-500/30 rounded-2xl p-8
                       backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.2)]
                       hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 
                               drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-purple-300 font-semibold mb-2
                               drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]">
                    {exp.company}
                  </h4>
                  <p className="text-gray-400 text-lg">
                    {exp.location}
                  </p>
                </div>
                <div className="lg:text-right mt-4 lg:mt-0">
                  <span className="inline-block bg-purple-600/20 text-purple-300 px-4 py-2 rounded-lg 
                                 border border-purple-500/30 font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-0.5 text-sm">●</span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 