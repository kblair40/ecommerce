import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    width: "100vw",
    // height: "100vh",
    height: "90vh",
    display: "flex",
  },
  profileLinksContainer: {
    marginRight: "2rem",
    minWidth: "14rem",
    height: "100%",
  },
  profileCardContainer: {
    color: "#0c0c0d",
    position: "fixed",
    height: "100%",
    top: "3rem",
    left: 0,
    backgroundColor: "#fafafa",
    width: "17rem",
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0",
    "& hr": {
      marginBottom: ".5rem",
    },
  },
  profileCardHeader: {
    marginLeft: ".5rem",
    fontWeight: "600",
  },
  profileLink: {
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
  },
  [theme.breakpoints.down("xs")]: {
    profileContainer: {
      flexDirection: "column",
      alignItems: "center",
      height: "auto",
    },
    profileLinksContainer: {
      marginRight: 0,
    },
    profileCardContainer: {
      position: "static",
      marginTop: "1.7rem",
      height: "auto",
      width: "100vw",
      padding: 0,
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
