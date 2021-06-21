import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  checkoutPageContainer: {
    marginTop: "3rem",
    display: "grid",
    gridTemplateColumns: "65% 32%",
    gridColumnGap: "1rem",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      justifyItems: "center",
      gridTemplateRows: "auto",
    },
  },
}));

export { useStyles };
