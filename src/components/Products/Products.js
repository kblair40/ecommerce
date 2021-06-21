import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import List from "@material-ui/core/List";
import Loading from "../../Loading";

import { useStyles } from "../../styles/ProductsStyles";
import Product from "./Product";
import ProductDialog from "./ProductDialog";
import { productDialogActions } from "../../store/productDialogSlice";
import { PRODUCTS } from "../../constants";
import Fade from "../Transitions/FadeTransition";
import FadeTransition from "../Transitions/FadeTransition";

const Products = (props) => {
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
        <Loading />
      </div>
    );
  } else {
    return (
      <FadeTransition>
        <div {...props} className={classes.productsContainer}>
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
      </FadeTransition>
    );
  }
};

export default Products;
