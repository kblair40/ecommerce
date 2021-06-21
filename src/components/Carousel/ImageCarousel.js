import React, { useState, useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselTextOverlay from "./CarouselTextOverlay";
import CarouselImage from "./CarouselImage";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "../../styles/ImageCarouselStyles";
import six from "../../assets/images/six.jpg";
import seven from "../../assets/images/seven.jpg";
import eight from "../../assets/images/eight.jpg";

const overlayTexts = [
  { main: "Jackets" },
  { main: "Winter Coats" },
  { main: "Summer Collection" },
];

const ImageCarousel = () => {
  const [textIdx, setTextIdx] = useState(0);
  const [loading, setLoading] = useState(true);
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
          interval={3500}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
          onChange={(index) => setTextIdx(index)}
          width={`${mediumScreen ? "75vw" : "65vw"}`}
        >
          <CarouselImage image={six} altText={"Girl in jacket"} />
          <CarouselImage
            image={seven}
            altText={"Rack with multiple coats hanging"}
          />
          <CarouselImage image={eight} altText={"Man on beach near ocean"} />
        </Carousel>
        <CarouselTextOverlay text={overlayTexts[textIdx]} />
      </div>
    </div>
  );
};

export default ImageCarousel;
