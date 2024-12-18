import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-10">
      <div className="max-w-4xl mx-auto text-center">
        <img src="./images/profileimg.jpeg" alt="Your Name" className="w-40 h-40 mx-auto rounded-full mb-4" />
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-4">I'm a developer passionate about building amazing applications with great user experiences.</p>
        <ul className="flex justify-center space-x-4">
          <li className="bg-purple-500 text-white px-4 py-2 rounded-lg">React.js</li>
          <li className="bg-indigo-500 text-white px-4 py-2 rounded-lg">Node.js</li>
          <li className="bg-gray-800 text-white px-4 py-2 rounded-lg">JavaScript</li>
        </ul>
      </div>
    </section>
  );
};

export default About;