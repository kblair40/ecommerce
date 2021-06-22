import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CarouselTextOverlay from "./CarouselTextOverlay";
import six from "../../assets/images/six.jpg";
import seven from "../../assets/images/seven.jpg";
import eight from "../../assets/images/eight.jpg";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    position: "relative",
    left: "-8%",
    marginTop: "3.5rem",
    width: "80%",
  },
  singleSlide: {
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      // height: "450px",
      height: "50vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    carouselContainer: {
      width: "90%",
      left: "-4%",
    },
  },
}));

const overlayTexts = ["Jackets", "Winter Coats", "Summer Collection"];
const slideImages = [six, seven, eight];

const MainCarousel = () => {
  const [textIdx, setTextIdx] = useState(0);
  const mediumScreen = useMediaQuery("(max-width:1280px)");
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
