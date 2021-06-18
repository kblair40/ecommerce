import React, { useState, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {};

const QuantityUpdate = ({ quantity, handleQtyUpdate }) => {
  const [qty, setQty] = useState(quantity);

  const setMenuOrder = () => {
    const qtyOptions = [1, 2, 3, 4, 5];
    if (!qtyOptions.includes(quantity)) {
      qtyOptions.push(quantity);
    }
    const chosenQtyIndex = qtyOptions.indexOf(quantity);
    qtyOptions.splice(chosenQtyIndex, 1);
    qtyOptions.unshift(quantity);
    return qtyOptions;
  };

  const handleChange = (e) => {
    handleQtyUpdate(e.target.value);
    setQty(e.target.value);
  };

  const menuOptions = setMenuOrder();

  return (
    <Select
      //   defaultValue={qty}
      value={qty}
      displayEmpty={true}
      onChange={handleChange}
    >
      {menuOptions.map((val) => (
        <MenuItem value={val}>{val}</MenuItem>
      ))}
    </Select>
  );
};

export default withStyles(styles)(QuantityUpdate);
