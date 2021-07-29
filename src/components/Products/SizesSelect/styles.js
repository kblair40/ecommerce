import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Montserrat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "-.5rem 0 1rem 0",
  },
  sizeBtnInactive: {
    fontFamily: "Oswald",
    color: "#0c0c0d",
    fontWeight: 400,
    transitionDuration: "1s",
    "&:hover": {
      fontWeight: 500,
    },
  },
  sizeBtnActive: {
    background: "#1d6d86",
    fontFamily: "Oswald",
    color: "white",
    "&:hover": {
      background: "#1d6d86",
    },
  },
  buttonGroupError: {
    border: "1px solid red",
    fontFamily: "Oswald",
    zIndex: 10,
  },
  errorMsg: {
    margin: ".2rem 0",
    color: "#ff4244",
  },
}));

export default useStyles;
