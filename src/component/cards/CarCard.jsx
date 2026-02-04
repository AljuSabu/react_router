import React from 'react'

const CarCard = ({ car }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-linear-to-b from-zinc-900 to-black shadow-md hover:shadow-xl shadow-slate-900 transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.images[0]}
          alt={`${car.name} ${car.series}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <span className="absolute top-4 left-4 rounded-full text-shadow-sm text-shadow-black/25 bg-amber-500/10 px-4 py-1 text-xs tracking-widest text-amber-400 backdrop-blur">
          {car.tagline}
        </span>
      </div>
      <div className="p-6 text-white">
        <h3 className="text-xl font-semibold tracking-wide">
          {car.name}
          <span className="ml-2 text-zinc-400 font-light">
            {car.series}
          </span>
        </h3>
        <p className="mt-3 text-xs md:text-sm text-zinc-400 leading-relaxed">
          {car.shortDescription}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-medium text-amber-400">
            {car.price.display}
          </span>
          <button className="rounded-full border border-amber-400/40 px-4 py-1.5 text-sm text-amber-400 transition-all hover:bg-amber-400 hover:text-black">
            View Details
          </button>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-r from-amber-400/10 via-transparent to-amber-400/10" />
      </div>
    </div>
  );
};

export default CarCard;
