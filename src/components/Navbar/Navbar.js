import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Hidden from "@material-ui/core/Hidden";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { useStyles } from "../../styles/NavbarStyles";
import SmallNavbar from "./SmallNavbar";
import SetMode from "./SetMode";

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
        <NavLink className={classes.navbarLinks} to="/auth">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
