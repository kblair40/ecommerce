import React from "react";
import Fade from "@material-ui/core/Fade";

const FadeTransition = (props) => {
  return (
    <Fade in={true} timeout={700}>
      {props.children}
    </Fade>
  );
};

export default FadeTransition;
