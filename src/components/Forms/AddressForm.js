import React from "react";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useSelector } from "react-redux";

import { useStyles } from "../../styles/AddressFormStyles";
import { MURICA } from "../../constants";
import useInput from "../../hooks/useInput";
import ErrorMessage from "./ErrorMessage";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

// VALIDATORS
// const validators = {
//   name: (name) => /^[a-z]{2,15}$/i.test(name),
//   email: (email) => /^[a-z0-9]+@[a-z]+\.com$/i.test(email),
//   address: (address) => /^[0-9]+\s[a-z]{1,15}/i.test(address),
//   city: (city) => /^[a-z]{2,16}/i.test(city),
//   state: (state) => /^[a-z]{2}$/i.test(state),
//   zip: (zip) => /[0-9]{5}/.test(zip),
// };

const AddressForm = ({ handleOrderSubmit }) => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.items);

  const {
    value: nameValue,
    isValid: nameIsValid,
    // isValid: nameIsValid,
    hasError: nameHasError,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    // isValid: ,
    hasError: emailHasError,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: addressValue,
    // isValid: addressIsValid,
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
    zipIsValid &&
    cartItems.length
  ) {
    formIsValid = true;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    resetName();
    resetEmail();
    resetAddress();
    resetCity();
    resetState();
    resetZip();
    handleOrderSubmit(e);
  };

  return (
    <Fade in={true} timeout={400}>
      <Card className={classes.checkoutFormContainer} elevation={0}>
        <h1 className={classes.addressFormTitle}>Shipping Address</h1>
        <form onSubmit={handleFormSubmit}>
          <div className={classes.inputRow}>
            <InputLabel
              classes={{ root: classes.inputRoot }}
              htmlFor="fullName"
            >
              Full Name
            </InputLabel>
            <Input
              id="fullName"
              name="fullName"
              value={nameValue}
              onChange={handleNameChange}
              error={nameHasError}
              onBlur={handleNameBlur}
              classes={{
                root: classes.inputRoot,
              }}
              fullWidth
            />
            {nameHasError && <ErrorMessage />}
          </div>

          <div className={classes.inputRow}>
            <InputLabel classes={{ root: classes.inputRoot }} htmlFor="email">
              Email
            </InputLabel>
            <Input
              classes={{ root: classes.inputRoot }}
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
            <InputLabel classes={{ root: classes.inputRoot }} htmlFor="address">
              Address
            </InputLabel>
            <Input
              classes={{ root: classes.inputRoot }}
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
            <div className={classes.cityInput}>
              <InputLabel classes={{ root: classes.inputRoot }} htmlFor="city">
                City
              </InputLabel>
              <Input
                classes={{ root: classes.inputRoot }}
                name="city"
                disableUnderline={false}
                value={cityValue}
                error={cityHasError}
                onChange={handleCityChange}
                onBlur={handleCityBlur}
              />
              {cityHasError && <ErrorMessage />}
            </div>
            <div className={classes.stateInput}>
              <InputLabel classes={{ root: classes.inputRoot }} htmlFor="state">
                State
              </InputLabel>
              <Select
                className={`${
                  stateHasError ? classes.selectRootError : classes.selectRoot
                } `}
                id="state"
                name="state"
                value={stateValue}
                error={stateHasError}
                onChange={handleStateChange}
                onBlur={handleStateBlur}
                fullWidth
              >
                {MURICA.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
              {stateHasError && <ErrorMessage />}
            </div>

            <div className={classes.zipInput}>
              <InputLabel classes={{ root: classes.inputRoot }} htmlFor="zip">
                Zip
              </InputLabel>
              <Input
                classes={{ root: classes.inputRoot }}
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
            variant="contained"
            classes={{
              root: classes.submitOrderBtn,
              disabled: classes.buttonDisabled,
            }}
            disabled={!formIsValid}
            disableFocusRipple
          >
            Submit Order
          </Button>
        </form>
      </Card>
    </Fade>
  );
};

export default AddressForm;
