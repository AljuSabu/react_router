import React from "react";

const ImgCard = ({ image, name }) => {
  return (
    <div className=" bg-white w-full lg:w-120 xl:w-150 2xl:w-200 h-50 md:h-70 lg:h-80 xl:h-100 2xl:h-150">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-center object-cover "
      />
    </div>
  );
};

export default ImgCard;
