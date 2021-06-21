import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { MURICA } from "../../constants";

const Murica = () => {
  return (
    <Select style={{ color: "#0c0c0d" }} defaultValue="AK">
      {MURICA.map((state) => (
        <MenuItem value={state}>{state}</MenuItem>
      ))}
    </Select>
  );
};

export default Murica;
