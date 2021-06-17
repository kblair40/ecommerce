import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sizeBtnActive: {
    background: "rgba(0,0,0,0.3)",
    "&:hover": {
      background: "rgba(0,0,0,0.3)",
    },
  },
}));

const SizesSelect = () => {
  const [activeSize, setActiveSize] = useState(null);
  const classes = useStyles();

  const setSize = (e) => {
    e.stopPropagation();
    setActiveSize(e.target.innerText.toLowerCase());
  };

  return (
    <div className={classes.root}>
      <ButtonGroup>
        <Button
          className={activeSize === "s" && classes.sizeBtnActive}
          value="s"
          onClick={setSize}
          disableRipple
        >
          S
        </Button>
        <Button
          className={activeSize === "m" && classes.sizeBtnActive}
          value="m"
          onClick={setSize}
          disableRipple
        >
          M
        </Button>
        <Button
          className={activeSize === "l" && classes.sizeBtnActive}
          value="l"
          onClick={setSize}
          disableRipple
        >
          L
        </Button>
        <Button
          className={activeSize === "xl" && classes.sizeBtnActive}
          value="xl"
          onClick={setSize}
          disableRipple
        >
          XL
        </Button>
        <Button
          className={activeSize === "xxl" && classes.sizeBtnActive}
          value="xxl"
          onClick={setSize}
          disableRipple
        >
          XXL
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default SizesSelect;