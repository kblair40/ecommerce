import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  genderFilterContainer: {
    position: "relative",
    top: "2.5rem",
    left: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "8rem",
  },
  filterRoot: {
    width: "3.5rem",
    fontFamily: "Montserrat, sans-serif",
    textAlign: "center",
    "&:after": {
      borderColor: "red",
    },
    "&:focus:after": {
      borderColor: "red",
    },
    "&:focus": {
      borderColor: "red",
    },
  },
  filterLabel: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const GenderFilter = ({ filterByGender, gender }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    console.log("VAL:", e.target.value);
    filterByGender(e.target.value);
  };

  return (
    <div className={classes.genderFilterContainer}>
      <p className={classes.filterLabel}>Filter: </p>
      <Select
        onChange={handleChange}
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
