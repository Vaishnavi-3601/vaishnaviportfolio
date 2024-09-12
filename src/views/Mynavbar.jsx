import React from 'react';
import './home.css';

function MyNavbar() {
  return (
    <nav className="bg-gradient-to-l from-rose-100 py-2 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-16">
        <a href="#home" className="bg-gradient-to-r from-rose-900 to-rose-300 inline-block font-bold text-4xl text-transparent bg-clip-text">VaishnaviTakalikar</a>
        <div className="hidden md:flex space-x-6 animate-fade-in-left delay-200">
          <a href="#home" className="text-gray-800 hover:text-rose-600 custom-underline">Home</a>
          <a href="#about" className="text-gray-800 hover:text-rose-600 custom-underline">About</a>
          <a href="#projects" className="text-gray-800 hover:text-rose-600 custom-underline">Projects</a>
          <a href="#skills" className="text-gray-800 hover:text-rose-600 custom-underline">Skills</a>
          <a href="#contact" className="text-gray-800 hover:text-rose-600 custom-underline">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
