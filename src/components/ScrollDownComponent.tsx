import React from 'react';
import { ChevronsDown } from 'react-feather';

interface ScrollDownComponentProps {
  nextSectionId: string;
}

const ScrollDownComponent: React.FC<ScrollDownComponentProps> = ({ nextSectionId }) => {

  function scrollToNextSection() {
    const nextElement = document.getElementById(nextSectionId);
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='absolute z-10 bottom-16 border-2 px-1 py-4 rounded-full text-white cursor-pointer' onClick={scrollToNextSection}>
      <ChevronsDown size={32} className='animate-bounce' />
    </div>
  );
};

export default ScrollDownComponent;
