import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  authFormContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "4rem 0",
  },
  authFormContainerCardRoot: {
    fontFamily: "Montserrat",
    padding: "1rem",
    minWidth: "15rem",
    width: "100%",
    maxWidth: "25rem",
    margin: "1rem",
  },
  loginFormHeader: {
    color: "#0c0c0d",
  },
  toggleModeBtnRoot: {
    fontFamily: "Montserrat",
    color: "#a0a1a1",
    transition: "color .3s",
    margin: 0,
    padding: ".5rem 0",
    "&:hover": {
      color: "#0c0c0d",
      background: "transparent",
    },
  },
}));

export default useStyles;
