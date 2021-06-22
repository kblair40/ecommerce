import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { useStyles } from "../../styles/ProductStyles";
import ReactImageMagnify from "react-image-magnify";

import AddToCartButton from "./AddToCartButton";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  handleProductClick,
  needsSizes,
}) => {
  const classes = useStyles();

  const handleClick = () => {
    handleProductClick(
      id,
      title,
      price,
      description,
      category,
      image,
      needsSizes
    );
  };

  return (
    <Card classes={{ root: classes.cardRoot }}>
      <p onClick={handleClick} className={classes.cardTitle}>
        {title}
      </p>

      <ReactImageMagnify
        {...{
          smallImage: {
            alt: title,
            width: 180,
            height: 240,
            src: image,
          },
          largeImage: {
            src: image,
            width: 400,
            height: 450,
          },
          enlargedImagePosition: "over",
          className: classes.imgRoot,
        }}
      />

      <CardContent>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </CardContent>
      <CardActions classes={{ root: classes.actionsRoot }}>
        <AddToCartButton handleProductClick={handleClick} />
      </CardActions>
    </Card>
  );
};

export default Product;
