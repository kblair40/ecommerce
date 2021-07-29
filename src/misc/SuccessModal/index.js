import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import { authActions } from "../../store/authSlice";

const SuccessModal = ({ mainText, subText, buttonText, redirectTo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className={classes.successModalContainer}>
      <Card elevation={24} className={classes.successModalCardContainer}>
        <div className={classes.successModalHeader}>{mainText}</div>
        <div className={classes.successModalSubheader}>{subText}</div>

        <Link className={classes.successModalBtnLink} to={redirectTo}>
          <Button
            onClick={handleClick}
            classes={{ root: classes.successModalBtnRoot }}
            variant="contained"
            fullWidth
          >
            {buttonText}
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default SuccessModal;
