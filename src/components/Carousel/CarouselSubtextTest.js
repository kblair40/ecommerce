import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

// TODO:
// 1. Change flexDirection to column at narrow (<500px?) widths
const useStyles = makeStyles((theme) => ({
  subtextContainer: {
    color: "#0c0c0d",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  text: {
    color: "#0c0c0d",
    fontFamily: "Montserrat",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "85vw",
    },
  },
}));
const CarouselSubtextTest = () => {
  const classes = useStyles();
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
        sint. Deserunt non adipisicing exercitation fugiat anim esse duis
        occaecat velit tempor ullamco minim sint in. Minim cupidatat ut enim
        aliqua in proident in irure labore Lorem. Qui non ea ea consectetur
        nostrud. Ex quis officia aute minim est reprehenderit ad voluptate est
        nostrud irure occaecat.
      </p>
      <p className={classes.text}>
        Consectetur pariatur non adipisicing exercitation fugiat anim esse duis
        occaecat velit tempor ullamco minim sint in. Minim cupidatat ut enim
        aliqua in proident in irure labore Lorem. Ad excepteur laborum Lorem id
        pariatur officia id consectetur pariatur. Nulla tempor sunt esse ipsum.
        Cupidatat cupidatat eiusmod voluptate aliquip sint aute sit adipisicing
        ullamco sit reprehenderit reprehenderit elit. Ad excepteur laborum Lorem
        id pariatur officia id consectetur pariatur. Minim cupidatat ut enim
        aliqua in proident in irure labore Lorem. Qui non ea ea consectetur
        nostrud. Ex quis officia aute minim est reprehenderit ad voluptate est
        nostrud irure occaecat. Fugiat irure non labore nulla qui mollit
        consequat laborum aliqua. Duis nisi occaecat et aute dolore ullamco id
        aute laborum sit et sint. Deserunt non adipisicing exercitation fugiat
        anim esse duis occaecat velit tempor ullamco minim sint in.
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
        Deserunt non adipisicing exercitation fugiat anim esse duis occaecat
        velit tempor ullamco minim sint in. Ad excepteur laborum Lorem id
        pariatur officia id consectetur pariatur. Ad excepteur laborum Lorem id
        pariatur officia id consectetur pariatur.
      </p>
    </div>
  );
};

export default CarouselSubtextTest;
