import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  textOverlayContainer: {
    position: "absolute",
    textAlign: "right",
    right: "2rem",
  },
  overlayHeader: {
    fontSize: "4rem",
  },
  overlaySubtext: {
    fontSize: "3rem",
  },
  galleryBtn: {
    fontSize: "1.0rem",
  },
});

const CarouselTextOverlay = () => {
  const classes = useStyles();
  return (
    <div className={classes.textOverlayContainer}>
      <h2 className={classes.overlayHeader}>Jackets Collection</h2>
      <p className={classes.overlaySubtext}>2021</p>
      <Button className={classes.galleryBtn} variant="text">
        View Gallery
      </Button>
    </div>
  );
};

export default CarouselTextOverlay;
