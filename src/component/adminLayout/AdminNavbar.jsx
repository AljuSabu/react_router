import React from "react";
import { NavLink } from "react-router-dom";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AdminNavbar = () => {
  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed z-10 top-23 md:top-25 xl:top-28 h-12 md:h-16 xl:h-20 w-full md:max-w-min backdrop-blur-sm text-xs md:text-base xl:text-lg font-semibold bg-linear-to-r from-slate-900/60 via-black/60 to-slate-900/60 flex justify-between items-center px-5 md:px-10 md:gap-10 xl:gap-20 border-y md:border border-white/20 md:rounded-full"
    >
      <NavLink
        to=""
        className={({ isActive }) =>
          `cursor-pointer flex justify-center items-center hover:text-white transition-colors ${
            isActive ? "text-blue-500" : "text-white/60"
          }`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="income"
        className={({ isActive }) =>
          `cursor-pointer flex justify-center items-center gap-0.5 md:gap-1 xl:gap-2 hover:text-white transition-colors ${
            isActive ? "text-white" : "text-white/60"
          }`
        }
      >
        <CurrencyRupeeIcon className="text-base! md:text-xl! xl:text-2xl!" />
        Income
      </NavLink>

      <NavLink
        to="inventory"
        className={({ isActive }) =>
          `cursor-pointer flex justify-center items-center gap-0.5 md:gap-1 xl:gap-2 hover:text-white transition-colors ${
            isActive ? "text-white" : "text-white/60"
          }`
        }
      >
        <DirectionsCarIcon className="text-base! md:text-xl! xl:text-2xl!" />
        Inventory
      </NavLink>

      <NavLink
        to="review"
        className={({ isActive }) =>
          `cursor-pointer flex justify-center items-center gap-0.5 md:gap-1 xl:gap-2 hover:text-white transition-colors ${
            isActive ? "text-white" : "text-white/60"
          }`
        }
      >
        <StarIcon className="text-base! md:text-xl! xl:text-2xl!" />
        Review
      </NavLink>
    </motion.nav>
  );
};

export default AdminNavbar;
