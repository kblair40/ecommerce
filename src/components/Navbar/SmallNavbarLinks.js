import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

import SetMode from "./SetMode";
import { useStyles } from "../../styles/SmallNavbarLinksStyles";

const SmallNavbarLinks = ({ handleDrawerClose }) => {
  const classes = useStyles();
  const totalItemsInCart = useSelector((state) => state.cart.totalQuantity);

  return (
    <div onClick={handleDrawerClose} className={classes.linksContainer}>
      <List>
        <div className={classes.linksSection1}>
          <ListItem className={classes.listItem}>
            <NavLink className={classes.navbarLinks} to="/clothing">
              Clothing
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className={classes.navbarLinks} to="/jewelry">
              Jewelry
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className={classes.navbarLinks} to="/electronics">
              Electronics
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className={classes.navbarLinks} to="/accessories">
              Accessories
            </NavLink>
          </ListItem>
        </div>
      </List>
      <Divider style={{ margin: 0 }} />
      <List>
        <div className={classes.linksSection2}>
          <ListItem disableGutters>
            <NavLink
              className={`${classes.navbarLinks} ${classes.linkWrapper}`}
              to="/checkout"
            >
              <p>View Cart</p>
              <Badge
                invisible={false}
                badgeContent={totalItemsInCart}
                color="default"
                showZero
                className={classes.badge}
              >
                <ShoppingCartIcon
                  fontSize="large"
                  classes={{ root: classes.cartRoot }}
                />
              </Badge>
            </NavLink>
          </ListItem>
          <SetMode style={{ marginTop: "3rem" }} />
        </div>
      </List>
    </div>
  );
};

export default SmallNavbarLinks;
