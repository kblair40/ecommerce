import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { v4 as uuid } from "uuid";

const styles = {
  selectRoot: {
    padding: 0,
  },
};

const QuantityUpdate = ({
  quantity,
  handleQtyUpdate,
  menuOptions,
  classes,
}) => {
  const [qty, setQty] = useState(quantity);

  const handleChange = (e) => {
    handleQtyUpdate(e.target.value);
    setQty(e.target.value);
  };

  return (
    <Select
      classes={{ root: classes.selectRoot }}
      value={qty}
      displayEmpty={true}
      onChange={handleChange}
    >
      {menuOptions.map((val) => (
        <MenuItem key={uuid()} value={val}>
          {val}
        </MenuItem>
      ))}
    </Select>
  );
};

export default withStyles(styles)(QuantityUpdate);
