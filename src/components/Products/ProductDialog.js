import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { productDialogActions } from "../../store/productDialogSlice";
import { cartActions } from "../../store/cartSlice";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SizesSelect from "./SizesSelect";
import DialogAddToCartBtn from "./DialogAddToCartBtn";
import DialogCloseBtn from "./DialogCloseBtn";

const useStyles = makeStyles({
  addToCart: {
    width: "60%",
  },
  cancel: {
    width: "30%",
  },
  dialogActionsRoot: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  productImage: {
    maxWidth: "60%",
  },
  titleRoot: {
    textAlign: "center",
  },
});

const ProductDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const chosenSize = useSelector((state) => state.cart.chosenSize);

  const isOpen = useSelector((state) => state.detailsDialog.showing);
  const { id, title, price, description, category, image, needsSizes } =
    useSelector((state) => state.detailsDialog.activeProduct);

  const handleClose = () => {
    dispatch(productDialogActions.hideDialog());
    dispatch(cartActions.setSize({ size: undefined }));
  };

  const handleAddToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
        description,
        category,
        chosenSize,
        image,
      })
    );
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      {/* style={{ textAlign: "center" }} */}
      <DialogTitle classes={{ root: classes.titleRoot }}>{title}</DialogTitle>
      <DialogContent>
        {needsSizes && <SizesSelect />}
        <div className={classes.imageContainer}>
          <img className={classes.productImage} src={`${image}`} alt={title} />
        </div>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActionsRoot }}>
        <DialogCloseBtn handleClose={handleClose} />
        <DialogAddToCartBtn handleClick={handleAddToCart} />
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
