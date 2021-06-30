import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

import ChangePasswordForm from "../Forms/ChangePasswordForm";
import ComingSoon from "../ComingSoon/ComingSoon";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    // marginTop: "2rem",
  },
  profileLinksContainer: {
    marginRight: "2rem",
    minWidth: "14rem",
    height: "100%",
  },
  profileCardContainer: {
    color: "#0c0c0d",
    // marginLeft: "-1rem",
    // border: "1px solid #a0a1a1",
    position: "fixed",
    top: "3rem",
    left: 0,

    backgroundColor: "#fafafa",
    // height: "100%",
    width: "17rem",
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0",
    "& hr": {
      marginBottom: ".5rem",
    },
  },
  profileCardHeader: {
    // already set to Montserrat
    marginLeft: ".5rem",
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
    },
  },
}));

const ProfileLinks = () => {
  const classes = useStyles();
  const [componentToRender, setComponentToRender] = useState(null);

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
          <h1 className={classes.profileCardHeader}>Manage Profile</h1>
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
      {/* <Divider orientation="vertical" fullWidth /> */}
      {/* <div className={classes.renderedComponent}> */}
      {componentToRender === "change password" && <ChangePasswordForm />}
      {/* </div> */}
      {/* <div className={classes.renderedComponent}> */}
      {componentToRender === "coming soon" && <ComingSoon />}
      {/* </div> */}
    </div>
  );
};

export default ProfileLinks;
