import React from "react";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { MURICA } from "../../../utils/constants";
import useInput from "../../../hooks/useInput";
import ErrorMessage from "./ErrorMessage";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const AddressForm = ({ handleAddressSubmit }) => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.items);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
  } = useInput(isEmail);
  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    handleChange: handleAddressChange,
    handleBlur: handleAddressBlur,
  } = useInput(isNotEmpty);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    handleChange: handleCityChange,
    handleBlur: handleCityBlur,
  } = useInput(isNotEmpty);
  const {
    value: stateValue,
    isValid: stateIsValid,
    hasError: stateHasError,
    handleChange: handleStateChange,
    handleBlur: handleStateBlur,
  } = useInput(isNotEmpty);
  const {
    value: zipValue,
    isValid: zipIsValid,
    hasError: zipHasError,
    handleChange: handleZipChange,
    handleBlur: handleZipBlur,
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

  return (
    <Fade in={true} timeout={400}>
      <Card className={classes.checkoutFormContainer} elevation={0}>
        <h1 className={classes.addressFormTitle}>Shipping Address</h1>
        <form onSubmit={handleAddressSubmit}>
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
