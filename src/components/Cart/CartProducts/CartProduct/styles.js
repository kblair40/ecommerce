import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    color: "#0c0c0d",
    minWidth: "18rem",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      maxWidth: "20rem",
    },
  },
  mainInfoContainer: {
    minWidth: "19rem",
    maxWidth: "22rem",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Montserrat",
    fontWeight: 300,
  },
  cartItemImageContainer: {
    minWidth: "6rem",
    maxWidth: "6rem",
    marginRight: "1rem",
  },
  cartItemImage: {
    display: "block",
    width: "100%",
    height: "auto",
    maxWidth: "100%",
  },
  mainInfo: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
  },
  itemTitle: {
    fontWeight: 500,
    width: "12rem",
  },
  mainInfoSubContainer: {
    display: "flex",
    flexDirection: "column",
  },
  info: {
    margin: 0,
  },
}));

export default useStyles;
