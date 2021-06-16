import React from "react";
import { PRODUCTS } from "../constants";
import Product from "./Product";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  productsContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const categories = [
  "electronics",
  "jewelery",
  "men clothing",
  "women clothing",
];

const Products = ({ category }) => {
  const classes = useStyles();
  let products = PRODUCTS.filter((product) =>
    product.category.includes(category)
  );
  // if (category === "clothing") {
  //   products = PRODUCTS.filter((product) =>
  //     product.category.includes("clothing")
  //   );
  // } else {}
  // PRODUCTS.filter(product => product.category === '')
  return (
    <ul className={classes.productsContainer}>
      {products.map((prod) => (
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
