import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// import { useStyles } from "../../styles/CarouselTextOverlayStyles";
import useStyles from "./styles";

const CarouselTextOverlay = ({ text }) => {
  const classes = useStyles();
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
