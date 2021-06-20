import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector } from "react-redux";

const DarkMode = () => {
  const isOpen = useSelector((state) => state.mode.snackbarOpen);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={isOpen}
        message="😢😢😢 Sorry, dark mode is coming soon!"
      />
    </div>
  );
};

export default DarkMode;
