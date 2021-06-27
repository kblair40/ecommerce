import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import List from "@material-ui/core/List";

import { useStyles } from "../../styles/ProductsStyles";
import GenderFilter from "./GenderFilter";
import Product from "./Product";
import ProductDialog from "./ProductDialog";
import { productDialogActions } from "../../store/productDialogSlice";
import { PRODUCTS } from "../../constants";
import FadeTransition from "../Transitions/FadeTransition";
import Loading from "../../Loading";

const Products = (props) => {
  const params = useParams();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [gender, setGender] = useState("All");

  const dialogShowing = useSelector((state) => state.detailsDialog.showing);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    console.log("CATEGORY:", params.category);
    console.log("GENDER:", gender);
    console.log("PRODUCTS:", PRODUCTS);
    let activeProducts;
    if (params.category !== "home") {
      if (params.category === "clothing") {
        if (gender === "All") {
          console.log("GENDER:", gender);
          activeProducts = PRODUCTS.filter((product) =>
            product.category.includes(params.category)
          );
        } else if (gender === "Female") {
          activeProducts = PRODUCTS.filter(
            (product) => product.gender === "womens"
          );
        } else if (gender === "Male") {
          activeProducts = PRODUCTS.filter(
            (product) => product.gender === "mens"
          );
        } else {
          console.log("NONE OF THE ABOVE");
          setProducts(PRODUCTS);
        }
        console.log("ACTIVE PRODUCTS:", activeProducts);
        setProducts(activeProducts);
        // return;
      } else {
        setProducts(
          PRODUCTS.filter((product) =>
            product.category.includes(params.category)
          )
        );
      }
    } else {
      setProducts(PRODUCTS);
    }

    setLoading(false);
  }, [params.category, gender]);

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

  const filterByGender = (gender) => {
    setGender(gender);
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
          {params.category === "clothing" && (
            <GenderFilter filterByGender={filterByGender} gender={gender} />
          )}

          <List className={classes.productsList}>
            {products.map((prod) => (
              <Product
                key={prod.id}
                id={prod.id}
                title={prod.title}
                price={prod.price}
                gender={prod.category === "clothing" && prod.gender}
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
