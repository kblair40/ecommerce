import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDispatch } from "react-redux";

import AddToCartButton from "./AddToCartButton";
import { cartActions } from "../store/cartSlice";

const useStyles = makeStyles({
  cardRoot: {
    margin: "1rem .5rem",
    position: "relative",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgRoot: {
    flexGrow: 1,
    cursor: "pointer",
    maxWidth: "100%",
  },
  price: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginBottom: "1.5rem",
    alignSelf: "flex-end",
    flexGrow: 1,
  },
  actionsRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imageimage: {
    maxWidth: "100%",
  },
});

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  handleProductClick,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    handleProductClick(title, price, description, category, image);
  };

  const handleAddToCart = () => {
    dispatch(
      cartActions.addToCart({ id, title, price, description, category, image })
    );
  };

  return (
    <Card classes={{ root: classes.cardRoot }}>
      <CardHeader title={title} />
      <CardMedia
        component="img"
        alt={description}
        image={image}
        title={description}
        classes={{ root: classes.imgRoot }}
        onClick={handleClick}
      />
      <CardContent>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </CardContent>
      <CardActions classes={{ root: classes.actionsRoot }}>
        <AddToCartButton handleAddToCart={handleAddToCart} />
      </CardActions>
    </Card>
  );
};

export default Product;
