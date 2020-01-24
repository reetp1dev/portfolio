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
import Divider from "@material-ui/core/Divider";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Contact from "@material-ui/icons/PermContactCalendarRounded";
import IconButton from "@material-ui/core/IconButton";

const useStyle = makeStyles(theme => ({
  app: {
    backgroundImage: `url(${wallpaper})`,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
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
    padding: 10,
    backgroundColor: "black"
  },
  linkbox: {
    width: 175,
    display: "flex",
    position: "absolute",
    margin: 10,
    marginRight: 30,
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
  },

  profiledetails: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "Column",
    alignItems: "center",
    position: "absolute",
    margin: 30,
    padding: 10,
    bottom: 0,
    right: 0,
    height: 175
  }
}));

function App() {
  const classes = useStyle();
  const preventDefault = event => event.preventDefault();
  return (
    <div className={classes.app}>
      {/* <Box className={classes.mainbox}> */}
      <div className={classes.fablist}>
        <Fab className={classes.fab}></Fab>
        <Fab className={classes.fab}></Fab>
        <Fab className={classes.fab}></Fab>
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
        <IconButton color="inherit">
          <HomeRoundedIcon style={{ fontSize: 50 }} />
        </IconButton>
        <IconButton color="inherit">
          <Contact style={{ fontSize: 50 }} />
        </IconButton>
      </div>
      <div className={classes.profiledetails}>
        <Typography
          variant="h3"
          color="textSecondary"
          style={{ fontFamily: "Gloria Hallelujah", fontWeight: "500px" }}
        >
          UI/UX Engineer
        </Typography>
        <Divider></Divider>

        <Typography
          variant="h3"
          color="textSecondary"
          style={{ fontFamily: "Gloria Hallelujah" }}
        >
          Developer
        </Typography>
        <Divider></Divider>
        <Typography
          variant="h3"
          color="textSecondary"
          style={{ fontFamily: "Gloria Hallelujah" }}
        >
          System Engineer
        </Typography>
      </div>
    </div>
  );
}

export default App;
