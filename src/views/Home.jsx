import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative home" id="home">
      <div className="absolute inset-0">
        <img 
          src='./img/main.jpg'
          alt="Hero Background" 
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-24">
        <div className="max-w-lg text-rose-600 space-y-4">
          <p className="text-lg md:text-xl lg:text-3xl" data-aos="fade-up">
            Hello!
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold" data-aos="fade-up" data-aos-delay="200">
            I'm Vaishnavi Takalikar
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl" data-aos="fade-up" data-aos-delay="400">
            A Web Designer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
