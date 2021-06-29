import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

import ChangePasswordForm from "../Forms/ChangePasswordForm";

const useStyles = makeStyles({
  profileContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
  },
  profileLinksContainer: {},
  profileCardContainer: {
    border: "1px solid #a0a1a1",
    borderRadius: 2,
    margin: "1rem 0",
    height: "50vh",
    minHeight: "8rem",
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem 1rem .5rem",
    "& h2": {
      color: "#0c0c0d",
      marginBottom: ".25rem",
    },
    "& hr": {
      marginBottom: "1rem",
    },
  },
  profileLink: {
    marginBottom: ".4rem",
    color: "#0c0c0d",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
});

const ProfileLinks = () => {
  const classes = useStyles();
  const [componentToRender, setComponentToRender] = useState(null);

  const changeRenderedComponent = (e) => {
    setComponentToRender("change password");
  };

  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileLinksContainer}>
        <Card elevation={0} className={classes.profileCardContainer}>
          <h2>Manage Profile</h2>
          <Divider />
          <div
            className={classes.profileLink}
            onClick={changeRenderedComponent}
          >
            Change Password
          </div>
          <div
            className={classes.profileLink}
            // onClick={changeRenderedComponent}
          >
            Dummy Link 1
          </div>
          <div
            className={classes.profileLink}
            // onClick={changeRenderedComponent}
          >
            Dummy Link 2
          </div>
        </Card>
      </div>
      <div className={classes.renderedComponent}>
        {componentToRender === "change password" && <ChangePasswordForm />}
      </div>
    </div>
  );
};

export default ProfileLinks;
