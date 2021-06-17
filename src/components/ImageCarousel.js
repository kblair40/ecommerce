import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";
import four from "../assets/images/four.jpg";
import five from "../assets/images/five.jpg";

const useStyles = makeStyles({
  carouselImg: {
    maxWidth: "100%",
  },
});
// NOTES:
// 1. I can create custom 'next' and 'prev' arrows (renderArrowNext)
// 2.
const ImageCarousel = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        // might want to change to true.  Default is false
        dynamicHeight={false}
        interval={4500}
        swipeable={true}
        emulateTouch={true}
        showArrows={false}
        // removes round buttons at bottom
        showIndicators={false}
      >
        <div>
          <img className={classes.carouselImg} src={one} />
        </div>
        <div>
          <img className={classes.carouselImg} src={two} />
        </div>
        <div>
          <img className={classes.carouselImg} src={three} />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
