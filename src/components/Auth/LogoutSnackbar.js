import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector } from "react-redux";

const LogoutSnackbar = () => {
  const snackbarOpen = useSelector((state) => state.auth.snackbarOpen);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snackbarOpen}
        autoHideDuration={4000}
        // onClose={handleClose}
        message="SUCCESSFULLY LOGGED OUT"
      />
    </div>
  );
};

export default LogoutSnackbar;
