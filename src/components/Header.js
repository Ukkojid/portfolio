import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white pl-10 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold"><a href='/'>Deepak Ukkoji</a></div>
      <nav>
        <ul className="flex space-x-4 pr-10">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
      {/* <button className="bg-gray-700 p-2 rounded-full">🌙</button> */}
    </header>
  );
};

export default Header;