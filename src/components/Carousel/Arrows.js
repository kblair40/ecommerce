import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  arrowsContainer: {
    position: "absolute",
    bottom: "15%",
    right: "-12%",
    // background: "green",
    zIndex: 50,
  },
  forward: {
    // background: "red",
    position: "relative",
  },
  forwardRoot: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  imageNumber: {
    // background: "rgba(0,0,0,0.2)",
    fontFamily: "Oswald",
    position: "relative",
    right: "1.5rem",
  },
  back: {
    // background: "purple",
    position: "relative",
    right: "3rem",
  },
  backwardRoot: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  [theme.breakpoints.down("sm")]: {
    back: {
      right: "2.3rem",
    },
    imageNumber: {
      right: "1.15rem",
    },
  },
  [theme.breakpoints.down("xs")]: {
    arrowsContainer: {
      display: "none",
    },
  },
}));

const Arrows = ({ nextSlide, prevSlide }) => {
  const classes = useStyles();
  return (
    <div className={classes.arrowsContainer}>
      <div className={classes.back}>
        <IconButton
          onClick={prevSlide}
          classes={{ root: classes.backwardRoot }}
          disableRipple
        >
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className={classes.imageNumber}>1 / 3</div>

      <div className={classes.forward}>
        <IconButton
          onClick={nextSlide}
          classes={{ root: classes.forwardRoot }}
          disableRipple
        >
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Arrows;
