import Slider from "react-slick";
import PageTransition from "../component/ui/PageTransition";
import { data } from "../data/data";
import ImgCard from "../component/cards/ImgCard";
import InfoCard from "../component/cards/InfoCard";
import { useState } from "react";
import { Helmet } from "react-helmet";
import SearchBar from "../component/cards/SearchBar";
import CarCard from "../component/cards/CarCard";
import { useSearchParams, Link } from "react-router-dom";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [homeSearchTerm, setHomeSearchTerm] = useState("")

  const [searchParams] = useSearchParams()
  // console.log(searchParams.get("name"));
  const nameFilter = searchParams.get("name")
  // console.log(nameFilter);

  const generateSearchParamsString =(key,value)=>{
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    }else{
      sp.set(key,value)
    }
    // console.log(sp.toString());
    return `?${sp.toString()}`
  }


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


          <div className="flex justify-center gap-40 mb-20">
            <SearchBar searchTerm={homeSearchTerm} setSearchTerm={setHomeSearchTerm} />
            <div className="border text-slate-500 z-10 flex gap-10 bg-slate-900 border-white/10 rounded-full focus:outline-none focus:border-blue-500 transition-all pl-12 md:pl-15 py-3 xl:py-4 px-10 text-xs md:text-base xl:text-lg xl:min-w-100">
              <Link to={generateSearchParamsString("name","rolls-royce")}>
                <div className="cursor-pointer">Rolls-Royce</div>
              </Link>
              <Link to={generateSearchParamsString("name","ferrari")}>
                <div className="cursor-pointer">Ferrari</div>
              </Link>
              <Link to={generateSearchParamsString("name","lamborghini")}>
                <div className="cursor-pointer">Lamborghini</div>
              </Link>
              <Link to=".">
              <div className="cursor-pointer">All</div>
              </Link>
            </div>
          </div>

          <div className="grid gap-10 p-10 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-15 xl:mt-20">
            {data
              .filter((item) => {
                return homeSearchTerm.toLowerCase() === "" ? item : item.name.toLowerCase().includes(homeSearchTerm.toLowerCase())
              })
              .filter(item => {
                return nameFilter ? item.name.toLowerCase() === nameFilter : item
              })
              .map((item) => (
                <div key={item.id}>
                  <CarCard car={item} />
                </div>
              ))}

          </div>

        </section>
      </PageTransition>
    </>
  );
};

export default Home;
