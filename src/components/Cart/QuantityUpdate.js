import React, { useState, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {};

const QuantityUpdate = ({ quantity }) => {
  const [qty, setQty] = useState(quantity);

  const setMenuOrder = () => {
    const qtyOptions = [1, 2, 3, 4, 5, 6, 7, 8];
    if (!qtyOptions.includes(quantity)) {
      qtyOptions.push(quantity);
    }
    const chosenQtyIndex = qtyOptions.indexOf(quantity);
    qtyOptions.splice(chosenQtyIndex, 1);
    qtyOptions.unshift(quantity);
    return qtyOptions;
  };

  const handleQtyUpdate = (e) => {
    setQty(e.target.value);
  };

  return (
    <Select
      inputProps={{ "aria-label": "Without label" }}
      defaultValue={qty}
      value={qty}
      displayEmpty={true}
      onChange={handleQtyUpdate}
    >
      {setMenuOrder().map((val) => (
        <MenuItem value={val}>{val}</MenuItem>
      ))}
    </Select>
  );
};

export default withStyles(styles)(QuantityUpdate);
