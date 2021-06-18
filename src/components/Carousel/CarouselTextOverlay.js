import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  textOverlayContainer: {
    position: "absolute",
    textAlign: "right",
    left: "60%",
    top: "-5rem",
    fontFamily: "Montserrat",
  },
  overlayHeader: {
    fontSize: "6rem",
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
  "@media screen and (max-width: 800px)": {
    textOverlayContainer: {
      left: "20%",
    },
  },
  "@media screen and (max-width: 550px)": {
    textOverlayContainer: {
      top: "-4rem",
      left: "0%",
    },
    overlayHeader: {
      fontSize: "4.5rem",
    },
    overlaySubtext: {
      fontSize: "2.5rem",
    },
    galleryBtn: {
      fontSize: ".8rem",
    },
  },
});

const CarouselTextOverlay = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.textOverlayContainer}>
      <h1 className={classes.overlayHeader}>{text.main}</h1>
      {text.sub && <h4 className={classes.overlaySubtext}>{text.sub}</h4>}
      <Button className={classes.galleryBtn} variant="text" disableRipple>
        View Gallery
      </Button>
    </div>
  );
};

export default CarouselTextOverlay;
