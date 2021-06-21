import React from "react";
import ImageCarouselTest from "../components/Carousel/ImageCarouselTest";
import CarouselSubtextTest from "../components/Carousel/CarouselSubtextTest";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  carouselContainer: {
    display: "flex",
    flexDirection: "column",
  },
};

const Test = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ImageCarouselTest />
      <CarouselSubtextTest />
    </div>
  );
};

export default withStyles(styles)(Test);
