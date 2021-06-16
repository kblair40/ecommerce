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
  },
  price: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginBottom: "1.5rem",
    alignSelf: "flex-end",
    flexGrow: 1,
  },
  description: {
    fontFamily: "Montserrat",
    marginBottom: "1rem",
  },
  category: {
    fontFamily: "Montserrat",
    textAlign: "right",
    fontSize: ".8rem",
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

const Product = ({ title, price, description, category, image }) => {
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
      />
      <CardContent>
        <div className={classes.price}>${price.toFixed(2)}</div>

        {/* <div className={classes.description}>{description}</div> */}
        {/* <div className={classes.category}>{category}</div> */}
      </CardContent>
      {/* <div className={classes.btnContainer}> */}
      <CardActions classes={{ root: classes.actionsRoot }}>
        <Button
          classes={{ root: classes.btnRoot }}
          variant="outlined"
          //   TouchRippleProps={{classes: {{root: classes.ripple, ripple: classes.ripple}}}}
          //   disableRipple
        >
          add to cart
        </Button>
      </CardActions>
      {/* </div> */}
    </Card>
  );
};

export default Product;
