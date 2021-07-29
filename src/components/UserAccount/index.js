import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";

import NavLinks from "./NavLinks";
import ChangePasswordForm from "./ChangePasswordForm";
import ComingSoon from "./ComingSoon";
import useStyles from "./styles";

const UserAccount = () => {
  const classes = useStyles();
  const [componentToRender, setComponentToRender] = useState(null);
  const displayName = useSelector((state) => state.auth.displayName);

  const showComingSoon = () => {
    setComponentToRender("coming soon");
  };

  const showChangePassword = (e) => {
    setComponentToRender("change password");
  };

  return (
    <div className={classes.profileContainer}>
      <Card elevation={0} className={classes.profileCardContainer}>
        <h2 className={classes.profileCardHeader}>{displayName}'s Account</h2>
        <Divider style={{ width: "100%" }} />
        <NavLinks
          showChangePassword={showChangePassword}
          showComingSoon={showComingSoon}
        />
      </Card>
      <div className={classes.visibleComponentContainer}>
        {componentToRender === "change password" && <ChangePasswordForm />}
        {componentToRender === "coming soon" && <ComingSoon />}
      </div>
    </div>
  );
};

export default UserAccount;
