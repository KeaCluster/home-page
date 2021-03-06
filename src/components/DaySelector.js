import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  daysWrapper: {
    backgroundColor: "#fff",
  },
  toolBar: {
    justifyContent: "center",
  },
  day: {
    margin: "10px",
    fontSize: "12px",
  },
  inactiveButton: {
    backgroundColor: "#fff",
    color: "black",
    fontSize: "12px",
  },
  activeButton: {
    backgroundColor: "#FDC963",
    color: "#fff",
    fontSize: "12px",
  },
}));

// I based most of this code from stackoverflow
// Another way of saying it was mostly ctrl+c & ctrl+v

const DaySelector = () => {
  const classes = useStyles();

  //Button handler
  // Set state to handle "first" attrib
  const [activeButton, setActiveButton] = useState("first");

  // Switch state in case of click
  const activeButtonHandler = (e) => {
    const { name } = e.target;
    setActiveButton(name);
  };

  // I wouldnt do all these buttons, just a single reusable,
  //but I had no dates API to map.from as well as no time

  return (
    <div className={classes.daysWrapper}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.day}>
          <p style={{ alignContent: "center" }}>Sun</p>
          <IconButton
            name="first"
            className={
              activeButton === "first"
                ? `${classes.activeButton}`
                : `${classes.inactiveButton}`
            }
            onClick={activeButtonHandler}
          >
            24
          </IconButton>
        </div>

        <div className={classes.day}>
          <p>Mon</p>
          <IconButton
            name="second"
            className={
              activeButton === "second"
                ? `${classes.activeButton}`
                : `${classes.inactiveButton}`
            }
            onClick={activeButtonHandler}
          >
            25
          </IconButton>
        </div>
        <div className={classes.day}>
          <p>Tue</p>
          <IconButton
            name="third"
            className={
              activeButton === "third"
                ? `${classes.activeButton}`
                : `${classes.inactiveButton}`
            }
            onClick={activeButtonHandler}
          >
            26
          </IconButton>
        </div>
        <div className={classes.day}>
          <p>Wed</p>
          <IconButton
            name="fourth"
            className={
              activeButton === "fourth"
                ? `${classes.activeButton}`
                : `${classes.inactiveButton}`
            }
            onClick={activeButtonHandler}
          >
            27
          </IconButton>
        </div>
        <div className={classes.day}>
          <p>Thu</p>
          <IconButton
            name="fifth"
            className={
              activeButton === "fifth"
                ? `${classes.activeButton}`
                : `${classes.inactiveButton}`
            }
            onClick={activeButtonHandler}
          >
            28
          </IconButton>
        </div>
        <div className={classes.day}>
          <p>Fry</p>
          <IconButton
            name="sixth"
            className={
              activeButton === "sixth"
                ? `${classes.activeButton}`
                : `${classes.inactiveButton}`
            }
            onClick={activeButtonHandler}
          >
            29
          </IconButton>
        </div>
        <div className={classes.day}>
          <p>Sat</p>
          <IconButton
            name="seventh"
            className={
              activeButton === "seventh"
                ? `${classes.activeButton}`
                : `${classes.inactiveButton}`
            }
            onClick={activeButtonHandler}
          >
            30
          </IconButton>
        </div>
      </Toolbar>
    </div>
  );
};

// src https://stackoverflow.com/questions/65921267/change-color-of-active-button-among-multiple-buttons-in-react-using-material-ui
export default DaySelector;
