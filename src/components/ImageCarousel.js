import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselTextOverlay from "./CarouselTextOverlay";
import Button from "@material-ui/core/Button";

import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";
import five from "../assets/images/five.jpg";
import six from "../assets/images/six.jpg";
import seven from "../assets/images/seven.jpg";
import eight from "../assets/images/eight.jpg";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    fontFamily: "Montserrat, sans-serif",
    position: "relative",
  },
  textOverlayContainer: {
    position: "absolute",
    textAlign: "right",
    right: "1rem",
  },
  carouselContainer: {
    minWidth: "22.5rem",
    overflow: "hidden",
    position: "relative",
    left: "1rem",
  },
  carouselImg: {
    overflow: "hidden",
    height: "27rem",
  },
  // overlayHeader: {
  //   fontSize: "4rem",
  // },
  // overlaySubtext: {
  //   fontSize: "3rem",
  // },
  // galleryBtn: {
  //   fontSize: "1.0rem",
  // },
});
// NOTES:
// 1. I can create custom 'next' and 'prev' arrows (renderArrowNext)
// 2.
const ImageCarousel = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.carouselContainer}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          // might want to change to true.  Default is false
          dynamicHeight={false}
          interval={4000}
          swipeable={true}
          emulateTouch={true}
          showArrows={false}
          width="60%"
          // removes round buttons at bottom
          showIndicators={false}
          showThumbs={false}
          useKeyboardArrows={true}
          showStatus={false}
          showIndicators={false}
          stopOnHover={false}
        >
          <div>
            <img className={classes.carouselImg} src={six} />
          </div>
          <div>
            <img className={classes.carouselImg} src={seven} />
          </div>
          <div>
            <img className={classes.carouselImg} src={eight} />
          </div>
        </Carousel>
      </div>
      {/* <div className={classes.textOverlayContainer}>
        <h2 className={classes.overlayHeader}>Jackets Collection</h2>
        <p className={classes.overlaySubtext}>2021</p>
        <Button className={classes.galleryBtn} variant="text">
          View Gallery
        </Button>
      </div> */}
      <CarouselTextOverlay />
    </div>
  );
};

export default ImageCarousel;
