import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

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
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
