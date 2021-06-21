import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import withStyles from "@material-ui/core/styles/withStyles";
import { useSelector } from "react-redux";

const styles = {
  snackbarRoot: {
    fontFamily: "Montserrat",
    background: "#0c0c0d",
    color: "white",
    fontWeight: 500,
  },
};

const DarkMode = ({ classes }) => {
  const isOpen = useSelector((state) => state.mode.snackbarOpen);

  return (
    <div>
      <Snackbar
        className={classes.snackbarRoot}
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
    </div>
  );
};

export default withStyles(styles)(DarkMode);
