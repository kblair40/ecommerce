import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { useSelector } from "react-redux";

import ChangePasswordForm from "./ChangePasswordForm";
import ComingSoon from "./ComingSoon";
import useStyles from "./styles";

const ProfileLinks = () => {
  const classes = useStyles();
  const [componentToRender, setComponentToRender] = useState(null);
  const displayName = useSelector((state) => state.auth.displayName);

  const showComingSoon = () => {
    setComponentToRender("coming soon");
  };

  const changeRenderedComponent = (e) => {
    // Hard-coding for now, need to come up with more link ideas
    setComponentToRender("change password");
  };

  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileLinksContainer}>
        <Card elevation={0} className={classes.profileCardContainer}>
          <h2 className={classes.profileCardHeader}>
            {/* Manage Profile */}
            {/* Welcome, {displayName} */}
            {displayName}'s Account
          </h2>
          <Divider style={{ width: "100%" }} />
          <div
            className={classes.profileLink}
            onClick={changeRenderedComponent}
          >
            <LockOpenIcon />
            <p className={classes.linkText}>Change Password</p>
          </div>
          <div className={classes.profileLink} onClick={showComingSoon}>
            <FavoriteBorderIcon />
            <p className={classes.linkText}>Wish List</p>
          </div>
          <div className={classes.profileLink} onClick={showComingSoon}>
            <WorkOutlineIcon />
            <p className={classes.linkText}>Purchases</p>
          </div>
        </Card>
      </div>

      {componentToRender === "change password" && <ChangePasswordForm />}
      {componentToRender === "coming soon" && <ComingSoon />}
    </div>
  );
};

export default ProfileLinks;
