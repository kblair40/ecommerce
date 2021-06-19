import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const drawerWidth = "50%";
const smallerDrawerWidth = "40%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: smallerDrawerWidth,
    flexShrink: 0,
    minWidth: 200,
    [theme.breakpoints.down("xs")]: {
      width: drawerWidth,
    },
  },
  drawerHeader: {
    display: "flex",
    width: "100%",
    jusfifyContent: "flex-end",
    background: "#f0f0f0",
    position: "relative",
    height: "3rem",
  },
  drawerPaper: {
    width: smallerDrawerWidth,
    minWidth: 200,
    [theme.breakpoints.down("xs")]: {
      width: drawerWidth,
    },
  },
  closeIcon: {
    position: "absolute",
    top: "-.3rem",
    // left: "550%",
    left: "80%",
  },
  [theme.breakpoints.down("xs")]: {
    left: "70%",
  },
}));

const SmallNavbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}

      {/* Need this for handling drawer open and close */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="end"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton className={classes.closeIcon} onClick={handleDrawerClose}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </div>
        <Divider />

        <Divider />
      </Drawer>
    </div>
  );
};

export default SmallNavbar;
