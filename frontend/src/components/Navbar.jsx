import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-500 to-orange-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="path/to/your-logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-white ml-2 text-lg font-semibold">
            YourLogo
          </span>
        </div>

        {/* Navigation links on the right */}
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-blue-100 focus:outline-none focus:shadow-outline-blue">
            Login
          </button>
          <button className="bg-black  text-white px-4 py-2 rounded-full hover:bg-blue-100 focus:outline-none focus:shadow-outline-blue">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
