import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="project-image.jpg" alt="Project Title" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Project Title</h3>
            <p className="text-gray-600">Project description goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;