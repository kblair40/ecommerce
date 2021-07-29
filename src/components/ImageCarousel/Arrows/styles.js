import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  arrowsContainer: {
    position: "absolute",
    bottom: "15%",
    right: "-12%",
    zIndex: 50,
  },
  forward: {
    position: "relative",
  },
  forwardRoot: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  imageNumber: {
    fontFamily: "Oswald",
    position: "relative",
    right: "1.75rem",
  },
  back: {
    position: "relative",
    right: "3.5rem",
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

export default useStyles;
