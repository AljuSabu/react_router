import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";
import PageTransition from "../component/ui/PageTransition";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CarSinglePage = () => {
  // const params = useParams()
  // console.log(params);

  const { id } = useParams();

  const car = data.find((item) => Number(item.id) === Number(id));
  console.log(car);

  return (
    <>
      <PageTransition>
        <div>CarSinglePage</div>
      </PageTransition>

      <div className="relative min-h-screen overflow-hidden">
        {/* BLURED BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-3xl"
          style={{
            backgroundImage: `url(${car.images})`,
          }}
        />

        {/* DARK LAYER */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 min-h-screen pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <Link to="/cars" className="mb-8 w-45 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
              <ArrowBackIcon className="group-hover:-translate-x-1 transition-transform" />
              Back to Catalog
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image Section */}
              <div className="space-y-6">
                <div className="relative aspect-16/10 rounded-3xl overflow-hidden border border-white/10 group">
                  <img
                    src={car.images[0]}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <span className="absolute top-4 left-4 rounded-full text-shadow-sm text-shadow-black/25 bg-amber-500/10 px-4 py-1 text-xs tracking-widest text-amber-400 backdrop-blur">
                    {car.tagline}
                  </span>
                </div>

                <div className="flex lg:flex-col  gap-4">
                  {car.specs.map((item) => (
                    <div className="lg:pl-10 p-5 border-l lg:border-b border-white/10 flex items-center text-center">
                      <span className="text-lg font-bold text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-blue-500 font-bold tracking-[0.2em] uppercase">
                    {car.name} Legacy
                  </p>
                  <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    {car.series}
                  </h1>
                  <p className="text-2xl text-slate-400 font-light italic">
                    {car.year} Limited Edition
                  </p>
                </div>

                <div className="flex items-center gap-6 py-6 border-y border-white/10">
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">
                      Retail Price
                    </p>
                    <p className="text-4xl font-black text-blue-400">
                      ₹ {car.price.min.toLocaleString()}
                    </p>
                  </div>
                  <div className="h-12 w-px bg-white/10"></div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">
                      Availability
                    </p>
                    <p className="text-lg font-bold text-green-500 flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                      In Stock
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                    The Experience
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed font-light">
                    {car.shortDescription}
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    {car.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <button className="px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-95">
                    Reserve Now
                  </button>
                  <button className="px-8 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest transition-all">
                    Book Test Drive
                  </button>
                </div>

                <div className="p-5 px-15 flex items-center justify-between text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-2">
                    <CheckCircleIcon className="text-blue-500" />
                    Free Delivery
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircleIcon className="text-blue-500" /> 5 Year
                    Warranty
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircleIcon className="text-blue-500" />
                    24/7 Roadside
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarSinglePage;
