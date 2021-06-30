import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  comingSoonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5rem",
    marginLeft: "3rem",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  comingSoonDivider: {
    display: "none",
    margin: "0rem",
    width: "100vw",
  },
  [theme.breakpoints.down("xs")]: {
    comingSoonContainer: {
      flexDirection: "column",
      margin: 0,
    },
    comingSoonDivider: {
      display: "block",
    },
  },
}));

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
