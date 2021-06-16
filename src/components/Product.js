import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
  btnRoot: {
    alignSelf: "flex-end",
    fontFamily: "Montserrat",
    position: "absolute",
    bottom: ".5rem",
    width: "95%",
    right: "2.5%",
    color: "#777",
    "&:hover": {
      background: "#fff",
      color: "#333",
    },
  },
});

const Product = ({
  title,
  price,
  description,
  category,
  image,
  handleProductClick,
}) => {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.cardRoot }}>
      <CardHeader title={title} />
      <CardMedia
        component="img"
        alt={description}
        image={image}
        title={description}
        classes={{ root: classes.imgRoot }}
        onClick={handleProductClick}
      />
      <CardContent>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </CardContent>
      <CardActions classes={{ root: classes.actionsRoot }}>
        <Button classes={{ root: classes.btnRoot }} variant="outlined">
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
