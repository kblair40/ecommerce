import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  dialogActionsRoot: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  productImage: {
    maxWidth: "60%",
  },
  titleRoot: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    color: "#0c0c0d",
    textAlign: "center",
  },
});

export { useStyles };
