import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    width: "100vw",
    height: "85vh",
    fontFamily: "Montserrat",
    position: "absolute",
    top: "3.5rem",
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
  visibleComponentContainer: {
    position: "absolute",
    left: "17rem",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".5rem",
    height: "100%",
    width: "calc(100vw - 17rem)",
  },

  [theme.breakpoints.down("xs")]: {
    profileContainer: {
      flexDirection: "column",
      alignItems: "center",
      height: "auto",
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
