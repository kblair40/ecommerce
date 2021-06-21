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
  },
  sizeBtnActive: {
    background: "rgba(0,0,0,0.3)",
    "&:hover": {
      background: "rgba(0,0,0,0.3)",
    },
  },
  buttonGroupError: {
    border: "1px solid red",
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
