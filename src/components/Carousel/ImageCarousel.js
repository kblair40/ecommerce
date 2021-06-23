import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import CarouselTextOverlay from "./CarouselTextOverlay";
import six from "../../assets/images/six.jpg";
import seven from "../../assets/images/seven.jpg";
import eight from "../../assets/images/eight.jpg";
import { useStyles } from "../../styles/ImageCarouselStyles";

const overlayTexts = ["Jackets", "Winter Coats", "Summer Collection"];
const slideImages = [six, seven, eight];

const MainCarousel = () => {
  const [textIdx, setTextIdx] = useState(0);
  const classes = useStyles();
  return (
    <div className={classes.carouselContainer}>
      <Slide
        transitionDuration={750}
        duration={3000}
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
    </div>
  );
};

export default MainCarousel;
