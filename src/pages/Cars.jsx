import React from "react";
import CarCard from "../component/cards/CarCard";
import { data } from "../data/data";
import SearchIcon from "@mui/icons-material/Search";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Cars = () => {
  return (
    <>
      <Helmet>
        <title>Cars AutoElite</title>
      </Helmet>
      <div className="pt-36 pb-20 px-5 md:px-10 lg:px-15 xl:px-20 2xl:px-30">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 2xl:mr-40">
          <div className="space-y-5">
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-black text-white">
              The Catalog
            </h1>
            <p className="text-slate-400 text-xs md:text-base xl:text-xl max-w-2xl">
              Discover our curated selection of high-performance luxury
              vehicles.
            </p>
          </div>

          <div className="relative text-white ">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 md:text-3xl! xl:text-4xl!" />
            <input
              type="text"
              placeholder="Search models..."
              className="bg-slate-900 border border-white/10 rounded-full focus:outline-none focus:border-blue-500 transition-all pl-12 md:pl-15 py-3 xl:py-4 text-xs md:text-base xl:text-lg w-full md:w-70 lg:w-80 xl:w-100"
            />
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-15 xl:mt-20">
          {data.map((car) => (
            <div key={car.id}>
              <Link to={`${car.id}`}>
                <CarCard car={car} />
              </Link>
            </div>

          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
