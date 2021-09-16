import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Input, IconButton } from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";

// declare styles
const useStyles = makeStyles(() => ({
  root: {
    position: "static",
    backgroundColor: "#ffff",
    color: "black",
    marginBottom: "1px;",
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
        <IconButton onClick={makeAlert}>
          <LocationOn />
        </IconButton>
        <Input placeholder="Select Location ..." onClick={makeAlert}></Input>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
