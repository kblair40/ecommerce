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
  hidden: {
    display: "none",
  },
  placeholder: {
    width: "65vw",
    height: "85vh",
  },
  [theme.breakpoints.down("md")]: {
    placeholder: {
      width: "70vw",
      height: "80vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    carouselImg: {
      width: "100%",
    },
    placeholder: {
      width: "75vw",
      height: "50vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    placeholder: {
      width: "75vw",
      height: "23vh",
    },
  },
}));

export { useStyles };
