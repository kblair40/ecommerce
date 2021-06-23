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
  },
}));

export { useStyles };
