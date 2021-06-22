import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  cartProductsContainer: {
    color: "#0c0c0d",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cartEmptyContainer: {
    fontFamily: "Montserrat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { useStyles };