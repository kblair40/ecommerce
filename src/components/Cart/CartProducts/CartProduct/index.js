import React from "react";

import useStyles from "./styles";

const ProductImage = React.memo(({ src, title }) => {
  const classes = useStyles();
  console.log("Image Rerender");

  return <img className={classes.cartItemImage} src={src} alt={title} />;
});

const CartProduct = ({ id, price, image, category, title, chosenSize }) => {
  const classes = useStyles();

  console.log("product rerender");

  return (
    <div className={classes.itemContainer}>
      <div className={classes.mainInfoContainer}>
        <div className={classes.cartItemImageContainer}>
          <ProductImage src={image} title={title} />
        </div>
        <div className={classes.mainInfo}>
          <p className={classes.itemTitle}>{title}</p>
          <div className={classes.mainInfoSubContainer}>
            {chosenSize && (
              <p className={classes.info}>Size: {chosenSize.toUpperCase()}</p>
            )}
            <p className={classes.info}>{category}</p>
            <p className={classes.info}>SKU #{id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartProduct);
