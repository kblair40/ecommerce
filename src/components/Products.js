import React from "react";
import axios from "axios";
import { PRODUCTS } from "../constants";
import Product from "./Product";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  productsContainer: {
    display: "flex",
    // justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});

const Products = () => {
  const classes = useStyles();
  return (
    <ul className={classes.productsContainer}>
      {PRODUCTS.map((prod) => (
        <Product
          key={prod.id}
          id={prod.id}
          title={prod.title}
          price={prod.price}
          description={prod.description}
          category={prod.category}
          image={prod.image}
        />
      ))}
    </ul>
  );
};

export default Products;
