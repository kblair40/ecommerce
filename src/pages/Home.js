import React from "react";
import ImageCarousel from "../components/Carousel/ImageCarousel";
import CarouselSubtext from "../components/Carousel/CarouselSubtext";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  carouselContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    justifyContent: "center",
  },
  carouselSubcontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "80vw",
    minWidth: "340px",
  },
};

const Home = ({ classes }) => {
  return (
    <div className={classes.carouselContainer}>
      <div className={classes.carouselSubcontainer}>
        <ImageCarousel />
        <CarouselSubtext />
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
