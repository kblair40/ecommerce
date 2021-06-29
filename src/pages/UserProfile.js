import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  userProfileContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
    fontFamily: "Montserrat",
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.userProfileContainer}>
      <h1>User Profile!</h1>
    </div>
  );
};

export default UserProfile;
