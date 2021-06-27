import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ReactImageMagnify from "react-image-magnify";
import AddToCartButton from "./AddToCartButton";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    color: "#0c0c0d",
    fontSize: "1.2rem",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    margin: ".5rem",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  imgRoot: {
    flexGrow: 1,
    cursor: "pointer",
    maxWidth: "100%",
  },
  price: {
    fontWeight: "bold",
    fontFamily: "Montserrat, sans-serif",
    marginBottom: "1.5rem",
    alignSelf: "flex-end",
    color: "#0c0c0d",
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
    minWidth: "160px",
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
      width: "18%",
    },
  },
}));

const Product2 = ({
  id,
  title,
  price,
  description,
  category,
  image,
  handleProductClick,
  needsSizes,
  specialDims,
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
            // isFluidWidth: true,
            width: 180, // originally 180
            height: 240, // originally 240
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

export default Product2;
