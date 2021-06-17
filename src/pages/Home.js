import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import CarouselSubtext from "../components/CarouselSubtext";

const Home = () => {
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
