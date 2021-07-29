import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Fade from "@material-ui/core/Fade";

import ImageCarousel from "../../components/ImageCarousel";
// import CarouselSubtext from "../../components/ImageCarousel/CarouselSubtext/";
import styles from "./styles";

const Home = ({ classes }) => {
  return (
    <React.Fragment>
      <Fade in={true} timeout={500}>
        <div className={classes.carouselContainer}>
          <div className={classes.carouselSubcontainer}>
            <ImageCarousel />
            {/* <CarouselSubtext /> */}
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default withStyles(styles)(Home);
