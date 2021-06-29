import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    color: "#0c0c0d",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    background: "#f0f0f0",
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    minWidth: "350px",
    zIndex: 50,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      padding: "0 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
      padding: "0 1rem",
    },
  },
  smallLinksContainer: {
    position: "relative",
    top: ".8rem",
    width: "20%",
    minWidth: "12rem",
    height: "3rem",
  },
  navbarLinksSmall: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    // top: ".8rem",
    // right: ".5rem",
  },

  navbarLogo: {
    fontFamily: "Big Shoulders Stencil Display, Montserrat, sans-serif",
    fontWeight: 700,
    textDecoration: "none",
    margin: ".3rem",
    color: "#0c0c0d",
    fontSize: "2rem",
    "&:visited": {
      color: "#232323",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "50%",
      top: ".2rem",
      position: "absolute",
      left: 0,
      right: 0,
      margin: "0 auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "68%",
    },
  },
  navbarLinks: {
    fontFamily: "Oswald, sans-serif",
    textDecoration: "none",
    fontSize: "1.2rem",
    padding: 0,
    color: "#0c0c0d",
    "&:visited": {
      color: "#0c0c0d",
    },
  },
  badgeRoot: {
    color: "#0c0c0d",
    margin: "0 0 1rem 1rem",
  },
  cartRoot: {
    background: "transparent",
    color: "#0c0c0d",
  },
}));

export { useStyles };
