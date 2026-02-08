import React, { useState } from "react";
import CarCard from "../component/cards/CarCard";
import { data } from "../data/data";
import { Helmet } from "react-helmet";
import { Link, useSearchParams } from "react-router-dom";
import PageTransition from "../component/ui/PageTransition";
import SearchBar from "../component/cards/SearchBar";
import CarCrashIcon from "@mui/icons-material/CarCrash";

const Cars = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [carSearch, setCarSearch] = useState("");
  const [searchParams] = useSearchParams();

  const categories = ["All", "Rolls-Royce", "Ferrari", "Lamborghini"];

  const nameFilter = searchParams.get("name");

  const generateSearchParamsString = (key, value) => {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  };

  const filteredCars = data
    .filter((car) => {
      const term = carSearch.toLowerCase();
      if (!term) return true;
      return (
        car.name.toLowerCase().includes(term) ||
        car.series.toLowerCase().includes(term)
      );
    })
    .filter((car) => {
      if (!nameFilter) return true;
      return car.name.toLowerCase() === nameFilter;
    });

  return (
    <>
      <Helmet>
        <title>Cars AutoElite</title>
      </Helmet>

      <PageTransition>
        <div className="min-h-screen pt-36 pb-20 px-5 md:px-10 lg:px-15 xl:px-20 2xl:px-30">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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

            <div className="flex gap-10">
              <SearchBar searchTerm={carSearch} setSearchTerm={setCarSearch} />
              <div className="flex items-center p-2 bg-slate-900 border border-white/10 rounded-full">
                {categories.map((item) => (
                  <Link
                    key={item}
                    to={
                      item === "All"
                        ? null
                        : generateSearchParamsString("name", item.toLowerCase())
                    }
                  >
                    <button
                      onClick={() => {
                        setActiveFilter(item);
                      }}
                      className={`px-6 py-2 rounded-full text-xs md:text-base xl:text-lg font-bold transition-all ${
                        activeFilter === item
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-15 xl:mt-20">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <div key={car.id}>
                  <Link to={`${car.id}`}>
                    <CarCard car={car} />
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full py-32 flex flex-col items-center justify-center text-slate-500 border border-dashed border-white/10 rounded-3xl">
                <CarCrashIcon className="text-9xl! mb-4 opacity-20" />
                <p className="text-xl">No cars found matching your criteria.</p>
                <button
                  onClick={() => {
                    setCarSearch("");
                  }}
                  className="mt-4 text-blue-500 hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default Cars;
