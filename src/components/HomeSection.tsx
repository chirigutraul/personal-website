import React from 'react';
import ScrollDownComponent from './ScrollDownComponent';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-t from-black via-slate-700  to-gray-900 h-screen grid place-items-center snap-center">
      <div className='flex flex-col gap-8 text-center absolute z-10'>
        <h1 className='text-5xl md:text-7xl font-bold text-blue-50'>Chirigut Raul</h1>
        <h1 className='text-5xl md:text-7xl font-bold text-blue-50'>Full Stack Developer</h1>
      </div>
      <div className='absolute'>
        <img src="./images/stonks-man.webp" alt="" />
      </div>
      <ScrollDownComponent nextSectionId={"about"} />
    </section>
  );
};

export default HomeSection;

