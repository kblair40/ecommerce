import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles/CarouselTextOverlayStyles";

const CarouselTextOverlay = ({ text }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.textOverlayContainer}>
        <h1 className={classes.overlayHeader}>{text.main}</h1>
        <Button className={classes.galleryBtn} variant="text" disableRipple>
          View Gallery
        </Button>
      </div>
    </React.Fragment>
  );
};

export default CarouselTextOverlay;
