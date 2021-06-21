import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  productsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  productsList: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "4rem",
  },
});

export { useStyles };
