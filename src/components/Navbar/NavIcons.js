import React from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Switch from "@material-ui/core/Switch";
import { useDispatch, useSelector } from "react-redux";
import { modeActions } from "../../store/modeSlice";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  switchBase: {
    color: "#454545",
  },
  root: {
    color: "#454545",
  },
};

const NavIcons = ({ classes }) => {
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(modeActions.toggleMode());
  };
  return (
    <div className={classes.iconContainer}>
      <WbSunnyIcon fontSize="small" />
      <Switch
        color="default"
        size="small"
        classes={{
          //   track: classes.track,
          switchBase: classes.switchBase,
          root: classes.root,
        }}
        onChange={toggleMode}
      />
      <Brightness3Icon fontSize="small" />
    </div>
  );
};

export default withStyles(styles)(NavIcons);
