import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Stephen Mov</h1>
        <div>
          <a
            href="#about"
            className="text-white hover:bg-blue-600 transition duration-300 px-4 py-2 rounded-lg"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:bg-blue-600 transition duration-300 px-4 py-2 rounded-lg"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:bg-blue-600 transition duration-300 px-4 py-2 rounded-lg"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
