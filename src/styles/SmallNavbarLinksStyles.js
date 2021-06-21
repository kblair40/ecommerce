import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  linksContainer: {
    color: "#a0a0a0",
    height: "100%",
    "& li": {
      fontSize: "2rem",
      transitionDuration: ".4s",
      textAlign: "center",
      margin: "0 auto",
    },
    "& li:hover": {
      background: "#dfdfdf",
    },
  },
  linksSection1: {
    height: "50%",
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  linksSection2: {
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navbarLinks: {
    width: "100%",
    fontFamily: "Oswald, sans-serif",
    textDecoration: "none",
    padding: 0,
    color: "#232323",
    "&:visited": {
      color: "#232323",
    },
  },
  badge: {
    display: "flex",
    alignItems: "center",
    alignSelf: "baseline",
  },
  linkWrapper: {
    padding: ".5rem 0",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    alignSelf: "center",

    "& p": {
      fontSize: "1.8rem",
      position: "relative",
      bottom: ".25rem",
      margin: 0,
    },
  },
});

export { useStyles };
