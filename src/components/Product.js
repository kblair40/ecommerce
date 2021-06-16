import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  cardRoot: {
    margin: "1rem",
    position: "relative",
    width: "30%",
  },
  imgRoot: {
    width: 300,
    height: 140,
  },
  price: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginBottom: ".5rem",
  },
  description: {
    fontFamily: "Montserrat",
  },
  category: {
    fontFamily: "Montserrat",
    textAlign: "right",
    fontSize: ".8rem",
  },
});

const Product = ({ title, price, description, category, image }) => {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.cardRoot }}>
      <CardHeader title={title} />
      <CardMedia
        component="img"
        alt={description}
        image={image}
        title={description}
        classes={{ root: classes.imgRoot }}
      />
      <CardContent>
        <div className={classes.price}>${price.toFixed(2)}</div>

        <div className={classes.description}>{description}</div>
        <div className={classes.category}>{category}</div>
      </CardContent>
    </Card>
  );
};

export default Product;
