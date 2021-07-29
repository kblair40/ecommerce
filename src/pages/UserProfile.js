import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ProfileLinks from "../components/AuthForms/ProfileLinks/";

const useStyles = makeStyles((theme) => ({
  userProfileContainer: {
    display: "flex",
    marginTop: "1rem",
    fontFamily: "Montserrat",
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.userProfileContainer}>
      <ProfileLinks />
    </div>
  );
};

export default UserProfile;
