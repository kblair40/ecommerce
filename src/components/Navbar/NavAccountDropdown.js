import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  navLink: {
    textDecoration: "none",
    padding: 0,
    margin: 0,
    "&:hover": {
      textDecoration: "none",
    },
  },
  myAccountBtn: {
    padding: 0,
    color: "#0c0c0d",
    fontFamily: "Montserrat",
    fontWeight: "700",
    textDecoration: "none",
    margin: 0,
    "&:hover": {
      background: "transparent",
      textDecoration: "underline",
    },
  },
  menuPaper: {
    border: "1px solid #0c0c0d",
  },
  menuLink: {
    textDecoration: "none",
    fontFamily: "Montserrat",
    color: "#0c0c0d",
  },
}));

const NavAccountDropdown = ({
  anchorEl,
  handleClick,
  handleClose,
  handleLogout,
  isLoggedIn,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        variant="text"
        onClick={handleClick}
        classes={{ root: classes.myAccountBtn }}
      >
        My Account {Boolean(anchorEl) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Menu
        classes={{ paper: classes.menuPaper }}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Link
          className={classes.menuLink}
          to={isLoggedIn ? "/profile" : "/auth"}
        >
          <MenuItem onClick={handleClose}>View Profile</MenuItem>
        </Link>
        {isLoggedIn && (
          <Link className={classes.menuLink} to="/">
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Link>
        )}
      </Menu>
    </React.Fragment>
  );
};

export default NavAccountDropdown;
