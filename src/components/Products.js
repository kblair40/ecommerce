import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants";
import Product from "./Product";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  productsContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const Products = () => {
  const params = useParams();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (params.category !== "home") {
      setProducts(
        PRODUCTS.filter((product) => product.category.includes(params.category))
      );
    } else {
      setProducts(PRODUCTS);
    }
    setLoading(false);
  }, [params.category]);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LinearProgress />
      </div>
    );
  } else {
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
  }
};

export default Products;
