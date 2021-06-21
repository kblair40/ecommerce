import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { productDialogActions } from "../../store/productDialogSlice";
import { cartActions } from "../../store/cartSlice";
import { useStyles } from "../../styles/ProductDialogStyles";
import SizesSelect from "./SizesSelect";
import DialogAddToCartBtn from "./DialogAddToCartBtn";
import DialogCloseBtn from "./DialogCloseBtn";

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
    if (needsSizes && !chosenSize) {
      dispatch(cartActions.setError());
      setTimeout(() => {
        dispatch(cartActions.removeError());
      }, 2500);
      return;
    }
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
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle
        disableTypography={true}
        classes={{ root: classes.titleRoot }}
      >
        {title}
      </DialogTitle>
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
