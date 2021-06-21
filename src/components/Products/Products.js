import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";

import Product from "./Product";
import ProductDialog from "./ProductDialog";
import { productDialogActions } from "../../store/productDialogSlice";
import { PRODUCTS } from "../../constants";

const useStyles = makeStyles({
  productsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  productsList: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "4rem",
  },
});

const Products = () => {
  const params = useParams();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const dialogShowing = useSelector((state) => state.detailsDialog.showing);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    if (params.category !== "home") {
      setProducts(
        PRODUCTS.filter((product) => product.category.includes(params.category))
      );
    } else {
      setProducts(PRODUCTS);
    }

    setLoading(false);
  }, [params.category]);

  const handleProductClick = (
    id,
    title,
    price,
    description,
    category,
    image,
    needsSizes
  ) => {
    dispatch(
      productDialogActions.showDialog({
        id,
        title,
        price,
        description,
        category,
        image,
        needsSizes,
      })
    );
  };

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
      <div className={classes.productsContainer}>
        <List className={classes.productsList}>
          {products.map((prod) => (
            <Product
              key={prod.id}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              description={prod.description}
              category={prod.category}
              image={prod.image}
              needsSizes={prod.needsSizes}
              handleProductClick={handleProductClick}
            />
          ))}
        </List>
        <ProductDialog showing={dialogShowing} />
      </div>
    );
  }
};

export default Products;
