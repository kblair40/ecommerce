import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    width: "100vw",
    height: "85vh",
    fontFamily: "Montserrat",
    position: "absolute",
    top: "3.5rem",
    display: "flex",
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
    padding: ".5rem",
    height: "100%",
    width: "calc(100vw - 17rem)",
  },

  [theme.breakpoints.down("xs")]: {
    profileContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "auto",
      position: "relative",
      marginBottom: "10rem",
    },

    profileCardContainer: {
      position: "relative",
      width: "100vw",
      top: 0,
      padding: 0,
    },
    visibleComponentContainer: {
      position: "relative",
      left: "0",
    },
  },
}));

export default useStyles;
