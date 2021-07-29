import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    color: "#0c0c0d",
    fontSize: "1.2rem",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    margin: ".5rem",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  imgRoot: {
    flexGrow: 1,
    cursor: "pointer",
    maxWidth: "100%",
  },
  price: {
    fontWeight: "bold",
    fontFamily: "Montserrat, sans-serif",
    marginBottom: "1.5rem",
    alignSelf: "flex-end",
    color: "#0c0c0d",
    flexGrow: 1,
  },
  actionsRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardRoot: {
    margin: "1rem .5rem",
    position: "relative",
    width: "22%",
    minWidth: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // width: "120%",
      width: "100vw",
    },
    [theme.breakpoints.up("sm")]: {
      width: "31%",
    },
    [theme.breakpoints.up("md")]: {
      width: "23%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "18%",
    },
  },
}));

export default useStyles;
