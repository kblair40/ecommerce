import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";

import useStyles from "./styles";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <section className={classes.section}>
          <h4 className={classes.sectionHeader}>Services</h4>
          <ul>
            <li>Help & FAQs</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </section>

        <section className={classes.section}>
          <h4 className={classes.sectionHeader}>Our Stores</h4>
          <ul>
            <li>Locations & Hours</li>
            <li>Events</li>
            <li>Catalogs</li>
            <li>Send Feedback</li>
            <li>Something Else</li>
          </ul>
        </section>

        <section className={classes.section}>
          <h4 className={classes.sectionHeader}>Ecommerce, Inc.</h4>
          <ul>
            <li>Corporate Site</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </section>

        <section className={classes.section}>
          <SocialIcons />
        </section>
      </footer>
      <div className={classes.copyright}>
        <CopyrightIcon
          classes={{ root: classes.copyrightIcon }}
          fontSize="small"
        />
        <span>&nbsp;2021 Ecommerce, Inc.</span>
      </div>
    </div>
  );
};

export default Footer;
