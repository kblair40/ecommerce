import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  genderFilterContainer: {
    position: "relative",
    top: "4rem",
    left: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "8rem",
  },
  filterRoot: {
    width: "4.5rem",
    background: "transparent",
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
  },
  filterLabel: {
    fontFamily: "Montserrat, sans-serif",
  },
  select: {
    fontFamily: "Montserrat, sans-serif",
    textAlign: "center",
    "&:before": {
      borderBottom: "2px solid #0c0c0d",
      zIndex: 10,
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
  },
});

export default useStyles;
