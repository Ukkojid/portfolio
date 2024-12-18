import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-gray-400">LinkedIn</a>
        <a href="#" className="hover:text-gray-400">GitHub</a>
        <a href="#" className="hover:text-gray-400">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;