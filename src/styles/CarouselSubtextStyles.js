import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subtextContainer: {
    color: "#0c0c0d",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  text: {
    color: "#0c0c0d",
    fontFamily: "Montserrat",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "85vw",
    },
  },
}));

export { useStyles };
