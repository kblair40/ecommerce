import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";

const ErrorMessage = ({ input }) => {
  const notEmailErrorMessage = "Input cannot be empty";
  const emailErrorMessage = "Invalid email address";
  return (
    <FormHelperText style={{ fontFamily: "Montserrat", color: "#ff4244" }}>
      {input === "email" ? emailErrorMessage : notEmailErrorMessage}
    </FormHelperText>
  );
};

export default ErrorMessage;
