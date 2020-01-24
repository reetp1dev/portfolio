import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import wallpaper from "./wallpaper.png";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyle = makeStyles(theme => ({
  app: {
    backgroundImage: `url(${wallpaper})`,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 0,
    padding: 0,
    fontFamily: "Gloria Hallelujah"
  },

  mainbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },

  fablist: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    position: "absolute",
    left: 0
  },

  fab: {
    margin: 50,
    padding: 10
  },
  linkbox: {
    width: 200,
    display: "flex",
    position: "absolute",
    margin: 10,
    padding: 10,
    top: 0,
    right: 0,
    justifyContent: "space-around"
  },

  titlebox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },

  titlelink: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    width: 200
  }
}));

function App() {
  const classes = useStyle();
  const preventDefault = event => event.preventDefault();
  return (
    <div className={classes.app}>
      {/* <Box className={classes.mainbox}> */}
      <div className={classes.fablist}>
        <Fab color="primary" className={classes.fab}></Fab>
        <Fab color="primary" className={classes.fab}></Fab>
        <Fab color="primary" className={classes.fab}></Fab>
      </div>
      <div className={classes.titlebox}>
        <Typography
          variant="h2"
          style={{
            color: "white",
            marginLeft: "25px",
            fontFamily: "Gloria Hallelujah",
            fontWeight: 1000,
            fontSize: 90
          }}
        >
          Hello, I'm Reet !
        </Typography>
        <div className={classes.titlelink}>
          <Link color="inherit" href="https://www.github.com/reetp1dev">
            <GitHubIcon style={{ fontSize: 50 }} />
          </Link>
          <Link color="inherit" href="https://www.linkedin.com/in/reetp1/">
            <LinkedInIcon style={{ fontSize: 50 }} />
          </Link>
          <Link color="inherit" href="https://www.fb.com/reetp1">
            <FacebookIcon style={{ fontSize: 50 }} />
          </Link>
        </div>
      </div>
      {/* </Box> */}
      <div className={classes.linkbox}>
        <Link href="/home">
          <Typography variant="h6">Home</Typography>
        </Link>
        <Link href="/contact">
          <Typography variant="h6">Contact</Typography>
        </Link>
      </div>
    </div>
  );
}

export default App;
