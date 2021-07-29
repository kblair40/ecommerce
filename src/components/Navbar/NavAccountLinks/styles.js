import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  navAccountLinkContainer: {
    fontFamily: "Montserrat",
    display: "flex",
    alignItems: "center",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
  },
  btnAcctLinkRoot: {
    fontFamily: "Montserrat",
    padding: 0,
    fontSize: ".8rem",
    textAlign: "left",
    "&:hover": {
      background: "transparent",
    },
  },
  navAccountlink: {
    color: "#0c0c0d",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  disabledLink: {
    color: "#0c0c0d",
    textDecoration: "none",
    "&:hover": {
      cursor: "default",
    },
  },
  myAccountLink: {
    color: "#0c0c0d",
    fontWeight: 700,
  },
  accountIcon: {
    marginRight: ".5rem",
  },
}));

export default useStyles;
