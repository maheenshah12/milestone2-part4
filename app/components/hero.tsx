"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "@/app/style/hero.css"; // Import custom CSS

const HomePage = () => {
  return (
    <section className="home-container">
      <motion.div
        className="home-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I am a Frontend Developer
        </motion.h1>
        <motion.p
          className="home-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I specialize in <strong>Next.js, TypeScript, and Tailwind CSS</strong>, crafting high-performance,
          visually stunning web applications. Passionate about <strong>AI, Cloud Computing, and Automation</strong>,
          I strive to build seamless digital experiences that push technology forward.
        </motion.p>
        <motion.div
          className="button-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/projects">
            <button className="home-button">View Projects</button>
          </Link>
          <Link href="/contact">
            <button className="home-button">Contact Me</button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomePage;
