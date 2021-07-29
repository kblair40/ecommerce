import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import NavAccountDropdown from "../NavAccountDropdown/";
import { authActions } from "../../../store/authSlice";
import useStyles from "./styles";

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
