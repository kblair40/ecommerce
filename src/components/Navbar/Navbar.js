import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Hidden from "@material-ui/core/Hidden";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import SmallNavbar from "./SmallNavbar";
import SetMode from "./SetMode";

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
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      padding: "0 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
      padding: "0 1rem",
    },
  },
  smallNavLinksContainer: {
    color: "#0c0c0d",
    display: "flex",
  },
  navbarLogo: {
    fontFamily: "Montserrat, sans-serif",
    textDecoration: "none",
    margin: ".3rem",
    color: "#0c0c0d",
    fontSize: "1.8rem",
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

const Navbar = () => {
  const classes = useStyles();
  const totalItemsInCart = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className={classes.navbarContainer}>
      <Hidden mdUp>
        <div className={classes.smallNav}>
          <SmallNavbar />
        </div>
      </Hidden>
      <NavLink className={classes.navbarLogo} to="/">
        <h1 className={classes.navbarLogo}>ECOMMERCE</h1>
      </NavLink>

      <Hidden smDown>
        <NavLink className={classes.navbarLinks} to="/clothing">
          Clothing
        </NavLink>

        <NavLink className={classes.navbarLinks} to="/jewelry">
          Jewelry
        </NavLink>

        <NavLink className={classes.navbarLinks} to="/electronics">
          Electronics
        </NavLink>

        <NavLink className={classes.navbarLinks} to="/accessories">
          Accessories
        </NavLink>

        <SetMode />
      </Hidden>
      <div className={classes.smallNavLinksContainer}>
        <NavLink className={classes.navbarLinks} to="/checkout">
          <Badge
            badgeContent={totalItemsInCart}
            color="default"
            showZero
            classes={{ badge: classes.badgeRoot }}
          >
            <ShoppingCartIcon classes={{ root: classes.cartRoot }} />
          </Badge>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
