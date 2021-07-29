import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  comingSoonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5rem",
    marginLeft: "3rem",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  comingSoonDivider: {
    display: "none",
    margin: "0rem",
    width: "100vw",
  },
  [theme.breakpoints.down("xs")]: {
    comingSoonContainer: {
      flexDirection: "column",
      margin: 0,
    },
    comingSoonDivider: {
      display: "block",
    },
  },
}));

export default useStyles;
