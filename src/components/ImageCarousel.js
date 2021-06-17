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
    // justifyContent: "flex-start",
    fontFamily: "Montserrat, sans-serif",
    position: "relative",
  },
  carouselContainer: {
    "& li": {
      border: "none",
      background: "transparent",
    },
  },
  carouselImg: {
    overflow: "hidden",
    height: "80vh",
    maxHeight: "615px",
    minWidth: "816px",
    maxWidth: "900px",
    minHeight: "600px",
  },
  img: {
    height: "100%",
    maxWidth: "99%",
  },
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
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          useKeyboardArrows={true}
          showStatus={false}
          showIndicators={false}
          stopOnHover={false}
          width="80vw" // prev set to 60%
        >
          {/* <div>
            <img className={classes.carouselImg} src={six} />
          </div>
          <div>
            <img className={classes.carouselImg} src={seven} />
          </div>
          <div>
            <img className={classes.carouselImg} src={eight} />
          </div> */}
          <div className={classes.carouselImg}>
            <img className={classes.img} src={six} />
          </div>
          <div className={classes.carouselImg}>
            <img className={classes.img} src={seven} />
          </div>
          <div className={classes.carouselImg}>
            <img className={classes.img} src={eight} />
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
