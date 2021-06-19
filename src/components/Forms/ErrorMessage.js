import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";

const ErrorMessage = ({ input }) => {
  const notEmailErrorMessage = "Input cannot be empty";
  const emailErrorMessage = "Invalid email address";
  return (
    <FormHelperText>
      {input === "email" ? emailErrorMessage : notEmailErrorMessage}
    </FormHelperText>
  );
};

export default ErrorMessage;
