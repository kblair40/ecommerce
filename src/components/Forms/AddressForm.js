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
    // background: "rgba(0,0,0,0.1)",
    fontFamily: "Oswald",
    fontWeight: 800,
    padding: "1rem",
    // marginTop: "2rem",
  },
  inputRoot: {
    fontFamily: "Montserrat",
    // borderColor: "red",
    "&:after": {
      borderColor: "#a0a1a1", // reg focus color here
    },
    "&.Mui-error:after": {
      borderColor: "#ff4244", // error color here
    },
  },
  // inputError: {},

  inputRow: {
    marginBottom: "1rem",
    width: "100%", // used to be 100%
    maxWidth: "30rem", // used to be 30rem
  },
  multipleInputRow: {
    width: "100%", // used to be 100%
    maxWidth: "30rem", // used to be 30rem
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "1rem",
    // justifyContent: "space-between",
  },
  inputCol: {
    width: "32%",
    margin: "0 .5% 1rem .5%",
    // marginBottom: "1rem",
    minWidth: "5rem",
  },
  selectRoot: {
    fontFamily: "Montserrat",
    paddingLeft: ".2rem",
    paddingRight: ".2rem",
    minWidth: "2rem",
    "&:after": {
      borderColor: "#a0a1a1",
    },
  },
  selectRootError: {
    fontFamily: "Montserrat",
    paddingLeft: ".2rem",
    paddingRight: ".2rem",
    minWidth: "2rem",
    "&.MuiSelect-select:after": {
      borderColor: "green", // NOT WORKING
    },
  },
  submitOrderBtn: {
    width: "100%",
    backgroundColor: "purple",
    "&.MuiButton-root": {
      color: "white",
      backgroundColor: "rgba(100,200,100,1)",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20rem", // used to be 30rem
    },
  },
  buttonDisabled: {
    "&.MuiButton-root": {
      backgroundColor: "#f0f0f0",
      color: "black",
    },
    backgroundColor: "green",
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
          <InputLabel classes={{ root: classes.inputRoot }} htmlFor="fullName">
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
          <div className={classes.inputCol}>
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
          <div className={classes.inputCol}>
            <InputLabel classes={{ root: classes.inputRoot }} htmlFor="state">
              State
            </InputLabel>
            <Select
              // autoWidth={true}
              className={`${
                stateHasError ? classes.selectRootError : classes.selectRoot
              }`}
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

          <div className={classes.inputCol}>
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
          // className={classes.submitOrderBtn}
          variant="contained"
          classes={{
            root: classes.submitOrderBtn,
            // label: classes.submitOrderBtn,
            // contained: classes.submitOrderBtn,
            disabled: classes.buttonDisabled,
          }}
          disabled={!formIsValid}
        >
          Submit Order
        </Button>
      </form>
    </Card>
  );
};

export default AddressForm;
