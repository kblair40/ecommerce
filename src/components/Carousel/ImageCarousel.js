import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import CarouselTextOverlay from "./CarouselTextOverlay";
import Arrows from "./Arrows";
import six_lg from "../../assets/images/six_lg.jpg";
import six_sm from "../../assets/images/six_sm.jpg";
import seven from "../../assets/images/seven.jpg";
import eight_sm from "../../assets/images/eight_sm.jpg";
import eight_lg from "../../assets/images/eight_lg.jpg";
import eight from "../../assets/images/eight.jpeg";
// import { useStyles } from "../../styles/ImageCarouselStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    position: "relative",
    left: "-6%",
    marginTop: "3.5rem",
    width: "86%",
  },
  singleSlide: {
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "55vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    carouselContainer: {
      width: "98%",
      left: "-1%",
    },
  },
}));

const overlayTexts = ["Jackets", "Winter Coats", "Summer Collection"];
const slideImages = [six_sm, seven, eight_sm];

const MainCarousel = () => {
  const slideRef = useRef();
  const [textIdx, setTextIdx] = useState(0);
  const classes = useStyles();

  const nextSlide = () => {
    slideRef.current.goNext();
  };

  const prevSlide = () => {
    slideRef.current.goBack();
  };

  return (
    <div className={classes.carouselContainer}>
      <Slide
        ref={slideRef}
        transitionDuration={750}
        duration={3500}
        arrows={false}
        pauseOnHover={false}
        easing="ease"
        onChange={(oldIdx, newIdx) => setTextIdx(newIdx)}
      >
        <div className={classes.singleSlide}>
          <div style={{ backgroundImage: `url(${slideImages[0]})` }} />
        </div>
        <div className={classes.singleSlide}>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }} />
        </div>
        <div className={classes.singleSlide}>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }} />
        </div>
      </Slide>
      <CarouselTextOverlay text={overlayTexts[textIdx]} />
      <Arrows nextSlide={nextSlide} prevSlide={prevSlide} />
    </div>
  );
};

export default MainCarousel;
