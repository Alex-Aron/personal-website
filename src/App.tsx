import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Purple glow background effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/10 pointer-events-none" />
      <div className="fixed inset-0 bg-purple-500/5 blur-3xl pointer-events-none" />
      
      <Navbar />
      <main className="relative z-10">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
