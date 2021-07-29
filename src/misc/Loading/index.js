import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

import styles from "./styles";

const Loading = ({ classes }) => {
  return (
    <Grid direction="row" justify="center" alignItems="center">
      <LinearProgress classes={{ root: classes.loaderRoot }} />
    </Grid>
  );
};

export default withStyles(styles)(Loading);
