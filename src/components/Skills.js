 import React from 'react';
 
 const Skills = () => {
   return (
     <section id="skills" className="p-10 text-gray-800">
       <h2 className="text-3xl font-bold text-center mb-6 text-white">My Skills</h2>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="p-4 bg-gray-100 text-center rounded-lg shadow-lg">React</div>
         <div className="p-4 bg-gray-100 text-center rounded-lg shadow-lg">Node.js</div>
         <div className="p-4 bg-gray-100 text-center rounded-lg shadow-lg">JavaScript</div>
         <div className="p-4 bg-gray-100 text-center rounded-lg shadow-lg">CSS</div>
       </div>
     </section>
   );
 };
 
 export default Skills;