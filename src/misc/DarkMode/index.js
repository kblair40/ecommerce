import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import { useSelector } from "react-redux";

import styles from "./styles";

const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />;
};

const DarkMode = ({ classes }) => {
  const isOpen = useSelector((state) => state.mode.snackbarOpen);

  return (
    <Snackbar
      className={classes.snackbarRoot}
      TransitionComponent={SlideTransition}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={isOpen}
    >
      <SnackbarContent
        classes={{ root: classes.snackbarRoot }}
        message="😢😢 Sorry, dark mode is coming soon!"
      />
    </Snackbar>
  );
};

export default withStyles(styles)(DarkMode);
