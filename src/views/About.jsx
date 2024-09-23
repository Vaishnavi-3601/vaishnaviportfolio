import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="px-28 md:px-36 mt-8 mb-8 md:mt-0 md:mb-0" id="about">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 md:p-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 " data-aos="fade-right">
          <img
            src={"https://img.freepik.com/free-photo/portrait-beautiful-young-brunette-woman-with-black-hair-white-shirt_1142-51468.jpg?size=626&ext=jpg&ga=GA1.1.399218817.1718110296&semt=ais_hybrid"}
            alt="About Me"
            className="rounded-lg shadow-lg w-full h-auto object-cover about-img"
          />
        </div>

        <div className="w-full md:w-1/2 md:text-left" data-aos="fade-left">
          <div className="bg-white text-black ">
            <h1 className="text-5xl font-extrabold mb-4 text-rose-500">About Me</h1>
            <p className="text-gray-600 mb-8">Passionate software developer with expertise in frontend technologies. 
              Dedicated to crafting visually appealing and user-friendly web applications.            
              </p>

            <div className="mb-8 text-rose-600">
              <p className="mb-4 grid grid-cols-3">
                <span className="font-bold text-lg">Name:</span>
                <span className="text-lg">Vaishnavi Takalikar</span>
              </p>
              <p className="mb-4 grid grid-cols-3">
                <span className="font-bold text-lg">Date of birth:</span>
                <span className="text-lg">June 03, 2001</span>
              </p>
              <p className="mb-4 grid grid-cols-3">
                <span className="font-bold text-lg">Address:</span>
                <span className="text-lg">Vijapur Road, Solapur</span>
              </p>
              <p className="mb-4 grid grid-cols-3">
                <span className="font-bold text-lg">Pin code:</span>
                <span className="text-lg">413004</span>
              </p>
              <p className="mb-4 grid grid-cols-3">
                <span className="font-bold text-lg">Email:</span>
                <span className="text-lg">vaishnavi3601@gmail.com</span>
              </p>
              <p className="grid grid-cols-3">
                <span className="font-bold text-lg">Phone:</span>
                <span className="text-lg">+91 9096833784</span>
              </p>
            </div>

            <a
              href="./Vaishnavi-Resume.pdf"
              target="_blank"
              className="inline-block no-underline mt-8 bg-rose-500 text-white px-6 py-3 font-bold rounded-lg hover:bg-rose-900 transition-colors"
            >
              VIEW RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
