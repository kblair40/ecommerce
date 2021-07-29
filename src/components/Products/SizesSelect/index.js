import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../../store/cartSlice";
import useStyles from "./styles";

const SizesSelect = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeSize = useSelector((state) => state.cart.chosenSize);
  const hasError = useSelector((state) => state.cart.hasError);

  const setSize = (e) => {
    e.stopPropagation();
    dispatch(
      cartActions.setSize({ chosenSize: e.target.innerText.toLowerCase() })
    );
  };

  return (
    <div className={classes.root}>
      {hasError && (
        <p style={{ margin: ".2rem 0", color: "#ff4244" }}>
          Please select a size
        </p>
      )}
      <ButtonGroup className={`${hasError && classes.buttonGroupError}`}>
        <Button
          className={
            activeSize === "s" ? classes.sizeBtnActive : classes.sizeBtnInactive
          }
          value="s"
          onClick={setSize}
          disableRipple
        >
          S
        </Button>
        <Button
          className={
            activeSize === "m" ? classes.sizeBtnActive : classes.sizeBtnInactive
          }
          value="m"
          onClick={setSize}
          disableRipple
        >
          M
        </Button>
        <Button
          className={
            activeSize === "l" ? classes.sizeBtnActive : classes.sizeBtnInactive
          }
          value="l"
          onClick={setSize}
          disableRipple
        >
          L
        </Button>
        <Button
          className={
            activeSize === "xl"
              ? classes.sizeBtnActive
              : classes.sizeBtnInactive
          }
          value="xl"
          onClick={setSize}
          disableRipple
        >
          XL
        </Button>
        <Button
          className={
            activeSize === "xxl"
              ? classes.sizeBtnActive
              : classes.sizeBtnInactive
          }
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
