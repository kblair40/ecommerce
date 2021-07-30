import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  navLink: {
    display: "flex",
    alignItems: "center",
    transitionDuration: ".3s",
    padding: ".3rem",
    "&:hover": {
      cursor: "pointer",
      background: "#dfdfdf",
    },
  },
  linkText: {
    color: "#0c0c0d",
    marginLeft: ".5rem",
    fontSize: "1.2rem",
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.down("xs")]: {
    linkText: {
      margin: ".5rem 0",
    },
  },
}));

export default useStyles;
