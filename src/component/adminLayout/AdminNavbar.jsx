import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <>
            <nav className='fixed top-30 h-20 font-semibold bg-linear-to-r from-slate-900 via-black to-slate-900 min-w-2xl flex justify-between items-center px-10 border border-white/20 text-base rounded-full'>
                <NavLink
                    to=""
                    className={({ isActive }) =>
                        `cursor-pointer flex justify-center items-center lg:w-25 lg:h-13 hover:text-white transition-colors ${isActive ? "text-white" : "text-white/60 "}`
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    className={({ isActive }) =>
                        `cursor-pointer flex justify-center items-center lg:w-25 lg:h-13 hover:text-white transition-colors ${isActive ? "text-white" : "text-white/60 "}`
                    }
                >
                    Income
                </NavLink>
                <NavLink
                    to="review"
                    className={({ isActive }) =>
                        `cursor-pointer flex justify-center items-center lg:w-25 lg:h-13 hover:text-white transition-colors ${isActive ? "text-white" : "text-white/60 "}`
                    }
                >
                    Review
                </NavLink>
            </nav>
        </>

    )
}

export default AdminNavbar