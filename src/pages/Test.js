import React from "react";
import ImageCarouselTest from "../components/Carousel/ImageCarouselTest";
import CarouselSubtextTest from "../components/Carousel/CarouselSubtextTest";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  carouselContainer: {
    display: "flex",
    flexDirection: "column",
    // background: "rgba(0,0,0,0.2)",
    alignItems: "center",
    // maxWidth: "1700px",

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

const Test = ({ classes }) => {
  return (
    <div className={classes.carouselContainer}>
      <div className={classes.carouselSubcontainer}>
        <ImageCarouselTest />
        <CarouselSubtextTest />
      </div>
    </div>
  );
};

export default withStyles(styles)(Test);
