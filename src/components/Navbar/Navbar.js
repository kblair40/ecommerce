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
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    background: "#f0f0f0",
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    zIndex: 10,
    minWidth: "350px",
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
    display: "flex",
  },
  navbarLogo: {
    fontFamily: "Montserrat, sans-serif",
    textDecoration: "none",
    margin: ".3rem 0",
    color: "#232323",
    fontSize: "1.8rem",
    "&:visited": {
      color: "#232323",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      position: "fixed",
      left: 0,
      right: 0,
      textAlign: "center",
    },
  },
  smallNav: {},
  navbarLinks: {
    fontFamily: "Oswald, sans-serif",
    textDecoration: "none",
    fontSize: "1.2rem",
    padding: 0,
    color: "#232323",
    "&:visited": {
      color: "#232323",
    },
  },
  badgeRoot: {
    background: "#898989",
  },
  cartRoot: {
    background: "transparent",
    color: "#454545",
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
      <NavLink className={classes.navbarLogo} to="/home">
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
            invisible={false}
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
