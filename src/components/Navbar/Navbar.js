import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Hidden from "@material-ui/core/Hidden";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import SmallNavbar from "./SmallNavbar";
import NavIcons from "./NavIcons";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    background: "#f0f0f0",
    position: "relative",
    bottom: ".5rem",
    right: "1%",
    width: "102%",
    zIndex: 10,
    minWidth: "330px",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "108%",
      right: "4%",
      justifyContent: "center",
      padding: "0 1.5rem",
    },
  },
  smallNav: {
    position: "absolute",
    left: "2rem",
  },
  navbarLogo: {
    fontFamily: "Montserrat, sans-serif",
    textDecoration: "none",
    margin: ".3rem 0",
    color: "#232323",
    fontSize: "2rem",
    "&:visited": {
      color: "#232323",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  navbarLinks: {
    fontFamily: "Oswald, sans-serif",
    textDecoration: "none",
    fontSize: "1.3rem",
    padding: 0,
    color: "#232323",
    "&:visited": {
      color: "#232323",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
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
        <NavLink className={classes.navbarLinks} to="/checkout">
          <Badge
            invisible={false}
            badgeContent={totalItemsInCart}
            color="primary"
            showZero
            classes={{ badge: classes.badgeRoot }}
          >
            <ShoppingCartIcon classes={{ root: classes.cartRoot }} />
          </Badge>
        </NavLink>
        <NavIcons />
      </Hidden>
    </nav>
  );
};

export default Navbar;
