import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  cartProductsContainer: {
    color: "#0c0c0d",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    maxHeight: "70vh",
    overflowY: "auto",
    overflowX: "hidden",
  },
  cartEmptyContainer: {
    width: "100%",
    fontFamily: "Montserrat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  productContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  cartActions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  priceAndQuantity: {
    display: "flex",
    alignItems: "flex-end",
  },

  horizontalDivider: {
    margin: "1rem 0",
    width: "100%",
    position: "relative",
    right: "1rem",
    backgroundColor: "#a0a0a0",
  },
  [theme.breakpoints.down("md")]: {
    cartProductsContainer: {
      width: "100%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    productContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    cartActions: {
      flexDirection: "row",
    },
  },
  [theme.breakpoints.down("xs")]: {
    cartActions: {
      flexDirection: "column",
    },
  },
}));

export default useStyles;
