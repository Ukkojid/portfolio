import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      {/* Motion Wrapper */}
      <div className="text-center p-10">
        {/* Animated Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to <span className="text-yellow-400">My Portfolio</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          A Creative Space for Innovation and Design
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg hover:bg-yellow-300 transition">
            View My Work
          </button>
          <button className="px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-200 transition">
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
