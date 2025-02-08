"use client";

import React from "react";
import { motion } from "framer-motion";
import "@/app/style/contact.css"; // Import custom CSS

const ContactPage = () => {
  return (
    <section className="contact-container">
      {/* Top Decorative Line */}
      <div className="decorative-line"></div>

      {/* Heading */}
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Form Container */}
      <motion.div
        className="contact-form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <form action="#" method="POST" className="form">
          {/* Name Field */}
          <div>
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="form-label">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="form-input"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactPage;
