import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <input te="text" placeholder="Your Name" required className="w-full mb-4 p-2 rounded-lg" />
        <input type="email" placeholder="Your Email" required className="w-full mb-4 p-2 rounded-lg" />
        <textarea placeholder="Your Message" required className="w-full mb-4 p-2 rounded-lg"></textarea>
        <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">Send</button>
      </form>
    </section>
  );
};

export default Contact;