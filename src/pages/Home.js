import React from "react";
import ImageCarousel from "../components/Carousel/ImageCarousel";
import CarouselSubtext from "../components/Carousel/CarouselSubtext";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();
  console.log("PARAMS:", params);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ImageCarousel />
      <CarouselSubtext />
    </div>
  );
};

export default Home;
