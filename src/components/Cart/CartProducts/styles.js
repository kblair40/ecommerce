import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  cartProductsContainer: {
    color: "#0c0c0d",
    // width: "100%",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    maxHeight: "70vh",
    overflowY: "auto",
    overflowX: "hidden",
  },
  cartEmptyContainer: {
    fontFamily: "Montserrat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    cartProductsContainer: {
      width: "100%",
    },
  },
}));

export default useStyles;
