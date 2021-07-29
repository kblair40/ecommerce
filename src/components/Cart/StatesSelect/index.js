import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { MURICA } from "../../../utils/constants";

const StatesSelect = () => {
  return (
    <Select style={{ color: "#0c0c0d" }} defaultValue="AK">
      {MURICA.map((state) => (
        <MenuItem value={state}>{state}</MenuItem>
      ))}
    </Select>
  );
};

export default StatesSelect;
