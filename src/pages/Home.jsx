import Slider from "react-slick";
import { data } from "../data/data";
import ImgCard from "../component/cards/ImgCard";
import InfoCard from "../component/cards/InfoCard";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
                  <div className="w-full min-h-100 flex flex-col lg:flex-row items-center justify-between gap-5 p-5">
                    <InfoCard car={car} />
                    <ImgCard image={car.images[0]} name={car.name} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
