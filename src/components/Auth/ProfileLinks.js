import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { useSelector } from "react-redux";

import ChangePasswordForm from "../Forms/ChangePasswordForm";
import ComingSoon from "../ComingSoon/ComingSoon";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
  profileLinksContainer: {
    marginRight: "2rem",
    minWidth: "14rem",
    height: "100%",
  },
  profileCardContainer: {
    color: "#0c0c0d",
    position: "fixed",
    height: "100%",
    top: "3rem",
    left: 0,
    backgroundColor: "#fafafa",
    width: "17rem",
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0",
    "& hr": {
      marginBottom: ".5rem",
    },
  },
  profileCardHeader: {
    marginLeft: ".5rem",
    fontWeight: "600",
  },
  profileLink: {
    display: "flex",
    alignItems: "center",
    transitionDuration: ".3s",
    padding: ".3rem",
    "&:hover": {
      cursor: "pointer",
      background: "#dfdfdf",
    },
  },
  linkText: {
    color: "#0c0c0d",
    marginLeft: ".5rem",
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("xs")]: {
    profileContainer: {
      flexDirection: "column",
      alignItems: "center",
      height: "auto",
    },
    profileLinksContainer: {
      marginRight: 0,
    },
    profileCardContainer: {
      position: "static",
      marginTop: "1.7rem",
      height: "auto",
      width: "100vw",
      padding: 0,
      backgroundColor: "transparent",
    },
  },
}));

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
