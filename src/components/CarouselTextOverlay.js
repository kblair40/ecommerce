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
    fontSize: "5rem",
    marginBottom: "1rem",
  },
  overlaySubtext: {
    marginTop: 0,
    fontSize: "3rem",
  },
  galleryBtn: {
    fontSize: "1.2rem",
    "&:hover": {
      background: "transparent",
    },
  },
});

const CarouselTextOverlay = () => {
  const classes = useStyles();
  return (
    <div className={classes.textOverlayContainer}>
      <h1 className={classes.overlayHeader}>Jackets Collection</h1>
      <h4 className={classes.overlaySubtext}>2021</h4>
      <Button className={classes.galleryBtn} variant="text" disableRipple>
        View Gallery
      </Button>
    </div>
  );
};

export default CarouselTextOverlay;
