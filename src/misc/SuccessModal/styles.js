import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  successModalContainer: {
    fontFamily: "Montserrat",
    width: "100%",
    height: "100%",
  },
  successModalCardContainer: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  successModalHeader: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  successModalSubheader: {
    fontSize: "1.2rem",
    fontWeight: 500,
  },
  successModalBtnRoot: {
    fontFamily: "Montserrat",
    color: "white",
    background: "#1d6d86",
    "&:hover": {
      background: "#1d6d86",
    },
  },
  successModalBtnLink: {
    textDecoration: "none",
  },
}));

export default useStyles;
