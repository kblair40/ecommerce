import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

import useStyles from "./styles";

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
