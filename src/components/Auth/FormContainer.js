import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "4rem 0",
    height: "40vh",
  },
  formContainerCardRoot: {
    fontFamily: "Montserrat",
    padding: "1rem",
  },
  submitBtnRoot: {
    background: "#1d6d86",
    color: "white",
    fontFamily: "Montserrat",
  },
};

const FormContainer = ({ classes, children }) => {
  const handleSubmit = () => {};
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleModeChange = () => {
    setIsLoginMode((state) => !state);
  };

  return (
    <div className={classes.formContainer}>
      <Card classes={{ root: classes.formContainerCardRoot }}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formContentContainer}>{children}</div>
          <Button
            variant="contained"
            classes={{ root: classes.submitBtnRoot }}
            type="submit"
            fullWidth
          >
            Login
          </Button>
        </form>
        <Button variant="text"></Button>
        {isLoginMode && <div>LOGIN MODE!!</div>}
      </Card>
    </div>
  );
};

export default withStyles(styles)(FormContainer);
