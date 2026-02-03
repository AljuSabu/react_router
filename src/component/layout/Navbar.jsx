import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <nav>
      <header className="p-4 bg-gray-500 text-gray-800">
        <div className="container text-black text-base lg:text-lg flex justify-between h-16 mx-auto">
          <div className="flex items-center p-2 text-xl">
            Logo
          </div>
          <ul
            className={`fixed top-20 right-0 z-50 w-full bg-gray-500 text-white font-medium flex flex-col items-center gap-6 py-6 transform transition-all duration-300 ease-in-out ${showLinks ? "translate-x-0 opacity-100 blur-none" : "translate-x-full opacity-0 blur-sm"} lg:static lg:translate-x-0 lg:flex-row lg:w-auto lg:bg-transparent lg:opacity-100 lg:blur-none lg:py-0`}
          >
            <NavLink to="." className="cursor-pointer flex justify-center items-center lg:w-25 lg:h-13">
              Home
            </NavLink>
            <NavLink to="about" className="cursor-pointer flex justify-center items-center lg:w-25 lg:h-13">
              About
            </NavLink>
            {isLoggedIn ? (
              <NavLink to="cars" className="cursor-pointer flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
                <div className="flex justify-center items-center lg:w-25 lg:h-13">
                  Cars
                </div>
                  <button
                    onClick={logout}
                    className="lg:hover:bg-blue-600 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md shadow-black/50 active:scale-95 active:shadow-inner duration-200 transition-all ease-out lg:w-25 lg:h-13 lg:font-semibold rounded-md lg:border"
                  >
                    Logout
                  </button>
              </NavLink>
            ) : (
              <NavLink to="login" className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
                <button
                  onClick={login}
                  className="lg:border lg:hover:bg-violet-600 lg:hover:scale-105 lg:hover:-translate-y-0.5 lg:hover:shadow-md shadow-black/50 lg:active:scale-95 lg:active:shadow-inner lg:duration-200 transition-none lg:transition-all ease-out lg:w-25 lg:h-13 lg:font-semibold rounded-md "
                >
                  Login
                </button>
                  <button className="lg:bg-violet-700 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md shadow-black/50 active:scale-95 active:shadow-inner duration-200 transition-all ease-out lg:w-25 lg:h-13 lg:font-semibold rounded-md">
                    Sign up
                  </button>
              </NavLink>
            )}
          </ul>
          <button
            onClick={() => {
              setShowLinks((open) => !open);
            }}
            className="lg:hidden h-full w-15"
          >
            {showLinks ? (
              <CloseIcon className="text-3xl! md:text-4xl!" />
            ) : (
              <MenuIcon className="text-3xl! md:text-4xl!" />
            )}
          </button>
        </div>
      </header>
    </nav>
  )
}

export default Navbar