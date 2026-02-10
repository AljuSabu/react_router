import Slider from "react-slick";
import PageTransition from "../component/ui/PageTransition";
import { data } from "../data/data";
import ImgCard from "../component/cards/ImgCard";
import InfoCard from "../component/cards/InfoCard";
import { useState } from "react";
import { Helmet } from "react-helmet";
import SearchBar from "../component/cards/SearchBar";
import CarCard from "../component/cards/CarCard";
import { useSearchParams, Link, NavLink } from "react-router-dom";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [homeSearchTerm, setHomeSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("name"));
  const nameFilter = searchParams.get("name");
  // console.log(nameFilter);

  const generateSearchParamsString = (key, value) => {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    // console.log(sp.toString());
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

  return (
    <>
      <Helmet>
        <title>Home AutoElite</title>
      </Helmet>
      <PageTransition>

        <section className="relative min-h-screen overflow-hidden py-10 md:py-0 lg:py-15 xl:py-5">
          {/* BLURED BACKGROUND */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-3xl"
            style={{
              backgroundImage: `url(${data[activeIndex].images[0]})`,
            }}
          />

          {/* DARK LAYER */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTENT */}
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
                    onClick={() => {
                      setActiveFilter(item);
                    }}
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
            {data
              .filter((item) => {
                return homeSearchTerm.toLowerCase() === ""
                  ? item
                  : item.name
                      .toLowerCase()
                      .includes(homeSearchTerm.toLowerCase());
              })
              .filter((item) => {
                return nameFilter
                  ? item.name.toLowerCase() === nameFilter
                  : item;
              })
              .map((item) => (
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
