import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// import { useStyles } from "../../styles/CarouselTextOverlayStyles";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  textOverlayContainer: {
    fontFamily: "Montserrat",
    color: "#0c0c0d",
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    position: "absolute",
    top: 0,
    right: "-16%",
    maxWidth: "40rem",
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
  galleryLink: {
    textDecoration: "none",
  },

  // MEDIA QUERIES
  [theme.breakpoints.down("md")]: {
    overlayHeader: {
      fontSize: "5rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    textOverlayContainer: {
      right: "-8%",
    },
    overlayHeader: {
      fontSize: "3.8rem",
    },
  },
}));

const CarouselTextOverlay = ({ text }) => {
  const classes = useStyles();
  console.log("TEXT:", text);
  return (
    <React.Fragment>
      <div className={classes.textOverlayContainer}>
        <h1 className={classes.overlayHeader}>{text}</h1>
        <Link className={classes.galleryLink} to="/clothing">
          <Button className={classes.galleryBtn} variant="text" disableRipple>
            View Gallery
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CarouselTextOverlay;
