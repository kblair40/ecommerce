import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  thankYouContainer: {
    position: "absolute",
    width: "100%",
    color: "#0c0c0d",
    fontFamily: "Montserrat",
    display: "flex",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  },
  thankYouCard: {
    position: "relative",
    width: "50%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "13rem",
  },
  cardHeader: {
    marginTop: "1rem",
    "& h1": {
      textAlign: "center",
      fontSize: "3rem",
      fontWeight: 600,
      margin: 0,
    },
    "& h3": {
      textAlign: "center",
      fontWeight: 500,
      margin: 0,
    },
  },
  cardContent: {
    "& p": {
      textAlign: "center",
      "& span": {
        fontWeight: 500,
        textDecoration: "underline",
      },
    },
  },
  goHomeBtnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  },
  goHomeBtnRoot: {
    background: "#1d6d86",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "1.2rem",
    width: "90%",
    "&:hover": {
      background: "#1d6d86",
    },
  },
  closeBtnRoot: {
    position: "absolute",
    top: ".2rem",
    right: ".2rem",
  },
  [theme.breakpoints.down("sm")]: {
    thankYouCard: {
      width: "75%",
    },
  },
  [theme.breakpoints.down("xs")]: {
    thankYouCard: {
      width: "90%",
    },
  },
}));

export default useStyles;
