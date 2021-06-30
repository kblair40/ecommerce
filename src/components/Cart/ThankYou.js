import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  thankYouContainer: {
    position: "absolute",
    width: "100%",
    color: "#0c0c0d",
    fontFamily: "Montserrat",
    display: "flex",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
  },
  thankYouCard: {
    position: "relative",
    width: "50%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "13rem",
  },
  cardHeader: {
    marginTop: "1rem",
    "& h1": {
      textAlign: "center",
      fontSize: "3rem",
      fontWeight: 600,
      margin: 0,
    },
    "& h3": {
      textAlign: "center",
      fontWeight: 500,
      margin: 0,
    },
  },
  cardContent: {
    "& p": {
      textAlign: "center",
      "& span": {
        fontWeight: 500,
        textDecoration: "underline",
      },
    },
  },
  goHomeBtnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  },
  goHomeBtnRoot: {
    background: "#1d6d86",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "1.2rem",
    width: "90%",
    "&:hover": {
      background: "#1d6d86",
    },
  },
  closeBtnRoot: {
    position: "absolute",
    top: ".2rem",
    right: ".2rem",
  },
  [theme.breakpoints.down("sm")]: {
    thankYouCard: {
      width: "75%",
    },
  },
  [theme.breakpoints.down("xs")]: {
    thankYouCard: {
      width: "90%",
    },
  },
}));

const ThankYou = ({ handleClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.thankYouContainer}>
      <Card elevation={24} className={classes.thankYouCard}>
        <div className={classes.cardHeader}>
          <h1>Thank You!</h1>
          <h3>Your order should arrive in 5 - 7 business days</h3>
        </div>
        <div className={classes.cardContent}>
          <p>
            Questions? Concerns? Email us at{" "}
            <span className={classes.email}>notarealemail@fakeemail.com</span>
          </p>
        </div>
        <Link className={classes.goHomeBtnContainer} to="/">
          <Button
            classes={{ root: classes.goHomeBtnRoot }}
            variant="contained"
            fullWidth
          >
            Go Home
          </Button>
        </Link>
        <IconButton
          onClick={handleClose}
          classes={{ root: classes.closeBtnRoot }}
        >
          <CloseIcon />
        </IconButton>
      </Card>
    </div>
  );
};

export default ThankYou;
