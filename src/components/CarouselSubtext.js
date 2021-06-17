import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  subtextContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  text: {
    fontFamily: "Montserrat",
    width: "30%",
  },
};

const CarouselSubtext = ({ classes }) => {
  return (
    <div className={classes.subtextContainer}>
      <p className={classes.text}>
        Deserunt non adipisicing exercitation fugiat anim esse duis occaecat
        velit tempor ullamco minim sint in. Ad excepteur laborum Lorem id
        pariatur officia id consectetur pariatur. Ad excepteur laborum Lorem id
        pariatur officia id consectetur pariatur. Minim cupidatat ut enim aliqua
        in proident in irure labore Lorem. Qui non ea ea consectetur nostrud. Ex
        quis officia aute minim est reprehenderit ad voluptate est nostrud irure
        occaecat. Fugiat irure non labore nulla qui mollit consequat laborum
        aliqua. Duis nisi occaecat et aute dolore ullamco id aute laborum sit et
        sint.
      </p>
      <p className={classes.text}>
        Consectetur pariatur non adipisicing exercitation fugiat anim esse duis
        occaecat velit tempor ullamco minim sint in. Minim cupidatat ut enim
        aliqua in proident in irure labore Lorem. Ad excepteur laborum Lorem id
        pariatur officia id consectetur pariatur. Nulla tempor sunt esse ipsum.
        Cupidatat cupidatat eiusmod voluptate aliquip sint aute sit adipisicing
        ullamco sit reprehenderit reprehenderit elit. Sit qui et occaecat aliqua
        voluptate aute ipsum reprehenderit. Magna laborum nostrud amet sint.
        Consequat excepteur officia consectetur excepteur qui cupidatat deserunt
        commodo.
      </p>
      <p className={classes.text}>
        Minim sint in non adipisicing exercitation fugiat anim esse duis
        occaecat velit tempor ullamco minim sint in. Minim cupidatat ut enim
        aliqua in proident in irure labore Lorem. Ad excepteur laborum Lorem id
        pariatur officia id consectetur pariatur. Deserunt non adipisicing
        exercitation fugiat anim esse duis occaecat velit tempor ullamco minim
        sint in. Veniam officia in adipisicing consectetur minim magna Lorem
        adipisicing proident duis in. Aliqua velit dolore in excepteur commodo
        laborum commodo exercitation esse. Nostrud ullamco magna exercitation
        enim aliqua cupidatat quis Lorem do sunt. Sit dolor ea elit minim.
      </p>
    </div>
  );
};

export default withStyles(styles)(CarouselSubtext);
