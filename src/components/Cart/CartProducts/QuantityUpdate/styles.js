import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  qtyUpdateContainer: {
    fontFamily: "Montserrat",
    margin: "0 1rem 0 0",
    display: "flex",
    alignItems: "center",
  },
  qtyText: {
    margin: 0,
  },
  selectRoot: {
    height: "100%",
    margin: "0 0 0 0.5rem",
    color: "#0c0c0d",
    textAlign: "right",
    padding: "0",
    fontFamily: "Montserrat",
    width: "2.5rem",

    "&:before": {
      borderBottom: "2px solid #0c0c0d",
      zIndex: 10,
    },
  },
}));

export default useStyles;
