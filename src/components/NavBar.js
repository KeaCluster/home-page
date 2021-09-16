import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Input, IconButton } from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";
import "./NavBar.css";

// declare styles
const useStyles = makeStyles((theme) => ({
  root: {
    position: "static",
    backgroundColor: "#ffff",
    color: "black",
  },
}));

const NavBar = () => {
  //Use styles function
  const classes = useStyles();

  //Alert for the location
  const makeAlert = () => {
    alert("Selected location");
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton>
          <LocationOn />
        </IconButton>
        <Input placeholder="Select Location ..." onClick={makeAlert}></Input>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
