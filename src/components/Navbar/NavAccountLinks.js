import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Hidden from "@material-ui/core/Hidden";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector, useDispatch } from "react-redux";

import NavAccountDropdown from "./NavAccountDropdown";
import { authActions } from "../../store/authSlice";

const useStyles = makeStyles((theme) => ({
  navAccountLinkContainer: {
    fontFamily: "Montserrat",
    display: "flex",
    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
  },
  btnAcctLinkRoot: {
    fontFamily: "Montserrat",
    padding: 0,
    fontSize: ".8rem",
    textAlign: "left",
    "&:hover": {
      background: "transparent",
    },
  },
  navAccountlink: {
    color: "#0c0c0d",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  disabledLink: {
    color: "#0c0c0d",
    textDecoration: "none",
    "&:hover": {
      cursor: "default",
    },
  },
  myAccountLink: {
    color: "#0c0c0d",
    fontWeight: 700,
  },
  accountIcon: {
    marginRight: ".5rem",
  },
}));

const NavAccountLinks = ({ isLoggedIn }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const displayName = useSelector((state) => state.auth.displayName);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(authActions.logout());
  };

  return (
    <div className={classes.navAccountLinkContainer}>
      <AccountCircleIcon className={classes.accountIcon} />
      <div className={classes.linkContainer}>
        <NavLink
          to={isLoggedIn ? "#" : "/auth"}
          className={isLoggedIn ? classes.disabledLink : classes.navAccountlink}
        >
          {isLoggedIn ? `Hi, ${displayName}` : "Login"}
        </NavLink>

        <NavAccountDropdown
          handleLogout={handleLogout}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handleClick={handleClick}
          handleClose={handleClose}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
};

export default NavAccountLinks;
