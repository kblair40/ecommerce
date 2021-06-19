import React from "react";
import { NavLink } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useSelector } from "react-redux";
import SetMode from "./SetMode";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
  linksContainer: {
    color: "#a0a0a0",
    height: "100%",
    "& li": {
      fontSize: "2.5rem",
      transitionDuration: ".4s",
      textAlign: "center",
      margin: "0 auto",
    },
    "& li:hover": {
      background: "#dfdfdf",
    },
  },
  linksSection1: {
    height: "50%",
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  linksSection2: {
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navbarLinks: {
    width: "100%",
    fontFamily: "Oswald, sans-serif",
    textDecoration: "none",
    padding: 0,
    color: "#232323",
    "&:visited": {
      color: "#232323",
    },
  },
  badge: {
    display: "flex",
    alignItems: "center",
    alignSelf: "baseline",
  },
  linkWrapper: {
    padding: ".5rem 0",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    alignSelf: "center",

    "& p": {
      fontSize: "2rem",
      position: "relative",
      bottom: ".25rem",
      margin: 0,
    },
  },
});

const SmallNavbarLinks = () => {
  const classes = useStyles();
  const totalItemsInCart = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className={classes.linksContainer}>
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
