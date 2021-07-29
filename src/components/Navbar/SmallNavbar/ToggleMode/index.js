import React from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Switch from "@material-ui/core/Switch";
import { useDispatch } from "react-redux";

import { modeActions } from "../../../store/modeSlice";
import useStyles from "./styles";

const ToggleMode = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const toggleMode = () => {
    dispatch(modeActions.toggleMode);
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
          track: classes.track,
        }}
        onChange={toggleMode}
      />
      <Brightness3Icon fontSize="small" />
    </div>
  );
};

export default ToggleMode;
