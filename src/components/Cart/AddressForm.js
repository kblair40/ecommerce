import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import { useSelector, useDispatch } from "react-redux";
import { addressFormActions as actions } from "../../store/addressFormSlice";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { MURICA } from "../../constants";

const useStyles = makeStyles({
  checkoutFormContainer: {
    fontFamily: "Oswald",
    fontWeight: 800,
    padding: "1rem",
  },
  inputRow: {
    marginBottom: "1rem",
  },
  multipleInputRow: {
    display: "flex",
    marginBottom: "1rem",
    justifyContent: "space-between",
  },
  inputCol: {
    width: "30%",
  },
  submitOrderBtn: {
    width: "100%",
  },
});

// nameInput: "",
//   nameInputIsValid: true,
//   emailInput: "",
//   emailInputIsValid: true,
//   addressInput: "",
//   addressInputIsValid: true,
//   cityInput: "",
//   cityInputIsValid: true,
//   stateInput: "",
//   stateInputIsValid: true,
//   zipInput: "",
//   zipInputIsValid: true,
//   formIsValid: true,

const CheckoutForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    nameInput,
    nameInputIsValid,
    emailInput,
    emailInputIsValid,
    addressInput,
    addressInputIsValid,
    cityInput,
    cityInputIsValid,
    stateInput,
    stateInputIsValid,
    zipInput,
    zipInputIsValid,
    formIsValid,
  } = useSelector((state) => state.addressForm);

  const handleFormUpdate = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "fullName":
        dispatch(actions.manageName({ val: value }));
        return;
      case "email":
        dispatch(actions.manageEmail({ val: value }));
        return;
      case "address":
        dispatch(actions.manageAddress({ val: value }));
        return;
      case "city":
        dispatch(actions.manageCity({ val: value }));
        return;
      case "state":
        dispatch(actions.manageState({ val: value }));
        return;
      case "zip":
        dispatch(actions.manageZip({ val: value }));
        return;
      default:
        console.log("NO MATCH FOUND!");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.checkoutFormContainer} elevation={0}>
      <h1>Shipping Address</h1>
      <form onSubmit={handleFormSubmit}>
        <div className={classes.inputRow}>
          <InputLabel htmlFor="fullName">Full Name</InputLabel>
          <Input
            id="fullName"
            name="fullName"
            onChange={handleFormUpdate}
            fullWidth
          />
        </div>

        <div className={classes.inputRow}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name="email"
            onChange={handleFormUpdate}
            fullWidth
          />
        </div>

        <div className={classes.inputRow}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input
            id="address"
            name="address"
            onChange={handleFormUpdate}
            fullWidth
          />
        </div>

        <div className={classes.multipleInputRow}>
          <div className={classes.inputCol}>
            <InputLabel htmlFor="city">City</InputLabel>
            <Input name="city" onChange={handleFormUpdate} />
          </div>
          <div className={classes.inputCol}>
            <InputLabel htmlFor="state">State</InputLabel>
            {/* < */}
            <Select
              id="state"
              name="state"
              onChange={handleFormUpdate}
              value={stateInput}
            >
              {MURICA.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className={classes.inputCol}>
            <InputLabel htmlFor="zip">Zip</InputLabel>
            <Input name="zip" onChange={handleFormUpdate} />
          </div>
        </div>
        <Button
          type="submit"
          className={classes.submitOrderBtn}
          variant="contained"
          color="primary"
        >
          Submit Order
        </Button>
      </form>
    </Card>
  );
};

export default CheckoutForm;
