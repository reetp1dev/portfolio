import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import codeicon from "./code.png";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

const useStyle = makeStyles(theme => ({
  app: {
    backgroundColor: "#6498ff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  appbar: {
    height: "64px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  intro: {
    fontSize: "2rem",
    fontFamily: "cursive",
    color: "white"
  }
}));

function App() {
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <AppBar className={classes.appbar}>
        <Typography className={classes.intro}>Welcome</Typography>
      </AppBar>
      <Typography className={classes.intro}>Hello, I'm Reet!</Typography>
    </div>
  );
}

export default App;
