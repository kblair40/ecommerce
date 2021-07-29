import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

import useStyles from "./styles";

const NavLinks = ({ showChangePassword, showComingSoon }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.navLink} onClick={showChangePassword}>
        <LockOpenIcon />
        <p className={classes.linkText}>Change Password</p>
      </div>
      <div className={classes.navLink} onClick={showComingSoon}>
        <FavoriteBorderIcon />
        <p className={classes.linkText}>Wish List</p>
      </div>
      <div className={classes.navLink} onClick={showComingSoon}>
        <WorkOutlineIcon />
        <p className={classes.linkText}>Purchases</p>
      </div>
    </React.Fragment>
  );
};

export default NavLinks;
