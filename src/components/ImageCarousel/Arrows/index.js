import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";

import useStyles from "./styles";

const Arrows = ({ slideNumber, numberOfSlides, nextSlide, prevSlide }) => {
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
      <div className={classes.imageNumber}>
        {slideNumber + 1} / {numberOfSlides}
      </div>

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
