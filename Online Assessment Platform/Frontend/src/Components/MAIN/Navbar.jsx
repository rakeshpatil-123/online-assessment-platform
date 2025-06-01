import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    const handleStorage = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [setIsLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("You have been logged out successfully");
    navigate("/");
    setTimeout(() => setIsLoggedIn(false), 0);
  };

  return (
    <div className="h-16 w-full bg-gray-300 flex items-center justify-around">
      <div className="w-1/3">
        <Link to="/" className="text-2xl font-bold">
          SNAP
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <Link to="/certifications" className="hover:text-blue-500">
          Certifications
        </Link>
        <Link to="/jobbootcamp" className="hover:text-blue-500">
          Job Bootcamp
        </Link>
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/signup" className="hover:text-blue-500">
              Sign Up
            </Link>
            <Link to="/login" className="hover:text-blue-500">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
