import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    color: "#0c0c0d",
    width: "80%",
    minWidth: "18rem",
    display: "flex",
    fontFamily: "Montserrat",
    fontWeight: 300,
    padding: ".5rem 0",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      maxWidth: "20rem",
    },
  },
  // COLUMN #1
  mainInfoContainer: {
    minWidth: "19rem",
    maxWidth: "22rem",
    display: "flex",
    justifyContent: "space-between",
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
  // COLUMN #2
  updateCartActions: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
    },
  },
  qtyUpdateContainer: {
    width: "10rem",
    marginBottom: ".5rem",
    marginLeft: ".5rem",
    [theme.breakpoints.down("sm")]: {
      width: "7rem",
      marginRight: "1rem",
    },
  },
  removeBtnRoot: {
    minWidth: "7rem",
    padding: ".2rem",
    marginRight: "1rem",
    "&:hover": {
      background: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1.5rem",
    },
  },
  removeItemBtnText: {
    margin: 0,
  },
  // COLUMN #3
  priceContainer: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    width: "10rem",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      marginTop: ".5rem",
    },
  },
  priceSubtext: {
    marginTop: ".2rem",
    fontWeight: "300",
    fontSize: ".8rem",
    width: "10rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: ".5rem",
    },
  },
}));

export { useStyles };
