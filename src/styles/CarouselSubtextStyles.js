import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subtextContainer: {
    width: "98%",
    color: "#0c0c0d",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    position: "relative",
    right: "0%",
  },
  text: {
    color: "#0c0c0d",
    fontFamily: "Montserrat",
    width: "33%",
    [theme.breakpoints.down("sm")]: {
      width: "98%",
    },
  },
}));

export { useStyles };
