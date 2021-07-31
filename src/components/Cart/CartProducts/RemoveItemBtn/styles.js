import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  removeBtnRoot: {
    height: "1.75rem",
    width: "7rem",
    minWidth: "7rem",
    padding: ".2rem",
    marginTop: "1rem",
    borderColor: "#ff4244",
    color: "#ff4244",
    "&:hover": {
      background: "#fff",
    },
  },
  removeItemBtnText: {
    margin: 0,
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      display: "flex",
      alignItems: "flex-end",
    },
    removeBtnRoot: {
      marginLeft: "2rem",
    },
  },
  [theme.breakpoints.down("xs")]: {
    removeBtnRoot: {
      margin: "0.5rem 0 0 0",
    },
  },
}));

export default useStyles;
