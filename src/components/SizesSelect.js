import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const SizesSelect = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup>
        <Button>S</Button>
        <Button>M</Button>
        <Button>L</Button>
        <Button>XL</Button>
        <Button>XXL</Button>
      </ButtonGroup>
    </div>
  );
};

export default SizesSelect;
