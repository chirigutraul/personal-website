import React from 'react';
import ScrollDownComponent from './ScrollDownComponent';

const HomeSection: React.FC = () => {
  return (
    <section id="about" className="h-screen snap-center bg-gradient-to-b from-black to-gray-900 via-slate-700 text-white p-8 py-16">
      <div>
        <h1 className='text-5xl font-bold mb-16'>About me</h1>
        <div className='flex flex-col gap-8'>
          <h2 className='text-3xl font-bold'>Passionate problem solver.</h2>
          <h2 className='text-3xl font-bold'>Curious tech enthusiast.</h2>
          <h2 className='text-3xl font-bold'>Sociable team player.</h2>
        </div>
      </div>

    </section>
  );
};

export default HomeSection;

