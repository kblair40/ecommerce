import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  push: {
    // position: "relative",
    // border: "1px solid blue",
  },
  container: {
    width: "100%",
    minWidth: "330px",
    padding: "1rem",
    background: "#f0f0f0",
    fontFamily: "Montserrat",
    color: "#0c0c0d",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    height: "8.5rem",
  },
  section: {
    width: "calc(25% - 2rem)",
    marginRight: "2rem",
    "& h4": {
      margin: "0 0 1rem",
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      fontSize: ".85rem",
    },
  },
  copyright: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: ".7rem",
    width: "100%",
    position: "absolute",
    bottom: ".25rem",
    right: ".5rem",
  },
  copyrightIcon: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    footer: {
      justifyContent: "center",
    },
    section: {
      width: "calc(25% - 1rem)",
      marginRight: "1rem",
    },
  },
  [theme.breakpoints.down("xs")]: {
    footer: {
      justifyContent: "space-between",
      height: "16rem",
      // height: "auto",
    },
    section: {
      width: "calc(50% - 1rem)",
      marginRight: "1rem",
    },
  },
}));

export default useStyles;
