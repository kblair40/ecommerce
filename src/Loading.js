import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  loaderRoot: {
    marginTop: "20vh",
    background: "#0c0c0d",
    "& .MuiLinearProgress-bar": {
      background: "#a0a1a1",
    },
  },
};

const Loading = ({ classes }) => {
  return (
    <Grid direction="row" justify="center" alignItems="center">
      <LinearProgress classes={{ root: classes.loaderRoot }} />
    </Grid>
  );
};

export default withStyles(styles)(Loading);
