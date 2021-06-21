import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  textOverlayContainer: {
    color: "#0c0c0d",
    position: "absolute",
    textAlign: "right",
    top: 0,
    right: "calc(-45% + 20rem)",
    fontFamily: "Montserrat",
    maxWidth: "40rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  overlayHeader: {
    fontSize: "6rem",
    margin: "0 0 1rem 0",
    overFlow: "hidden",
  },
  galleryBtn: {
    fontSize: "1.2rem",
    "&:hover": {
      background: "transparent",
    },
  },

  // MEDIA QUERIES
  [theme.breakpoints.down("md")]: {
    textOverlayContainer: {
      right: "calc(-48% + 20rem)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    textOverlayContainer: {
      right: 0,
    },
    overlayHeader: {
      fontSize: "4.5rem",
    },
  },
  [theme.breakpoints.down("xs")]: {
    textOverlayContainer: {
      right: "-5%",
    },
    overlayHeader: {
      fontSize: "3rem",
    },
  },
}));

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
