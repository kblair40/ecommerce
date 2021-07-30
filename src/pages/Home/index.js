import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Fade from "@material-ui/core/Fade";

import ImageCarousel from "../../components/ImageCarousel";
// import Footer from "../../components/Footer";
import styles from "./styles";

const Home = ({ classes }) => {
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.pageContainer}>
        <div className={classes.carouselContainer}>
          <div className={classes.carouselSubcontainer}>
            <ImageCarousel />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Fade>
  );
};

export default withStyles(styles)(Home);
