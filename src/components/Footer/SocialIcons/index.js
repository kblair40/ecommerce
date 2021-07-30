import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";

import useStyles from "./styles";

const SocialIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h4>Connect With Us</h4>

      <div className={classes.icons}>
        <div>
          <FacebookIcon fontSize="medium" />
        </div>
        <div>
          <TwitterIcon fontSize="medium" />
        </div>
        <div>
          <InstagramIcon fontSize="medium" />
        </div>
        <div>
          <PinterestIcon fontSize="medium" />
        </div>
        <div>
          <YouTubeIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
