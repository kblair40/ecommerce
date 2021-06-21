import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "4rem",
    display: "flex",
    fontFamily: "Montserrat, sans-serif",
    position: "relative",
  },
  carouselContainer: {
    position: "relative",
  },
  carouselImg: {
    minWidth: "600px",
    maxWidth: "800px",
  },
  img: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    carouselImg: {
      width: "100%",
    },
  },
}));

export { useStyles };
