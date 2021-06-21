import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      bottom: "5rem",
    },
  },
  switchBase: {
    color: "#0c0c0d",
  },
  root: {
    color: "#0c0c0d",
  },
  track: {
    backgroundColor: "#0c0c0d",
  },
}));

export { useStyles };
