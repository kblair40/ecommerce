import React from "react";
import ImageCarousel from "../components/Carousel/ImageCarousel";
import CarouselSubtext from "../components/Carousel/CarouselSubtext";
import withStyles from "@material-ui/core/styles/withStyles";
import Fade from "@material-ui/core/Fade";
// import styles from "../styles/HomeStyles";

const styles = {
  carouselContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: "100vw",
    justifyContent: "center",
  },
  carouselSubcontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    // maxWidth: "80vw",
    minWidth: "340px",
  },
};

const Home = ({ classes }) => {
  return (
    <React.Fragment>
      <Fade in={true} timeout={1000}>
        <div className={classes.carouselContainer}>
          <div className={classes.carouselSubcontainer}>
            <ImageCarousel />
            <CarouselSubtext />
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default withStyles(styles)(Home);

// const Home = ({ classes }) => {
//   return (
//     <Fade in={true} timeout={1000}>
//       <div className={classes.carouselContainer}>
//         <div className={classes.carouselSubcontainer}>
//           {/* <ImageCarousel wait={1000} /> */}
//           <ImageCarousel wait={1000} />
//           <CarouselSubtext />
//         </div>
//       </div>
//     </Fade>
//   );
// };
