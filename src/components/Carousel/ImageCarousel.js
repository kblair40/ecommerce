import React, { useState, useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselTextOverlay from "./CarouselTextOverlay";
import CarouselImage from "./CarouselImage";

import six from "../../assets/images/six.jpg";
import seven from "../../assets/images/seven.jpg";
import eight from "../../assets/images/eight.jpg";

const useStyles = makeStyles({
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
});

const overlayTexts = [
  { main: "Jackets", sub: null },
  { main: "Winter Coats ", sub: null },
  { main: "Summer Collection", sub: "2021" },
];

// NOTES:
// 1. I can create custom 'next' and 'prev' arrows (renderArrowNext)
// 2.
const ImageCarousel = () => {
  const [textIdx, setTextIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setLoading(false);
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.carouselContainer}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={4000}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
          onChange={(index) => setTextIdx(index)}
          width="70vw"
        >
          <CarouselImage image={six} altText={"Girl in jacket"} />
          <CarouselImage
            image={seven}
            altText={"Rack with multiple coats hanging"}
          />
          <CarouselImage image={eight} altText={"Man on beach near ocean"} />
          {/* <div className={classes.carouselImg}>
            <img className={classes.img} src={six} alt="Girl in jacket" />
          </div>
          <div className={classes.carouselImg}>
            <img
              className={classes.img}
              src={seven}
              alt="Rack with multiple coats hanging"
            />
          </div>
          <div className={classes.carouselImg}>
            <img
              className={classes.img}
              src={eight}
              alt="Man on beach near ocean"
            />
          </div> */}
        </Carousel>
      </div>
      <CarouselTextOverlay text={overlayTexts[textIdx]} />
    </div>
  );
};

export default ImageCarousel;

// carouselImg: {
//   overflow: "hidden",
//   height: "80vh",
//   maxHeight: "650px",
//   minWidth: "816px",
//   maxWidth: "990px",
//   minHeight: "600px",
// },
// img: {
//   height: "100%",
//   maxWidth: "99%",
// },
