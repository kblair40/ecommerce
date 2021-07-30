import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subtextContainer: {
    width: "98%",
    color: "#0c0c0d",
    display: "flex",
    justifyContent: "space-between",
  },
  textColumn: {
    color: "#0c0c0d",
    fontFamily: "Montserrat",
    width: "32%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& p": {
      margin: ".5rem 0",
    },
  },
  [theme.breakpoints.down("sm")]: {
    textColumn: {
      "& p": {
        fontSize: ".9rem",
      },
    },
  },
  [theme.breakpoints.down("xs")]: {
    textColumn: {
      "& p": {
        fontSize: ".8rem",
      },
    },
  },
}));

export default useStyles;
