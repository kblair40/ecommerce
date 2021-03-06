import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import CarouselTextOverlay from "./CarouselTextOverlay";
import CarouselSubtext from "./CarouselSubtext";
import Arrows from "./Arrows";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";
import useStyles from "./styles";

const overlayTexts = ["Jackets", "Winter Coats", "Summer Collection"];
const slideImages = [one, two, three];

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
    <React.Fragment>
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
        <Arrows
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          slideNumber={textIdx}
          numberOfSlides={slideImages.length}
        />
      </div>
      <CarouselSubtext />
    </React.Fragment>
  );
};

export default MainCarousel;
