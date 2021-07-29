import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import useStyles from "./styles";

const GenderFilter = ({ filterByGender, gender }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    filterByGender(e.target.value);
  };

  return (
    <div className={classes.genderFilterContainer}>
      <p className={classes.filterLabel}>Gender: </p>
      <Select
        onChange={handleChange}
        className={classes.select}
        classes={{ root: classes.filterRoot }}
        displayEmpty={true}
        defaultValue="All"
        value={gender}
      >
        <MenuItem key="All" value="All">
          All
        </MenuItem>
        <MenuItem key="Male" value="Male">
          Male
        </MenuItem>
        <MenuItem key="Female" value="Female">
          Female
        </MenuItem>
      </Select>
    </div>
  );
};

export default GenderFilter;
