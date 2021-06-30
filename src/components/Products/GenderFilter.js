import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  genderFilterContainer: {
    position: "relative",
    top: "4rem",
    left: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "8rem",
  },
  filterRoot: {
    width: "4.5rem",
    background: "transparent",
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
  },
  filterLabel: {
    fontFamily: "Montserrat, sans-serif",
  },
  select: {
    fontFamily: "Montserrat, sans-serif",
    textAlign: "center",
    "&:before": {
      borderBottom: "2px solid #0c0c0d",
      zIndex: 10,
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
  },
});

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
