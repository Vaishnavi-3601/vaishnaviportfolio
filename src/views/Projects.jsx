import React, { useState, useEffect } from 'react';
import './home.css';
import 'aos/dist/aos.css';

const projectData = [
  {
    id: 1,
    name: 'Real Estate Platform',
    description: 'This is the description for Project One.',
     
    images: [
      './Project/fb1.png',
      './Project/fb1.png',
      './Project/fb1.png',
    ],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    name: 'Basic React Project',
    description: 'This is the description for Project One.',
     
    images: [
      './Project/fb1.png',
      './Project/fb2.png',
      './Project/fb3.png'
    ],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    name: 'Online Learning Platform',
    description: 'This is the description for Project One.',
     
    images: [
      './Project/fb1.png',
      './Project/fb2.png',
      './Project/fb3.png'
    ],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    name: 'Weather App',
    description: 'This is the description for Project One.',
     
    images: [
      './Project/fb1.png',
      './Project/fb2.png',
      './Project/fb3.png'
    ],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 5,
    name: 'Random Quote Generator',
    description: 'This is the description for Project One.',
     
    images: [
      './Project/fb1.png',
      './Project/fb2.png',
      './Project/fb3.png'
    ],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 6,
    name: 'Facebook Clone',
    description: 'This is the description for Project One.',
     
    images: [
      './Project/fb1.png',
      './Project/fb2.png',
      './Project/fb3.png'
    ],
    liveLink: '#',
    codeLink: '#',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    let interval;
    if (selectedProject) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); 
    }
    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <section className="py-12  bg-rose-50" id="projects">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-rose-900" data-aos="fade-up">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 project-card  flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay={`${project.id * 80}`}
              onClick={() => handleCardClick(project)}
            >
              <h1 className="text-4xl md:text-5xl lg:text-5xl bg-gradient-to-r from-rose-900 to-rose-300 inline-block font-bold text-transparent bg-clip-text text-center" data-aos="fade-up" data-aos-delay="200">
            {project.name}
          </h1>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-black"
                onClick={closeModal}
              >
                &#10005;
              </button>
              <h3 className="text-2xl font-semibold mb-4">{selectedProject.name}</h3>
              <p className="mb-4">{selectedProject.description}</p>

              {/* Carousel */}
              <div className="relative w-full h-68 mb-4">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div className="flex space-x-4 mt-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors no-underline"
                >
                  Live Review
                </a>
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors no-underline"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
