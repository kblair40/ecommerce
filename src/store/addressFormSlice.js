import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  nameInput: "",
  nameInputIsValid: true,
  emailInput: "",
  emailInputIsValid: true,
  addressInput: "",
  addressInputIsValid: true,
  cityInput: "",
  cityInputIsValid: true,
  stateInput: "",
  stateInputIsValid: true,
  zipInput: "",
  zipInputIsValid: true,
  formIsValid: true,
};

const addressFormSlice = createSlice({
  name: "addressForm",
  initialState: {
    nameInput: "",
    nameInputIsValid: true,
    emailInput: "",
    emailInputIsValid: true,
    addressInput: "",
    addressInputIsValid: true,
    cityInput: "",
    cityInputIsValid: true,
    stateInput: "",
    stateInputIsValid: true,
    zipInput: "",
    zipInputIsValid: true,
    formIsValid: true,
  },

  reducers: {
    manageName(state, action) {
      const name = action.payload.val;
      state.nameInput = name;
      state.nameInputIsValid = validators.name(name);
    },
    manageEmail(state, action) {
      const email = action.payload.val;
      console.log("email received", email);
      state.emailInput = email;
      state.emailInputIsValid = validators.email(email);
    },
    manageAddress(state, action) {
      const address = action.payload.val;
      console.log("address received", address);
      state.addressInput = address;
      state.addressInputIsValid = validators.address(address);
    },
    manageCity(state, action) {
      const city = action.payload.val;
      console.log("city received", city);
      state.cityInput = city;
      state.cityInputIsValid = validators.zip(city);
    },
    manageState(state, action) {
      const st = action.payload.val;
      console.log("state received", st);
      state.stateInput = st;
      state.stateInputIsValid = validators.state(st);
    },
    manageZip(state, action) {
      const zip = action.payload.val;
      console.log("zip received", zip);
      state.zipInput = zip;
      state.zipInputIsValid = validators.zip(zip);
    },
    clearForm(state) {
      state = defaultState;
    },
  },
});

export const addressFormActions = addressFormSlice.actions;

export default addressFormSlice.reducer;

// VALIDATORS

const validators = {
  name: (name) => /^[a-z]{2,15}$/i.test(name),
  email: (email) => /^[a-z0-9]+@[a-z]+\.com$/i.test(email),
  address: (address) => /^[a-z][a-z]{1,15}/i.test(address),
  city: (city) => /^[a-z]{2,16}/i.test(city),
  state: (state) => /^[a-z]{2}$/i.test(state),
  zip: (zip) => /[0-9]{5}/.test(zip),
};
