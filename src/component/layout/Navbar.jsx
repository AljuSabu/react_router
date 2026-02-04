import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  //For Login
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLinks(false);
  };

  //For Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLinks(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md border-b border-white/20 p-4">
      <div className="container text-xs md:text-base xl:text-lg flex justify-between h-15 lg:h-13 xl:h-15 mx-auto">
        <span className="flex items-center font-bold tracking-tighter text-white p-2 text-xl lg:text-2xl xl:text-3xl">
          AUTO<span className="text-blue-500">ELITE</span>
        </span>
        <div
          className={`fixed top-20 right-0 z-50 w-full text-white font-medium flex flex-col items-center gap-6 py-6 transform transition-all duration-300 ease-in-out ${showLinks ? "translate-x-0 opacity-100 blur-none bg-linear-to-br from-slate-900/95 via-black/95 to-slate-900/95" : "translate-x-full opacity-0 blur-sm"} lg:static lg:translate-x-0 lg:flex-row lg:w-auto lg:bg-transparent lg:opacity-100 lg:blur-none lg:py-0`}
        >
          <NavLink
            to="/"
            onClick={() => setShowLinks(false)}
            className={({ isActive }) =>
              `cursor-pointer flex justify-center items-center lg:w-25 lg:h-13 hover:text-white transition-colors ${isActive ? "text-white" : "text-white/60 "}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cars"
            onClick={() => setShowLinks(false)}
            className={({ isActive }) =>
              `cursor-pointer flex justify-center items-center lg:w-25 lg:h-13 hover:text-white transition-colors ${isActive ? "text-white" : "text-white/60 "}`
            }
          >
            Cars
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setShowLinks(false)}
            className={({ isActive }) =>
              `cursor-pointer flex justify-center items-center lg:w-25 lg:h-13 hover:text-white transition-colors ${isActive ? "text-white" : "text-white/60 "}`
            }
          >
            About
          </NavLink>
          {isLoggedIn ? (
            <div className="cursor-pointer flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
              <NavLink
                to="admin"
                onClick={() => setShowLinks(false)}
                className={({ isActive }) =>
              `cursor-pointer flex justify-center items-center lg:w-25 lg:h-13 hover:text-white transition-colors ${isActive ? "text-white" : "text-white/60 "}`}
              >
                Admin
              </NavLink>
              <NavLink to="/">
                <button
                  onClick={handleLogout}
                  className="lg:hover:bg-white/30 lg:hover:scale-105 lg:hover:-translate-y-0.5 lg:hover:shadow-md shadow-black/50 lg:active:scale-95 lg:active:shadow-inner duration-200 transition-none lg:transition-all ease-out lg:w-25 lg:h-13 lg:font-semibold rounded-lg lg:border border-white/40"
                >
                  Logout
                </button>
              </NavLink>
            </div>
          ) : (
            <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
              <NavLink
                to="/login"
                onClick={handleLogin}
                className={({ isActive }) =>
                  `cursor-pointer flex justify-center items-center rounded-lg transition-colors ${isActive ? "text-white" : "text-white/60 hover:text-white"} lg:border lg:border-white/40 lg:text-white lg:hover:bg-white/30 lg:hover:scale-105 lg:hover:-translate-y-0.5 lg:active:scale-95 lg:duration-200 lg:transition-all lg:ease-out lg:w-25 lg:h-13 lg:font-semibold`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setShowLinks(false)}
                className={({ isActive }) =>
                  `cursor-pointer flex justify-center items-center rounded-lg transition-colors ${isActive ? "text-white" : "text-white/60 hover:text-white"} lg:bg-blue-600 lg:text-white lg:hover:bg-blue-500 lg:hover:scale-105 lg:hover:-translate-y-0.5 lg:active:scale-95 lg:duration-200 lg:transition-all lg:ease-out lg:w-25 lg:h-13 lg:font-semibold`
                }
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            setShowLinks((open) => !open);
          }}
          className="lg:hidden h-full w-15 text-white border-none"
        >
          {showLinks ? (
            <CloseIcon className="text-3xl! md:text-4xl!" />
          ) : (
            <MenuIcon className="text-3xl! md:text-4xl!" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
