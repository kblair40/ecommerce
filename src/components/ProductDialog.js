import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { productDialogActions } from "../store/productDialogSlice";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SizesSelect from "./SizesSelect";

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
});

const ProductDialog = () => {
  const classes = useStyles();
  const isOpen = useSelector((state) => state.detailsDialog.showing);
  const { title, price, description, category, image } = useSelector(
    (state) => state.detailsDialog.activeProduct
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(productDialogActions.hideDialog());
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle style={{ textAlign: "center" }}>{title}</DialogTitle>
      <DialogContent>
        <div className={classes.imageContainer}>
          <img className={classes.productImage} src={`${image}`} />
        </div>
        <DialogContentText>{description}</DialogContentText>
        <SizesSelect />
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActionsRoot }}>
        <Button
          color="secondary"
          variant="contained"
          classes={{ root: classes.cancel }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          classes={{ root: classes.addToCart }}
        >
          Add To Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
