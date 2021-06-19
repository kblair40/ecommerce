import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDispatch } from "react-redux";
import ReactImageMagnify from "react-image-magnify";

import AddToCartButton from "./AddToCartButton";
import { cartActions } from "../store/cartSlice";
import { BREAKPOINTS } from "../constants";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontSize: "1.2rem",
    fontFamily: "Montserrat",
    fontWeight: 600,
    margin: ".5rem",
    textAlign: "center",
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

  cardRoot: {
    margin: "1rem .5rem",
    position: "relative",
    width: "22%",
    minWidth: "190px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      width: "45%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
    [theme.breakpoints.up("md")]: {
      width: "22%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "16%", // test this on external monitor
    },
  },
}));

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
  const classes = useStyles(BREAKPOINTS);
  const dispatch = useDispatch();

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

  const handleAddItemtoCart = () => {
    dispatch(
      cartActions.addToCart({
        chosenSize: undefined,
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
  return (
    <Card classes={{ root: classes.cardRoot }}>
      <p className={classes.cardTitle}>{title}</p>

      <ReactImageMagnify
        {...{
          smallImage: {
            alt: { title },
            width: 200,
            height: 250,
            // isFluidWidth: true,
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
      {/* <img
        src={image}
        alt={title}
        className={classes.imgRoot}
        onClick={handleClick}
      /> */}

      <CardContent>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </CardContent>
      <CardActions classes={{ root: classes.actionsRoot }}>
        <AddToCartButton handleAddItemtoCart={handleAddItemtoCart} />
      </CardActions>
    </Card>
  );
};

export default Product;
