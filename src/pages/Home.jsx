import Slider from "react-slick";
import PageTransition from "../component/ui/PageTransition";
import { data } from "../data/data";
import ImgCard from "../component/cards/ImgCard";
import InfoCard from "../component/cards/InfoCard";
import { useState, useMemo, memo } from "react";
import { Helmet } from "react-helmet";
import SearchBar from "../component/cards/SearchBar";
import CarCard from "../component/cards/CarCard";
import { useSearchParams, Link } from "react-router-dom";

const BlurredBg = memo(function BlurredBg({ image }) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
});

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [homeSearchTerm, setHomeSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const [searchParams] = useSearchParams();
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

  const cat = ["All", "Rolls-Royce", "Ferrari", "Lamborghini"];

  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  const filteredCars = useMemo(() => {
    return data
      .filter((item) =>
        homeSearchTerm.toLowerCase() === ""
          ? true
          : item.name.toLowerCase().includes(homeSearchTerm.toLowerCase()),
      )
      .filter((item) =>
        nameFilter ? item.name.toLowerCase() === nameFilter : true,
      );
  }, [homeSearchTerm, nameFilter]);

  return (
    <>
      <Helmet>
        <title>Home AutoElite</title>
      </Helmet>

      <PageTransition>
        <section className="overflow-hidden">
          {/* HERO — the ONLY part that owns the blurred bg + overlay.
              Contained to min-h-screen so it can't bleed into content below. */}
          <div className="relative min-h-screen py-10 md:py-0 lg:py-15 xl:py-5">
            <BlurredBg image={data[activeIndex].images[0]} />
            <div className="absolute inset-0 " />

            <div className="relative z-10 min-h-screen flex items-center justify-center">
              <div className="w-full max-w-150 lg:max-w-250 xl:max-w-300 2xl:max-w-400 p-5">
                <Slider {...settings}>
                  {data.map((car) => (
                    <div key={car.id}>
                      <div className="w-full mx-auto min-h-100 flex flex-col lg:flex-row items-center justify-between gap-10 p-5">
                        <InfoCard car={car} />
                        <ImgCard image={car.images[0]} name={car.name} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* BELOW CONTENT — normal flow, no positioned ancestors from the hero
              interfering with it anymore */}
          <div className="flex flex-col md:flex-row justify-center px-5 md:px-0 gap-5 lg:gap-20 xl:gap-30 2xl:gap-40 lg:mb-20">
            <SearchBar
              searchTerm={homeSearchTerm}
              setSearchTerm={setHomeSearchTerm}
            />
            <div className="flex justify-between items-center z-10 p-2 bg-slate-900 border border-white/10 rounded-full">
              {cat.map((item) => (
                <Link
                  key={item}
                  to={
                    item === "All"
                      ? null
                      : generateSearchParamsString("name", item.toLowerCase())
                  }
                >
                  <button
                    onClick={() => setActiveFilter(item)}
                    className={`p-3 md:px-4 2xl:px-6 py-1 xl:py-1.5 rounded-full text-xs md:text-base xl:text-lg font-bold transition-all ${
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

          <div className="grid gap-10 p-10 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-15 xl:mt-20">
            {filteredCars.map((item) => (
              <div key={item.id}>
                <Link to={`${item.id}`}>
                  <CarCard car={item} />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </PageTransition>
    </>
  );
};

export default Home;
