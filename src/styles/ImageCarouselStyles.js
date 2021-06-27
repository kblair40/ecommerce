import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    position: "relative",
    left: "-6%",
    marginTop: "3.5rem",
    width: "86%",
  },
  singleSlide: {
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "55vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    carouselContainer: {
      width: "98%",
      left: "-1%",
    },
  },
}));

export { useStyles };
