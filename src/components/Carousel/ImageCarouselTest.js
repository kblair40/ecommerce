import React, { useState, useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselTextOverlayTest from "./CarouselTextOverlayTest";
import CarouselImageTest from "./CarouselImageTest";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import six from "../../assets/images/six.jpg";
import seven from "../../assets/images/seven.jpg";
import eight from "../../assets/images/eight.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "4rem",
    display: "flex",
    fontFamily: "Montserrat, sans-serif",
    position: "relative",
  },
  carouselContainer: {
    position: "relative",
  },
  carouselImg: {
    minWidth: "600px",
    maxWidth: "800px",
  },
  img: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    carouselImg: {
      width: "100%",
    },
  },
}));

const overlayTexts = [
  { main: "Jackets" },
  { main: "Winter Coats " },
  { main: "Summer Collection" },
];

const ImageCarouselTest = () => {
  const [textIdx, setTextIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const smallScreen = useMediaQuery("(max-width:960px)");
  const mediumScreen = useMediaQuery("(max-width:1280px)");
  const classes = useStyles();

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.carouselContainer}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
          onChange={(index) => setTextIdx(index)}
          width={`${mediumScreen ? "75vw" : "65vw"}`}
        >
          <CarouselImageTest image={six} altText={"Girl in jacket"} />
          <CarouselImageTest
            image={seven}
            altText={"Rack with multiple coats hanging"}
          />
          <CarouselImageTest
            image={eight}
            altText={"Man on beach near ocean"}
          />
        </Carousel>
        <CarouselTextOverlayTest text={overlayTexts[textIdx]} />
      </div>
    </div>
  );
};

export default ImageCarouselTest;
