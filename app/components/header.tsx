"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import vector from "@/app/assets/Vector.png"; 
import Humburger from "@/app/assets/humburger.png";
import "@/app/style/header.css"; // Import custom CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      {/* Navbar Section */}
      <div className="navbar">
        {/* Logo (Aligned to the Left) */}
        <div className="logo">
          <Link href={"/"}>Portfolio.com</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <Image
            src={Humburger}
            alt="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
          />
        </div>

        {/* Navigation Links for larger screens */}
        <ul className="nav-links">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contacts</Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu Content */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Menu Header (Portfolio.com with Close Icon) */}
        <div className="menu-header">
          <h2 className="logo">Portfolio.com</h2>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <Image src={vector} alt="Close" />
          </button>
        </div>

        {/* Menu Items */}
        <ul>
          <li>
            <Link href={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
