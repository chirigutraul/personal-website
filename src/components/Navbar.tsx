import { useState } from 'react';
import { Menu } from 'react-feather';

const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(true);

  const toggleMobileNavbar = () => {
    setMobileNavbar(curr => !curr);
  };

  return (
    <nav className="bg-gray-800 bg-opacity-40 fixed left-0 right-0 text-blue-50 p-4">
      <div className='hidden desktop-navbar md:flex items-center justify-between'>
        <h1 className="text-2xl font-medium font-sans">Chirigut Raul</h1>
        <ul className="flex justify-between items-center text-lg font-medium">
          <li className="p-2 hover:bg-gray-700 rounded-md">
            <a href="#home">Home</a>
          </li>
          <li className="p-2 hover:bg-gray-700 rounded-md">
            <a href="#about">About</a>
          </li>
          <li className="p-2 hover:bg-gray-700 rounded-md">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className='mobile-navbar md:hidden'>
        <div className='flex justify-between items-center'>
          <h1 className="text-2xl font-medium font-sans">Chirigut Raul</h1>
          <Menu onClick={toggleMobileNavbar} className='cursor-pointer' />
        </div>
        <ul
          className={`${mobileNavbar ? 'hidden' : 'flex'} 
        flex-col items-end text-lg font-medium 
        `}
        >
          <li className="p-2 hover:bg-gray-700 bg-opacity-40 rounded-md">
            <a href="#home">Home</a>
          </li>
          <li className="p-2 hover:bg-gray-700 bg-opacity-40 rounded-md">
            <a href="#about">About</a>
          </li>
          <li className="p-2 hover:bg-gray-700 bg-opacity-40 rounded-md">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
