import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { MURICA } from "../../constants";
import useInput from "../../hooks/useInput";
import ErrorMessage from "./ErrorMessage";

const useStyles = makeStyles((theme) => ({
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
    flexWrap: "wrap",
    marginBottom: "1rem",
    justifyContent: "space-between",
  },
  inputCol: {
    width: "30%",
  },
  submitOrderBtn: {
    width: "100%",
  },
}));

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const AddressForm = () => {
  const classes = useStyles();

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    handleChange: handleAddressChange,
    handleBlur: handleAddressBlur,
    reset: resetAddress,
  } = useInput(isNotEmpty);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    handleChange: handleCityChange,
    handleBlur: handleCityBlur,
    reset: resetCity,
  } = useInput(isNotEmpty);
  const {
    value: stateValue,
    isValid: stateIsValid,
    hasError: stateHasError,
    handleChange: handleStateChange,
    handleBlur: handleStateBlur,
    reset: resetState,
  } = useInput(isNotEmpty);
  const {
    value: zipValue,
    isValid: zipIsValid,
    hasError: zipHasError,
    handleChange: handleZipChange,
    handleBlur: handleZipBlur,
    reset: resetZip,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    addressIsValid &&
    cityIsValid &&
    stateIsValid &&
    zipIsValid
  ) {
    formIsValid = true;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      console.log("NOT SUBMITTED: FORM IS INVALID");
      return;
    }
    console.log(
      "SUBMITTED VALUES:",
      nameValue,
      emailValue,
      addressValue,
      cityValue,
      stateValue,
      zipValue
    );

    resetName();
    resetEmail();
    resetAddress();
    resetCity();
    resetState();
    resetZip();
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
            value={nameValue}
            onChange={handleNameChange}
            error={nameHasError}
            onBlur={handleNameBlur}
            fullWidth
          />
          {nameHasError && <ErrorMessage />}
        </div>

        <div className={classes.inputRow}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name="email"
            value={emailValue}
            onChange={handleEmailChange}
            error={emailHasError}
            onBlur={handleEmailBlur}
            fullWidth
          />
          {emailHasError && <ErrorMessage input="email" />}
        </div>

        <div className={classes.inputRow}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input
            id="address"
            name="address"
            value={addressValue}
            error={addressHasError}
            onChange={handleAddressChange}
            onBlur={handleAddressBlur}
            fullWidth
          />
          {addressHasError && <ErrorMessage />}
        </div>

        <div className={classes.multipleInputRow}>
          <div className={classes.inputCol}>
            <InputLabel htmlFor="city">City</InputLabel>
            <Input
              name="city"
              value={cityValue}
              error={cityHasError}
              onChange={handleCityChange}
              onBlur={handleCityBlur}
            />
            {cityHasError && <ErrorMessage />}
          </div>
          <div className={classes.inputCol}>
            <InputLabel htmlFor="state">State</InputLabel>
            <Select
              id="state"
              name="state"
              value={stateValue}
              error={stateHasError}
              onChange={handleStateChange}
              onBlur={handleStateBlur} // Shouldn't be necessary
            >
              {MURICA.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
            {stateHasError && <ErrorMessage />}
          </div>

          <div className={classes.inputCol}>
            <InputLabel htmlFor="zip">Zip</InputLabel>
            <Input
              id="zip"
              name="zip"
              value={zipValue}
              error={zipHasError}
              onChange={handleZipChange}
              onBlur={handleZipBlur}
            />
            {zipHasError && <ErrorMessage />}
          </div>
        </div>
        <Button
          type="submit"
          className={classes.submitOrderBtn}
          variant="contained"
          color="primary"
          disabled={!formIsValid}
        >
          Submit Order
        </Button>
      </form>
    </Card>
  );
};

export default AddressForm;
