import { makeStyles } from "@material-ui/core/styles";

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
    right: 0,
  },
}));

export default useStyles;
