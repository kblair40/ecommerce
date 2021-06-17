import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { NavLink } from "react-router-dom";
import NavIcons from "./NavIcons";

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
});

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <nav className={classes.navbarContainer}>
      {/* <NavLink className={classes.navbarLinks} to="/clothing">
        Something
      </NavLink> */}
      <NavLink className={classes.navbarLogo} to="/">
        <h1 className={classes.navbarLogo}>ECOMMERCE</h1>
      </NavLink>
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
      <NavLink className={classes.navbarLinks} to="/clothing">
        <Badge
          invisible={false}
          badgeContent={0}
          color="primary"
          showZero
          classes={{ badge: classes.badgeRoot }}
        >
          <ShoppingCartIcon classes={{ root: classes.cartRoot }} />
        </Badge>
      </NavLink>
      <NavIcons />
    </nav>
  );
};

export default Navbar;
