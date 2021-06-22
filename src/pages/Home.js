import React from "react";
import ImageCarousel from "../components/Carousel/ImageCarousel";
import CarouselSubtext from "../components/Carousel/CarouselSubtext";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "../styles/HomeStyles";

const Home = ({ classes }) => {
  return (
    <div className={classes.carouselContainer}>
      <div className={classes.carouselSubcontainer}>
        <ImageCarousel wait={1000} />
        <CarouselSubtext />
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
