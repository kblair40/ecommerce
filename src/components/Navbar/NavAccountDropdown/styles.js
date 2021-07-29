import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  navLink: {
    textDecoration: "none",
    padding: 0,
    margin: 0,
    "&:hover": {
      textDecoration: "none",
    },
  },
  myAccountBtn: {
    padding: 0,
    color: "#0c0c0d",
    fontFamily: "Montserrat",
    fontWeight: "700",
    textDecoration: "none",
    margin: 0,
    "&:hover": {
      background: "transparent",
      textDecoration: "underline",
    },
  },
  menuPaper: {
    border: "1px solid #0c0c0d",
  },
  menuLink: {
    textDecoration: "none",
    fontFamily: "Montserrat",
    color: "#0c0c0d",
  },
}));

export default useStyles;
