import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { authActions } from "../../store/authSlice";

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

const SuccessModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className={classes.successModalContainer}>
      <Card elevation={24} className={classes.successModalCardContainer}>
        <div className={classes.successModalHeader}>Success!</div>
        <div className={classes.successModalSubheader}>
          Please return to login
        </div>
        <Link className={classes.successModalBtnLink} to="/auth">
          <Button
            onClick={handleClick}
            classes={{ root: classes.successModalBtnRoot }}
            variant="contained"
            fullWidth
          >
            Return to Login
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default SuccessModal;
