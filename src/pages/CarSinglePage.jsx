import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";
import PageTransition from "../component/ui/PageTransition";

const CarSinglePage = () => {
  // const params = useParams()
  // console.log(params);

  const { id } = useParams();

  const cars = data.find((item) => Number(item.id) === Number(id));
  console.log(cars);

  return (
    <>
      <PageTransition>
        <div className="min-h-screen" >CarSinglePage</div>
      </PageTransition>
    </>
  );
};

export default CarSinglePage;
