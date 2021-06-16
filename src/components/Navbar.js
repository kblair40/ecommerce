import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  navbarContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    background: "#f0f0f0",
    position: "relative",
    bottom: ".5rem",
    right: "1%",
    width: "102%",
  },
  navbarLogo: {
    fontFamily: "Montserrat, sans-serif",
    textDecoration: "none",
    color: "#232323",
    "&:visited": {
      color: "#232323",
    },
  },
  navbarLinks: {
    fontFamily: "Oswald, sans-serif",
    textDecoration: "none",
    color: "#232323",
    "&:visited": {
      color: "#232323",
    },
  },
  cartIconContainer: {
    position: "absolute",
    top: "40%",
    right: "1%",
  },
  cartIcon: {
    postiion: "relative",
    top: "-40%",
    color: "#343434",
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <nav className={classes.navbarContainer}>
      <NavLink className={classes.navbarLinks} to="/clothing">
        Clothing
      </NavLink>

      <NavLink className={classes.navbarLinks} to="/jewelry">
        Jewelry
      </NavLink>
      <NavLink className={classes.navbarLogo} to="/">
        <h1 className={classes.navbarLogo}>ECOMMERCE</h1>
      </NavLink>
      <NavLink className={classes.navbarLinks} to="/electronics">
        Electronics
      </NavLink>

      <NavLink className={classes.navbarLinks} to="/accessories">
        Accessories
      </NavLink>
    </nav>
  );
};

export default Navbar;
