import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Input, IconButton } from "@material-ui/core";
import { LocationOn, AccountCircle } from "@material-ui/icons";

// declare styles
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  styledAppBar: {
    position: "static",
    backgroundColor: "#ffff",
    color: "black",
    marginBottom: "1px;",
  },
  inputWrapper: {
    flexGrow: 1,
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
    <div className={classes.root}>
      <AppBar className={classes.styledAppBar}>
        <Toolbar>
          <IconButton onClick={makeAlert}>
            <LocationOn />
          </IconButton>
          <div className={classes.inputWrapper}>
            <Input placeholder="Select Location ..." onClick={makeAlert} />
          </div>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
