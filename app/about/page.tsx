"use client";

import React from "react";
import { motion } from "framer-motion";
import "@/app/style/about.css"; // Import custom CSS

const About = () => {
  return (
    <motion.section
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="about-card"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="about-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="about-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          As a dedicated Frontend Developer, I thrive on crafting intuitive and engaging user experiences.
          My expertise in Next.js, TypeScript, and modern web technologies enables me to build high-performance,
          scalable, and visually stunning web applications that seamlessly merge design with functionality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="about-button">Learn More</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
