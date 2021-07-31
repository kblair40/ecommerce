import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { cartActions } from "../../../../store/cartSlice";
import useStyles from "./styles";

const QuantityUpdate = ({ quantity, menuOptions, id, price }) => {
  const classes = useStyles();
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();

  const handleQtyUpdate = (qty) => {
    dispatch(cartActions.updateQty({ id, price, newQty: qty }));
  };

  const handleChange = (e) => {
    handleQtyUpdate(e.target.value);
    setQty(e.target.value);
  };

  return (
    <div className={classes.qtyUpdateContainer}>
      <p className={classes.qtyText}>Qty:</p>
      <Select
        className={classes.selectRoot}
        value={qty}
        displayEmpty={true}
        onChange={handleChange}
        autoWidth
      >
        {menuOptions.map((val) => (
          <MenuItem key={uuid()} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default QuantityUpdate;
