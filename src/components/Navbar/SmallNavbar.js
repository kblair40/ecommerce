import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import SmallNavbarLinks from "./SmallNavbarLinks";
import { useStyles } from "../../styles/SmallNavbarStyles";

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

        <SmallNavbarLinks handleDrawerClose={handleDrawerClose} />

        <Divider />
      </Drawer>
    </div>
  );
};

export default SmallNavbar;
