import React from "react";

import ProfileLinks from "../../components/AuthForms/ProfileLinks/";
import useStyles from "./styles";

const UserProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.userProfileContainer}>
      <ProfileLinks />
    </div>
  );
};

export default UserProfile;
