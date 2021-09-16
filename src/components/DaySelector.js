import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Container } from "@material-ui/core";
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
  activeButton: {
    backgroundColor: "#FDC963",
    color: "#fff",
  },
}));

const DaySelector = () => {
  const classes = useStyles();

  //Button handler
  const [activeButton, setActiveButton] = useState("first");

  const activeButtonHandler = (e) => {
    const { name } = e.target;
    setActiveButton(name);
  };

  return (
    <Container className={classes.daysWrapper}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.day}>
          <p style={{ alignContent: "center" }}>Sun</p>
          <IconButton
            name="first"
            className={
              activeButton === "first" ? `${classes.activeButton}` : ""
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
              activeButton === "second" ? `${classes.activeButton}` : ""
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
              activeButton === "third" ? `${classes.activeButton}` : ""
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
              activeButton === "fourth" ? `${classes.activeButton}` : ""
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
              activeButton === "fifth" ? `${classes.activeButton}` : ""
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
              activeButton === "sixth" ? `${classes.activeButton}` : ""
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
              activeButton === "seventh" ? `${classes.activeButton}` : ""
            }
            onClick={activeButtonHandler}
          >
            30
          </IconButton>
        </div>
      </Toolbar>
    </Container>
  );
};

export { DaySelector };
