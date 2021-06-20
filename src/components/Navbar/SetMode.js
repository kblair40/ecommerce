import React from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Switch from "@material-ui/core/Switch";
import { useDispatch } from "react-redux";
import { modeActions } from "../../store/modeSlice";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      bottom: "5rem",
    },
  },
  switchBase: {
    color: "#454545",
  },
  root: {
    color: "#454545",
  },
}));

const SetMode = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const toggleMode = () => {
    dispatch(modeActions.openSnackbar());
    setTimeout(() => {
      dispatch(modeActions.closeSnackbar());
    }, 2500);
  };

  return (
    <div className={classes.iconContainer}>
      <WbSunnyIcon fontSize="small" />
      <Switch
        color="default"
        size="small"
        classes={{
          switchBase: classes.switchBase,
          root: classes.root,
        }}
        onChange={toggleMode}
      />
      <Brightness3Icon fontSize="small" />
    </div>
  );
};

export default SetMode;
