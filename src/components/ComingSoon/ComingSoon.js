import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  comingSoonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
    marginLeft: "3rem",
    textAlign: "center",
  },
  [theme.breakpoints.down("xs")]: {
    comingSoonContainer: {
      marginLeft: 0,
      marginTop: "1rem",
    },
  },
}));

const ComingSoon = () => {
  const classes = useStyles();
  return (
    <div className={classes.comingSoonContainer}>
      <h1>COMING SOON!</h1>
    </div>
  );
};

export default ComingSoon;
