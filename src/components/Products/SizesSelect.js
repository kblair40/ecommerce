import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Montserrat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "-.5rem 0 1rem 0",
    color: "red",
  },
  sizeBtnInactive: {
    fontFamily: "Oswald",
    color: "#0c0c0d",
    fontWeight: 400,
    transitionDuration: "1s",
    "&:hover": {
      fontWeight: 500,
    },
  },
  sizeBtnActive: {
    background: "#a0a0a1",
    fontFamily: "Oswald",
    color: "#0c0c0d",
    "&:hover": {
      background: "#a0a0a1",
    },
  },
  buttonGroupError: {
    border: "1px solid red",
    fontFamily: "Oswald",
    zIndex: 10,
  },
  errorMsg: {
    margin: ".2rem 0",
    color: "#ff4244",
  },
}));

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
