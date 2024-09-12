import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 50 },
  { name: 'Java', level: 65 },
  { name: 'Git', level: 60 },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12" id="skills">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-boldtext-5xl font-extrabold mb-4 text-rose-500 py-8" data-aos="fade-up">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative pt-1"
              data-aos="fade-up" // Changed to 'fade-up' for all items
              data-aos-delay={`${index * 300}`} // Adding a slight delay for each skill
            >
              <div className="flex justify-between text-sm font-medium mb-1 ">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="flex items-center  pb-10">
                <div className="w-full bg-gray-200 h-2.5  rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-900 text-center text-xs text-white leading-none"
                    style={{ width: `${skill.level}%` }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
