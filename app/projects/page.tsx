"use client";

import React from "react";
import { motion } from "framer-motion";
import "@/app/style/project.css"; // Import CSS file

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Sanity.",
    link: "https://ecommerce-hackathon-g82z-git-main-maheenshah12s-projects.vercel.app/",
  },
  {
    title: "Amazon Clone",
    description: "An Amazon Clone using Next.js and Tailwind CSS.",
    link: "https://amazon-clone-xi-dusky.vercel.app/",
  },
  {
    title: "Resume Builder",
    description: "An interactive resume builder with dynamic templates.",
    link: "https://milesstone5-beta.vercel.app/",
  },
  {
    title: "Blog Platform",
    description: "A dynamic blog platform with user authentication and CMS.",
    link: "https://dynamic-blog-black.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <section className="projects-container">
      {/* Top Decorative Line */}
      <div className="decorative-line"></div>

      {/* Heading */}
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
