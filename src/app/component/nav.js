
// import React from 'react'

// export default function Nav() {
//   return (
//     <div>

// <header className="text-gray-600 body-font bg-white">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span className="ml-3 text-xl">Anaika </span>
//     </a>
//     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 hover:text-gray-900" href='/'>Home</a>
//       <a className="mr-5 hover:text-gray-900" href="#workshop">Workshop</a>
//       <a className="mr-5 hover:text-gray-900">Show Reels</a>
//       <a className="mr-5 hover:text-gray-900" href='/gallery'>Gallery</a>
//       <a className="mr-5 hover:text-gray-900">Green Governance</a>
//     </nav>
//     <button className="inline-flex items-center bg-blue-500  text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact Us
//       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg>
//     </button>
//   </div>
// </header> 


//     </div>
//   )
// }

"use client";

import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on mobile
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-20 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-base">
          <a href="/" className="hover:text-green-600 transition text-green-400">Home</a>
          <a onClick={(e) => scrollToSection(e, "workshop")} className="cursor-pointer hover:text-green-600 text-green-400 transition">Workshop</a>
          <a onClick={(e) => scrollToSection(e, "showreels")} className="cursor-pointer hover:text-green-600 text-green-400 transition">Show Reels</a>
          <a href="/gallery" className="hover:text-green-600 text-green-400 transition">Gallery</a>
          <a onClick={(e) => scrollToSection(e, "green-governance")} className="cursor-pointer hover:text-green-600 text-green-400 transition">Green Governance</a>
        </nav>

        {/* Contact Button */}
        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col gap-4 p-4 text-base">
            <a href="/" onClick={() => setIsOpen(false)}>Home</a>
            <a onClick={(e) => scrollToSection(e, "workshop")}>Workshop</a>
            <a onClick={(e) => scrollToSection(e, "showreels")}>Show Reels</a>
            <a href="/gallery" onClick={() => setIsOpen(false)}>Gallery</a>
            <a onClick={(e) => scrollToSection(e, "green-governance")}>Green Governance</a>
            <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded-full text-center">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
}

