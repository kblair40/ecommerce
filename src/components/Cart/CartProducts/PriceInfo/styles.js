import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  priceContainer: {
    fontFamily: "Montserrat",
    display: "flex",
    flexDirection: "column",
    fontWeight: 500,
  },
  price: {
    margin: 0,
  },
  priceSubtext: {
    margin: ".2rem 0 0 0",
    fontWeight: "300",
    fontSize: ".8rem",
  },
  [theme.breakpoints.down("sm")]: {
    priceContainer: {
      margin: ".5rem 0 0 2rem",
    },
  },
}));

export default useStyles;
