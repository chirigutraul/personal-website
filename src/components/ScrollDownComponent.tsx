import React, { useCallback } from 'react';
import { ChevronsDown } from 'react-feather';

interface ScrollDownComponentProps {
  nextSectionId: string;
}

const ScrollDownComponent: React.FC<ScrollDownComponentProps> = ({ nextSectionId }) => {

  const scrollToNextSection = useCallback(function () {
    const nextElement = document.getElementById(nextSectionId);
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [nextSectionId]);

  return (
    <div className='absolute z-10 bottom-16 border-2 px-1 py-4 rounded-full text-white cursor-pointer left-1/2 transform -translate-x-1/2' onClick={scrollToNextSection}>
      <ChevronsDown size={32} className='animate-bounce' />
    </div>
  );
};

export default ScrollDownComponent;
