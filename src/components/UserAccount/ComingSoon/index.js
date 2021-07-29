import React from "react";
import Divider from "@material-ui/core/Divider";

import useStyles from "./styles";

const ComingSoon = () => {
  const classes = useStyles();
  return (
    <div className={classes.comingSoonContainer}>
      <Divider className={classes.comingSoonDivider} fullWidth />
      <h1>COMING SOON!</h1>
    </div>
  );
};

export default ComingSoon;
