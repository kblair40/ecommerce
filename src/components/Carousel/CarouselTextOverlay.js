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
    right: "-12%",
  },
  overlayHeader: {
    fontSize: "6rem",
    margin: "0 0 1rem 0",
  },
  galleryBtn: {
    position: "relative",
    right: "1%",
    textAlign: "right",
    padding: 0,
    fontSize: "1.6rem",
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
      fontSize: "5.5rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    textOverlayContainer: {},
    overlayHeader: {
      fontSize: "4.5rem",
    },
  },
  [theme.breakpoints.down("xs")]: {
    galleryBtn: {
      fontSize: "1.3rem",
    },
    textOverlayContainer: {
      right: "2.5%",
    },
    overlayHeader: {
      fontSize: "4rem",
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
