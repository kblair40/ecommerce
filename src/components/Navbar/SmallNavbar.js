import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SmallNavbarLinks from "./SmallNavbarLinks";

const drawerWidthMd = "30%";
const drawerWidthSm = "15%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidthMd,
    flexShrink: 0,
    minWidth: 200,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidthSm,
    },
  },
  drawerHeader: {
    display: "flex",
    width: "100%",
    jusfifyContent: "flex-end",
    background: "#f0f0f0",
    position: "relative",
    height: "3.15rem",
  },
  drawerPaper: {
    width: drawerWidthMd,
    minWidth: 200,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidthSm,
    },
  },
  closeIcon: {
    position: "absolute",
    top: "-.3rem",
    fontSize: "4rem",
    left: "80%",
    [theme.breakpoints.down("xs")]: {
      left: "75%",
    },
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
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        style={{ zIndex: 40 }}
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

        <SmallNavbarLinks />

        <Divider />
      </Drawer>
    </div>
  );
};

export default SmallNavbar;
