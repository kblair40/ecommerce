import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  navbarContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "#dadada",
    "& li": {
      listStyleType: "none",
    },
  },
  navbarLogo: {
    fontFamily: "Montserrat, sans-serif",
  },
  navbarLinks: {
    fontFamily: "Oswald, sans-serif",
    textDecoration: "none",
    color: "#121212",
    "&:visited": {
      color: "#121212",
    },
    "&:hover": {
      textShadow: "0 0 2px #ccc",
    },
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <header>
      <nav className={classes.navbarContainer}>
        <NavLink className={classes.navbarLinks} to="/clothing">
          Clothing
        </NavLink>

        <NavLink className={classes.navbarLinks} to="/jewelry">
          Jewelry
        </NavLink>

        <h1 className={classes.navbarLogo}>ECOMMERCE</h1>

        <NavLink className={classes.navbarLinks} to="/electronics">
          Electronics
        </NavLink>

        <NavLink className={classes.navbarLinks} to="/accessories">
          Accessories
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
