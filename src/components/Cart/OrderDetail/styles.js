import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  orderDetailCard: {
    marginTop: "1rem",
    color: "#0c0c0d",
    display: "flex",
    flexDirection: "column",
    minWidth: "15.625rem",
    maxWidth: "25rem",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  detailRow: {
    display: "flex",
    margin: ".25rem 0",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailCategory: {
    fontFamily: "Montserrat",
    fontSize: "1.4rem",
  },
  categoryAmount: {
    fontFamily: "Oswald",
    fontSize: "1.2rem",
  },
  amountUntilMet: {
    fontFamily: "Montserrat",
    fontSize: ".9rem",
    color: "#ff4244",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
    },
  },
  orderTotal: {
    fontWeight: "500",
  },
}));

export default useStyles;
