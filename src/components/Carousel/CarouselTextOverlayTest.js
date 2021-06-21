import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  textOverlayContainer: {
    // border: "2px dotted red",
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
      //   border: "5px dotted green",
      right: "calc(-48% + 20rem)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    textOverlayContainer: {
      //   border: "5px dotted blue",
      right: 0,
    },
    overlayHeader: {
      fontSize: "4.5rem",
    },
  },
  [theme.breakpoints.down("xs")]: {
    textOverlayContainer: {
      //   border: "2px dotted orange",
      right: "-5%",
    },
    overlayHeader: {
      fontSize: "3rem",
    },
  },
}));

const CarouselTextOverlayTest = ({ text }) => {
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

export default CarouselTextOverlayTest;
