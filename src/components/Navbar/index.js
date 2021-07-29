import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Hidden from "@material-ui/core/Hidden";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ErrorSnackbar from "./ErrorSnackbar";
import SmallNavbar from "./SmallNavbar";
import NavAccountLinks from "./NavAccountLinks";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const totalItemsInCart = useSelector((state) => state.cart.totalQuantity);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <React.Fragment>
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
        </Hidden>
        <div className={classes.smallLinksContainer}>
          <div className={classes.navbarLinksSmall}>
            <NavLink to="/checkout">
              <Badge
                badgeContent={totalItemsInCart}
                color="default"
                showZero
                classes={{ badge: classes.badgeRoot }}
              >
                <ShoppingCartIcon classes={{ root: classes.cartRoot }} />
              </Badge>
            </NavLink>
            <Hidden smDown>
              <NavAccountLinks isLoggedIn={isLoggedIn} />
            </Hidden>
          </div>
        </div>
      </nav>
      {/* Render Snackbar if user attempts to use dark mode before I have it setup */}
      <ErrorSnackbar />
    </React.Fragment>
  );
};

export default Navbar;
